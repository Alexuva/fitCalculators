class EmotionalFoodRelationshipCalculator {
    _q1; _q2; _q3; _q4; _q5; _q6; _q7; _q8; _q9; _q10;

    constructor(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) {
        this._q1 = q1; this._q2 = q2; this._q3 = q3; this._q4 = q4; this._q5 = q5;
        this._q6 = q6; this._q7 = q7; this._q8 = q8; this._q9 = q9; this._q10 = q10;
    }

    get totalScore() {
        return this._q1 + this._q2 + this._q3 + this._q4 + this._q5 + this._q6 + this._q7 + this._q8 + this._q9 + this._q10;
    }

    get category() {
        const score = this.totalScore;

        if (score <= 5) {
            return {
                name: 'Relación saludable con la comida',
                description: 'Excelente. Tienes una relación equilibrada y saludable con la comida. No la usas para gestionar emociones y disfrutas sin culpa.',
                color: '#4CAF50',
                risk: 'Riesgo bajo',
                recommendations: [
                    'Mantén esta relación positiva con la comida',
                    'Sigue practicando alimentación consciente',
                    'Comparte tu enfoque equilibrado con otros'
                ]
            };
        } else if (score <= 12) {
            return {
                name: 'Relación mayormente saludable',
                description: 'Bien. Tu relación con la comida es generalmente saludable, aunque hay algunos aspectos emocionales leves.',
                color: '#8BC34A',
                risk: 'Riesgo bajo-moderado',
                recommendations: [
                    'Identifica los momentos donde la comida se vuelve emocional',
                    'Trabaja en flexibilidad mental con los alimentos',
                    'Practica mindful eating regularmente',
                    'No te obsesiones con la "perfección"'
                ]
            };
        } else if (score <= 20) {
            return {
                name: 'Relación emocional significativa',
                description: 'Atención. Tienes una relación emocional notable con la comida. Hay patrones que deberías trabajar.',
                color: '#FFC107',
                risk: 'Riesgo moderado',
                recommendations: [
                    'Busca apoyo de un psicólogo especializado en alimentación',
                    'Trabaja en desligar emociones de la comida',
                    'Elimina la clasificación rígida de alimentos',
                    'Practica autocompasión, no autocrítica',
                    'Considera terapia cognitivo-conductual',
                    'Busca formas alternativas de gestionar emociones'
                ]
            };
        } else if (score <= 25) {
            return {
                name: 'Relación problemática con la comida',
                description: 'Preocupante. Tu relación con la comida es problemática y afecta tu bienestar emocional.',
                color: '#FF9800',
                risk: 'Riesgo alto',
                recommendations: [
                    'Busca ayuda profesional urgente (psicólogo + nutricionista)',
                    'Posible inicio de trastorno de la conducta alimentaria',
                    'No hagas dietas restrictivas por tu cuenta',
                    'Trabaja en tu autoestima independientemente del peso',
                    'Considera grupos de apoyo',
                    'Pide ayuda a familiares y amigos cercanos'
                ]
            };
        } else {
            return {
                name: 'Posible trastorno de la conducta alimentaria',
                description: 'Alerta. Muestras señales graves de un posible TCA. Necesitas ayuda profesional inmediata.',
                color: '#F44336',
                risk: 'Riesgo muy alto',
                recommendations: [
                    'URGENTE: Consulta con un psiquiatra/psicólogo especializado en TCA',
                    'Necesitas tratamiento multidisciplinar (médico, psicólogo, nutricionista)',
                    'Informa a tu familia o personas cercanas',
                    'No estás solo/a, los TCA tienen tratamiento efectivo',
                    'Llama a líneas de ayuda especializadas en TCA',
                    'No esperes, busca ayuda HOY'
                ]
            };
        }
    }

    get warningSignals() {
        const signals = [];

        if (this._q4 >= 2) signals.push('Episodios de atracones');
        if (this._q5 >= 2) signals.push('Comer a escondidas');
        if (this._q8 >= 2) signals.push('Conductas compensatorias (purgas, ejercicio excesivo)');
        if (this._q7 === 3) signals.push('Autoestima completamente dependiente del peso');
        if (this._q10 >= 2) signals.push('Evitación social relacionada con comida');
        if (this._q2 === 3) signals.push('Culpa extrema tras comer');
        if (this._q9 === 3) signals.push('Reglas alimentarias rígidas y controladoras');

        return signals.length > 0 ? signals : ['No se detectaron señales de alarma graves'];
    }
}
