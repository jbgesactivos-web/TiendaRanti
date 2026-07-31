{
    id:1,
    nombre:"Auriculares Bluetooth Pro",
    descripcion:"Auriculares inalámbricos con cancelación de ruido.",
    categoria:"Tecnología",
    tienda:"Amazon",
    marca:"Sony",
    precio:49.99,
    precioAnterior:69.99,
    descuento:29,
    valoracion:4.8,
    opiniones:325,
    imagen:"assets/images/products/auriculares.png",
    enlace:"#",

    destacado:true,

    nuevo:false,

    topVentas:true,

    favorito:false
}
function tarjetaProducto(producto){

return `

<div class="product">

    <div class="product-image">

        <img src="${producto.imagen}" alt="${producto.nombre}">

    </div>

    <div class="product-info">

        ${producto.descuento ?
        `<span class="offer-badge">-${producto.descuento}%</span>` : ""}

        <div class="product-platform">

            ${producto.tienda}

        </div>

        <div class="product-title">

            ${producto.nombre}

        </div>

        <div class="product-rating">

            ⭐ ${producto.valoracion || 5}

            (${producto.opiniones || 0})

        </div>

        ${producto.precioAnterior ?

        `<div class="product-old-price">

        €${producto.precioAnterior}

        </div>`

        : ""}

        <div class="product-price">

            €${producto.precio}

        </div>

        <button
            class="buy"
            onclick="window.open('${producto.enlace}')">

            Ver oferta

        </button>

    </div>

</div>

`;

}
/*==================================
BUSCADOR
==================================*/

const buscador = document.getElementById("searchInput");

if(buscador){

buscador.addEventListener("keyup",buscarProductos);

}

function buscarProductos(){

const texto = buscador.value.toLowerCase();

const lista = obtenerProductos();

const resultado = lista.filter(producto=>{

return(

producto.nombre.toLowerCase().includes(texto)

||

producto.categoria.toLowerCase().includes(texto)

||

producto.tienda.toLowerCase().includes(texto)

||

(producto.descripcion || "").toLowerCase().includes(texto)

);

});

mostrarBusqueda(resultado);

}

function mostrarBusqueda(lista){

amazonContainer.innerHTML="";

shopifyContainer.innerHTML="";

printfulContainer.innerHTML="";

offersContainer.innerHTML="";

lista.forEach(producto=>{

const tarjeta = tarjetaProducto(producto);

if(producto.destacado){

offersContainer.innerHTML += tarjeta;

}

if(producto.tienda==="Amazon"){

amazonContainer.innerHTML += tarjeta;

}

if(producto.tienda==="Shopify"){

shopifyContainer.innerHTML += tarjeta;

}

if(producto.tienda==="Printful"){

printfulContainer.innerHTML += tarjeta;

}

});

}
