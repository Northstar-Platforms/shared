# Consumir y publicar — @northstar/shared

## Consumir

Cada app fija un **tag** y sube cuando quiere:

```json
"dependencies": {
  "@northstar/shared": "git+https://github.com/Northstar-Platforms/shared.git#v1.0.0"
}
```

Escribe la especificación **a mano** en `package.json` en vez de con
`npm install <url>`, que guarda el atajo `github:Northstar-Platforms/shared#v1.0.0`.
Las dos formas instalan lo mismo; la URL explícita sólo dice qué es.

`package-lock.json` mostrará la dependencia como
`git+ssh://git@github.com/Northstar-Platforms/shared.git#<sha>` sea cual sea
la forma que uses. Es cosmético: para una URL de GitHub, npm clona por
**https** primero y sólo cae a ssh si eso falla, así que **no hace falta
ninguna clave SSH en ningún sitio** mientras el repo sea público. El `<sha>` es
lo que hace un build reproducible, y una vuelta atrás es revertir una línea.

### Después, en la app

**1. Tailwind v4 no escanea `node_modules`.** En el `index.css` de la app, justo
después de los `@import`:

```css
@source "../node_modules/@northstar/shared";
```

Sin esto **cada componente compartido se renderiza sin estilos y no falla nada**.

**2. Los tres CSS, en este orden:** `site.css` (estructura), `sky.css` (el
mundo) y `kit.css` (las primitivas de consola). La raíz de la consola lleva
`class="site sk"`; una página pública lleva `sk` y `sk-page` en `<html>`.

**3. Borra la copia que la app tenía de cada archivo que ahora importa de aquí.**
Dos copias de un `Dialog` es exactamente cómo se separan dos consolas.

### La trampa del tag

El pin es **al tag, no a master**.

- Un commit empujado **sin tag** no lo ve ninguna app, y una app que siguiera
  a master se rompería con cada commit.
- `npm install` **no vuelve a resolver un tag** por su cuenta. Para que una app
  recoja un tag movido o nuevo hay que pedírselo:
  `npm install @northstar/shared@git+https://github.com/Northstar-Platforms/shared.git#v1.0.0`

## Publicar

1. Cambia el archivo. `npm run typecheck && npm test && npm run docs:check`.
2. Sube `version` en `package.json`, commit, y **tag**:
   ```bash
   git tag v1.1.0 && git push --tags
   ```
3. En cada app que lo quiera: cambia el tag en su `package.json`, `npm install`,
   luego su typecheck y su build, y abre su PR.

**Semver es para personas:** *major* cuando un consumidor tiene que cambiar
código, *minor* cuando se añade algo, *patch* para un arreglo. Una app que no
está lista simplemente se queda en el tag anterior.

### Historial de versiones

| Versión | Qué trajo |
|---|---|
| `v1.0.0` | el paquete nace: el mundo **Polar Night** (`styles/sky.css`, `kit.css`, `site.css`), la marca Polaris (`components/sky.tsx`), las piezas de consola (`console-kit`, `console`, `data-table`, `tag`, `callout`, `segmented`), los primitivos de `ui/`, y en el worker `response`, `cookies`, `email` (con `iconUrl` en vez de un dominio escrito) y `rs256` |

## Las reglas de qué entra

- **Sólo código genuinamente idéntico entre las dos apps.** Algo que necesite
  saber en qué app corre pertenece a la app, o hay que **parametrizarlo antes**
  de moverlo aquí.
- **Ningún dominio escrito.** `northstarplatforms.co` es configuración de cada
  app; aquí llega como parámetro (`iconUrl`, `preferencesUrl`…) o no llega.
- **Sólo importaciones relativas dentro del paquete** (`../lib/utils`, no
  `@/lib/utils`). El alias `@/` es de cada app; el bundler del consumidor no sabe
  nada del nuestro.
- **Las dependencias de runtime son `peerDependencies`, nunca `dependencies`.**
  Una segunda copia de React dentro de `node_modules/@northstar/shared/` rompe
  todos los hooks.
- **Nunca importes cruzando la frontera navegador ↔ worker.** Ver
  [modulos.md](modulos.md#la-frontera).
- **Todo cambio visual actualiza [`DESIGN.md`](../DESIGN.md)** en el mismo
  commit.

## Pasarlo a privado rompe las dos apps a la vez

Mientras el repositorio es público, `npm ci` en un runner lo clona anónimamente
y los workflows de las apps se quedan como están.

**En el momento en que se ponga privado, eso se rompe en las dos**: el
`GITHUB_TOKEN` por defecto está limitado al repositorio de la propia app y no
puede leer otro repositorio privado de la organización, y la resolución del
lockfile es una URL de git.

Hay **exactamente un sitio** que arreglar, porque Cloudflare Pages no construye
desde el código fuente: el workflow construye y luego hace
`wrangler pages deploy dist`. Cada app necesita esto **antes** de su `npm ci`:

```yaml
- run: git config --global url."https://x-access-token:${SHARED_READ_TOKEN}@github.com/".insteadOf "https://github.com/"
  env:
    SHARED_READ_TOKEN: ${{ secrets.SHARED_READ_TOKEN }}
    # PAT de grano fino, Contents: read, como secreto de REPOSITORIO en cada app
```

**Ese paso hay que ponerlo en las dos ANTES de cambiar la visibilidad**, no
después.
