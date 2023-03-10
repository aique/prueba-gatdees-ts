# Módulo de objetivos (droide YVH)

A continuación añado una breve documentación acerca de los aspectos más importantes de este módulo de objetivos diseñado para el droide de combate YVH.

## Puesta en marcha

### Requisitos

Será necesario disponer de la siguiente configuración en aquel equipo donde se ejecutará este módulo:

- node.js
- npm
- nvm

### Arrancando el sistema

Para que el módulo comience a escuchar peticiones HTTP será necesario ejecutar los siguientes comandos:

```
nvm use
npm i
npm run dev
```

Las peticiones serán atendidas por defecto en la siguiente url base, siendo el valor del puerto (8888 por defecto) fácilmente configurable desde el fichero `.env`:

```
http://localhost:8888
```

Durante el desarrollo se ha creado una batería de tests tanto unitarios como a nivel de aplicación. Para ejecutarlos simplemente será necesario lanzar el siguiente comando:

```
npm test
```

### Comprobando los test de la Nueva República

Los test proporcionados por la Nueva República se han ubicado en la carpeta
`tests/bin` del proyecto. Para su ejecución será necesario el siguiente comando
una vez arrancada la aplicación mediante los pasos previamente citados:

```
./tests/bin/tests.sh
```

El resultado debería ser algo similar a lo siguiente:

![Resultado de la ejecución de los tests de la Nueva República](./doc/images/test_run.png)

## Documentación

* [Modelo de datos](./doc/entities.md)
* [Configuraciones](./doc/configs.md)
* [Inclusión de nuevos protocolos](./doc/new-protocols.md)
* [Inclusión de nuevos criterios de descarte](./doc/new-discard-criteria.md)
* [Complejidades](./doc/complexity.md)
* [Librerías utilizadas](./doc/libraries.md)
* [Requisitos originales](./doc/requirements.pdf)
