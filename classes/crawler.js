"use strict";

const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

module.exports = class Crawler {
    constructor() {
        const html = this.retrieveHtml()
        const $ = this.parseHtmlToCheerio(html)

        const parsedPlan = this.parsePlan($)

        return parsedPlan
    }

    /**
     * Get html contents from assets directory
     * 
     * @return html source content
     */
    retrieveHtml() {
        const html = fs.readFileSync('./assets/plano.html', 'utf-8')
        return html
    }

    /**
     * Get source html and parse to cheerio,
     * to manipulate the html using jquery functions
     * 
     * @param {*} html
     * @return html parsed to cheerio
     */
    parseHtmlToCheerio(html) {
        const $ = cheerio.load(html)
        return $
    }

    /**
     * Parse the html, and return plan parsed
     * 
     * @param {*} $
     * @return json formatted plan
     */
    parsePlan($) {
        const planInformationParsed = this.parsePlanInformation($)
        const planBenefitsParsed = this.parsePlanBenefits($)

        return {
            ...planInformationParsed,
            benefits: planBenefitsParsed
        }
    }

    /**
     * Loop the list and parse the data using regex
     * 
     * @param {*} $ 
     * @return formatted JSON
     */
    parsePlanInformation($) {
        const planInfo = {
            name: null,
            price: null,
            internet: null,
            minutes: null,
        }
        const regexToGetInternet = new RegExp('(?=.*internet.*)(?=.*[0-9]gb.*)', 'i')
        const regexToIlimitedCall = new RegExp('(?=.*ilimitad.*)(?=.*liga.*|.*fal.*)', 'i')
        const regexToMinutes = new RegExp('(?=.*min.*)(?=.*liga.*|.*fal.*)', 'i')

        const setMinutes = function (element) {
            if (element != null && $(element).text().match(regexToIlimitedCall) != null) {
                planInfo.minutes = -1
            } else if ($(element).text().match(regexToMinutes) != null) {
                planInfo.minutes = $(element).text().match(new RegExp('[0-9]+', 'i'))[0]
            }
        }

        const setInternet = function (element) {
            planInfo.internet = ($(element).text().match(regexToGetInternet) != null)
                ? $(element).text().match(new RegExp('[0-9]+gb', 'i'))[0] : null
        }

        $('.notMobile').each(function () {
            planInfo.name = $(this).first().find('[name=plano]').val()
            planInfo.price = $(this).first().find('[name=plano-valor]').val()

            $(this).find('ul').first().find('li').each((i, element) => {
                setInternet(element)
                setMinutes(element)
            });
        })
        return planInfo
    }

    /**
     * Loop benefits list and parse data using regex
     * 
     * @param {*} $ 
     * @return array with all benefits
     */
    parsePlanBenefits($) {
        var benefits = []
        $('.notMobile').find('ul').last().find('li').each((i, element) => {
            const benefit = $(element).text().trim()
            benefits.push(benefit)
        })

        return benefits
    }
}