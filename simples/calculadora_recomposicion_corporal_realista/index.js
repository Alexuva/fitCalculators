/**
 * Calculadora de recomposición corporal realista
 * Tasas semanales de pérdida de grasa y ganancia muscular según:
 * - Género
 * - Peso (kg)
 * - Porcentaje de grasa corporal
 * - Nivel de experiencia
 * - Numero semanas para cambio
 */

class BodyRecomposition {
    _gender;
    _weight;
    _fat;
    _experience;
    _weeks;

    constructor(gender, weight, fat, experience, weeks) {
        this._gender = gender;
        this._weight = weight;
        this._fat = fat;
        this._experience = experience;
        this._weeks = weeks;
    }

    getRate(gender, fatPercentage, experienceLevel) {
        const data = BODY_RECOMPOSITION_DATA[gender];
        const range = data.find(r => fatPercentage >= r.fatRange.min && fatPercentage <= r.fatRange.max);

        return {
            fatLoss: range.fatLossWeekly,
            muscleGain: range.muscleGainWeekly[experienceLevel]
        };
    }

    get bodyRecomposition() {
        const {fatLoss, muscleGain} = this.getRate(this._gender, this._fat, this._experience);

        // Convertir porcentajes a decimales (dividir entre 100)
        const minFatLossRate = fatLoss.min / 100;
        const maxFatLossRate = fatLoss.max / 100;
        const minMuscleGainRate = muscleGain.min / 100;
        const maxMuscleGainRate = muscleGain.max / 100;

        // Pérdida de grasa
        const m = (this._weeks * minFatLossRate * this._weight).toFixed(2); // kg totales (mín)
        const n = (this._weeks * maxFatLossRate * this._weight).toFixed(2); // kg totales (máx)
        const p = (minFatLossRate * this._weight).toFixed(2); // kg/semana (mín)
        const q = (maxFatLossRate * this._weight).toFixed(2); // kg/semana (máx)

        // Ganancia muscular
        const a = (this._weeks * minMuscleGainRate * this._weight).toFixed(2); // kg totales (mín)
        const b = (this._weeks * maxMuscleGainRate * this._weight).toFixed(2); // kg totales (máx)
        const c = (minMuscleGainRate * this._weight).toFixed(2); // kg/semana (mín)
        const d = (maxMuscleGainRate * this._weight).toFixed(2); // kg/semana (máx)

        return {
            fatLoss: {
                totalMin: parseFloat(m),
                totalMax: parseFloat(n),
                weeklyMin: parseFloat(p),
                weeklyMax: parseFloat(q)
            },
            muscleGain: {
                totalMin: parseFloat(a),
                totalMax: parseFloat(b),
                weeklyMin: parseFloat(c),
                weeklyMax: parseFloat(d)
            },
            message: `En ${this._weeks} semanas puedes conseguir:\n` +
                     `• Perder, como máximo, entre ${m} y ${n} kg de grasa corporal (≈ ${p}–${q} kg/sem).\n` +
                     `  o\n` +
                     `• Ganar, como máximo, entre ${a} y ${b} kg de masa muscular (≈ ${c}–${d} kg/sem).`
        };
    }


}

