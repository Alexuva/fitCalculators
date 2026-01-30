class NutritionalDensityCalculator {
    _calories;
    _protein;
    _fiber;
    _vitaminA;
    _vitaminC;
    _vitaminE;
    _calcium;
    _iron;
    _magnesium;
    _potassium;
    _saturatedFat;
    _addedSugars;
    _sodium;

    constructor(calories, protein, fiber, vitaminA, vitaminC, vitaminE, calcium, iron, magnesium, potassium, saturatedFat, addedSugars, sodium) {
        this._calories = calories;
        this._protein = protein;
        this._fiber = fiber;
        this._vitaminA = vitaminA;
        this._vitaminC = vitaminC;
        this._vitaminE = vitaminE;
        this._calcium = calcium;
        this._iron = iron;
        this._magnesium = magnesium;
        this._potassium = potassium;
        this._saturatedFat = saturatedFat;
        this._addedSugars = addedSugars;
        this._sodium = sodium;
    }

    get idn() {
        if (this._calories === 0) return 0;

        // Normalize to 100 kcal
        const factor = 100 / this._calories;

        // Reference values for positive nutrients (VD)
        const VD = {
            protein: 50,        // g
            fiber: 25,          // g
            vitaminA: 1500,     // µg RAE
            vitaminC: 60,       // mg
            vitaminE: 20,       // mg
            calcium: 1000,      // mg
            iron: 18,           // mg
            magnesium: 400,     // mg
            potassium: 3500     // mg
        };

        // Maximum values for negative nutrients (VM)
        const VM = {
            saturatedFat: 20,   // g
            addedSugars: 50,    // g
            sodium: 2400        // mg
        };

        // Calculate % VD for positive nutrients (normalized to 100 kcal)
        // Apply max 100% cap to each nutrient before summing
        const positivePercents =
            Math.min(100, (this._protein * factor) / VD.protein * 100) +
            Math.min(100, (this._fiber * factor) / VD.fiber * 100) +
            Math.min(100, (this._vitaminA * factor) / VD.vitaminA * 100) +
            Math.min(100, (this._vitaminC * factor) / VD.vitaminC * 100) +
            Math.min(100, (this._vitaminE * factor) / VD.vitaminE * 100) +
            Math.min(100, (this._calcium * factor) / VD.calcium * 100) +
            Math.min(100, (this._iron * factor) / VD.iron * 100) +
            Math.min(100, (this._magnesium * factor) / VD.magnesium * 100) +
            Math.min(100, (this._potassium * factor) / VD.potassium * 100);

        // Calculate % VM for negative nutrients (normalized to 100 kcal)
        const negativePercents =
            ((this._saturatedFat * factor) / VM.saturatedFat * 100) +
            ((this._addedSugars * factor) / VM.addedSugars * 100) +
            ((this._sodium * factor) / VM.sodium * 100);

        // IDN = % positives - % negatives
        const idn = positivePercents - negativePercents;

        return Math.round(idn);
    }

    get category() {
        const idn = this.idn;

        if (idn > 100) {
            return {
                name: 'Muy denso nutricionalmente',
                description: 'Excelente alimento. Aporta muchos nutrientes beneficiosos y pocos nutrientes a limitar.',
                color: '#4CAF50'
            };
        } else if (idn >= 0) {
            return {
                name: 'Densidad nutricional moderada',
                description: 'Alimento aceptable. Tiene un equilibrio entre nutrientes positivos y negativos.',
                color: '#FFC107'
            };
        } else {
            return {
                name: 'Baja densidad nutricional',
                description: 'Alimento poco nutritivo. Aporta más nutrientes a limitar que nutrientes beneficiosos.',
                color: '#FF5722'
            };
        }
    }

    getBreakdown() {
        if (this._calories === 0) return { positives: 0, negatives: 0 };

        const factor = 100 / this._calories;

        // Reference values
        const VD = {
            protein: 50, fiber: 25, vitaminA: 1500, vitaminC: 60, vitaminE: 20,
            calcium: 1000, iron: 18, magnesium: 400, potassium: 3500
        };
        const VM = {
            saturatedFat: 20, addedSugars: 50, sodium: 2400
        };

        const positives =
            Math.min(100, (this._protein * factor) / VD.protein * 100) +
            Math.min(100, (this._fiber * factor) / VD.fiber * 100) +
            Math.min(100, (this._vitaminA * factor) / VD.vitaminA * 100) +
            Math.min(100, (this._vitaminC * factor) / VD.vitaminC * 100) +
            Math.min(100, (this._vitaminE * factor) / VD.vitaminE * 100) +
            Math.min(100, (this._calcium * factor) / VD.calcium * 100) +
            Math.min(100, (this._iron * factor) / VD.iron * 100) +
            Math.min(100, (this._magnesium * factor) / VD.magnesium * 100) +
            Math.min(100, (this._potassium * factor) / VD.potassium * 100);

        const negatives =
            ((this._saturatedFat * factor) / VM.saturatedFat * 100) +
            ((this._addedSugars * factor) / VM.addedSugars * 100) +
            ((this._sodium * factor) / VM.sodium * 100);

        return {
            positives: Math.round(positives * 10) / 10,
            negatives: Math.round(negatives * 10) / 10
        };
    }
}

