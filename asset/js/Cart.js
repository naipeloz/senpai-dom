class Cart {
    
    _contentProductCart;
    _arrayProductoCart;
    _totalStockCart;
    _totalMoneyCart;
    
    constructor (contentProduct=''){
        this._contentProductCart = contentProduct;
        this._arrayProductoCart = Array();
        this._totalStockCart = 0;
        this._totalMoneyCart = 0;
    }

    get arrayProductosCart(){
        return this._arrayProductoCart;
    }
    get totalStockCart(){
        return this._totalStockCart;
    }
    get totalMoneyCart(){
        return this._totalMoneyCart;
    }
    
    addProductosCart(unProducto){
        this._arrayProductoCart.push(unProducto);       
        this._printProductoCart();
        this._sumoCantidadProductosCart();
        this._sumoCantidadMoneyCart();
    }

    // _removeProductoInt(){

    // }

    //FUNCIONES PRIVADAS
    _sumoCantidadProductosCart(){
        let tmpCant = 0;
        this._arrayProductoCart.forEach(item=>{
            
            tmpCant += item.stock;
        })
        this._totalStockCart = tmpCant;
    }
    _sumoCantidadMoneyCart(){
        let tmpCant = 0;
        this._arrayProductoCart.forEach(item=>{
            tmpCant += item.precio;
        })
        this._totalMoneyCart = tmpCant;
    }
    _printProductoCart(){
        const contProd   =  document.getElementById(this._contentProductCart);
        if(contProd!==null){
            //VACIO EL CONTENIDO DE PRODUCTOS Y ACTUALIZO LISTA
            contProd.innerHTML = '';
            this._arrayProductoCart.forEach(function(element, index) {
                // CREO ELEMENTOS HTML PRODUCTOS    
                const product               = document.createElement('div');
                const productImg            = document.createElement('img');
                const productName           = document.createElement('div');
                const productPrice          = document.createElement('div');
                const productBtn            = document.createElement('button');
                // AGREGO DATA ELEMENTO
                
                product.classList.add('producto','flex-none','flex-grow-0','w-1/3','p-2','text-center');
                productImg.classList.add('img-producto');
                productImg.setAttribute('src', element.imagen);
                productName.classList.add('nombre-producto');
                productName.textContent = element.nombre;
                productPrice.classList.add('precio-producto');
                productPrice.textContent = `$ ${element.precio}`;
                productBtn.classList.add('agregar-producto');
                productBtn.textContent = 'Eliminar';
                //Agregar elementos al contenedor
                product.appendChild(productImg);
                product.appendChild(productName);
                product.appendChild(productPrice);
                product.appendChild(productBtn);
                //AGREGO LA FUNCIONALIDAD CLICK AL BTN AGREGAR 
                productBtn.addEventListener('click',()=>{
                    //TENGO EL ELEMENTO ELIMINAR DE CARRITO A CARRITO                        
                    console.log(element) 
                    console.log(index)
                })
                //Agregar el producto al contenedor de productos
                contProd.appendChild(product); 
            });
        }else{
            alert('Ups! No podemos encontrar el contenedor')
        }
                                
    }

    
}