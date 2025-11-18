class KetoCalculator {
    _totalCarbs;
    _fiber;
    _sugarAlcohols;

    constructor(totalCarbs, fiber, sugarAlcohols) {
        this._totalCarbs = totalCarbs;
        this._fiber = fiber;
        this._sugarAlcohols = sugarAlcohols;
    }

    get netCarbs() {
        const netCarbs = this._totalCarbs - this._fiber - (this._sugarAlcohols * 0.5);
        return Math.max(0, Math.round(netCarbs * 10) / 10);
    }

    get category() {
        const net = this.netCarbs;

        if (net < 20) {
            return {
                name: 'Cetosis profunda',
                description: 'Te encuentras en cetosis profunda. Ideal para máxima quema de grasa.'
            };
        } else if (net <= 50) {
            return {
                name: 'Zona keto',
                description: 'Te mantienes en zona cetogénica. La mayoría de personas permanecen en cetosis con este nivel.'
            };
        } else if (net <= 100) {
            return {
                name: 'Salida de cetosis',
                description: 'Probablemente estés saliendo de cetosis. Considera reducir los carbohidratos.'
            };
        } else {
            return {
                name: 'No cetogénico',
                description: 'No estás en cetosis con este nivel de carbohidratos netos.'
            };
        }
    }
}
