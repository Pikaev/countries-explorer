This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Branch naming

`PRJCE` — project code for **Countries Explorer**.

```
PRJCE/<type>/<scope>-<short-description>
```

| Part | Values |
|------|--------|
| `type` | `feat`, `fix`, `chore`, `docs`, `test`, `refactor` |
| `scope` | `layout`, `page`, `search`, `store`, `countries`, `e2e`, `ci`, `docs`, `phase-1`, `phase-2`, `phase-3` |

Examples:

```
PRJCE/chore/layout-metadata-and-fonts
PRJCE/feat/phase-2-search-zustand
PRJCE/fix/error-boundary-placement
PRJCE/test/e2e-search-flow
```

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) without the `PRJCE` prefix:

```
feat(search): add debounced filter with Zustand store
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
