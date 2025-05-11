/**
 * Calculadora flexibilidad
 * Datos necesarios: 
 * - Sexo:
 *  - Hombre - h
 *  - Mujer - m
 * - Edad (minimo 15)
 * - ¿Qué quiere evaluar?
 *  - Flexibilidad de hombro - a
 *  - Flexibilidad de espalda baja e isquiotibiales - b
 * - ¿Distancia entre manos? cm - Si respuesta a
 * - ¿Distancia alcanzada en el test? cm - Si respuesta b
 */	

class Flexibility {
  _sex;
  _age;
  _exerciseType;
  _distance;
  _distanceReached;
  _flexibility;

  constructor(sex, age, exerciseType, distance, distanceReached) {
    this._sex = sex;
    this._age = age;
    this._exerciseType = exerciseType;
    this._distance = distance;
    this._distanceReached = distanceReached;
  }

  shoulder(){
    const flexibilityRanges = {
      h: { // hombres
        '15-19': { veryLow: -4, low: [-4, -2], normal: [-1, 1], good: [2, 3], excellent: 3 },
        '20-29': { veryLow: -5, low: [-5, -3], normal: [-2, 0], good: [1, 2], excellent: 2 },
        '30-39': { veryLow: -6, low: [-6, -4], normal: [-3, -1], good: [0, 1], excellent: 1 },
        '40-49': { veryLow: -7, low: [-7, -5], normal: [-4, -2], good: [-1, 0], excellent: 0 },
        '50-59': { veryLow: -8, low: [-8, -6], normal: [-5, -3], good: [-2, -1], excellent: -1 },
        '60-70': { veryLow: -9, low: [-9, -7], normal: [-6, -4], good: [-3, -2], excellent: -2 },
        '>70': { veryLow: -10, low: [-10, -8], normal: [-7, -5], good: [-4, -3], excellent: -3 }
      },
      m: { // mujeres
        '15-19': { veryLow: -3, low: [-3, -1], normal: [0, 2], good: [3, 4], excellent: 4 },
        '20-29': { veryLow: -4, low: [-4, -2], normal: [-1, 1], good: [2, 3], excellent: 3 },
        '30-39': { veryLow: -5, low: [-5, -3], normal: [-2, 0], good: [1, 2], excellent: 2 },
        '40-49': { veryLow: -6, low: [-6, -4], normal: [-3, -1], good: [0, 1], excellent: 1 },
        '50-59': { veryLow: -7, low: [-7, -5], normal: [-4, -2], good: [-1, 0], excellent: 0 },
        '60-70': { veryLow: -8, low: [-8, -6], normal: [-5, -3], good: [-2, -1], excellent: -1 },
        '>70': { veryLow: -9, low: [-9, -7], normal: [-6, -4], good: [-3, -2], excellent: -2 }
      }
    };

    // Determinar el rango de edad
    let ageRange;
    if (this._age >= 15 && this._age <= 19) ageRange = '15-19';
    else if (this._age >= 20 && this._age <= 29) ageRange = '20-29';
    else if (this._age >= 30 && this._age <= 39) ageRange = '30-39';
    else if (this._age >= 40 && this._age <= 49) ageRange = '40-49';
    else if (this._age >= 50 && this._age <= 59) ageRange = '50-59';
    else if (this._age >= 60 && this._age <= 70) ageRange = '60-70';
    else if (this._age > 70) ageRange = '>70';

    const ranges = flexibilityRanges[this._sex][ageRange];
    const distance = this._distance;

    if (distance <= ranges.veryLow) return "Muy baja";
    if (distance >= ranges.low[0] && distance <= ranges.low[1]) return "Baja";
    if (distance >= ranges.normal[0] && distance <= ranges.normal[1]) return "Normal";
    if (distance >= ranges.good[0] && distance <= ranges.good[1]) return "Buena";
    if (distance > ranges.excellent) return "Excelente";
  }

