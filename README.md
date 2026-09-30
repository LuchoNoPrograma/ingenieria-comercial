# Ingeniería Comercial · Comunidad universitaria

Landing estática publicada en https://luchonoprograma.github.io/ingenieria-comercial/.

## Contenido y diseño

- Composición basada en la web original de Canva: naranja original en la presentación, fondos crema y arena para las secciones de lectura, paneles durazno redondeados y fotografías de actividades.
- Misión y visión transcritas del folleto proporcionado por el solicitante.
- Cuatro fotografías originales de Canva, descargadas y servidas localmente.
- Botón de WhatsApp con el icono original verde y texto blanco subrayado; naranja oscuro ajustado para un contraste de 6,09:1.
- Presentación horizontal original en una sección amplia e independiente, con el logo al lado. Los dos videos verticales de TikTok acompañan a Campo laboral y a Comunidad, como en la referencia. Controles nativos, sin reproducción automática y carga bajo demanda. Al reproducir uno se pausan los demás.
- Tarjetas de portada con los textos originales de la referencia (Análisis financiero, Inversiones y mercados, Tecnología y datos), por indicación del solicitante.
- Secciones recuperadas de la referencia: «Espacios para aprender y practicar» (tarjetas con las ilustraciones originales de portátil, libros y gráfico en `assets/illustrations/`) y «Abre caminos profesionales · Campo laboral». Los textos propios de Ingeniería Financiera se adaptaron a Comercial a partir de la misión y la visión.
- Visor de imágenes: la foto de portada y las tres tarjetas se abren a tamaño natural con su título y descripción; se navega con flechas, teclado y Esc.
- Sin eslóganes de relleno («Aprende. Participa. Conecta.» retirado); el pie nombra la Universidad Amazónica de Pando.
- Un solo texto de acción, «Regístrate», para el formulario. Junto a los botones de registro y al de WhatsApp, la mano de la referencia pulsa en bucle: el botón emite un anillo y aparecen rayitas de clic. Al hacer clic de verdad la pulsación se repite con más fuerza.
- Perfil de TikTok tomado de la marca de agua de los videos: `@uap_1993`.
- Entrada suave: desenfoque de 5 px a pantalla completa que espera la carga (máximo 900 ms) y se disuelve en 450 ms, con salida de seguridad de 2,5 s y soporte de movimiento reducido. Apariciones laterales leves al desplazarse y navegación móvil.
- Logo con fondo transparente en cabecera, presentación, pie, favicon y apple-touch-icon (`assets/logo-transparent.png`). Fondo retirado con Image Gen, conservando el diseño. Original en `assets/logo.png`.
- Registro como acción principal en cabecera, portada y bloque final independiente; abre el formulario original de Canva. El acceso a WhatsApp ocupa un bloque separado, con mayor espaciado.

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

Abrir http://localhost:4173. No hay dependencias ni compilación. Para probar también el avance de los videos, usar un servidor con soporte HTTP Range, por ejemplo `npx http-server -p 4174`; GitHub Pages admite estas peticiones.

GitHub Pages publica la raíz de `main` en cada push.

## Ajustes del afiche web

- Portada con Área de Ciencias y Tecnología, modalidad presencial y duración de 5 años / 10 semestres, según la captura indicada por el solicitante.
- Títulos de impacto en gris y naranja inspirados en el rótulo original.
- Marca de agua del logo a 5 % de opacidad solo en la sección de misión y visión, estática. Se retiró la capa fija global y la versión clara sobre naranja porque se superponían y daban sensación de dos logos en movimiento.
- CSS y JavaScript versionados para que los navegadores reciban los cambios de entrada sin reutilizar el efecto anterior.
