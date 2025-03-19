/**
 * Calculadora Conversión de Glucosa
 * Datos necesarios: 
 * - Glucosa (mmol/L) (número entre 1 y 30)
 */

class GlucoseConversion {
    _glucose;
    _conversion;

    constructor(glucose){
        this._glucose = glucose;
    }

    get conversion(){
        this._conversion = parseFloat((this._glucose * 18).toFixed(2))
        return this._conversion;
    }

}

const CALCULATOR = new GlucoseConversion(5.6);
console.log(CALCULATOR.conversion);