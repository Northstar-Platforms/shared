/**
 * Lectura de cookies, y nada más.
 *
 * La cookie de sesión la emite el control plane sobre el dominio de la
 * plataforma (`Domain=.<dominio>`, que es configuración del consumidor, no de
 * este paquete) y una consola sólo la lee. Aquí no hay serializador a
 * propósito: quien puede escribir `access_token` puede desacompasarse de la
 * sesión de la plataforma.
 */

export const ACCESS_TOKEN_COOKIE = "access_token";

/**
 * Parsea la cadena de una cabecera Cookie a un mapa clave-valor.
 */
export function parseCookies(
  cookieHeader: string | null
): Record<string, string> {
  if (!cookieHeader) return {};
  return Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [k, ...v] = c.trim().split("=");
      return [k.trim(), decodeURIComponent(v.join("="))];
    })
  );
}

/**
 * Todos los valores que el navegador envió bajo un mismo nombre, en el orden de
 * la cabecera.
 *
 * Un nombre puede aparecer legítimamente dos veces: una cookie host-only rancia
 * de un subdominio y la de `Domain=.<dominio>` comparten nombre pero no clave
 * de almacén, y el navegador envía las dos. `parseCookies` se queda con la que
 * venga la última; la verificación de sesión tiene que probar cada una hasta
 * que alguna verifique.
 */
export function parseCookieValues(
  cookieHeader: string | null,
  name: string
): string[] {
  if (!cookieHeader) return [];
  const values: string[] = [];
  for (const part of cookieHeader.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k.trim() === name) values.push(decodeURIComponent(v.join("=")));
  }
  return values;
}
