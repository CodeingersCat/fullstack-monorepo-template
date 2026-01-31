# fullstack-monorepo-template
A production-ready TypeScript monorepo template with frontend, backend, shared types, and CI enforcing quality gates


### Folder structure explained
```
.
├─ apps/
│  ├─ api/
│  └─ web/
├─ packages/
│  └─ shared/
├─ package.json
├─ pnpm-workspace.yaml
├─ tsconfig.base.json
├─ .gitignore
└─ README.md
```

- Apps: Hosts both the react client and fastify server applications
- Packages: Shared typescript and utilities shared by both client and server