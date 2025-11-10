/**
 * Calculadora nivel de masa muscular esqueletica
 * - Sexo
 * - Altura (cm)
 * - Masa muscular esquelética (kg)
 */

class MuscularMassCalculator {
    _gender;
    _height;
    _muscularMass;

    constructor(gender, height, muscularMass) {
        this._gender = gender;
        this._height = height;
        this._muscularMass = muscularMass;
    }

    get massMuscular(){
        const heightInMeters = this._height / 100;
        const muscularMassInKg = this._muscularMass / Math.pow(heightInMeters, 2);

        if (this._gender === 'male') {
            if (muscularMassInKg <= 7) {
                return 'bajo';
            } else if (muscularMassInKg > 7 && muscularMassInKg <= 8) {
                return 'normal';
            } else if (muscularMassInKg > 8 && muscularMassInKg <= 10) {
                return 'alto';
            } else {
                return 'muy alto';
            }
        } else {
            if (muscularMassInKg <= 5.5) {
                return 'bajo';
            } else if (muscularMassInKg > 5.5 && muscularMassInKg <= 6.7) {
                return 'normal';
            } else if (muscularMassInKg > 6.7 && muscularMassInKg <= 8) {
                return 'alto';
            } else {
                return 'muy alto';
            }
        }
    }
}

// Ejemplo 1: Hombre con nivel alto de masa muscular
const ejemplo1 = new MuscularMassCalculator('male', 180, 30);
console.log('Ejemplo 1 - Hombre (180cm, 30kg de masa muscular):');
console.log('Índice: ' + (30 / Math.pow(1.8, 2)).toFixed(2)); // 9.26
console.log('Nivel: ' + ejemplo1.massMuscular); // "alto"
console.log('');

// Ejemplo 2: Mujer con nivel normal de masa muscular
const ejemplo2 = new MuscularMassCalculator('female', 165, 18);
console.log('Ejemplo 2 - Mujer (165cm, 18kg de masa muscular):');
console.log('Índice: ' + (18 / Math.pow(1.65, 2)).toFixed(2)); // 6.61
console.log('Nivel: ' + ejemplo2.massMuscular); // "normal"
console.log('');

// Ejemplo 3: Hombre con nivel muy alto de masa muscular
const ejemplo3 = new MuscularMassCalculator('male', 175, 32);
console.log('Ejemplo 3 - Hombre (175cm, 32kg de masa muscular):');
console.log('Índice: ' + (32 / Math.pow(1.75, 2)).toFixed(2)); // 10.45
console.log('Nivel: ' + ejemplo3.massMuscular); // "muy alto"
console.log('');

// Ejemplo 4: Mujer con nivel bajo de masa muscular
const ejemplo4 = new MuscularMassCalculator('female', 160, 14);
console.log('Ejemplo 4 - Mujer (160cm, 14kg de masa muscular):');
console.log('Índice: ' + (14 / Math.pow(1.6, 2)).toFixed(2)); // 5.47
console.log('Nivel: ' + ejemplo4.massMuscular); // "bajo"
