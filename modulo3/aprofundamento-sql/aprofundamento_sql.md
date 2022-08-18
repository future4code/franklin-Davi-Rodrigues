# Aprofundamento SQL

___

### Exercício 1
##### Leia os comandos abaixo e indique o que eles fazem.

a) ```ALTER TABLE Actor DROP COLUMN salary;```

> Remove a coluna `salary` da tabela

b) `ALTER TABLE Actor CHANGE gender sex VARCHAR(6);`

> Altera o nome da coluna `gender` para `sex`

c) `ALTER TABLE Actor CHANGE gender gender VARCHAR(255);`

> Muda a quantidade de cacteres aceitos pela coluna, de 6 para 255

d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

> `ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`

### Exercício 2

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

> `UPDATE Actor SET birth_date = '1929-10-20' WHERE id = '003';`

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

> `UPDATE Actor SET name = UPPER(name) WHERE name = 'Juliana Paes';`
`UPDATE Actor SET name = 'Juliana Paes' WHERE name = 'JULIANA PAES';`

c) Escreva uma query que atualize todas as informações do ator com o id 005

```
UPDATE Actor SET 
name = "Moacyr Franco",
birth_date = "1936-10-05",
salary = 600000,
gender = "male"
WHERE id = "020";
```

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 

> A atualização só será feita se o valor do WHERE for encontrado, caso seja inválido, ele simplesmente não altera nem uma coluna.

### Exercício 3

a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro

> `DELETE FROM Actor WHERE name = 'Fernanda Montenegro';`

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

> `DELETE FROM Actor WHERE gender = 'male' AND salary > 1000000;`

### Exercício 4

a) Escreva uma query que pegue o maior salário de todos os atores e atrizes

> `SELECT MAX(salary) AS 'salary' FROM Actor;`

b) Escreva uma query que pegue o menor salário das atrizes

> `SELECT MIN(salary) AS 'salary' FROM Actor WHERE gender = 'female';`

c) Escreva uma query que pegue a quantidade de atrizes

> `SELECT COUNT(*) AS 'qtd_atrizes' FROM Actor WHERE gender = 'female';`

d) Escreva uma query que pegue a soma de todos os salários

> `SELECT SUM(salary) as'soma_dos_salarios' FROM Actor;`

### Exercício 5

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras

> Ela retorta a quantidade a quantidade de atores, agrupando-os por gênero. Uma sugestão de melhoria seria utilizar o comando `AS` para modificar o nome da coluna.

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética.

> `SELECT name, id FROM Actor ORDER BY name DESC;`

c) Faça uma query que retorne todos os atores ordenados pelo salário.

> `SELECT * FROM Actor ORDER BY salary;`

d) Faça uma query que retorne os atores com os três maiores salarios

> `SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;`

e) Faça uma query que retorne a média de salário por gênero

> `SELECT AVG(salary) AS 'media', gender FROM Actor GROUP BY gender;`

### Exercício 6

a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

> `ALTER TABLE Filmes ADD playing_limit_date DATE;`

b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.

> `ALTER TABLE Filmes CHANGE score score FLOAT;`

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

> `UPDATE Filmes SET playing_limit_date = '2022-08-22' WHERE id = '001';`
`UPDATE Filmes SET playing_limit_date = '2022-08-12' WHERE id = '002';`

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

> Nem um erro é retornado, simplismente nada é alterado já que nem um dos registros da tabela atende aos requisitos da query.