# ingaialab
Imagem da arquitetura: https://ibb.co/XkGhN8Z

inGaia - Back-end Developer

    Desenvolver 2 APIs
        API1 - Retorna o valor fixo do metro quadrado
        API2 - Recebe quantidade de metros quadrados e calcula o valor do imóvel [OK]

Requisitos

    Seu serviço deve ser acessível através de uma API REST
	- Deploy feito no heroku: https://ingaialab.herokuapp.com

    Seu serviço deve validar o valor de entrada [OK]

    O quantidade de metros quadrados deve estar entre 10 e 10.000 [OK]

    Apesar do valor do metro quadrado ser fixo, desenvolva como se esse valor tivesse vindo de um base de dados [OK]

    O valor do métro quadrado dever ser obtido chamando a API1

    Disponibilizar os serviços Online [OK]

O que gostaríamos de ver nos microserviços

    Boas práticas de desenvolvimento
	- Commits por feature (Apesar de perdido boa parte deles)
	- TDD
	- Eslint
		- Implementa padrão de código
	- Husky
	- Lint staged
	
    Padrões de codificação
	- Indentação
	- Padronização de commit (git-commit-msg-linter)
	- Gestão de dependências (npm-check)

    Execução utilizando docker [OK]
	- Arquivo docker-compose.yaml
		* Neste arquivo contém um container de mongo e outro para a aplicação

    Readme bem estruturado explicando a arquitetura e instruções para subir os microserviços

    Código no GitHub, demonstrando conhecimento em sua utilização [OK]
    Swagger
    Teste unitário e teste de integração [OK]
	- Jest

    CI/CD
	- Github + Heroku [OK]

#
## O que falta
* Readme
* Swagger
* Registrar imagem docker no docker hub
* API 2 chamar API 1
* Verificar se na API 2 está validando os valores de entrada

#
## Camadas - Características (https://ibb.co/XkGhN8Z)
#
Esse projeto foi baseado em clean code propondo desacoplamento entre os componentes e invertendo as dependências da aplicação.

* <b>Main</b>:
	- O express foi abstraído do core portanto a aplicação apenas se utiliza das rotas do framework
		- O adaptador de rota mapeia as rotas com seus respectivos contralaodres
	- Middlewares
		- CORS
		- Content-type
		- Body parser
	- Chama o controlador
* <b>Presentation</b>
	- Camada que possui o controlador 
	- Chama os adaptadores (por exemplo, validador do range de m²)
	- Acessa os domínios 
	- Padronização do request e response
* <b>Utils</b>
	- Bibliotecas
		- Validação do range de m²
* <b>Domain</b>
	- Regra de negócio
* <b>Data</b>
	- Obtém dados das bases de dados
* <b>Infra</b>
	- Acessa a base de dados
* <b>Tests</b>
	- Agrupamento de testes unitários e integração

#
## Start
* Para iniciar a aplicação em modo dev digite `docker-compose up --build` (dá para ver melhor o que está aconteceendo) ou `docker-compose up -d`
 