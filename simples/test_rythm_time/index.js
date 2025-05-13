/**
 * Calculadora Ritmo y tiempos de maratón
 * Datos necesarios: 
 * - ¿Qué quieres calcular?
 *  - Tiempo total en completar la maratón a un determinado ritmo - a
 *  - Ritmo de carrera para completar la maratón en un determinado tiempo - b
 * - Si a:
 *  - ¿A qué velocidad o ritmo quieres correr?
 *   - velocidad 
 *   - medida 
 *    - km/h - a
 *    - min/km - b
 * - Si b:
 *  - ¿Cuánto tiempo tienes para completar la maratón?
 *   - tiempo - horas:minutos
*/	

//PASAR A NOTACION DECIMAL EL RITMO
const minutosInput = 5;
const segundosInput = 30;
const ritmoDecimal = minutosInput + (segundosInput / 60); // 5 + (30/60) = 5.5

class RythmTime {

  _type;
  _speed;
  _measure;
  _time;

  constructor(type, speed, measure, time) {
    this._type = type;
    this._speed = speed;
    this._measure = measure;
    this._time = time;
  }

  calculate(){
    if(this._type === 'a'){
      if(this._measure === 'a'){

        //Tiempo total maratón
        const totalMarathon = 42.195 / this._speed;
        const hours = Math.floor(totalMarathon);
        const decimalHours = totalMarathon - hours;
        const minutes = Math.floor(decimalHours * 60);
        const decimalMinutes = (decimalHours * 60) - minutes;
        const seconds = Math.round(decimalMinutes * 60);
        // Formatear el resultado
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        const marathonResult = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

        //Tiempo de paso 5KM
        const step5km = 5 / this._speed;
        const hours5km = Math.floor(step5km);
        const decimalHours5km = step5km - hours5km;
        const minutes5km = Math.floor(decimalHours5km * 60);
        const decimalMinutes5km = (decimalHours5km * 60) - minutes5km;
        const seconds5km = Math.round(decimalMinutes5km * 60);
        // Formatear el resultado
        const formattedHours5km = hours5km.toString().padStart(2, '0');
        const formattedMinutes5km = minutes5km.toString().padStart(2, '0');
        const formattedSeconds5km = seconds5km.toString().padStart(2, '0');
        const step5kmResult = `${formattedHours5km}:${formattedMinutes5km}:${formattedSeconds5km}`;

        //Tiempo de paso 10KM
        const step10km = 10 / this._speed;
        const hours10km = Math.floor(step10km);
        const decimalHours10km = step10km - hours10km;
        const minutes10km = Math.floor(decimalHours10km * 60);  
        const decimalMinutes10km = (decimalHours10km * 60) - minutes10km; 
        const seconds10km = Math.round(decimalMinutes10km * 60);
        // Formatear el resultado
        const formattedHours10km = hours10km.toString().padStart(2, '0');
        const formattedMinutes10km = minutes10km.toString().padStart(2, '0');
        const formattedSeconds10km = seconds10km.toString().padStart(2, '0');
        const step10kmResult = `${formattedHours10km}:${formattedMinutes10km}:${formattedSeconds10km}`;

        //Tiempo de paso media maratón
        const halfMarathon = 21.098 / this._speed;
        const hoursHalfMarathon = Math.floor(halfMarathon);
        const decimalHoursHalfMarathon = halfMarathon - hoursHalfMarathon;
        const minutesHalfMarathon = Math.floor(decimalHoursHalfMarathon * 60);
        const decimalMinutesHalfMarathon = (decimalHoursHalfMarathon * 60) - minutesHalfMarathon;
        const secondsHalfMarathon = Math.round(decimalMinutesHalfMarathon * 60);
        // Formatear el resultado
        const formattedHoursHalfMarathon = hoursHalfMarathon.toString().padStart(2, '0');
        const formattedMinutesHalfMarathon = minutesHalfMarathon.toString().padStart(2, '0');
        const formattedSecondsHalfMarathon = secondsHalfMarathon.toString().padStart(2, '0');
        const halfMarathonResult = `${formattedHoursHalfMarathon}:${formattedMinutesHalfMarathon}:${formattedSecondsHalfMarathon}`;

        //Tiempo de paso 30KM
        const step30km = 30 / this._speed;
        const hours30km = Math.floor(step30km);
        const decimalHours30km = step30km - hours30km;
        const minutes30km = Math.floor(decimalHours30km * 60);
        const decimalMinutes30km = (decimalHours30km * 60) - minutes30km;
        const seconds30km = Math.round(decimalMinutes30km * 60);
        // Formatear el resultado
        const formattedHours30km = hours30km.toString().padStart(2, '0');
        const formattedMinutes30km = minutes30km.toString().padStart(2, '0');
        const formattedSeconds30km = seconds30km.toString().padStart(2, '0');
        const step30kmResult = `${formattedHours30km}:${formattedMinutes30km}:${formattedSeconds30km}`;

        //Ritmo equivalente
        const rythm = 60 / this._speed;
        const rythMinutes = Math.floor(rythm);
        const rythmDecimalMinutes = rythm - rythMinutes;
        const rythmSeconds = Math.round(rythmDecimalMinutes * 60);
        
        // Formatear el resultado
        const rythmFormattedMinutes = rythMinutes.toString().padStart(2, '0');
        const rythmFormattedSeconds = rythmSeconds.toString().padStart(2, '0');
        const rythmResult = `${rythmFormattedMinutes}:${rythmFormattedSeconds} min/km`;

        return {
          marathon: marathonResult,
          step5km: step5kmResult,
          step10km: step10kmResult,
          halfMarathon: halfMarathonResult,
          step30km: step30kmResult,
          rythm: rythmResult
        }

      }else{

        //Tiempo total maratón
        const totalMarathon = this._speed * 42.195 / 60;
        const hours = Math.floor(totalMarathon);
        const decimalHours = totalMarathon - hours;
        const minutes = Math.floor(decimalHours * 60);
        const decimalMinutes = (decimalHours * 60) - minutes;
        const seconds = Math.round(decimalMinutes * 60);
        // Formatear el resultado
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        const marathonResult = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

        //Tiempo de paso 5KM
        const step5km = this._speed * 5;
        const minutes5km = Math.floor(step5km);
        const decimalMinutes5km = step5km - minutes5km;
        const seconds5km = Math.round(decimalMinutes5km * 60);
        // Formatear el resultado
        const formattedMinutes5km = minutes5km.toString().padStart(2, '0');
        const formattedSeconds5km = seconds5km.toString().padStart(2, '0');
        const step5kmResult = `${formattedMinutes5km}:${formattedSeconds5km}`;

        //Tiempo de paso 10KM
        const step10km = this._speed * 10;
        const minutes10km = Math.floor(step10km);
        const decimalMinutes10km = step10km - minutes10km;
        const seconds10km = Math.round(decimalMinutes10km * 60);
        // Formatear el resultado
        const formattedMinutes10km = minutes10km.toString().padStart(2, '0');
        const formattedSeconds10km = seconds10km.toString().padStart(2, '0');
        const step10kmResult = `${formattedMinutes10km}:${formattedSeconds10km}`;

        //Tiempo total media maratón
        const halfMarathon = this._speed * 21.098 / 60;
        const halfMarathonhours = Math.floor(halfMarathon);
        const halfMarathondecimalHours = halfMarathon - halfMarathonhours;
        const halfMarathonminutes = Math.floor(halfMarathondecimalHours * 60);
        const halfMarathondecimalMinutes = (halfMarathondecimalHours * 60) - halfMarathonminutes;
        const halfMarathonseconds = Math.round(halfMarathondecimalMinutes * 60);
        // Formatear el resultado
        const halfMarathonformattedHours = halfMarathonhours.toString().padStart(2, '0');
        const halfMarathonformattedMinutes = halfMarathonminutes.toString().padStart(2, '0');
        const halfMarathonformattedSeconds = halfMarathonseconds.toString().padStart(2, '0');
        const halfMarathonResult = `${halfMarathonformattedHours}:${halfMarathonformattedMinutes}:${halfMarathonformattedSeconds}`;

         //Tiempo de paso 30KM
         const step30km = this._speed * 30 / 60;
         const hours30km = Math.floor(step30km);
         const decimalHours30km = step30km - hours30km;
         const minutes30km = Math.floor(decimalHours30km * 60);
         const decimalMinutes30km = (decimalHours30km * 60) - minutes30km;
         const seconds30km = Math.round(decimalMinutes30km * 60);
         // Formatear el resultado
         const formattedHours30km = hours30km.toString().padStart(2, '0');
         const formattedMinutes30km = minutes30km.toString().padStart(2, '0');
         const formattedSeconds30km = seconds30km.toString().padStart(2, '0');
         const step30kmResult = `${formattedHours30km}:${formattedMinutes30km}:${formattedSeconds30km}`;

         //Velocidad equivalente
        const speedEquivalent = 60 / this._speed;
        
        // Formatear el resultado con un decimal
        const speedResult = `${speedEquivalent.toFixed(1)} km/h`;

        return {
          marathon: marathonResult,
          step5km: step5kmResult,
          step10km: step10kmResult,
          halfMarathon: halfMarathonResult,
          step30km: step30kmResult,
          speed: speedResult
        }

      }
    }else{

      const totalMarathonTime = this._time;
      //Tiempo total maratón en minutos
      const [hours, minutes] = this._time.split(':').map(Number);
      const totalMinutes = (hours * 60) + minutes;
      const rythmPerKm = totalMinutes / 42.195;
      const rythmMinutes = Math.floor(rythmPerKm);
      const rythmDecimalMinutes = rythmPerKm - rythmMinutes;
      const rythmSeconds = Math.round(rythmDecimalMinutes * 60);
      
      // Formatear el resultado
      const formattedMinutes = rythmMinutes.toString().padStart(2, '0');
      const formattedSeconds = rythmSeconds.toString().padStart(2, '0');
      const rythmResult = `${formattedMinutes}:${formattedSeconds} min/km`;

      //Velocidad equivalente
      const speedKmH = (42.195 / totalMinutes) * 60;
      const speedResult = `${speedKmH.toFixed(1)} km/h`;

      //Tiempo de paso 5KM
      const step5km = (5 / speedKmH) * 60;
      const minutes5km = Math.floor(step5km);
      const decimalMinutes5km = step5km - minutes5km;
      const seconds5km = Math.round(decimalMinutes5km * 60);
      // Formatear el resultado
      const formattedMinutes5km = minutes5km.toString().padStart(2, '0');
      const formattedSeconds5km = seconds5km.toString().padStart(2, '0');
      const step5kmResult = `${formattedMinutes5km}:${formattedSeconds5km}`;

      //Tiempo de paso 10KM
      const step10km = (10 / speedKmH) * 60;
      const minutes10km = Math.floor(step10km);
      const decimalMinutes10km = step10km - minutes10km;
      const seconds10km = Math.round(decimalMinutes10km * 60);
      // Formatear el resultado
      const formattedMinutes10km = minutes10km.toString().padStart(2, '0');
      const formattedSeconds10km = seconds10km.toString().padStart(2, '0');
      const step10kmResult = `${formattedMinutes10km}:${formattedSeconds10km}`;

      //Tiempo de paso media maratón
      const halfMarathon = 21.098 / speedKmH;
      const hoursHalfMarathon = Math.floor(halfMarathon);
      const decimalHoursHalfMarathon = halfMarathon - hoursHalfMarathon;
      const minutesHalfMarathon = Math.floor(decimalHoursHalfMarathon * 60);
      const decimalMinutesHalfMarathon = (decimalHoursHalfMarathon * 60) - minutesHalfMarathon;
      const secondsHalfMarathon = Math.round(decimalMinutesHalfMarathon * 60);
      // Formatear el resultado
      const formattedHoursHalfMarathon = hoursHalfMarathon.toString().padStart(2, '0');
      const formattedMinutesHalfMarathon = minutesHalfMarathon.toString().padStart(2, '0');
      const formattedSecondsHalfMarathon = secondsHalfMarathon.toString().padStart(2, '0');
      const halfMarathonResult = `${formattedHoursHalfMarathon}:${formattedMinutesHalfMarathon}:${formattedSecondsHalfMarathon}`;

      //Tiempo de paso 30KM
      const step30km = 30 / speedKmH;
      const hours30km = Math.floor(step30km);
      const decimalHours30km = step30km - hours30km;
      const minutes30km = Math.floor(decimalHours30km * 60);
      const decimalMinutes30km = (decimalHours30km * 60) - minutes30km;
      const seconds30km = Math.round(decimalMinutes30km * 60);
      // Formatear el resultado
      const formattedHours30km = hours30km.toString().padStart(2, '0');
      const formattedMinutes30km = minutes30km.toString().padStart(2, '0');
      const formattedSeconds30km = seconds30km.toString().padStart(2, '0');
      const step30kmResult = `${formattedHours30km}:${formattedMinutes30km}:${formattedSeconds30km}`;

      return {
        totalMarathonTime: totalMarathonTime,
        rythm: rythmResult,
        speed: speedResult,
        step5km: step5kmResult,
        step10km: step10kmResult,
        halfMarathon: halfMarathonResult,
        step30km: step30kmResult
      }
    }
  }
}

