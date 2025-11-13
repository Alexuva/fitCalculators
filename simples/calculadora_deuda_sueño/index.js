/**
 * Calculadora deuda sueño
 * - Horas que necesitas dormir
 * - Horas dormidas:
 *  - Lunes
 *  - Martes
 *  - Miércoles
 *  - Jueves
 *  - Viernes
 *  - Sábado
 *  - Domingo
 * - En cuántos días quieres recuperar tu deuda de sueño
 */

class SleepDebtCalculator {
    _neededSleepHours;
    _monday;
    _tuesday;
    _wednesday;
    _thursday;
    _friday;
    _saturday;
    _sunday;
    _daysToRecover;

    constructor(neededSleepHours, monday, tuesday, wednesday, thursday, friday, saturday, sunday, daysToRecover) {
        this._neededSleepHours = neededSleepHours;
        this._monday = monday;
        this._tuesday = tuesday;
        this._wednesday = wednesday;
        this._thursday = thursday;
        this._friday = friday;
        this._saturday = saturday;
        this._sunday = sunday;
        this._daysToRecover = daysToRecover;
    }

    get sleepDebt(){
        const totalSleepNeeded = (this.minutesFromHours(this._neededSleepHours)) * 7;
        console.log(`Horas a la semana: ${totalSleepNeeded / 60}`);

        const days = [this._monday, this._tuesday, this._wednesday, this._thursday, this._friday, this._saturday, this._sunday];
        let totalSleept = 0;
        for (const day of days) {
            totalSleept += this.minutesFromHours(day);
        }
        console.log(`Horas esta semana: ${totalSleept / 60}`);

        const debt = totalSleepNeeded - totalSleept;
        const debtFormatted = `${String(Math.floor(debt / 60)).padStart(2, '0')}:${String(debt % 60).padStart(2, '0')}`;
        const debtPerDay = debt / this._daysToRecover;
        const debtPerDayFormatted = `${String(Math.floor(debtPerDay / 60)).padStart(2, '0')}:${String(Math.floor(debtPerDay % 60)).padStart(2, '0')}`;

        return {
            debtFormatted,
            debtPerDayFormatted,
        }
    }

    minutesFromHours(time){
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    }
}

// Ejemplo 1: Semana con déficit de sueño moderado
console.log('\n=== Ejemplo 1: Déficit moderado ===');
const example1 = new SleepDebtCalculator('08:00', '06:30', '06:00', '07:00', '05:30', '07:00', '09:00', '08:00', 10);
console.log('Resultado:', example1.sleepDebt);

// Ejemplo 2: Semana con mucho déficit
console.log('\n=== Ejemplo 2: Mucho déficit (semana estresante) ===');
const example2 = new SleepDebtCalculator('08:00', '05:00', '05:30', '06:00', '05:00', '04:30', '07:00', '06:00', 7);
console.log('Resultado:', example2.sleepDebt);

// Ejemplo 3: Semana perfecta (sin deuda)
console.log('\n=== Ejemplo 3: Sin deuda (sueño perfecto) ===');
const example3 = new SleepDebtCalculator('08:00', '08:00', '08:00', '08:00', '08:00', '08:00', '08:00', '08:00', 1);
console.log('Resultado:', example3.sleepDebt);

// Ejemplo 4: Poco déficit, recuperación rápida
console.log('\n=== Ejemplo 4: Poco déficit ===');
const example4 = new SleepDebtCalculator('07:30', '07:00', '07:00', '07:30', '07:00', '07:15', '08:00', '08:00', 3);
console.log('Resultado:', example4.sleepDebt);

// Ejemplo 5: Necesita más horas, déficit grande
console.log('\n=== Ejemplo 5: Persona que necesita 9 horas ===');
const example5 = new SleepDebtCalculator('09:00', '06:00', '06:30', '07:00', '06:00', '07:00', '08:00', '09:00', 14);
console.log('Resultado:', example5.sleepDebt);
