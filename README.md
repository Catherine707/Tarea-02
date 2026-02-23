# Assignment 03 - Despliegue en AWS Elastic Beanstalk

## Descripción del Proyecto

En esta actividad se desarrolló una aplicación web sencilla con una interfaz gráfica estática y agradable, utilizando Vite como herramienta de configuración y build.

El objetivo principal fue desplegar la aplicación utilizando el servicio AWS Elastic Beanstalk, automatizando el proceso mediante Docker y GitHub Actions.

La rama utilizada para esta entrega es:

assignment-03

---

## Tecnologías Utilizadas

- Vite
- JavaScript
- Docker
- AWS Elastic Beanstalk
- GitHub Actions
- Husky
- Doppler

---

## Configuración del Proyecto con Vite

El proyecto fue configurado utilizando Vite para facilitar el desarrollo y la generación del build de producción.

Para ejecutar el proyecto localmente:

npm install
npm run dev

Para generar el build de producción:

npm run build

---

## Configuración de Secretos con Doppler

Se creó un proyecto específico en Doppler para esta actividad.

Las credenciales necesarias para el despliegue en AWS (como AWS_ACCESS_KEY_ID y AWS_SECRET_ACCESS_KEY) fueron almacenadas en Doppler.

Doppler fue conectado con GitHub para que las credenciales se inyecten automáticamente en el pipeline durante la ejecución del workflow.

Esto permite:

- No exponer credenciales en el repositorio.
- Mantener seguridad en el despliegue.
- Automatizar la actualización de secretos.

---

## Dockerización de la Aplicación

Se creó un archivo Dockerfile que permite construir la imagen de la aplicación.

El contenedor:

1. Instala dependencias.
2. Ejecuta el build.
3. Expone el puerto necesario para AWS.

Para construir la imagen manualmente:

docker build -t assignment-03-app .

Para ejecutar el contenedor:

docker run -p 80:80 assignment-03-app

---

## Implementación de Husky

Husky fue configurado para ejecutar validaciones antes de cada commit.

Se configuró un hook pre-commit que permite:

- Verificar estilos de código.
- Evitar commits con errores.
- Mantener consistencia en el repositorio.

Esto asegura que el código subido al repositorio cumpla con las reglas definidas antes de ser integrado.

---

## Pipeline de GitHub

Dentro de la carpeta .github/workflows se creó un pipeline que realiza las siguientes acciones automáticamente:

1. Construcción de la imagen Docker.
2. Despliegue de la aplicación en AWS Elastic Beanstalk.

Cada vez que se hace push a la rama assignment-03, el pipeline:

- Instala dependencias.
- Genera el build.
- Construye la imagen.
- Realiza el despliegue automático en AWS.

---

## URL de AWS Elastic Beanstalk

La aplicación desplegada puede visualizarse en:

http://TU-URL-DE-BEANSTALK-AQUI

---

## Capturas de Pantalla

### Aplicación en funcionamiento

![Aplicación en línea](app-online.png)

### Vista general de AWS Elastic Beanstalk

![Beanstalk Overview](beanstalk-overview.png)

---


## Autora

Catherine Cotí
