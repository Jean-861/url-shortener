# API Node.js utilizando TypeScript, Swagger e MongoDB
> API Criada com a inteção de encurtar a URL.

## Instalação
1. ```yarn```
2. Criar um arquivo ".env" e adicionar as váriáveis.
Exemplo:

```sh
MONGO_URL=`mongodb://localhost:27017/url_system`
PORT=8081
LINK_APP=http://localhost:8081/
```
3. Para subir a aplicação em modo dev utilize o comando:
```yarn dev```
4. Para subir a aplicação em modo prod utilize o comando:
```yarn build```
```yarn start```

## Exemplo de Uso
Pode-se visualizar a documentação após subir a aplicação no link.

[http://localhost:8081/docs/](http://localhost:8081/docs/)


Para o uso da API é necessário enviar uma requisição "POST" para:

[http://localhost:8081/encurtar](http://localhost:8081/docs/)

Passando como parametro no "body" da requisição o seguinte JSON:

```sh
{
  "url": "http://url.com"
}
```

Após o request a aplicação vai salvar a url no Banco de Dados e retornar uma nova URL que aponta para a aplicação com uma "Hash" no final e uma data de vencimento do link.

```sh
{
  "newUrl"  : "http://localhost:8081/d2fc8fcecf",
  "dueDate" : "2020-05-25T01:40:32.718Z"
}
```
