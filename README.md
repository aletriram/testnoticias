# Proyecto base para el desarrollo de sitios estáticos con Eleventy en Netlify

Este proyecto de incio está basado en [Eleventy](https://www.11ty.io), un genial y sencillo generador de sitios web estáticos.

La configuración de este entorno de trabajo incluye:

- Estructura y organización básica de proyecto.
- Configuración de Eleventy como generador de estáticos.
- Configuración de [Parcel](https://parceljs.org/) como generador de bundles.
- Configuración del entorno de desarrollo utilizando Netlify CLI.
- Procesado de Javascript moderno ES6.
- Preprocesado de archivos Sass (.scss) a CSS.
- Configuración de Nunjuck como motor de plantillas.
- Integración de Vue Single File Components.
- Empaquetado y minificado de CSS y Javascript para producción.
- Manejo y optimización de Assets.
- Configuración para publicación en Netlify.
- Instalación de dependencias y configuración de Netlify Functions.


### Instalación

En el directorio donde hemos descargado nuestro repositorio ejecutaremos:

```
$ npm i
```

**Nota:** Es importante no olvidar actualizar la información propia del proyecto en el `package.json`. Debemos configurar el nombre, la descripción y el repositorio del proyecto. Así como añadir los colaboradores que van a participar y generar una primera versión.


### Entorno de desarrollo

Para arrancar el entorno de desarrollo ejecutaremos en la terminal:

```
$ npm run dev
```

Este comando levanta un servidor web local en la URL: [http://localhost:8080](http://localhost:8080)

La configuración del entorno de desarrollo está basada en Netlify CLI lo que nos permite emular en local todas las funcionalidades disponibles en el entorno de producción de Netlify. Con Netlify CLI podemos ejecutar nuestras funciones lamda (Netlify Functions) y probar otros parámetros como las redirecciones de URL sin necesidad de publicar o desplegar el proyecto online.


### Entorno de producción

El comando de producción es el encargado de construir nuestro sitio web. Una vez precompila todas las plantillas, optimiza los estilos CSS y genera los bundles javascript, agrupará todos los archivos necesarios para publicar nuestra web en la carpeta `/dist`.

Para ejecutar el comando de producción:

```
$ npm run build
```

### Netlify functions

Para probar nuestras funciones tendremos que acceder a la ruta:

```
/localhost:8080/.netlify/functions/{{NOMBRE_FUNCION}}
```

Algunos aspectos a tener en cuenta al utilizar las funciones:

- Cada función dispondrá de su propia carpeta dentro de `/functions`.
- Nombraremos la carpeta que contiene una función con el mismo nombre del archivo `.js` de la función que contiene.
- Cada carpeta incluirá su propio `package.json` con las dependencias de la función.

Ejemplo: Si queremos publicar una función `test.js` este archivo se ubicará en `./functions/test/test.js` y podremos acceder a ella en `/localhost:8080/.netlify/functions/test`.