// Ejemplo 1: Corredor rápido a 12 km/h
const calculadora1 = new RythmTime('a', 12, 'a', null);
const resultado1 = calculadora1.calculate();
console.log('Corredor a 12 km/h:');
console.log('Tiempo maratón:', resultado1.marathon);        // ~3:31:00
console.log('Ritmo:', resultado1.rythm);                    // ~5:00 min/km
console.log('Paso 5km:', resultado1.step5km);              // ~0:25:00
console.log('Paso 10km:', resultado1.step10km);            // ~0:50:00
console.log('Media maratón:', resultado1.halfMarathon);    // ~1:45:30
console.log('Paso 30km:', resultado1.step30km);            // ~2:30:00

// Ejemplo 2: Corredor recreativo a 8 km/h
const calculadora2 = new RythmTime('a', 8, 'a', null);
const resultado2 = calculadora2.calculate();
console.log('\nCorredor a 8 km/h:');
console.log('Tiempo maratón:', resultado2.marathon);        // ~5:16:30
console.log('Ritmo:', resultado2.rythm);                    // ~7:30 min/km
console.log('Paso 5km:', resultado2.step5km);              // ~0:37:30
console.log('Paso 10km:', resultado2.step10km);            // ~1:15:00
console.log('Media maratón:', resultado2.halfMarathon);    // ~2:38:15
console.log('Paso 30km:', resultado2.step30km);            // ~3:45:00

