class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual =  displayValorActual;
        this.displayValorAnterior =  displayValorAnterior;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }

    agregarNumero(numero){
        this.valorActual = this.valorActual + numero;  
        this.imprimirValores(); 
     }

     imprimirValores(){
        this.displayValorActual.textContent = this.displayvalorActual;
        this.displayValorAnterior.textContent = this.displayvalorAnterior;
     }
}