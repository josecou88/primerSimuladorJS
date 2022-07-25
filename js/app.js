let total = 0
function carta () {
alert ('Bienvenidos a Baru fastgood, local de comida saludable')
let seguir = prompt ('Deseas agregar productos al carrito: si/no?')
do {

    let eleccionUsuario = prompt('opciones: wrap de pollo, tarta de verduras y ensalada proteica, escribelo!').toLowerCase()
    switch (eleccionUsuario) {
        case "wrap de pollo":
            alert('Elegiste el wrap de pollo, el valor es de $500.-')
            let  cuantosProductos =  prompt ('cuantos wraps queres?')
            let precio1 =  cuantosProductos * 500;
            alert  ( 'tu producto se agrego correctamente al carrito, sumara $'+ precio1)
            total = total + precio1
            break;

        case "tarta de verduras":
            alert('Elegiste la tarta de verduras, el valor es de $400.-')
            let  cuantosProductos2 =  prompt ('cuantas tartas de verduras queres?')
            let precio2 =  cuantosProductos2 * 400;
            alert  ( 'tu producto se agrego correctamente al carrito, sumara $'+ precio2)
            total += precio2
            break;

        case "ensalada proteica":
            alert('Elegiste ensalada proteica, el valor es de $600.-')
            let  cuantosProductos3 =  prompt ('cuantas ensaladas proteicas queres?')
            let precio3 =  cuantosProductos3 * 600;
            alert  ( 'tu producto se agrego correctamente al carrito, sumara $'+ precio3)
            total += precio3
            break;

        default:
            alert('El producto seleccionado no se encuentra en stock, ingrese un producto de la carta')
            //seguir = prompt ('desea agregar otro producto (si/no)?')
            /*eleccionUsuario = prompt('quieres agregar algun producto entre: wrap de pollo, tarta de verduras, ensalada proteica').toLowerCase()*/
            break;
    } 
    seguir = prompt ('desea agregar otro producto (si/no)?')
}while (seguir != 'no') 
}

carta ();

alert ('Has agregado exitosamente tus productos! El total es $'+ total)

