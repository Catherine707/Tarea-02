# Tarea 07 - API GraphQL con Django

## Descripción

En esta actividad se desarrolló una API utilizando **GraphQL** con **Django** y **Graphene-Django**, con el propósito de demostrar cómo se pueden generar endpoints flexibles para consultar únicamente los campos necesarios, sin depender de múltiples endpoints tradicionales.

La aplicación fue desplegada en **Render**, lo que permitió exponer un **endpoint público GraphQL** sin autenticación para realizar las consultas solicitadas en el enunciado.

## Tecnologías utilizadas

- Python
- Django
- Graphene-Django
- SQLite (desarrollo local)
- PostgreSQL / Render
- Render
- GitHub

## Repositorio

Repositorio del proyecto:  
`https://github.com/Catherine707/Tarea-02/tree/assignment-07`

## Endpoint público

Endpoint GraphQL público:  
`https://graphql-deployment.onrender.com/graphql`

## Objetivo de la actividad

Comprender cómo se puede utilizar **GraphQL** para la generación de endpoints, permitiendo consultar únicamente los campos requeridos en cada petición.

## Modelos implementados

Para el desarrollo de la API se implementaron dos modelos principales:

- **Autor**
- **Libro**

Estos modelos fueron creados en la base de datos con varios campos para demostrar el uso correcto de GraphQL y la relación entre entidades.

## Esquemas de datos

### Modelo: Autor

**Descripción:**  
Representa a los autores registrados en la base de datos y asociados a los libros disponibles en la API.

**Campos disponibles:**

- `id`: identificador único del autor
- `nombre`: nombre completo del autor
- `nacionalidad`: nacionalidad del autor
- `edad`: edad del autor
- `activo`: indica si el autor se encuentra activo o no

**Ejemplos de registros:**

- Gabriel Garcia Marquez
- Osamu Dazai

### Modelo: Libro

**Descripción:**  
Representa los libros almacenados en la base de datos y relacionados con un autor.

**Campos disponibles:**

- `id`: identificador único del libro
- `titulo`: nombre del libro
- `genero`: género literario del libro
- `anioPublicacion`: año de publicación
- `disponible`: indica si el libro está disponible
- `autor`: relación con el modelo Autor

**Ejemplos de registros:**

- Cien anos de soledad
- Indigno de ser humano

## Relación entre modelos

El modelo **Libro** tiene una relación con el modelo **Autor**, ya que cada libro pertenece a un autor. Gracias a GraphQL, es posible consultar en una misma petición tanto la información del libro como la del autor asociado.

## Consultas de ejemplo

### Consulta de autores

```graphql
{
  allAutores {
    id
    nombre
    nacionalidad
    edad
    activo
  }
}
Consulta de libros
{
  allLibros {
    id
    titulo
    genero
    anioPublicacion
    disponible
    autor {
      id
      nombre
      nacionalidad
    }
  }
}
Evidencias
1. Servicio desplegado en Render

2. Consulta de autores en GraphQL

3. Consulta de libros en GraphQL

4. Código de los modelos

5. Código del esquema GraphQL

Funcionamiento de la API

La API permite consultar la información de los modelos de forma flexible mediante GraphQL. Esto significa que el cliente puede solicitar únicamente los campos que necesita, lo cual representa una de las principales ventajas de este tipo de arquitectura.

Se creó un endpoint público sin autenticación y se cargaron datos de prueba en la base de datos para verificar el correcto funcionamiento de las consultas.

Resultados obtenidos

Se comprobó que la API responde correctamente a las consultas realizadas desde la interfaz GraphiQL, mostrando:

la información de los autores registrados
la información de los libros registrados
la relación entre libros y autores
el funcionamiento del endpoint público desplegado en Render
Conclusión

Se logró desarrollar e implementar una API GraphQL funcional utilizando Django y Graphene-Django. El sistema cuenta con dos modelos relacionados, un endpoint público accesible desde Render y documentación de los campos disponibles de cada modelo. Además, se verificó el correcto funcionamiento de la API mediante consultas ejecutadas exitosamente en GraphiQL.