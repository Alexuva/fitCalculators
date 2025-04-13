/**
 * Calculadora tipo de ayuno intermitente
 * Datos necesarios: 
 * - Has realizado ayuno intermitente antes? 
 * 		- Nunca
 * 		- Alguna vez de forma esporádica
 * 		- Regularmente durante semanas
 * 		- Soy experimentado (meses o años)
 * - Cual es tu horario habitual de comidas?
 * 		- Como a todas horas, sin un patrón regular.
 * 		- Tengo un horario, pero poco estricto
 * 		- Mantengo horarios bastante regulares
 * 		- Tengo horarios muy estrictos
 * - Cómo te sientes cuando pasas varias horas sin comer?
 * 		- Fatal, me mareo o me pongo de muy mal humor
 * 		- Incómodo pero aguanto
 * 		- Normal, puedo funcionar bien
 * 		- Bien, apenas lo noto; incluso me siento mejor
 * - Como describirías tu relación con la comida?
 * 		- Tengo ansiedad por la comida y como por impulso frecuentemente
 * 		- Como cuando tengo hambre, sin prestar mucha atención
 * 		- Soy consciente de lo que como, pero a veces me cuesta controlarme
 * 		- Tengo una relación saludable con la comida y como de manera consciente
 * - Como te afecta el hambre a nivel mental/concentración?
 * 		- Me resulta imposible concentrarme si tengo hambre
 * 		- Me cuesta concentrarme cuando tengo hambre, pero puedo funcionar
 * 		- Noto el hambre pero puedo mantener mi concentración
 * 		- Mantengo claridad mental total. No noto nada el hambre.
 * - Cuál es el objetivo principal con el ayuno?
 * 		- Perder algo de peso
 * 		- Perder peso de manera significativa
 * 		- Mantener la salud y sentirme bien
 * 		- Obtener beneficios metabólicos avanzados
 * - Qué flexibilidad necesitas en tu vida social?
 * 		- Necesito máxima flexibilidad. Salgo muy a menudo a comer/cenar
 * 		- Prefiero bastante flexibilidad. Salgo cada semana a comer/cenar
 * 		- Prefiero algo de flexibilidad. Salgo muy poco a comer/cenar (1-2 veces al mes)
 * 		- No necesito flexibilidad porque puedo adaptarme bien a cualquier situación
 * - Cuál es tu nivel de actividad física?
 * 		- Sedentario (sin ejercicio)
 * 		- Poco activo (ejercicio ocasional, 1-2 veces por semana)
 * 		- Moderadamente activo (ejercicio a menudo, 3-5 veces por semana)
 * 		- Muy activo (ejercicio a diario)
 * - Tienes alguna condición médica que pueda afectar a tu ayuno?
 * 		- Si, necesito comer de manera regular por razones médicas
 * 		- Si, pero puedo adaptarme
 * 		- No tengo condiciones que afecten mi ayuno
 * - Alguna vez has hecho ayuno de más de un día?
 * 		- No, ni de lejos
 * 		- Si, muy pocas veces, pero ha sido insufrible
 * 		- Si, varias veces y me siento bien haciéndolo
 */	

class FastingType{

	_fastingBefore;
	_mealHours;
	_feelingHungry;
	_mealRelationship;
	_hungryFocus;
	_objective;
	_flexibility;
	_activity;
	_medicalCondition;
	_fastingMoreThanOnce;

	constructor(
		fastingBefore,
		mealHours,
		feelingHungry,
		mealRelationship,
		hungryFocus,
		objective,
		flexibility,
		activity,
		medicalCondition,
		fastingMoreThanOnce
	){
		this._fastingBefore = fastingBefore;
		this._mealHours = mealHours;
		this._feelingHungry = feelingHungry;
		this._mealRelationship = mealRelationship;
		this._hungryFocus = hungryFocus;
		this._objective = objective;
		this._flexibility = flexibility;
		this._activity = activity;
		this._medicalCondition = medicalCondition;
		this._fastingMoreThanOnce = fastingMoreThanOnce;
	}

	get fastingType(){

		let fastingType = "";

		if(this._medicalCondition === 0){
			fastingType = "No es recomendable que hagas ayuno. Consulta con tu médico."
			return fastingType;
		}

		const POINTS = this._fastingBefore + this._mealHours + this._feelingHungry + this._mealRelationship + this._hungryFocus + this._objective + this._flexibility + this._activity + this._medicalCondition + this._fastingMoreThanOnce;

		switch(true){
			case (POINTS >= 0 && POINTS <= 5):
				fastingType = "No es recomendable que hagas ayuno.";
			break;
			case (POINTS >= 6 && POINTS <= 10):
				fastingType = "El ayuno que mejor puede encajar contigo es el ayuno 12/12.";
			break;
			case (POINTS >= 11 && POINTS <= 15):
				fastingType = "El ayuno que mejor puede encajar contigo es el ayuno 14/10.";
			break;
			case (POINTS >= 16 && POINTS <= 20):
				fastingType = "El ayuno que mejor puede encajar contigo es el ayuno 16/8.";
			break;
			case (POINTS >= 20 && POINTS <= 26):
				fastingType = "El ayuno que mejor puede encajar contigo es el ayuno 20/4.";
			break;
			case (POINTS >= 27 && POINTS <= 28):
				if(this._mealRelationship >= 2 && this._fastingMoreThanOnce >= 2){
					fastingType = "El ayuno que mejor puede encajar contigo es el ayuno OMAD";
				}else{
					fastingType = "El ayuno que mejor puede encajar contigo es el ayuno 20/4.";
				} 
			break;
			case (POINTS === 29):
				if(this._flexibility >= 2 && this._fastingMoreThanOnce >= 2){
					fastingType = "Podrías intentar el ayuno en días alternos.";
				}else{
					fastingType = "El ayuno que mejor puede encajar contigo es el ayuno OMAD.";
				}
			break;
			case (POINTS >= 30):
				if(this._feelingHungry >= 2 && this._hungryFocus >= 2 && this._fastingMoreThanOnce >= 2){
					fastingType = "Podrías intentar el ayuno 5:2.";
				}else{
					fastingType = "Podrías intentar el ayuno en días alternos."
				}
			break;
		}

		return fastingType;

	}
}

// ... existing code ...

// Test the calculator with sample values
const testFasting = new FastingType(
	2,  // Regular fasting experience
	2,  // Fairly regular meal schedule
	2,  // Normal when hungry
	2,  // Conscious about eating
	2,  // Can maintain focus when hungry
	2,  // Health and wellbeing goal
	2,  // Some flexibility needed
	2,  // Moderately active
	2,  // No medical conditions
	2   // Has done extended fasting
);

console.log(testFasting.fastingType);