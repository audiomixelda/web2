# ⚡ QUICK START - Deployment en Render

## 🎯 3 Pasos para Deployar

### 1️⃣ MongoDB Atlas (5 minutos)
1. Ir a [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crear cluster GRATIS (M0)
3. Crear usuario de BD
4. Permitir acceso desde cualquier IP (0.0.0.0/0)
5. Copiar connection string
6. Reemplazar `<password>` con tu contraseña

```
mongodb+srv://usuario:TU_PASSWORD@cluster.xxxxx.mongodb.net/
```

---

### 2️⃣ Subir a GitHub (2 minutos)
1. En Emergent → Click "Save to GitHub"
2. Conectar cuenta GitHub
3. Crear repositorio: `audiomix-producciones`
4. Push

---

### 3️⃣ Deployar en Render (10 minutos)

#### A. Backend:
1. [render.com](https://render.com) → New → Web Service
2. Conectar repositorio GitHub
3. Configurar:
   - Name: `audiomix-backend`
   - Root Directory: `backend`
   - Build: `pip install -r requirements.txt`
   - Start: `uvicorn server:app --host 0.0.0.0 --port $PORT`
   - Instance Type: FREE

4. Variables de entorno:
   ```
   MONGO_URL = tu_connection_string_de_mongodb
   DB_NAME = audiomix_producciones
   CORS_ORIGINS = *
   ```

5. Create Web Service
6. **Copiar la URL del backend**

#### B. Frontend:
1. Render → New → Static Site
2. Mismo repositorio
3. Configurar:
   - Name: `audiomix-frontend`
   - Root Directory: `frontend`
   - Build: `yarn install && yarn build`
   - Publish: `build`

4. Variables de entorno:
   ```
   REACT_APP_BACKEND_URL = URL_DE_TU_BACKEND
   ```

5. Create Static Site

---

## ✅ ¡Listo!

Tu web estará en:
```
https://audiomix-frontend.onrender.com
```

Ver formularios recibidos:
```
https://audiomix-backend.onrender.com/api/contact
```

---

## 🔧 Último paso: Actualizar CORS

1. Ve a tu backend en Render
2. Environment → Editar `CORS_ORIGINS`
3. Cambiar de `*` a:
   ```
   https://audiomix-frontend.onrender.com
   ```
4. Save (se reiniciará automáticamente)

---

## 🆘 Problemas Comunes

### Backend no inicia:
- Revisa logs en Render
- Verifica que MONGO_URL esté correcto (sin espacios)
- Verifica que la contraseña no tenga caracteres especiales

### Frontend no conecta:
- Verifica que REACT_APP_BACKEND_URL sea la URL correcta
- Debe incluir `https://`

### Formulario no guarda:
- Ve a MongoDB Atlas → Network Access
- Asegúrate de que 0.0.0.0/0 esté permitido

---

## 📖 Guía Completa

Para más detalles, ver [`RENDER_DEPLOYMENT.md`](./RENDER_DEPLOYMENT.md)

---

## 💰 Costos

- **MongoDB Atlas:** GRATIS (512MB)
- **Render Backend:** GRATIS
- **Render Frontend:** GRATIS
- **Total:** $0/mes 🎉

**Nota:** Los servicios gratis "duermen" después de 15 min sin uso. Primera carga puede tardar 30-60 segundos.

---

¡Tu landing page estará online en menos de 20 minutos! 🚀
