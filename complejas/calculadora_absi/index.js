class ABSICalculator {
    _sex;
    _age;
    _weight;
    _height;
    _waist;

    constructor(sex, age, weight, height, waist) {
        this._sex = sex;
        this._age = age;
        this._weight = weight;
        this._height = height / 100; // convertir a metros
        this._waist = waist / 100; // convertir a metros
    }

    get bmi() {
        return this._weight / (this._height * this._height);
    }

    get absi() {
        // Fórmula ABSI: WC / (BMI^(2/3) * height^(1/2))
        // WC = waist circumference
        const absi = this._waist / (Math.pow(this.bmi, 2/3) * Math.pow(this._height, 1/2));
        return Math.round(absi * 100000) / 100000;
    }

    get absiZ() {
        // ABSI z-score basado en edad y sexo
        // Valores aproximados de referencia poblacional
        let meanABSI, sdABSI;

        if (this._sex === 'hombre') {
            if (this._age < 30) {
                meanABSI = 0.0748;
                sdABSI = 0.0052;
            } else if (this._age < 40) {
                meanABSI = 0.0763;
                sdABSI = 0.0053;
            } else if (this._age < 50) {
                meanABSI = 0.0776;
                sdABSI = 0.0054;
            } else if (this._age < 60) {
                meanABSI = 0.0787;
                sdABSI = 0.0055;
            } else if (this._age < 70) {
                meanABSI = 0.0795;
                sdABSI = 0.0056;
            } else {
                meanABSI = 0.0800;
                sdABSI = 0.0057;
            }
        } else {
            if (this._age < 30) {
                meanABSI = 0.0731;
                sdABSI = 0.0054;
            } else if (this._age < 40) {
                meanABSI = 0.0745;
                sdABSI = 0.0056;
            } else if (this._age < 50) {
                meanABSI = 0.0761;
                sdABSI = 0.0058;
            } else if (this._age < 60) {
                meanABSI = 0.0775;
                sdABSI = 0.0060;
            } else if (this._age < 70) {
                meanABSI = 0.0786;
                sdABSI = 0.0062;
            } else {
                meanABSI = 0.0793;
                sdABSI = 0.0063;
            }
        }

        const zScore = (this.absi - meanABSI) / sdABSI;
        return Math.round(zScore * 100) / 100;
    }

    get category() {
        const z = this.absiZ;

        if (z < -0.868) {
            return {
                name: 'Riesgo muy bajo',
                description: 'Excelente. Tu forma corporal indica un riesgo muy bajo de mortalidad. Forma corporal muy favorable.',
                color: '#4CAF50',
                riskLevel: 'Muy bajo (20% inferior)',
                recommendation: 'Mantén tus hábitos saludables actuales'
            };
        } else if (z < -0.272) {
            return {
                name: 'Riesgo bajo',
                description: 'Muy bien. Tu forma corporal indica un riesgo bajo. Mejor que la media poblacional.',
                color: '#8BC34A',
                riskLevel: 'Bajo (20-40% inferior)',
                recommendation: 'Continúa con tu estilo de vida saludable'
            };
        } else if (z < 0.229) {
            return {
                name: 'Riesgo promedio',
                description: 'Normal. Tu forma corporal está dentro del promedio poblacional.',
                color: '#FFC107',
                riskLevel: 'Promedio (40-60%)',
                recommendation: 'Considera mejorar tu composición corporal y reducir grasa abdominal'
            };
        } else if (z < 0.798) {
            return {
                name: 'Riesgo moderado',
                description: 'Atención. Tu forma corporal indica un riesgo moderadamente elevado.',
                color: '#FF9800',
                riskLevel: 'Moderado (60-80%)',
                recommendation: 'Trabaja en reducir grasa abdominal mediante ejercicio y dieta'
            };
        } else {
            return {
                name: 'Riesgo alto',
                description: 'Alerta. Tu forma corporal indica un riesgo elevado de mortalidad. La grasa abdominal es excesiva.',
                color: '#F44336',
                riskLevel: 'Alto (20% superior)',
                recommendation: 'Consulta con un médico. Necesitas reducir urgentemente la grasa abdominal'
            };
        }
    }

    get waistToHeight() {
        return this._waist / this._height;
    }

    get interpretation() {
        const whr = this.waistToHeight;

        if (whr < 0.4) {
            return 'Perímetro de cintura muy bajo (puede ser insuficiente)';
        } else if (whr < 0.5) {
            return 'Perímetro de cintura saludable';
        } else if (whr < 0.6) {
            return 'Perímetro de cintura aumentado (precaución)';
        } else {
            return 'Perímetro de cintura excesivo (obesidad abdominal)';
        }
    }
}
