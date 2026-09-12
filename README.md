# Landing Kumateq

Landing comercial estática desarrollada con HTML, CSS y JavaScript puro. No requiere proceso de compilación ni dependencias.

## Antes de publicar

Edita `SITE_CONFIG` al inicio de `script.js`:

- `whatsappNumber`: número con código de país y sin símbolos. Ejemplo para Perú: `519XXXXXXXX`.
- `contactEmail`: correo comercial que aparecerá en el footer.
- `demoUrl`: enlace de la demostración. Si se deja vacío, el botón abrirá el formulario de contacto.

Reemplaza el bloque `.demo-placeholder` de `index.html` por una imagen del caso, por ejemplo:

```html
<div class="demo-placeholder reveal">
  <img src="assets/demo-firemed.webp" alt="Catálogo digital implementado para FIREMED" />
</div>
```

El estilo para que la imagen se ajuste correctamente ya está incluido en `styles.css`.

## Probar localmente

Puedes abrir `index.html` directamente o levantar un servidor local:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.
