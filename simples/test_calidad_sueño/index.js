/**
 * Calculadora de calidad de sueño
 * Datos necesarios: 
 * - Edad: minimo 16
 * - Horas de sueño diarios (permitir 1 decimal)
 * - Tiempo que tardas en dormirte 
 * 		- Más de 60 minutos
 * 		- Entre 45-60 minutos
 *  	- Entre 30-45 minutos
 *  	- Entre 15-30 minutos
 *  	- Menos de 15 minutos
 * - Cuantas veces te desvelas por la noche
 * 		- Mas de 4 veces
 *    - Entre 3-4 veces
 *    - 2 veces
 *    - 1 vez
 *    - No me despierto ninguna vez
 * - Cuanto tiempo permaneces despierto en total en esos desvelos
 *  	- Más de 60 minutos
 * 		- Entre 45-60 minutos
 * 		- Entre 30-45 minutos
 * 		- Entre 15-30 minutos
 * 		- Menos de 15 minutos
 * - A qué hora te acuestas habitualmente entre semana
 * 		- Nunca a la misma hora (varía más de 2 horas cada día)
 * 		- Casi nunca a la misma hora (varía entre 1 y 2 horas)
 * 		- A veces a la misma hora, pero suele variar entre 30-60 minutos cada día
 *    - Casi siempre a la misma hora, pero suele variar entre 15-30 minutos cada día
 * 		- Siempre a la misma hora (mas o menos 10 minutos de diferencia)
 * - A que hora te levantas habitualmente entre semana
 * 		- Nunca a la misma hora (varía más de 2 horas cada día)
 * 		- Casi nunca a la misma hora (varía entre 1 y 2 horas)
 * 		- A veces a la misma hora, pero suele variar entre 30-60 minutos cada día
 * 		- Casi siempre a la misma hora, aunque varía entre 15-30 minutos cada día
 *  	- Siempre a la misma hora (10 minutos de diferencia)
 * - Cuánto tiempo antes de acostarte dejas de usar dispositivos electrónicos (móvil, tablet, ordenador, tv...)
 * 		- Los uso hasta que me duermo
 * 		- Lo dejo 30 minutos antes
 * 		- Lo dejo 1 hora antes
 * 		- Lo dejo 2 horas antes
 * 		- Lo dejo más de 2 horas antes
 * - Cuál es el ambiente en tu dormitorio?
 * 		- Ruidoso, con luz y temperatura inadecuada
 * 		- Con algún ruido y luz, temperatura poco adecuada
 * 		- Relativamente silencioso y oscuro
 * 		- Bastante silencioso y oscuro
 * 		- Totalmente silencioso, oscuro y temperatura ideal
 * - Cuánto tiempo dejas pasar entre la última comida importante y el momento de acostarte
 *    - Menos de 30 minutos
 *    - Entre 30-60 minutos
 * 		- Entre 1-2 horas
 * 		- Entre 2-3 horas
 * 		- Más de 3 horas
 * - Consumes alguna de estas sustancias en las horas previas a dormir de manera habitual? (café, alcohol, tabaco, refrescos con cafeína)
 *     - Consumo varias de estas sustancias 2 horas antes
 *     - Consumo una de estas sustancias 2 horas antes
 *     - Consumo alguna de estas sustancias 4 horas antes
 *     - Consumo alguna de estas sustancias 6 horas antes
 *     - No consumo ninguna de estas sustancias
 * - Realizas actividad física intensa en las horas previas a dormir?
 * 		- Hago ejercicio intenso 1 hora antes
 * 		- Hago ejercicio intenso 2 horas antes
 * 		- Hago ejercicio moderado 2 horas antes
 * 		- Hago ejercicio suave 2 horas antes
 * 		- No hago ejercicio en las 3 horas previas
 */	

class SleepQuality {

	_age;
	_totalSleepHours;
	_totalSleepHourPoints;
	_fallAsleep;
	_timesAwake;
	_timesAwakeDuration;
	_hourToSleep;
	_hourToWakeUp;
	_electronicsTime;
	_roomQuality;
	_lastMeal;
	_caffeine;
	_intenseExercise;
	_State;
	_TotalPoints;

