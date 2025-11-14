/**
 * Calculadora de carga de recuperación
 * 1. Calcula nivel de fatiga (4 preguntas, 0-2 puntos cada una)
 * 2. Según tipo de deporte y nivel de fatiga, recomienda carga para próxima semana
 */

class RecoveryLoadCalculator {
    _q1; // Ganas y motivación
    _q2; // Progresión entrenamientos
    _q3; // Nivel de fatiga
    _q4; // Dolores musculares
    _sportType; // 'endurance', 'strength', 'concurrent', 'mixed'
    _km; // Para endurance y concurrent
    _sets; // Para strength y concurrent
    _minutes; // Para mixed

    constructor(q1, q2, q3, q4, sportType, data) {
        this._q1 = q1;
        this._q2 = q2;
        this._q3 = q3;
        this._q4 = q4;
        this._sportType = sportType;

        // data puede contener: km, sets, minutes según sportType
        this._km = data.km || 0;
        this._sets = data.sets || 0;
        this._minutes = data.minutes || 0;
    }

    get recoveryLoad() {
        // Calcular nivel de fatiga
        const fatigueScore = this._q1 + this._q2 + this._q3 + this._q4;
        let fatigueLevel = '';

        if (fatigueScore <= 1) {
            fatigueLevel = 'baja';
        } else if (fatigueScore >= 2 && fatigueScore <= 4) {
            fatigueLevel = 'moderada';
        } else if (fatigueScore >= 5 && fatigueScore <= 6) {
            fatigueLevel = 'alta';
        } else {
            fatigueLevel = 'muy alta';
        }

        // Calcular carga recomendada según tipo de deporte
        const recommendation = this.calculateLoad(fatigueLevel);

        return {
            fatigueScore,
            fatigueLevel,
            sportType: this._sportType,
            recommendation
        };
    }

    calculateLoad(fatigueLevel) {
        const multipliers = {
            'baja': { min: 0.9, max: 1 },
            'moderada': { min: 0.8, max: 0.9 },
            'alta': { min: 0.6, max: 0.75 },
            'muy alta': { min: 0.5, max: 0.5 }
        };

        const mult = multipliers[fatigueLevel];

        if (this._sportType === 'endurance') {
            const minKm = (this._km * mult.min).toFixed(1);
            const maxKm = (this._km * mult.max).toFixed(1);
            return {
                type: 'km',
                min: parseFloat(minKm),
                max: parseFloat(maxKm),
                message: `${minKm}-${maxKm} km`
            };
        } else if (this._sportType === 'strength') {
            const minSets = Math.round(this._sets * mult.min);
            const maxSets = Math.round(this._sets * mult.max);
            return {
                type: 'series',
                min: minSets,
                max: maxSets,
                message: `${minSets}-${maxSets} series por grupo muscular o movimiento`
            };
        } else if (this._sportType === 'concurrent') {
            const minKm = (this._km * mult.min).toFixed(1);
            const maxKm = (this._km * mult.max).toFixed(1);
            const minSets = Math.round(this._sets * mult.min);
            const maxSets = Math.round(this._sets * mult.max);
            return {
                type: 'concurrent',
                endurance: { min: parseFloat(minKm), max: parseFloat(maxKm) },
                strength: { min: minSets, max: maxSets },
                message: `Resistencia: ${minKm}-${maxKm} km | Fuerza: ${minSets}-${maxSets} series`
            };
        } else { // mixed
            const minMin = Math.round(this._minutes * mult.min);
            const maxMin = Math.round(this._minutes * mult.max);
            return {
                type: 'minutos',
                min: minMin,
                max: maxMin,
                message: `${minMin}-${maxMin} min/sesión`
            };
        }
    }
}

// Ejemplo 1: Resistencia con fatiga moderada
console.log('\n=== Ejemplo 1: Resistencia, fatiga moderada ===');
const example1 = new RecoveryLoadCalculator(0, 1, 1, 1, 'endurance', { km: 32.5 });
console.log('Resultado:', example1.recoveryLoad);

// Ejemplo 2: Concurrente con fatiga muy alta
console.log('\n=== Ejemplo 2: Concurrente, fatiga muy alta ===');
const example2 = new RecoveryLoadCalculator(2, 2, 1, 2, 'concurrent', { km: 20, sets: 18 });
console.log('Resultado:', example2.recoveryLoad);
