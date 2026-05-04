# 🎵 Audiomix Producciones - Landing Page

Landing page profesional para empresa de alquiler de equipos audiovisuales en Alicante.

## 🌟 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Hero section con animaciones
- ✅ Banner de logos de clientes con scroll infinito
- ✅ Sección de servicios (6 servicios)
- ✅ Portfolio de trabajos realizados
- ✅ Formulario de contacto funcional con MongoDB
- ✅ Reseñas de clientes con rotación automática
- ✅ Información de contacto y ubicación
- ✅ Diseño oscuro con acentos morados (estilo concierto/festival)

## 🛠️ Stack Tecnológico

### Frontend
- **React 19**
- **Tailwind CSS** - Estilos
- **Shadcn UI** - Componentes
- **Lucide React** - Iconos

### Backend
- **FastAPI** - API REST
- **MongoDB** - Base de datos
- **Motor** - Driver async de MongoDB
- **Pydantic** - Validación de datos

## 📁 Estructura del Proyecto

```
audiomix-producciones/
├── frontend/              # Aplicación React
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   ├── data/        # Datos mock
│   │   ├── pages/       # Páginas principales
│   │   └── App.js       # Componente raíz
│   ├── public/
│   └── package.json
│
├── backend/              # API FastAPI
│   ├── server.py        # Servidor principal
│   ├── requirements.txt # Dependencias Python
│   └── .env            # Variables de entorno
│
├── index.html           # Versión HTML simple (sin backend)
├── render.yaml          # Configuración para Render
└── RENDER_DEPLOYMENT.md # Guía de deployment
```

## 🚀 Deployment en Render

### Sigue la guía completa en [`RENDER_DEPLOYMENT.md`](./RENDER_DEPLOYMENT.md)

**Resumen rápido:**
1. Sube el código a GitHub usando "Save to GitHub"
2. Crea cuenta en Render y MongoDB Atlas (ambos gratis)
3. Deploy backend primero
4. Luego deploy frontend
5. ¡Listo!

## 📧 Formulario de Contacto

### Con Backend (Versión React):
- Los formularios se guardan en MongoDB
- Accede a los datos en: `/api/contact`
- Sin notificaciones por email (configurable)

### Sin Backend (index.html):
- Abre el cliente de email del usuario
- Pre-llena los datos
- Usuario debe enviar manualmente

## 🔐 Variables de Entorno Necesarias

### Frontend (`.env`):
```env
REACT_APP_BACKEND_URL=https://tu-backend.onrender.com
```

### Backend (`.env`):
```env
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/
DB_NAME=audiomix_producciones
CORS_ORIGINS=https://tu-frontend.onrender.com
```

## 💻 Desarrollo Local

### Frontend:
```bash
cd frontend
yarn install
yarn start
```
Abre [http://localhost:3000](http://localhost:3000)

### Backend:
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```
API en [http://localhost:8000](http://localhost:8000)

## 📊 Endpoints de API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/` | Health check |
| POST | `/api/contact` | Enviar formulario |
| GET | `/api/contact` | Ver todos los formularios |

## 🎨 Personalización

### Colores:
Edita las variables CSS en `index.html` o Tailwind config:
```css
--purple-400: #c084fc;
--purple-500: #a855f7;
--purple-600: #9333ea;
```

### Contenido:
Edita `/frontend/src/data/mock.js`:
- Información de la empresa
- Servicios
- Imágenes de portfolio
- Testimonios

## 📱 Responsive

La web está optimizada para:
- 📱 **Móvil:** 375px - 767px
- 📱 **Tablet:** 768px - 1023px
- 💻 **Desktop:** 1024px+

## 🔒 Seguridad

- ✅ CORS configurado correctamente
- ✅ Validación de datos con Pydantic
- ✅ SSL/HTTPS en producción
- ✅ Variables de entorno para secretos

## 🐛 Troubleshooting

Ver la guía completa en `RENDER_DEPLOYMENT.md` - Sección "Solución de Problemas"

## 📄 Licencia

© 2024 Audiomix Producciones

## 🤝 Contacto

**Audiomix Producciones**
- 📧 Email: producciones@audiomixelda.es
- 📞 Teléfono: 684 23 79 96
- 📍 Ubicación: Carrer Societat Musical Verge del Remei, 3, 03610 Petrer, Alicante
- ⏰ Horario: Disponible 24/7

---

**Desarrollado con ❤️ usando Emergent AI**
