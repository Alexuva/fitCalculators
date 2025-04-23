/**
 * Calculadora Ingesta de Omega 3
 * Datos necesarios: 
 *  - Edad
 *  - Género
 *  - Embarazo o lactancia
 *  - ALA (Vegetales)
 *      - Semillas de lino (Cantidad semanal en cucharadas) (1 cucharada = 2.3g ALA)
 *      - Semillas de chía (Cantidad semanal en cucharadas) (1 cucharada = 1.7g ALA)
 *      - Nueces (Cantidad semanal en porciones) (1 porcion = 1.6g ALA)
 *      - Aceite de canola (Cantidad semanal en cucharadas) (1 cucharada = 1.3g ALA)
 *      - Aceite de linaza (Cantidad semanal en cucharadas) (1 cucharada = 7.3g ALA)
 * - EPA + DHA (animales)
 *      - Pescado graso (salmón, caballa, atún) (Porciones por semana) (1 porción = 1000mg EPA + DHA)
 *      - Suplemento Omega 3 (Dosis diaria en mg)
 */

class Omega3Ingest {

    _age;
    _gender;
    _pregnancy;
    _lactation;
    _lino;
    _chia;
    _nuts;
    _canola;
    _linaza;
    _fish;
    _omega3;
    _AlaDaily;
    _EPADaily;

    _evaluation;

    _EPAStadistic = 250;
    _ALAStadistic = {
        "male" : [
            {min: 1, max: 3, value: 0.7},
            {min: 4, max: 8, value: 0.9},
            {min: 9, max: 13, value: 1.2},
            {min: 14, max: 18, value: 1.6},
            {min: 19, max: 50, value: 1.6},
            {min: 51, max: null, value: 1.6}
        ],
        "female":[
            {min: 1, max: 3, value: 0.7},
            {min: 4, max: 8, value: 0.9},
            {min: 9, max: 13, value: 1},
            {min: 14, max: 18, value: 1.1},
            {min: 19, max: 50, value: 1.1},
            {min: 51, max: null, value: 1.1}
        ],
        "pregnancy": [
            {min: 14, max: 18, value: 1.4},
            {min: 19, max: 50, value: 1.4}
        ],
        "lactation": [
            {min: 14, max: 18, value: 1.3},
            {min: 19, max: 50, value: 1.3}
        ]
    }

    constructor(age, gender, pregnancy, lactation, lino, chia, nuts, canola, linaza, fish, omega3) {
        this._age = age;
        this._gender = gender;
        this._pregnancy = pregnancy;
        this._lactation = lactation;
        this._lino = lino;
        this._chia = chia;
        this._nuts = nuts;
        this._canola = canola;
        this._linaza = linaza;
        this._fish = fish;
        this._omega3 = omega3;
    }

    dailyConsumption(){
        this._lino = parseFloat(((this._lino * 2.3) / 7).toFixed(2));
        this._chia = parseFloat(((this._chia * 1.7) / 7).toFixed(2));
        this._nuts = parseFloat(((this._nuts * 1.6) / 7).toFixed(2));
        this._canola = parseFloat(((this._canola * 1.3) / 7).toFixed(2));
        this._linaza = parseFloat(((this._linaza * 7.3) / 7).toFixed(2));

        this._AlaDaily = parseFloat((this._lino + this._chia + this._nuts + this._canola + this._linaza).toFixed(2));
        
        this._fish = parseFloat(((this._fish * 1000) / 7).toFixed(2));
        this._omega3 = this._omega3;
        
        this._EPADaily = parseFloat((this._fish + this._omega3).toFixed(2));
    }

