/**
 * Calculadora de hábitos saludables
 * Datos necesarios: 
 * - Sexo: Hombre o mujer
 * - Edad: minimo 16
 * - Altura (cm)
 * - Peso (kgs)
 * - Porcentaje de grasa corporal (%)
 * - Vasos de agua diarios
 *      - 1-2 vasos (0.25 - 0.5L)
 *      - 3-4 vasos (0.75 - 1L)
 *      - 5-6 vasos (1.25L - 1.5L)
 *      - 7-8 vasos (1.75L - 2L)
 *      - Más de 8 vasos (>2L)
 * - Porciones de fruta y verdura diarias
 *      - 1-2 porciones
 *      - 3-4 porciones
 *      - 5 porciones
 *      - Más de 5 porciones
 * - Horas de sueño diarios
 *      - Menos de 5 horas
 *      - 5-6 horas
 *      - 6-7 horas
 *      - 7-9 horas
 *      - Más de 9 horas
 * - Horas sentado
 * 			- Más de 10 horas
 * 			- 8-10 horas
 * 			- 6-8 horas
 * 			- 4-6 horas
 * 			- Menos de 4 horas
 * - Pasos caminan en promedio al día
 * 			- Menos de 3000 pasos
 * 			- 3000-4000 pasos
 * 			- 4000-6000 pasos
 * 			- 6000-8000 pasos
 * 			- Más de 8000 pasos
 * - Ejercicio moderado-intenso por semana
 * 			- Nada
 * 			- Menos de 1 hora
 * 			- 1-2 horas
 * 			- 2-3 horas
 *      - Más de 3 horas
 * - Fumas
 * 			- Si, más de 20 cigarrillos al día
 * 			- Si, 10-20 cigarrillos al día
 * 			- Si, menos 10 cigarrillos al día
 * 			- Si, pero solo ocasionalmente
 * 			- No fumo
 * - Consumo de alcohol a la semana
 * 			- Más de 14 copas
 * 			- 7-14 copas
 * 			- 4-6 copas
 * 			- 1-3 copas
 * 			- Ninguna
 * - Frecuencia de estrés
 * 			- En todos los momentos del día
 * 			- Algunas veces al día
 * 			- Algunas veces por semana
 * 			- Solamente de manera ocasional
 * 			- Prácticamente nunca
 */	

class HealthyHabits {
	_gender;
	_age;
	_height;
	_weight;
	_fatPercentage;
	_water;
	_fruits;
	_sleep;
	_seated;
	_steps;
	_exerciseTime;
	_smoking;
	_alcohol;
	_stress;
	_IMC;
	_Fat;
	_TotalPoints;
	_State;

	_fatLevels = {
    "men": {
        "15-39": {
            "low": { "max": null, "min": 8, "points": 4 },
            "normal": { "max": 20, "min": 8, "points": 0 },
            "high": { "max": 25, "min": 20, "points": -2 },
            "veryHigh": { "max": 25, "min": null, "points": -4 }
        },
        "40-59": {
            "low": { "max": null, "min": 11, "points": 4 },
            "normal": { "max": 22, "min": 11, "points": 0 },
            "high": { "max": 28, "min": 22, "points": -2 },
            "veryHigh": { "max": 28, "min": null, "points": -4 }
        },
        "60+": {
            "low": { "max": null, "min": 13, "points": 4 },
            "normal": { "max": 25, "min": 13, "points": 0 },
            "high": { "max": 30, "min": 25, "points": -2 },
            "veryHigh": { "max": 30, "min": null, "points": -4 }
        }
    },
    "women": {
        "15-39": {
            "low": { "max": null, "min": 16, "points": 4 },
            "normal": { "max": 28, "min": 16, "points": 0 },
            "high": { "max": 39, "min": 28, "points": -2 },
            "veryHigh": { "max": 39, "min": null, "points": -4 }
        },
        "40-59": {
            "low": { "max": null, "min": 18, "points": 4 },
            "normal": { "max": 30, "min": 18, "points": 0 },
            "high": { "max": 40, "min": 30, "points": -2 },
            "veryHigh": { "max": 40, "min": null, "points": -4 }
        },
        "60+": {
            "low": { "max": null, "min": 20, "points": 4 },
            "normal": { "max": 32, "min": 20, "points": 0 },
            "high": { "max": 42, "min": 32, "points": -2 },
            "veryHigh": { "max": 42, "min": null, "points": -4 }
        }
    }
	}

