# Relações em SQL

___

### Exercício 1

a) Explique o que é uma chave estrangeira
> Uma chave estrangeira é uma chave que faz referência a uma chave de outra tabela.

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
```
INSERT INTO Rating VALUES(
	'001',
    'Melhor que isso só dois disso',
    10,
    '004'
)
```

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
> É retornado um erro pois não é possível fazer referência a uma chave que não existe.

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
```
ALTER TABLE Filmes DROP COLUMN score;
```

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
> Não é possível deletar uma registro que tenha uma relacionamento com outra tabela;


### Exercício 2

a) Explique, com as suas palavras, essa tabela
> Essa é uma tabela com apenas duas colunas, ambas são chaves estrangeiras, ou seja, fazem referência a um registro de outra tabela.

b) Crie, ao menos, 6 relações nessa tabela 
```
INSERT INTO MovieCast VALUES ('001', '002'),
    ('001', '005'),('003', '004'),('003', '005'),
    ('004', '002'),('004','004')
```

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
> É retornado um erro pois não é possível fazer referência a uma chave que não existe.

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
> Não é possível deletar uma registro que tenha uma relacionamento com outra tabela;

### Exercício 3
a) Explique, com suas palavras, a query acima. O que é o operador ON?
> A query busca e junta os dados das duas tabelas, o ON deve vir sempre antes da condição que vai limitar a busca, por exemplo: mostrar os dados das duas tabelas, mas somente qunado uma chave dessa tabela for igual ao da outra.

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
`SELECT Filmes.id, Filmes.nome, Rating.rate FROM Filmes JOIN Rating ON Filmes.id = Rating.movie_id;`