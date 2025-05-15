/**
* Calculadora Índice Fitoquímico
* Datos necesarios: 
*  - Calorías totales consumidas (kcal/dia) Numero entero positivo
*  - Calorías provenientes de alimentos ricos en fitoquímicos (kcal/día) Número entero positivo, NO PUEDE SER MAYOR QUE EL VALOR DE CALORÍAS TOTALES CONSUMIDAS
*/

class FitoIndex {
  #totalCalories;
  #richCalories;
  
  total;
  classification;

  constructor(totalCalories, richCalories) {
    this.#totalCalories = totalCalories;
    this.#richCalories = richCalories;
    this.total = this.calculate();
  }

  calculate() {
    this.total = parseInt(((this.#richCalories / this.#totalCalories) * 100).toFixed());
    if(this.total >= 0 && this.total <= 9){
      this.classification = `Tu índice fitoquímico es del ${this.total}%, lo cual es considerado <b>crítico</b>. Muy bajo consumo de alimentos ricos en fitoquímicos; dieta basada en alimentos no saludables.`;
    }else if(this.total >= 10 && this.total <= 29){
      this.classification = `Tu índice fitoquímico es del ${this.total}%, lo cual es considerado <b>muy deficiente</b>. Dieta pobre en fitoquímicos; requiere grandes ajustes hacia alimentos vegetales.`;
    }else if(this.total >= 30 && this.total <= 49){
      this.classification = `Tu índice fitoquímico es del ${this.total}%, lo cual es considerado <b>deficiente</b>. Consumo insuficiente de alimentos ricos en fitoquímicos.`;
    }else if(this.total >= 50 && this.total <= 69){
      this.classification = `Tu índice fitoquímico es del ${this.total}%, lo cual es considerado <b>moderado</b>. Buen equilibrio, pero con margen para aumentar el consumo de alimentos vegetales.`;
    }else if(this.total >= 70 && this.total <= 89){
      this.classification = `Tu índice fitoquímico es del ${this.total}%, lo cual es considerado <b>bueno</b>. Alta proporción de alimentos ricos en fitoquímicos, con ligeras mejoras posibles.`;
    }else if(this.total >= 90 && this.total <= 100){
      this.classification = `Tu índice fitoquímico es del ${this.total}%, lo cual es considerado <b>excelente</b>. Dieta rica en fitoquímicos, basada principalmente en alimentos vegetales.`
    }
  }
}

// Ejemplo 1: Dieta crítica en fitoquímicos
console.log("=== Ejemplo 1: Dieta crítica en fitoquímicos ===");
const dietaCritica = new FitoIndex(2500, 150);
console.log("Calorías totales: 2500 kcal/día");
console.log("Calorías de alimentos ricos en fitoquímicos: 150 kcal/día");
console.log(dietaCritica.classification);

// Ejemplo 2: Dieta muy deficiente en fitoquímicos
console.log("\n=== Ejemplo 2: Dieta muy deficiente en fitoquímicos ===");
const dietaMuyDeficiente = new FitoIndex(2000, 400);
console.log("Calorías totales: 2000 kcal/día");
console.log("Calorías de alimentos ricos en fitoquímicos: 400 kcal/día");
console.log(dietaMuyDeficiente.classification);

// Ejemplo 3: Dieta deficiente en fitoquímicos
console.log("\n=== Ejemplo 3: Dieta deficiente en fitoquímicos ===");
const dietaDeficiente = new FitoIndex(2200, 880);
console.log("Calorías totales: 2200 kcal/día");
console.log("Calorías de alimentos ricos en fitoquímicos: 880 kcal/día");
console.log(dietaDeficiente.classification);

// Ejemplo 4: Dieta moderada en fitoquímicos
console.log("\n=== Ejemplo 4: Dieta moderada en fitoquímicos ===");
const dietaModerada = new FitoIndex(2400, 1440);
console.log("Calorías totales: 2400 kcal/día");
console.log("Calorías de alimentos ricos en fitoquímicos: 1440 kcal/día");
console.log(dietaModerada.classification);

// Ejemplo 5: Dieta buena en fitoquímicos
console.log("\n=== Ejemplo 5: Dieta buena en fitoquímicos ===");
const dietaBuena = new FitoIndex(2300, 1840);
console.log("Calorías totales: 2300 kcal/día");
console.log("Calorías de alimentos ricos en fitoquímicos: 1840 kcal/día");
console.log(dietaBuena.classification);

// Ejemplo 6: Dieta excelente en fitoquímicos
console.log("\n=== Ejemplo 6: Dieta excelente en fitoquímicos ===");
const dietaExcelente = new FitoIndex(2000, 1900);
console.log("Calorías totales: 2000 kcal/día");
console.log("Calorías de alimentos ricos en fitoquímicos: 1900 kcal/día");
console.log(dietaExcelente.classification);