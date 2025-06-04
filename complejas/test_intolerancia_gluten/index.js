/**
 * Test de intolerancia gluten
 * Datos necesarios:
 * - ¿Sientes hinchazón abdominal frecuente después de consumir alimentos con gluten (pan, pasta, galletas)?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Tienes diarrea o estreñimiento recurrente después de consumir alimentos con gluten?
*     - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Experimentas dolor o molestias abdominales tras consumir alimentos con gluten?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Experimentas fatiga o cansancio extremo tras consumir alimentos con gluten?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Tienes síntomas cutáneos (erupciones, dermatitis herpetiforme, picazón) relacionados con el consumo de gluten?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Experimentas dolor de cabeza, niebla mental o dificultad para concentrarte tras consumir gluten?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Te han diagnosticado o tienes sospechas de enfermedad celíaca, sensibilidad al gluten o alergia al trigo?
 *    - Sí, confirmado por un médico - 3
 *    - Probable o sospecha sin diagnóstico - 2
 *    - No estoy seguro/a - 1
 *    - No - 0
 * - ¿Tienes antecedentes familiares de enfermedad celíaca o sensibilidad al gluten?
 *    - Sí, varios familiares cercanos - 3
 *    - Sí, algún familiar cercano - 2
 *    - No estoy seguro/a - 1
 *    - No - 0
 * - ¿Consumes alimentos con gluten (pan, pasta, galletas, cereales)?
 *    - Todos los días - 3
 *    - Varias veces a la semana - 2
 *    - Raramente - 1
 *    - Nunca - 0
 */

class GlutenIntoleranceTest {

  #abdominal;
  #diarrhea;
  #hurt;
  #fatigue;
  #skin;
  #headache;
  #medical;
  #family;
  #consume;

  total;
  state;

  constructor(abdominal, diarrhea, hurt, fatigue, skin, headache, medical, family, consume) {
    this.#abdominal = abdominal;
    this.#diarrhea = diarrhea;
    this.#hurt = hurt;
    this.#fatigue = fatigue;
    this.#skin = skin;
    this.#headache = headache;
    this.#medical = medical;
    this.#family = family;
    this.#consume = consume;
    this.calculate();
  }

  calculate() {
    this.total = this.#abdominal + this.#diarrhea + this.#hurt + this.#fatigue + this.#skin + this.#headache + this.#medical + this.#family + this.#consume;
    if(this.total >= 21){
      this.state = 'Alta probabilidad de intolerancia. Consulta con un médico o nutricionista para realizar pruebas diagnósticas (anticuerpos específicos, biopsia intestinal o dieta sin gluten supervisada)';
    }else if(this.total >= 14 && this.total <= 20){
      this.state = 'Probabilidad moderada de intolerancia. Lleva un diario de alimentos y síntomas, y consulta con un especialista para explorar la posible relación entre tus síntomas y el consumo de gluten.';
    }else if(this.total >= 7 && this.total <= 13){
      this.state = 'Baja probabilidad. Revisa tus hábitos alimentarios y consulta a un profesional si los síntomas persisten o empeoran.'
    }else if(this.total >= 0 && this.total <= 6){
      this.state = 'Muy baja probabilidad. Es poco probable que tengas intolerancia al gluten, pero mantén hábitos alimentarios saludables y consulta a un médico si los síntomas persisten.'
    }
  }

}

// Creamos un ejemplo con diferentes niveles de síntomas
// Los parámetros representan (en orden):
// 1. Hinchazón abdominal (3: Siempre)
// 2. Diarrea/estreñimiento (2: Frecuentemente)
// 3. Dolor abdominal (3: Siempre)
// 4. Fatiga (2: Frecuentemente)
// 5. Síntomas cutáneos (1: Raramente)
// 6. Dolor de cabeza (2: Frecuentemente)
// 7. Diagnóstico médico (2: Probable sin diagnóstico)
// 8. Antecedentes familiares (1: No estoy seguro/a)
// 9. Consumo de gluten (3: Todos los días)

const test = new GlutenIntoleranceTest(3, 2, 3, 2, 1, 2, 2, 1, 3);

// Mostramos los resultados
console.log('Puntuación total:', test.total);
console.log('Resultado:', test.state);
