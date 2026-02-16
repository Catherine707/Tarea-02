Aplicación Web con Vite desplegada en CDN

Descripción

Esta aplicación web estática fue desarrollada utilizando Vite. 
El objetivo es que la aplicación pueda ser accedida públicamente a través de un CDN en AWS.

Tecnologías usadas

Vite
JavaScript
HTML
CSS
AWS S3
CloudFront
Doppler
GitHub Actions

Cómo ejecutar localmente

1. Clonar el repositorio
git clone https://github.com/Catherine707/Tarea-02.git

2. Entrar a la carpeta
cd Tarea-02

3. Instalar dependencias
npm install

4. Ejecutar servidor de desarrollo
npm run dev

5. Generar build
npm run build

Esto genera la carpeta dist/ que será utilizada para el despliegue en AWS.

Estructura del proyecto

src/
public/
dist/
package.json
vite.config.js

Autor

Catherine Cotí
