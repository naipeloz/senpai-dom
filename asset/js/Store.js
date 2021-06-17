class Store {
    //TIENDA
    _contentProduct;
    _arrayProducto;
    _totalStock;
    
    constructor (contentProduct='', myCart){
        this._contentProduct = contentProduct;
        this._arrayProducto = Array();
        this._totalStock = 0;
    }

    get arrayProductos(){
        return this._arrayProducto;
    }
    get totalStock (){
        return this._totalStock;
    }
    
    addProductos(unProducto){
        let tmpArray = this._arrayProducto;
        let seEncontroProd = false; 
        if(tmpArray.length>0){
            tmpArray.forEach(function(elem,i){
                if(unProducto.nombre===elem.nombre){
                    //Producto ya existe sumo stock
                    elem.addStock();
                    tmpArray[i]=elem;
                    seEncontroProd = true;
                }                
            })
            this._arrayProducto = tmpArray;
        }
        //SINO ENCUENTOR PROD LO AGREGO
        if(!seEncontroProd){
            this._arrayProducto.push(unProducto)
        }                     
        this._printProducto();
        this._sumoCantidadProductos();
    }

    removeProducto(producto){
        let tmpArra = this._arrayProducto; 
        tmpArra.forEach(function(element, i) {
            if(element.nombre === producto.nombre){           
                if(element.stock==1){
                    tmpArra.splice(i,1)
                }else{
                    element.removeStock();
                    tmpArra[i]=element;
                }  
            }
        })     
        this._arrayProducto = tmpArra;
        this._sumoCantidadProductos();
        this._printProducto();
    }

    //FUNCIONES PRIVADAS
    _sumoCantidadProductos (){
        let tmpCant = 0;
        this._arrayProducto.forEach(item=>{
            
            tmpCant += item.stock;
        })
        this._totalStock = tmpCant;
    }
    _printProducto(){
        const contProd   =  document.getElementById(this._contentProduct);
        if(contProd!==null){
            //VACIO EL CONTENIDO DE PRODUCTOS Y ACTUALIZO LISTA
            contProd.innerHTML = '';
            this._arrayProducto.forEach(function(element, index) {
                // CREO ELEMENTOS HTML PRODUCTOS    
                const product               = document.createElement('div');
                const productImg            = document.createElement('img');
                const productName           = document.createElement('div');
                const productPrice          = document.createElement('div');
                const productStock          = document.createElement('div');
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
                productBtn.textContent = 'Agregar';
                productStock.classList.add('stock-producto');
                productStock.textContent = `Stock : ${element.stock}`;
                //Agregar elementos al contenedor
                product.appendChild(productImg);
                product.appendChild(productName);
                product.appendChild(productPrice);
                product.appendChild(productStock);
                product.appendChild(productBtn);
                //AGREGO LA FUNCIONALIDAD CLICK AL BTN AGREGAR 
                productBtn.addEventListener('click',function(){
                    //TENGO EL ELEMENTO A AGREGAR A CARRITO                        
                    //LLAMO ESTA FUNCION DECLARADA EN EL INDEX.js CONSULTAR BIENM COMO HACER LA LLAMADA .....    
                    agregoCarrito(element);                                                        
                })
                //Agregar el producto al contenedor de productos
                contProd.appendChild(product); 
            });
        }else{
            alert('Ups! No podemos encontrar el contenedor')
        }
                                
    }

    
}