class Producto {
    _nombre;
    _precio;
    _imagen;
    _stock;

    constructor (nombre='', precio=0, imagen=''){
        this._nombre = nombre;
        this._precio = parseInt(precio);        
        this._imagen =  imagen == '' ? 'https://via.placeholder.com/150/0000FF/808080/?text=SIN IMAGEN' : imagen;
        this._stock = 1;
    }
    get nombre (){
        return this._nombre;
    }
    get precio (){
        return this._precio;
    }
    get imagen (){
        return this._imagen;
    }
    get stock (){
        return this._stock;
    }
    addStock (){
        this._stock++
    }
    removeStock (){
        this._stock-=1;
    }
}