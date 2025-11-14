/**
 * Test de tipo de fibras musculares
 * 2 inputs numéricos: repeticiones con el 80% 1RM en sentadilla y press de banca
 * Clasificación: <8 (fibras rápidas tipo II), 8-12 (sin predominancia), >12 (fibras lentas tipo I)
 */

class FiberTypeCalculator {
    _squatReps;
    _benchPressReps;

    constructor(squatReps, benchPressReps) {
        this._squatReps = squatReps;
        this._benchPressReps = benchPressReps;
    }

    classifyFiberType(reps) {
        if (reps < 8) {
            return 'más predominancia de fibras rápidas tipo II.';
        } else if (reps >= 8 && reps <= 12) {
            return 'sin predominancia clara de uno u otro tipo de fibras.';
        } else {
            return 'más predominancia de fibras lentas tipo I.';
        }
    }

    get fiberTypes() {
        return {
            lowerBody: this.classifyFiberType(this._squatReps),
            upperBody: this.classifyFiberType(this._benchPressReps),
            squatReps: this._squatReps,
            benchPressReps: this._benchPressReps
        };
    }
}

// Ejemplo 1: Fibras rápidas en ambos
console.log('\n=== Ejemplo 1: Fibras rápidas tipo II ===');
const example1 = new FiberTypeCalculator(7, 6);
console.log('Sentadilla: 7 reps, Press banca: 6 reps');
console.log('Resultado:', example1.fiberTypes);

// Ejemplo 2: Sin predominancia clara
console.log('\n=== Ejemplo 2: Sin predominancia clara ===');
const example2 = new FiberTypeCalculator(10, 9);
console.log('Sentadilla: 10 reps, Press banca: 9 reps');
console.log('Resultado:', example2.fiberTypes);

// Ejemplo 3: Fibras lentas en ambos
console.log('\n=== Ejemplo 3: Fibras lentas tipo I ===');
const example3 = new FiberTypeCalculator(14, 15);
console.log('Sentadilla: 14 reps, Press banca: 15 reps');
console.log('Resultado:', example3.fiberTypes);

// Ejemplo 4: Mixto - tren inferior rápido, tren superior sin predominancia
console.log('\n=== Ejemplo 4: Mixto ===');
const example4 = new FiberTypeCalculator(7, 10);
console.log('Sentadilla: 7 reps, Press banca: 10 reps');
console.log('Resultado:', example4.fiberTypes);
