/**
 * Calculadora Vidas Animales Salvadas
 * Datos necesarios: 
 * - Duración de la dieta vegana en meses (numero positivo)
 * - Frecuencia previa de consumo: 
 *      - Alta (100% del promedio mensual)
 *      - Moderada (50% del promedio mensual)
 *      - Baja (25% del promedio mensual)
 * - Tipo de alimentos evitados: Selección múltiple
 *      - Carne
 *      - Pescado
 *      - Huevos
 *      - Lácteos
 *      - Mariscos
 * - Opcional: Peso corporal (kg) (numero positivo)
 */

class AnimalsSaved {
    
    _duration;
    _frequency;
    _avoidedFood = [];
    _weight;
    _impact;

    constructor(duration, frequency, avoidedFood, weight) {
        this._duration = duration;
        this._frequency = frequency;
        this._avoidedFood = avoidedFood;
        this._weight = weight;
    }

    getImpact() {
        let meat;
        let fish;
        let eggs;
        let milk;
        let seafood;

        for(let type of this._avoidedFood) {
            if(type === 'meat') {
                meat = 2 * this._frequency;
            }else if(type === 'fish') {
                fish = 2.5 * this._frequency;
            }else if(type === 'eggs') {
                eggs = 0.42 * this._frequency;
            }else if(type === 'milk') {
                milk = 0.08 * this._frequency;
            }else if(type === 'seafood') {
                seafood = 12.5 * this._frequency;
            }
        }

        this._impact = {meat, fish, eggs, milk, seafood};

        return this._impact;
    }

    getTotalImpact(){

        let total = 0;
        for(let impact in this._impact) {
            
            if(this._impact[impact] === undefined || null){
                this._impact[impact] = 0;
                continue;
            } 

            this._impact[impact] = this._impact[impact] * this._duration; 

            if(this._weight) {
                if(this._weight < 50) {
                    this._impact[impact] = this._impact[impact] * (1 - 0.2);
                }else if(this._weight >= 50 && this._weight <= 80){
                    this._impact[impact] = this._impact[impact] * (1 + 0);
                }else if(this._weight > 80){
                    this._impact[impact] = this._impact[impact] * (1 + 0.2);
                }
            }

            this._impact[impact] = Math.round(this._impact[impact]);

            total += this._impact[impact];
        }

        return {
            total,
            meat: `${this._impact.meat} terrestres`,
            fish: `${this._impact.fish} peces`,
            eggs: `${this._impact.eggs} gallinas`,
            milk: `${this._impact.milk} vacas lecheras`,
            seafood: `${this._impact.seafood} mariscos`,
        }

    }

}


// Test de la calculadora de vidas animales salvadas
function testAnimalsSaved() {
    console.log("=== Iniciando pruebas de la Calculadora de Vidas Animales Salvadas ===\n");

    // Caso 1: Vegano completo con consumo alto
    const test1 = new AnimalsSaved(
        12,                     // 12 meses
        1.0,                    // Frecuencia alta (100%)
        ['meat', 'fish', 'eggs', 'milk', 'seafood'],  // Todos los alimentos
        70                      // Peso normal
    );

    console.log("Prueba 1 - Vegano completo (1 año, consumo alto):");
    console.log("Impacto detallado:", test1.getImpact());
    console.log("Impacto total:", test1.getTotalImpact());
    console.log("\n");

    // Caso 2: Vegetariano con consumo moderado
    const test2 = new AnimalsSaved(
        6,                      // 6 meses
        0.5,                    // Frecuencia moderada (50%)
        ['meat', 'fish'],       // Solo evita carne y pescado
        90                      // Peso alto
    );

    console.log("Prueba 2 - Vegetariano (6 meses, consumo moderado):");
    console.log("Impacto detallado:", test2.getImpact());
    console.log("Impacto total:", test2.getTotalImpact());
    console.log("\n");

    // Caso 3: Consumo bajo y peso bajo
    const test3 = new AnimalsSaved(
        3,                      // 3 meses
        0.25,                   // Frecuencia baja (25%)
        ['meat', 'eggs'],       // Solo evita carne y huevos
        45                      // Peso bajo
    );

    console.log("Prueba 3 - Consumo bajo (3 meses, consumo bajo):");
    console.log("Impacto detallado:", test3.getImpact());
    console.log("Impacto total:", test3.getTotalImpact());
    console.log("\n");

    // Caso 4: Solo mariscos y pescado
    const test4 = new AnimalsSaved(
        1,                      // 1 mes
        1.0,                    // Frecuencia alta
        ['seafood', 'fish'],    // Solo evita mariscos y pescado
        70                      // Peso normal
    );

    console.log("Prueba 4 - Solo mariscos y pescado (1 mes, consumo alto):");
    console.log("Impacto detallado:", test4.getImpact());
    console.log("Impacto total:", test4.getTotalImpact());
}

// Ejecutar las pruebas
testAnimalsSaved();