	constructor(
		age,
		totalSleepHours,
		fallAsleep,
		timesAwake,
		timesAwakeDuration,
		hourToSleep,
		hourToWakeUp,
		electronicsTime,
		roomQuality,
		lastMeal,
		caffeine,
		intenseExercise
	){
		this._age = age;
		this._totalSleepHours = totalSleepHours;
		this._fallAsleep = fallAsleep;
		this._timesAwake = timesAwake;
		this._timesAwakeDuration = timesAwakeDuration;
		this._hourToSleep = hourToSleep;
		this._hourToWakeUp = hourToWakeUp;
		this._electronicsTime = electronicsTime;
		this._roomQuality = roomQuality;
		this._lastMeal = lastMeal;
		this._caffeine = caffeine;
		this._intenseExercise = intenseExercise;
	}

	calculateQualitySleepHours(){
		if(this._age >= 13 && this._age <= 17){
			if(this._totalSleepHours < 6){
				this._totalSleepHourPoints = 0;
				return this._totalSleepHourPoints;
			}else if(this._totalSleepHours >= 6 && this._totalSleepHours <= 7){
				this._totalSleepHourPoints = 1;
				return this._totalSleepHourPoints;
			}else if(this._totalSleepHours >= 7 && this._totalSleepHours <= 8){
				this._totalSleepHourPoints = 2;
				return this._totalSleepHourPoints;
			}else if(this._totalSleepHours >= 8 && this._totalSleepHours <= 9){
				this._totalSleepHourPoints = 4;
				return this._totalSleepHourPoints;
			}else if(this._totalSleepHours >= 9 && this._totalSleepHours <= 10){
				this._totalSleepHourPoints = 2;
				return this._totalSleepHourPoints;
			}else if(this._totalSleepHours >= 10 && this._totalSleepHours <= 11){
				this._totalSleepHourPoints = 1;
				return this._totalSleepHourPoints;
			}else{
				this._totalSleepHourPoints = 0;
				return this._totalSleepHourPoints;
			}
		}else{
			if(this._totalSleepHours < 5){
				this._totalSleepHourPoints = 0;
				return this._totalSleepHourPoints;
			}else if(this._totalSleepHours >= 5 && this._totalSleepHours <= 6){
				this._totalSleepHourPoints = 1;
				return this._totalSleepHourPoints;
			}else if(this._totalSleepHours >= 6 && this._totalSleepHours <= 7){
				this._totalSleepHourPoints = 2;
				return this._totalSleepHourPoints;
			}else if(this._totalSleepHours >= 7 && this._totalSleepHours <= 9){
				this._totalSleepHourPoints = 4;
				return this._totalSleepHourPoints;
			}else if(this._totalSleepHours >= 9 && this._totalSleepHours <= 10){
				this._totalSleepHourPoints = 1;
				return this._totalSleepHourPoints;
			}else{
				this._totalSleepHourPoints = 0;
				return this._totalSleepHourPoints;
			}
		}
	}

	get totalPoints(){
		const points = this._totalSleepHourPoints + this._fallAsleep + this._timesAwake + this._timesAwakeDuration + this._hourToSleep + this._hourToWakeUp + this._electronicsTime + this._roomQuality + this._lastMeal + this._caffeine + this._intenseExercise;
		
		if(points >= 0 && points <= 12){
			this._TotalPoints = points;
			this._State = 'Tu calidad de sueño es deficiente';
		}else if(points >= 13 && points  <= 25){
			this._TotalPoints = points;
			this._State ='Tu calidad de sueño es regular';
		}else if(points >= 26 && points <= 38){
			this._TotalPoints = points;
			this._State ='Tu calidad de sueño es buena';
		}else if(points >= 39 && points <= 44){
			this._TotalPoints = points;
			this._State ='Tu calidad de sueño es excelente';
		}

		return this._State;
	}

}

// Create test instance
const sleepTest = new SleepQuality(
	25,              // age
	8,               // totalSleepHours
	4,               // fallAsleep (< 15 minutes)
	4,               // timesAwake (no wakeups)
	4,               // timesAwakeDuration (< 15 minutes)
	4,               // hourToSleep (consistent schedule)
	4,               // hourToWakeUp (consistent schedule)
	3,               // electronicsTime (1 hour before)
	4,               // roomQuality (silent and dark)
	4,               // lastMeal (> 3 hours before)
	4,               // caffeine (no consumption)
	4                // intenseExercise (no exercise 3h before)
);

// Calculate and display results
console.log("Sleep Hours Points:", sleepTest.calculateQualitySleepHours());
console.log("Overall Sleep Quality:", sleepTest.totalPoints);