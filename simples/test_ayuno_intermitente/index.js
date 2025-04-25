/**
 * Calculadora básica ayuno intermitente
 * Datos necesarios: 
 * - Hora de tu última comida  (formato HH:MM 24horas)
 * - Tipo de ayuno
 * 		a - Ayuno 12/12 
 * 		b - Ayuno 14/10
 * 		c - Ayuno 16/8 (Leangains)
 * 		d - Ayuno 18/6
 * 		e - Ayuno 20/4 (Guerrero)
 * 		f - OMAD (One Meal a Day)
 * 		g - Días alternos (un día comes, al siguiente haces ayuno completo)
 * 		h - 5:2 (Cínco días de comer normalmente, dos días de restricción completa)s
 */	

class FastingCalculator {
  _lastMealHour;
  _fastingType;
  _nextMealTime;

  constructor(
    lastMealHour,
    fastingType,
  ){
    const [hours, minutes] = lastMealHour.split(':');
    const date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    date.setSeconds(0);
    date.setMilliseconds(0);
    this._lastMealHour = date;
    this._fastingType = fastingType;
  }

  get nextMealTime() {
    const nextMeal = new Date(this._lastMealHour);
    let nextMealText;
    let hoursToAdd = 0;

    switch(this._fastingType) {
      case 'a': hoursToAdd = 12; break;
      case 'b': hoursToAdd = 14; break;
      case 'c': hoursToAdd = 16; break;
      case 'd': hoursToAdd = 18; break;
      case 'e': hoursToAdd = 20; break;
      case 'f': hoursToAdd = 24; break;
      case 'g': hoursToAdd = 24; break;
      case 'h': hoursToAdd = 48; break;
    }

    // Añadimos las horas y manejamos el cambio de día
    let totalMinutes = nextMeal.getHours() * 60 + nextMeal.getMinutes();
    totalMinutes += hoursToAdd * 60;
    
    let days = Math.floor(totalMinutes / (24 * 60));
    let remainingMinutes = totalMinutes % (24 * 60);
    
    nextMeal.setHours(Math.floor(remainingMinutes / 60));
    nextMeal.setMinutes(remainingMinutes % 60);
    nextMeal.setDate(nextMeal.getDate() + days);

    if(this._fastingType !== 'g' && this._fastingType!== 'h'){
      if(days === 0){
        nextMealText = `Hora de tu próxima comida: <strong>${nextMeal.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit', hour12: false})}</strong>`;
      }else if(days === 1){
        nextMealText = `Hora de tu próxima comida: <strong>${nextMeal.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit', hour12: false})} del día siguiente</strong>`;
      }else if(days === 2){
        nextMealText = `Hora de tu próxima comida: <strong>${nextMeal.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit', hour12: false})} de dentro de dos días</strong>`;
      }
    }else{
      if(this._fastingType === 'g'){
        nextMealText = `Puedes comer a partir de las <strong>${nextMeal.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit', hour12: false})} del día siguiente</strong>`;
      }else if(this._fastingType === 'h'){
        nextMealText = `Puedes comer a partir de las <strong>${nextMeal.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit', hour12: false})} de dentro de dos días</strong>`;
      }
    }
    
    return nextMealText;
  }
}

// Test with last meal at 20:00
console.log("Testing all fasting types with last meal at 20:00");
console.log("------------------------------------------------");

// 12/12 Fasting
const test12_12 = new FastingCalculator("20:00", "a");
console.log("12/12 Fasting:", test12_12.nextMealTime);

// 14/10 Fasting
const test14_10 = new FastingCalculator("20:00", "b");
console.log("14/10 Fasting:", test14_10.nextMealTime);

// 16/8 Leangains
const test16_8 = new FastingCalculator("20:00", "c");
console.log("16/8 Fasting:", test16_8.nextMealTime);

// 18/6 Fasting
const test18_6 = new FastingCalculator("20:00", "d");
console.log("18/6 Fasting:", test18_6.nextMealTime);

// 20/4 Warrior
const test20_4 = new FastingCalculator("20:00", "e");
console.log("20/4 Fasting:", test20_4.nextMealTime);

// OMAD
const testOMAD = new FastingCalculator("20:00", "f");
console.log("OMAD Fasting:", testOMAD.nextMealTime);

// Alternate Day Fasting
const testAlternate = new FastingCalculator("20:00", "g");
console.log("Alternate Day Fasting:", testAlternate.nextMealTime);

// 5:2 Fasting
const test5_2 = new FastingCalculator("20:00", "h");
console.log("5:2 Fasting:", test5_2.nextMealTime);

// Test with a different time (23:00) to check day transitions
console.log("\nTesting with last meal at 23:00");
console.log("--------------------------------");
const testLateNight = new FastingCalculator("23:00", "c");
console.log("16/8 Fasting (late night):", testLateNight.nextMealTime);