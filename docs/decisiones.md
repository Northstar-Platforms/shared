# Decisiones — @northstar/shared

> Este es el **único** archivo del repositorio que nombra el origen del fork.
> Fuera de aquí, ninguna fuente, estilo ni doc menciona OnDesk, OnForge, OnReach
> ni sus productos; el grep de cierre lo comprueba.

## De dónde viene

`@northstar/shared` 1.0.0 es un fork de `@ondesk/shared` v1.23.0
(`OnDesk.cc/shared`, 2026-10-24), hecho con la receta de la spec
(`docs/superpowers/specs/2026-10-24-northstar-plataforma-design.md`, § 5):
copia sin `.git`, renombrado por bytes (`@ondesk/shared → @northstar/shared`,
`OnDesk-cc/shared → Northstar-Platforms/shared`, `ondesk-db → northstar-db`,
`ondesk-storage → northstar-storage`, `OnDesk Identity → Northstar Identity`,
`OnDesk Admin → Northstar Admin`, `ONDESK → NORTHSTAR`, `OnDesk → Northstar`,
`ondesk → northstar`), poda de todo lo que Northstar no tiene y el mundo visual
nuevo. El dominio `ondesk.cc` no se renombró a lo bruto: donde quedaba en
código pasó a un parámetro (`iconUrl` en `worker/email.ts`) o se quitó.

Northstar Platforms no tiene productos (OnDesk, OnForge y OnReach son
soluciones que el sitio presenta y enlaza, no apps que este paquete sirva), ni
workspaces, ni Nova, ni llamadas, ni presencia. Todo lo que existía para eso
sobra.

## Qué se podó y por qué

| Qué | Por qué |
|---|---|
| `components/nova*`, `styles/nova.css`, `lib/nova-star.ts`, `scripts/nova-*.test.mjs` | Nova (el asistente central) no existe en Northstar |
| `worker/nova-contract.ts`, `nova-search.ts`, `nova-tools.ts` (+ tests) | el contrato producto ↔ Nova |
| `components/automations/`, `worker/automation-events.ts`, `worker/json-schema.ts` (+ tests) | las automatizaciones entre apps: no hay apps |
| `components/map.tsx`, `components/product-shell.tsx`, `components/topbar.tsx`, `styles/product.css` | la banda de las seis líneas, el marco de un producto y su barra superior |
| `lib/lines.ts` | `PRODUCT_IDS`, `APP_NAME`, `LINE_HEX`: el catálogo de productos |
| `AppTile`, `APP_ICON`, `appVar` de `components/sky.tsx` | la baldosa de una app; dependían de `lib/lines` |
| `calls/`, `presence/` | las llamadas (tono único por navegador) y la presencia: de los productos |
| `worker/middleware.ts`, `worker/sso.ts`, `worker/jwt.ts`, `worker/access.ts`, `worker/mirror.ts`, `worker/api.ts` | el middleware de los seis productos, la verificación de la sesión de plataforma desde un producto, HS256 y tickets con audiencia, la membresía de workspace, el espejo del control plane y la API de scopes `/api/v1`. El control plane de Northstar autentica por sí mismo (es fork por inclusión de `ondesk`, que tenía su propia copia) y no hay nadie que consuma su sesión desde fuera. `base64UrlDecode`, lo único de `jwt.ts` que `rs256.ts` usaba, se movió a `rs256.ts` |
| `lib/crud-api.ts`, `lib/crud-hooks.ts` | el cliente CRUD por workspace (`createWorkspaceScopedApi`) y sus hooks de TanStack Query: sólo los usaban los productos; ni `admin` ni `ondesk` los importaban. Con ellos se va `@tanstack/react-query` de las dependencias |
| `WorkspacePlate` de `components/console-kit.tsx` | el selector de workspace; el admin de origen no lo usaba (tenía su propia copia en `ondesk`) y no hay workspaces |
| `test/sqlite-d1.mjs` | la D1 de juguete; sólo la usaban los tests de Nova y de automatizaciones |
| los tokens `--sk-pulse`…`--sk-atlas` y `--l-*` de `sky.css` y `site.css`; `.sk-toggle`, `.sk-dim` | los seis colores de app y el interruptor de acceso de la demo de workspace |
| `.access`, `.access-cell`, `.presence-ring` de `site.css` | el intercambiador de accesos y el anillo de presencia |
| `@ai-sdk/react`, `@cloudflare/ai-chat`, `agents`, `ai`, `@tanstack/react-query` | sólo las usaban Nova y `crud-hooks` |

## Qué cambió de nombre o de forma

| Antes | Ahora | Por qué |
|---|---|---|
| `.sk-orbit-line` | `.sk-route-line` | «orbit» es el nombre de un producto del origen; aquí es la línea del recorrido de seis pasos |
| `@keyframes sk-pulse` | `@keyframes sk-breathe` | «pulse» es un producto del origen; la misma pulsación del esqueleto de carga |
| `.sk-orb` (el planeta de respaldo) | `.sk-polaris` | el respaldo sin WebGL2 ahora es la estrella fija con dos arcos de estela |
| `createEmailer({ brandName, productName })` deducía la app y su dominio de la última palabra de la marca | `createEmailer({ brandName, productName, iconUrl? })` | el paquete no sabe dónde corre: el icono de marca llega como URL absoluta de quien lo monta |
| `Mark` (planeta y luna) | `Mark({ className, tone })` (Polaris y su estela, `day`/`night`) + `Wordmark` | la marca de Northstar |
| «Clear Sky» (mañana fría, `#f4f7fb` / `#0e1b2e` / `#2f6be0`) | «Polar Night» (nieve, noche polar, aurora) | el mundo de la casa a otra hora; tokens en `DESIGN.md` |

## Qué se conservó aunque huela a origen

- `components/console.tsx` (`Panel`, `EmptyState`…): lo importa `data-table.tsx`.
- `hooks/map.ts`: lo importa `console-kit.tsx` 16 veces desde el admin de
  origen (`useDismiss`, `useNarrow`, `useFlash`…).
- `styles/site.css` casi entero: es la estructura que las vistas de consola
  escriben (`ticket`, `fare`, `stamp`, `page-rail`); el bloque `.site.sk` de
  `sky.css` lo reinterpreta. Quitarlo habría obligado a reescribir cada vista
  del admin.
- `components/theme-provider.tsx`: sólo claro; sobrevive para que una app que
  lo monte compile.
- El vocabulario «ticket», «fare», «stamp», «plate», «calling-at» del mapa de
  red en los nombres de clase: son la API de las vistas, no la marca.

## La palabra «workspace»

No sobrevive en ningún archivo fuera de este. `Monogram` (la cara de una
persona, una empresa o un hilo) era «la cara de un workspace»; se renombró el
comentario, no el componente.
