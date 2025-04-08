/**
 * Calculadora de fuerza explosiva
 * Datos necesarios: 
 * - Sexo: Hombre o mujer
 * - Edad: minimo 16
 * - Peso corporal (KG)
 * - Altura de salto vertical con contramovimiento (CMJ) en cm
 */


class ExplosiveStrenght {

    _height;
    _weight;
    _gender;
    _age;
    _power;
    _relativePower;
    _explosivePower;

    _strengthLevels = {
        "men": {
            "16-25": {
                "veryLow": { "max": null, "min": 30 },
                "low": { "max": 40, "min": 30 },
                "normal": { "max": 50, "min": 40.1 },
                "high": { "max": 60, "min": 50.1 },
                "veryHigh": { "max": 70, "min": 60.1 },
                "excellent": { "max": 70, "min": null }
            },
            "26-35": {
                "veryLow": { "max": null, "min": 28.5 },
                "low": { "max": 38, "min": 28.5 },
                "normal": { "max": 47.5, "min": 38.1 },
                "high": { "max": 57, "min": 47.6 },
                "veryHigh": { "max": 66.5, "min": 57.1 },
                "excellent": { "max": 66.5, "min": null }
            },
            "36-45": {
                "veryLow": { "max": null, "min": 27 },
                "low": { "max": 36, "min": 27 },
                "normal": { "max": 45, "min": 36.1 },
                "high": { "max": 54, "min": 45.1 },
                "veryHigh": { "max": 63, "min": 54.1 },
                "excellent": { "max": 63, "min": null }
            },
            "46-55": {
                "veryLow": { "max": null, "min": 25.5 },
                "low": { "max": 34, "min": 25.5 },
                "normal": { "max": 42.5, "min": 34.1 },
                "high": { "max": 51, "min": 42.6 },
                "veryHigh": { "max": 59.5, "min": 51.1 },
                "excellent": { "max": 59.5, "min": null }
            },
            "56-65": {
                "veryLow": { "max": null, "min": 24 },
                "low": { "max": 32, "min": 24 },
                "normal": { "max": 40, "min": 32.1 },
                "high": { "max": 48, "min": 40.1 },
                "veryHigh": { "max": 56, "min": 48.1 },
                "excellent": { "max": 56, "min": null }
            },
            ">65": {
                "veryLow": { "max": null, "min": 22.5 },
                "low": { "max": 30, "min": 22.5 },
                "normal": { "max": 37.5, "min": 30.1 },
                "high": { "max": 45, "min": 37.6 },
                "veryHigh": { "max": 52.5, "min": 45.1 },
                "excellent": { "max": 52.5, "min": null }
            }
        },
        "women": {
            "16-25": {
                "veryLow": { "max": null, "min": 26 },
                "low": { "max": 34, "min": 26 },
                "normal": { "max": 42, "min": 34.1 },
                "high": { "max": 51, "min": 42.1 },
                "veryHigh": { "max": 60, "min": 51.1 },
                "excellent": { "max": 60, "min": null }
            },
            "26-35": {
                "veryLow": { "max": null, "min": 24.7 },
                "low": { "max": 32.3, "min": 24.7 },
                "normal": { "max": 39.9, "min": 32.4 },
                "high": { "max": 48.5, "min": 40 },
                "veryHigh": { "max": 57, "min": 48.6 },
                "excellent": { "max": 57, "min": null }
            },
            "36-45": {
                "veryLow": { "max": null, "min": 23.4 },
                "low": { "max": 30.6, "min": 23.4 },
                "normal": { "max": 37.8, "min": 30.7 },
                "high": { "max": 45.9, "min": 37.9 },
                "veryHigh": { "max": 54, "min": 46 },
                "excellent": { "max": 54, "min": null }
            },
            "46-55": {
                "veryLow": { "max": null, "min": 22.1 },
                "low": { "max": 28.9, "min": 22.1 },
                "normal": { "max": 35.7, "min": 29 },
                "high": { "max": 43.4, "min": 35.8 },
                "veryHigh": { "max": 51, "min": 43.5 },
                "excellent": { "max": 51, "min": null }
            },
            "56-65": {
                "veryLow": { "max": null, "min": 20.8 },
                "low": { "max": 27.2, "min": 20.8 },
                "normal": { "max": 33.6, "min": 27.3 },
                "high": { "max": 40.8, "min": 33.7 },
                "veryHigh": { "max": 48, "min": 40.9 },
                "excellent": { "max": 48, "min": null }
            },
            ">65": {
                "veryLow": { "max": null, "min": 19.5 },
                "low": { "max": 25.5, "min": 19.5 },
                "normal": { "max": 31.5, "min": 25.6 },
                "high": { "max": 38.3, "min": 31.6 },
                "veryHigh": { "max": 45, "min": 38.4 },
                "excellent": { "max": 45, "min": null }
            }
        }

    }

    constructor(height, weight, gender, age){
        this._height = height;
        this._weight = weight;
        this._gender = gender;
        this._age = age;
    }

    power(){
        let heightPoints = 60.7 * this._height;
        let weightPoints = 45.3 * this._weight;
        this._power = (heightPoints + weightPoints) - 2055;
        return this._power;
    }

    relativePower(){
        this._relativePower = parseFloat((this._power / this._weight).toFixed(1));
        return this._relativePower;
    }

    strengthLevel(){
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
            if (max === null && this._relativePower < min) {
                return level;
            } else if (min === null && this._relativePower > max) {
                return level;
            } else if (this._relativePower >= min && this._relativePower <= max) {
                return level;
            }
        } 
    }

    get explosivePower(){
        
        this.power();
        this.relativePower();

        this._explosivePower = this.strengthLevel();

        return this._explosivePower;
    }

}

const calculator = new ExplosiveStrenght(10, 90, "men", 16);
const explosiveLvl = calculator.explosivePower;
console.log(calculator._power, calculator._relativePower, explosiveLvl);
