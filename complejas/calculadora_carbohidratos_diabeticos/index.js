class DiabetesCalculator {
    _totalCarbs;
    _fiber;
    _protein;
    _fat;
    _ratio;

    constructor(totalCarbs, fiber, protein, fat, ratio) {
        this._totalCarbs = totalCarbs;
        this._fiber = fiber;
        this._protein = protein;
        this._fat = fat;
        this._ratio = ratio;
    }

    get availableCarbs() {
        return Math.max(0, this._totalCarbs - this._fiber);
    }

    get insulinUnits() {
        const baseUnits = this.availableCarbs / this._ratio;

        // Ajuste por proteína (58% se convierte a glucosa)
        const proteinEffect = (this._protein * 0.58) / this._ratio;

        // Ajuste por grasa (10% se convierte a glucosa)
        const fatEffect = (this._fat * 0.1) / this._ratio;

        const totalUnits = baseUnits + proteinEffect + fatEffect;

        return Math.round(totalUnits * 10) / 10;
    }

    get immediateInsulin() {
        const baseUnits = this.availableCarbs / this._ratio;
        return Math.round(baseUnits * 10) / 10;
    }

    get delayedInsulin() {
        return Math.round((this.insulinUnits - this.immediateInsulin) * 10) / 10;
    }

    get glycemicImpact() {
        const availableCarbs = this.availableCarbs;

        // Estimación del impacto glucémico
        let impact = availableCarbs * 3; // mg/dL aproximados por gramo de CHO

        // Reducción por grasa (ralentiza absorción)
        if (this._fat > 15) {
            impact *= 0.8;
        } else if (this._fat > 10) {
            impact *= 0.9;
        }

        // Reducción por proteína
        if (this._protein > 20) {
            impact *= 0.9;
        }

        return Math.round(impact);
    }

    get absorptionSpeed() {
        const fatRatio = this._fat / Math.max(1, this.availableCarbs);
        const proteinRatio = this._protein / Math.max(1, this.availableCarbs);

        if (fatRatio > 1 || proteinRatio > 1.5) {
            return 'Lenta (3-4 horas)';
        } else if (fatRatio > 0.5 || proteinRatio > 0.8) {
            return 'Media (2-3 horas)';
        } else {
            return 'Rápida (1-2 horas)';
        }
    }
}
