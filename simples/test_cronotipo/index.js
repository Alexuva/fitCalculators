/**
 * Calculadora de cronotipo
 * Test de 8 preguntas con puntuación de 0 a 3 puntos cada una
 * Puntuación total: 0-24 puntos
 */

class ChronotypeCalculator {
    _q1; // ¿A qué hora te levantarías de forma natural?
    _q2; // ¿Cómo te sientes durante la primera media hora después de despertar?
    _q3; // ¿A qué hora te irías a dormir?
    _q4; // ¿En qué momento del día sientes que tu mente está más aguda?
    _q5; // ¿Cuánta dependencia tienes de la cafeína por la mañana?
    _q6; // Si tienes que hacer ejercicio físico intenso, ¿cuál es tu momento ideal?
    _q7; // Si tienes que levantarte a las 6:00 AM, ¿cómo lo llevas?
    _q8; // ¿Cómo te describes a ti mismo?

    constructor(q1, q2, q3, q4, q5, q6, q7, q8) {
        this._q1 = q1;
        this._q2 = q2;
        this._q3 = q3;
        this._q4 = q4;
        this._q5 = q5;
        this._q6 = q6;
        this._q7 = q7;
        this._q8 = q8;
    }

    get chronotype() {
        const totalScore = this._q1 + this._q2 + this._q3 + this._q4 + this._q5 + this._q6 + this._q7 + this._q8;

        let type = '';
        let description = '';

        if (totalScore <= 5) {
            type = 'Alondra matutina';
            description = 'Funcionas bastante mejor por la mañana.';
        } else if (totalScore >= 6 && totalScore <= 10) {
            type = 'Entre alondra matutina y colibrí intermedio';
            description = 'No funcionas muy bien madrugando, pero sí pasadas unas horas.';
        } else if (totalScore >= 11 && totalScore <= 15) {
            type = 'Colibrí intermedio';
            description = 'Te cuesta bastante madrugar y funcionas mejor a mediodía.';
        } else if (totalScore >= 16 && totalScore <= 20) {
            type = 'Entre colibrí intermedio y búho nocturno';
            description = 'Funcionas bastante mejor a primera hora de la tarde.';
        } else {
            type = 'Búho nocturno';
            description = 'Tu pico de creatividad, energía y concentración llega por la tarde y, sobre todo, por la noche.';
        }

        return {
            totalScore,
            type,
            description
        };
    }
}

// Ejemplo 1: Alondra matutina extrema
console.log('\n=== Ejemplo 1: Alondra matutina ===');
const example1 = new ChronotypeCalculator(0, 0, 0, 0, 0, 0, 0, 0);
console.log('Resultado:', example1.chronotype);

// Ejemplo 2: Entre alondra y colibrí
console.log('\n=== Ejemplo 2: Entre alondra y colibrí ===');
const example2 = new ChronotypeCalculator(1, 1, 1, 1, 1, 1, 1, 1);
console.log('Resultado:', example2.chronotype);

// Ejemplo 3: Colibrí intermedio
console.log('\n=== Ejemplo 3: Colibrí intermedio ===');
const example3 = new ChronotypeCalculator(2, 2, 2, 1, 1, 2, 2, 1);
console.log('Resultado:', example3.chronotype);

// Ejemplo 4: Entre colibrí y búho
console.log('\n=== Ejemplo 4: Entre colibrí y búho ===');
const example4 = new ChronotypeCalculator(2, 2, 2, 3, 2, 3, 2, 2);
console.log('Resultado:', example4.chronotype);

// Ejemplo 5: Búho nocturno extremo
console.log('\n=== Ejemplo 5: Búho nocturno ===');
const example5 = new ChronotypeCalculator(3, 3, 3, 3, 3, 3, 3, 3);
console.log('Resultado:', example5.chronotype);
