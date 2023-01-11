# Modelo de entidades

## Campo de batalla

A modo de concepto general, la pieza principal del modelo de entidades
es la clase `Battlefield`.

Esta clase representa el campo de batalla, en el que existe una colección
de objetivos (`BattlefieldTarget`) y una estrategia de ataque (`BattlefieldAttackStrategy`).

Para obtener el siguiente objetivo a atacar, todos los posibles objetivos ubicados
en el campo de batalla serán filtrados por la estrategia de ataque, la cual devolverá
sólamente aquellos objetivos que cumplan con los protocolos. El primer objetivo de esta
lista será el fijado como siguiente objetivo.

## Estrategia de ataque

La estrategia de ataque (`BattlefieldAttackStrategy`) está formada por una colección de
protocolos.

Cuando se incluye un nuevo protocolo (`BattlefieldProtocol`), se comprueba si depende
de algún otro. En caso de ser dependiente de un protocolo ya establecido, se guardará
detrás de él. De esta forma se consigue una estrategia ordenada de ejecución de protocolos,
donde los dependientes se ejecutan después de aquellos protocolos de los que dependen.

Un caso práctico es la combinación que los [requisitos originales](./doc/requirements.pdf)
mencionan, el protocolo `closest-enemies` junto con el protocolo `assist-allies`.
Dado que debe devolver el objetivo más cercano de aquellos que posean aliados, el
primer protocolo es dependiente del segundo.
