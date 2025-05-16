/**
 * Test de intolerancia alimentaria
 * Datos necesarios:
 *  - ¿Con qué frecuencia consumes productos lácteos (leche, queso, yogur)?
 *    - Todos los días - 3
 *    - Varias veces a la semana - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Con qué frecuencia consumes gluten (pan, pasta, galletas)?
 *    - Todos los días - 3
 *    - Varias veces a la semana - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Con qué frecuencia consumes alimentos procesados o ultraprocesados (galletas, snacks, comida rápida)?
 *    - Todos los días - 3
 *    - Varias veces a la semana - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Consumes frutas o verduras que te generan molestias específicas?
 *    - Sí, muchas veces - 3
 *    - A veces - 2
 *    - Rara vez - 1
 *    - No, nunca - 0
 * - ¿Experimentas hinchazón abdominal después de comer?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Tienes diarrea o estreñimiento recurrente?
 *    - Si, varias veces a la semana - 3
 *    - Si, ocasionalmente - 2
 *    - Rara vez - 1
 *    - Nunca - 0
 * - ¿Presentas fatiga o cansancio extremo tras comer ciertos alimentos?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Experimentas síntomas cutáneos (como urticaria, erupciones o picazón) tras consumir ciertos alimentos?
 *    - Siempre - 3 
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Percibes una relación clara entre el consumo de ciertos alimentos y los síntomas que experimentas?
 *    - Sí, estoy seguro/a - 3
 *    - Probablemente - 2
 *    - No estoy seguro/a - 1
 *    - No, ninguna relación - 0
 */

class FoodIntoleranceTest {

  #lactose;
  #gluten;
  #ultraprocessed;
  #fruits;
  #abdominalPain;
  #diarrhea;
  #fatigue;
  #symptoms;
  #relationship;

  total;
  state;

  constructor(lactose, gluten, ultraprocessed, fruits, abdominalPain, diarrhea, fatigue, symptoms, relationship) {
    this.#lactose = lactose;
    this.#gluten = gluten;
    this.#ultraprocessed = ultraprocessed;
    this.#fruits = fruits;
    this.#abdominalPain = abdominalPain;
    this.#diarrhea = diarrhea;
    this.#fatigue = fatigue;
    this.#symptoms = symptoms;
    this.#relationship = relationship;
    this.calculate();
  }

  calculate() {
    this.total = this.#lactose + this.#gluten + this.#ultraprocessed + this.#fruits + this.#abdominalPain + this.#diarrhea + this.#fatigue + this.#symptoms + this.#relationship;
    if(this.total >= 21 && this.total <= 21){
      this.state = 'Alta probabilidad de intolerancia. Consulta a un especialista y considera pruebas específicas para detectar intolerancias.'
    }else if(this.total >= 14 && this.total <= 20){
      this.state = 'Probabilidad moderada de intolerancia. Lleva un diario de alimentos y síntomas para identificar posibles desencadenantes.'
    }else if(this.total >= 7 && this.total <= 13){
      this.state = 'Baja probabilidad de intolerancia. Revisa tus hábitos alimentarios y consulta si los síntomas persisten.'
    }else if(this.total >= 0 && this.total <= 6){
      this.state = 'Probabilidad muy baja de intolerancia. Tus síntomas no parecen estar relacionados con intolerancias alimentarias.'
    }
  }

}

// Ejemplo de uso
const ejemplo = new FoodIntoleranceTest(
  3,  // Lácteos: todos los días
  2,  // Gluten: varias veces a la semana
  1,  // Ultraprocesados: raramente
  2,  // Frutas que causan molestias: a veces
  2,  // Hinchazón abdominal: frecuentemente
  1,  // Diarrea/estreñimiento: rara vez
  2,  // Fatiga después de comer: frecuentemente
  1,  // Síntomas cutáneos: raramente
  2   // Relación alimentos-síntomas: probablemente
);

console.log("Puntuación total:", ejemplo.total);
console.log("Evaluación:", ejemplo.state);