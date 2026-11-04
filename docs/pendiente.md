# Pendiente — @northstar/shared

> El estado de despliegue **no se deduce del repositorio**. Lo marcado
> **«confirmar»** viene de las notas de trabajo.

_Última revisión: 2026-11-04 (remoto y tag `v1.0.0` empujados; falta hacerlo público)._

## Abierto

| Qué | Detalle | Confirmar |
|---|---|---|
| **Hacer público el repo** | El remoto existe y el tag `v1.0.0` está empujado (2026-11-04); `northstar` y `admin` lo fijan por tag. Falta pasar `Northstar-Platforms/shared` a **público**: hoy es privado y el `npm ci` de las dos apps da 404 | no |
| **Pasar el repo a privado, si se quiere** | Rompe el CI de las dos apps a la vez si no se ha puesto antes el paso del PAT. Ver [uso.md](uso.md#pasarlo-a-privado-rompe-las-dos-apps-a-la-vez) | no |
| **Comprobar `Mark` y `sk-polaris` en un navegador** | La marca y la estrella de respaldo se escribieron desde la geometría de la spec sin verlas pintadas. Primera superficie que las monte: comprobar la estela (arco de 150° a 30°), el núcleo y los dos arcos de `sk-polaris` | no |
| **El contraste de los tonos sobre el cielo** | El bloque «lo que se escribe sobre el cielo» de `sky.css` (tinta de la noche, píldora invertida, enlace en `#7fd6c2`) está calculado, no medido. Pasar el detector de impeccable sobre el héroe y los paneles de cielo en cuanto existan | no |

## Trampas del terreno

| Trampa | Síntoma |
|---|---|
| **Empujar un commit sin tag** | Ninguna app lo ve. El pin es al tag |
| **Esperar que `npm install` recoja un tag** | No lo hace solo. Hay que pedirlo explícitamente con `pkg@git+…#tag` |
| **Olvidar `@source` en la app** | Cada componente compartido se renderiza **sin estilos**, y no falla nada |
| **Importar `sky.css` sin `site.css` debajo** | Las vistas de consola escriben `ticket`, `fare`, `stamp`: sin la estructura, quedan sin forma |
| **Importar cruzando la frontera** | `ui/` ↔ `worker/`. Los dos universos de tipos declaran los mismos globales con formas distintas |
| **Poner una dependencia de runtime en `dependencies`** | Segunda copia de React en `node_modules/@northstar/shared/` → todos los hooks rotos |
| **Escribir un dominio aquí** | El paquete no sabe dónde corre. `iconUrl`, `preferencesUrl` y la cookie los pone la app |

## Cómo cerrar una fila de aquí

Bórrala en el mismo commit. Si el cambio es del paquete, **acuérdate del tag**:
sin tag, ninguna app lo verá.
