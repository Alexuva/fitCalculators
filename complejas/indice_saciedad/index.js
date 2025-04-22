/**
 * Calculadora Inidice de saciedad
 * Datos necesarios: 
 *  - Nombre del alimento
 *  - Porción consumida (gramos) (numero positivo)
 *  - Calorías por 100 gramos (numero positivo)
 *  - Proteínas por 100 gramos (numero positivo)
 *  - Grasas por 100 gramos (numero positivo)
 *  - Carbohidratos por 100 gramos (numero positivo)
 *  - Índice de saciedad relativo del alimento (opcional).
 */

class SatietyIndex {

    _name;
    _portion;
    _calories;
    _proteins;
    _fats;
    _carbohydrates;
    _satietyIndex;

    _totalCalories;
    _totalMacros;

    constructor(name, portion, calories, proteins, fats, carbohydrates, satietyIndex) {
        this._name = name;
        this._portion = portion;
        this._calories = calories;
        this._proteins = proteins;
        this._fats = fats;
        this._carbohydrates = carbohydrates;
        this._satietyIndex = satietyIndex;
    }

    get TotalCalories(){
        this._totalCalories = Math.round((this._portion * this._calories) / 100);
        return this._totalCalories;
    }

    get MacroProportions(){

        let proteins = parseFloat((((this._proteins * this._portion) / 100) / this._totalCalories * 100).toFixed(2));
        let fats = parseFloat((((this._fats * this._portion) / 100) / this._totalCalories * 100).toFixed(2));
        let carbohydrates = parseFloat((((this._carbohydrates * this._portion) / 100) / this._totalCalories * 100).toFixed(2));
        
        this._totalMacros = { proteins, fats, carbohydrates };

        return this._totalMacros;
    }

    get EstimatedSatietyIndex(){
        if(this._satietyIndex === undefined || this._satietyIndex === null){
            let estimated = (this._totalMacros.proteins * 4) + (this._totalMacros.carbohydrates * 2) + (this._totalMacros.fats * 2);
            if(estimated <= 50 && estimated >= 300){
                estimated = Math.max(50, Math.min(300, estimated));
            }
            this._satietyIndex = estimated;
        }

        return this._satietyIndex;
    }

     get RelativeSatietyIndex(){
        return parseFloat((this._satietyIndex * (70 / this._totalCalories)).toFixed(2));
    }

}

// Test de la calculadora de índice de saciedad
function testSatietyIndex() {
    console.log("=== Iniciando pruebas de la Calculadora de Índice de Saciedad ===\n");

    // Caso 1: Alimento con alto contenido proteico
    const test1 = new SatietyIndex(
        "Pechuga de pollo",    // nombre
        100,                   // porción (g)
        165,                   // calorías/100g
        31,                    // proteínas/100g
        3.6,                   // grasas/100g
        0,                     // carbohidratos/100g
        170                    // índice de saciedad conocido
    );

    console.log("Prueba 1 - Pechuga de pollo (alto en proteína):");
    console.log("Calorías totales:", test1.TotalCalories);
    console.log("Proporción de macros:", test1.MacroProportions);
    console.log("Índice de saciedad estimado:", test1.EstimatedSatietyIndex);
    console.log("Índice de saciedad relativo:", test1.RelativeSatietyIndex);
    console.log("\n");

    // Caso 2: Alimento con alto contenido en carbohidratos
    const test2 = new SatietyIndex(
        "Pan integral",        // nombre
        50,                    // porción (g)
        265,                   // calorías/100g
        13,                    // proteínas/100g
        3.2,                   // grasas/100g
        48,                    // carbohidratos/100g
        null                   // sin índice de saciedad conocido
    );

    console.log("Prueba 2 - Pan integral (alto en carbohidratos):");
    console.log("Calorías totales:", test2.TotalCalories);
    console.log("Proporción de macros:", test2.MacroProportions);
    console.log("Índice de saciedad estimado:", test2.EstimatedSatietyIndex);
    console.log("Índice de saciedad relativo:", test2.RelativeSatietyIndex);
    console.log("\n");

    // Caso 3: Alimento con alto contenido en grasas
    const test3 = new SatietyIndex(
        "Aguacate",           // nombre
        200,                  // porción (g)
        160,                  // calorías/100g
        2,                    // proteínas/100g
        14.7,                 // grasas/100g
        8.5,                  // carbohidratos/100g
        null                  // sin índice de saciedad conocido
    );

    console.log("Prueba 3 - Aguacate (alto en grasas):");
    console.log("Calorías totales:", test3.TotalCalories);
    console.log("Proporción de macros:", test3.MacroProportions);
    console.log("Índice de saciedad estimado:", test3.EstimatedSatietyIndex);
    console.log("Índice de saciedad relativo:", test3.RelativeSatietyIndex);
}

// Ejecutar las pruebas
testSatietyIndex();