class NutritionalDensityCalculator {
    _calories;
    _protein;
    _fiber;
    _vitaminC;
    _vitaminA;
    _iron;
    _calcium;
    _potassium;
    _magnesium;
    _vitaminE;
    _folate;
    _vitaminB12;
    _zinc;

    constructor(calories, protein, fiber, vitaminC, vitaminA, iron, calcium, potassium, magnesium, vitaminE, folate, vitaminB12, zinc) {
        this._calories = calories;
        this._protein = protein;
        this._fiber = fiber;
        this._vitaminC = vitaminC;
        this._vitaminA = vitaminA;
        this._iron = iron;
        this._calcium = calcium;
        this._potassium = potassium;
        this._magnesium = magnesium;
        this._vitaminE = vitaminE;
        this._folate = folate;
        this._vitaminB12 = vitaminB12;
        this._zinc = zinc;
    }

    get densityScore() {
        if (this._calories === 0) return 0;

        // Valores de referencia diarios (RDA)
        const RDA = {
            protein: 50,        // g
            fiber: 25,          // g
            vitaminC: 80,       // mg
            vitaminA: 800,      // µg
            iron: 14,           // mg
            calcium: 800,       // mg
            potassium: 2000,    // mg
            magnesium: 375,     // mg
            vitaminE: 12,       // mg
            folate: 200,        // µg
            vitaminB12: 2.5,    // µg
            zinc: 10            // mg
        };

        // Calcular % RDA por cada 100 kcal
        const factor = 100 / this._calories;

        const percentages = {
            protein: (this._protein * factor / RDA.protein) * 100,
            fiber: (this._fiber * factor / RDA.fiber) * 100,
            vitaminC: (this._vitaminC * factor / RDA.vitaminC) * 100,
            vitaminA: (this._vitaminA * factor / RDA.vitaminA) * 100,
            iron: (this._iron * factor / RDA.iron) * 100,
            calcium: (this._calcium * factor / RDA.calcium) * 100,
            potassium: (this._potassium * factor / RDA.potassium) * 100,
            magnesium: (this._magnesio * factor / RDA.magnesium) * 100,
            vitaminE: (this._vitaminE * factor / RDA.vitaminE) * 100,
            folate: (this._folate * factor / RDA.folate) * 100,
            vitaminB12: (this._vitaminB12 * factor / RDA.vitaminB12) * 100,
            zinc: (this._zinc * factor / RDA.zinc) * 100
        };

        // Promedio de todos los porcentajes
        const values = Object.values(percentages);
        const sum = values.reduce((acc, val) => acc + val, 0);
        const average = sum / values.length;

        return Math.round(average * 10) / 10;
    }

    get category() {
        const score = this.densityScore;

        if (score >= 50) {
            return {
                name: 'Muy alta densidad nutricional',
                description: 'Excelente alimento. Aporta muchos nutrientes con pocas calorías.',
                color: '#4CAF50'
            };
        } else if (score >= 25) {
            return {
                name: 'Alta densidad nutricional',
                description: 'Buen alimento. Tiene un buen equilibrio entre nutrientes y calorías.',
                color: '#8BC34A'
            };
        } else if (score >= 10) {
            return {
                name: 'Densidad nutricional moderada',
                description: 'Alimento aceptable, pero podría ser más nutritivo.',
                color: '#FFC107'
            };
        } else {
            return {
                name: 'Baja densidad nutricional',
                description: 'Alimento poco nutritivo. Aporta pocas vitaminas y minerales.',
                color: '#FF5722'
            };
        }
    }

    get topNutrients() {
        if (this._calories === 0) return [];

        const factor = 100 / this._calories;

        const RDA = {
            protein: 50,
            fiber: 25,
            vitaminC: 80,
            vitaminA: 800,
            iron: 14,
            calcium: 800,
            potassium: 2000,
            magnesium: 375,
            vitaminE: 12,
            folate: 200,
            vitaminB12: 2.5,
            zinc: 10
        };

        const nutrients = [
            { name: 'Proteína', percent: (this._protein * factor / RDA.protein) * 100 },
            { name: 'Fibra', percent: (this._fiber * factor / RDA.fiber) * 100 },
            { name: 'Vitamina C', percent: (this._vitaminC * factor / RDA.vitaminC) * 100 },
            { name: 'Vitamina A', percent: (this._vitaminA * factor / RDA.vitaminA) * 100 },
            { name: 'Hierro', percent: (this._iron * factor / RDA.iron) * 100 },
            { name: 'Calcio', percent: (this._calcium * factor / RDA.calcium) * 100 },
            { name: 'Potasio', percent: (this._potassium * factor / RDA.potassium) * 100 },
            { name: 'Magnesio', percent: (this._magnesio * factor / RDA.magnesium) * 100 },
            { name: 'Vitamina E', percent: (this._vitaminE * factor / RDA.vitaminE) * 100 },
            { name: 'Folato', percent: (this._folate * factor / RDA.folate) * 100 },
            { name: 'Vitamina B12', percent: (this._vitaminB12 * factor / RDA.vitaminB12) * 100 },
            { name: 'Zinc', percent: (this._zinc * factor / RDA.zinc) * 100 }
        ];

        return nutrients
            .filter(n => n.percent > 0)
            .sort((a, b) => b.percent - a.percent)
            .slice(0, 3);
    }
}
