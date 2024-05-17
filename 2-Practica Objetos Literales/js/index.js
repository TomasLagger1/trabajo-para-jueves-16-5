//OBJETOS LITERALES//

//EJ 1 y 2//


let misDatos={
 nombre:"Tomás",
 apellido:"Lagger",
 dni: 47126509,
 comidasFavoritas:["pizza","hamburguesa","ñoquis"],
 age:"18",
    saludar:function() {
    let saludo= "hola mi nombre es "+ this.nombre + " " +this.apellido + " y tengo "+ this.age+ " años. mi primer comida favorita es "+ this.comidasFavoritas[0]
        return saludo
    
        }
    }
    
console.log(misDatos.saludar());
    

//EJ 3 Y 4// 


    let auto ={
        marca: "Subaru",
        modelo:"GTI",
        año:2023,
        color:"azul",
        posicion:0,
        avanzar: function (n) {
            return auto.posicion=this.posicion+n 
        },
        retroceder:function (n) {
            return auto.posicion=this.posicion-n
        }
    
    }
    
    
    let nuevoAuto ={
        marca: "Subaru",
        modelo:"GTI",
        año:2023,
        color:"azul",
        posicion:0,
        moverse:function (n) {
            return nuevoAuto.posicion=this.posicion+n
        }
    
    }
    
    console.log(nuevoAuto.moverse(23));
    console.log(nuevoAuto.posicion);
    console.log(nuevoAuto.moverse(-10));
    console.log(nuevoAuto.posicion);
    

    //EJ 5//
    
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
    