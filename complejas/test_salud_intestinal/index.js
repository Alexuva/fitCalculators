/**
* Test de salud intestinal
* Datos necesarios: 
*  - ¿Consumes alimentos ricos en fibra (frutas, verduras, legumbres, cereales integrales)?
*   - Todos los días (3 puntos) - a
*   - Varias veces a la semana (2 puntos) - b 
*   - Raramente (1 punto) - c
*   - Nunca (0 puntos) - d
* - ¿Consumes alimentos fermentados (yogur, kéfir, chucrut, kimchi, etc.)?
*   - Todos los días (3 puntos) - a
*   - Varias veces a la semana (2 puntos) - b
*   - Raramente (1 punto) - c
*   - Nunca (0 puntos) - d
* - ¿Evitas alimentos ultraprocesados y altos en azúcar?
*   - Siempre (3 puntos) - a
*   - A menudo (2 puntos) - b
*   - A veces (1 punto) - c
*   - Nunca (0 puntos) - d
* - ¿Consumes alimentos ricos en omega-3 (pescados grasos, nueces, linaza)?
*   - Todos los días (3 puntos) - a
*   - Varias veces a la semana (2 puntos) - b
*   - Raramente (1 punto) - c
*   - Nunca (0 puntos) - d
* - ¿Cuántas horas duermes por noche?
*   - Más de 7 horas (3 puntos) - a
*   - Entre 6 y 7 horas (2 puntos) - b
*   - Entre 5 y 6 horas (1 punto) - c
* - ¿Con qué frecuencia haces ejercicio físico moderado o intenso?
*   - 4 o más veces por semana (3 puntos) - a
*   - 2 a 3 veces por semana (2 puntos) - b
*   - 1 vez veces por semana (1 punto) - c
*   - Nunca (0 puntos) - d
* - ¿Te sientes estresado la mayor parte del tiempo?
*   - Nunca o rara vez (3 puntos) - a
*   - A veces o ocasionalmente (2 puntos) - b
*   - Casi siempre o siempre (1 punto) - c
*   - Siempre (0 puntos) - d
* - ¿Has tomado antibióticos en los últimos 12 meses?
*   - No (3 puntos) - a
*   - Sí, una vez (2 puntos) - b
*   - Sí, varias veces (0 punto) - c
* - ¿Has tenido problemas gastrointestinales frecuentes (diarrea, estreñimiento, hinchazón)?
*   - Nunca (3 puntos) - a
*   - Ocasionalmente (2 puntos) - b
*   - Frecuentemente (1 punto) - c
*   - Siempre (0 puntos) - d
* - ¿Consumes alcohol?
*   - Nunca (3 puntos) - a
*   - Rara vez (2 puntos) - b
*   - Frecuentemente (1 punto) - c
*   - Todos los días (0 puntos) - d
* - ¿Fumas tabaco o utilizas productos similares?
*   - Nunca (3 puntos) - a
*   - Rara vez (2 puntos) - b
*   - Frecuentemente (1 punto) - c
*   - Todos los días (0 puntos) - d
*/

class IntestinalHealthTest {
  #fiber;
  #fermented;
  #processed;
  #omega3;
  #nightSleep;
  #exercise;
  #stress;
  #antibiotics;
  #gastrointestinalProblems;
  #alcohol;
  #smoking;

  total;
  state;

  constructor(fiber, fermented, processed, omega3, nightSleep, exercise, stress, antibiotics, gastrointestinalProblems, alcohol, smoking) {
    this.#fiber = fiber;
    this.#fermented = fermented;
    this.#processed = processed;
    this.#omega3 = omega3;
    this.#nightSleep = nightSleep;
    this.#exercise = exercise;
    this.#stress = stress;
    this.#antibiotics = antibiotics;
    this.#gastrointestinalProblems = gastrointestinalProblems;
    this.#alcohol = alcohol;
    this.#smoking = smoking;
    this.calculate();
  }

  calculate() {
    this.total = this.#fiber + this.#fermented + this.#processed + this.#omega3 + this.#nightSleep + this.#exercise + this.#stress + this.#antibiotics + this.#gastrointestinalProblems + this.#alcohol + this.#smoking;
    if(this.total >= 27 && this.total <= 33){
      this.state = "Excelente. Tu microbiota está en muy buen estado. Continúa con tus hábitos saludables.";
    }else if(this.total >= 20 && this.total <= 26){
      this.state = "Bueno. Tu salud intestinal es buena, pero hay margen de mejora. Revisa tu dieta y estilo de vida.";
    }else if(this.total >= 13 && this.total <= 19){
      this.state = "Regular. Tu microbiota podría estar afectada. Incrementa el consumo de fibra y alimentos fermentados.";
    }else if(this.total >= 0 && this.total <= 12){
      this.state = "Deficiente. Tu microbiota está comprometida. Consulta con un profesional para mejorar tu salud intestinal.";
    }
  }

}

// Ejemplo de uso
const ejemplo = new IntestinalHealthTest(
  3,  // Consumo de fibra: todos los días
  2,  // Alimentos fermentados: varias veces a la semana
  2,  // Evita ultraprocesados: a menudo
  3,  // Omega-3: todos los días
  3,  // Duerme más de 7 horas
  2,  // Ejercicio: 2-3 veces por semana
  2,  // Estrés: ocasionalmente
  3,  // No ha tomado antibióticos
  2,  // Problemas gastrointestinales: ocasionalmente
  2,  // Alcohol: rara vez
  3   // Nunca fuma
);

console.log("Puntuación total:", ejemplo.total);
console.log("Estado de salud intestinal:", ejemplo.state);