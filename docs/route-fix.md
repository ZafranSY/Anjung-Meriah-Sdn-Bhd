Project dynamic route conflict fix

What I changed
- Removed the duplicate dynamic route folder `app/projects/[projectId]` so only `app/projects/[slug]` remains.

Why
- Next.js App Router does not allow sibling dynamic routes with different parameter names (e.g. `[projectId]` and `[slug]`) under the same parent. Keeping both caused this error:
  "You cannot use different slug names for the same dynamic path ('projectId' !== 'slug')."

How to reproduce the problem
1. Ensure both `app/projects/[projectId]/page.tsx` and `app/projects/[slug]/page.tsx` exist.
2. Run `pnpm dev` and Next.js will throw the error.

How it was fixed locally
- Deleted `app/projects/[projectId]` (kept `app/projects/[slug]`).

Notes / next steps
- If you intended to use a different param name, rename folders so all sibling dynamic folders use the same param name.
- If you need me to restore or merge logic from the deleted file, I can re-add it with a single param name; tell me which param you prefer (`slug` is currently used).

Commands used locally
```powershell
Remove-Item -LiteralPath 'C:\BuildUrWeb\SM\Anjung-Meriah-Sdn-Bhd\app\projects\[projectId]' -Recurse -Force
pnpm dev
```
