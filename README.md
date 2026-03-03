## Ejercicio con Testing

### Por qué testing?

Cuando comienzas a programar una aplicación web, todo es bastante fácil de probar de forma manual: abres el navegador, haces clic aquí y allá, y compruebas con tus propios ojos que todo funciona. Pero las aplicaciones crecen en tamaño y complejidad con el tiempo, y llega un momento en que hacerlo todo a mano se vuelve lento, cansado y, sobre todo, poco fiable (es fácil olvidar comprobar algo).

La solución que usan los equipos de desarrollo profesionales es el **testing automatizado**: escribir pequeños programas que comprueban por nosotros que el código hace lo que se supone que debe hacer. Así, cada vez que modificamos algo, podemos ejecutar todos los tests en segundos y saber de inmediato si hemos roto algo.

### Qué es Node.js?

**Node.js** es un entorno de ejecución que nos permite correr código JavaScript fuera del navegador, directamente en nuestro ordenador desde la terminal. Esto lo convierte en la herramienta perfecta para ejecutar scripts, herramientas de desarrollo y, en nuestro caso, tests.

Puedes comprobar que lo tienes instalado ejecutando en la terminal:

```bash
node --version
```

Si ves un número de versión (por ejemplo `v22.x.x`) significa que está correctamente instalado.

### Qué es el Node Test Runner?

A partir de la versión 18, Node.js incluye su propio **test runner** integrado, sin necesidad de instalar librerías externas. Es la herramienta que usamos en este ejercicio para describir qué debe hacer cada función y verificar si tu solución es correcta.

Cuando ejecutas los tests, el test runner lee los ficheros `.test.js`, ejecuta cada prueba y te muestra en la terminal cuáles han pasado (✔) y cuáles han fallado (✖), con una descripción clara de qué era lo esperado y qué has devuelto tú.

### Instrucciones de uso

#### 1. Haz fork y clona el repositorio

Un **fork** es una copia del repositorio original en tu propia cuenta de GitHub. Trabaja siempre sobre tu fork, nunca directamente sobre el original.

1. Pulsa el botón **Fork** en la esquina superior derecha de esta página en GitHub.
2. Una vez creado el fork en tu cuenta, copia la URL del repositorio.
3. Clona el repositorio en tu ordenador:

```bash
git clone <URL-de-tu-fork>
cd katas01-javascript-basic
```

#### 2. Abre el proyecto en tu editor

```bash
code .
```

#### 3. Resuelve los ejercicios de uno en uno

Los ejercicios están en tres ficheros independientes. Resuélvelos en orden:

| Fichero                   | Contenido                  |
| ------------------------- | -------------------------- |
| `01-variables.test.js`    | Variables y tipos de datos |
| `02-conditionals.test.js` | Condicionales              |
| `03-functions.test.js`    | Funciones                  |

Abre el primer fichero, lee las instrucciones que aparecen como comentarios y escribe tu solución donde se indica.

**Ejecución de los tests**

Mientras trabajas en un ejercicio, ejecuta su script de test para saber si vas por el buen camino. Tienes dos formas equivalentes de hacerlo:

```bash
# Llamando directamente a Node
node --test 01-variables.test.js
node --test 02-conditionals.test.js
node --test 03-functions.test.js

# O usando los scripts definidos en package.json
npm run test:basic
npm run test:conditional
npm run test:function
```

Las dos opciones hacen exactamente lo mismo. `npm run` es simplemente un atajo que evita tener que recordar y escribir el comando completo de Node.

Verás en la terminal algo similar a esto:

```
✔ debería declarar una variable con el valor correcto (1ms)
✖ debería sumar dos números (3ms)
  Error: Expected 5, but got undefined
```

Las líneas con ✔ son tests que ya pasan. Las líneas con ✖ indican qué te falta por resolver. Sigue modificando tu código y vuelve a ejecutar el comando hasta que todos los tests del fichero estén en verde.

**Pasar los tests**

Una vez que todos los tests de un fichero pasan, haz **commit** de ese fichero antes de pasar al siguiente:

```bash
git add 01-variables.test.js
git commit -m "Resuelto ejercicio 01: variables"
```

Repite el proceso con cada uno de los ejercicios restantes.

## Entrega

Cuando termines cada ejercicio (o al finalizar la sesión), sube tus cambios a GitHub con `push`:

```bash
git push
```

Al hacer push, GitHub ejecutará automáticamente los tests del ejercicio que hayas subido y te mostrará el resultado en la pestaña **Actions** de tu repositorio. Si ves una marca verde ✔, ¡todo correcto! Si ves una cruz roja ✖, revisa los errores en el log de la Action y corrige tu código.
