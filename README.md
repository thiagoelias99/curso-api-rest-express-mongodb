# curso-api-rest-express-mongodb

Olá, esta API esta sendo desenvolvida com intuito de estudar e aplicar técnicas de desenvolvimento full-stack.

O objetivo da API é cadastramento fictício de Clientes e Contas, com relacionamentos entre eles.

Utilizando como base TypeScript com Express e MongoDB; e paradigmas de orientação a objetos e funcional com padrão MVC-REST

## Rota "clients"
- GET	/clients	Retorna uma lista de todos os clientes.
- POST	/clients	Cria um novo cliente.
- GET	/clients/:id	Retorna um cliente específico.
- PUT	/clients/:id	Atualiza um cliente específico.
- DELETE	/clients/:id	Exclui um cliente específico.

## Rota "accounts"
- GET	/accounts	Retorna uma lista de todos as contas.
- POST	/accounts	Cria uma nova conta.
- GET	/accounts/:id	Retorna uma conta específica.
- PUT	/accounts/:id	Atualiza uma conta específica.
- DELETE	/accounts/:id	Exclui uma conta específica.