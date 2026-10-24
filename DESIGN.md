---
name: Northstar Platforms
description: "«Polar Night»: el mundo visual de Northstar Platforms. Una exposición larga del cielo polar en la que todas las estrellas dejan estelas que giran alrededor de una sola que no se mueve; Northstar es ese punto fijo mientras la tecnología del cliente cambia, y los seis pasos del recorrido son una sola órbita alrededor de la estrella. La página es la nieve bajo ese cielo (clara, fría, quieta); la noche sólo vive dentro de los paneles de cielo. Una tinta de noche polar, un solo acento de aurora y el oro de la estrella sólo dentro del cielo. El CSS del mundo, la marca y las primitivas se sirven desde @northstar/shared."
colors:
  ground: "#f3f4f7"
  mist: "#e9ebf1"
  haze: "#dcdfe8"
  surface: "#ffffff"
  glass: "rgba(255, 255, 255, 0.66)"
  ink: "#0f1424"
  ink-2: "#474d63"
  ink-3: "#5c6378"
  hair: "rgba(15, 20, 36, 0.08)"
  hair-2: "rgba(15, 20, 36, 0.14)"
  accent: "#0e6e62"
  accent-soft: "#dff2ec"
  accent-deep: "#0a5a50"
  star: "#f3cf7a"
  night: "#0b1026"
  night-2: "#141b3a"
  night-ink: "#eef0f8"
  night-ink-2: "#aab1c9"
  trail-night: "#7fd6c2"
  aurora: "rgba(47, 208, 168, 0.18)"
  destructive: "#b3261e"
  danger-bg: "#fbeceb"
  danger-fg: "#8f2219"
  warning-bg: "#fdf1e1"
  warning-fg: "#8a5100"
  success-bg: "#e6f4ee"
  success-fg: "#17795a"
  selection: "#d7efe7"
  scrollbar: "#c9cdd9"
  shadow-base: "rgba(18, 22, 46, …)"
typography:
  family: "Geist, Segoe UI, system-ui, sans-serif (una sola familia, pesos 400 a 600; jerarquía por tamaño y peso, nunca por una segunda familia ni por monoespaciada)"
  display:
    fontWeight: 500
    letterSpacing: "-0.038em"
    lineHeight: 1.04
  h2:
    fontWeight: 500
    letterSpacing: "-0.032em"
    lineHeight: 1.08
  h3:
    fontWeight: 500
    letterSpacing: "-0.018em"
    lineHeight: 1.25
  body:
    color: "ink-2"
    lineHeight: 1.6
    baseSize: "15px dentro de una consola (.site.sk); 17px→1rem en el sitio"
  small:
    color: "ink-3"
    fontSize: "0.8125rem"
    lineHeight: 1.5
  base-tracking: "-0.006em en todo el mundo .sk"
  numerals: "tabular-nums en cifras y tablas (.sk-num, tablas fare, sk-tag, sk-row-end)"
  component-ramp: "0.6875 / 0.75 / 0.8125 / 0.875 / 0.9375 / 1 / 1.0625rem: los pasos de letra de los componentes (contadores, sellos, small, controles, campos, cuerpo, marca); fuera de esta rampa no hay tamaños literales"
rounded:
  tile: "10px (lg 13px, sm 8px, xs 6px)"
  field: "12px"
  menu-item: "10 a 12px"
  card: "18px"
  window: "20px"
  dialog: "24px"
  panel: "28px"
  pill: "999px (botones, chips, sellos, pestañas, rieles)"
spacing:
  module: "4px: todo hueco es múltiplo de 4"
  column: "1240px + márgenes 16/24/32px (sk-wrap)"
  header: "64px"
  control-heights: "btn 48 (sm 38), navlink 36, chip/segment 34, field ≥44, ticket 40 (sm 34), seg 30 (sm 26), tag 22 (md 26)"
