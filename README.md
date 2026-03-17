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

Migraciones

La API cuenta con migraciones realizadas en Django.

Ruta principal de migraciones:

backend/tasks/migrations/0001_initial.py

URLs del proyecto
Frontend

https://tarea-02-1.onrender.com

Backend

https://tarea-02.onrender.com

Documentación de la API

https://tarea-02.onrender.com/api/docs/

Evidencias
Base de datos desplegada

La siguiente imagen muestra la base de datos assignment05_db en PostgreSQL.

La siguiente imagen muestra la tabla tasks_task y sus columnas, coincidiendo con la migración del proyecto:

id

title

description

completed

created_at

updated_at

Aplicación en ejecución

La siguiente imagen muestra el frontend desplegado y funcionando correctamente en Render.

Documentación de la API

La siguiente imagen muestra la documentación de la API generada con Swagger/OpenAPI.

Servicios desplegados en Render

La siguiente imagen muestra los servicios desplegados en Render, tanto frontend como backend.

Configuración de secretos con Doppler
Proyecto en Doppler

La siguiente imagen muestra el proyecto assignment-05 y sus configuraciones en Doppler.

Secretos del backend

La siguiente imagen muestra la configuración de secretos del backend en Doppler.

Secretos del frontend

La siguiente imagen muestra la configuración del frontend en Doppler.

Funcionalidades implementadas

Crear tareas

Listar tareas

Cambiar estado de una tarea

Eliminar tareas

Documentación API con Swagger

Despliegue en la nube de frontend, backend y base de datos

Gestión de secretos con Doppler