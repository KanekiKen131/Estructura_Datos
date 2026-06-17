let expresion = "mangos"

switch(expresion){
    case "mangos":
        console.log("los mangos x5 cuestan  $1")
        break
    case "naranjas":
        console.log("las naranjas x10 cuestan  $1")
        break    
    case "manzanas":
        console.log("las manzanas x5 cuestan $1")    
        default:
            console.log(`Lo siento no contamos con ${expresion}`)
        break
}
console.log("Quiere commprar algo adicional?..")