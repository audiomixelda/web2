# Audiomix Producciones

Landing page profesional para empresa de alquiler audiovisual.

## 🚀 Deployment Rápido

### Opción 1: HTML Simple (MÁS FÁCIL)
1. Usa el archivo `index.html`
2. Súbelo a [netlify.com/drop](https://app.netlify.com/drop)
3. ¡Listo!

### Opción 2: React + Backend

#### Netlify (Frontend):
```bash
Base directory: frontend
Build command: yarn build
Publish directory: build
```

Variables de entorno:
```
REACT_APP_BACKEND_URL=tu-backend-url
```

#### Render (Backend):
```bash
Build: pip install -r requirements.txt
Start: uvicorn server:app --host 0.0.0.0 --port $PORT
```

Variables de entorno:
```
MONGO_URL=tu-mongodb-atlas-url
DB_NAME=audiomix_producciones
CORS_ORIGINS=tu-frontend-url
```

## 📧 Contacto
- Email: producciones@audiomixelda.es
- Teléfono: 684 23 79 96
