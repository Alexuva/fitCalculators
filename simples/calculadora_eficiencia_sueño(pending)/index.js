/**
 * Calculadora eficiencia sueño
 * - Hora a la que te vas a la cama
 * - Hora a la que te despiertas
 * - Tiempo en quedarte dormido
 * - Veces que te despiertas
 * - Tiempo que te quedas despierto en total
 */

class SleepEfficiency {
    _sleepTime;
    _wakeUpTime;
    _fallAsleepTime;
    _wakeUps;
    _totalAwakeTime;

    constructor(sleepTime, wakeUpTime, fallAsleepTime, wakeUps, totalAwakeTime) {
        this._sleepTime = sleepTime;
        this._wakeUpTime = wakeUpTime;
        this._fallAsleepTime = fallAsleepTime;
        this._wakeUps = wakeUps;
        this._totalAwakeTime = totalAwakeTime;
    }

    get sleepEfficiency() {
        let timeInBed = this.minutesFromHours(this._wakeUpTime) - this.minutesFromHours(this._sleepTime);
        // Si el resultado es negativo, significa que cruzamos la medianoche
        if (timeInBed < 0) {
            timeInBed = (1440 - this.minutesFromHours(this._sleepTime)) + this.minutesFromHours(this._wakeUpTime);
        }

        const totalTimeAwake = this._fallAsleepTime + (15 * this._wakeUps) + this.minutesFromHours(this._totalAwakeTime);
        const totalTimeSleep = timeInBed - totalTimeAwake;
        const efficiency = parseFloat(((totalTimeSleep / timeInBed) * 100).toFixed(2));

        switch (true) {
            case (efficiency <= 80):
                return {
                    efficiency,
                    message: 'muy baja'
                }

            case (efficiency > 80 && efficiency <= 84):
                return {
                    efficiency,
                    message: 'baja'
                }

            case (efficiency > 84 && efficiency <= 85):
                return {
                    efficiency,
                    message: 'normal'
                }

            case (efficiency > 85 && efficiency <= 90):
                return {
                    efficiency,
                    message: 'buena'
                }

            default:
                return {
                    efficiency,
                    message: 'muy buena'
                }
        }
    }

    minutesFromHours(time){
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    }

}

// Ejemplo 1: Sueño muy eficiente (>90%)
console.log('\n=== Ejemplo 1: Eficiencia muy buena ===');
const example1 = new SleepEfficiency(
    '23:00',  // Hora de acostarse
    '07:00',  // Hora de despertar
    10,       // 10 minutos para dormirse
    1,        // 1 vez despierto (15 min estimado)
    '00:05'   // 5 minutos despierto en total
);
console.log('Acostado: 23:00, Despierto: 07:00, Tarda en dormirse: 10 min, Despertares: 1, Tiempo despierto: 5 min');
console.log('Resultado:', example1.sleepEfficiency);

// Ejemplo 2: Sueño con eficiencia buena (85-90%)
console.log('\n=== Ejemplo 2: Eficiencia buena ===');
const example2 = new SleepEfficiency(
    '22:30',  // Hora de acostarse
    '06:30',  // Hora de despertar
    20,       // 20 minutos para dormirse
    2,        // 2 veces despierto (30 min estimado)
    '00:15'   // 15 minutos despierto en total
);
console.log('Acostado: 22:30, Despierto: 06:30, Tarda en dormirse: 20 min, Despertares: 2, Tiempo despierto: 15 min');
console.log('Resultado:', example2.sleepEfficiency);

// Ejemplo 3: Sueño con eficiencia baja (80-84%)
console.log('\n=== Ejemplo 3: Eficiencia baja ===');
const example3 = new SleepEfficiency(
    '23:30',  // Hora de acostarse
    '07:00',  // Hora de despertar
    30,       // 30 minutos para dormirse
    4,        // 4 veces despierto (60 min estimado)
    '00:20'   // 20 minutos despierto en total
);
console.log('Acostado: 23:30, Despierto: 07:00, Tarda en dormirse: 30 min, Despertares: 4, Tiempo despierto: 20 min');
console.log('Resultado:', example3.sleepEfficiency);

// Ejemplo 4: Sueño con eficiencia muy baja (<=80%)
console.log('\n=== Ejemplo 4: Eficiencia muy baja ===');
const example4 = new SleepEfficiency(
    '22:00',  // Hora de acostarse
    '06:00',  // Hora de despertar
    45,       // 45 minutos para dormirse
    6,        // 6 veces despierto (90 min estimado)
    '00:30'   // 30 minutos despierto en total
);
console.log('Acostado: 22:00, Despierto: 06:00, Tarda en dormirse: 45 min, Despertares: 6, Tiempo despierto: 30 min');
console.log('Resultado:', example4.sleepEfficiency);

// Ejemplo 5: Siesta (sin cruzar medianoche)
console.log('\n=== Ejemplo 5: Siesta durante el día ===');
const example5 = new SleepEfficiency(
    '14:00',  // Hora de acostarse
    '15:30',  // Hora de despertar
    5,        // 5 minutos para dormirse
    0,        // Sin despertares
    '00:00'   // 0 minutos despierto
);
console.log('Acostado: 14:00, Despierto: 15:30, Tarda en dormirse: 5 min, Despertares: 0, Tiempo despierto: 0 min');
console.log('Resultado:', example5.sleepEfficiency);

