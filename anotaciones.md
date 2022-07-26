# SPRINT 1 (modificaciones)

Logo --> Cambiar logo, esta mal

    figuras mas cuadradas
    mas memorable
    la letra tiene que ser mas simple--> Sans Serif

    interletrado--> curvas
    Ver las tipografias, una para textos y enlaces

    (tipografias max3 min2)
    Bebas Neue
    Comfortaa

Wireframe --> No Va

    Sacar todo
        iconos
        tipografias
        imagenes

    esta muy recargado, hay que sacar informacion
    La linea tiene que ir con el header y dejarla por debajo del logo
    Categorias y menu, sacar las categorias (no poner nada) y meterlas en el menu
    NavBar sacar los elements y poner la categorias
    Como usar FastBar --> solo 3 pasos bien aclarados
    O ponemos la explicacion de como usar, o lo explicamos en el banner
    Sacamos el mapa de ubicacion
    Promociones --> lo expresamos como cards en la pantalla principal

    Footer
        Logo
        los datos con alguna informacion
        redes sociales

    Checkout
        ubicacion donde retirar el trago
        de un lado remunen informacion los productos con un contador, del otro lado la informacion de la compra

            en forma de tile, imagen a la izquierda, nombre, detalles, boton de agregar / eliminar con el contador (abajo del nombre).

    version mobile --> agregar logos

[comment]: <modificaciones hechas>

# SPRINT 2 (modificaciones)

    Botones de login --> revisar
    register --> font-size de los label = muy chicos
    height del main --> sacar
    img del logo --> conservar en la version mobile
    revisar html, mucho codigo al vicio

    W3C --> validador de html para ver los errores
    Las imagenes no tienen que tener espacios vacios en el nombre
    Agregar link del producto hacia el detalle
    <figure> --> sacar, mejor <picture> que es mas flexible
    barra lateral --> hacerlo mejor con CSS

[comment]: <modificaciones no hechas>

# SPRINT 3 (modificaciones)

    Creacion y edicion de productos

        id
        nombre
        precio
        descripcion (ingredientes que lleva)
        imagen
        categoria (tipo de alcohol)
        perfil de sabor
        historia

    MODIFICACIONES:
        app.use para routes --> app.use ('product', require ('./routes/main.routes'));
        let {productDetail, newProduct, editProduct} --> en una sola linea
        router.get --> agrupadas
        editProduct --> es el mismo formulario que newProduct pero con los inputs premarcados

        article del producto--> lo podemos mandar al include para que tener un modelo parametrizado de productos
        menu lateral--> cambiar los buttons por <a>
                        la nav se podria cambiar por un div
                        los hr los podriamos reemplazar por nav
        server --> archivo port.js tiene loalhost, en lugar de localhost

[comment]: <modificaciones hechas>

# SPRINT 4 (26/06 entrega)

    Base de datos en JSON para products y usuarios

        id --> producto
        estado (true, false --> que el bar pueda o no hacer el trago)
        topSelection
        Favoritos
        descuento
        nombre
        precio
        descripcion
        imagen
        categoria
        perfil de sabor
        creador
        historia

        id --> usuarios clientes
        nombre
        credenciales --> 1 admin 2 vendedor 3 cliente normal
        nivel --> 1 - 100
        email
        descripcion 
        contrasena

    Modelo para interactuar con los datos
    CRUD

[comment]: <modificaciones por verse> <problemas con la subida de datos a git>