# Sistema de Gestión de Clientes

React + Firebase + Cloudflare Pages

## Stack
- **Frontend**: React 18 + Vite
- **Base de datos**: Firebase Firestore
- **Auth**: Firebase Authentication
- **Deploy**: Cloudflare Pages
- **Código**: GitHub

## Configuración inicial

### 1. Clonar y preparar
```bash
git clone <tu-repo>
cd gestion-clientes
npm install
cp .env.example .env
```

### 2. Configurar Firebase
1. Ve a https://console.firebase.google.com
2. Crea proyecto nuevo
3. Activa Firestore, Authentication y Storage
4. En Configuración > Aplicaciones web → copia las credenciales
5. Pégalas en tu archivo `.env`

### 3. Desarrollo local
```bash
npm run dev
```

### 4. Configurar GitHub
```bash
git init
git add .
git commit -m "feat: estructura inicial del proyecto"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/gestion-clientes.git
git push -u origin main
```

### 5. Configurar Cloudflare Pages
1. Ve a https://dash.cloudflare.com → Pages
2. "Create a project" → conecta tu repo de GitHub
3. Build command: `npm run build`
4. Build output: `dist`
5. Agrega las variables de entorno (las mismas de `.env`)

### 6. Secrets en GitHub (para deploy automático)
En tu repo → Settings → Secrets and variables → Actions:
- VITE_FIREBASE_API_KEY
- VITE_FIREBASE_AUTH_DOMAIN
- VITE_FIREBASE_PROJECT_ID
- VITE_FIREBASE_STORAGE_BUCKET
- VITE_FIREBASE_MESSAGING_SENDER_ID
- VITE_FIREBASE_APP_ID
- CLOUDFLARE_API_TOKEN
- CLOUDFLARE_ACCOUNT_ID

## Flujo de trabajo (sin perder nada)

```bash
# Nuevo desarrollo
git checkout -b feature/nombre-funcion

# Guardar progreso
git add .
git commit -m "feat: descripción de lo que hiciste"

# Subir a GitHub
git push origin feature/nombre-funcion

# Cuando está listo → merge a main
git checkout main
git merge feature/nombre-funcion
git push origin main
# → Cloudflare despliega automáticamente

# Si algo falla → revertir
git revert HEAD    # crea commit de reversión (seguro)
git push origin main
```

## Estructura de carpetas
```
src/
├── components/
│   ├── layout/      → barra lateral, estructura
│   ├── clientes/    → lista, formulario, detalle
│   ├── agenda/      → calendario, formulario visitas
│   ├── contratos/   → tipos y gestión
│   └── tiempo/      → registro y timer
├── pages/           → pantallas principales
├── services/        → Firebase (clientes, visitas, tiempo)
├── hooks/           → lógica reutilizable
├── context/         → estado global
└── utils/           → helpers y schema
```
