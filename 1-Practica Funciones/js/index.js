
//TRABAJO DE FUNCIONES//


//EJ 1//

let rectangulo = function producto(a,b) {
    return a * b;
}

let a = 5
let b = 4
let AreaRectangulo = rectangulo(a,b)
console.log(AreaRectangulo)


//EJ 2//

function triangulo(c,d) {
    return (c * d)/2;
}

let c = 10
let d = 5
let AreaTri = triangulo(c,d)
console.log(AreaTri)


//EJ 3//

function largoDelArray(messi) {
    return messi.length;
}

let messi = ["cosa", "compu", "meta",];
let longitud = largoDelArray(messi);
console.log(longitud);


//EJ 4//

function cantidadDeLetras(palabra) {
    return palabra.length
}


let palabra = "Musica";
let numeroDeLetras = cantidadDeLetras(palabra)
console.log(numeroDeLetras)



//EJ 5//



    function dolarHoy(monto) {
        let dolar= monto/1000
        return dolar
    }
    console.log(dolarHoy(200)); 
    

//EJ 6//
    function precioFinal(precio) {
        let IVA= (precio*21)/100 + precio
        return IVA
    }
    console.log(precioFinal(100));
    
    function miti(numero) {
        let half= numero/2
        return half
    }
   
    function anterior(numero) {
        return numero - 1;
      }
    

//EJECUTANDO FUNCIONES 1//

    let numero = 10;
    let NumeroAnterior = anterior(numero);
    console.log(NumeroAnterior)
    
//EJECUTANDO FUNCIONES 2//

    function triple(num) {
        let triple=num*3
        return triple
    }

//EJECUTANDO FUNCIONES 3//
    
    function anteriorDelTriple(num) {
        return anterior(triple(num))
    }
    
    console.log(anteriorDelTriple(10));
    
    
    
    let misDatos={
        nombre:"Matias",
        apellido:"Bertozzi",
        dni: 46024862,
        comidasFavoritas:["milanesas","hamburguesas","empanadas"],
        age:"19",
        saludar:function() {
            let saludo= "hola mi nombre es "+ this.nombre + " " +this.apellido + " y tengo "+ this.age+ " años. mi primer comida favorita es "+ this.comidasFavoritas[0]
            return saludo
    
        }
    }
    
    console.log(misDatos.saludar());
    
    
    let automovil ={
        marca: "BMW",
        modelo:"Peugeot",
        año:2010,
        color:"rojo",
        posicion:0,
        avanzar: function (n) {
            return automovil.posicion=this.posicion+n 
        },
        retroceder:function (n) {
            return automovil.posicion=this.posicion-n
        }
    
    }
    
    console.log(automovil.avanzar(3));
    console.log(automovil.posicion); 
    
    console.log(automovil.retroceder(7));
    console.log(automovil.posicion); 
    
    let nuevoAutomovil ={
        marca: "BMW",
        modelo:"Peugeot",
        año:2010,
        color:"rojo",
        posicion:0,
        moverse:function (n) {
            return nuevoAutomovil.posicion=this.posicion+n
        }
    
    }
    
    console.log(nuevoAutomovil.moverse(9));
    console.log(nuevoAutomovil.posicion);
    console.log(nuevoAutomovil.moverse(-6));
    console.log(nuevoAutomovil.posicion);
    
    let randomNumber=Math.floor(Math.random)*5
    
    
    let ironMan={
        nombre:"Iron Man",
        equipo:"Avengers",
        poderes: ["volar","lanzar misiles", "disparar laser"],
        energia: 100,
        getPoder: function (num) {
            ironMan.energia=ironMan.energia-10
            return "poder elegido de "+ironMan.nombre+ " :"+ ironMan.poderes[num]+" energia restante: "+ironMan.energia  
        }
    };
    
    console.log(ironMan.getPoder(1)); 
    console.log(ironMan.energia);
    let Hulk={
        nombre:"Hulk",
        equipo:"Avengers",
        poderes:["aplastar","gritar","golpear"],
        energia:100,
        getPoder:function (num) {
            Hulk.energia=Hulk.energia-10
            return "poder elegido de "+Hulk.nombre+ " :"+ Hulk.poderes[num]+"energia restante: "+Hulk.energia  
        }
    }
    
    console.log(ironMan.getPoder(Math.floor(Math.random()*2)));
    
    console.log(HulkMan.getPoder(Math.floor(Math.random()*2)));
    
    /* bucles */
    for (let i = 0; i<5; i++) {
        console.log("Practicando con el bucle for");
    }
    
    for (let i=0; i<10;i++){
        console.log(`la variable i tiene el valor ${i}`);
    }
    for (let i=0; i<20;i++){
        console.log(`la variable i tiene el valor ${i*2}`);
    } 
    
    for (let i=0; i<250;i++){
        console.log(`la variable i tiene el valor ${i*5}`);
    } 
    for (let i=100; i>0; i--) {
        console.log(`${i}`);
    
    } 
    
    let base=10
    let resultados=[]
    
    for (let i=0; i<10;i++){
        let mult=base*i
        resultados.push(mult)
    }
    
    console.log(resultados);
    
    let ganancias=[10,-2,-97,87,4,52,-23,53,29,30];
    
    let total=0
    for (let i=0; i<ganancias.length;i++){
        total= total+ ganancias[i]
        console.log(total);
    }
    
    let healingIsDifficult = [
        'Fear',
        'Drink to Get Drunk',
        'Taken for Granted',
        'Blow It All Away',
        'Get Me',
        'Im Not Important to You',
        'Sober and Unkissed',
        'Healing Is Difficult',
        'Judge Me',
        'Little Man',
        'Insidiously']
    
    
    for (let i=0; i<healingIsDifficult.length;i++) {
    console.log(`${i+1} `+ healingIsDifficult[i]);
    }
    
    
    let got = [
        {
            nombre: "Jon",
            apellido: "Snow",
            edad: 23,
            ciudad: "Winterfell"
        },
        {
            nombre: "Daenerys",
            apellido: "Targaryen",
            edad: 19
        },
        {
            nombre: "Arya",
            apellido: "Stark",
            edad: 12,
            ciudad: "Winterfell"
        },
        {
            nombre: "Tyrion",
            apellido: "Lannister",
            edad: 32,
            ciudad: "Casterly Rock"
        }
    ]
    
    
    for (let i = 0; i<got.length; i++){
        console.log("Hola " + got[i].nombre+" "+got[i].apellido +" criatura viajera!");
    }
    
    for (let i = 0; i<got.length; i++){
        console.log("Soy  " + got[i].nombre+ " "+got[i].apellido +" de la ciudad "+ got[i].ciudad);
    }