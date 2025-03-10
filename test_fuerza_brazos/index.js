/**
 * Calculadora de fuerza de los brazos
 * Datos necesarios: 
 * - Sexo: Hombre o mujer
 * - Peso corporal Kg
 * - Conoces tu 1RM? Si o No
 * - 1RM Kg (Si conoces)
 * - Peso utilizado en el ejercicio Kg
 * - Repeticiones con ese peso
 * - Opcional: 
 *      - Otro peso adicional Kg
 *      - Repeticiones con ese peso adicional
 */

class ArmsStrenght {

    _gender;
    _bodyWeight;
    _maxWeight = null;
    _weight_1;
    _weight_2 = null;
    _reps_1;
    _reps_2 = null;
    _mayhew;
    _wathan;
    _relativeStrenght;

    constructor(gender, bodyWeight, maxWeight, weight_1, weight_2, reps_1, reps_2){
        this._gender = gender;
        this._maxWeight = maxWeight;
        this._weight_1 = weight_1;
        this._weight_2 = weight_2;
        this._reps_1 = reps_1;
        this._reps_2 = reps_2;
        this._bodyWeight = bodyWeight;
    }

    Mayhew(){
        this._mayhew = 1.008 * ((100 * this._weight_1) / ((52.2 + 41.9) * (Math.pow(2.7183, -0.055 * this._reps_1))));
    }

    Wathan(){
        this._wathan = 1.008 * ((100 * this._weight_1) / ((48.8 + 53.8) * (Math.pow(2.7183, -0.075 * this._reps_1))));
    }

    get WithoutRM(){
        
        if(this._weight_2 == null){
            this.Mayhew();
            this.Wathan();
            this._maxWeight = parseFloat(((this._mayhew + this._wathan) / 2).toFixed(1));
        }else{
            this._maxWeight = parseFloat((this._weight_1 + ((this._weight_2 - this._weight_1)/(this._reps_2 - this._reps_1)) * (1 - this._reps_1)).toFixed(1));
        }    
        
        return this._maxWeight;
    }

    get RelativeStrenght(){
        this._relativeStrenght = parseFloat((this._maxWeight / this._bodyWeight).toFixed(2));
        return this._relativeStrenght;
    }

}

const calculator = new ArmsStrenght('men', 90, null, 40, 38, 3, 4);
console.log(calculator.WithoutRM);
console.log(calculator.RelativeStrenght);