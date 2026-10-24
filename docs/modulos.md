# Módulos — @northstar/shared

## La frontera

```
  ┌─────────────────────────────┐   ┌──────────────────────────┐
  │  NAVEGADOR                  │   │  PAGES FUNCTIONS         │
  │  ui/  lib/  hooks/          │   │  worker/                 │
  │  components/                │   │                          │
  │                             │   │  @cloudflare/workers-    │
  │  asume el DOM               │   │  types                   │
  └─────────────────────────────┘   └──────────────────────────┘
            tsconfig.ui.json              tsconfig.worker.json
                        ✗ nunca cruzar ✗
```

Los dos universos de tipos declaran los mismos nombres globales con formas
distintas. Importar de un lado al otro compila en tu cabeza y en ningún otro
sitio.

## Qué hay en cada carpeta

| Carpeta | Corre en | Qué |
|---|---|---|
| `styles/` | navegador (CSS) | `sky.css`: los tokens `--sk-*` del mundo **Polar Night**, las primitivas (`sk-btn`, `sk-card`, `sk-field`, `sk-menu`, `sk-hero-sky`, `sk-skyfill`, `sk-polaris`…) y el bloque `.site.sk` que reinterpreta la estructura de las consolas; `kit.css`: las primitivas de consola (`sk-rows`, `sk-tag`, `sk-seg`, `sk-flush`, `sk-callout`, `sk-pager`); `site.css`: la estructura heredada (rejillas, `fare`, `ticket`, recomposición móvil), que nunca se pinta sin `sky.css` encima |
| `components/` | navegador | `sky` (`Mark`, `Wordmark`: Polaris y su estela), `console-kit` (las piezas de los paneles: `Section`, `CallingAt`, `Masthead`, `Monogram`, los campos, `SheetDialog`, `ActionMenu`, `SaveRow`…), `console` (`PageHeader`, `StatTile`, `Panel`, `RowList`, `ChartTooltip`…), `data-table`, `tag`, `callout`, `segmented`, `form-modal`, `confirm-delete-modal`, `theme-provider` (sólo claro; sobrevive para que una app que lo monte compile) |
| `ui/` | navegador | los primitivos de shadcn/ui (`button`, `dialog`, `table`…) más `sonner`, vestidos con el vocabulario del mundo |
| `lib/` | navegador | `cn()`; `initials`; `use-copy` |
| `hooks/` | navegador | `map`: `useClockMs`, `useFlash`, `useDismiss`, `useScrollToStop`, `useNarrow` (los hooks de `console-kit`) |
| `worker/` | Pages Functions | ver abajo |

## `worker/`

| Módulo | Qué resuelve |
|---|---|
| `response` | `jsonOk` / `jsonCreated` / `jsonError`: la forma del error es un contrato con el frontend (`{ error: string }`) |
| `cookies` | lectura de la cookie de sesión (`parseCookies`, `parseCookieValues`); sin serializador a propósito |
| `email` | `createEmailer({ brandName, productName, iconUrl })`: el envío por la API REST de Email Sending de Cloudflare y la plantilla de aviso en el mundo Polar Night; `htmlToText`, `excerpt`, `escapeHtml` |
| `rs256` | verificación RS256 contra un JWKS remoto con caché por URL, y `base64UrlDecode` |

Lo que el control plane necesita para autenticar (firmar la sesión, los guards
`withAuth`/`withStaff`) vive en el control plane: no hay productos que
compartan ese camino, así que aquí no hay middleware.

## Importar por ruta, sin barril

```ts
import { Mark }   from "@northstar/shared/components/sky";
import { cn }     from "@northstar/shared/lib/utils";
import { jsonOk } from "@northstar/shared/worker/response";
```

```css
@import "@northstar/shared/styles/site.css";
@import "@northstar/shared/styles/sky.css";
@import "@northstar/shared/styles/kit.css";
@source "../node_modules/@northstar/shared";
```

**No hay campo `exports` a propósito**: con `moduleResolution: "bundler"` una
importación de subruta resuelve directo al archivo `.ts`/`.tsx`, y así cada
archivo nuevo es importable sin tocar `package.json`.

## El inventario

<!-- BEGIN generated:modules -->
<!-- No edites aquí: lo reescribe `npm run docs`. -->

Módulos de las carpetas publicadas (44), con la primera línea de su comentario de cabecera.

