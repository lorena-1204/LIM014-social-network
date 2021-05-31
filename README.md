# Red Social: IChef 
(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )
***

## 1. Definición
IChef, es una red social creada para amantes de la cocina, esta plataforma permite que los usuarios publiquen sus recetas, visualizar las recetas de otras personas, den like a sus recetas favoritas.\
Si no sabes que cocinar el día de hoy  visita IChef y encuentre deliciosas comidas.

## 2. Prototipo


## 3. Historia de Usuario

### 3.1 **Historia de usuario  1 - Registro**
**Como:** Usuario nuevo de una red social.\
**Quiero:** Poder registrarme con o sin tener un correo gmail e ingresar una contraseña y tener un nombre de usuario.\
**Para:** Poder ingresar a la red social.

**Criterios de aceptación:** 
* **H1.0 -  mobile** 
  - Mostrar un botón que te lleve a la página de iniciar sesión.
  - Mostrar un botón que te lleve a la página de Registrarse.

* **H.U 1.1 - Ingresar por correo**
  - Se visualiza input donde el usuario ingrese sus datos:  nombre completo, nombre de usuario, correo y contraseña.
  - Botón para poder confirmar que se registro.
  - Si el usuario coloca mal sus datos o deja algún espacio en blanco saldrá un mensaje : “El correo que ingresó es invalido, vuelva a intentarlo.”
  - Visualizar los datos en la base firebase 

* **H.U 1.2 - Ingresar por google**
  - Poder registrarse con una cuenta de google.
  - Crear un Botón para que se registre.
  - Visualizar los datos en la base firebase 
 
### 3.2 **Historia de usuario   2 - Loguearse**
**Como:** Usuario de una red social.\
**Quiero:** Poder ingresar a través de mi gmail o colocar mi usuario y contraseña.\
**Para:** Logearme.

**Criterios mínimos de aceptación:**
* **H.U. 2.0 - Loguearse por correo**
  - Input donde se coloque el usuario y contraseña.
  - Crear un botón que te permita validar el correo y usuario. 
  - Si el correo no está registrado , mostrar un mensaje: “Correo no válido”.
  - Si los datos son correctos  pasar a la página de Inicio.

* **H.U. 2.1 - Loguearse por google**
  - Boton , donde se ingresará a través de gmail.
  - Si los datos son correctos  pasar a la página de Inicio.

### 3.3 **Historia de usuario  3 - Crear post, modificar contenido y eliminar post**
**Como:** Usuario.\
**Quiero:**  Publicar, editar, borrar y visualizar mi  publicación.\
**Para:** Poder dar a conocer mis recetas

**Criterios de aceptación:**
* **H.U. 3.0 - Crear sección publicar post**
  - Crear un input donde se pueda escribir lo que se desea publicar.
  - Crear un botón para publicar.
  - Guardar los cambios (actualizado automático o al recargar) .
* **H.U. 3.1 - Modificación de un post personal ya publicado**
  - Crear un botón para editar la publicación.
  - Crear un botón para guardar los cambios.
  - Guardar los cambios (actualizado automático o al recargar).
* **H.U. 3.2 - Eliminar de un post personal ya publicado**
  - Crear un botón para eliminar la publicación.
  - Se mostrará un modal  para confirmar la eliminación de la publicación con el siguiente mensaje “¿Seguro que quieres eliminar esta publicación? ”.
  - El modal debe llevar dos botones : “Cancelar” para no eliminar el post y “Eliminar” para confirmar la eliminación del post.
  - Guardar los cambios (actualizado automático o al recargar).
* **H.U. 3.3 - Historial de posts del usuario**
  - Visualizar mis anteriores publicaciones.
  - De orden vertical y por fecha del más reciente al más antiguo.
  - Poder hacer scroll hasta el inicio de mis publicaciones. 
 
