# Clean Arch Node PostgreSQL

Steps to run this project:

1. Run `yarn install --frozen-lockfile` command

2. Setup `.env`

```bash
PORT=8124

DB_HOST=postgres 
DB_USERNAME=example-username
DB_PASS=example-password
DB_NAME=example-db-name
DB_PORT=5432
```

3. Start project `yarn start:docker --build`
