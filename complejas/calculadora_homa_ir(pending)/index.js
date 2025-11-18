class HomaIRCalculator {
    _glucose;
    _insulin;
    _glucoseUnit;

    constructor(glucose, insulin, glucoseUnit) {
        this._glucose = glucose;
        this._insulin = insulin;
        this._glucoseUnit = glucoseUnit;
    }

    get homaIR() {
        let glucoseInMgDL = this._glucose;

        // Convertir a mg/dL si está en mmol/L
        if (this._glucoseUnit === 'mmol/L') {
            glucoseInMgDL = this._glucose * 18.018;
        }

        // Fórmula HOMA-IR: (Glucosa en mg/dL × Insulina en μU/mL) / 405
        const homa = (glucoseInMgDL * this._insulin) / 405;

        return Math.round(homa * 100) / 100;
    }

    get category() {
        const homa = this.homaIR;

        if (homa < 1) {
            return {
                name: 'Sensibilidad óptima a la insulina',
                description: 'Excelente. Tu cuerpo responde muy bien a la insulina.',
                color: '#4CAF50',
                recommendation: 'Mantén tus hábitos saludables: dieta equilibrada, ejercicio regular y buen descanso.'
            };
        } else if (homa < 2) {
            return {
                name: 'Sensibilidad normal a la insulina',
                description: 'Bien. Tu sensibilidad a la insulina está dentro de lo normal.',
                color: '#8BC34A',
                recommendation: 'Mantén un estilo de vida saludable para prevenir la resistencia a la insulina.'
            };
        } else if (homa < 3) {
            return {
                name: 'Resistencia leve a la insulina',
                description: 'Atención. Comienzas a mostrar signos de resistencia a la insulina.',
                color: '#FFC107',
                recommendation: 'Considera mejorar tu dieta (reducir azúcares y harinas refinadas), aumentar la actividad física y controlar el estrés.'
            };
        } else if (homa < 5) {
            return {
                name: 'Resistencia moderada a la insulina',
                description: 'Preocupante. Tienes resistencia moderada a la insulina.',
                color: '#FF9800',
                recommendation: 'Consulta con un endocrino. Necesitas cambios significativos en dieta y ejercicio. Considera ayuno intermitente y ejercicio de fuerza.'
            };
        } else {
            return {
                name: 'Resistencia alta a la insulina',
                description: 'Alerta. Resistencia elevada a la insulina. Riesgo de diabetes tipo 2.',
                color: '#F44336',
                recommendation: 'Urgente: Consulta con un endocrinólogo. Requiere intervención médica y cambios drásticos en el estilo de vida.'
            };
        }
    }

    get insulinSensitivity() {
        // Índice de sensibilidad a la insulina (inverso de HOMA-IR)
        const sensitivity = 1 / this.homaIR;
        return Math.round(sensitivity * 1000) / 1000;
    }

    get betaCellFunction() {
        let glucoseInMgDL = this._glucose;

        if (this._glucoseUnit === 'mmol/L') {
            glucoseInMgDL = this._glucose * 18.018;
        }

        // Función de célula beta HOMA-B: (360 × Insulina) / (Glucosa - 63)
        if (glucoseInMgDL <= 63) {
            return null; // No se puede calcular con glucosa muy baja
        }

        const homaB = (360 * this._insulin) / (glucoseInMgDL - 63);
        return Math.round(homaB * 10) / 10;
    }
}
