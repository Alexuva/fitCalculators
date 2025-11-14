/**
 * Test de nivel de condición física general
 * Calcula 4 indicadores y suma puntuaciones (0-4 cada uno) para nivel general (0-18 puntos)
 */

class FitnessLevelCalculator {
    _gender;
    _age;
    _pushups;
    _squats;
    _p1;
    _p2;
    _p3;
    _flexibility;

    constructor(gender, age, pushups, squats, p1, p2, p3, flexibility) {
        this._gender = gender;
        this._age = age;
        this._pushups = pushups;
        this._squats = squats;
        this._p1 = p1;
        this._p2 = p2;
        this._p3 = p3;
        this._flexibility = flexibility;
    }

    get fitnessLevel() {
        // Calcular puntuaciones individuales
        const upperBodyScore = this.calculateUpperBodyScore();
        const lowerBodyScore = this.calculateLowerBodyScore();
        const vo2MaxScore = this.calculateVO2MaxScore();
        const flexibilityScore = this.calculateFlexibilityScore();

        const totalScore = upperBodyScore + lowerBodyScore + vo2MaxScore + flexibilityScore;

        let level = '';
        if (totalScore <= 3) {
            level = 'muy bajo';
        } else if (totalScore >= 4 && totalScore <= 7) {
            level = 'bajo';
        } else if (totalScore >= 8 && totalScore <= 11) {
            level = 'normal';
        } else if (totalScore >= 12 && totalScore <= 15) {
            level = 'bueno';
        } else {
            level = 'excelente';
        }

        return {
            totalScore,
            level,
            upperBodyScore,
            upperBodyLevel: this.getScoreLabel(upperBodyScore),
            lowerBodyScore,
            lowerBodyLevel: this.getScoreLabel(lowerBodyScore),
            vo2MaxScore,
            vo2MaxLevel: this.getScoreLabel(vo2MaxScore),
            flexibilityScore,
            flexibilityLevel: this.getScoreLabel(flexibilityScore)
        };
    }

    getScoreLabel(score) {
        const labels = ['muy bajo', 'bajo', 'normal', 'bueno', 'excelente'];
        return labels[score] || 'muy bajo';
    }

    calculateUpperBodyScore() {
        // Implementación básica - en el HTML tendremos las tablas completas
        return 2; // placeholder
    }

    calculateLowerBodyScore() {
        return 2; // placeholder
    }

    calculateVO2MaxScore() {
        const vo2max = Math.floor(30000 / (this._p1 + this._p2 + this._p3));
        // Clasificar según tabla
        return 2; // placeholder
    }

    calculateFlexibilityScore() {
        return 2; // placeholder
    }
}

// Ejemplo
console.log('\n=== Ejemplo: Mujer 23 años ===');
const example = new FitnessLevelCalculator('female', 23, 15, 30, 120, 100, 85, 2);
console.log('Resultado:', example.fitnessLevel);
