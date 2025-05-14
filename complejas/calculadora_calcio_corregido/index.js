/**
* Calculadora Magnesio
* Datos necesarios: 
*  - Calcio total (mg/dL)(numero positivo)
*  - Albúmina (g/dL)(numero positivo)
*/

class CorrectedCalcium {
  #calcium;
  #albumin;

  total;

  constructor(calcium, albumin) {
    this.#calcium = calcium;
    this.#albumin = albumin;
    this.total = this.calculate();
  }

  calculate() {
    return parseFloat((this.#calcium + (0.8 * (4.0 - this.#albumin))).toFixed(2))
  }

  get range(){
    if(this.total < 8.5){
      return `El nivel de calcio corregido es de ${this.total} mg/dL, está fuera de los rangos razonables y se corresponde con Hipocalcemia`
    }else if(this.total >= 8.5 && this.total <= 10.5){
      return `El nivel de calcio corregido es de ${this.total} mg/dL, está dentro de los rangos razonables y se corresponde con un nivel normal`
    }else{
      return `El nivel de calcio corregido es de ${this.total} mg/dL, está fuera de los rangos razonables y se corresponde con Hipercalcemia`
    }
  }

}

// Ejemplo 1: Valor normal
const ejemplo1 = new CorrectedCalcium(9.5, 4.0);
console.log(ejemplo1.total); // 9.5 mg/dL
console.log(ejemplo1.range); // El nivel de calcio corregido es de 9.5 mg/dL, está dentro de los rangos razonables y se corresponde con un nivel normal

// Ejemplo 2: Hipocalcemia (calcio bajo)
const ejemplo2 = new CorrectedCalcium(7.5, 3.0);
console.log(ejemplo2.total); // 8.3 mg/dL
console.log(ejemplo2.range); // El nivel de calcio corregido es de 8.3 mg/dL, está fuera de los rangos razonables y se corresponde con Hipocalcemia

// Ejemplo 3: Hipercalcemia (calcio alto)
const ejemplo3 = new CorrectedCalcium(11.0, 5.0);
console.log(ejemplo3.total); // 10.2 mg/dL
console.log(ejemplo3.range); // El nivel de calcio corregido es de 10.2 mg/dL, está dentro de los rangos razonables y se corresponde con un nivel normal

// Ejemplo 4: Hipercalcemia severa
const ejemplo4 = new CorrectedCalcium(12.0, 4.0);
console.log(ejemplo4.total); // 12.0 mg/dL
console.log(ejemplo4.range); // El nivel de calcio corregido es de 12.0 mg/dL, está fuera de los rangos razonables y se corresponde con Hipercalcemia