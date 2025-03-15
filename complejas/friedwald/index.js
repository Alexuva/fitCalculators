/**
 * Calculadora Friedwald
 * Datos necesarios: 
 * - Colesterol total en mg/dl o mmol/l
 * - Colesterol HDL-C en mg/dl o mmol/l
 * - Triglicéridos en mg/dl o mmol/l
 */

class Friedwald {
    _totalCholesterol;
    _hdlCholesterol;
    _triglycerides;
    _friedwald;
    _unit;

    constructor(totalCholesterol, hdlCholesterol, triglycerides, unit) {
        this._totalCholesterol = totalCholesterol;
        this._hdlCholesterol = hdlCholesterol;
        this._triglycerides = triglycerides;
        this._unit = unit;
    }

    get friedwald() {
        if(this._unit === 'mmol/l'){
            this._friedwald = parseFloat((this._totalCholesterol - this._hdlCholesterol - (this._triglycerides / 2.2)).toFixed(2));
        }else{
            this._friedwald = parseFloat((this._totalCholesterol - this._hdlCholesterol - (this._triglycerides / 5)).toFixed(1));
        }

        return this._friedwald;
    }

}

// Example usage with mg/dl units
const patient1 = new Friedwald(220, 45, 150, 'mg/dl');
console.log(`Patient 1 LDL Cholesterol: ${patient1.friedwald} mg/dl`);

// Example with mmol/l units
const patient2 = new Friedwald(5.7, 1.2, 1.7, 'mmol/l');
console.log(`Patient 2 LDL Cholesterol: ${patient2.friedwald} mmol/l`);

// Example with high triglycerides in mg/dl
const patient3 = new Friedwald(250, 40, 420, 'mg/dl');
console.log(`Patient 3 LDL Cholesterol: ${patient3.friedwald} mg/dl`);

// Example with borderline values in mmol/l
const patient4 = new Friedwald(4.9, 1.4, 2.3, 'mmol/l');
console.log(`Patient 4 LDL Cholesterol: ${patient4.friedwald} mmol/l`);