const BODY_RECOMPOSITION_DATA = {
    male: [
        {
            fatRange: { min: 25.1, max: 100 },
            label: ">25%",
            fatLossWeekly: { min: 1, max: 1.5 }, // Porcentaje semanal
            muscleGainWeekly: {
                beginner: { min: 0.28, max: 0.4 },
                intermediate: { min: 0.21, max: 0.28 },
                advanced: { min: 0.12, max: 0.21 },
                expert: { min: 0.07, max: 0.15 }
            }
        },
        {
            fatRange: { min: 20.1, max: 25 },
            label: "20.1-25%",
            fatLossWeekly: { min: 0.8, max: 1.2 },
            muscleGainWeekly: {
                beginner: { min: 0.27, max: 0.39 },
                intermediate: { min: 0.2, max: 0.27 },
                advanced: { min: 0.11, max: 0.2 },
                expert: { min: 0.07, max: 0.14 }
            }
        },
        {
            fatRange: { min: 15.1, max: 20 },
            label: "15.1-20%",
            fatLossWeekly: { min: 0.5, max: 1.0 },
            muscleGainWeekly: {
                beginner: { min: 0.26, max: 0.38 },
                intermediate: { min: 0.19, max: 0.26 },
                advanced: { min: 0.1, max: 0.19 },
                expert: { min: 0.06, max: 0.13 }
            }
        },
        {
            fatRange: { min: 10, max: 15 },
            label: "10-15%",
            fatLossWeekly: { min: 0.3, max: 0.8 },
            muscleGainWeekly: {
                beginner: { min: 0.25, max: 0.37 },
                intermediate: { min: 0.18, max: 0.25 },
                advanced: { min: 0.09, max: 0.18 },
                expert: { min: 0.05, max: 0.12 }
            }
        },
        {
            fatRange: { min: 0, max: 9.9 },
            label: "<10%",
            fatLossWeekly: { min: 0.2, max: 0.5 },
            muscleGainWeekly: {
                beginner: { min: 0.24, max: 0.36 },
                intermediate: { min: 0.17, max: 0.24 },
                advanced: { min: 0.07, max: 0.17 },
                expert: { min: 0.04, max: 0.11 }
            }
        }
    ],
    female: [
        {
            fatRange: { min: 33.1, max: 100 },
            label: ">33%",
            fatLossWeekly: { min: 1, max: 1.5 },
            muscleGainWeekly: {
                beginner: { min: 0.28, max: 0.4 },
                intermediate: { min: 0.21, max: 0.28 },
                advanced: { min: 0.12, max: 0.21 },
                expert: { min: 0.07, max: 0.15 }
            }
        },
        {
            fatRange: { min: 28.1, max: 33 },
            label: "28.1-33%",
            fatLossWeekly: { min: 0.8, max: 1.2 },
            muscleGainWeekly: {
                beginner: { min: 0.27, max: 0.39 },
                intermediate: { min: 0.2, max: 0.27 },
                advanced: { min: 0.11, max: 0.2 },
                expert: { min: 0.07, max: 0.14 }
            }
        },
        {
            fatRange: { min: 23.1, max: 28 },
            label: "23.1-28%",
            fatLossWeekly: { min: 0.5, max: 1.0 },
            muscleGainWeekly: {
                beginner: { min: 0.26, max: 0.38 },
                intermediate: { min: 0.19, max: 0.26 },
                advanced: { min: 0.1, max: 0.19 },
                expert: { min: 0.06, max: 0.13 }
            }
        },
        {
            fatRange: { min: 18.1, max: 23 },
            label: "18.1-23%",
            fatLossWeekly: { min: 0.3, max: 0.8 },
            muscleGainWeekly: {
                beginner: { min: 0.25, max: 0.37 },
                intermediate: { min: 0.18, max: 0.25 },
                advanced: { min: 0.09, max: 0.18 },
                expert: { min: 0.05, max: 0.12 }
            }
        },
        {
            fatRange: { min: 0, max: 18 },
            label: "<18%",
            fatLossWeekly: { min: 0.2, max: 0.5 },
            muscleGainWeekly: {
                beginner: { min: 0.24, max: 0.36 },
                intermediate: { min: 0.17, max: 0.24 },
                advanced: { min: 0.07, max: 0.17 },
                expert: { min: 0.04, max: 0.11 }
            }
        }
    ]
};

// Ejemplo 1: Hombre, 86.5kg, 22% grasa, intermedio, 12 semanas
const ejemplo1 = new BodyRecomposition('male', 86.5, 22, 'intermediate', 12);
console.log('=== Ejemplo 1: Hombre intermedio ===');
console.log('Datos: 86.5kg, 22% grasa, 12 semanas');
console.log(ejemplo1.bodyRecomposition.message);
console.log('');

// Ejemplo 2: Mujer, 65kg, 30% grasa, intermedio, 8 semanas
const ejemplo2 = new BodyRecomposition('female', 65, 30, 'intermediate', 8);
console.log('=== Ejemplo 2: Mujer intermedia ===');
console.log('Datos: 65kg, 30% grasa, 8 semanas');
console.log(ejemplo2.bodyRecomposition.message);
console.log('');

// Ejemplo 3: Hombre, 90kg, 15% grasa, avanzado, 16 semanas
const ejemplo3 = new BodyRecomposition('male', 90, 15, 'advanced', 16);
console.log('=== Ejemplo 3: Hombre avanzado ===');
console.log('Datos: 90kg, 15% grasa, 16 semanas');
console.log(ejemplo3.bodyRecomposition.message);
console.log('');

// Ejemplo 4: Mujer, 55kg, 20% grasa, experto, 4 semanas
const ejemplo4 = new BodyRecomposition('female', 55, 20, 'expert', 4);
console.log('=== Ejemplo 4: Mujer experta ===');
console.log('Datos: 55kg, 20% grasa, 4 semanas');
console.log(ejemplo4.bodyRecomposition.message);
