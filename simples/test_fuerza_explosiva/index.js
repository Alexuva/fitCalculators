/**
 * Calculadora de fuerza explosiva
 * Datos necesarios: 
 * - Sexo: Hombre o mujer
 * - Edad: minimo 16
 * - Peso corporal (KG)
 * - Altura de salto vertical con contramovimiento (CMJ) en cm
 */


class ExplosiveStrenght {

    _height;
    _weight;
    _gender;
    _age;
    _ageFactor;
    _genderFactor;
    _power;
    _relativePower;
    _explosivePower;
    
    _genderFactors = {
        "men": 1,
        "women": 0.85
    }

    _ageFactors = {
        "16-25": 1,
        "26-35": 0.95,
        "36-45": 0.90,
        "46-55": 0.85,
        "56-65": 0.80,
        ">65": 0.75
    }

    constructor(height, weight, gender, age){
        this._height = height;
        this._weight = weight;
        this._gender = gender;
        this._age = age;
        this.setFactors(age, gender);
    }

    setFactors(age, gender){
        this._genderFactor = this._genderFactors[gender];

        const ageRanges = Object.keys(this._ageFactors);
        const ageRange = ageRanges.find(range => {
            if(range.startsWith('>')){
                return age > parseInt(range.substring(1))
            }else{
                const [min, max] = range.split('-');
                return (age >= parseInt(min) && age <= parseInt(max))
            }
        })

        this._ageFactor = this._ageFactors[ageRange];
    }

    power(){
        let heightPoints = 60.7 * this._height;
        let weightPoints = 45.3 * this._weight;
        let bodyPoints = (heightPoints + weightPoints) - 2055;
        this._power = bodyPoints * this._ageFactor * this._genderFactor;
        return this._power;
    }

    relativePower(){
        this._relativePower = parseFloat((this._power / this._weight).toFixed(1));
        return this._relativePower;
    }

    get explosivePower(){
        
        this.power();
        this.relativePower();

        if(this._relativePower < 30){
            this._explosivePower = "very low";
        }else if(this._relativePower >= 30 && this._relativePower <= 40){
            this._explosivePower = "low";
        }else if(this._relativePower >= 40.1 && this._relativePower <= 50){
            this._explosivePower = "normal"
        }else if(this._relativePower >= 50.1 && this._relativePower <= 60){
            this._explosivePower = "high";
        }else if(this._relativePower >= 60.1 && this._relativePower <= 70){
            this._explosivePower = "veryHigh";
        }else if(this._relativePower >= 70.1){
            this._explosivePower = "excellent";
        }

        return this._explosivePower;
    }

}

const calculator = new ExplosiveStrenght(120, 90, "men", 19);
const explosiveLvl = calculator.explosivePower;
console.log(calculator._power);
console.log(calculator._relativePower);
console.log(explosiveLvl);