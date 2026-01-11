class FoodItem {
    name;
    carbs;
    fiber;
    erythritol;
    allulose;
    maltitol;
    xylitol;
    sorbitol;
    otherAlcohols;

    constructor(name, carbs, fiber, erythritol, allulose, maltitol, xylitol, sorbitol, otherAlcohols) {
        this.name = name;
        this.carbs = carbs;
        this.fiber = fiber;
        this.erythritol = erythritol;
        this.allulose = allulose;
        this.maltitol = maltitol;
        this.xylitol = xylitol;
        this.sorbitol = sorbitol;
        this.otherAlcohols = otherAlcohols;
    }
}

class DiabeticCarbsCalculator {
    _region;
    _profile;
    _foods;

    constructor(region, profile, foods) {
        this._region = region;
        this._profile = profile;
        this._foods = foods;
    }

    calculateFoodEffectiveCarbs(food) {
        // Step 1: CHO_decl based on region
        let carbsDecl = food.carbs;

        // Step 2: Fiber adjustment
        let fiberAdjustment = 0;
        if (this._region === 'US' && this._profile === 'ADA' && food.fiber >= 5) {
            fiberAdjustment = food.fiber * 0.5;
        }

        let carbsPostFiber = Math.max(0, carbsDecl - fiberAdjustment);

        // Step 3: Sugar alcohols factors based on profile
        let factors = this._getAlcoholFactors();

        // Step 4: Calculate total alcohol discount
        let alcoholDiscount =
            (factors.erythritol * food.erythritol) +
            (factors.allulose * food.allulose) +
            (factors.maltitol * food.maltitol) +
            (factors.xylitol * food.xylitol) +
            (factors.sorbitol * food.sorbitol) +
            (factors.others * food.otherAlcohols);

        // Step 5: Calculate effective carbs
        let effective = Math.max(0, carbsPostFiber - alcoholDiscount);

        return {
            effective: Math.round(effective * 10) / 10,
            fiberAdjusted: fiberAdjustment,
            alcoholsDiscounted: Math.round(alcoholDiscount * 10) / 10
        };
    }

    _getAlcoholFactors() {
        if (this._profile === 'ADA') {
            return {
                erythritol: 1.0,
                allulose: 0.5,
                maltitol: 0.5,
                xylitol: 0.5,
                sorbitol: 0.5,
                others: 0.5
            };
        } else { // Conservador
            return {
                erythritol: 1.0,
                allulose: 0.25,
                maltitol: 0.25,
                xylitol: 0.25,
                sorbitol: 0.25,
                others: 0.25
            };
        }
    }

    get totalEffectiveCarbs() {
        let total = 0;
        this._foods.forEach(food => {
            const result = this.calculateFoodEffectiveCarbs(food);
            total += result.effective;
        });
        return Math.round(total * 10) / 10;
    }

    getRations(rationSize, rounding) {
        const rations = this.totalEffectiveCarbs / rationSize;
        return this._roundRations(rations, rounding);
    }

    _roundRations(value, rounding) {
        const roundingValue = parseFloat(rounding);
        if (roundingValue === 1) {
            return Math.round(value);
        } else {
            return Math.round(value / roundingValue) * roundingValue;
        }
    }

    get classification() {
        const effective = this.totalEffectiveCarbs;
        if (effective < 20) {
            return 'baja';
        } else if (effective <= 40) {
            return 'moderada';
        } else {
            return 'alta';
        }
    }

    getFoodsBreakdown() {
        return this._foods.map(food => {
            const result = this.calculateFoodEffectiveCarbs(food);
            return {
                name: food.name || 'Sin nombre',
                effective: result.effective,
                fiberAdjusted: result.fiberAdjusted,
                alcoholsDiscounted: result.alcoholsDiscounted
            };
        });
    }
}
