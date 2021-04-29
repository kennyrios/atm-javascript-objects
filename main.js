// /* 
// Los objetos nos permiten almacenar cuakquier tipo de dato
// - Conjunto de claves y valores llamados propiedades
// */

// //OBJETOS LITERALES, YO MISMO MODELO EL OBJETO
// //CON CLAVE Y VALOR

// var miObjeto = {
//     clave: 'valor' //Propiedad
// };

// var maui = {
//     nombre: 'Mauricio Savedra',
//     edad: 24,
//     esta_vivo: true,
//     tituloLista1: "Peliculas Favoritas",
//     peliculasFavoritas:[
//         "Phanton Thread",
//         "Shawshank Redemption",
//         "Bernardo y Bianca",
//         "Weekend at Bernie's"
//     ],
//     tituloLista2: "Videojuegos Favoritos",
//     videoJuegosFavoritos: [
//         "Super Mario",
//         "Bioshock",
//         "Silent Hill",
//         "Resident Evil",
//     ],
//     42: "Contenido de clave 42"
// }

// console.log(maui.peliculasFavoritas[0]);

// //Para mostrar el titulo de la lista
// var title = document.createElement("h2");           
//     var textnodeTitle1 = document.createTextNode(maui.tituloLista1 + " de " + maui.nombre);
//     title.appendChild(textnodeTitle1);                              
//     document.body.appendChild(title);  

// //Para mostrar los arrays debemos untilizar un ciclo foreach
// maui.peliculasFavoritas.forEach(element => {
//     var node = document.createElement("p");                 // Create a <p> node
//     var textnode = document.createTextNode(element);         // Create a text node
//     node.appendChild(textnode);                              // Append the text to <p>
//     document.body.appendChild(node);     // Append <p> to <body> 
// });


// //Para mostrar el titulo de la lista

// let h2Element = document.createElement("h2");
// var textTitle2 = document.createTextNode(`${maui.tituloLista2} de ${maui.nombre}`);
// h2Element.appendChild(textTitle2);
// document.body.appendChild(h2Element);
// //Para mostrar los arrays debemos untilizar un ciclo for
// for (let i = 0; i < maui.videoJuegosFavoritos.length; i++) {
//     var node = document.createElement("p");                 // Create a <p> node
//     var textnode = document.createTextNode(maui.videoJuegosFavoritos[i]);         // Create a text node
//     node.appendChild(textnode);                              // Append the text to <p>
//     document.body.appendChild(node);     // Append <p> to <body> 
    
// }

// console.log(maui['42']); //Besides dot notation(.) you could use Bracket notation however is not common

// /*  En JavaScript una funcion es un tipo de dato
//     y todo tipo de dato puede guardarse como variable
//     o puede guardarse dentrtro de una propiedad
// */

// var persona = {
//     nombre: 'Gera',
//     edad: 99,
//     hobbies: [
//         'Chopper',
//         ''
//     ]
// }

let balance = document.querySelector('#balance');


let ashley_account = document.querySelectorAll('.account')[0];
let kenny_account = document.querySelectorAll('.account')[1];
let yolanda_account = document.querySelectorAll('.account')[2];

//Perform deposit
let btn_deposit = document.querySelector('#btn_deposit');
let btn_withdraw = document.querySelector('#btn_withdraw');


var cuentas = [
    {nombre: "Ashley", saldo: 400, password: 'helloAshley'},
    {nombre: "Kenny", saldo: 450, password: 'helloKenny'},
    {nombre: "Yolanda", saldo: 600, password: 'helloYolanda'}
];


//Show the Balance of each account
ashley_account.addEventListener('click', () => {
    balance.innerHTML = cuentas[0].saldo;
})

kenny_account.addEventListener('click', () => {
    balance.innerHTML = cuentas[1].saldo;
})

yolanda_account.addEventListener('click', () => {
    balance.innerHTML = cuentas[2].saldo;
})

//Perform deposit
btn_deposit.addEventListener('click', () => {
    let deposit_value = parseInt(document.querySelector('.deposit_txt').value);
    balance.innerHTML = cuentas[0].saldo += parseInt(deposit_value);
})

btn_withdraw.addEventListener('click', () => {
    let deposit_value = parseInt(document.querySelector('.deposit_txt').value);
    balance.innerHTML = cuentas[0].saldo -= parseInt(deposit_value);
})



