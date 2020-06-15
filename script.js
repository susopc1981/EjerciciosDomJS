// Ejercicio 1
// Completa la función para que devuelva el elemento h1 de la página web.
//

// const getH1Element = () => {
//   const data = document.querySelector("h1");
//   return data;
// };
// window.onload = console.log(getH1Element());

//
// // Ejercicio 2
// Completa la función para que devuelva el elemento con id main de la página web.
//

// const getMainElement = () => {
//     const data = document.querySelector("#main")
//     return data;
// }

// window.onload = console.log(getMainElement())

//
// Ejercicio 3
// Completa la función para que devuelva el footer de la página web.
//

// const getFooterElement = () => {
//   const data = document.querySelector("#footer");
//   return data;
// };
// window.onload = console.log(getFooterElement());

//
// // Ejercicio 4
//Completa las distintas funciones para que devuelvan los elementos correspondientes desde el DOM
//

// const getNavbarElement = () => {
//   const data = document.querySelector("navbar");
//   return data;
// };
// const getMainElement = () => {
//   const data = document.querySelector("main");
//   return data;
// };
// const getAboutFromFooter = () => {
//   const data = document.querySelector("#footer a");
//   // obten el enlace a about que se encuentra en el footer
//   return data;
// };
// const getTheParagraphElement = () => {
//   const data = document.querySelector("#footer p");
//   return data;
// };
// console.log(getNavbarElement());
// console.log(getMainElement());
// console.log(getAboutFromFooter());
// window.onload = console.log(getTheParagraphElement());

//
//Ejercicio 5
//Completa la función para que devuelva el texto que contiene el elemento con id headline del artículo
//

// const getArticleTitle = () => {
//   const data = document.querySelector("#headline").textContent;
//   return data;
// };
// window.onload = console.log(getArticleTitle());

//
// Ejercicio 6
//Completa la función para que devuelva el texto que contiene el elemento con la clase article-text
//

// const getArticleText = () => {
//   const data = document.querySelector(".article-text").textContent;
//   return data;
// };
// window.onload = console.log(getArticleText());

//
// // Ejercicio 7
//Completa la función para que devuelva el texto dentro de un elemento. La función debe
//recibir un elemento HTML y no dar error si el elemento no se encuentra ( cláusula de guarda )
//

// const getTextFromSelector = (css_selector) => {
//   const data = document.querySelector(css_selector);
//   if (!data) return `No se ha encontrado el elemento "${css_selector}"`;
//   return data.textContent;
// };
// console.log(getTextFromSelector("h1"));
// console.log(getTextFromSelector("h2"));

//
// // Ejercicio 8
// Completa la función para que busque y devuelva todos los enlaces (a) de la página
//

// const getAllLinks = () => {
//   const data = document.querySelectorAll("a");
//   const arrdata = [...data];
//   return arrdata;
// };
// console.log(getAllLinks());

//
// //Ejercicio 9//
//Completa la función para que encuentre los siguientes elementos del DOM
//

// const getDivElements = () => {
//   const data = document.querySelectorAll("div");
//   return data;
// };
// const getFooterLinks = () => {
//   const data = document.querySelectorAll("#footer a");
//   return data;
// };
// const getAboutLinks = () => {
//   const data = document.querySelector(`#footer a`);
//   return data;
// };
// console.log(getDivElements());
// console.log(getFooterLinks());
// console.log(getAboutLinks());

//
// //Ejercicio 10
//Completa la función para que encuentre todos los párrafos de la web e intenta utilizar el método .filter de los arrays
//

// const getPElements = () => {
//   const data = document.querySelectorAll("p");
//   const arrdata = [...data];
//   const finalData = arrdata.filter((value) => value.textContent === "2020");
//   return finalData;
// };
// console.log(getPElements());

//
// //Ejercicio 11
//Completa la función para devuelva el número de enlaces ( a ) presentes en la página
//

// const getNumberOfLinks = () => {
//   const data = document.querySelectorAll("a");
//   const numdata = data.length;
//   return numdata;
// };
// console.log(getNumberOfLinks());

//
//Ejercicio 12
//Completa la función para iterar y mostrar por consola el texto de cada uno de los enlaces de la página
//

// const getLinksTexts = () => {
//   const data = document.querySelectorAll("a");
//   data.forEach((element) => {
//     showText(element.textContent);
//   });
//   return data;
// };
// function showText(text) {
//   console.log(text);
// }

// getLinksTexts();

//
// Ejercicio 13
//Completa la función para que retorne todos los párrafos (p) cuyo texto tienen menos de 10 caracteres:
//

// const getShortTextParagraphs = () => {
//   const data = document.querySelectorAll("p");
//   const finalData = [];
//   data.forEach((element) => {
//     if (element.textContent.length < 10) finalData.push(element.textContent);
//   });
//   return finalData;
// };
// console.log(getShortTextParagraphs());

//
//Ejercicio 14
//Completa la función para que retorne los párrafos que contengan la palabra Mars
//

