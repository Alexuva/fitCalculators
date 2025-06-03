/**
 * Calculadora ratio estimulo-fatiga
 * Datos necesarios:
 * - Ejercicio:
  *  - Press de banca - 1.0
 *  - Aperturas con mancuernas - 1.2
 *  - Aperturas en máquina - 1.1
 *  - Dominadas - 1.0
 *  - Jalón al pecho - 1.2
 *  - Remo con barra - 1.2
 *  - Remo Gironda - 1.2
 *  - Remo en máquina T con pecho apoyado - 1.2
 *  - Pullover en polea - 1.3
 *  - Press militar - 1.0
 *  - Elevaciones laterales - 1.3
 *  - Pájaros en máquina - 1.0
 *  - Sentadilla libre - 1.0
 *  - Sentadilla jaca - 1.3
 *  - Sentadilla pendular - 1.4
 *  - Sentadilla búlgara - 1.2
 *  - Prensa inclinada - 1.2
 *  - Extensiones de cuádriceps - 1.2
 *  - Peso muerto convencional - 1.0
 *  - Peso muerto rumano - 1.2
 *  - Peso muerto SLDL - 1.2
 *  - Curl femoral sentado - 1.4
 *  - Curl femoral tumbado - 1.2
 *  - Hip thrust - 1.2
 *  - Curl de bíceps con barra - 1.0
 *  - Curl de bíceps predicador en máquina - 1.2
 *  - Curl de bíceps Bayesian - 1.3
 *  - Extensiones de tríceps desde polea alta - 1.0
 *  - Extensiones de tríceps por detrás de la cabeza - 1.3
 *  - Press francés con barra - 1.0
 *  - Crunch abdominal - 1.0
 *  - Press Pallof - 0.8
 * - Peso utilizado (kg) (permite 1 decimal)
 * - N.º reps realizadas con ese peso
 * - RPE (1-10)
 * - 1RM estimado en el ejercicio (permitir un decimal)
 */

class FatigueRatio {

  _exercise;
  _weight;
  _reps;
  _rpe;
  _rm;

  constructor(exercise, weight, reps, rpe, rm) {
    this._exercise = exercise;
    this._weight = weight;
    this._reps = reps;
    this._rpe = rpe;
    this._rm = rm;
  }

  calculate() {
    let rmFactor = this._weight / this._rm;
    let up = this._reps * this._exercise * 10 * rmFactor;
    let down = this._rpe * Math.sqrt(this._reps);
    let totalRatio = parseFloat((up / down).toFixed(2));

    if(totalRatio < 1.25) {
      return {
        totalRatio: totalRatio,
        message: 'Ratio bajo: alta fatiga en relación al estímulo. Modera un poco 🥵'
      }
    }else if(totalRatio >= 1.25 && totalRatio <= 2.75) {
      return {
        totalRatio: totalRatio,
        message: 'Ratio óptimo: buen equilibrio entre estímulo y fatiga ✅'
      }
    }else if(totalRatio > 2.75) {
      return {
        totalRatio: totalRatio,
        message: 'Ratio demasiado alto: podrías darle algo más de caña 😉'
      }
    }
  }

}

// Ejemplo 1: Press de banca
// - Factor de estímulo: 1.0
// - Peso: 80kg
// - Repeticiones: 8
// - RPE: 8
// - 1RM: 100kg
const test1 = new FatigueRatio(1.0, 80, 8, 8, 100);
console.log('Test 1 - Press de banca:');
console.log(test1.calculate());

// Ejemplo 2: Sentadilla pendular
// - Factor de estímulo: 1.4
// - Peso: 120kg
// - Repeticiones: 6
// - RPE: 9
// - 1RM: 150kg
const test2 = new FatigueRatio(1.4, 120, 6, 9, 150);
console.log('\nTest 2 - Sentadilla pendular:');
console.log(test2.calculate());

// Ejemplo 3: Curl femoral sentado
// - Factor de estímulo: 1.4
// - Peso: 50kg
// - Repeticiones: 12
// - RPE: 7
// - 1RM: 70kg
const test3 = new FatigueRatio(1.4, 50, 12, 7, 70);
console.log('\nTest 3 - Curl femoral sentado:');
console.log(test3.calculate());

// Ejemplo 4: Press Pallof
// - Factor de estímulo: 0.8
// - Peso: 25kg
// - Repeticiones: 15
// - RPE: 6
// - 1RM: 35kg
const test4 = new FatigueRatio(0.8, 25, 15, 6, 35);
console.log('\nTest 4 - Press Pallof:');
console.log(test4.calculate());
