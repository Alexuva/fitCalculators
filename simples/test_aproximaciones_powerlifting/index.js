/**
 * Calculadora aproximaciones powerlifting
 * Datos necesarios: 
 * - Ejercicio
 * 	- Sentadilla
 * 	- Press banca
 * 	- Peso muerto
 * - 1RM actual en el ejercicio (permitir 1 decimal)
 * - Peso objetivo de la primera serie efectiva (PO permitir 1 decimal)
 * - Número de repeticiones de la primera serie efectiva (NR entero)
 * - RPE programado de la primera serie efectiva (RPE programado)
 * - ¿Cómo te sientes o cómo esperas sentirte ese día?
 * 	- Pletórico, a tope - a 
 * 	- Con buenas sensaciones, con energía - b
 * 	- Algo regular y cansado, mejorable - c
 * 	- Muy cansado, con malas sensaciones - d
 * - RPE (1-10) de la primera serie de aproximación
 * - RPE (1-10) de la segunda serie de aproximación
 */	


class Powerlifting {
	_exercise;
	_rm; //1RM 
	_objectiveWeight; //Peso Objetivo 
	_reps; //Numero de repeticiones de la primera serie efectiva
	_rpe;
	_feeling; //A,B,C,D
	_rpe1; //Primera serie de aproximacion
	_rpe2; //Segunda serie de aproximacion

	_totalNR;
	_totalRPE;
	_totalS1;
	_totalS2;
	_totalS3;

	constructor(exercise, rm, objectiveWeight, reps, rpe, feeling, rpe1, rpe2) {
		this._exercise = exercise;
		this._rm = rm;
		this._objectiveWeight = objectiveWeight;
		this._reps = reps;
		this._rpe = rpe;
		this._feeling = feeling;
		this._rpe1 = rpe1;
		this._rpe2 = rpe2;
	}

	calculateNR(){
		if(this._reps > 6){
			this._totalNR = 5;
			return this._totalNR;
		}else if(this._reps <= 6){
			this._totalNR = Math.round(0.67 * this._reps);
			return this._totalNR;
		}
	}

	calculateRPE(){
		let maxRep = this.calculateNR();

		if(this._rpe > 8){
			this._totalRPE = Math.min(maxRep, Math.round(0.50 * this._reps));
			return this._totalRPE;
		}else if(this._rpe <= 8){
			this._totalRPE = Math.min(maxRep, Math.round(0.67 * this._reps));
			return this._totalRPE;
		}
	}

	firstApproximation(){

		let total = this._objectiveWeight / this._rm;

		if(total <= 0.8){
			if(this._reps <= 6){
				if(this._feeling === 'a'){
					this._totalS1 = parseFloat((0.72 * this._objectiveWeight).toFixed(1))
					return this._totalS1;		
				}else if(this._feeling === 'b'){
					this._totalS1 = parseFloat((0.68 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'c'){
					this._totalS1 = parseFloat((0.63 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'd'){
					this._totalS1 = parseFloat((0.6 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}
			}else if(this._reps > 6){
				if(this._feeling === 'a'){
					this._totalS1 = parseFloat((0.7 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'b'){
					this._totalS1 = parseFloat((0.65 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'c'){
					this._totalS1 = parseFloat((0.6 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'd'){
					this._totalS1 = parseFloat((0.55 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}
			}
		}else if(total > 0.8){
			if(this._reps <= 6){
				if(this._feeling === 'a'){
					this._totalS1 = parseFloat((0.75 * this._objectiveWeight).toFixed(1))
					return this._totalS1;		
				}else if(this._feeling === 'b'){
					this._totalS1 = parseFloat((0.72 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'c'){
					this._totalS1 = parseFloat((0.68 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'd'){
					this._totalS1 = parseFloat((0.65 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}
			}else if(this._reps > 6){
				if(this._feeling === 'a'){
					this._totalS1 = parseFloat((0.72 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'b'){
					this._totalS1 = parseFloat((0.68 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'c'){
					this._totalS1 = parseFloat((0.63 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}else if(this._feeling === 'd'){
					this._totalS1 = parseFloat((0.6 * this._objectiveWeight).toFixed(1))
					return this._totalS1;
				}
			}
		}
	}

	secondApproximation(){
		if(this._rpe1 < 5){
			this._totalS2 = parseFloat((this._totalS1 * (1.0 + (0.40 * (this._rpe1 / 10)))).toFixed(1))
			return this._totalS2;
		}else if(this._rpe1 >= 5 && this._rpe1 <= 8){
			this._totalS2 = parseFloat((this._totalS1 * (1.0 + (0.25 * (this._rpe1 / 10)))).toFixed(1))
			return this._totalS2;
		}else{
			this._totalS2 = parseFloat((this._totalS1 * (1.0 + (0.10 * (this._rpe1 / 10)))).toFixed(1))
			return this._totalS2;
		}
	}

	thirdApproximation(){
		if(this._rpe2 < 5){
			this._totalS3 = parseFloat((this._totalS2 * (1.0 + (0.40 * (this._rpe2 / 10)))).toFixed(1))
		}else if(this._rpe2 >= 5 && this._rpe2 <= 8){
			this._totalS3 = parseFloat((this._totalS2 * (1.0 + (0.25 * (this._rpe2 / 10)))).toFixed(1))
		}else{
			this._totalS3 = parseFloat((this._totalS2 * (1.0 + (0.10 * (this._rpe2 / 10)))).toFixed(1))
		}

		let minS3 = parseFloat((0.83 * this._objectiveWeight).toFixed(1));
		let maxS3 = parseFloat((0.95 * this._objectiveWeight).toFixed(1));

		if(this._totalS3 < minS3) {
			this._totalS3 = minS3;
		} else if(this._totalS3 > maxS3) {
			this._totalS3 = maxS3;
		}

		return this._totalS3;
	}

	get Approximations(){

		this.calculateRPE();

		let results = {
			S1: this.firstApproximation(),
			S2: this.secondApproximation(),
			S3: this.thirdApproximation(),
			reps: this._totalRPE
		}

		return results;

	}

}



// Caso 1: Reps > 6
const test1 = new Powerlifting('Sentadilla', 120, 100, 6, 9, 'b', 7, 8);
console.log(test1.Approximations);
