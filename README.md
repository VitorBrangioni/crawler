## Processo de recrutamento
Olá desenvolvedor, pronto para participar do nosso
processo de recrutamento para vaga de desenvolvimento backend?


### Requisitos
Requisitos para a vaga, conhecimentos em:

- Javascript ES7
- Node.js

### O Desafio
Neste repositório está implementada a simulação simplificada de Crawler em Javascript. Este desafio é semelhante aos desafios que você terá no dia a dia de desenvolvimento.

Na pasta "assets" estão os arquivos de um página que queremos extrair informações. Você pode olhar o código desta página para entender como as informações estão lá dentro.

Queremos extrair desta página:
* A quantidade total de internet que o plano oferece
* A quantidade total de minutos
  * utilizar -1 para identificar minutos ilimitados
  * lembre-se que em uma situação real, o mesmo crawler será utilizado para fazer o parse de vários planos. Desta forma, assim ele deve ter testar o texto com informações de minutos e identificar se encontra um texto com minutos ilimitados ou um número com a quantidade de minutos
* O preço do plano
* Uma lista de outros benefícios como "SMS ilimitados", "Roaming", "Celular Reserva", etc

Neste desafio, o HTML da página alvo já está sendo carregado utilizando uma biblioteca chamada cheerio (https://cheerio.js.org/). Esta biblioteca é bastante similar a jquery, e informações podem ser extraidas facilmente do HTML. Veja os exemplos no site da biblioteca.

Seu objetivo é fazer as funções do crawler retornarem as informações listadas acima.

### Como executar o código
* Fazer o clone do codigo
* Instalar as bibliotecas utilizadas pelo Node.js com o comando `npm install`
* Leia atentamente os comentários das funções e finalize o parse onde está marcado com comentários de `TODO`


### Estilo de código
Recomendamos utilizar funções curtas e classes coesas, minimizando o acomplamento entre funções e classes utilizadas. Este é um bom guia: https://www.youtube.com/watch?v=UjhX2sVf0eg

For facilidade de Debug do projeto, recomendamos o uso do VS Code como ferramente de desenvolvimento. Mas fique a vontade para usar a ferramente que você gostar mais! :)


### Entrega
Fazer um fork e nos passar o link da resolução do desafio no github

Qualquer dúvida entre em contato com nossa equipe.

BOM TRABALHO!
