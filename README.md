# fullstack-monorepo-template

A minimal TypeScript + pnpm workspaces monorepo template.

## Why this exists

This repo, originally created as a practice/learning exercise serves as a reusable, bare-bones starter kit for new full stack web applications.

## Tech Stack

- Typescript
- pnpm workspaces
- React
- Fastify
- Vitest
- ESLint + Prettier
- Github Actions for CI

## Folder structure explained

```shell
.
├── apps
│   ├── client
│   └── server
├── eslint.config.mjs
├── LICENSE
├── package.json
├── packages
│   └── shared
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
└── tsconfig.json
```

- Apps: Hosts both the client and server applications
  - client
  - server
- Packages: Shared types and utilities shared by both client and server

## Getting Started

- `pnpm api`: Starts the local dev server for the Fastify server app
- `pnpm client`: Starts the local dev server for the React client app
- `pnpm lint`: Performs project-wide linting and presents issues
- `pnpm lint:fix`: Performs linting and automatically fixes obvious issues for eg prettier formatting violations
- `pnpm test`: Runs tests