| Archivo | Qué hace |
| --- | --- |
| [`components/callout.tsx`](../components/callout.tsx) | El aviso (2026-10-06): lo que una pantalla tiene que decir antes de lo demás o al lado de ello — que una acción queda auditada, que nadie más puede ver un proyecto… |
| [`components/confirm-delete-modal.tsx`](../components/confirm-delete-modal.tsx) | «¿Seguro?» antes de un borrado, igual en las dos consolas. |
| [`components/console-kit.tsx`](../components/console-kit.tsx) | Las piezas de los paneles, en el mundo «Polar Night». |
| [`components/console.tsx`](../components/console.tsx) | Las piezas de página de una consola (`PageHeader`, `StatGrid`, `StatTile`, `PanelHeader`, `EmptyState`, `ConsoleTag`), en el mundo «Polar Night». |
| [`components/data-table.tsx`](../components/data-table.tsx) | La tabla de una página (2026-10-06): auditoría, avisos, listas de elementos. |
| [`components/form-modal.tsx`](../components/form-modal.tsx) | El envoltorio de cualquier formulario en diálogo: título, descripción y hueco. |
| [`components/kit-css.test.ts`](../components/kit-css.test.ts) | Los estilos de las primitivas de consola (styles/kit.css) valen tanto bajo `<html class="site sk">` como bajo un `<div class="site sk">`: `npm test`. |
| [`components/segmented.tsx`](../components/segmented.tsx) | El conmutador (2026-10-06): dos a cinco maneras de ver lo mismo (Board \| List, All \| Unread, Reply \| Internal note, los días de una semana). |
| [`components/sky.tsx`](../components/sky.tsx) | La marca del mundo «Polar Night»: Polaris, la estrella que no se mueve. |
| [`components/tag.tsx`](../components/tag.tsx) | La píldora de un dato (2026-10-06): el tipo de un elemento, un permiso, un estado, una prioridad. |
| [`components/theme-provider.tsx`](../components/theme-provider.tsx) | El mundo «Polar Night» es claro: no hay tema oscuro en el sitio, en la puerta ni en las consolas (la noche es un lugar de la página, no un tema). |
| [`hooks/map.ts`](../hooks/map.ts) | Los hooks de las piezas de consola (`components/console-kit.tsx`): el reloj del horario, el aviso que se apaga solo, el cierre de un panel flotante, el salto a una… |
| [`lib/initials.ts`](../lib/initials.ts) | Dos letras en lugar de alguien que todavía no tiene avatar. |
| [`lib/use-copy.ts`](../lib/use-copy.ts) | Copiar, hecho una sola vez para todo el proyecto: la implementación que usa `CopyTicket` en `console-kit.tsx`. |
| [`lib/utils.ts`](../lib/utils.ts) | `cn` — juntar clases de Tailwind sin que se peleen entre ellas. |
| [`ui/alert-dialog.tsx`](../ui/alert-dialog.tsx) | El diálogo de consecuencias: el mismo papel que `Dialog`, pero no se cierra al pulsar fuera y el foco empieza en «Cancel», el lado que no hace nada. |
| [`ui/avatar.tsx`](../ui/avatar.tsx) | La cara de alguien es su monograma: su foto, o sus iniciales en el corte condensado, dentro de un cuadrado con el trazo del mundo. |
| [`ui/badge.tsx`](../ui/badge.tsx) | El `Badge` de shadcn es la píldora de `Tag` (`components/tag.tsx`) desde el 2026-10-06: la misma clase `.sk-tag`, sin borde, con la palabra en la voz del cielo. |
| [`ui/button.tsx`](../ui/button.tsx) | El botón. |
| [`ui/card.tsx`](../ui/card.tsx) | La tarjeta del mundo «Polar Night»: blanca, radio de 18px, la elevación en sombra y nunca en borde. |
| [`ui/checkbox.tsx`](../ui/checkbox.tsx) | La casilla del mundo: un cuadrado con el trazo de 3px que se llena de tinta. |
| [`ui/command.tsx`](../ui/command.tsx) | La paleta de órdenes sobre cmdk: el campo de búsqueda cerrado por el filete grueso, los grupos con rótulo de andén y las filas del panel de papel. |
| [`ui/dialog.tsx`](../ui/dialog.tsx) | El diálogo de papel sobre Radix: el trazo de 3px sobre papel, la única penumbra del mundo detrás (tinta al 70 %), una cabecera cerrada por el filete grueso, el aspa… |
| [`ui/dropdown-menu.tsx`](../ui/dropdown-menu.tsx) | El menú de acciones sobre Radix: un panel flotante del mundo (`menu-panel`, en `styles/sky.css`), filas en negrita que se tintan al pasar, rótulos de andén para los… |
| [`ui/hover-card.tsx`](../ui/hover-card.tsx) | La ficha que se abre al pasar el ratón: el mismo panel de papel que un popover. |
| [`ui/input.tsx`](../ui/input.tsx) | El campo del mundo: el trazo de 3px sobre papel, la única tinta clara al enfocar. |
| [`ui/label.tsx`](../ui/label.tsx) | El rótulo de un campo: el rótulo de andén, en bloque, con medio renglón debajo. |
| [`ui/popover.tsx`](../ui/popover.tsx) | Un panel de papel con contenido, anclado a lo que lo abre; sin radio ni sombra. |
| [`ui/progress.tsx`](../ui/progress.tsx) | Una vía con el trazo del mundo que se rellena de tinta hasta donde llega el valor. |
| [`ui/select.tsx`](../ui/select.tsx) | El desplegable sobre Radix: el disparador es un campo del mundo con su chevrón, y las opciones un panel de papel con filas en negrita. |
| [`ui/separator.tsx`](../ui/separator.tsx) | El filete fino del mundo, en horizontal o en vertical. |
| [`ui/sheet.tsx`](../ui/sheet.tsx) | La hoja lateral: un pliego de papel que entra desde un borde de la pantalla, con el trazo del mundo en el canto que da a la página y la penumbra detrás. |
| [`ui/skeleton.tsx`](../ui/skeleton.tsx) | El hueco de carga: la forma de lo que viene, en la única tinta clara, quieto. |
| [`ui/sonner.tsx`](../ui/sonner.tsx) | Las notificaciones: un billete de papel con el trazo del mundo, sin sombra ni radio (el estilo va en `styles/site.css`, `[data-sonner-toast]`). |
| [`ui/switch.tsx`](../ui/switch.tsx) | El interruptor: una vía cuadrada con el trazo del mundo y un mando de tinta que la cruza; encendido, la vía se entinta y el mando pasa a papel. |
| [`ui/table.tsx`](../ui/table.tsx) | Una lista es una tabla (`.fare`): en el cielo, filetes finos y la cabecera en voz pequeña (el bloque de consolas de `styles/sky.css`). |
| [`ui/tabs.tsx`](../ui/tabs.tsx) | Las pestañas son el riel de páginas del mundo: los destinos en negrita sobre un filete fino, el actual en tinta con la barra de 3px debajo (en una consola, `.site.sk… |
| [`ui/textarea.tsx`](../ui/textarea.tsx) | El campo de varias líneas, con el trazo del mundo; lo mide su `rows`. |
| [`ui/tooltip.tsx`](../ui/tooltip.tsx) | La nota al pie de un control: tinta sobre papel, en el corte condensado, sin flecha ni radio. |
| [`worker/cookies.ts`](../worker/cookies.ts) | Lectura de cookies, y nada más. |
| [`worker/email.ts`](../worker/email.ts) | Email transaccional de notificación: el envío por la API REST de Email Sending de Cloudflare y la única plantilla con la que se pinta. |
| [`worker/response.ts`](../worker/response.ts) | Las tres respuestas JSON que devuelve cualquier handler de Pages Functions. |
| [`worker/rs256.test.ts`](../worker/rs256.test.ts) | Pruebas de la verificación RS256 contra un JWKS remoto: `npm test`. |
| [`worker/rs256.ts`](../worker/rs256.ts) | Verificación RS256 contra un JWKS remoto, con caché por URL en el isolate. |

<!-- END generated:modules -->

## Configuración

<!-- BEGIN generated:config -->
<!-- No edites aquí: lo reescribe `npm run docs`. -->

_Sin `wrangler.toml`: este proyecto no se despliega por su cuenta._

### Bindings

_Nada que listar._

### Variables (`[vars]`, públicas)

_Nada que listar._

### Secretos

_Ninguno declarado en `wrangler.toml` ni en `.dev.vars.example`._

### Cron

_Sin cron propio._

### Scripts de npm

| Script | Comando |
| --- | --- |
| `npm run typecheck` | `tsc -p tsconfig.ui.json --noEmit && tsc -p tsconfig.worker.json --noEmit` |
| `npm run docs` | `node scripts/gen-docs.mjs` |
| `npm run docs:check` | `node scripts/gen-docs.mjs --check` |
| `npm run docs:gaps` | `node scripts/gen-docs.mjs --gaps` |
| `npm run test` | `tsx --test "worker/**/*.test.ts" "components/**/*.test.ts"` |

<!-- END generated:config -->
