/**
 * Calculadora Riesgo de Deficiencia Vitamina D
 * Datos necesarios: 
 * - Porciones de pescado graso por semana (1 porcion = 400UI)
 * - Porciones de yema de huevo por semana (1 porcion = 20UI)
 * - Porciones de hígado de res por semana (1 porcion = 50UI)
 * - Leche de vaca o lácteos fortificados por semana (100ml = 40UI)
 * - Bebidas vegetales fortificadas por semana (100ml = 40UI)
 * - Suplemento de vitamina D por semana (Dosis diaria en UI)
 * - Exposición solar diaria en minutos
 * - Zona geográfica (latitud)
 *      - Tropical (<30°)
 *      - Subtropical (30 - 50)
 *      - Polar (>50)
 * - Tipo de piel:
 *      - Muy Clara
 *      - Clara
 *      - Media
 *      - Oscura
 */

class VitamineDeficit {

    _fish;
    _egg;
    _meat;
    _milk;
    _vegetable;
    _vitamin;
    _solar;
    _latitude;
    _skin;

    _fishUI;
    _eggUI;
    _meatUI;
    _milkUI;
    _totalAnimalUI;

    _vegetableUI;
    _totalVegetableUI;

    _vitaminUI;
    _totalSuplementUI;

    _solarUI;
    _totalSolarUI;

    constructor(fish, egg, meat, milk, vegetable, vitamin, solar, latitude, skin) {
        this._fish = fish;
        this._egg = egg;
        this._meat = meat;
        this._milk = milk;
        this._vegetable = vegetable;
        this._vitamin = vitamin;
        this._solar = solar;
        this._latitude = latitude;
        this._skin = skin;
    }

    calculateUI(){
        this._fishUI = Math.round((this._fish * 400) / 7);
        this._eggUI = Math.round((this._egg * 20) / 7);
        this._meatUI = Math.round((this._meat * 50) / 7);
        this._milkUI = Math.round((this._milk * 0.4));

        this._totalAnimalUI = this._fishUI + this._eggUI + this._meatUI + this._milkUI;

        this._vegetableUI = Math.round((this._vegetable * 0.4));
        this._totalVegetableUI = this._vegetableUI;

        this._vitaminUI = this._vitamin;
        this._totalSuplementUI = this._vitaminUI;

        if(this._latitude === 'tropical'){
            if(this._skin === 'very_bright'){
                this._solarUI = Math.round((this._solar * 20 * 1));
            }else if(this._skin ==='bright'){
                this._solarUI = Math.round((this._solar * 20 * 0.8));
            }else if(this._skin ==='medium'){
                this._solarUI = Math.round((this._solar * 20 * 0.6));
            }else if(this._skin ==='dark'){
                this._solarUI = Math.round((this._solar * 20 * 0.4));
            }
        }else if(this._latitude === 'subtropical'){
            if(this._skin === 'very_bright'){
                this._solarUI = Math.round((this._solar * 10 * 1));
            }else if(this._skin ==='bright'){
                this._solarUI = Math.round((this._solar * 10 * 0.8));
            }else if(this._skin ==='medium'){
                this._solarUI = Math.round((this._solar * 10 * 0.6));
            }else if(this._skin ==='dark'){
                this._solarUI = Math.round((this._solar * 10 * 0.4));
            }
        }else{
            if(this._skin === 'very_bright'){
                this._solarUI = Math.round((this._solar * 5 * 1));
            }else if(this._skin ==='bright'){
                this._solarUI = Math.round((this._solar * 5 * 0.8));
            }else if(this._skin ==='medium'){
                this._solarUI = Math.round((this._solar * 5 * 0.6));
            }else if(this._skin ==='dark'){
                this._solarUI = Math.round((this._solar * 5 * 0.4));
            }
        }

        this._totalSolarUI = this._solarUI;
    }

    get TotalUI(){
        this.calculateUI();
        return this._totalAnimalUI + this._totalVegetableUI + this._totalSuplementUI + this._totalSolarUI;
    }

    get DeficitRisk(){
        let total = this.TotalUI;
        if(total < 400){
            return 'high';
        }else if(total >= 400 && total < 599){
            return 'medium';
        }else{
            return 'low';
        }
    }

}

// Ejemplo 1: Riesgo Alto
const ejemplo1 = new VitamineDeficit(
    2,
    3,              
    1,              
    200,           
    150,              
    400,              
    15,              
    'subtropical',  
    'medium'        
);
console.log(ejemplo1.TotalUI);      // ~250 UI/día
console.log(ejemplo1.DeficitRisk);  // 'high'

// Ejemplo 2: Riesgo Medio
const ejemplo2 = new VitamineDeficit(
    3,              // 3 porciones de pescado graso/semana
    3,              // 3 yemas de huevo/semana
    2,              // 2 porciones de hígado/semana
    200,            // 200ml de leche/día
    100,            // 100ml bebidas vegetales/día
    100,            // 100 UI suplemento/día
    15,             // 15 minutos de sol/día
    'tropical',     // Zona tropical
    'bright'        // Piel clara
);
console.log(ejemplo2.TotalUI);      // ~500 UI/día
console.log(ejemplo2.DeficitRisk);  // 'medium'

// Ejemplo 3: Riesgo Bajo
const ejemplo3 = new VitamineDeficit(
    5,              // 5 porciones de pescado graso/semana
    4,              // 4 yemas de huevo/semana
    3,              // 3 porciones de hígado/semana
    300,            // 300ml de leche/día
    200,            // 200ml bebidas vegetales/día
    400,            // 400 UI suplemento/día
    30,             // 30 minutos de sol/día
    'tropical',     // Zona tropical
    'very_bright'   // Piel muy clara
);
console.log(ejemplo3.TotalUI);      // ~800 UI/día
console.log(ejemplo3.DeficitRisk);  // 'low'
