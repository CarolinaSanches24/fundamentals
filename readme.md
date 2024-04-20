#### Commands Basics

#### Config scripts Migration

```
"migrate":"drizzle-kit generate:pg --schema=./src/db/schema.ts && node -r esbuild-register src/db/migrate.ts"
```

### Execute Migration

```
npm run migrate
```
#### Config target tsconfig para ES6