components:
  Mark: "components/sky.tsx: Polaris. Una estrella de cuatro puntas con los lados cóncavos rellena del gradiente de la noche (#2b3560 → #0f1424) con un núcleo de oro (#f3cf7a), y debajo su estela: el arco de 150° a 30° de la circunferencia de radio 11.6 que la rodea (lienzo 28), en acento. tone=\"night\" para el cielo: estrella en oro (#fff1c9 → #e9b94a), núcleo blanco, estela #7fd6c2"
  Wordmark: "la marca con la palabra «Northstar» al lado, en peso 500 y tracking -0.02em; hereda el color de quien la monta"
  sk-hero-sky: "el cielo del héroe sin lienzo: la noche #0b1026 → #141b3a con la cinta de aurora tenue abajo; lo que va encima se lee en night-ink"
  sk-skyfill: "el mismo cielo para un panel (las soluciones, el cierre), con radio 28 por sk-panel"
  sk-polaris: "el respaldo sin WebGL2: el resplandor dorado pequeño de la estrella fija en el centro y dos arcos finos de estela (night-ink-2 al 35% y al 24%) hechos con gradientes y un borde enmascarado"
  sk-tile: "la baldosa de icono, una primitiva neutra que lee --tile (por defecto el acento); el único sitio donde puede vivir un color ajeno al mundo"
  sk-btn: "píldoras: primaria de tinta, quiet transparente, glass de vidrio; scale(0.97) en :active. Sobre el cielo la primaria se invierte: night-ink sobre la noche"
  sk-card: "tarjeta blanca, radio 18, sombra-1; al pasar, -3px y sombra-2"
  sk-field: "campo blanco con filete interior; foco = filete de acento + aro rgba(14,110,98,0.16)"
  sk-route-line: "la línea punteada del recorrido que une las seis paradas"
  console-kit: "components/console-kit.tsx: Section, CallingAt, Masthead, Monogram, FieldShell/TextField/TextArea/SelectField/Check, SaveRow, SheetDialog, ConfirmRow, ActionMenu, StatusBox, Spine, Skeleton"
  console: "components/console.tsx: PageHeader, StatGrid/StatTile, Panel, RowList/rowClass/RowContent, ChartTooltip, EmptyState"
---

# Northstar Platforms — «Polar Night»

## El mundo

La misma gramática del cielo que comparten los mundos de la casa, a otra hora.
**Northstar es la noche polar vista desde la nieve.** La metáfora: en una
exposición larga del cielo nocturno todas las estrellas dejan estelas que
giran alrededor de una sola que no se mueve. Northstar es ese punto fijo
mientras la tecnología del cliente cambia; los seis pasos del recorrido
(descubrimiento, consultoría, diseño y planificación, implementación,
capacitación y entrega, soporte continuo) son una sola órbita alrededor de la
estrella.

La página es clara: la nieve `#f3f4f7` como suelo, la noche polar `#0f1424`
como tinta, niebla y bruma frías (`#e9ebf1`, `#dcdfe8`), sombras sobre base
`rgba(18, 22, 46, …)` siempre con desplazamiento y desenfoque. La noche
(`#0b1026 → #141b3a`) sólo existe **dentro de los paneles de cielo**: el héroe,
el panel de las soluciones y el cierre. No hay modo oscuro: la noche es un
lugar de la página, no un tema.

## La gramática (lo que no cambia con la hora)

1. **Una sola familia**: Geist, pesos 400 a 600. Jerarquía por tamaño y peso.
   Tracking de -0.006em en el cuerpo a -0.038em en el display.
2. **Un solo acento**: la aurora `#0e6e62`, para la marca (la estela), los
   enlaces, el foco y la raya de «estás aquí». Da 5.6:1 sobre la nieve y
   6.1:1 sobre blanco (AA en texto normal). Las acciones primarias NO son de
   acento: son píldoras de **tinta**. El acento no se escribe como texto
   salvo en enlaces.
3. **El oro de la estrella** (`#f3cf7a`) sólo dentro del cielo: en la marca y
   en el resplandor de `sk-polaris`. Nunca como texto, nunca como fondo.
4. **Sombra o línea, nunca las dos**: una tarjeta lleva sombra; una fila lleva
   filete (`hair`/`hair-2`). El filete interior (`inset box-shadow`) de campos
   y chips cuenta como línea.
5. **Vidrio sólo en lo que flota**: la cabecera al hacer scroll, los menús,
   las hojas y la ventana. Siempre con respaldo opaco bajo
   `prefers-reduced-transparency`.
6. **Módulo de 4px** para todo hueco; columna de 1240px; cabecera de 64px.
7. **Radios**: 6/8/10/12/18/28 y píldora 999px. Controles en píldora; tarjeta
   18; panel 28; baldosa 10.
8. **Curvas**: `cubic-bezier(.23,1,.32,1)` para entrar (ease-out fuerte) y
   `cubic-bezier(.77,0,.175,1)` para moverse. UI entre 140 y 260ms; las
   coreografías del héroe hasta 900ms. `:active` = `scale(0.97)`.
   `prefers-reduced-motion` apaga coreografías y rebotes y deja un fotograma.
9. **Sin antetítulos, sin ordinales de adorno, sin rayas** (ni `—` ni `–`) en
   el texto visible. Un estado es su palabra en un sello; el color sólo la
   apoya.

## La marca

- **`Mark`** (`components/sky.tsx`): Polaris. Una estrella de cuatro puntas con
  los lados cóncavos (curvas, no rectas) rellena del gradiente vertical de la
  noche (`#2b3560 → #0f1424`), un núcleo de oro `#f3cf7a` de radio 1.5, y
  debajo **su estela**: el arco de la circunferencia de radio 11.6 que la rodea
  (lienzo de 28), de 150° a 30° por abajo, trazo 1.4 con puntas redondas, en
  acento al 95 %. `tone="night"` para el cielo: estrella en oro
  (`#fff1c9 → #e9b94a`), núcleo blanco, estela `#7fd6c2`. Geometría pura; nada
  de ilustración.
