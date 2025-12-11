/**
 * Recovery Load Calculator
 * 1. Calculate fatigue level (4 questions, 0-2 points each)
 * 2. Based on sport type and fatigue level, recommend load for next week
 */

class RecoveryLoadCalculator {
    _q1; // Motivation and desire
    _q2; // Training progression
    _q3; // Fatigue level
    _q4; // Muscle pain
    _sportType; // 'endurance', 'strength', 'concurrent', 'mixed'
    _km; // For endurance and concurrent
    _sets; // For strength and concurrent
    _minutes; // For mixed

    constructor(q1, q2, q3, q4, sportType, data) {
        this._q1 = q1;
        this._q2 = q2;
        this._q3 = q3;
        this._q4 = q4;
        this._sportType = sportType;

        // data can contain: km, sets, minutes based on sportType
        this._km = data.km || 0;
        this._sets = data.sets || 0;
        this._minutes = data.minutes || 0;
    }

    get recoveryLoad() {
        // Calculate fatigue level
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

        // Calculate recommended load based on sport type
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
        const formatNumber = (num) => num.toString().replace('.', ',');
        const isVeryHigh = fatigueLevel === 'muy alta';

        if (this._sportType === 'endurance') {
            const minKm = (this._km * mult.min).toFixed(1);
            const maxKm = (this._km * mult.max).toFixed(1);
            const minKmFormatted = formatNumber(minKm);
            const maxKmFormatted = formatNumber(maxKm);

            // For very high fatigue or when min equals max, show single value, otherwise show range
            const message = (isVeryHigh || minKm === maxKm) ?
                `${minKmFormatted} km` :
                `${minKmFormatted}-${maxKmFormatted} km`;

            return {
                type: 'km',
                min: parseFloat(minKm),
                max: parseFloat(maxKm),
                message: message
            };
        } else if (this._sportType === 'strength') {
            const minSets = Math.round(this._sets * mult.min);
            const maxSets = Math.round(this._sets * mult.max);

            // For very high fatigue or when min equals max, show single value, otherwise show range
            const message = (isVeryHigh || minSets === maxSets) ?
                `${minSets} series por grupo muscular o movimiento` :
                `${minSets}-${maxSets} series por grupo muscular o movimiento`;

            return {
                type: 'series',
                min: minSets,
                max: maxSets,
                message: message
            };
        } else if (this._sportType === 'concurrent') {
            const minKm = (this._km * mult.min).toFixed(1);
            const maxKm = (this._km * mult.max).toFixed(1);
            const minSets = Math.round(this._sets * mult.min);
            const maxSets = Math.round(this._sets * mult.max);
            const minKmFormatted = formatNumber(minKm);
            const maxKmFormatted = formatNumber(maxKm);

            // For very high fatigue or when min equals max, show single value, otherwise show range
            const kmMessage = (isVeryHigh || minKm === maxKm) ?
                `${minKmFormatted} km` :
                `${minKmFormatted}-${maxKmFormatted} km`;
            const setsMessage = (isVeryHigh || minSets === maxSets) ?
                `${minSets} series` :
                `${minSets}-${maxSets} series`;

            return {
                type: 'concurrent',
                endurance: { min: parseFloat(minKm), max: parseFloat(maxKm) },
                strength: { min: minSets, max: maxSets },
                message: `Resistencia: ${kmMessage} | Fuerza: ${setsMessage}`,
                kmMessage: kmMessage,
                setsMessage: setsMessage
            };
        } else { // mixed
            const minMin = Math.round(this._minutes * mult.min);
            const maxMin = Math.round(this._minutes * mult.max);

            // For very high fatigue or when min equals max, show single value, otherwise show range
            const message = (isVeryHigh || minMin === maxMin) ?
                `${minMin} min/sesión` :
                `${minMin}-${maxMin} min/sesión`;

            return {
                type: 'minutos',
                min: minMin,
                max: maxMin,
                message: message
            };
        }
    }
}

// Example 1: Endurance with moderate fatigue
console.log('\n=== Example 1: Endurance, moderate fatigue ===');
const example1 = new RecoveryLoadCalculator(0, 1, 1, 1, 'endurance', { km: 32.5 });
console.log('Result:', example1.recoveryLoad);

// Example 2: Concurrent with very high fatigue (should show formula)
console.log('\n=== Example 2: Concurrent, very high fatigue ===');
const example2 = new RecoveryLoadCalculator(2, 2, 1, 2, 'concurrent', { km: 20, sets: 18 });
console.log('Result:', example2.recoveryLoad);

// Example 3: Endurance with very high fatigue
console.log('\n=== Example 3: Endurance, very high fatigue ===');
const example3 = new RecoveryLoadCalculator(2, 2, 2, 2, 'endurance', { km: 32.5 });
console.log('Result:', example3.recoveryLoad);

// Example 4: Strength with very high fatigue
console.log('\n=== Example 4: Strength, very high fatigue ===');
const example4 = new RecoveryLoadCalculator(2, 2, 2, 2, 'strength', { sets: 20 });
console.log('Result:', example4.recoveryLoad);

// Example 5: Mixed with very high fatigue
console.log('\n=== Example 5: Mixed, very high fatigue ===');
const example5 = new RecoveryLoadCalculator(2, 2, 2, 2, 'mixed', { minutes: 90 });
console.log('Result:', example5.recoveryLoad);
