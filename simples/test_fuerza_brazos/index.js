/**
 * Calculadora de fuerza de los brazos
 * Datos necesarios: 
 * - Sexo: Hombre o mujer
 * - Edad: minimo 16
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
    _age;
    _bodyWeight;
    _maxWeight = null;
    _weight_1;
    _weight_2 = null;
    _reps_1;
    _reps_2 = null;
    _mayhew;
    _wathan;
    _relativeStrenght;
    _strengthLevel;

    _strengthLevels = {
        "men": {
            "16-25": {
                "veryLow": { "max": null, "min": 0.10 },
                "low": { "max": 0.14, "min": 0.10 },
                "somewhatLow": { "max": 0.19, "min": 0.15 },
                "normal": { "max": 0.29, "min": 0.20 },
                "good": { "max": 0.39, "min": 0.30 },
                "veryGood": { "max": 0.50, "min": 0.40 },
                "excellent": { "max": 0.50, "min": null }
            },
            "26-35": {
                "veryLow": { "max": null, "min": 0.11 },
                "low": { "max": 0.15, "min": 0.11 },
                "somewhatLow": { "max": 0.21, "min": 0.16 },
                "normal": { "max": 0.31, "min": 0.22 },
                "good": { "max": 0.43, "min": 0.32 },
                "veryGood": { "max": 0.55, "min": 0.44 },
                "excellent": { "max": 0.55, "min": null }
            },
            "36-45": {
                "veryLow": { "max": null, "min": 0.10 },
                "low": { "max": 0.14, "min": 0.10 },
                "somewhatLow": { "max": 0.19, "min": 0.15 },
                "normal": { "max": 0.29, "min": 0.20 },
                "good": { "max": 0.39, "min": 0.30 },
                "veryGood": { "max": 0.50, "min": 0.40 },
                "excellent": { "max": 0.50, "min": null }
            },
            "46-55": {
                "veryLow": { "max": null, "min": 0.09 },
                "low": { "max": 0.12, "min": 0.09 },
                "somewhatLow": { "max": 0.17, "min": 0.13 },
                "normal": { "max": 0.27, "min": 0.18 },
                "good": { "max": 0.37, "min": 0.28 },
                "veryGood": { "max": 0.45, "min": 0.38 },
                "excellent": { "max": 0.45, "min": null }
            },
            "56-65": {
                "veryLow": { "max": null, "min": 0.08 },
                "low": { "max": 0.11, "min": 0.08 },
                "somewhatLow": { "max": 0.15, "min": 0.12 },
                "normal": { "max": 0.24, "min": 0.16 },
                "good": { "max": 0.31, "min": 0.25 },
                "veryGood": { "max": 0.40, "min": 0.32 },
                "excellent": { "max": 0.40, "min": null }
            },
            ">65": {
                "veryLow": { "max": null, "min": 0.07 },
                "low": { "max": 0.10, "min": 0.07 },
                "somewhatLow": { "max": 0.14, "min": 0.11 },
                "normal": { "max": 0.21, "min": 0.15 },
                "good": { "max": 0.27, "min": 0.22 },
                "veryGood": { "max": 0.32, "min": 0.28 },
                "excellent": { "max": 0.32, "min": null }
            }
        },
        "women": {
            "16-25": {
                "veryLow": { "max": null, "min": 0.07 },
                "low": { "max": 0.10, "min": 0.07 },
                "somewhatLow": { "max": 0.14, "min": 0.11 },
                "normal": { "max": 0.21, "min": 0.15 },
                "good": { "max": 0.27, "min": 0.22 },
                "veryGood": { "max": 0.32, "min": 0.28 },
                "excellent": { "max": 0.32, "min": null }
            },
            "26-35": {
                "veryLow": { "max": null, "min": 0.08 },
                "low": { "max": 0.11, "min": 0.08 },
                "somewhatLow": { "max": 0.15, "min": 0.12 },
                "normal": { "max": 0.24, "min": 0.16 },
                "good": { "max": 0.31, "min": 0.25 },
                "veryGood": { "max": 0.40, "min": 0.32 },
                "excellent": { "max": 0.40, "min": null }
            },
            "36-45": {
                "veryLow": { "max": null, "min": 0.07 },
                "low": { "max": 0.10, "min": 0.07 },
                "somewhatLow": { "max": 0.14, "min": 0.11 },
                "normal": { "max": 0.21, "min": 0.15 },
                "good": { "max": 0.27, "min": 0.22 },
                "veryGood": { "max": 0.32, "min": 0.28 },
                "excellent": { "max": 0.32, "min": null }
            },
            "46-55": {
                "veryLow": { "max": null, "min": 0.05 },
                "low": { "max": 0.08, "min": 0.05 },
                "somewhatLow": { "max": 0.12, "min": 0.09 },
                "normal": { "max": 0.18, "min": 0.13 },
                "good": { "max": 0.24, "min": 0.19 },
                "veryGood": { "max": 0.30, "min": 0.25 },
                "excellent": { "max": 0.30, "min": null }
            },
            "56-65": {
                "veryLow": { "max": null, "min": 0.03 },
                "low": { "max": 0.07, "min": 0.03 },
                "somewhatLow": { "max": 0.10, "min": 0.07 },
                "normal": { "max": 0.14, "min": 0.11 },
                "good": { "max": 0.21, "min": 0.15 },
                "veryGood": { "max": 0.27, "min": 0.22 },
                "excellent": { "max": 0.27, "min": null }
            },
            ">65": {
                "veryLow": { "max": null, "min": 0.02 },
                "low": { "max": 0.04, "min": 0.02 },
                "somewhatLow": { "max": 0.08, "min": 0.05 },
                "normal": { "max": 0.12, "min": 0.09 },
                "good": { "max": 0.18, "min": 0.13 },
                "veryGood": { "max": 0.24, "min": 0.19 },
                "excellent": { "max": 0.24, "min": null }
            }
        }
    }

    constructor(gender, age, bodyWeight, maxWeight, weight_1, weight_2, reps_1, reps_2){
        this._gender = gender;
        this._age = age;
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
        
        if(this._weight_2 === null){
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

    get StrengthLevel(){
        const ageRanges = Object.keys(this._strengthLevels[this._gender]);
        const ageRange = ageRanges.find(range => {
            if (range.startsWith('>')) {
                return this._age > parseInt(range.substring(1));
            } else {
                const [min, max] = range.split('-');
                return (this._age >= parseInt(min) && this._age <= parseInt(max));
            }
        });

        const levels = this._strengthLevels[this._gender][ageRange];
        for (const level in levels) {
            const { min, max } = levels[level];
            if (max === null && this._relativeStrenght < min) {
                return level;
            } else if (min === null && this._relativeStrenght > max) {
                return level;
            } else if (this._relativeStrenght >= min && this._relativeStrenght <= max) {
                return level;
            }
        }
        
    }

}

const calculator = new ArmsStrenght('men', 31, 90, null, 5, 5, 3, 4);
console.log(calculator.WithoutRM);
console.log(calculator.RelativeStrenght);
console.log(calculator.StrengthLevel);