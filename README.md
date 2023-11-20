# WK Consultas

Aplicação em angular que tem como objetivo exibir os dados para consulta de pessoas do banco de sangue.

## Rodando a aplicação

### Pré requisitos:
```text
* Node
* Docker
* Angular CLI
```

## Desenvolvimento

Para instalar o Angular CLI execute o comando abaixo:
``` npm install -g @angular/cli ```

Para rodar a aplicação em modo de desenvolvimento basta navegar até a raiz do diretório e rodar o seguinte comando:

`ng serve`

Logo após acessar o seguinte endereço no broswer:
`http://localhost:4200/`


## Build

Para gerar um build com os artefatos basta executar o seguinte comando:

`ng build`

Os artefatos serão gerados no diretório `dist/`

## Docker

Para rodar a aplicação local de maneira fácil foi criado um arquivo docker-compose.yml na raiz do projeto.

Para criar o container com a aplicação execute o seguinte comando:
`docker compose up -d`

Para destruir o container criado anteriormente execute o seguinte comando:
`docker compose down`

### Para acessar a aplicação basta entrar no seguinte endereço: `http://localhost:7979/`

