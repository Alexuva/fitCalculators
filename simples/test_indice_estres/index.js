/**
 * Calculadora indice de estrés
 * Datos necesarios: 
 * - Ejercicio:
 *  - Multiarticular
 *    - Poleas o máquina - mam
 *    - Peso libre - map
 *  - Monoarticular
 *    - Poleas o máquina - mom
 *    - Peso libre - mop
 * - RIR de la serie que quieras evaluar(0-5)(sin decimales)
 */	

class StressIndex {
  _exerciseType;
  _rir;

  _stressIndex;
  constructor(exerciseType, rir) {
    this._exerciseType = exerciseType;
    this._rir = rir;
    this._stressIndex = this.calculateStressIndex().toLocaleString('es-ES', {maximumFractionDigits: 2});
  }

  calculateStressIndex() {
    
    if(this._exerciseType === 'mam'){
      if(this._rir === 5) return 0.3;
      if(this._rir === 4) return 0.5;
      if(this._rir === 3) return 0.7;
      if(this._rir === 2) return 0.9;
      if(this._rir === 1) return 1.1;
      if(this._rir === 0) return 1.3;
    }else if(this._exerciseType ==='map'){
      if(this._rir === 5) return 0.4;
      if(this._rir === 4) return 0.6;
      if(this._rir === 3) return 0.8;
      if(this._rir === 2) return 1;
      if(this._rir === 1) return 1.2;
      if(this._rir === 0) return 1.4;
    }else if(this._exerciseType ==='mom'){
      if(this._rir === 5) return 0.2;
      if(this._rir === 4) return 0.4;
      if(this._rir === 3) return 0.6;
      if(this._rir === 2) return 0.8; 
      if(this._rir === 1) return 1;
      if(this._rir === 0) return 1.2;
    }else if(this._exerciseType ==='mop'){
      if(this._rir === 5) return 0.3;
      if(this._rir === 4) return 0.5;
      if(this._rir === 3) return 0.7;
      if(this._rir === 2) return 0.9;
      if(this._rir === 1) return 1.1;
      if(this._rir === 0) return 1.3;
    }

  }

}


// Creamos algunas instancias para probar diferentes casos

// Ejemplo 1: Ejercicio multiarticular con máquina (press de pecho en máquina) con RIR 3
const ejercicio1 = new StressIndex('mam', 3);
console.log('Press de pecho en máquina (RIR 3):', ejercicio1._stressIndex); // Debería mostrar 0,7

// Ejemplo 2: Ejercicio multiarticular con peso libre (sentadilla con barra) con RIR 1
const ejercicio2 = new StressIndex('map', 1);
console.log('Sentadilla con barra (RIR 1):', ejercicio2._stressIndex); // Debería mostrar 1,2

// Ejemplo 3: Ejercicio monoarticular con máquina (extensión de cuádriceps) con RIR 4
const ejercicio3 = new StressIndex('mom', 4);
console.log('Extensión de cuádriceps (RIR 4):', ejercicio3._stressIndex); // Debería mostrar 0,4

// Ejemplo 4: Ejercicio monoarticular con peso libre (curl de bíceps con mancuernas) con RIR 0
const ejercicio4 = new StressIndex('mop', 0);
console.log('Curl de bíceps con mancuernas (RIR 0):', ejercicio4._stressIndex); // Debería mostrar 1,3

//Ejemplo 5 
const ejercicio = new StressIndex('map', 2);
console.log('Peso muerto con barra (RIR 2):', ejercicio._stressIndex);