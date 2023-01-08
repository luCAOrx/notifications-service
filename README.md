<h1 align="center">
  <img src=".github/assets/logo-ignite-lab-nodejs.svg" width="400" alt="Ignite Lab NodeJS logo" />
</h1>

<p align="center">
  <a href="#descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#conteúdo-técnico-aprendido">Conteúdo técnico aprendido</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#inicializando">Inicializando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <br/>
  <a href="#executando-a-aplicação">Executando a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#documentação-da-api">Documentação da API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#teste">Teste</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#comandos-do-docker-compose">Comandos do docker-compose</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

## Descrição
Micro serviço de notificações, construído durante o evento Ignite Lab Node.js, fornecido pela [Rocketseat](https://www.rocketseat.com.br/)
 
## Conteúdo técnico aprendido
- [DDD](https://khalilstemmler.com/articles/domain-driven-design-intro/)
- [TDD](https://khalilstemmler.com/articles/test-driven-development/introduction-to-tdd/)
- [SOLID](https://www.youtube.com/watch?v=vAV4Vy4jfkc)
- [Value Objects](https://khalilstemmler.com/articles/typescript-value-object/)
- [In Memory Database](https://www.martinfowler.com/bliki/InMemoryTestDatabase.html)
- [Dependency Injection](https://martinfowler.com/articles/injection.html)
- [Factory Pattern](https://www.digitalocean.com/community/tutorials/js-factory-pattern)
 
## Tecnologias
- [Node.js LTS](https://nodejs.org/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [KafkaJS](https://kafka.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [JestJS](https://jestjs.io/)
- [Supertest](https://github.com/ladjs/supertest#readme)

## Requisitos
- [Node.js LTS](https://nodejs.org/pt-br/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Inicializando

### Subir os containers do docker
```bash
$ sudo make up
```

### Criar o tópico no kafka
```bash
$ sudo make create-kafka-consumer-topic 
```

### Instalar as dependências
```bash
$ npm install
```

## Executando a aplicação

### modo de desenvolvimento
```bash
$ npm run start
```

### modo de observação
```bash
$ npm run start:dev
```

### modo de produção
```bash
$ npm run start:prod
```

### enviando uma mensagem com kafka
```bash
$ npm run start:dev:producer 
```

## Documentação da API
Inicie o servidor em modo de desenvolvimento
```bash
$ npm run start:dev
```
e [acesse](http://localhost:3000/api-docs)

## Teste

### testes unitários
```bash
$ npm run test
```

### testes e2e (ponta à ponta)
```bash
$ npm run test:e2e
```

### cobertura de testes
```bash
$ npm run test:cov
```

## Comandos do docker-compose
### Subir os containers
```bash
$ sudo make up
```

### Listar os containers
```bash
$ sudo make list-containers
```

### Remover os containers
```bash
$ sudo make down
```

### Kafka
#### Consumidor
##### Subir o container
```bash
$ sudo make start-kafka-consumer
```

##### Criar o tópico
```bash
$ sudo make create-kafka-consumer-topic 
```

##### Listar tópicos
```bash
$ sudo make list-kafka-consumer.topic 
```

##### Mostrar os logs
```bash
$ sudo make logs-kafka-consumer
```

##### Reiniciar o container
```bash
$ sudo make restart-kafka-consumer
```

##### Parar o container
```bash
$ sudo make stop-kafka-consumer
```

#### Zookeeper
##### Subir o container
```bash
$ sudo make start-kafka-zookeeper 
```

##### Mostrar os logs
```bash
$ sudo make logs-kafka-zookeeper
```

##### Reiniciar o container
```bash
$ sudo make restart-kafka-zookeeper
```

##### Parar o container
```bash
$ sudo make stop-kafka-zookeeper
```

#### Banco de dados
##### Subindo o container
```bash
$ sudo make start-database
```

##### Mostrar os logs
```bash
$ sudo make logs-database
```

##### Reiniciar o container
```bash
$ sudo make restart-database 
```

##### Parar o container
```bash
$ sudo make stop-database 
```
  
## Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
