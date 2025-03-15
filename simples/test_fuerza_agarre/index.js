/**
 * Calculadora de fuerza de agarre
 * Datos necesarios: 
 * - Sexo: Hombre o mujer
 * - Edad: minimo 18
 * - Fuerza de agarre con dinamómetro Kg (ajustar a un decimal)
 */

class GrabStrength {
    _gender;
    _age;
    _strength;

    _strengthLevels = {
        "men": {
            "18-29": {
                "veryLow": { "max": null, "min": 34 },
                "low": { "max": 40, "min": 34 },
                "somewhatLow": { "max": 45, "min": 41 },
                "normal": { "max": 50, "min": 46 },
                "good": { "max": 55, "min": 51 },
                "veryGood": { "max": 63, "min": 56 },
                "excellent": { "max": 63, "min": null }
            },
            "30-39": {
                "veryLow": { "max": null, "min": 33 },
                "low": { "max": 41, "min": 33 },
                "somewhatLow": { "max": 47, "min": 42 },
                "normal": { "max": 51, "min": 48 },
                "good": { "max": 56, "min": 52 },
                "veryGood": { "max": 65, "min": 57 },
                "excellent": { "max": 65, "min": null }
            },
            "40-49": {
                "veryLow": { "max": null, "min": 31 },
                "low": { "max": 39, "min": 31 },
                "somewhatLow": { "max": 45, "min": 40 },
                "normal": { "max": 50, "min": 46 },
                "good": { "max": 55, "min": 51 },
                "veryGood": { "max": 64, "min": 56 },
                "excellent": { "max": 64, "min": null }
            },
            "50-59": {
                "veryLow": { "max": null, "min": 27 },
                "low": { "max": 35, "min": 27 },
                "somewhatLow": { "max": 41, "min": 36 },
                "normal": { "max": 47, "min": 42 },
                "good": { "max": 52, "min": 48 },
                "veryGood": { "max": 61, "min": 53 },
                "excellent": { "max": 61, "min": null }
            },
            "60-69": {
                "veryLow": { "max": null, "min": 26 },
                "low": { "max": 33, "min": 26 },
                "somewhatLow": { "max": 39, "min": 34 },
                "normal": { "max": 45, "min": 40 },
                "good": { "max": 51, "min": 46 },
                "veryGood": { "max": 59, "min": 52 },
                "excellent": { "max": 59, "min": null }
            },
            "70-79": {
                "veryLow": { "max": null, "min": 20 },
                "low": { "max": 27, "min": 20 },
                "somewhatLow": { "max": 32, "min": 28 },
                "normal": { "max": 37, "min": 33 },
                "good": { "max": 43, "min": 38 },
                "veryGood": { "max": 51, "min": 44 },
                "excellent": { "max": 51, "min": null }
            },
            "80-89": {
                "veryLow": { "max": null, "min": 18 },
                "low": { "max": 24, "min": 18 },
                "somewhatLow": { "max": 29, "min": 25 },
                "normal": { "max": 35, "min": 30 },
                "good": { "max": 40, "min": 36 },
                "veryGood": { "max": 48, "min": 41 },
                "excellent": { "max": 48, "min": null }
            },
            "90-100": {
                "veryLow": { "max": null, "min": 12 },
                "low": { "max": 16, "min": 12 },
                "somewhatLow": { "max": 20, "min": 17 },
                "normal": { "max": 25, "min": 21 },
                "good": { "max": 30, "min": 26 },
                "veryGood": { "max": 37, "min": 31 },
                "excellent": { "max": 37, "min": null }
            },
            ">100": {
                "veryLow": { "max": null, "min": 9 },
                "low": { "max": 13, "min": 9 },
                "somewhatLow": { "max": 17, "min": 14 },
                "normal": { "max": 22, "min": 18 },
                "good": { "max": 27, "min": 23 },
                "veryGood": { "max": 34, "min": 28 },
                "excellent": { "max": 34, "min": null }
            }
        },
        "women": {
            "18-29": {
                "veryLow": { "max": null, "min": 19 },
                "low": { "max": 23, "min": 19 },
                "somewhatLow": { "max": 27, "min": 24 },
                "normal": { "max": 30, "min": 28 },
                "good": { "max": 35, "min": 31 },
                "veryGood": { "max": 39, "min": 36 },
                "excellent": { "max": 39, "min": null }
            },
            "30-39": {
                "veryLow": { "max": null, "min": 20 },
                "low": { "max": 24, "min": 20 },
                "somewhatLow": { "max": 28, "min": 25 },
                "normal": { "max": 32, "min": 29 },
                "good": { "max": 36, "min": 33 },
                "veryGood": { "max": 40, "min": 37 },
                "excellent": { "max": 40, "min": null }
            },
            "40-49": {
                "veryLow": { "max": null, "min": 18 },
                "low": { "max": 23, "min": 18 },
                "somewhatLow": { "max": 27, "min": 24 },
                "normal": { "max": 30, "min": 28 },
                "good": { "max": 34, "min": 31 },
                "veryGood": { "max": 40, "min": 35 },
                "excellent": { "max": 40, "min": null }
            },
            "50-59": {
                "veryLow": { "max": null, "min": 17 },
                "low": { "max": 21, "min": 17 },
                "somewhatLow": { "max": 25, "min": 22 },
                "normal": { "max": 29, "min": 26 },
                "good": { "max": 34, "min": 30 },
                "veryGood": { "max": 39, "min": 35 },
                "excellent": { "max": 39, "min": null }
            },
            "60-69": {
                "veryLow": { "max": null, "min": 16 },
                "low": { "max": 20, "min": 16 },
                "somewhatLow": { "max": 24, "min": 21 },
                "normal": { "max": 27, "min": 25 },
                "good": { "max": 31, "min": 28 },
                "veryGood": { "max": 37, "min": 32 },
                "excellent": { "max": 37, "min": null }
            },
            "70-79": {
                "veryLow": { "max": null, "min": 13 },
                "low": { "max": 17, "min": 13 },
                "somewhatLow": { "max": 20, "min": 18 },
                "normal": { "max": 23, "min": 21 },
                "good": { "max": 27, "min": 24 },
                "veryGood": { "max": 32, "min": 28 },
                "excellent": { "max": 32, "min": null }
            },
            "80-89": {
                "veryLow": { "max": null, "min": 11 },
                "low": { "max": 13, "min": 11 },
                "somewhatLow": { "max": 15, "min": 14 },
                "normal": { "max": 18, "min": 16 },
                "good": { "max": 21, "min": 19 },
                "veryGood": { "max": 30, "min": 22 },
                "excellent": { "max": 30, "min": null }
            },
            "90-100": {
                "veryLow": { "max": null, "min": 8 },
                "low": { "max": 12, "min": 8 },
                "somewhatLow": { "max": 15, "min": 13 },
                "normal": { "max": 18, "min": 16 },
                "good": { "max": 21, "min": 19 },
                "veryGood": { "max": 25, "min": 22 },
                "excellent": { "max": 25, "min": null }
            },
            ">100": {
                "veryLow": { "max": null, "min": 6 },
                "low": { "max": 8, "min": 6 },
                "somewhatLow": { "max": 13, "min": 9 },
                "normal": { "max": 16, "min": 14 },
                "good": { "max": 20, "min": 17 },
                "veryGood": { "max": 23, "min": 21 },
                "excellent": { "max": 23, "min": null }
            }
        }
    }

    constructor(gender, age, strength){
        this._gender = gender;
        this._age = age;
        this._strength = strength;
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
            if (max === null && this._strength < min) {
                return level;
            } else if (min === null && this._strength > max) {
                return level;
            } else if (this._strength >= min && this._strength <= max) {
                return level;
            }
        }

    }

}

const CALCULATOR = new GrabStrength("women", 25, 35);
console.log(CALCULATOR.StrengthLevel);