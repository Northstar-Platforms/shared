# @northstar/shared — documentación

**El código que es idéntico en el control plane (`northstar`) y en la consola
del staff (`admin`).** Cada uno es su propio repositorio y se despliega por su
cuenta; este paquete es lo que evita que carguen dos copias byte a byte del
mismo archivo.

Aquí viven el mundo visual **Polar Night** (`styles/sky.css`), la marca
Polaris (`components/sky.tsx`), las piezas con las que se componen las dos
consolas (`components/console-kit.tsx`, `console.tsx`, `data-table.tsx`…) y los
helpers de Pages Functions (`worker/`).

---

## Empieza por aquí

| Quiero… | Ve a |
|---|---|
| saber qué hay dentro y dónde | [modulos.md](modulos.md) |
| consumirlo, publicarlo, y las reglas de qué entra | [uso.md](uso.md) |
| saber de dónde viene y qué se podó al forjarlo | [decisiones.md](decisiones.md) |
| saber qué está pendiente | [pendiente.md](pendiente.md) |
| los tokens, la marca y las reglas del mundo | [`../DESIGN.md`](../DESIGN.md) |

---

## Las cuatro cosas que hay que saber

**1. Envía TypeScript crudo.** No hay paso de compilación. El bundler de la app
que lo consume (Vite para `src/`, wrangler para `functions/`) lo compila, y el
`tsc` de la app lo comprueba como parte de su propio programa.

**2. Hay una frontera de tipos dentro del paquete.** `ui/`, `lib/`, `hooks/` y
`components/` asumen el DOM; `worker/` asume `@cloudflare/workers-types`.

> **Nunca importes cruzando esa línea.** Los dos universos de tipos no se ponen
> de acuerdo sobre los mismos nombres globales, y por eso hay dos `tsconfig`
> aquí y dos en cada app.

**3. El pin es a un TAG de git, no a master.**

```json
"dependencies": {
  "@northstar/shared": "git+https://github.com/Northstar-Platforms/shared.git#v1.0.0"
}
```

> `npm install` no vuelve a resolver un tag por su cuenta: hay que pedírselo
> explícitamente (`npm install pkg@git+…#tag`). Y un commit empujado sin tag no
> lo ve nadie.

**4. Tailwind v4 no escanea `node_modules`.** Cada app lleva en su `index.css`:

```css
@source "../node_modules/@northstar/shared";
```

Sin esa línea **todo componente compartido se renderiza sin estilos y no falla
nada**.

---

## Quién depende de esto

El control plane (`northstar`) y la consola del staff (`admin`). Dos
repositorios. **Cualquier cambio aquí es un cambio en dos sitios.** Por eso las
apps fijan un tag y suben cuando quieren, en vez de seguir a master.

---

## Para una IA que llega a este repo

1. **Sólo entra lo genuinamente idéntico.** Algo que necesite saber en qué app
   corre pertenece a la app, o hay que parametrizarlo **antes** de moverlo aquí
   (así se hizo con el icono de marca del correo: `iconUrl`, no un dominio
   escrito).
2. **Ningún dominio escrito.** `northstarplatforms.dev` vive en la configuración
   de cada app (`functions/_lib/platform.ts`), nunca aquí.
3. **Las dependencias de runtime son `peerDependencies`, nunca `dependencies`.**
   Una segunda copia de React dentro de `node_modules/@northstar/shared/` rompe
   todos los hooks.
4. Publicar es tag + bump; el procedimiento está en [uso.md](uso.md#publicar).
5. Todo cambio visual pasa por [`DESIGN.md`](../DESIGN.md) y lo actualiza en el
   mismo trabajo.

---

**El libro de la plataforma** está en
[`northstar/docs/plataforma.md`](../../northstar/docs/plataforma.md); la spec
que la define, en
[`docs/superpowers/specs/2026-10-24-northstar-plataforma-design.md`](../../docs/superpowers/specs/2026-10-24-northstar-plataforma-design.md).
