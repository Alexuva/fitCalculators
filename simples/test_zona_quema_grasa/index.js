/**
 * Calculadora zona quema de grasa
 * Datos necesarios: 
 * - Sexo:
 *  - Hombre - h
 *  - Mujer - m
 * - Edad (minimo 16)
 * - ¿Cuál es tu frecuencia cardiaca en reposo? (latidos/min)
 * - ¿Haces ejercicio habitualmente?
 *  - No mucho (1 vez a la semana) - a
 *  - Algo (2-3 veces a la semana) - b
 *  - Sí (>= 4 veces a la semana) - c
 * ¿Qué nivel de entrenamiento de resistencia cardiovascular consideras que tienes?
 *  - Principiante (ejercicio cardiovascular < 3 veces por semana o < 1 año practicándolo)
 *  - Intermedio (ejercicio cardiovascular 3-4 veces por semana y/o 1-2 años practicándolo)
 *  - Avanzado (ejercicio cardiovascular 4 o más veces por semana y/o >= 2 años practicándolo)
 */	

class FatBurnZone {
  _sex;
  _age;
  _heartRate;
  _exerciseFrequency;
  _level;
  _fcMax;

  constructor(sex, age, heartRate, exerciseFrequency, level) {
    this._sex = sex;
    this._age = age;
    this._heartRate = heartRate;
    this._exerciseFrequency = exerciseFrequency;
    this._level = level;
    this.fcMax(); //Calculamos la frecuencia cardiaca máxima
  }

  fcMax(){
    if(this._sex === 'h'){ //Si es hombre
      if(this._age <= 18){
        return this._fcMax = 220 - this._age;
      }else{
        if(this._exerciseFrequency === 'c'){
          return this._fcMax = 208 - (0.7 * this._age);
        }else{
          return this._fcMax = 220 - this._age;
        }
      }
    }else{ //Si es mujer
      if(this._age <= 18){
        return this._fcMax = 220 - this._age;
      }else{
        if(this._exerciseFrequency === 'c'){
          return this._fcMax = 201 - (0.63 * this._age);
        }else{
          return this._fcMax = 220 - this._age;
        }
      }
    }
  }

  fatBurnZone(){
    
    if(this._level === 'a'){
      let min = parseInt((((this._fcMax - this._heartRate) * 0.6) + this._heartRate).toFixed());
      let max = parseInt((((this._fcMax - this._heartRate) * 0.65) + this._heartRate).toFixed());
      return { min, max };
    }else if(this._level === 'b'){
      let min = parseInt((((this._fcMax - this._heartRate) * 0.65) + this._heartRate).toFixed());
      let max = parseInt((((this._fcMax - this._heartRate) * 0.7) + this._heartRate).toFixed());
      return { min, max };
    }else{
      let min = parseInt((((this._fcMax - this._heartRate) * 0.7) + this._heartRate).toFixed());
      let max = parseInt((((this._fcMax - this._heartRate) * 0.75) + this._heartRate).toFixed());
      return { min, max };
    }

  }

}

// Crear una instancia para una mujer de 30 años
// - Frecuencia cardíaca en reposo: 70
// - Hace ejercicio 2-3 veces por semana (b)
// - Nivel intermedio (b)
const calculadora = new FatBurnZone('m', 30, 70, 'b', 'b');

// Obtener la zona de quema de grasa
const zonaQuemaGrasa = calculadora.fatBurnZone();
console.log('Zona de quema de grasa:');
console.log(`Mínimo: ${zonaQuemaGrasa.min} latidos por minuto`);
console.log(`Máximo: ${zonaQuemaGrasa.max} latidos por minuto`);