- **`Wordmark`**: la marca con «Northstar» al lado.
- **`.sk-polaris`** (CSS): el respaldo del cielo cuando no hay WebGL2. El
  resplandor dorado pequeño de la estrella fija en el centro (un
  `radial-gradient` que se apaga al 17 % del radio) y dos arcos finos de estela
  alrededor (`night-ink-2` al 35 % y al 24 %), hechos con un borde de 1px y
  una máscara cónica. Sin movimiento: sin lienzo no hay giro.
- **`theme-color`**: `#f3f4f7`.

## Las superficies

- **Suelo** `ground` para la página; **niebla** `mist` para rieles, pastillas
  y tableros; **superficie** blanca para tarjetas, campos y tablas.
- **El cielo** (`sk-hero-sky`, `sk-skyfill`): la noche `#0b1026 → #141b3a` de
  arriba abajo y una cinta de aurora tenue en la base
  (`rgba(47, 208, 168, 0.18)`). Encima, la jerarquía es la misma y sólo cambia
  la tinta: titulares en `night-ink` (8.7:1), cuerpo en `night-ink-2`, la
  píldora primaria invertida (`night-ink` sobre la noche), el enlace que al
  pasar se enciende en `#7fd6c2`, el vidrio como un velo claro al 10 % y el
  foco en `#7fd6c2`.
- **Estados**: el error en rojo apagado (`#8f2219` sobre `#fbeceb`); lo que
  pide mirarse en ámbar (`#8a5100` sobre `#fdf1e1`); lo que terminó bien en
  verde (`#17795a` sobre `#e6f4ee`); lo informativo en tinta sobre niebla. El
  acento tintado es `accent-soft` con texto `accent-deep` (6.9:1). Un estado
  es su palabra en un sello; el color sólo la apoya.
- **Superficies del navegador**: selección `#d7efe7` con tinta, foco con aro
  de acento (2px, offset 3), scrollbar `#c9cdd9` sobre la nieve, numerales
  tabulares en datos.

## El movimiento

Una sola coreografía de llegada (`sk-rise`: sube 8px y se enfoca desde blur
5px, 900ms, escalonada 70ms por `--i`), entradas al hacer scroll sólo donde la
secuencia dice algo (`sk-reveal`, con `animation-timeline: view()` como
mejora), y una cifra que cambia entra desenfocada (`sk-tick`, 260ms). Los
menús entran desde su disparador (`transform-origin` del lado del trigger,
180ms); la salida es instantánea. Nada se anima en bucle salvo el esqueleto de
carga (`sk-breathe`). Las estelas del cielo giran sólo en el lienzo WebGL2 de
`northstar` (una vuelta cada ~4 minutos, con la pestaña visible); la estrella
nunca se mueve.

## La regla de evidencia

Northstar nace en pre-lanzamiento. Ninguna métrica, cliente, testimonio, plazo
o precio inventado se presenta como real en ninguna superficie de persuasión;
la persuasión se apoya en el recorrido explicado, en el alcance real de cada
línea de servicio y en las tres soluciones de la casa, que existen.

## Dónde vive cada cosa

- `styles/sky.css`: los tokens `--sk-*`, las primitivas del mundo (`sk-btn`,
  `sk-card`, `sk-field`, `sk-menu`, `sk-hero-sky`, `sk-skyfill`,
  `sk-polaris`, `sk-route-line`…), el bloque «lo que se escribe sobre el
  cielo» y el bloque `.site.sk` que reinterpreta el vocabulario estructural de
  `site.css` dentro de una consola.
- `styles/kit.css`: las primitivas de consola (`sk-rows`, `sk-tag`, `sk-seg`,
  `sk-flush`, `sk-callout`, `sk-pager`) con selectores `.site.sk`.
- `styles/site.css`: la estructura heredada (rejillas, `fare`, `ticket`,
  recomposición móvil); nunca se pinta sin `sky.css` encima.
- `components/sky.tsx`: `Mark`, `Wordmark`.
- `components/console-kit.tsx`, `console.tsx`, `data-table.tsx`, `tag.tsx`,
  `callout.tsx`, `segmented.tsx`: las piezas de las dos consolas.
- `worker/email.ts`: la misma tarjeta hecha apta para correo (nieve, tarjeta
  blanca, píldora de tinta, filas con filetes; el icono de marca sobre una
  celda de noche).
- Cada app monta `<html class="site sk">` (consola) o `<html class="sk sk-page">`
  (sitio) e importa `styles/{site,sky,kit}.css` más
  `@source "../node_modules/@northstar/shared"` en su `index.css`. El lienzo
  del cielo (`sky-canvas.tsx`) vive en `northstar`, no aquí.
