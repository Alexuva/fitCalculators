/**
 * Calculadora Riesgo Cardiovascular
 * Datos necesarios: 
 * - Sexo (Hombre o Mujer)
 * - Edad (entre 20 y 80 años)
 * - Colesterol total (mg/dL) (Entre 100 y 400)
 * - Colesterol HDL (mg/dL) (Entre 10 y 150)
 * - Presión arterial sistólica (mmHg) (Entre 90 y 200)
 * - Tabaquismo (Si o No)
 * - Tratamiento antihipertensivo (Si o No)
 * - Diabetes (Si o No)
 */

class CardiovascularRisk {

    _gender;
    _age;
    _totalCholesterol;
    _hdlCholesterol;
    _systolicBloodPressure;
    _smoking;
    _antihypertensiveTreatment;
    _diabetes;

    _riskLevel = {
        "men" : {            
            "age": [
                { min: 20, max: 34, points: -9 },
                { min: 35, max: 39, points: -4 },
                { min: 40, max: 44, points: 0 },
                { min: 45, max: 49, points: 3 },
                { min: 50, max: 54, points: 6 },
                { min: 55, max: 59, points: 8 },
                { min: 60, max: 64, points: 10 },
                { min: 65, max: 69, points: 11 },
                { min: 70, max: 74, points: 12 },
                { min: 75, max: 80, points: 13 }
            ],
            "totalCholesterol" : [
                { min: 160, max: null, points: 0 },
                { min: 160, max: 199, points: 1 },
                { min: 200, max: 239, points: 2 },
                { min: 240, max: 279, points: 3 },
                { min: null, max: 280, points: 4 }
            ],
            "hdlCholesterol" : [
                { min: 40, max: null, points: 2 },
                { min: 40, max: 49, points: 1 },
                { min: 50, max: 59, points: 0 },
                { min: null, max: 60, points: -1 }
            ],
            "systolicBloodPressure" : {
                "noAntihypertensiveTreatment" : [
                    { min: 120, max: null, points: 0 },
                    { min: 120, max: 129, points: 1 },
                    { min: 130, max: 139, points: 2 },
                    { min: 140, max: 159, points: 3 },
                    { min: null, max: 160, points: 4 }
                ],
                "antihypertensiveTreatment" : [
                    { min: 120, max: null, points: 0 },
                    { min: 120, max: 129, points: 3 },
                    { min: 130, max: 139, points: 4 },
                    { min: 140, max: 159, points: 5 },
                    { min: null, max: 160, points: 6 }
                ]
            },
            "smoking" : {
                "no" : 0,
                "yes" : 2
            },
            "diabetes" : {
                "no" : 0,
                "yes" : 2
            }
        },
        "women" : {
            "age" : [
                { min: 20, max: 34, points: -7 },
                { min: 35, max: 39, points: -3 },
                { min: 40, max: 44, points: 0 },
                { min: 45, max: 49, points: 3 },
                { min: 50, max: 54, points: 6 },
                { min: 55, max: 59, points: 8 },
                { min: 60, max: 64, points: 10 },
                { min: 65, max: 69, points: 12 },
                { min: 70, max: 74, points: 14 },
                { min: 75, max: 80, points: 16 }
            ],
            "totalCholesterol" : [
                { min: 160, max: null, points: 0 },
                { min: 160, max: 199, points: 1 },
                { min: 200, max: 239, points: 2 },
                { min: 240, max: 279, points: 3 },
                { min: null, max: 280, points: 4 }
            ],
            "hdlCholesterol" : [
                { min: 40, max: null, points: 2 },
                { min: 40, max: 49, points: 1 },
                { min: 50, max: 59, points: 0 },
                { min: null, max: 60, points: -1 }
            ],
            "systolicBloodPressure" : {
                "noAntihypertensiveTreatment" : [
                    { min: 120, max: null, points: 0 },
                    { min: 120, max: 129, points: 1 },
                    { min: 130, max: 139, points: 2 },
                    { min: 140, max: 159, points: 3 },
                    { min: null, max: 160, points: 4 }
                ],
                "antihypertensiveTreatment" : [
                    { min: 120, max: null, points: 0 },
                    { min: 120, max: 129, points: 3 },
                    { min: 130, max: 139, points: 4 },
                    { min: 140, max: 159, points: 5 },
                    { min: null, max: 160, points: 6 }
                ]
            },
            "smoking" : {
                "no" : 0,
                "yes" : 2
            },
            "diabetes" : {
                "no" : 0,
                "yes" : 2
            }
        }
    };

    constructor(gender, age, totalCholesterol, hdlCholesterol, systolicBloodPressure, smoking, antihypertensiveTreatment, diabetes){
        this._gender = gender;
        this._age = age;
        this._totalCholesterol = totalCholesterol;
        this._hdlCholesterol = hdlCholesterol;
        this._systolicBloodPressure = systolicBloodPressure;
        this._smoking = smoking;
        this._antihypertensiveTreatment = antihypertensiveTreatment;
        this._diabetes = diabetes;
    }

    getAgePoints(){
        let agePoints = 0;
        for(let range of this._riskLevel[this._gender].age){
            if(this._age >= range.min && this._age <= range.max){
                agePoints = range.points;
                break;
            } 
        }

        return agePoints;
    }

