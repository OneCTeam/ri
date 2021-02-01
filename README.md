# R-I API

#### RI es una API de imagenes aleatorias con diferentes tipos de metodos <br><br>

## Enlaces

> Guia Completa: https://doc.r-i.xyz/

> API: http://r-i.xyz/

> Soporte: https://www.onecteam.studio/r/Discord

> OneCTeam: https://www.onecteam.studio/

## Metodos

###### Cabe destacar que los metodos se encuentran en ingles ya que nosotros programamos en ingles, pero la api se encuentra totalmente en español

<br>

### Animales

<br>

| Nombre   | Metodo         |
| -------- | -------------- |
| Gatos    | `<ri>.cat()`   |
| Perros   | `<ri>.dog()`   |
| Peces    | `<ri>.fish()`  |
| Caballos | `<ri>.horse()` |
| Koalas   | `<ri>.koala()` |
| Pandas   | `<ri>.panda()` |

### Acciones

<br>

| Nombre     | Metodo          |
| ---------- | --------------- |
| Patada     | `<ri>.kick`     |
| Bofetada   | `<ri>.slap`     |
| Felicidad  | `<ri>.happy`    |
| Durmiendo  | `<ri>.sleep`    |
| Beso       | `<ri>.kiss`     |
| Abrazo     | `<ri>.hug`      |
| Asesinar   | `<ri>.kill`     |
| Llorando   | `<ri>.cry`      |
| Bailando   | `<ri>.dance`    |
| Confundido | `<ri>.confused` |
| Pose T     | `<ri>.tPose`    |
| Comiendo   | `<ri>.eating`   |

<br>

##### El `<ri>` remplázalo como tu tengas definido el paquete

## Como usarlo

<br>

> Necesitaras una función asíncrona

```javascript
const ri = require("r-i")

let img = await ri.<metodo>(version)
/*
Por el momento solo tenemos la versión 1 (v1)
Si no seleccionas ninguna versión,
el paquete seleccionara automáticamente la versión 1*/
```
