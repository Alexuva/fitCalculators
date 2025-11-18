class CalculadoraCargaGlucemica {
    constructor() {
        this.alimentos = [];
    }

    agregarAlimento(alimento) {
        const choDisp = Math.max(0, alimento.carbohidratosTotales - alimento.fibra);

        const igEstimado = this.calcularIGEstimado(alimento, choDisp);

        const cgIndividual = (igEstimado * choDisp) / 100;

        this.alimentos.push({
            ...alimento,
            choDisp,
            igEstimado,
            cgIndividual
        });
    }

    calcularIGEstimado(alimento, choDisp) {
        let igBase = 70;

        // Ajustes por señales
        if (alimento.senales.liquido) igBase += 20;
        if (alimento.senales.zumo) igBase += 10;
        if (alimento.senales.molienda) igBase += 10;
        if (alimento.senales.estructuraIntacta) igBase -= 10;
        if (alimento.senales.cocinadoEnfriado) igBase -= 10;
        if (alimento.senales.madura) igBase += 5;
        if (alimento.senales.acido) igBase -= 5;
        if (alimento.senales.matrizLactea) igBase -= 10;
        if (alimento.senales.legumbre) igBase -= 10;
        if (alimento.senales.frutaEntera) igBase -= 5;
        if (alimento.senales.fibraViscosa) igBase -= 10;

        // Ajustes por composición
        const ratio = alimento.azucaresLibres / Math.max(1, choDisp);
        if (ratio >= 0.60) {
            igBase += 10;
        } else if (ratio >= 0.30) {
            igBase += 5;
        }

        // Ajuste por grasa (-5 por cada 10g, máximo -10)
        const ajusteGrasa = Math.min(10, Math.floor(alimento.grasa / 10) * 5);
        igBase -= ajusteGrasa;

        // Ajuste por proteína (-5 por cada 15g, máximo -10)
        const ajusteProteina = Math.min(10, Math.floor(alimento.proteina / 15) * 5);
        igBase -= ajusteProteina;

        // Saturar entre 0 y 100
        return Math.max(0, Math.min(100, Math.round(igBase)));
    }

    calcularResultado() {
        if (this.alimentos.length === 0) {
            return {
                error: 'No hay alimentos añadidos'
            };
        }

        const cgTotal = this.alimentos.reduce((sum, a) => sum + a.cgIndividual, 0);
        const sumaCHODisp = this.alimentos.reduce((sum, a) => sum + a.choDisp, 0);

        let igMedio = null;
        if (sumaCHODisp > 0) {
            const sumaIGxCHO = this.alimentos.reduce((sum, a) => sum + (a.igEstimado * a.choDisp), 0);
            igMedio = Math.round(sumaIGxCHO / sumaCHODisp);
        }

        let categoria;
        if (cgTotal < 10) {
            categoria = 'baja';
        } else if (cgTotal <= 20) {
            categoria = 'media';
        } else {
            categoria = 'alta';
        }

        return {
            cgTotal: Math.round(cgTotal * 10) / 10,
            igMedio,
            categoria,
            alimentos: this.alimentos
        };
    }

    limpiar() {
        this.alimentos = [];
    }
}