### 3.4 **Historia de usuario  4 - Filtrar comidas y bebidas por # menú & post**
**Como:** Usuario de la red social.  
**Quiero:**  Poder filtrar los post con las diferentes categorías (#comida #bebida).\
**Para:** Visualizar mejor el contenido.

**Criterios mínimos de aceptación** 
* **H.U. 4.0 - Sección de post publicar dos botones**
  - Se mostrará dos botones para filtrar los post según según #comida o #bebida.
  - El uso de los “#” debe ser obligatorio en cada post.
  - Guardar el añadido al publicar el post (actualizado automático o al recargar).

* **H.U. 4.1 - Sección de menú dos botones**
  - Se mostrará dos botones para filtrar los post según según #comida o #bebida.
  - Según el botón que se seleccione solo mostrará los post que contengan el “#” correspondiente. 
  - Mostrar los cambios, actualizado automático.
  - De orden vertical y por fecha del más reciente al más antiguo.
  - Al mostrar la data poder hacer scroll. 

### 3.5 **Historia de usuario 5 - Página de inicio**
**Como:**  Usuario logueado.\
**Quiero:**  Visualizar las publicaciones de otros. 
**Para:** Leer diversas recetas.
 
**Criterios mínimos de aceptación**
* **H.U. 5.0 - Visualizar otros post**
  - El usuario visualizará las recetas de otros usuarios. 
  - El orden será del más reciente al más antiguo según la fecha posteada por el servidor.
  - Se actualizará la página solo al recargar. 

### 3.6 **Historia de usuario  6 - Dar like - autolike** 
**Como:**  Usuario logueado.\
**Quiero:**  Dar like, quitar mi like de la publicación y visualizar cuantos like tiene una publicación.\
**Para:** Mostrar mi interés por la publicación
criterios mínimos de aceptación.\
* **H.U. 6.0 - Publicaciones externas**
  - El usuario encontrará un botón con el cual podrá dar like a las publicación que más le gusten.
  - El usuario podrá visualizar a que publicaciones le dio like, ya que tendrán el botón pintado de color rojo.
  - El usuario podrá quitar el like a las publicaciones, pulsando el botón antes mencionado y se  quitará el color rojo. 
  - EL usuario visualizará  la cantidad de likes que tiene una publicación.
  - Guardar los cambios (actualizado automático).
 
* **H.U. 6.1 - Autolike** 
  - El usuario encontrará un botón con el cual podrá dar like a sus  publicaciones.
  - El usuario podrá visualizar cuantos like tiene  ya que tendrán el botón pintado de color rojo.
  - El usuario podrá quitar el like a sus publicaciones, pulsando el botón antes mencionado y se  quitará el color rojo. 
  - EL usuario visualizará  la cantidad de likes que tiene en una publicación.
  - Guardar los cambios (actualizado automático).
 
### 3.7 **Historia de usuario  7 -  Ser responsive** 
**Como:** Usuario de una red social.\
**Quiero:** Poder visualizar la página en diversos dispositivos.\
**Para:** Tener la información cuando la requiera. 
 
**Criterios mínimos de aceptación** 
* **H.U. 7.0 - Otros dispositivos**
  - La red social estará adaptada para cualquier dispositivo.
  - Se realizará la misma en diseño responsive usando los tamaños como : 1920×1080 (escritorio grande), 1366×768 (ordenador portátil medio) y 360×640 (móvil pequeño).
  - Para el diseño en tablet y celular se creará un menú hamburguesa en la parte superior de la página.
  - Para el diseño en escritorio, no se visualizará el menú hamburguesa, pero el contenido será desplegado (inicio,#comida # bebida , cerrar sesión)
 
### 3.8 **Historia de usuario  8  - Pantalla del perfil** 
**Como:** Usuario logueado en la red social.\
**Quiero:** Visualizar y dar a conocer mi información personal.\
**Para:** Subir y cambiar mi foto de perfil , editar mi información personal.\
**Criterios mínimos de aceptación**
* **H.U. 8.0 - foto de perfil y portada:** 
  - El usuario podrá subir una foto de perfil.
  - El usuario podrá cambiar su foto de perfil
  - Si el usuario no desea colocar una foto, aparecerá una imagen predeterminada.
  - Cuando se encuentre en desktop, se mostrará una imagen predeterminada en la portada.

* **H.U.8.1 - Datos del usuario**
  - El usuario podrá editar su información como: nombre.
  - El usuario podrá agregar una breve descripción sobre ella si lo desea.
  - El usuario podrá editar la descripción ingresada. 

## 4. Consideraciones generales
* Quiénes son los principales usuarios de producto.
