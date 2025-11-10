/**
 * Calculadora ciclos de sueño
 * Datos necesarios:
 * - Tipo calculadora
 * - Hora a la que vas a dormir
 * - A que hora te despiertas
 * - Hora a la que te quieres despertar
 * - Ciclos de sueño que quieres completar
 * - Cuantas veces te despiertas por la noche
 * - Tiempo total que estas despierto
 */

class SleepCycleCalculator {

    _type;
    _sleepHour;
    _wakeHour;
    _desireAwakeHour;
    _sleepCicles;
    _interruptedTimes;
    _interruptedTime;

    constructor(type, sleepHour = null, wakeHour = null, desireAwakeHour = null, sleepCicles = null, interruptedTimes = null, interruptedTime = null) {
        this._type = type;
        this._sleepHour = sleepHour;
        this._wakeHour = wakeHour;
        this._desireAwakeHour = desireAwakeHour;
        this._sleepCicles = sleepCicles;
        this._interruptedTimes = interruptedTimes;
        this._interruptedTime = interruptedTime;
    }

    calculateSleepCycle() {
        const [h,m] = this._sleepHour.split(':').map(Number);
        const [h2,m2] = this._wakeHour.split(':').map(Number);
        let minutesSleeped = ((h2 * 60 + m2) - (h * 60 + m));

        if (minutesSleeped < 0) {
            minutesSleeped += 24 * 60;
        }

        if (this._interruptedTimes) {
            const [hAwake, mAwake] = this._interruptedTime.split(':').map(Number);
            const totalInterruptedTime = (15 * (1 + this._interruptedTimes)) + ((hAwake * 60 + mAwake));
            minutesSleeped -= totalInterruptedTime;
        } else {
            minutesSleeped -= 15;
        }

        const totalCicles = (minutesSleeped / 90).toFixed(1);
        const isRecommended = parseFloat(totalCicles) >= 4 ? true : false;

        return {
            totalCicles,
            isRecommended,
            hoursSleeped: `${String(Math.floor(minutesSleeped / 60)).padStart(2, '0')}:${String(minutesSleeped % 60).padStart(2, '0')}`,
        }
    }

    calculateTimeToSleep() {
        let totalSleepTimeNeeded = 90 * this._sleepCicles;
        const totalCicleHours = totalSleepTimeNeeded / 60;

        if (this._interruptedTimes) {
            const [hAwake, mAwake] = this._interruptedTime.split(':').map(Number);
            const totalInterruptedTime = (15 * (1 + this._interruptedTimes)) + ((hAwake * 60 + mAwake));
            totalSleepTimeNeeded += totalInterruptedTime;
        } else {
            totalSleepTimeNeeded += 15;
        }

        const [h, m] = this._desireAwakeHour.split(':').map(Number);
        const desireAwakeMinutes = (h * 60 + m);

        let bedTimeMinutes = desireAwakeMinutes - totalSleepTimeNeeded;

        if (bedTimeMinutes < 0) {
            bedTimeMinutes += 24 * 60;
        }

        const bedTimeHours = Math.floor(bedTimeMinutes / 60);
        const bedTimeMin = bedTimeMinutes % 60;
        const isRecommended = totalCicleHours >= 7;

        return {
            bedTime: `${String(bedTimeHours).padStart(2, '0')}:${String(bedTimeMin).padStart(2, '0')}`,
            isRecommended
        }

    }
}

const CALCULATOR = new SleepCycleCalculator('A', '23:30', '06:45', null, null, 1, "00:10");
const result = CALCULATOR.calculateSleepCycle();
console.log(result);

const CALCULATOR2 = new SleepCycleCalculator('B', null, null, '06:30', 3, 2, "00:10");
const result2 = CALCULATOR2.calculateTimeToSleep();
console.log(result2);
