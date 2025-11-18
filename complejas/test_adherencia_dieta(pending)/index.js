class DietAdherenceCalculator {
    _q1;
    _q2;
    _q3;
    _q4;
    _q5;
    _q6;
    _q7;
    _q8;

    constructor(q1, q2, q3, q4, q5, q6, q7, q8) {
        this._q1 = q1;
        this._q2 = q2;
        this._q3 = q3;
        this._q4 = q4;
        this._q5 = q5;
        this._q6 = q6;
        this._q7 = q7;
        this._q8 = q8;
    }

    get totalScore() {
        return this._q1 + this._q2 + this._q3 + this._q4 + this._q5 + this._q6 + this._q7 + this._q8;
    }

    get adherencePercentage() {
        const maxScore = 32;
        return Math.round((this.totalScore / maxScore) * 100);
    }

    get category() {
        const percentage = this.adherencePercentage;

        if (percentage >= 85) {
            return {
                name: 'Adherencia Excelente',
                description: 'Enhorabuena. Tienes una adherencia excelente a tu dieta. Sigues tu plan de forma consistente y sostenible.',
                color: '#4CAF50',
                recommendations: [
                    'Mantén lo que estás haciendo, funciona muy bien',
                    'Comparte tus estrategias con otros',
                    'Sigue monitorizando para mantener este nivel'
                ]
            };
        } else if (percentage >= 70) {
            return {
                name: 'Adherencia Buena',
                description: 'Bien. Tu adherencia es buena. Sigues tu plan la mayor parte del tiempo con algunas desviaciones ocasionales.',
                color: '#8BC34A',
                recommendations: [
                    'Identifica los momentos donde te cuesta más adherirte',
                    'Trabaja en planificación para situaciones difíciles',
                    'Considera ajustar tu plan si es demasiado restrictivo'
                ]
            };
        } else if (percentage >= 50) {
            return {
                name: 'Adherencia Moderada',
                description: 'Regular. Tu adherencia es moderada. Te cuesta mantener la consistencia en tu plan alimentario.',
                color: '#FFC107',
                recommendations: [
                    'Revisa si tu dieta es demasiado restrictiva o poco realista',
                    'Mejora la planificación de comidas',
                    'Trabaja en gestionar las tentaciones y emociones',
                    'Considera buscar apoyo de un nutricionista'
                ]
            };
        } else if (percentage >= 30) {
            return {
                name: 'Adherencia Baja',
                description: 'Preocupante. Tu adherencia es baja. Te resulta muy difícil mantener tu plan alimentario.',
                color: '#FF9800',
                recommendations: [
                    'Tu dieta actual probablemente no es sostenible',
                    'Necesitas un plan más flexible y realista',
                    'Trabaja en los factores emocionales de la alimentación',
                    'Busca apoyo profesional (nutricionista o psicólogo)',
                    'Empieza con pequeños cambios graduales'
                ]
            };
        } else {
            return {
                name: 'Adherencia Muy Baja',
                description: 'Alerta. Tu adherencia es muy baja. No estás siguiendo un plan estructurado.',
                color: '#F44336',
                recommendations: [
                    'Necesitas replantear completamente tu enfoque',
                    'No intentes cambios drásticos, ve paso a paso',
                    'Busca ayuda profesional urgente',
                    'Trabaja primero en la relación emocional con la comida',
                    'Establece hábitos simples antes de una dieta estricta'
                ]
            };
        }
    }

    get weakestAreas() {
        const questions = [
            { id: 1, score: this._q1, area: 'Consistencia diaria' },
            { id: 2, score: this._q2, area: 'Control en días libres' },
            { id: 3, score: this._q3, area: 'Planificación de comidas' },
            { id: 4, score: this._q4, area: 'Gestión de tentaciones' },
            { id: 5, score: this._q5, area: 'Elecciones fuera de casa' },
            { id: 6, score: this._q6, area: 'Alimentación emocional' },
            { id: 7, score: this._q7, area: 'Control de porciones' },
            { id: 8, score: this._q8, area: 'Satisfacción con la dieta' }
        ];

        return questions
            .sort((a, b) => a.score - b.score)
            .slice(0, 3);
    }
}
