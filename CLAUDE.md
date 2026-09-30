# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es

Landing estática de una sola página (Ingeniería Comercial · comunidad universitaria), en español. HTML, CSS y JavaScript sin framework, sin dependencias, sin build, sin tests ni linter. GitHub Pages publica la raíz de `main` en cada push (https://luchonoprograma.github.io/ingenieria-comercial/); `.nojekyll` evita el procesamiento de Jekyll.

## Vista local

```sh
python3 -m http.server 4173        # http://localhost:4173
npx http-server -p 4174            # necesario para probar el avance (seek) de los videos: requiere HTTP Range
```

## Arquitectura

- `index.html`: todo el contenido y los enlaces (registro → formulario de Canva, WhatsApp, TikTok `@uap_1993`). Secciones con `id`: `inicio`, `presentacion`, `proposito`, `espacios`, `campo-laboral`, `registro`, `comunidad`. El contenido proviene de la web de Canva, pero el solicitante quiere una versión limpia y moderna, no una copia literal: tarjetas claras con borde suave, títulos bicolor (`.title-accent`) y una sola banda naranja (presentación). Las apariciones al hacer scroll son laterales y leves (`.reveal.from-left` / `.from-right`).
- `styles.css`: toda la apariencia; la paleta vive como custom properties en `:root` (`--paper`, `--peach`, `--sand`, `--orange`, `--action`, `--ink`, …). `--action` es el naranja oscuro elegido por contraste (6,09:1); conservar el contraste al cambiar colores.
- `script.js`: menú móvil, cabecera al hacer scroll, apariciones `.reveal` (IntersectionObserver añade `.is-visible`; sin JS el contenido queda visible), videos (solo uno reproduciéndose; se pausan al salir de pantalla), animación de pulsación `.cta-tap` (mano + rayitas + anillo, se repite al hacer clic) y visor `<dialog class="lightbox">` para los elementos con `data-lightbox` (toma título y texto del `figcaption` o de `data-title`/`alt`).

### Entrada con desenfoque (repartida en tres sitios)

1. Un `<script>` y un `<style>` inline en el `<head>` de `index.html` añaden `intro-pending` a `<html>` (salvo con `prefers-reduced-motion`) y fijan una salida de seguridad de 2,5 s (`window.pageIntroSafety`).
2. Un elemento `.page-intro` a pantalla completa en el `<body>` hace el desenfoque.
3. `script.js` espera `load` + `document.fonts.ready` (máx. 900 ms), añade `intro-running` para la animación de 450 ms y luego quita las clases y el overlay (`finishIntro`).

Al tocar este efecto hay que mantener las tres piezas coherentes y las salidas de seguridad. El solicitante pidió que sea sutil (desenfoque de 5 px); no volver a valores agresivos.

### Cache busting

`index.html` referencia `styles.css?v=…` y `script.js?v=…`. Al cambiar CSS o JS de forma visible, actualizar el valor de `v` para que los navegadores no reutilicen la versión anterior.

## Recursos

- `assets/logo-transparent.png` se usa en cabecera, presentación, pie, favicon, apple-touch-icon y marca de agua. La marca de agua es una sola capa estática en `.purpose` (5 % de opacidad): no añadir capas fijas ni repetirla en fondos naranjas, porque el solicitante percibió dos logos superpuestos y mareo. `assets/logo.png` es el original.
- `assets/original/` y `assets/videos/` son descargas de la web de referencia en Canva (https://tarsier-9p5pj7.my.canva.site/); conservar sus nombres originales para poder rastrearlas.
- `assets/illustrations/` contiene iconos extraídos de las máscaras de la web de Canva (mano, libros, gráfico, portátil).
- Fuentes locales en `assets/fonts/` cargadas vía `assets/fonts.css` (licencias OFL incluidas).
- Evitar eslóganes genéricos de relleno: el solicitante los percibe como texto de IA.
- Misión, visión y título provienen del folleto del solicitante; no reescribirlos sin indicación.

`README.md` documenta las decisiones de contenido y diseño; mantenerlo al día cuando cambien.
