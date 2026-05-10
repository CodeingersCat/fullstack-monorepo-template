# fullstack-monorepo-template
A production-ready TypeScript monorepo template with frontend, backend, shared types, and CI enforcing quality gates


## Folder structure explained
```shell
.
├─ apps/
│  ├─ client/
│  └─ server/
├─ packages/
│  └─ shared/
├─ package.json
├─ pnpm-workspace.yaml
├─ tsconfig.base.json
├─ .gitignore
└─ README.md
```

- Apps: Hosts both the client and server applications
  - client
  - server
- Packages: Shared typescript and utilities shared by both client and server

## Features
- **Monorepo setup** with [pnpm workspaces](https://pnpm.io/workspaces) for efficient dependency and package management.
- **TypeScript** across all codebases (frontend, backend, shared), ensuring type safety everywhere.
<!-- - **Fastify server** (`apps/server`), including sample routes and CORS preconfigured. -->
<!-- - **React client** (`apps/client`), prepared to integrate with your preferred React/Vite/Next.js stack. -->
- **Shared package** (`packages/shared`) for types/utilities, enabling true type sharing between client and server.
- **Test setup** using [Vitest](https://vitest.dev/), allowing for type-safe, fast tests.
- **Out-of-the-box dev scripts** for local development and testing of both apps.
- **CI-ready**: Easy to add CI for linting, types, and tests, lowering the barrier to high-quality releases.
<!-- - **Clear folder structure** designed for scalability as teams and features grow. -->
- **Zero-config start**: Clone, install, and run dev servers immediately—no boilerplate setup required!