/**
 * Calculadora eficiencia sueño
 * - Awake time
 */

class CircadianRhythm {
    _awakeTime;

    constructor(awakeTime) {
        this._awakeTime = awakeTime;
    }

    get circadianRhythm(){
        const awakeMinutes = this.minutesFromHours(this._awakeTime);

        const solar_1 = this.normalizeMinutes(awakeMinutes + 15);
        const solar_2 = this.normalizeMinutes(awakeMinutes + 45);

        const physical_1 = this.normalizeMinutes(awakeMinutes + (60 * 5));
        const physical_2 = this.normalizeMinutes(awakeMinutes + (60 * 8));

        const limitCaffeine = this.normalizeMinutes(awakeMinutes - (15 * 60));

        const lastMeal_1 = this.normalizeMinutes(awakeMinutes - (10 * 60));
        const lastMeal_2 = this.normalizeMinutes(awakeMinutes - (11 * 60));

        const blueLight = this.normalizeMinutes(awakeMinutes - (10 * 60));

        const goToBed = this.normalizeMinutes(awakeMinutes - this.minutesFromHours("08:15"));

        return {
            solar_first: `${String(Math.floor(solar_1 / 60)).padStart(2, '0')}:${String(solar_1 % 60).padStart(2, '0')}`,
            solar_second: `${String(Math.floor(solar_2 / 60)).padStart(2, '0')}:${String(solar_2 % 60).padStart(2, '0')}`,
            physical_first: `${String(Math.floor(physical_1 / 60)).padStart(2, '0')}:${String(physical_1 % 60).padStart(2, '0')}`,
            physical_second: `${String(Math.floor(physical_2 / 60)).padStart(2, '0')}:${String(physical_2 % 60).padStart(2, '0')}`,
            limitCaffeine: `${String(Math.floor(limitCaffeine / 60)).padStart(2, '0')}:${String(limitCaffeine % 60).padStart(2, '0')}`,
            lastMeal_first: `${String(Math.floor(lastMeal_1 / 60)).padStart(2, '0')}:${String(lastMeal_1 % 60).padStart(2, '0')}`,
            lastMeal_second: `${String(Math.floor(lastMeal_2 / 60)).padStart(2, '0')}:${String(lastMeal_2 % 60).padStart(2, '0')}`,
            blueLight: `${String(Math.floor(blueLight / 60)).padStart(2, '0')}:${String(blueLight % 60).padStart(2, '0')}`,
            goToBed: `${String(Math.floor(goToBed / 60)).padStart(2, '0')}:${String(goToBed % 60).padStart(2, '0')}`,
        }
    }

    minutesFromHours(time){
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    }

    // Helper para normalizar minutos cuando cruzan medianoche
    normalizeMinutes(minutes) {
        if (minutes < 0) {
            return 1440 + minutes; // Suma 24 horas
        }
        if (minutes >= 1440) {
            return minutes - 1440; // Resta 24 horas
        }
        return minutes;
    }
}

// Ejemplo 1: Despierto temprano (6:00 AM)
console.log('\n=== Ejemplo 1: Despertar temprano (6:00 AM) ===');
const example1 = new CircadianRhythm('06:00');
const result1 = example1.circadianRhythm;
console.log('Hora de despertar: 6:00 AM');
console.log('☀️  Exposición solar:', result1.solar_first, '-', result1.solar_second);
console.log('💪 Ventana ejercicio:', result1.physical_first, '-', result1.physical_second);
console.log('☕ Límite cafeína:', result1.limitCaffeine);
console.log('🍽️  Última comida:', result1.lastMeal_second, '-', result1.lastMeal_first);
console.log('📱 Evitar luz azul después de:', result1.blueLight);
console.log('🛏️  Hora de acostarse:', result1.goToBed);

// Ejemplo 2: Despierto estándar (7:00 AM)
console.log('\n=== Ejemplo 2: Despertar estándar (7:00 AM) ===');
const example2 = new CircadianRhythm('07:00');
const result2 = example2.circadianRhythm;
console.log('Hora de despertar: 7:00 AM');
console.log('☀️  Exposición solar:', result2.solar_first, '-', result2.solar_second);
console.log('💪 Ventana ejercicio:', result2.physical_first, '-', result2.physical_second);
console.log('☕ Límite cafeína:', result2.limitCaffeine);
console.log('🍽️  Última comida:', result2.lastMeal_second, '-', result2.lastMeal_first);
console.log('📱 Evitar luz azul después de:', result2.blueLight);
console.log('🛏️  Hora de acostarse:', result2.goToBed);

// Ejemplo 3: Despierto tarde (9:00 AM)
console.log('\n=== Ejemplo 3: Despertar tarde (9:00 AM) ===');
const example3 = new CircadianRhythm('09:00');
const result3 = example3.circadianRhythm;
console.log('Hora de despertar: 9:00 AM');
console.log('☀️  Exposición solar:', result3.solar_first, '-', result3.solar_second);
console.log('💪 Ventana ejercicio:', result3.physical_first, '-', result3.physical_second);
console.log('☕ Límite cafeína:', result3.limitCaffeine);
console.log('🍽️  Última comida:', result3.lastMeal_second, '-', result3.lastMeal_first);
console.log('📱 Evitar luz azul después de:', result3.blueLight);
console.log('🛏️  Hora de acostarse:', result3.goToBed);

