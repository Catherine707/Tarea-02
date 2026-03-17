# Assignment 05 - Task Manager

## Descripción
Este proyecto consiste en una aplicación web sencilla para la gestión de tareas, desarrollada como un monorepo.  
La solución incluye frontend, backend y base de datos, integrados mediante una API REST.

La aplicación permite:
- crear tareas
- listar tareas
- cambiar el estado de tareas
- eliminar tareas

---

## Tecnologías utilizadas

### Frontend
- React
- Vite

### Backend
- Django
- Django REST Framework
- drf-spectacular
- Gunicorn
- WhiteNoise

### Base de datos
- PostgreSQL

### Despliegue
- Render

### Gestión de secretos
- Doppler

---

## Estructura del proyecto

```bash
assignment-05/
├── backend/
├── frontend/
├── screenshots/
│   ├── backend-docs.png
│   ├── database-columns.png
│   ├── database-main.png
│   ├── doppler-backend.png
│   ├── doppler-frontend.png
│   ├── doppler-project.png
│   ├── frontend-app.png
│   └── render-services.png
└── README.md

Configuración del monorepo

El proyecto fue desarrollado bajo una estructura monorepo, separando:

frontend/ para la interfaz de usuario

backend/ para la API REST y la lógica del servidor