  back(){
    const flexibilityRanges = {
      h: { // hombres
        '15-19': { veryLow: 27, low: [27, 31], normal: [32, 35], good: [36, 41], excellent: 41 },
        '20-29': { veryLow: 25, low: [25, 29], normal: [30, 33], good: [34, 39], excellent: 39 },
        '30-39': { veryLow: 23, low: [23, 27], normal: [28, 32], good: [33, 37], excellent: 37 },
        '40-49': { veryLow: 18, low: [18, 23], normal: [24, 28], good: [29, 34], excellent: 34 },
        '50-59': { veryLow: 16, low: [16, 23], normal: [24, 27], good: [28, 34], excellent: 34 },
        '60-70': { veryLow: 15, low: [15, 19], normal: [20, 24], good: [25, 32], excellent: 32 },
        '>70': { veryLow: 13, low: [13, 17], normal: [18, 22], good: [23, 30], excellent: 30 }
      },
      m: { // mujeres
        '15-19': { veryLow: 29, low: [29, 33], normal: [34, 37], good: [38, 42], excellent: 42 },
        '20-29': { veryLow: 28, low: [28, 32], normal: [33, 36], good: [37, 40], excellent: 40 },
        '30-39': { veryLow: 27, low: [27, 31], normal: [32, 34], good: [35, 40], excellent: 40 },
        '40-49': { veryLow: 25, low: [25, 29], normal: [30, 33], good: [34, 38], excellent: 38 },
        '50-59': { veryLow: 25, low: [25, 29], normal: [30, 32], good: [33, 38], excellent: 37 },
        '60-70': { veryLow: 23, low: [23, 26], normal: [27, 30], good: [31, 34], excellent: 34 },
        '>70': { veryLow: 20, low: [21, 24], normal: [25, 28], good: [29, 32], excellent: 32 }
      }
    };

    // Determinar el rango de edad
    let ageRange;
    if (this._age >= 15 && this._age <= 19) ageRange = '15-19';
    else if (this._age >= 20 && this._age <= 29) ageRange = '20-29';
    else if (this._age >= 30 && this._age <= 39) ageRange = '30-39';
    else if (this._age >= 40 && this._age <= 49) ageRange = '40-49';
    else if (this._age >= 50 && this._age <= 59) ageRange = '50-59';
    else if (this._age >= 60 && this._age <= 70) ageRange = '60-70';
    else if (this._age > 70) ageRange = '>70';

    const ranges = flexibilityRanges[this._sex][ageRange];
    const distance = this._distanceReached;

    if (distance < ranges.veryLow) return "Muy baja";
    if (distance >= ranges.low[0] && distance <= ranges.low[1]) return "Baja";
    if (distance >= ranges.normal[0] && distance <= ranges.normal[1]) return "Normal";
    if (distance >= ranges.good[0] && distance <= ranges.good[1]) return "Buena";
    if (distance > ranges.excellent) return "Excelente";
  }

}

// 1. Prueba de flexibilidad de hombro para un hombre joven
const test1 = new Flexibility('h', 25, 'a', -3, null);
console.log('Test 1 - Hombre 25 años, flexibilidad de hombro (-3cm):');
console.log('Resultado:', test1.shoulder()); // Debería mostrar "Baja"

// 2. Prueba de flexibilidad de hombro para una mujer mayor
const test2 = new Flexibility('m', 65, 'a', -7, null);
console.log('\nTest 2 - Mujer 65 años, flexibilidad de hombro (-7cm):');
console.log('Resultado:', test2.shoulder()); // Debería mostrar "Normal"

// 3. Prueba de flexibilidad de espalda para un hombre adulto
const test3 = new Flexibility('h', 35, 'b', null, 30);
console.log('\nTest 3 - Hombre 35 años, flexibilidad de espalda (30cm):');
console.log('Resultado:', test3.back()); // Debería mostrar "Normal"

// 4. Prueba de flexibilidad de espalda para una mujer joven
const test4 = new Flexibility('m', 18, 'b', null, 39);
console.log('\nTest 4 - Mujer 18 años, flexibilidad de espalda (39cm):');
console.log('Resultado:', test4.back()); // Debería mostrar "Buena"

// 5. Prueba de flexibilidad de hombro para un hombre mayor
const test5 = new Flexibility('h', 72, 'a', -9, null);
console.log('\nTest 5 - Hombre 72 años, flexibilidad de hombro (-9cm):');
console.log('Resultado:', test5.shoulder()); // Debería mostrar "Baja"

// 6. Prueba de flexibilidad de espalda para una mujer adulta
const test6 = new Flexibility('m', 45, 'b', null, 35);
console.log('\nTest 6 - Mujer 45 años, flexibilidad de espalda (35cm):');
console.log('Resultado:', test6.back()); // Debería mostrar "Buena"