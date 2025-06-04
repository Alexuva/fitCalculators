/**
 * Test de intolerancia cafeína
 * Datos necesarios:
 * - ¿Experimentas palpitaciones o taquicardia tras consumir cafeína?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Sientes ansiedad o nerviosismo tras consumir cafeína?
*     - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Tienes insomnio o dificultad para dormir después de consumir cafeína?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Sufres molestias gastrointestinales (acidez, dolor estomacal) tras consumir cafeína?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Cuántas tazas de café, té, bebidas energéticas o refrescos con cafeína consumes al día
 *    - Más de 4 tazas o equivalentes - 3
 *    - Entre 2 y 4 tazas o equivalentes - 2
 *    - 1 taza o equivalente - 1
 *    - Ninguna - 0
 * - ¿Consumes cafeína en la tarde o noche (después de las 4 p.m.)?
 *    - Siempre - 3
 *    - Frecuentemente - 2
 *    - Raramente - 1
 *    - Nunca - 0
 * - ¿Notas que eres más sensible a la cafeína que otras personas?
 *    - Sí, siempre - 3
 *    - A menudo - 2
 *    - Raramente - 1
 *    - No - 0
 * - ¿Tienes antecedentes familiares de sensibilidad o intolerancia a la cafeína?
 *    - Sí, varios familiares cercanos - 3
 *    - Sí, algún familiar cercano - 2
 *    - No estoy seguro/a - 1
 *    - No - 0
 */

class CaffeineIntoleranceTest {

  #palpitations;
  #ansiety;
  #insomnia;
  #gastrointestinal;
  #cups;
  #night;
  #sensitivity;
  #family;

  total;
  state;

  constructor(palpitations, ansiety, insomnia, gastrointestinal, cups, night, sensitivity, family) {
    this.#palpitations = palpitations;
    this.#ansiety = ansiety;
    this.#insomnia = insomnia;
    this.#gastrointestinal = gastrointestinal;
    this.#cups = cups;
    this.#night = night;
    this.#sensitivity = sensitivity;
    this.#family = family;
    this.calculate();
  }

  calculate() {
    this.total = this.#palpitations + this.#ansiety + this.#insomnia + this.#gastrointestinal + this.#cups + this.#night + this.#sensitivity + this.#family;
    if(this.total >= 21){
      this.state = 'Alta probabilidad de intolerancia. Reduce significativamente o elimina el consumo de cafeína y consulta a un médico si los síntomas persisten.';
    }else if(this.total >= 14 && this.total <= 20){
      this.state = 'Probabilidad moderada de intolerancia. Limita el consumo de cafeína, especialmente en la tarde y noche, y observa si los síntomas mejoran.';
    }else if(this.total >= 7 && this.total <= 13){
      this.state = 'Baja probabilidad. Modera tu consumo de cafeína y revisa si los síntomas están relacionados con otros factores.'
    }else if(this.total >= 0 && this.total <= 6){
      this.state = 'Muy baja probabilidad. Es poco probable que tengas intolerancia a la cafeína. Consume con moderación según tu tolerancia personal.'
    }
  }

}

// Ejemplo de uso:
const test = new CaffeineIntoleranceTest(
  2,  // Frecuentemente experimenta palpitaciones
  3,  // Siempre siente ansiedad
  2,  // Frecuentemente tiene insomnio
  1,  // Raramente tiene molestias gastrointestinales
  2,  // Consume entre 2-4 tazas al día
  2,  // Frecuentemente consume cafeína después de las 4 p.m.
  3,  // Siempre nota que es más sensible que otros
  1   // No está seguro de antecedentes familiares
);

console.log('Puntuación total:', test.total);  // Mostrará la suma de todos los valores
console.log('Resultado:', test.state);  // Mostrará la interpretación basada en la puntuación total
