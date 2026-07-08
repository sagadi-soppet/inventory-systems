# Inventory Systems

It's a monorepo template using turbo as it's driver

### Structure

```bash
apps/
  api/          Hono backend (Bun)
  web/          TanStack Router + Query frontend (Vite + React)
packages/
  schemas/      Shared Zod schemas and inferred TypeScript types
  typescript-config/  Shared tsconfig presets
```

### Getting started

1. Create api
```bash
cd apps
pnpm create hono@latest api
```

2. Create frontend
```bash
cd apps
pnpm dlx @tanstack/cli@latest create frontend
```

3. Approve Builds
```bash
cd ..
pnpm approve-builds
```
Select whatever is available by pressing space and then press enter

4. Run the repo
```bash
pnpm dev
```
The app will automatically run `turbo dev` which will run both `dev` scripts from api and frontend apps

### IMPORTANT

- If you see a `.turbo` directory in the root of your project, it's a cache directory that turbo uses to speed up builds. You can safely delete it if you want to clear the cache.
- add to the root package.json scripts that you want to run from the root
