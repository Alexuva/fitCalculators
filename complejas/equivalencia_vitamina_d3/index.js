/**
 * Calculadora Equivalencia Vitamina D3 (UI a mg y mcg)
 * Datos necesarios: 
 * - Cantidad en unidades internacionales (numero entre 100 y 100000)
 */

class VitamineD3Conversion {
    _ui;
    _mg;
    _mgc;

    constructor(ui){
        this._ui = ui;
    }
    
    get mgConversion(){
        this._mg = (this._ui / 40_000).toFixed(6);
        return this._mg;
    }

    get mgcConversion(){
        this._mgc = (this._ui / 40).toFixed(2);
        return this._mgc;
    }

    get conversion(){
        const mg = this.mgConversion;
        const mgc = this.mgcConversion;
        return { mg, mgc }
    }

}


const CALCULATOR = new VitamineD3Conversion(8000);
console.log(CALCULATOR.conversion);