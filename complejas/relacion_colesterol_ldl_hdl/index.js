/**
 * Calculadora Relación Colesterol LDL/HDL
 * Datos necesarios: 
 * - Colesterol LDL mg/dl (número entre 30 y 300)
 * - Colesterol HDL mg/dl (número entre 10 y 150)
 */

class ColesterolRelation {
    _ldl;
    _hdl;
    _colesterolRelation;
    _riskLvl;

    constructor(ldl, hdl){
        this._ldl = ldl;
        this._hdl = hdl;
    }

    get colesterolRelation(){
        this._colesterolRelation = parseFloat((this._ldl / this._hdl).toFixed(2))
        return this._colesterolRelation;
    }

    get riskLvl(){
        if(this._colesterolRelation < 2.0){
            this._riskLvl = 'Low'
        }else if(this._colesterolRelation >= 2.0 && this._colesterolRelation <= 3.5){
            this._riskLvl = 'Normal'
        }else{
            this._riskLvl = 'High'
        }
        return this._riskLvl;
    }

}

const CALCULATOR = new ColesterolRelation(120, 60)
console.log(CALCULATOR.colesterolRelation);
console.log(CALCULATOR.riskLvl);