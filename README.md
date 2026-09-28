# Landing Kumateq

Sitio comercial estático en HTML, CSS y JavaScript. Presenta las tres soluciones y el proceso de Kumateq, la inversión base y la demo de FIREMED. La interfaz utiliza navy, cyan y naranja.

## Configuración

Edita `SITE_CONFIG` en `script.js` para ajustar el número de WhatsApp, el correo comercial y la URL de la demo. La vista previa de FIREMED está en `assets/firemed-demo.jpeg`. Los precios y textos comerciales se basan en el brochure de Kumateq de 2026; revísalos antes de publicar si cambia la propuesta.

## Probar localmente

```bash
python -m http.server 8000
```

Abre `http://localhost:8000`. El formulario prepara un mensaje y abre WhatsApp; no almacena datos ni los envía a un servidor.
