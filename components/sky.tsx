/**
 * La marca del mundo «Polar Night»: Polaris, la estrella que no se mueve.
 *
 * Una estrella de cuatro puntas con los lados cóncavos (curvas, no rectas)
 * rellena del gradiente de la noche, un núcleo de oro, y debajo su estela: el
 * arco de la circunferencia que la rodea, en acento. En una exposición larga
 * del cielo todas las estrellas dejan estelas que giran alrededor de una sola
 * que queda quieta; Northstar es ese punto fijo. Geometría pura, nada de
 * ilustración. El color del lienzo lo decide `tone`: `day` sobre la nieve del
 * sitio y de la consola; `night` dentro del cielo de un panel.
 *
 *   Mark      la marca, en `size-6` si no se dice otra cosa
 *   Wordmark  la marca con la palabra «Northstar» al lado
 */
import { useId } from "react";

export type MarkTone = "day" | "night";

const TONES: Record<MarkTone, { trail: string; from: string; to: string; core: string }> = {
	day: { trail: "#0e6e62", from: "#2b3560", to: "#0f1424", core: "#f3cf7a" },
	night: { trail: "#7fd6c2", from: "#fff1c9", to: "#e9b94a", core: "#ffffff" },
};

/** Polaris y su estela. `aria-hidden`: el nombre lo pone el texto de al lado. */
export function Mark({ className = "size-6", tone = "day" }: { className?: string; tone?: MarkTone }) {
	// useId trae caracteres que una referencia url(#…) de SVG no admite.
	const id = `mk${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
	const t = TONES[tone];
	return (
		<svg viewBox="0 0 28 28" className={className} aria-hidden="true">
			<defs>
				<linearGradient id={`${id}-s`} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor={t.from} />
					<stop offset="1" stopColor={t.to} />
				</linearGradient>
			</defs>
			{/* la estela: de 150° a 30° por abajo, radio 11.6 en un lienzo de 28 */}
			<path d="M3.95 19.8 A11.6 11.6 0 0 0 24.05 19.8" fill="none" stroke={t.trail} strokeWidth="1.4" strokeLinecap="round" opacity="0.95" />
			{/* la estrella de cuatro puntas con los lados cóncavos */}
			<path
				d="M14 1.6 C14.9 9.2 18.8 13.1 26.4 14 C18.8 14.9 14.9 18.8 14 26.4 C13.1 18.8 9.2 14.9 1.6 14 C9.2 13.1 13.1 9.2 14 1.6 Z"
				fill={`url(#${id}-s)`}
			/>
			{/* el núcleo */}
			<circle cx="14" cy="14" r="1.5" fill={t.core} />
		</svg>
	);
}

/** La marca con su palabra, para la cabecera y el pie. El texto hereda el color de quien la monta. */
export function Wordmark({ className = "", tone = "day" }: { className?: string; tone?: MarkTone }) {
	return (
		<span className={`inline-flex items-center gap-2 font-medium tracking-[-0.02em] ${className}`}>
			<Mark tone={tone} />
			<span>Northstar</span>
		</span>
	);
}
