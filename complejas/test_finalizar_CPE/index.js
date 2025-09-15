/**
 * Test de finalización del CPE
 *  Datos necesarios:
 *  1. Define tu punto de partida.
 *  - Tienes experiencia realizando ejercicio?
 *      - No, no tengo ninguna experiencia entrenando - 0
 *      - Entreno a nivel usuario, pero no llevo demasiado tiempo (0-12 meses) - 1
 *      - Sí; entreno a menudo desde hace tiempo (>12 meses) - 2
 *  - Cuál es tu experiencia práctica en el sector del fitness?
 *      - Ninguna, empiezo desde cero - 0
 *      - Tengo algo de experiencia: he hecho cursos básicos - 1
 *      - Tengo experiencia profesional directa - 2
 *  - Conoces los conceptos y herramientas fundamentales que se verán en el curso?
 *      - No, necesito aprenderlos desde la base - 0
 *      - Conozco algunos de forma teórica o los he usado de manera puntual - 1
 *      - Sí, los conozco y los he aplicado en proyectos o en mi trabajo - 2
 *  2. Configura tu dedicación semanal
 *  - Cuántas horas de estudio puedes dedicar al día?
 *      - Respuesta mediante selector deslizable de 1 a 8 horas;
 *  - Qué días de la semana vas a estudiar?
 *      - checkbox con los días de la semana
 */

class FinishTimeCPE {
    #experience;
    #workingExperience;
    #knowledge;
    #dailyTime;
    #studyDays;

    constructor(experience = 0, workingExperience = 0, knowledge = 0, dailyTime = 3, studyDays = 4) {
        this.experience = experience;
        this.workingExperience = workingExperience;
        this.knowledge = knowledge;
        this.dailyTime = dailyTime;
        this.studyDays = studyDays;
    }


    set experience(experience){
        this.#experience = experience;
    }

    set workingExperience(workingExperience){
        this.#workingExperience = workingExperience;
    }

    set knowledge(knowledge){
        this.#knowledge = knowledge;
    }

    set dailyTime(dailyTime){
        this.#dailyTime = dailyTime;
    }

    set studyDays(studyDays){
        this.#studyDays = studyDays;
    }

    get total(){

        const neededTime = this.neededTime;
        const dailyTime = this.#dailyTime;
        const studyDays = this.#studyDays;
        const weeklyHours = dailyTime * studyDays;
        const totalWeeks = neededTime / weeklyHours;
        const totalMonths = totalWeeks / 4.345;

        return (totalMonths % 1) >= 0.25 ? Math.ceil(totalMonths) : Math.floor(totalMonths);

    }

    get neededTime() {

        const points = this.#experience + this.#workingExperience + this.#knowledge;

        const pointsMap = {
            0: 1200,
            1: 1133,
            2: 1067,
            3: 1000,
            4: 933,
            5: 867
        };

        return pointsMap[points] || 800;

    }
}

//Ejemplo
const calculator = new FinishTimeCPE(1, 1, 0, 5, [1,2,3,4,5]);
console.log(calculator.total);
