# Landing Kumateq

Landing comercial estática desarrollada con HTML, CSS y JavaScript puro. No requiere proceso de compilación ni dependencias.

## Antes de publicar

Edita `SITE_CONFIG` al inicio de `script.js`:

- `whatsappNumber`: número con código de país y sin símbolos. Ejemplo para Perú: `519XXXXXXXX`.
- `contactEmail`: correo comercial que aparecerá en el footer.
- `demoUrl`: enlace de la demostración. Si se deja vacío, el botón abrirá el formulario de contacto.

La imagen de demostración del caso FIREMED se encuentra en `assets/firemed-demo.jpeg`.
Puedes reemplazar ese archivo conservando el nombre o actualizar su ruta en `index.html`.

## Probar localmente

Puedes abrir `index.html` directamente o levantar un servidor local:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.