// const getMarsTextParagraphs = () => {
//   const data = document.querySelectorAll("p");
//   const arrData = [...data];
//   const finalData = [];
//   arrData.forEach((element) => {
//     if (element.textContent.includes("Mars"))
//       finalData.push(element.textContent);
//   });
//   return finalData.join(", ");
// };
// console.log(getMarsTextParagraphs());

//
// Ejercicio 15
//Completa la función para que retorne el mensaje de bienvenida con su formato actual
//

// const getFormattedWelcomeMessage = () => {
//   const data = document.querySelector("#main h1");
//   const finalData = data.innerHTML;
//   return finalData;
// };
// console.log(getFormattedWelcomeMessage());

//
// //Ejercicio 16
//Completa la función para que cambie un mensaje de bienvenida al usuario escribiendo “ Hola
// { name }!!”, donde el name debe estar entre las etiquetas <strong></strong> en el div con id
// “welcome-message”
//

// const setFormattedWelcomeMessage = (name) => {
//   const data = document.querySelector("#welcome-message");
//   data.innerHTML = `Hola <strong>${name}</strong>`;
// };
// setFormattedWelcomeMessage("Lorena");
// // setFormattedWelcomeMessage("Juan");

//
// Ejercicio 17
//Completa la función para que vacíe el contenido del elemento ul

// const emptyShoppingList = () => {
//   const data = document.querySelectorAll("ul *");
//   data.forEach((element) => element.remove());
// };
// emptyShoppingList();

//
//Ejercicio 18
// Completa la función para que devuelva el nombre de usuario del formulario
//

// const getUserName = () => {
//   const data = document.querySelector("#name");
//   console.log(`Hola ${data.value}`);
// };

//
// Ejercicio 19
// Completa la función para eliminar lo que el usuario haya escrito en el textbox name
//

// const emptyUserName = () => {
//   const data = document.querySelector("#name");
//   data.value = "";
// };

//
// Ejercicio 20
// Completa la función para devolver true cuando el elemento que recibe como parámetro tiene
// la clase active y false en caso contrario
//

// const isActive = (element) => {
//   return element.classList.contains("active");
// };
// console.log(isActive(document.querySelector(".about")));
// console.log(isActive(document.querySelector(".contact")));

//
// Ejercicio 21
// Completa la función para que añada la clase active al elemento que recibe como parámetro
//

// const makeActive = (element) => {
//   element.classList.add("active");
// };
// console.log(makeActive(document.querySelector(".about")));
// console.log(makeActive(document.querySelector(".contact")));

//
// Ejercicio 22
// Completa la función para que encuentre y añada la clase active al elemento que recibe
// como parámetro ( recibimos una clase )
//

// const makeActive = (element) => {
//   const finalElement = "." + element;
//   const data = document.querySelector(finalElement);
//   data.classList.add("active");
// };
// console.log(makeActive("about"));
// console.log(makeActive("contact"));

//
//Ejercicio 23
// Completa la función para que elimine la clase active del elemento que recibe como
// parámetro
//

// const removeActive = (element) => {
//   element.classList.remove("active");
// };
// console.log(removeActive(document.querySelector(".active")));

//
// Ejercicio 24
// Completa la función añada la class “highlighted” a todos los elementos de la lista de compra (id="shopping-list" )
//

// const highlightShoppingListItems = () => {
//   const data = document.querySelectorAll("#shopping-list *");
//   data.forEach((value) => value.classList.add("shopping-list"));
// };
// highlightShoppingListItems();

//
//Ejercicio 25
// Completa la función para que elimine el botón ( id=”button1” ) del html
//

// const removeButton = () => {
//   const data = document.querySelector("#button1");
//   data.remove();
// };
// removeButton();

//
// Ejercicio 26
// Completa la función para que elimine el primer elemento h1 que encuentre
//

// const removeH1 = () => {
//   const data = document.querySelector("h1");
//   data.remove();
// };
// removeH1();

//
// Ejercicoi 27
// Completa la función para que añada un nuevo elemento a la lista de la compra. El elemento
// incluido debe tener las mismas clases de los ya existentes. Añade una cláusula de guarda
// para el caso de no recibir ningún item
//

// const addItemToShoppingList = (item) => {
//   if (!item) {
//     console.log("Debes indicar un elemento que añadir");
//     return;
//   }
//   const parent = document.querySelector("#shopping-list");
//   const child = document.querySelector("#shopping-list li");
//   const newData = document.createElement("li");
//   newData.classList = child.classList;
//   newData.textContent = item;
//   parent.insertAdjacentElement("beforeend", newData);
// };
// addItemToShoppingList("Prueba 1");
// addItemToShoppingList("Prueba 2");
// addItemToShoppingList();

//
// Ejercicio 28
// Completa la función para que añada una segunda lista de la compra. Esta debe tener una
// clase shopping-2 en el elemento ul y 3 <li> dentro del ul
//

const addItemToShoppingList2 = () => {
  const data = document.querySelector("ul");
  const newData = document.createElement("ul");
  newData.classList.add("shopping-2");
  const string = `<li>Elemento1</li><li>Elemento2</li><li>Elemento3</li>`;
  newData.insertAdjacentHTML("beforeend", string);
  data.insertAdjacentElement("afterend", newData);
};
addItemToShoppingList2();