// Ejemplo 3: Corredor a ritmo 5:30 min/km
const calculadora3 = new RythmTime('a', 5.5, 'b');
const resultado3 = calculadora3.calculate();
console.log('\nCorredor a 5:30 min/km:');
console.log('Tiempo maratón:', resultado3.marathon);        // ~03:51:30
console.log('Velocidad:', resultado3.speed);                // ~10.9 km/h
console.log('Paso 5km:', resultado3.step5km);              // ~27:30
console.log('Paso 10km:', resultado3.step10km);            // ~55:00
console.log('Media maratón:', resultado3.halfMarathon);    // ~1:55:45
console.log('Paso 30km:', resultado3.step30km);            // ~2:45:00

// Ejemplo 4: Objetivo completar maratón en 4 horas
const calculadora4 = new RythmTime('b', null, null, '04:00');
const resultado4 = calculadora4.calculate();
console.log('\nObjetivo 4 horas:');
console.log('Ritmo necesario:', resultado4.rythm);         // ~5:41 min/km
console.log('Velocidad equivalente:', resultado4.speed);    // ~10.5 km/h
console.log('Paso 5km:', resultado4.step5km);              // ~28:25
console.log('Paso 10km:', resultado4.step10km);            // ~56:50
console.log('Media maratón:', resultado4.halfMarathon);    // ~2:00:00
console.log('Paso 30km:', resultado4.step30km);            // ~2:51:25