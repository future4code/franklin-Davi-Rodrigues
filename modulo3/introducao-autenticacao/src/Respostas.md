# Introdução a Autenticação

### Exercício 1

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

> Sim, pois com strings é possível gerar ids mais complexos.

### Exercício 2

a) Explique o código acima com as suas palavras.

> O código utiliza o knex para estabelecer conexão com o banco de dados, em seguida um usuário com id, email e senha é criado.

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

```
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### Exercício 3

a) Garante que a variável vai ser lida como string