// Test with yogurt example
console.log("=== PRUEBA CON YOGUR NATURAL ===");
const yogurt = new NutritionalDensityCalculator(
    63,     // calories
    3.5,    // protein
    0,      // fiber
    180,    // vitaminA
    0,      // vitaminC
    0.1,    // vitaminE
    121,    // calcium
    0,      // iron
    12,     // magnesium
    155,    // potassium
    1.0,    // saturatedFat
    0,      // addedSugars
    46      // sodium
);

const factor = 100 / 63;
console.log(`Factor: ${factor.toFixed(3)}`);
console.log("\n--- Nutrientes por 100 kcal ---");
console.log(`Proteína: ${(3.5 * factor).toFixed(2)} g`);
console.log(`Fibra: ${(0 * factor).toFixed(2)} g`);
console.log(`Vitamina A: ${(180 * factor).toFixed(2)} µg`);
console.log(`Vitamina C: ${(0 * factor).toFixed(2)} mg`);
console.log(`Vitamina E: ${(0.1 * factor).toFixed(2)} mg`);
console.log(`Calcio: ${(121 * factor).toFixed(2)} mg`);
console.log(`Hierro: ${(0 * factor).toFixed(2)} mg`);
console.log(`Magnesio: ${(12 * factor).toFixed(2)} mg`);
console.log(`Potasio: ${(155 * factor).toFixed(2)} mg`);
console.log(`Grasa saturada: ${(1.0 * factor).toFixed(2)} g`);
console.log(`Sodio: ${(46 * factor).toFixed(2)} mg`);

console.log("\n--- % VD positivos (individual) ---");
console.log(`Proteína: ${((3.5 * factor) / 50 * 100).toFixed(1)}%`);
console.log(`Fibra: ${((0 * factor) / 25 * 100).toFixed(1)}%`);
console.log(`Vitamina A: ${((180 * factor) / 5000 * 100).toFixed(1)}%`);
console.log(`Vitamina C: ${((0 * factor) / 60 * 100).toFixed(1)}%`);
console.log(`Vitamina E: ${((0.1 * factor) / 20 * 100).toFixed(1)}%`);
console.log(`Calcio: ${((121 * factor) / 1000 * 100).toFixed(1)}%`);
console.log(`Hierro: ${((0 * factor) / 18 * 100).toFixed(1)}%`);
console.log(`Magnesio: ${((12 * factor) / 400 * 100).toFixed(1)}%`);
console.log(`Potasio: ${((155 * factor) / 3500 * 100).toFixed(1)}%`);

const breakdown = yogurt.getBreakdown();
console.log(`\nSUMA %VD positivos: ${breakdown.positives.toFixed(1)}`);

console.log("\n--- % VM negativos (individual) ---");
console.log(`Grasa saturada: ${((1.0 * factor) / 20 * 100).toFixed(1)}%`);
console.log(`Azúcares añadidos: ${((0 * factor) / 50 * 100).toFixed(1)}%`);
console.log(`Sodio: ${((46 * factor) / 2400 * 100).toFixed(1)}%`);

console.log(`\nSUMA %VM negativos: ${breakdown.negatives.toFixed(1)}`);

const idn = yogurt.idn;
console.log(`\n=== IDN = ${breakdown.positives.toFixed(1)} - ${breakdown.negatives.toFixed(1)} = ${idn} ===`);
console.log(`Categoría: ${yogurt.category.name}`);
console.log("\nResultado esperado del documento: IDN = 39");
