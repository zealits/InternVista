## Getting the project set up locally

There are a number of Docker Compose examples that are suitable for a wide variety of deployment strategies depending on your use-case. All of the examples can be found in the `tools/compose` folder.

To run the development environment of the application locally on your computer, please follow these steps:

#### Requirements

- Docker (with Docker Compose)
- Node.js 18 or higher (with pnpm)

### 1. Fork and Clone the Repository

```sh
git clone https://github.com/zealits/InternVista.git
cd InternVista
```

### 2. Install dependencies

```sh
pnpm install
```

### 3. Copy .env.example to .env

```sh
cp .env.example .env
```

Please have a brief look over the environment variables and change them if necessary, for example, change the ports if you have a conflicting service running on your machine already.

### 4. Fire up all the required services through Docker Compose

```sh
docker compose -f tools/compose/development.yml --env-file .env -p inter-vista up -d
```

It should take just under half a minute for all the services to be booted up correctly. You can check the status of all services by running `docker compose -p intern-vista ps`

### 5. Run the development server

```sh
pnpm prisma:migrate:dev
pnpm dev
```

If everything went well, the frontend should be running on `http://localhost:5173` and the backend api should be accessible through `http://localhost:3000`. There is a proxy present to also route all requests to `http://localhost:5173/api` directly to the API. If you need to change the `PORT` environment variable for the server, please make sure to update the `apps/client/proxy.conf.json` file as well with the new endpoint.

You can also visit `http://localhost:3000/api/health`, the health check endpoint of the server to check if the server is running correctly, and it is able to connect to all it's dependent services. The output of the health check endpoint should look like this:

```json
{
  "status": "ok",
  "info": {
    "database": { "status": "up" },
    "storage": { "status": "up" },
    "browser": { "status": "up", "version": "Chrome/119.0.6045.9" },
    "redis": { "status": "up" }
  },
  "error": {},
  "details": {
    "database": { "status": "up" },
    "storage": { "status": "up" },
    "browser": { "status": "up", "version": "Chrome/119.0.6045.9" },
    "redis": { "status": "up" }
  }
}
```

---

