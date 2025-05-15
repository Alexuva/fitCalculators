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
    this.total = (this.#richCalories / this.#totalCalories) * 100;
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