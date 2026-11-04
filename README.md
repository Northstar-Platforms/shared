# @northstar/shared

**El código idéntico en el control plane de Northstar Platforms
(`northstarplatforms.dev`) y en la consola del staff
(`admin.northstarplatforms.dev`).** Cada uno es su propio repositorio y se
despliega por su cuenta; este paquete es lo que evita que carguen dos copias
byte a byte del mismo archivo: el mundo visual **Polar Night**, la marca
Polaris, las piezas de consola y los helpers de Pages Functions.

Envía **TypeScript crudo**: no hay paso de build. El bundler de la app que lo
consume lo compila y su `tsc` lo comprueba.

## La documentación está en [`docs/`](docs/)

**Empieza por [`docs/README.md`](docs/README.md).**

| | |
|---|---|
| [modulos.md](docs/modulos.md) | qué hay dentro, y la frontera navegador ↔ worker |
| [uso.md](docs/uso.md) | consumirlo, publicarlo, y las reglas de qué entra |
| [pendiente.md](docs/pendiente.md) | lo abierto y las trampas |
| [decisiones.md](docs/decisiones.md) | de dónde viene el paquete y qué se podó al forjarlo |

El sistema visual (tokens, marca, reglas) está en [`DESIGN.md`](DESIGN.md).

## El pin es a un TAG, no a master

```json
"@northstar/shared": "git+https://github.com/Northstar-Platforms/shared.git#v1.0.0"
```

`npm install` no re-resuelve un tag por su cuenta: hay que pedírselo
explícitamente. Detalle en [uso.md](docs/uso.md#publicar).

## Comprobar y publicar

```bash
npm run typecheck && npm test && npm run docs:check
# sube "version" en package.json, commit
git tag v1.1.0 && git push --tags
```

## Mantener los docs al día

```bash
npm run docs
npm run docs:check
```
