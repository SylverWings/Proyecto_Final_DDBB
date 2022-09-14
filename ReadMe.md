# Base de datos Proyecto Final
---

Para el Proyecto Final (Página de Review de Videojuegos) decidí utilizar MongoDB por las facilidades que da. Además, 
la base de datos está hecha con node, express y mongoose.

La idea de la base de datos es que el Admin cree los diferentes juegos (con sus atributos) y el resto de Usuarios puedan
hacer sus comentarios/dar su opinion de los mismos.

---
## Trabajo Realizado 🔧
---

Decidí segmentar el trabajo en pequeños bloques para poder hacerlo rápido y bien. De esta forma, hice primero los 
modulos. Luego hice las rutas para las diferentes colecciones. Y por último, creé los controladores y su lógica.

---

## Deploy en Heroku 
---

[Link del proyecto en heroku]() 🌎


---

## Instrucciones y endpoints

---

- Abrir el link de heroku para arrancar automáticamente el servidor. 

- Pasamos a postman donde copiaremos también el mismo link para empezar a lanzar peticiones.

---

## Endpoints

---

<h4>Usuarios</h4>

* POST "/api/register" para registrarnos como usurarios.

<br>

* POST "/api/login" para loggearnos como usuarios

<br>

* GET "/api/users/profile" con este Endpoint veríamos la informacion de usuarios (Solo "Admin")

<br>

* DELETE "/api/deleteUser" los mismos usuarios pueden darse de baja

---

<h4>Juegos</h4>

---


* GET "/api/games" para buscar todos los videojuegos

<br>

* GET "/api/games/:id" para buscar un juego a través de su id.

<br>

* GET "/api/games/name/:name" para buscar un juego a traves de su titulo

<br>

* POST "/api/games" este Endpoint, que solo lo puede usar el "Admin", se utiliza para crear un juego

<br>

* PUT "/api/games/:id" en este Endpoint, solo el Admin, podra modificar/actualizar los juegos

<br>

* DELETE "/api/games/delete/:id" este Endpoint solo lo puede usar el "Admin", y se utiliza para eliminar un juego

<br>

---

<h4>Mensajes</h4>

---


* GET "/api/messages" donde solo el "Admin" puede buscar los pedidos

<br>

* GET "/api/messages/:id" donde solo el "Admin" puede buscar los pedidos por su id

<br>

* POST "/api/messages" en este Endpoint, solo los Usuarios registrados, podran crear/enviar un mensaje

<br>

* PUT "/api/messages/:id" en este Endpoint, los Usuarios podran modificar su mensaje

<br>

* DELETE "/api/messages/:id" en este Endpoint, solo los usuarios registrados, pueden eliminar su mensaje

---

<h4>Herramientas 🛠️</h4>

---

- JavaScript

- MongoDB

- Heroku

---

<h4>Diseño y Producido ✒️</h4>

---

Lionel M. Garcia Bustos