	constructor(
		gender,
		age,
		height,
		weight,
		fatPercentage,
		water,
		fruits,
		sleep,
		seated,
		steps,
		exerciseTime,
		smoking,
		alcohol,
		stress,	
	){
		this._gender = gender;
		this._age = age;
		this._height = height;
		this._weight = weight;
		this._fatPercentage = fatPercentage;
		this._water = water;
		this._fruits = fruits;
		this._sleep = sleep;
		this._seated = seated;
		this._steps = steps;
		this._exerciseTime = exerciseTime;
		this._smoking = smoking;
		this._alcohol = alcohol;
		this._stress = stress;
	}

	get IMC(){
		const value = this._weight / ((this._height / 100) ** 2);

		if (value < 18.5) {
			this._IMC = 0
		}else if(value >= 18.5 && value <= 24.9){
			this._IMC = 4
		}else if(value >= 25 && value <= 29.9){
			this._IMC = 2
		}else{
			this._IMC = 0
		}

		return this._IMC;
	}

	get Fat(){
		const ageRanges = Object.keys(this._fatLevels[this._gender]);
		const ageRange = ageRanges.find(range => {
			if (range.startsWith('>')) {
					return this._age > parseInt(range.substring(1));
			} else {
					const [min, max] = range.split('-');
					return (this._age >= parseInt(min) && this._age <= parseInt(max));
			}
		});

		const levels = this._fatLevels[this._gender][ageRange];
		for (const level in levels) {
			const { min, max, points } = levels[level];
			if (max === null && this._fatPercentage < min) {
					this._Fat = points;
					return this._Fat;
			} else if (min === null && this._fatPercentage > max) {
					this._Fat = points;
					return this._Fat;
			} else if (this._fatPercentage >= min && this._fatPercentage <= max) {
					this._Fat = points;
					return this._Fat;	
			}
		}
	}

	get TotalPoints(){
		const points = this._IMC + this._Fat + this._water + this._fruits + this._sleep + this._seated + this._steps + this._exerciseTime + this._smoking + this._alcohol + this._stress;
		console.log(points)
		if(points >= 0 && points <= 9){
			this._TotalPoints = points;
			this._State = 'En general, tienes unos hábitos muy poco saludables.';
		}else if(points >= 10 && points  <= 19){
			this._TotalPoints = points;
			this._State ='En general, tienes unos hábitos poco saludables.';
		}else if(points >= 20 && points <= 29){
			this._TotalPoints = points;
			this._State ='En general, tienes unos hábitos algo saludables.';
		}else if(points >= 30 && points <= 39){
			this._TotalPoints = points;
			this._State ='En general, tienes unos hábitos saludables.';
		}else{
			this._TotalPoints = points;
			this._State ='En general, tienes unos hábitos muy saludables.';
		}

		return this._State;

	}

}

const CALCULATE = new HealthyHabits(
	"men",
	25,
	170,
	70,
	10,
	4,
	4,
	4,
	4,	
	4,
	4,
	4,
	4,
	4
)
console.log('gender', CALCULATE._gender)
console.log('age',CALCULATE._age)
console.log('height', CALCULATE._height)
console.log('weight', CALCULATE._weight)
console.log('fatPer',CALCULATE._fatPercentage)
console.log('imc', CALCULATE.IMC)
console.log('fatPoints',CALCULATE.Fat)
console.log('totalPoints', CALCULATE.TotalPoints)
console.log('points', CALCULATE._TotalPoints)