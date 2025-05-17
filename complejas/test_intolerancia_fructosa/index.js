/**
 * Test de intolerancia fructosa
 * Datos necesarios:
 * - ¿Experimentas hinchazón abdominal tras consumir alimentos ricos en fructosa (frutas, miel, productos procesados)?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Sufres diarrea o heces blandas después de consumir alimentos ricos en fructosa?
*     - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Tienes dolor abdominal o calambres tras consumir alimentos con fructosa?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Sientes náuseas después de consumir alimentos con fructosa?
 *    - Siempre - 3 
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Con qué frecuencia consumes frutas muy ricas en fructosa (mango, sandía, manzana, pera)?
 *    - Todos los días - 3
 *    - Varias veces a la semana - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Consumes miel, jarabes o productos endulzados con fructosa con regularidad?
 *    - Todos los días - 3
 *    - Varias veces a la semana - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Notas diferencias en los síntomas dependiendo del tipo de alimento rico en fructosa que consumes?
 *    - Sí, siempre - 3
 *    - A veces - 2
 *    - No estoy seguro/a - 1
 *    - No - 0
 * - ¿Te han diagnosticado malabsorción de fructosa o intolerancia por un médico?
 *    - Sí, confirmado por un médico - 3
 *    - Probable o sospecha sin diagnóstico - 2
 *    - No estoy seguro/a - 1
 *    - No - 0
 * - ¿Tienes antecedentes familiares de intolerancia a la fructosa o síntomas similares?
 *    - Sí, varios familiares cercanos - 3
 *    - Sí, algún familiar cercano - 2
 *    - No estoy seguro/a - 1
 *    - No - 0
 */

class FructoseIntoleranceTest {

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
      this.state = 'Alta probabilidad de intolerancia. Consulta con un médico para realizar pruebas específicas (test de hidrógeno en el aliento, dieta de eliminación).';
    }else if(this.total >= 14 && this.total <= 20){
      this.state = 'Probabilidad moderada de intolerancia. Reduce el consumo de alimentos ricos en fructosa y evalúa si los síntomas mejoran. Considera consultar a un especialista.';
    }else if(this.total >= 7 && this.total <= 13){
      this.state = 'Baja probabilidad. Observa si los síntomas persisten tras consumir fructosa y revisa tus hábitos alimentarios.'
    }else if(this.total >= 0 && this.total <= 6){
      this.state = 'Muy baja probabilidad. Es poco probable que tengas intolerancia a la fructosa. Si tienes síntomas, consulta otras posibles causas.'
    }
  }

}

// Ejemplo de uso:
const test = new FructoseIntoleranceTest(
  2,  // Frecuentemente experimenta hinchazón abdominal
  1,  // Raramente sufre diarrea
  2,  // Frecuentemente tiene dolor abdominal
  1,  // Raramente siente náuseas
  3,  // Consume frutas ricas en fructosa todos los días
  2,  // Consume miel/jarabes varias veces a la semana
  2,  // A veces nota diferencias según el alimento
  1,  // No está seguro del diagnóstico médico
  0   // No tiene antecedentes familiares
);

console.log('Puntuación total:', test.total);  // Mostrará la suma de todos los valores
console.log('Resultado:', test.state);  // Mostrará la interpretación basada en la puntuación total