// Los estilos de las primitivas de consola (styles/kit.css) valen tanto bajo
// `<html class="site sk">` como bajo un `<div class="site sk">`: `npm test`.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (name: string) => readFileSync(new URL(`../styles/${name}`, import.meta.url), "utf8");

test("kit.css: las filas, la píldora, el conmutador, el panel sin relleno y el aviso, sin atarse a <html>", () => {
	const kit = read("kit.css");
	for (const cls of [".sk-rows", ".sk-row", ".sk-tag", ".sk-seg", ".sk-flush", ".sk-callout"]) assert.ok(kit.includes(`.site.sk ${cls}`), cls);
	assert.ok(!kit.includes("html.site.sk"), "un selector html.site.sk no se aplica dentro de un <div>");
});

// Los tokens que `.sk` declara: todo lo que no esté aquí es un color ajeno al
// mundo (uno de marca o de producto) que se coló.
const SK_TOKENS = new Set([
	"ground", "mist", "haze", "surface", "glass", "ink", "ink-2", "ink-3", "hair", "hair-2",
	"accent", "accent-soft", "accent-deep", "star", "night", "night-2", "night-ink", "night-ink-2",
	"shadow-1", "shadow-2", "shadow-3", "ease-out", "ease-in-out", "font",
]);

test("sky.css: los tokens del mundo Polar Night y la estrella de respaldo", () => {
	const sky = read("sky.css");
	for (const token of ["--sk-ground: #f3f4f7", "--sk-accent: #0e6e62", "--sk-night: #0b1026", "--sk-star: #f3cf7a"]) assert.ok(sky.includes(token), token);
	assert.ok(sky.includes(".sk .sk-polaris"), "la primitiva .sk-polaris");
	const block = sky.slice(sky.indexOf("\n.sk {"), sky.indexOf("\n}", sky.indexOf("\n.sk {")));
	for (const m of block.matchAll(/--sk-([a-z0-9-]+):/g)) assert.ok(SK_TOKENS.has(m[1]), `token fuera del mundo: --sk-${m[1]}`);
});
