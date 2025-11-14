/**
 * Calculadora de nivel de estrés percibido (Escala PSS)
 * Test de 10 preguntas con puntuación de 0 a 4 puntos cada una
 * IMPORTANTE: Las preguntas 4, 5, 7 y 8 tienen puntuación invertida
 * Puntuación total: 0-40 puntos
 */

class StressCalculator {
    _q1; // ¿Con qué frecuencia has estado afectado/a por algo inesperado?
    _q2; // ¿Con qué frecuencia te has sentido incapaz de controlar cosas importantes?
    _q3; // ¿Con qué frecuencia te has sentido nervioso/a o estresado/a?
    _q4; // ¿Con qué frecuencia has sentido que manejabas con éxito los pequeños problemas? (INVERTIDA)
    _q5; // ¿Con qué frecuencia has sentido que las cosas te salían bien? (INVERTIDA)
    _q6; // ¿Con qué frecuencia has pensado que no podías afrontar todo?
    _q7; // ¿Con qué frecuencia has sido capaz de controlar las irritaciones? (INVERTIDA)
    _q8; // ¿Con qué frecuencia has sentido que estabas al tanto de todo? (INVERTIDA)
    _q9; // ¿Con qué frecuencia te has enfadado por cosas fuera de tu control?
    _q10; // ¿Con qué frecuencia has sentido que las dificultades se acumulaban?

    constructor(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) {
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
    }

    get stressLevel() {
        const totalScore = this._q1 + this._q2 + this._q3 + this._q4 + this._q5 + this._q6 + this._q7 + this._q8 + this._q9 + this._q10;

        let level = '';
        let showWarning = false;

        if (totalScore <= 7) {
            level = 'muy bajo';
        } else if (totalScore >= 8 && totalScore <= 16) {
            level = 'bajo';
        } else if (totalScore >= 17 && totalScore <= 25) {
            level = 'moderado';
        } else if (totalScore >= 26 && totalScore <= 33) {
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

// Ejemplo 1: Estrés muy bajo
console.log('\n=== Ejemplo 1: Estrés muy bajo ===');
const example1 = new StressCalculator(0, 0, 0, 4, 4, 0, 4, 4, 0, 0);
console.log('Resultado:', example1.stressLevel);

// Ejemplo 2: Estrés bajo
console.log('\n=== Ejemplo 2: Estrés bajo ===');
const example2 = new StressCalculator(1, 1, 2, 3, 3, 1, 2, 2, 1, 0);
console.log('Resultado:', example2.stressLevel);

// Ejemplo 3: Estrés moderado
console.log('\n=== Ejemplo 3: Estrés moderado ===');
const example3 = new StressCalculator(2, 2, 3, 2, 2, 2, 2, 2, 3, 2);
console.log('Resultado:', example3.stressLevel);

// Ejemplo 4: Estrés alto
console.log('\n=== Ejemplo 4: Estrés alto ===');
const example4 = new StressCalculator(3, 3, 3, 1, 1, 3, 1, 1, 3, 3);
console.log('Resultado:', example4.stressLevel);

// Ejemplo 5: Estrés muy alto
console.log('\n=== Ejemplo 5: Estrés muy alto ===');
const example5 = new StressCalculator(4, 4, 4, 0, 0, 4, 0, 0, 4, 4);
console.log('Resultado:', example5.stressLevel);
