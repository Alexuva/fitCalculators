/**
 * Calculadora Resistencia a la insulina
 * Datos necesarios: 
 * - Glucosa en ayunas mg/dl (número entre 50 y 300)
 * - Insulina en ayunas μU/mL (número entre 1 y 50)
 */

class InsulinResistance {
    _glucose;
    _insuline;
    _homaIR;
    _insulineResistanceLevel;

    constructor(glucose, insuline){
        this._glucose = glucose;
        this._insuline = insuline;
    }

    get homaIR(){
        this._homaIR = parseFloat(((this._glucose * this._insuline) / 405).toFixed(2));
        return this._homaIR;
    }

    get insulineResistanceLevel(){
        if(this._homaIR < 2.5){
            return "Normal";
        } else if(this._homaIR >= 2.5 && this._homaIR <= 3.9){
            return "Resistencia leve a la insulina";
        } else if(this._homaIR > 3.9){
            return "Resistencia alta a la insulina";
        }
    }

}

const CALCULATOR = new InsulinResistance(100, 10);
console.log(CALCULATOR.homaIR);
console.log(CALCULATOR.insulineResistanceLevel);