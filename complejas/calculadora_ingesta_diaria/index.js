/**
* Calculadora Ingesta Diaria
* Datos necesarios: 
*   - Edad (18 o mas)
*   - Sexo:
*     - Hombre - h
*     - Mujer - m
*     - Embarazo - e
*     - Lactancia - l 
*   - Peso corporal (kg)
*   - Altura (cm)
*   - Tipo de actividad física:
*     - Sedentario - 1
*     - Moderado - 1.55
*     - Activo - 1.75
*/

class DailyIntake {
  #age;
  #sex;
  #weight;
  #height;
  #activity;

  energy;
  proteins;
  carbs = 130;
  ala;
  la;
  fiber;
  calcium = 1000;
  magnesium;
  iron;
  zinc;
  phosphorus = 700;
  sodium = 1500;
  potassium;

  constructor(age, sex, weight, height, activity) {
    this.#age = age;
    this.#sex = sex;
    this.#weight = weight;
    this.#height = height;
    this.#activity = activity;
  }

  calculateEnergy(){

    if(this.#sex === 'h'){
      this.energy = parseFloat(((662 - (9.53 * this.#age)) + (this.#activity * ((15.91 * this.#weight) + (539.6 * (this.#height / 100))))).toFixed(2));
    }else{
      this.energy = parseFloat(((354 - (6.91 * this.#age)) + (this.#activity * ((9.36 * this.#weight) + (726 * (this.#height / 100))))).toFixed(2));
    }

  }

  get energy(){
    return this.energy;
  }

  calculateProteins(){
    this.proteins = this.#weight * 0.8;
    if(this.#sex === 'e' || this.#sex === 'l'){
      this.proteins += 25;
    }
  }

  get proteins(){
    return this.proteins;
  }

  calculateAlaAndLa(){
    if(this.#sex === 'h'){
      if(this.#age >= 18 && this.#age <= 50){
        this.ala = 1.6;
        this.la = 17;
      }else{
        this.ala = 1.6;
        this.la = 14;
      }
    }else{
      if(this.#sex === 'm'){
        if(this.#age >= 18 && this.#age <= 50){
          this.ala = 1.1;
          this.la = 12;
        }else{
          this.ala = 1.1;
          this.la = 11;
        }
      }else if(this.#sex === 'e'){
        this.ala = 1.4;
        this.la = 13;
      }else if(this.#sex === 'l'){
        this.ala = 1.3;
        this.la = 13;
      }
    }
  }

  get ala(){
    return this.ala;
  }

  get la(){
    return this.la;
  }

  calculateFiber(){
    if(this.#sex === 'h'){
      if(this.#age >= 18 && this.#age <= 50){
        this.fiber = 38;
      }else{
        this.fiber = 30;
      }
    }else{
      if(this.#sex === 'm'){
        if(this.#age >= 18 && this.#age <= 50){
          this.fiber = 25;
        }else{
          this.fiber = 30;
        }
      }else if(this.#sex === 'e'){
        this.fiber = 28;
      }else if(this.#sex === 'l'){
        this.fiber = 29;
      }
    }
  }

  get fiber(){
    return this.fiber;
  }

  get calcium(){
    return this.calcium;
  }

  calculateMagnesium(){
    if(this.#sex === 'h'){
      this.magnesium = 400;
    }else{
      if(this.#sex === 'm'){
        this.magnesium = 310;
      }else if(this.#sex === 'e'){
        this.magnesium = 350;
      }else if(this.#sex === 'l'){
        this.magnesium = 310;
      }
    }
  }

  get magnesium(){
    return this.magnesium;
  }

  calculateIron(){
    if(this.#sex === 'h'){
      this.iron = 8;
    }else{
      if(this.#sex ==='m'){
        this.iron = 18;
      }else if(this.#sex === 'e'){
        this.iron = 27;
      }else if(this.#sex === 'l'){
        this.iron = 9;
      }
    }
  }

  get iron(){
    return this.iron;
  }

  calculateZinc(){
    if(this.#sex === 'h'){
      this.zinc = 11;
    }else{
      if(this.#sex ==='m'){
        this.zinc = 8;
      }else if(this.#sex === 'e'){
        this.zinc = 11;
      }else if(this.#sex === 'l'){
        this.zinc = 12;
      } 
    }
  }

  get zinc(){
    return this.zinc;
  }

  get phosphorus(){
    return this.phosphorus;
  }

  get sodium(){
    return this.sodium;
  }

  calculatePotassium(){
    if(this.#sex === 'h'){
      this.potassium = 3400;
    }else{
      if(this.#sex ==='m'){
        this.potassium = 2600;
      }else if(this.#sex === 'e'){
        this.potassium = 2900;
      }else if(this.#sex === 'l'){
        this.potassium = 2800;
      } 
    }
  }

  get potassium(){
    return this.potassium;
  }

}

// Ejemplo 1: Hombre de 25 años, activo
console.log("=== Ejemplo 1: Hombre joven activo ===");
const hombre25 = new DailyIntake(25, 'h', 75, 180, 1.75);
hombre25.calculateEnergy();
hombre25.calculateProteins();
hombre25.calculateAlaAndLa();
hombre25.calculateFiber();
hombre25.calculateMagnesium();
hombre25.calculateIron();
hombre25.calculateZinc();
hombre25.calculatePotassium();

console.log("Energía (kcal):", hombre25.energy);
console.log("Proteínas (g):", hombre25.proteins);
console.log("Ácido alfa-linolénico (g):", hombre25.ala);
console.log("Ácido linoleico (g):", hombre25.la);
console.log("Fibra (g):", hombre25.fiber);
console.log("Magnesio (mg):", hombre25.magnesium);
console.log("Hierro (mg):", hombre25.iron);
console.log("Zinc (mg):", hombre25.zinc);
console.log("Potasio (mg):", hombre25.potassium);

// Ejemplo 2: Mujer embarazada de 30 años
console.log("\n=== Ejemplo 2: Mujer embarazada ===");
const embarazada = new DailyIntake(30, 'e', 65, 165, 1);
embarazada.calculateEnergy();
embarazada.calculateProteins();
embarazada.calculateAlaAndLa();
embarazada.calculateFiber();
embarazada.calculateMagnesium();
embarazada.calculateIron();
embarazada.calculateZinc();
embarazada.calculatePotassium();

console.log("Energía (kcal):", embarazada.energy);
console.log("Proteínas (g):", embarazada.proteins);
console.log("Ácido alfa-linolénico (g):", embarazada.ala);
console.log("Ácido linoleico (g):", embarazada.la);
console.log("Fibra (g):", embarazada.fiber);
console.log("Magnesio (mg):", embarazada.magnesium);
console.log("Hierro (mg):", embarazada.iron);
console.log("Zinc (mg):", embarazada.zinc);
console.log("Potasio (mg):", embarazada.potassium);

// Ejemplo 3: Mujer mayor sedentaria
console.log("\n=== Ejemplo 3: Mujer mayor sedentaria ===");
const mujerMayor = new DailyIntake(65, 'm', 60, 160, 1);
mujerMayor.calculateEnergy();
mujerMayor.calculateProteins();
mujerMayor.calculateAlaAndLa();
mujerMayor.calculateFiber();
mujerMayor.calculateMagnesium();
mujerMayor.calculateIron();
mujerMayor.calculateZinc();
mujerMayor.calculatePotassium();

console.log("Energía (kcal):", mujerMayor.energy);
console.log("Proteínas (g):", mujerMayor.proteins);
console.log("Ácido alfa-linolénico (g):", mujerMayor.ala);
console.log("Ácido linoleico (g):", mujerMayor.la);
console.log("Fibra (g):", mujerMayor.fiber);
console.log("Magnesio (mg):", mujerMayor.magnesium);
console.log("Hierro (mg):", mujerMayor.iron);
console.log("Zinc (mg):", mujerMayor.zinc);
console.log("Potasio (mg):", mujerMayor.potassium);