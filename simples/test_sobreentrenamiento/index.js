/**
 * Test de sobreentrenamiento
 * Test de 12 preguntas con puntuación de 0 a 2 puntos cada una
 * Puntuación total: 0-24 puntos
 */

class OvertrainingCalculator {
    _q1; // ¿Cómo describirías tu estado de ánimo general?
    _q2; // ¿Cómo es la calidad de tu sueño?
    _q3; // ¿Tienes una frecuencia cardíaca en reposo más alta de lo normal?
    _q4; // ¿Cómo es tu apetito (patrones de alimentación)?
    _q5; // ¿Has notado cambios en tu apetito sexual (libido)?
    _q6; // ¿Con qué frecuencia te pones enfermo?
    _q7; // ¿Te has hecho una analítica de sangre reciente?
    _q8; // ¿Cómo son tus ganas y motivación para ir a entrenar?
    _q9; // ¿Cómo es tu progresión en los entrenamientos?
    _q10; // ¿Cómo sientes tu nivel de fatiga general durante el día?
    _q11; // ¿Sientes dolores musculares o de articulaciones más allá de lo normal?
    _q12; // ¿Has notado cambios negativos en tu composición corporal?

    constructor(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12) {
        this._q1 = q1;
        this._q2 = q2;
        this._q3 = q3;
        this._q4 = q4;
        this._q5 = q5;
        this._q6 = q6;
        this._q7 = q7;
        this._q8 = q8;
        this._q9 = q9;
        this._q10 = q10;
        this._q11 = q11;
        this._q12 = q12;
    }

    get recoveryLevel() {
        const totalScore = this._q1 + this._q2 + this._q3 + this._q4 + this._q5 + this._q6 + this._q7 + this._q8 + this._q9 + this._q10 + this._q11 + this._q12;

        let level = '';

        if (totalScore <= 5) {
            level = 'óptima. No estás sobreentrenado/a.';
        } else if (totalScore >= 6 && totalScore <= 10) {
            level = 'buena, aunque mejorable. Riesgo bajo de sobreentrenamiento.';
        } else if (totalScore >= 11 && totalScore <= 15) {
            level = 'deficiente. Posible sobrecarga funcional.';
        } else if (totalScore >= 16 && totalScore <= 20) {
            level = 'bajo. Estás algo sobreentrenado/a.';
        } else {
            level = 'muy bajo. No te recuperas y estás sobreentrenado/a.';
        }

        return {
            totalScore,
            level
        };
    }
}

// Ejemplo 1: Recuperación óptima
console.log('\n=== Ejemplo 1: Recuperación óptima ===');
const example1 = new OvertrainingCalculator(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
console.log('Resultado:', example1.recoveryLevel);

// Ejemplo 2: Recuperación buena
console.log('\n=== Ejemplo 2: Recuperación buena ===');
const example2 = new OvertrainingCalculator(0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1);
console.log('Resultado:', example2.recoveryLevel);

// Ejemplo 3: Recuperación deficiente
console.log('\n=== Ejemplo 3: Recuperación deficiente ===');
const example3 = new OvertrainingCalculator(1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1);
console.log('Resultado:', example3.recoveryLevel);

// Ejemplo 4: Algo sobreentrenado
console.log('\n=== Ejemplo 4: Algo sobreentrenado ===');
const example4 = new OvertrainingCalculator(2, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1);
console.log('Resultado:', example4.recoveryLevel);

// Ejemplo 5: Muy sobreentrenado
console.log('\n=== Ejemplo 5: Muy sobreentrenado ===');
const example5 = new OvertrainingCalculator(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
console.log('Resultado:', example5.recoveryLevel);
