class HungerTypeCalculator {
    _q1;
    _q2;
    _q3;
    _q4;
    _q5;
    _q6;
    _q7;
    _q8;
    _q9;
    _q10;

    constructor(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) {
        this._q1 = q1;
        this._q2 = q2;
        this._q3 = q3;
        this._q4 = q4;
        this._q5 = q5;
        this._q6 = q6;
        this._q7 = q7;
        this._q8 = q8;
        this._q9 = q9;
        this._q10 = q10;
    }

    get totalScore() {
        return this._q1 + this._q2 + this._q3 + this._q4 + this._q5 +
               this._q6 + this._q7 + this._q8 + this._q9 + this._q10;
    }

    get emotionalHungerPercentage() {
        const maxScore = 30;
        return Math.round((this.totalScore / maxScore) * 100);
    }

    get category() {
        const score = this.totalScore;

        if (score <= 5) {
            return {
                name: 'Hambre mayormente física',
                description: 'Excelente. Tu hambre es principalmente fisiológica. Comes por necesidad física, no emocional.',
                color: '#4CAF50',
                type: 'physical',
                recommendations: [
                    'Mantén esta buena conexión con tu cuerpo',
                    'Sigue escuchando tus señales de hambre y saciedad',
                    'Continúa con alimentación consciente'
                ]
            };
        } else if (score <= 12) {
            return {
                name: 'Hambre mixta con predominio físico',
                description: 'Bien. Tu hambre es mayormente física, con algunos episodios de hambre emocional ocasionales.',
                color: '#8BC34A',
                type: 'mixed-physical',
                recommendations: [
                    'Identifica los desencadenantes emocionales ocasionales',
                    'Desarrolla estrategias alternativas para esas emociones',
                    'Sigue practicando mindful eating'
                ]
            };
        } else if (score <= 20) {
            return {
                name: 'Hambre mixta equilibrada',
                description: 'Atención. Mezclas hambre física y emocional de forma significativa.',
                color: '#FFC107',
                type: 'mixed',
                recommendations: [
                    'Aprende a diferenciar hambre física de emocional',
                    'Antes de comer, pregúntate: ¿tengo hambre física?',
                    'Busca alternativas emocionales a la comida',
                    'Considera un diario emocional de alimentación',
                    'Trabaja en gestión emocional (respiración, ejercicio, hobbies)'
                ]
            };
        } else if (score <= 25) {
            return {
                name: 'Hambre predominantemente emocional',
                description: 'Preocupante. Gran parte de tu hambre es emocional. Usas la comida para gestionar emociones.',
                color: '#FF9800',
                type: 'emotional',
                recommendations: [
                    'Necesitas trabajar la relación emocional con la comida',
                    'Identifica tus triggers emocionales principales',
                    'Desarrolla un toolkit de gestión emocional sin comida',
                    'Practica mindfulness y meditación',
                    'Considera terapia con psicólogo especializado en alimentación'
                ]
            };
        } else {
            return {
                name: 'Hambre emocional severa',
                description: 'Alerta. Tu alimentación está dominada por las emociones, no por hambre física.',
                color: '#F44336',
                type: 'emotional-severe',
                recommendations: [
                    'Busca ayuda profesional urgente (psicólogo)',
                    'Posible trastorno de la conducta alimentaria',
                    'No sigas dietas restrictivas ahora',
                    'Trabaja primero la relación emocional con la comida',
                    'Aprende a reconectar con señales físicas de hambre',
                    'Considera terapia cognitivo-conductual'
                ]
            };
        }
    }

    get mainTriggers() {
        const triggers = [];

        if (this._q5 === 3) triggers.push('Estrés, aburrimiento o ansiedad');
        if (this._q9 === 3) triggers.push('Emociones negativas claras');
        if (this._q2 === 3) triggers.push('Antojos específicos');
        if (this._q4 === 3) triggers.push('Urgencia compulsiva');
        if (this._q6 === 3) triggers.push('Culpa post-ingesta');

        return triggers.length > 0 ? triggers : ['No se identificaron triggers emocionales significativos'];
    }
}
