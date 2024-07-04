# Challenge para Security and System

Este proyecto es una aplicación web desarrollada con Next.js y TypeScript que incluye varias funcionalidades, como la gestión de intereses mediante un contexto y un reducer. A continuación, se detallan las tecnologías utilizadas y las funcionalidades implementadas.

## Tecnologías Utilizadas

### Next.js


### TypeScript


### Context API

La [Context API](https://reactjs.org/docs/context.html) de React permite compartir valores entre componentes sin necesidad de pasar props manualmente en cada nivel del árbol de componentes. En este proyecto, se utiliza para gestionar los intereses del usuario de manera centralizada, y permite persistir el estado de los intereses cuando se desplaza de una pestaña a otra.

### Reducer

Un [reducer](https://reactjs.org/docs/hooks-reference.html#usereducer) es una función en React que permite manejar el estado de los componentes de manera más predecible y controlada. Se utiliza comúnmente junto con la Context API para manejar estados. En este caso se utiliza para las acciones de agregar, modificar y eliminar intereses.

## Funcionalidades

- **Gestión de intereses**: Los usuarios pueden agregar, modificar y eliminar intereses. Estos intereses se gestionan mediante un contexto y un reducer.
- **Interfaz de usuario**: La interfaz incluye componentes reutilizables y estilizados con CSS Modules.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

git clone https://github.com/agustinlevental/security.git
cd security
npm install
npm run dev

## Test
Se utilizó Jest y Testing Library para realizar test y comprobar que el contexto pase adecuadamente los intereses a los componentes hijos del Provider, y para corroborar que funcionen bien las acciones despachadas por el Reducer.

Escribe el siguiente comando en la consola para ejecutar el test:
npm test