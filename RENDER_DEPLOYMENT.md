# 🚀 Guía de Deployment en Render - Audiomix Producciones

Esta guía te ayudará a deployar tu aplicación en Render de forma gratuita.

## 📋 Pre-requisitos

1. Cuenta en [render.com](https://render.com) (gratis)
2. Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (gratis)
3. Tu código en GitHub

---

## 🗄️ Paso 1: Configurar MongoDB Atlas (Base de Datos)

### 1.1 Crear Cluster Gratuito

1. Ve a [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crea una cuenta o inicia sesión
3. Click en "Build a Database"
4. Selecciona **M0 FREE** (el plan gratuito)
5. Región: Elige la más cercana (Frankfurt, Ireland, etc.)
6. Cluster Name: `audiomix-cluster`
7. Click en "Create"

### 1.2 Configurar Acceso

1. **Database Access:**
   - Ve a "Database Access" en el menú lateral
   - Click en "Add New Database User"
   - Username: `audiomix_user`
   - Password: Genera una contraseña segura (guárdala)
   - Database User Privileges: "Read and write to any database"
   - Click en "Add User"

2. **Network Access:**
   - Ve a "Network Access"
   - Click en "Add IP Address"
   - Click en "Allow Access from Anywhere" (0.0.0.0/0)
   - Click en "Confirm"

### 1.3 Obtener Connection String

1. Ve a "Database" → Tu cluster
2. Click en "Connect"
3. Click en "Connect your application"
4. Copia el connection string
5. Debería verse así:
   ```
   mongodb+srv://audiomix_user:<password>@audiomix-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. **IMPORTANTE:** Reemplaza `<password>` con tu contraseña real
7. Guarda este string, lo necesitarás después

---

## 🔧 Paso 2: Subir Código a GitHub

### 2.1 Desde Emergent

1. En Emergent, haz click en **"Save to GitHub"**
2. Conecta tu cuenta de GitHub si no lo has hecho
3. Crea un nuevo repositorio o selecciona uno existente:
   - Nombre sugerido: `audiomix-producciones`
   - Público o Privado (cualquiera funciona)
4. Click en "PUSH TO GITHUB"
5. Espera a que termine (verás un mensaje de confirmación)

### 2.2 Verificar en GitHub

1. Ve a tu repositorio en GitHub
2. Verifica que veas estas carpetas:
   - `/frontend`
   - `/backend`
   - `render.yaml`
   - `index.html`

---

## 🌐 Paso 3: Deployar Backend en Render

### 3.1 Crear Web Service para Backend

1. Ve a [dashboard.render.com](https://dashboard.render.com)
2. Click en "New" → "Web Service"
3. Conecta tu repositorio de GitHub:
   - Si es tu primera vez, autoriza Render
   - Busca tu repositorio `audiomix-producciones`
   - Click en "Connect"

### 3.2 Configurar Backend

Completa el formulario:

| Campo | Valor |
|-------|-------|
| **Name** | `audiomix-backend` |
| **Region** | Frankfurt (o tu preferida) |
| **Branch** | `main` (o tu rama principal) |
| **Root Directory** | `backend` |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `uvicorn server:app --host 0.0.0.0 --port $PORT` |
| **Instance Type** | `Free` |

### 3.3 Variables de Entorno del Backend

Click en "Advanced" → "Add Environment Variable"

Agrega estas variables:

| Key | Value |
|-----|-------|
| `PYTHON_VERSION` | `3.11.0` |
| `MONGO_URL` | Tu connection string de MongoDB Atlas |
| `DB_NAME` | `audiomix_producciones` |
| `CORS_ORIGINS` | `*` (por ahora, lo cambiaremos después) |

**IMPORTANTE:** En `MONGO_URL`, asegúrate de:
- Reemplazar `<password>` con tu contraseña real
- NO incluir espacios ni saltos de línea

### 3.4 Crear el Servicio

1. Click en "Create Web Service"
2. Espera 5-10 minutos mientras Render:
   - Instala las dependencias
   - Inicia tu backend
3. Cuando veas "Live" en verde, ¡está listo!
4. **COPIA LA URL** del backend (algo como: `https://audiomix-backend.onrender.com`)

---

## 🎨 Paso 4: Deployar Frontend en Render

### 4.1 Crear Static Site para Frontend

1. En el dashboard de Render, click en "New" → "Static Site"
2. Selecciona el mismo repositorio de GitHub
3. Click en "Connect"

### 4.2 Configurar Frontend

| Campo | Valor |
|-------|-------|
| **Name** | `audiomix-frontend` |
| **Branch** | `main` |
| **Root Directory** | `frontend` |
| **Build Command** | `yarn install && yarn build` |
| **Publish Directory** | `build` |

### 4.3 Variables de Entorno del Frontend

Click en "Advanced" → "Add Environment Variable"

| Key | Value |
|-----|-------|
| `NODE_VERSION` | `18.17.0` |
| `REACT_APP_BACKEND_URL` | La URL de tu backend (ej: `https://audiomix-backend.onrender.com`) |

### 4.4 Crear el Sitio

1. Click en "Create Static Site"
2. Espera 5-10 minutos mientras Render construye tu frontend
3. Cuando veas "Live", ¡tu web está lista!
4. Click en la URL para ver tu sitio

---

## 🔐 Paso 5: Actualizar CORS (Seguridad)

Una vez que ambos servicios estén funcionando:

1. Ve a tu backend en Render
2. Ve a "Environment"
3. Edita `CORS_ORIGINS`
4. Cambia `*` por la URL de tu frontend:
   ```
   https://audiomix-frontend.onrender.com
   ```
5. Click en "Save Changes"
6. El servicio se reiniciará automáticamente

---

## ✅ Verificación Final

### Prueba que Todo Funcione:

1. **Abre tu frontend:** `https://audiomix-frontend.onrender.com`
2. **Verifica que se vea correctamente:**
   - Logo y diseño
   - Secciones (Servicios, Trabajos, Contacto)
   - Banner de logos animado
3. **Prueba el formulario:**
   - Llena todos los campos
   - Click en "Enviar Consulta"
   - Deberías ver mensaje de éxito
4. **Verifica que se guardó:**
   - Ve a: `https://audiomix-backend.onrender.com/api/contact`
   - Deberías ver tu formulario en formato JSON

---

## 🎯 URLs Finales

Después del deployment tendrás:

- **Tu Web (Frontend):** `https://audiomix-frontend.onrender.com`
- **Tu API (Backend):** `https://audiomix-backend.onrender.com`
- **Ver formularios:** `https://audiomix-backend.onrender.com/api/contact`

---

## 🔄 Actualizaciones Futuras

Cuando quieras actualizar tu web:

1. Haz cambios en Emergent
2. "Save to GitHub" (push changes)
3. Render detectará los cambios automáticamente
4. Redeploy automático en 5-10 minutos

---

## 💡 Notas Importantes

### Plan Free de Render:

- ✅ Completamente gratis
- ✅ SSL/HTTPS incluido
- ⚠️ Los servicios "duermen" después de 15 min sin uso
- ⚠️ Primera carga puede tardar 30-60 segundos (mientras "despierta")
- ✅ Ilimitados deploys y redeploys

### Para Mantener Activo 24/7 (Opcional):

Puedes usar un servicio de "ping" gratis como:
- [UptimeRobot](https://uptimerobot.com) (gratis)
- [Cron-job.org](https://cron-job.org) (gratis)

Configúralos para hacer ping a tu backend cada 10 minutos.

---

## 🆘 Solución de Problemas

### Backend no inicia:

1. Verifica que `MONGO_URL` esté correcto
2. Asegúrate de que la contraseña no tenga caracteres especiales sin escapar
3. Revisa los logs en Render (tab "Logs")

### Frontend no se conecta al backend:

1. Verifica que `REACT_APP_BACKEND_URL` tenga la URL correcta
2. Debe ser la URL del backend (no la del frontend)
3. Debe incluir `https://` al inicio

### Formulario no guarda:

1. Ve a los logs del backend
2. Busca errores relacionados con MongoDB
3. Verifica que en MongoDB Atlas:
   - El usuario tenga permisos
   - La IP 0.0.0.0/0 esté permitida

### Error de CORS:

1. Verifica que `CORS_ORIGINS` en el backend incluya la URL del frontend
2. O temporalmente usa `*` para debugging

---

## 🎉 ¡Listo!

Tu landing page de Audiomix Producciones está ahora en producción, accesible 24/7 desde cualquier parte del mundo, con:

- ✅ SSL/HTTPS
- ✅ Formulario funcional
- ✅ Base de datos persistente
- ✅ 100% gratis

---

## 📞 Contacto

Si necesitas ayuda, revisa:
- Documentación de Render: [render.com/docs](https://render.com/docs)
- MongoDB Atlas Docs: [docs.mongodb.com](https://docs.mongodb.com)

**¡Tu web está lista para recibir clientes!** 🚀
