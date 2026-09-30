# Ingeniería Comercial · ICOM

Landing estática para GitHub Pages, sin dependencias de ejecución ni proceso de compilación.

## Vista local

```sh
python3 -m http.server 4173
```

Abrir http://localhost:4173.

## Editar

- `index.html`: contenido, misión, visión y metadatos sociales.
- El enlace del grupo está en `#whatsapp-link`, en `index.html`; los otros botones llevan a esa sección.
- `styles.css`: colores, tipografía, diseño adaptable y animaciones.
- `script.js`: menú móvil y aparición progresiva al desplazarse.
- `assets/`: recursos servidos localmente, incluidas las fuentes.

## Fuentes de contenido

- Misión y visión: folleto de Ingeniería Comercial enviado por el solicitante el 30 de septiembre de 2026. Se normalizaron mayúsculas y puntuación sin alterar el sentido.
- Web de referencia: https://tarsier-9p5pj7.my.canva.site/ (Ingeniería Financiera).
- WhatsApp recuperado de la web de referencia: https://chat.whatsapp.com/F9hx5vGx705IKqGwBvBnte. **Pendiente de confirmar si corresponde también a Ingeniería Comercial.**
- No se trasladaron datos sobre duración, instalaciones, inscripciones o fotografías de Financiera a Comercial.
- La ilustración abstracta se generó con Image Gen; no representa instalaciones universitarias reales. Prompt: escultura arquitectónica editorial con escalones azul marino y naranja, esfera de piedra y fondo marfil, sin texto.
- Tipografías DM Sans y DM Serif Display, distribuidas bajo SIL Open Font License; licencias incluidas en `assets/fonts/`.

## Publicación

GitHub Pages sirve la raíz de la rama `main`. Cada push a esa rama actualiza el sitio. Las rutas relativas permiten alojarlo en un subdirectorio sin configuración adicional.

Sitio previsto: https://luchonoprograma.github.io/ingenieria-comercial/

## Accesibilidad

HTML semántico, enlace para saltar al contenido, navegación por teclado, foco visible, menú con estado accesible y respeto de `prefers-reduced-motion`. El contenido permanece visible sin JavaScript.
