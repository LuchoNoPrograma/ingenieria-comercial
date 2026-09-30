# Ingeniería Comercial · Comunidad universitaria

Landing estática publicada en https://luchonoprograma.github.io/ingenieria-comercial/.

## Contenido y diseño

- Composición basada en la web original de Canva: fondos naranjas, paneles durazno redondeados, fotografías de actividades y tarjetas con texto superpuesto.
- Misión y visión transcritas del folleto proporcionado por el solicitante.
- Cuatro fotografías originales de Canva, descargadas y servidas localmente.
- Botón de WhatsApp con el icono original verde y el tratamiento original naranja, blanco y subrayado.
- Sección de TikTok con los tres videos extraídos de Canva: dos verticales y una presentación horizontal. Controles nativos, sin reproducción automática y carga bajo demanda. Al reproducir uno se pausan los demás.
- Perfil de TikTok tomado de la marca de agua de los videos: `@uap_1993`.
- Animaciones de aparición, desplazamiento suave, navegación móvil y soporte de movimiento reducido.

## Fuentes

Referencia: https://tarsier-9p5pj7.my.canva.site/.

Los archivos descargados se conservan en `assets/original/` y `assets/videos/`. Sus nombres originales permiten rastrearlos en la página fuente. Las fotografías y videos pertenecen al contenido de Ingeniería Financiera de esa referencia y se reutilizan por indicación explícita del solicitante; la misión, visión y título provienen de su folleto de Ingeniería Comercial.

WhatsApp conservado de la referencia: https://chat.whatsapp.com/F9hx5vGx705IKqGwBvBnte.

Tipografía DM Sans: licencia SIL Open Font License incluida en `assets/fonts/`.

## Edición y vista local

Editar `index.html` para textos y enlaces; `styles.css` para apariencia; `script.js` para menú, animaciones y comportamiento de videos.

```sh
python3 -m http.server 4173
```

Abrir http://localhost:4173. No hay dependencias ni compilación.

GitHub Pages publica la raíz de `main` en cada push.
