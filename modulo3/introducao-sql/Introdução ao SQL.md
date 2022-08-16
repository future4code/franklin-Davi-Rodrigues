# Introdução ao SQL

___

### Exercício 1
a) Nesta tabela, utilizamos o ```FLOAT``` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

> Na query temos o comando ```CREATE TABLE``` que como o próprio nome já diz, cria uma tabela. Outros comandos que podemos observar é o ```NOT NULL```, que server para impedir valores nulos naquela coluna, e o ```PRIMARY KEY```, que define uma chave primária. Além disso, assim como o tipo ```FLOAT```, citado no enunciado, temos os seguintes tipos na query: ```VARCHAR``` e ```DATE```.

b) O comando ```SHOW``` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: ```SHOW DATABASES``` e ```SHOW TABLES```. Explique os resultados.

> O comando ```SHOW DATABASES``` retorna os nomes de todas as bases de dados contidas no banco, o ```SHOW TABLES``` faz o mesmo só que para as tabelas.

c) O comando ```DESCRIBE``` pode ser usado para ver estrutura de uma tabela. Utilize o comando  ```DESCRIBE Actor``` e explique os resultados.

> O comando retorna informações sobre o as configuraçôes das colunas da tabela. Com isso podemos saber o tipo da coluna, se é uma PK ou não, se ppode ser nulo etc.

### Exercício 2

a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

> A mensagem de erro apresentada é a seguinte: ```Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'```; Esse erro ocorre porque as chaves primárias devem ser únicas.

c) 

> O erro retornado foi: ```Error Code: 1136. Column count doesn't match value count at row 1```; Esse erro ocorreu porque ocorreu a tentativa de inserir valores em colunas que não foram "chamdas" no comando ```INSERT```. O correto seria:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d)

> O erro retornado é o seguinte: ```Error Code: 1364. Field 'name' doesn't have a default value```; Ele ocorre pois a colona de nome não pode ser nula. Para corrigir isso, devemos adicionar um nome.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e)

> O erro ocorre porque a data de nascimento deve estar entre aspas. O correto seria:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### Exercício 3

a) Escreva uma query que retorne todas as informações das atrizes.

> ```SELECT * FROM Actor WHERE gender = 'female';```

b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos

> ```SELECT salary FROM Actor WHERE name LIKE "Tony Ramos";```

c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

> A query não retornou nada, pois não existem valores inválidos nessa coluna.

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

> ```SELECT id, name, salary FROM Actor WHERE salary <= 500000;```

e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

> O erro ocorre pois foi solicitado dados de uma coluna chamada 'nome', mas essa coluna não existe. O correto seria: ```SELECT id, name from Actor WHERE id = "002"```.

### Exercício 4

a) Explique com as suas palavras a query acima

> Com ```name LIKE "A%" OR name LIKE "J%"```, a query busca por atores que tenham o nome iniciado em 'A' ou em 'J'. O ```%``` serve como reticências. É utilizado o operador lógico ```OR``` para que apenas um dos casos precise ser verdade. A segunda parte da query, ```AND salary > 300000``` garante que além de do nome do ator começar com 'A' ou 'J', seu salário vai ser maior que 300.000.

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00.

> ```SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000```

c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 

> ```SELECT * FROM Actor WHERE name  LIKE "%j%";```

d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00.

> ``` SELECT * FROM Actor WHERE (name  LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;```

### Exercício 5

a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

```
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    score SMALLINT NOT NULL
);
```

b)

```
INSERT INTO Filmes VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

c)
```
INSERT INTO Filmes VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

d)
```
INSERT INTO Filmes VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)
```
INSERT INTO Filmes VALUES (
	"004",
    "O Auto da Compadecida",
    "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna.",
    "2000-09-10",
    10
);
```

### Execicício 6

a) Retorne o id, título e avaliação a partir de um id específico;

> ```Retorne o id, título e avaliação a partir de um id específico;```

b) Retorne um filme a partir de um nome específico;

> ```SELECT * FROM Filmes WHERE nome = 'O Auto da Compadecida';```

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

> ```SELECT id, nome, sinopse FROM Filmes WHERE score > 7;```

### Exercício 7

a) Retorna um filme cujo título contenha a palavra vida

>  ```SELECT * FROM Filmes WHERE nome LIKE "%vida%";```


b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

>  ```SELECT * FROM Filmes WHERE nome LIKE "%acontece%" OR sinopse LIKE "%acontece%";```

c) Procure por todos os filmes que já tenham lançado

> ```SELECT * FROM Filmes WHERE data_lancamento < "2021-08-16";```

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7

> ```SELECT * FROM Filmes WHERE data_lancamento < "2021-08-16" AND (nome LIKE "%uma%" OR sinopse LIKE "%uma%") AND score > 7;```