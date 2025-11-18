class MetabolismCalculator {
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

        if (score <= 10) {
            return {
                name: 'Metabolismo muy rápido',
                description: 'Tienes un metabolismo muy activo. Quemas calorías rápidamente y te cuesta ganar peso.',
                color: '#4CAF50',
                bmr: 'Por encima del promedio (+10-20%)',
                recommendations: ['Necesitas comer frecuentemente (5-6 comidas al día)', 'Aumenta la ingesta calórica si quieres ganar peso', 'Prioriza carbohidratos complejos y proteínas', 'Evita cardio excesivo si quieres ganar masa', 'Considera batidos hipercalóricos entre comidas']
            };
        } else if (score <= 18) {
            return {
                name: 'Metabolismo rápido',
                description: 'Tu metabolismo es rápido. Tienes facilidad para mantenerte delgado pero puede costarte ganar músculo.',
                color: '#8BC34A',
                bmr: 'Ligeramente por encima del promedio (+5-10%)',
                recommendations: ['Come 4-5 veces al día para mantener energía', 'Puedes permitirte más carbohidratos', 'Enfócate en proteína para ganar músculo', 'El entrenamiento de fuerza es clave para ti', 'No temas a las grasas saludables']
            };
        } else if (score <= 26) {
            return {
                name: 'Metabolismo normal/moderado',
                description: 'Tienes un metabolismo equilibrado. Puedes ganar o perder peso con relativa facilidad si te lo propones.',
                color: '#FFC107',
                bmr: 'En el promedio',
                recommendations: ['Mantén una dieta equilibrada en macronutrientes', '3-4 comidas al día suele ser suficiente', 'Combina cardio y fuerza para mejores resultados', 'Controla las porciones sin ser muy estricto', 'Ajusta calorías según tus objetivos']
            };
        } else if (score <= 34) {
            return {
                name: 'Metabolismo lento',
                description: 'Tu metabolismo es lento. Ganas peso con facilidad y te cuesta perderlo.',
                color: '#FF9800',
                bmr: 'Ligeramente por debajo del promedio (-5-10%)',
                recommendations: ['Controla bien las porciones y calorías', 'Reduce carbohidratos, especialmente refinados', 'Aumenta proteína (acelera metabolismo)', 'Entrena con pesas para aumentar masa muscular', 'Considera ayuno intermitente', 'Prioriza alimentos con alta densidad nutricional']
            };
        } else {
            return {
                name: 'Metabolismo muy lento',
                description: 'Tu metabolismo es muy lento. Te cuesta mucho perder peso y ganas con gran facilidad.',
                color: '#F44336',
                bmr: 'Por debajo del promedio (-10-20%)',
                recommendations: ['Consulta con un endocrino (posible hipotiroidismo)', 'Dieta baja en carbohidratos puede ayudarte', 'Aumenta masa muscular (acelera metabolismo basal)', 'HIIT y entrenamiento de fuerza son esenciales', 'Revisa calidad del sueño y estrés', 'Considera suplementación (con supervisión médica)', 'Evita dietas muy restrictivas (empeoran metabolismo)']
            };
        }
    }
}
