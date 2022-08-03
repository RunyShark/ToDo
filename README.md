# To do App Challenge

Enfocado en dar la mejor experiencia de usuario.

## Enunciado
El siguiente proyecto fue realizado con el fin de cumplir todos los puntos  requeridos de la prueba.

link de la APP: todoapp-mocha-alpha.vercel.app

##  Objetivos del Proyecto
Construir un App utilizando las siguientes tecnologías.
- NodeJS
- Express
- express-validator
- jsonwebtoken
- bcryptjs
- googleapis
- nodemailer
- mongoose
- react - typescript
- redux-toolkit
- axios
- formik
- yup
- sweetalert2
- Material UI
-  React Router v6

### Funcionalidad
La aplicación cuenta con un registro de usuarios, este nos permite crear una cuenta, acceder a la cuenta y también poder recuperar contraseña para no perder acceso a nuestra cuenta.
Una vez ingresado a la APP podemos apreciar una vista de bienvenida que nos indica que seleccionemos una acción o creemos una nueva tarea, tenemos 6 acciones:

- Todas mis tareas
- Tareas importantes / favoritas 
- Tareas pendientes 
- Tareas finalizadas 
- Tareas vencidas 
- Papelera 

Cada una de las acciones nos ofrece una mayor comodidad a la hora de manear nuestras actividades, ya que esta organizan nuestras tareas por nosotros evitando la perdida de tiempo a la hora de buscar una tarea.

### Implementación de tecnologías

##### Creación del servido y manejo de data
Para el almacenamiento de data opté por implementar una base de dato no relacional **mongoose**. 
Creación del API REST **Express** y  para las validaciones utilicé **Express-validator**, esto da mayor comodidad a la hora de trabajar con las validaciones y poder almacenar data limpia.


##### Registro de usuario
Para mayor seguridad del usuario utilicé **bcryptjs** para encriptar las contraseñas antes de guardar el nuevo usuario, cuando un usuario se registra por primera vez, se manda un correo de bienvenida a la APP, para el envío de correos consumí el API de **Google OAuth2.0**, junto con **nodemailer**, también para la validación de sesión implemente **jsonwebtoken**, esto último se utiliza para guardar las tareas con el respectivo usuario, cada usuario tiene sus propias tareas, que solo él puede ver, editar, eliminar y crear en su cuenta.


##### Creación de interfaz de usuario 
Para todo lo relacionado con la interfaz de usuario utilice **React con typescript** 



##### **Estilo**
Para dar estilo a la APP utilice **Material UI** junto con **sweetalert2** para el manejo de alertas, cabe resaltar que desde el backend se manda distintas alertas al usuario.

**Manejo de estado**
Para el manejo de estado fuera de los componentes implemente **Redux-Toolkit**.

**Rutas**
Creacion de rutas **React Router v6.**

**Consumo de API Rest**
Opté por implementar **axios**, ya que facilita mucho las cosas a mi punto de vista.

**Manejo de formularios**
Para manejar todo lo relacionado con formularios utilice **formik** junto con **yup** para las validaciones.

#### Requerimientos de Software
Instalación de todos los paquetes necesario npm i.
Para correr backend como fronted   npm run dev.
Para poder utilizar todas la herramientas de la plataforma, se debe contar con un computador con acceso a Internet y un navegador Web (por ejemplo, Chrome , Opera, Safari o Firefox ).


#### Bug conocidos
Hasta el momento ningún bug conocido.
