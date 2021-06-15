const listItems = [];

function createItemCart(name, price) {
  // Listado de productos
  const contendorProductos = document.getElementById("contendor_productos");
  // Crear elementos del producto
  const product = document.createElement('div');
  const productImg = document.createElement('img');
  const productName = document.createElement('div');
  const productPrice = document.createElement('div');
  const productBtn = document.createElement('button');
  // Agregar data de cada elemento
  product.classList.add('producto');
  productImg.classList.add('img-producto');
  productImg.setAttribute('src', 'http://placehold.it/70x70');
  productName.classList.add('nombre-producto');
  productName.textContent = name;
  productPrice.classList.add('precio-producto');
  productPrice.textContent = `$ ${price}`;
  productBtn.classList.add('agregar-producto');
  productBtn.textContent = 'Agregar';
  //Agregar elementos al contenedor
  product.appendChild(productImg);
  product.appendChild(productName);
  product.appendChild(productPrice);
  product.appendChild(productBtn);
  //Agregar el producto al contenedor de productos
  contendorProductos.appendChild(product);
  //AGREGO FUNCIONALIDAD CLICK BTN AGREGAR
  clickAddCarrito(productBtn, product);
  


}

function botonCrearProducto () {
  const button = document.getElementById('btnCreateProduct');
  button.addEventListener('click', () => {
    const name = document.getElementById("name_product").value;
    const price = document.getElementById("price_product").value;
    createItemCart(name, price);
  });
}

function clickAddCarrito (itemBtn,product){
  //LE AGREGO LA FUNCIONALIDAD DE CLICK AL BOTON LUEGO DE AGREGARLO AL DOM
  itemBtn.addEventListener('click',function(){
    const tmpProduct = product.cloneNode(true);
    console.log(tmpProduct);
    const contentCarrito = document.getElementById('content-carrito');
    contentCarrito.appendChild(tmpProduct);
  })  
}

function init () {
  window.onload = () => {
    botonCrearProducto();
  }
}

init();