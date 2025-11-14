/**
 * Calculadora de burnout
 * Test de 12 preguntas con puntuación de 0 a 2 puntos cada una
 * Puntuación total: 0-24 puntos
 */

class BurnoutCalculator {
    _q1; // ¿Sientes que no te queda energía al final de tu jornada laboral?
    _q2; // ¿Te sientes completamente agotado/a por tu trabajo?
    _q3; // ¿Sientes cansancio al pensar en ir a trabajar por la mañana?
    _q4; // ¿Sientes aversión o falta de entusiasmo por las tareas de tu trabajo?
    _q5; // ¿Dudas del significado o utilidad de tu trabajo?
    _q6; // ¿Te has vuelto más cínico/a o distante respecto a tu trabajo?
    _q7; // ¿Tienes problemas para mantener la concentración en el trabajo?
    _q8; // ¿Cometes pequeños errores por descuido?
    _q9; // ¿Te cuesta recordar cosas o te sientes más lento/a?
    _q10; // ¿Reaccionas de forma más irritable ante imprevistos?
    _q11; // ¿Te sientes abrumado/a por tus emociones en el trabajo?
    _q12; // ¿Te sientes frustrado/a por cosas que antes no te afectaban?

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

    get burnoutRisk() {
        const totalScore = this._q1 + this._q2 + this._q3 + this._q4 + this._q5 + this._q6 + this._q7 + this._q8 + this._q9 + this._q10 + this._q11 + this._q12;

        let level = '';
        let showWarning = false;

        if (totalScore <= 5) {
            level = 'muy bajo';
        } else if (totalScore >= 6 && totalScore <= 10) {
            level = 'bajo';
        } else if (totalScore >= 11 && totalScore <= 15) {
            level = 'moderado';
        } else if (totalScore >= 16 && totalScore <= 20) {
            level = 'alto';
            showWarning = true;
        } else {
            level = 'muy alto';
            showWarning = true;
        }

        return {
            totalScore,
            level,
            showWarning
        };
    }
}

// Ejemplo 1: Riesgo muy bajo
console.log('\n=== Ejemplo 1: Riesgo muy bajo ===');
const example1 = new BurnoutCalculator(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
console.log('Resultado:', example1.burnoutRisk);

// Ejemplo 2: Riesgo bajo
console.log('\n=== Ejemplo 2: Riesgo bajo ===');
const example2 = new BurnoutCalculator(1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0);
console.log('Resultado:', example2.burnoutRisk);

// Ejemplo 3: Riesgo moderado
console.log('\n=== Ejemplo 3: Riesgo moderado ===');
const example3 = new BurnoutCalculator(1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1);
console.log('Resultado:', example3.burnoutRisk);

// Ejemplo 4: Riesgo alto
console.log('\n=== Ejemplo 4: Riesgo alto ===');
const example4 = new BurnoutCalculator(2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2);
console.log('Resultado:', example4.burnoutRisk);

// Ejemplo 5: Riesgo muy alto
console.log('\n=== Ejemplo 5: Riesgo muy alto ===');
const example5 = new BurnoutCalculator(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
console.log('Resultado:', example5.burnoutRisk);
