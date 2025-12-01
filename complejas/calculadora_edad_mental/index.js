class MentalAgeCalculator {
    _chronologicalAge;
    _exercise;
    _diet;
    _sleep;
    _tobacco;
    _alcohol;
    _stress;
    _mentalActivity;
    _social;
    _health;

    constructor(chronologicalAge, exercise, diet, sleep, tobacco, alcohol, stress, mentalActivity, social, health) {
        this._chronologicalAge = chronologicalAge;
        this._exercise = exercise;
        this._diet = diet;
        this._sleep = sleep;
        this._tobacco = tobacco;
        this._alcohol = alcohol;
        this._stress = stress;
        this._mentalActivity = mentalActivity;
        this._social = social;
        this._health = health;
    }

    get mentalAge() {
        const adjustment = this._exercise + this._diet + this._sleep + this._tobacco +
                         this._alcohol + this._stress + this._mentalActivity + this._social + this._health;

        const calculatedAge = this._chronologicalAge + adjustment;
        return Math.max(18, Math.round(calculatedAge));
    }

    get difference() {
        return this.mentalAge - this._chronologicalAge;
    }

    get category() {
        const diff = this.difference;

        if (diff <= -10) {
            return {
                name: 'Edad mental muy inferior',
                description: 'Excelente. Tu edad mental es significativamente menor que tu edad cronológica. Mantienes hábitos muy saludables.',
                color: '#4CAF50',
                emoji: '🎉',
                message: `Tu cerebro está ${Math.abs(diff)} años más joven de lo que corresponde.`
            };
        } else if (diff <= -5) {
            return {
                name: 'Edad mental menor',
                description: 'Muy bien. Tu edad mental es menor que tu edad real. Tienes buenos hábitos de salud cerebral.',
                color: '#8BC34A',
                emoji: '😊',
                message: `Tu cerebro está ${Math.abs(diff)} años más joven.`
            };
        } else if (diff <= -1) {
            return {
                name: 'Edad mental ligeramente menor',
                description: 'Bien. Tu edad mental es algo menor que tu edad cronológica.',
                color: '#9CCC65',
                emoji: '👍',
                message: `Tu cerebro está ${Math.abs(diff)} años más joven.`
            };
        } else if (diff <= 1) {
            return {
                name: 'Edad mental acorde',
                description: 'Tu edad mental coincide con tu edad cronológica. Estás en la media.',
                color: '#FFC107',
                emoji: '😐',
                message: 'Tu edad mental coincide con tu edad real.'
            };
        } else if (diff <= 5) {
            return {
                name: 'Edad mental ligeramente mayor',
                description: 'Atención. Tu edad mental es algo mayor que tu edad real. Hay margen de mejora.',
                color: '#FF9800',
                emoji: '😟',
                message: `Tu cerebro está ${diff} años más envejecido.`
            };
        } else if (diff <= 10) {
            return {
                name: 'Edad mental mayor',
                description: 'Preocupante. Tu edad mental es bastante mayor que tu edad cronológica. Debes mejorar tus hábitos.',
                color: '#FF5722',
                emoji: '😰',
                message: `Tu cerebro está ${diff} años más envejecido de lo que corresponde.`
            };
        } else {
            return {
                name: 'Edad mental muy superior',
                description: 'Alerta. Tu edad mental es mucho mayor que tu edad real. Necesitas cambios urgentes en tu estilo de vida.',
                color: '#F44336',
                emoji: '🚨',
                message: `Tu cerebro está ${diff} años más envejecido. Acción inmediata necesaria.`
            };
        }
    }

    get recommendations() {
        const recs = [];

        if (this._exercise >= 0) recs.push('Aumenta tu actividad física (mínimo 150 min/semana)');
        if (this._diet >= 0) recs.push('Mejora tu alimentación (más omega-3, antioxidantes, menos procesados)');
        if (this._sleep >= 0) recs.push('Optimiza tu sueño (7-9 horas de calidad)');
        if (this._tobacco >= 2) recs.push('Deja de fumar (acelera envejecimiento cerebral)');
        if (this._alcohol >= 3) recs.push('Reduce el consumo de alcohol');
        if (this._stress >= 2) recs.push('Gestiona mejor el estrés (meditación, yoga, terapia)');
        if (this._mentalActivity >= 0) recs.push('Estimula tu mente (aprende cosas nuevas, lee, puzzles)');
        if (this._social >= 1) recs.push('Aumenta tu interacción social (previene deterioro cognitivo)');
        if (this._health >= 2) recs.push('Controla mejor tus condiciones de salud');

        return recs.length > 0 ? recs : ['Mantén tus excelentes hábitos actuales'];
    }
}
