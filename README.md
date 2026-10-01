# Ingeniería Comercial · Comunidad universitaria

Landing estática publicada en https://luchonoprograma.github.io/ingenieria-comercial/.

## Contenido y diseño

- Composición basada en la web original de Canva: banda de presentación, fondos claros para las secciones de lectura, paneles celestes redondeados y fotografías de actividades.
- Misión y visión transcritas del folleto proporcionado por el solicitante y confirmadas con el tríptico «Tríptico 2 - ICOM». Del mismo tríptico se añadió el perfil del ingeniero comercial, en una tarjeta ancha bajo misión y visión (`#perfil`). En la captura el texto aparece cortado por la izquierda y al final; se completaron las primeras letras de cada línea y el cierre «e interculturalidad», igual que en la misión.
- Campo laboral según el afiche del solicitante: emprendedor de su propio negocio; gerente de empresas, de mercado, de ventas, de logística internacional y de negocios internacionales; finanzas y banca; asesoría o consultoría privada o pública.
- Colores naranja y azul por indicación del solicitante, tomados del logo: títulos en azul marino con acento naranja, banda de presentación azul con filete naranja y botones naranja oscuro (#c2410c, contraste 5,18:1 con texto blanco).
- Logo de Ingeniería Comercial (rombo UAP · FCEAF · IC, 2011) recortado de la captura enviada por el solicitante y guardado con fondo transparente en `assets/logo-icom.png`. El favicon y el apple-touch-icon usan el emblema «IC». Reemplaza al logo de Ingeniería Financiera en toda la página.
- Portada con las cuatro fotografías de Ingeniería Comercial enviadas por el solicitante (`assets/comunidad/`): la convivencia como foto principal y, en las tarjetas, Expo Innova 2026, emprendimientos de adultos mayores y jornada de integración. Reemplazan a las fotos de Ingeniería Financiera de la referencia de Canva, que siguen en `assets/original/` sin usarse.
- Botón de WhatsApp con el icono original verde y texto blanco subrayado sobre el naranja de acción.
- La presentación usa el video vertical de la UAP (`presentacion-uap.mp4`) en una sección independiente, con el logo al lado; reemplaza al video horizontal de la referencia. El video de TikTok de la carrera acompaña a Campo laboral. Controles nativos, sin reproducción automática y carga bajo demanda. Al reproducir uno se pausan los demás.
- «Nosotros ofrecemos» (`#nosotros`, antes «Espacios»), con los cuatro puntos indicados por el solicitante: Gabinete de Computación, Sala de Marketing, Aulas equipadas y Prácticas. Usa las ilustraciones de portátil, gráfico y libros de `assets/illustrations/` y un maletín en SVG para Prácticas; las descripciones breves de cada tarjeta son propias.
- Sección recuperada de la referencia: «Abre caminos profesionales · Campo laboral». Los textos propios de Ingeniería Financiera se adaptaron a Comercial a partir de la misión y la visión.
- Visor de imágenes: la foto de portada y las tres tarjetas se abren a tamaño natural con su título y descripción; se navega con flechas, teclado y Esc.
- Sin eslóganes de relleno («Aprende. Participa. Conecta.» retirado).
- Nombre completo de la facultad, indicado por el solicitante: «Facultad de Ciencias Económicas, Administrativas y Financieras» (FCEAF). Aparece sobre el título de la portada, en el pie junto a la Universidad Amazónica de Pando y en la meta descripción.
- Un solo texto de acción, «Regístrate», para el formulario. Junto a los botones de registro y al de WhatsApp, la mano de la referencia pulsa en bucle: el botón emite un anillo y aparecen rayitas de clic. Al hacer clic de verdad la pulsación se repite con más fuerza.
- El video vertical de TikTok de la propia carrera (`tiktok-ing-comercial.mp4`) acompaña a Campo laboral y reemplaza al video de la referencia. Comunidad no lleva video: su panel ocupa todo el ancho, con el texto a la izquierda y el botón de WhatsApp y el enlace de TikTok a la derecha (apilados en pantallas estrechas). La sección «Actividades de la carrera» se retiró por indicación del solicitante.
- Perfil de TikTok tomado de la marca de agua de los videos: `@uap_1993`.
- Entrada suave: desenfoque de 5 px a pantalla completa que espera la carga (máximo 900 ms) y se disuelve en 450 ms, con salida de seguridad de 2,5 s y soporte de movimiento reducido. Apariciones laterales leves al desplazarse y navegación móvil.
- Registro como acción principal en cabecera, portada y bloque final independiente; abre el formulario original de Canva. El acceso a WhatsApp ocupa un bloque separado, con mayor espaciado.

## Fuentes

Referencia: https://tarsier-9p5pj7.my.canva.site/.

Los archivos descargados se conservan en `assets/original/` y `assets/videos/`. Sus nombres originales permiten rastrearlos en la página fuente. Las fotografías y videos pertenecen al contenido de Ingeniería Financiera de esa referencia y se reutilizan por indicación explícita del solicitante; la misión, visión y título provienen de su folleto de Ingeniería Comercial.

WhatsApp: grupo de Comercial indicado por el solicitante, https://chat.whatsapp.com/FYcdn0xcRgYGn3SdI7nYa1 (reemplaza al enlace de la referencia).

Fotos y video propios: `assets/comunidad/` guarda las cuatro fotos (originales «WhatsApp Image 2026-09-30 at 6.34.21 PM» → `convivencia.jpg`, «6.34.38» → `adultos-mayores.jpg`, «6.35.25» → `expo-innova-2026.jpg`, «6.36.12» → `integracion.jpg`) y la portada del video, extraída del segundo 5. El video `assets/videos/tiktok-ing-comercial.mp4` es «ssstik.io_@ing.comercial.uap_1790811039282.mp4». El video `assets/videos/presentacion-uap.mp4` es «ssstik.io_@uap_1993_1790819288931.mp4» y su portada, `presentacion-uap-poster.jpg`, se extrajo del segundo 6.

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
- Títulos de impacto en azul y naranja, como «INGENIERÍA COMERCIAL» en el logo.
- Marca de agua del logo a 5 % de opacidad solo en la sección de misión y visión, estática. Se retiró la capa fija global y la versión clara sobre naranja porque se superponían y daban sensación de dos logos en movimiento.
- CSS y JavaScript versionados para que los navegadores reciban los cambios de entrada sin reutilizar el efecto anterior.