    getTotalCholesterolPoints() {
        let chrolesterolPoints = 0;
        for(let range of this._riskLevel[this._gender].totalCholesterol){
            if(range.max === null){
                if(this._totalCholesterol < range.min){
                    chrolesterolPoints = range.points;
                    break;
                }
            }else if(range.min === null){
                if(this._totalCholesterol >= range.max){
                    chrolesterolPoints = range.points;
                    break;
                }
            }else if(this._totalCholesterol >= range.min && this._totalCholesterol <= range.max){
                chrolesterolPoints = range.points;
                break;
            }
        }

        return chrolesterolPoints;
    }

    getHdlCholesterolPoints() {
        let hdlCholesterolPoints = 0;
        for(let range of this._riskLevel[this._gender].hdlCholesterol){
            if(range.max === null){
                if(this._hdlCholesterol < range.min){
                    hdlCholesterolPoints = range.points;
                    break;
                }
            }else if(range.min === null){
                if(this._hdlCholesterol >= range.max){
                    hdlCholesterolPoints = range.points;
                    break;
                }
            }else if(this._hdlCholesterol >= range.min && this._hdlCholesterol <= range.max){
                hdlCholesterolPoints = range.points;
                break;
            }
        }

        return hdlCholesterolPoints;
    }

    getSystolicBloodPressurePoints() {
        let systolicBloodPressurePoints = 0;
        if(this._antihypertensiveTreatment === "no"){
            for(let range of this._riskLevel[this._gender].systolicBloodPressure.noAntihypertensiveTreatment){
                if(range.max === null){
                    if(this._systolicBloodPressure < range.min){
                        systolicBloodPressurePoints = range.points;
                        break;
                    }
                }else if(range.min === null){
                    if(this._systolicBloodPressure >= range.max){
                        systolicBloodPressurePoints = range.points;
                        break;
                    }
                }else if(this._systolicBloodPressure >= range.min && this._systolicBloodPressure <= range.max){
                    systolicBloodPressurePoints = range.points;
                    break;
                }
            }
        }else{
            for(let range of this._riskLevel[this._gender].systolicBloodPressure.antihypertensiveTreatment){
                if(range.max === null){
                    if(this._systolicBloodPressure < range.min){
                        systolicBloodPressurePoints = range.points;
                        break;
                    }
                }else if(range.min === null){
                    if(this._systolicBloodPressure >= range.max){
                        systolicBloodPressurePoints = range.points;
                        break;
                    }
                }else if(this._systolicBloodPressure >= range.min && this._systolicBloodPressure <= range.max){
                    systolicBloodPressurePoints = range.points;
                    break;
                }
            }
        }

        return systolicBloodPressurePoints;
    }

    getSmokingPoints() {
        return this._riskLevel[this._gender].smoking[this._smoking];
    }

    getDiabetesPoints() {
        return this._riskLevel[this._gender].diabetes[this._diabetes];
    }

}

// Test de la calculadora de riesgo cardiovascular
function testCardiovascularRisk() {
    console.log("=== Iniciando pruebas de la Calculadora de Riesgo Cardiovascular ===\n");

    // Caso de prueba 1: Hombre de mediana edad con valores normales
    const test1 = new CardiovascularRisk(
        "men",           // género
        45,             // edad
        180,            // colesterol total
        50,             // HDL colesterol
        125,            // presión sistólica
        "no",           // fumador
        "no",           // tratamiento antihipertensivo
        "no"            // diabetes
    );

    console.log("Prueba 1 - Hombre con valores normales:");
    console.log("Puntos por edad:", test1.getAgePoints());
    console.log("Puntos por colesterol total:", test1.getTotalCholesterolPoints());
    console.log("Puntos por HDL:", test1.getHdlCholesterolPoints());
    console.log("Puntos por presión sistólica:", test1.getSystolicBloodPressurePoints());
    console.log("Puntos por tabaquismo:", test1.getSmokingPoints());
    console.log("Puntos por diabetes:", test1.getDiabetesPoints());
    console.log("\n");

    // Caso de prueba 2: Mujer mayor con factores de riesgo
    const test2 = new CardiovascularRisk(
        "women",         // género
        65,             // edad
        250,            // colesterol total
        35,             // HDL colesterol
        165,            // presión sistólica
        "yes",          // fumador
        "yes",          // tratamiento antihipertensivo
        "yes"           // diabetes
    );

    console.log("Prueba 2 - Mujer con factores de riesgo:");
    console.log("Puntos por edad:", test2.getAgePoints());
    console.log("Puntos por colesterol total:", test2.getTotalCholesterolPoints());
    console.log("Puntos por HDL:", test2.getHdlCholesterolPoints());
    console.log("Puntos por presión sistólica:", test2.getSystolicBloodPressurePoints());
    console.log("Puntos por tabaquismo:", test2.getSmokingPoints());
    console.log("Puntos por diabetes:", test2.getDiabetesPoints());
    console.log("\n");

    // Caso de prueba 3: Valores límite
    const test3 = new CardiovascularRisk(
        "men",           // género
        20,             // edad mínima
        160,            // colesterol límite inferior
        60,             // HDL alto
        120,            // presión sistólica límite
        "no",           // fumador
        "no",           // tratamiento antihipertensivo
        "no"            // diabetes
    );

    console.log("Prueba 3 - Valores límite:");
    console.log("Puntos por edad:", test3.getAgePoints());
    console.log("Puntos por colesterol total:", test3.getTotalCholesterolPoints());
    console.log("Puntos por HDL:", test3.getHdlCholesterolPoints());
    console.log("Puntos por presión sistólica:", test3.getSystolicBloodPressurePoints());
    console.log("Puntos por tabaquismo:", test3.getSmokingPoints());
    console.log("Puntos por diabetes:", test3.getDiabetesPoints());
}

// Ejecutar las pruebas
testCardiovascularRisk();