    get Evaluation(){
        let Ala;

        if(this._pregnancy){
            Ala = this._ALAStadistic.pregnancy.find(age =>{
                if(age.max === null){
                    return this._age >= age.min;
                }else{
                    return this._age >= age.min && this._age <= age.max;
                }
            })
        }else if(this._lactation){
            Ala = this._ALAStadistic.lactation.find(age =>{
                if(age.max === null){
                    return this._age >= age.min;
                }else{
                    return this._age >= age.min && this._age <= age.max;
                }
            }) 
        }else{
            Ala = this._ALAStadistic[this._gender].find(age =>{
                if(age.max === null){
                    return this._age >= age.min;
                }else{
                    return this._age >= age.min && this._age <= age.max;
                }
            }) 
        }
        
        if(this._EPADaily > 0){
            if(this._EPADaily >= this._EPAStadistic){
                return "Cumples con los requisitos diarios de EPA + DHA gracias al consumo de pescado y suplementos. No es necesario ajustar tu dieta."
            }else{
                if(this._AlaDaily > 0){
                    if(this._AlaDaily >= Ala.value){
                        return "Cumples con los requisitos diarios de ALA gracias al consumo de vegetales. No es necesario ajustar tu dieta."
                    }else{
                        return "No cumples con los requisitos diarios. Deberías ajustar tu dieta."
                    }
                }else{
                    return "No cumples con los requisitos diarios. Deberías ajustar tu dieta."
                }
            }
        }else{
            if(this._AlaDaily > 0){
                if(this._AlaDaily >= Ala.value){
                    return "Cumples con los requisitos diarios de ALA gracias al consumo de vegetales. No es necesario ajustar tu dieta."
                }else{
                    return "No cumples con los requisitos diarios. Deberías ajustar tu dieta."
                }
            }else{
                return "No cumples con los requisitos diarios. Deberías ajustar tu dieta."
            }
        }
    }

}

// Test de la calculadora de ingesta de omega 3
function testOmega3Ingest() {
    console.log("=== Iniciando pruebas de la Calculadora de Ingesta de Omega 3 ===\n");

    // Caso 1: Hombre adulto con dieta mixta
    const test1 = new Omega3Ingest(
        30,                 // edad
        "male",            // género
        false,             // embarazo
        false,             // lactancia
        2,                 // lino (cucharadas/semana)
        2,                 // chía (cucharadas/semana)
        3,                 // nueces (porciones/semana)
        2,                 // canola (cucharadas/semana)
        1,                 // linaza (cucharadas/semana)
        2,                 // pescado (porciones/semana)
        250               // suplemento omega 3 (mg/día)
    );

    test1.dailyConsumption();
    console.log("Prueba 1 - Hombre adulto con dieta mixta:");
    console.log("Evaluación:", test1.Evaluation);
    console.log("\n");

    // Caso 2: Mujer embarazada vegetariana
    const test2 = new Omega3Ingest(
        25,                // edad
        "female",          // género
        true,              // embarazo
        false,             // lactancia
        4,                 // lino (cucharadas/semana)
        4,                 // chía (cucharadas/semana)
        5,                 // nueces (porciones/semana)
        3,                 // canola (cucharadas/semana)
        2,                 // linaza (cucharadas/semana)
        0,                 // pescado (porciones/semana)
        0                  // suplemento omega 3 (mg/día)
    );

    test2.dailyConsumption();
    console.log("Prueba 2 - Mujer embarazada vegetariana:");
    console.log("Evaluación:", test2.Evaluation);
    console.log("\n");

    // Caso 3: Mujer en lactancia con suplementación
    const test3 = new Omega3Ingest(
        28,                // edad
        "female",          // género
        false,             // embarazo
        true,              // lactancia
        1,                 // lino (cucharadas/semana)
        1,                 // chía (cucharadas/semana)
        2,                 // nueces (porciones/semana)
        1,                 // canola (cucharadas/semana)
        1,                 // linaza (cucharadas/semana)
        3,                 // pescado (porciones/semana)
        500                // suplemento omega 3 (mg/día)
    );

    test3.dailyConsumption();
    console.log("Prueba 3 - Mujer en lactancia con suplementación:");
    console.log("Evaluación:", test3.Evaluation);
    console.log("\n");

    // Caso 4: Adolescente con dieta deficiente
    const test4 = new Omega3Ingest(
        15,                // edad
        "male",           // género
        false,            // embarazo
        false,            // lactancia
        0,                // lino (cucharadas/semana)
        1,                // chía (cucharadas/semana)
        1,                // nueces (porciones/semana)
        0,                // canola (cucharadas/semana)
        0,                // linaza (cucharadas/semana)
        0,                // pescado (porciones/semana)
        0                 // suplemento omega 3 (mg/día)
    );

    test4.dailyConsumption();
    console.log("Prueba 4 - Adolescente con dieta deficiente:");
    console.log("Evaluación:", test4.Evaluation);
    console.log("\n");
}

// Ejecutar las pruebas
testOmega3Ingest();