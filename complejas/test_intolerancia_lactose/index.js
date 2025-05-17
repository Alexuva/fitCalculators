/**
 * Test de intolerancia lactosa
 * Datos necesarios:
 * - ¿Experimentas hinchazón abdominal tras consumir lácteos (leche, queso, yogur)?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Sufres diarrea o heces blandas después de consumir lácteos?
*     - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Tienes dolor abdominal o calambres después de consumir lácteos?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Sientes náuseas después de consumir productos lácteos?
 *    - Siempre - 3 
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Con qué frecuencia consumes leche (entera, desnatada o semidesnatada)?
 *    - Todos los días - 3
 *    - Varias veces a la semana - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Consumes queso o yogur con regularidad?
 *    - Todos los días - 3
 *    - Varias veces a la semana - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Notas diferencias en los síntomas dependiendo del tipo de lácteo que consumes (leche, yogur, queso)?
 *    - Sí, siempre - 3
 *    - A veces - 2
 *    - No estoy seguro/a - 1
 *    - No - 0
 * - ¿Te han diagnosticado intolerancia a la lactosa o has recibido indicación médica de evitar los lácteos?
 *    - Sí, confirmado por un médico - 3
 *    - Probable o sospecha sin diagnóstico - 2
 *    - No estoy seguro/a - 1
 *    - No - 0
 * - ¿Tienes antecedentes familiares de intolerancia a la lactosa o síntomas similares?
 *    - Sí, varios familiares cercanos - 3
 *    - Sí, algún familiar cercano - 2
 *    - No estoy seguro/a - 1
 *    - No - 0
 */

class LactoseIntoleranceTest {

  #abdominal;
  #diarrhea;
  #hurt;
  #nausea;
  #frecuency;
  #consume;
  #difference;
  #medical;
  #family;

  total;
  state;
  
  constructor(abdominal, diarrhea, hurt, nausea, frecuency, consume, difference, medical, family) {
    this.#abdominal = abdominal;
    this.#diarrhea = diarrhea;
    this.#hurt = hurt;
    this.#nausea = nausea;
    this.#frecuency = frecuency;
    this.#consume = consume;
    this.#difference = difference;
    this.#medical = medical;
    this.#family = family;
    this.calculate();
  }

  calculate() {
    this.total = this.#abdominal + this.#diarrhea + this.#hurt + this.#nausea + this.#frecuency + this.#consume + this.#difference + this.#medical + this.#family;
    if(this.total >= 21 && this.total <= 21){
      this.state = 'Alta probabilidad de intolerancia. Consulta con un médico o nutricionista para realizar pruebas específicas (test de hidrógeno en el alimento, dieta de eliminación)';
    }else if(this.total >= 14 && this.total <= 20){
      this.state = 'Probabilidad moderada de intolerancia. Reduce el consumo de lácteos, especialmente de leche, y evalúa si los síntomas mejoran. Considera consultar a un especialista.';
    }else if(this.total >= 7 && this.total <= 13){
      this.state = 'Baja probabilidad. Revisa tus hábitos alimentarios y consulta a un profesional si los síntomas persisten o empeoran.'
    }else if(this.total >= 0 && this.total <= 6){
      this.state = 'Muy baja probabilidad. Es poco probable que tengas intolerancia a la lactosa. Si tienes síntomas, consulta otras posibles causas.'
    }
  }

}

// Ejemplo de uso:
const test = new LactoseIntoleranceTest(
  3,  // Siempre experimenta hinchazón abdominal
  2,  // Frecuentemente sufre diarrea
  2,  // Frecuentemente tiene dolor abdominal
  1,  // Raramente siente náuseas
  2,  // Consume lácteos varias veces a la semana
  2,  // Consume queso/yogur varias veces a la semana
  2,  // A veces nota diferencias según el tipo de lácteo
  2,  // Tiene sospecha de intolerancia sin diagnóstico
  1   // No está seguro de antecedentes familiares
);

console.log('Puntuación total:', test.total);  // Mostrará la suma de todos los valores
console.log('Resultado:', test.state);  // Mostrará la interpretación basada en la puntuación total