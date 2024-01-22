class Autos{
    constructor(color,marca,modelo){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad
    }
    frenar(){
return 'se frena el auto'
    }

    acelerar(){
return `se acelera el auto de color: ${this.color}`
    }
}

const auto1 = new Autos("negro","Nissan","Centra");
console.log(auto1.frenar());