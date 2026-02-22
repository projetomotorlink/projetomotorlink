# Backend - Motorlink

Este é o backend do projeto Motorlink, desenvolvido com [NestJS](https://nestjs.com/), um framework Node.js para construir aplicações de servidor eficientes e escaláveis.

## Configuração do Ambiente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20.x ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Navegue até o diretório do backend:
   ```bash
   cd projetomotorlink/backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Banco de Dados

O projeto utiliza [PostgreSQL](https://www.postgresql.org/) como banco de dados.

### Prisma

O [Prisma](https://www.prisma.io/) é utilizado como ORM para interagir com o banco de dados. O schema do banco de dados está definido em `prisma/schema.prisma`.

#### Migrations

Para aplicar as migrations e criar as tabelas no banco de dados, execute:

```bash
npx prisma migrate dev --name <nome-da-migration>
```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

- `npm run build`: Compila a aplicação para produção.
- `npm run format`: Formata o código com o Prettier.
- `npm run start`: Inicia a aplicação em modo de produção.
- `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento com watch.
- `npm run start:debug`: Inicia a aplicação em modo de debug com watch.
- `npm run lint`: Executa o linter (ESLint).
- `npm run test`: Executa os testes unitários.
- `npm run test:watch`: Executa os testes unitários em modo watch.
- `npm run test:cov`: Gera o relatório de cobertura de testes.
- `npm run test:e2e`: Executa os testes end-to-end.

## Estrutura do Projeto

```
.
├── prisma/
│   └── schema.prisma       # Schema do banco de dados
├── src/
│   ├── app.module.ts       # Módulo principal
│   ├── main.ts             # Arquivo de entrada da aplicação
│   └── ...                 # Outros módulos, controllers, services
├── test/
│   └── ...                 # Testes unitários e e2e
├── nest-cli.json           # Configuração do NestJS CLI
├── package.json            # Dependências e scripts
└── tsconfig.json           # Configuração do TypeScript
```

## Tecnologias

- **Framework:** [NestJS](https://nestjs.com/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Testes:** [Jest](https://jestjs.io/)
- **Linter:** [ESLint](https://eslint.org/)
- **Formatter:** [Prettier](https://prettier.io/)
