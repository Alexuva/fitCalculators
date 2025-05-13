/**
 * Calculadora flexibilidad
 * Datos necesarios: 
 * - Sexo:
 *  - Hombre - h
 *  - Mujer - m
 * - Edad (minimo 15)
 * - Elige test realizado:
 *  - Test de Illinois - a
 *  - Test T-Tes - b
 * - Tiempo realizado (segundos y centésimas)
 */	

class Agility {
  _sex;
  _age;
  _exerciseType;
  _time;

  _illinois;
  _tTest;

  constructor(sex, age, exerciseType, time) {
    this._sex = sex;
    this._age = age;
    this._exerciseType = exerciseType;
    this._time = time;
    this._illinois = this.illinois();
    this._tTest = this.tTest();
  }

  illinois() {
    const illinoisRanges = {
      h: { // hombres
        '15-19': {
          veryLow: 19.30,
          low: [18.11, 19.30],
          normal: [16.11, 18.10],
          good: [15.20, 16.10],
          excellent: 15.20
        },
        '20-59': {
          veryLow: 19.50,
          low: [18.31, 19.50],
          normal: [16.31, 18.30],
          good: [15.40, 16.30],
          excellent: 15.40
        },
        '>60': {
          veryLow: 32.20,
          low: [31.01, 32.20],
          normal: [29.01, 31.00],
          good: [28.00, 29.00],
          excellent: 28.00
        }
      },
      m: { // mujeres
        '15-19': {
          veryLow: 22.50,
          low: [21.31, 22.50],
          normal: [17.51, 21.30],
          good: [16.50, 17.50],
          excellent: 16.50
        },
        '20-59': {
          veryLow: 23.00,
          low: [21.81, 23.00],
          normal: [18.01, 21.80],
          good: [17.00, 18.00],
          excellent: 17.00
        },
        '>60': {
          veryLow: 36.20,
          low: [35.01, 36.20],
          normal: [33.01, 35.00],
          good: [32.00, 33.00],
          excellent: 32.00
        }
      }
    };

    // Determinar el rango de edad
    let ageRange;
    if (this._age >= 15 && this._age <= 19) ageRange = '15-19';
    else if (this._age >= 20 && this._age <= 59) ageRange = '20-59';
    else if (this._age >= 60) ageRange = '>60';

    const ranges = illinoisRanges[this._sex][ageRange];
    const time = this._time;

    if (time > ranges.veryLow) return "Bajo";
    if (time >= ranges.low[0] && time <= ranges.low[1]) return "Regular";
    if (time >= ranges.normal[0] && time <= ranges.normal[1]) return "Normal";
    if (time >= ranges.good[0] && time <= ranges.good[1]) return "Buena";
    if (time < ranges.excellent) return "Excelente";
  }

  tTest() {
    const tTestRanges = {
      h: { // hombres
        '15-19': {
          veryLow: 12.20,
          low: [11.21, 12.20],
          normal: [10.11, 11.20],
          good: [9.20, 10.10],
          excellent: 9.20
        },
        '20-59': {
          veryLow: 12.40,
          low: [11.41, 12.40],
          normal: [10.31, 11.40],
          good: [9.40, 10.30],
          excellent: 9.40
        },
        '>60': {
          veryLow: 24.30,
          low: [23.31, 24.30],
          normal: [22.21, 23.30],
          good: [21.30, 22.20],
          excellent: 21.30
        }
      },
      m: { // mujeres
        '15-19': {
          veryLow: 13.20,
          low: [12.21, 13.20],
          normal: [11.11, 12.20],
          good: [10.20, 11.10],
          excellent: 10.20
        },
        '20-59': {
          veryLow: 13.40,
          low: [12.41, 13.40],
          normal: [11.31, 12.40],
          good: [10.40, 11.30],
          excellent: 10.40
        },
        '>60': {
          veryLow: 25.30,
          low: [24.31, 25.30],
          normal: [23.21, 24.30],
          good: [22.30, 23.20],
          excellent: 22.30
        }
      }
    };

    // Determinar el rango de edad
    let ageRange;
    if (this._age >= 15 && this._age <= 19) ageRange = '15-19';
    else if (this._age >= 20 && this._age <= 59) ageRange = '20-59';
    else if (this._age >= 60) ageRange = '>60';

    const ranges = tTestRanges[this._sex][ageRange];
    const time = this._time;

    if (time > ranges.veryLow) return "Bajo";
    if (time >= ranges.low[0] && time <= ranges.low[1]) return "Regular";
    if (time >= ranges.normal[0] && time <= ranges.normal[1]) return "Normal";
    if (time >= ranges.good[0] && time <= ranges.good[1]) return "Buena";
    if (time < ranges.excellent) return "Excelente";
  }

}

// Ejemplo 1: Hombre joven realizando el Test de Illinois
const test1 = new Agility('h', 18, 'a', 16.5);
console.log('Test 1 - Hombre de 18 años, Test de Illinois (16.5s):');
console.log('Resultado:', test1._illinois); // Debería mostrar "Normal"

// Ejemplo 2: Mujer adulta realizando el T-Test
const test2 = new Agility('m', 35, 'b', 11.0);
console.log('\nTest 2 - Mujer de 35 años, T-Test (11.0s):');
console.log('Resultado:', test2._tTest); // Debería mostrar "Buena"

// Ejemplo 3: Hombre mayor realizando el Test de Illinois
const test3 = new Agility('h', 65, 'a', 28.5);
console.log('\nTest 3 - Hombre de 65 años, Test de Illinois (28.5s):');
console.log('Resultado:', test3._illinois); // Debería mostrar "Buena"

// Ejemplo 4: Mujer joven realizando el T-Test
const test4 = new Agility('m', 17, 'b', 10.15);
console.log('\nTest 4 - Mujer de 17 años, T-Test (10.15s):');
console.log('Resultado:', test4._tTest); // Debería mostrar "Buena"

// Ejemplo 5: Hombre adulto realizando el T-Test
const test5 = new Agility('h', 45, 'b', 11.0);
console.log('\nTest 5 - Hombre de 45 años, T-Test (11.0s):');
console.log('Resultado:', test5._tTest); // Debería mostrar "Normal"