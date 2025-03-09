/**
 * Calculadora para la fuerza del tren inferior
 * Datos necesarios: 
 * - Sexo: Hombre o Mujer
 * - Edad: minimo 16,
 * - Tipo de test: 
 *  - Simple: Numero de sentadillas sin peso hasta el fallo
 *  - Complejo: 1RM en sentadilla con barra
 * - Numero de sentadillas hasta el fallo (Si coge el simple)
 * - Peso corporal en KG (Si coge el complejo)
 * - 1RM en sentadilla KG, se permite un decimal (Si coge el complejo)
 */

class LowerBodyTest {
  strengthLvl_simple = {
      "men": {
        "16-25": {
          "veryLow": { "max": null, "min": 25 },
          "low": { "max": 30, "min": 25 },
          "somewhatLow": { "max": 34, "min": 31 },
          "normal": { "max": 38, "min": 35 },
          "good": { "max": 43, "min": 39 },
          "veryGood": { "max": 49, "min": 44 },
          "excellent": { "max": 49, "min": null }
        },
        "26-35": {
          "veryLow": { "max": null, "min": 22 },
          "low": { "max": 27, "min": 22 },
          "somewhatLow": { "max": 31, "min": 28 },
          "normal": { "max": 35, "min": 32 },
          "good": { "max": 39, "min": 36 },
          "veryGood": { "max": 45, "min": 40 },
          "excellent": { "max": 45, "min": null }
        },
        "36-45": {
          "veryLow": { "max": null, "min": 17 },
          "low": { "max": 22, "min": 17 },
          "somewhatLow": { "max": 26, "min": 23 },
          "normal": { "max": 30, "min": 27 },
          "good": { "max": 34, "min": 31 },
          "veryGood": { "max": 41, "min": 35 },
          "excellent": { "max": 41, "min": null }
        },
        "46-55": {
          "veryLow": { "max": null, "min": 13 },
          "low": { "max": 17, "min": 13 },
          "somewhatLow": { "max": 21, "min": 18 },
          "normal": { "max": 25, "min": 22 },
          "good": { "max": 29, "min": 26 },
          "veryGood": { "max": 35, "min": 30 },
          "excellent": { "max": 35, "min": null }
        },
        "56-65": {
          "veryLow": { "max": null, "min": 9 },
          "low": { "max": 12, "min": 9 },
          "somewhatLow": { "max": 16, "min": 13 },
          "normal": { "max": 20, "min": 17 },
          "good": { "max": 24, "min": 21 },
          "veryGood": { "max": 30, "min": 25 },
          "excellent": { "max": 30, "min": null }
        },
        "66-75": {
          "veryLow": { "max": null, "min": 7 },
          "low": { "max": 10, "min": 7 },
          "somewhatLow": { "max": 14, "min": 11 },
          "normal": { "max": 18, "min": 15 },
          "good": { "max": 22, "min": 19 },
          "veryGood": { "max": 28, "min": 23 },
          "excellent": { "max": 28, "min": null }
        },
        "75+": {
          "veryLow": { "max": null, "min": 5 },
          "low": { "max": 7, "min": 5 },
          "somewhatLow": { "max": 11, "min": 8 },
          "normal": { "max": 15, "min": 12 },
          "good": { "max": 20, "min": 16 },
          "veryGood": { "max": 25, "min": 21 },
          "excellent": { "max": 25, "min": null }
        }
      },
      "women": {
        "16-25": {
          "veryLow": { "max": null, "min": 18 },
          "low": { "max": 24, "min": 18 },
          "somewhatLow": { "max": 28, "min": 25 },
          "normal": { "max": 33, "min": 29 },
          "good": { "max": 37, "min": 34 },
          "veryGood": { "max": 43, "min": 38 },
          "excellent": { "max": 43, "min": null }
        },
        "26-35": {
          "veryLow": { "max": null, "min": 15 },
          "low": { "max": 20, "min": 15 },
          "somewhatLow": { "max": 26, "min": 21 },
          "normal": { "max": 31, "min": 27 },
          "good": { "max": 35, "min": 32 },
          "veryGood": { "max": 39, "min": 35 },
          "excellent": { "max": 39, "min": null }
        },
        "36-45": {
          "veryLow": { "max": null, "min": 12 },
          "low": { "max": 16, "min": 12 },
          "somewhatLow": { "max": 21, "min": 17 },
          "normal": { "max": 27, "min": 22 },
          "good": { "max": 32, "min": 28 },
          "veryGood": { "max": 36, "min": 33 },
          "excellent": { "max": 36, "min": null }
        },
        "46-55": {
          "veryLow": { "max": null, "min": 7 },
          "low": { "max": 13, "min": 7 },
          "somewhatLow": { "max": 18, "min": 14 },
          "normal": { "max": 22, "min": 19 },
          "good": { "max": 26, "min": 23 },
          "veryGood": { "max": 33, "min": 27 },
          "excellent": { "max": 33, "min": null }
        },
        "56-65": {
          "veryLow": { "max": null, "min": 5 },
          "low": { "max": 10, "min": 5 },
          "somewhatLow": { "max": 14, "min": 11 },
          "normal": { "max": 18, "min": 15 },
          "good": { "max": 22, "min": 19 },
          "veryGood": { "max": 27, "min": 23 },
          "excellent": { "max": 27, "min": null }
        },
        "66-75": {
          "veryLow": { "max": null, "min": 3 },
          "low": { "max": 6, "min": 3 },
          "somewhatLow": { "max": 9, "min": 7 },
          "normal": { "max": 12, "min": 10 },
          "good": { "max": 17, "min": 13 },
          "veryGood": { "max": 24, "min": 18 },
          "excellent": { "max": 24, "min": null }
        },
        "75+": {
          "veryLow": { "max": null, "min": 2 },
          "low": { "max": 4, "min": 2 },
          "somewhatLow": { "max": 8, "min": 5 },
          "normal": { "max": 13, "min": 9 },
          "good": { "max": 16, "min": 14 },
          "veryGood": { "max": 23, "min": 17 },
          "excellent": { "max": 23, "min": null }
        }
      }
  }

  strengthLvl_complex = {
    "men": {
      "≤53": {
        "low": { "max": 70, "min": null },
        "normal": { "max": 112, "min": 70 },
        "strong": { "max": 131.5, "min": 112.1 },
        "stronger": { "max": 146.2, "min": 131.6 },
        "veryStrong": { "max": 180.3, "min": 146.3 },
        "elite": { "max": 194.9, "min": 180.4 },
        "pro": { "max": null, "min": 195 }
      },
      "53.1-59": {
        "low": { "max": 80, "min": null },
        "normal": { "max": 119.2, "min": 80 },
        "strong": { "max": 140.0, "min": 119.3 },
        "stronger": { "max": 155.5, "min": 140.1 },
        "veryStrong": { "max": 191.0, "min": 155.6 },
        "elite": { "max": 207.4, "min": 191.9 },
        "pro": { "max": null, "min": 207.5 }
      },
      "59.1-66": {
        "low": { "max": 90, "min": null },
        "normal": { "max": 130.7, "min": 90 },
        "strong": { "max": 153.5, "min": 130.8 },
        "stronger": { "max": 170.5, "min": 153.6 },
        "veryStrong": { "max": 210.3, "min": 170.6 },
        "elite": { "max": 227.4, "min": 210.4 },
        "pro": { "max": null, "min": 227.5 }
      },
      "66.1-74": {
        "low": { "max": 100, "min": null },
        "normal": { "max": 140.8, "min": 100 },
        "strong": { "max": 165.3, "min": 140.9 },
        "stronger": { "max": 183.7, "min": 165.4 },
        "veryStrong": { "max": 226.5, "min": 183.8 },
        "elite": { "max": 244.9, "min": 226.6 },
        "pro": { "max": null, "min": 245 }
      },
      "74.1-83": {
        "low": { "max": 110, "min": null },
        "normal": { "max": 148, "min": 110 },
        "strong": { "max": 173.7, "min": 148.1 },
        "stronger": { "max": 193.0, "min": 173.8 },
        "veryStrong": { "max": 238.1, "min": 193.1 },
        "elite": { "max": 257.4, "min": 238.2 },
        "pro": { "max": null, "min": 257.5 }
      },
      "83.1-93": {
        "low": { "max": 120, "min": null },
        "normal": { "max": 159.5, "min": 120 },
        "strong": { "max": 187.2, "min": 159.6 },
        "stronger": { "max": 208.0, "min": 187.3 },
        "veryStrong": { "max": 256.6, "min": 208.1 },
        "elite": { "max": 277.4, "min": 256.7 },
        "pro": { "max": null, "min": 277.5 }
      },
      "93.1-105": {
        "low": { "max": 140, "min": null },
        "normal": { "max": 166.7, "min": 140 },
        "strong": { "max": 195.7, "min": 166.8 },
        "stronger": { "max": 217.4, "min": 195.8 },
        "veryStrong": { "max": 268.2, "min": 217.5 },
        "elite": { "max": 289.9, "min": 268.3 },
        "pro": { "max": null, "min": 290 }
      },
      "105.1-120": {
        "low": { "max": 160, "min": null },
        "normal": { "max": 175.3, "min": 160 },
        "strong": { "max": 205.8, "min": 175.4 },
        "stronger": { "max": 228.7, "min": 205.9 },
        "veryStrong": { "max": 282.0, "min": 228.8 },
        "elite": { "max": 304.9, "min": 282.1 },
        "pro": { "max": null, "min": 305 }
      },
      ">120": {
        "low": { "max": 190, "min": null },
        "normal": { "max": 205, "min": 190 },
        "strong": { "max": 246.7, "min": 205.1 },
        "stronger": { "max": 263.0, "min": 246.8 },
        "veryStrong": { "max": 291.1, "min": 263.1 },
        "elite": { "max": 317.4, "min": 291.2 },
        "pro": { "max": null, "min": 317.5 }
      }
    },
    "women": {
      "≤43": {
        "low": { "max": null, "min": 50 },
        "normal": { "max": 70.5, "min": 50 },
        "strong": { "max": 84.1, "min": 70.6 },
        "stronger": { "max": 95.0, "min": 84.2 },
        "veryStrong": { "max": 122.6, "min": 95.1 },
        "elite": { "max": 138.4, "min": 122.7 },
        "pro": { "max": 138.5, "min": null }
      },
      "43.1-47": {
        "low": { "max": null, "min": 57 },
        "normal": { "max": 75.1, "min": 57 },
        "strong": { "max": 89.6, "min": 75.2 },
        "stronger": { "max": 101.0, "min": 89.7 },
        "veryStrong": { "max": 130.4, "min": 101.1 },
        "elite": { "max": 147.2, "min": 130.5 },
        "pro": { "max": 147.3, "min": null }
      },
      "47.1-52": {
        "low": { "max": null, "min": 62 },
        "normal": { "max": 82.3, "min": 62 },
        "strong": { "max": 98.2, "min": 82.4 },
        "stronger": { "max": 110.8, "min": 98.3 },
        "veryStrong": { "max": 143.0, "min": 110.9 },
        "elite": { "max": 161.4, "min": 143.1 },
        "pro": { "max": 161.5, "min": null }
      },
      "52.1-57": {
        "low": { "max": null, "min": 67 },
        "normal": { "max": 88.7, "min": 67 },
        "strong": { "max": 105.8, "min": 88.8 },
        "stronger": { "max": 119.4, "min": 105.9 },
        "veryStrong": { "max": 154.1, "min": 119.5 },
        "elite": { "max": 173.9, "min": 154.1 },
        "pro": { "max": 174.0, "min": null }
      },
      "57.1-63": {
        "low": { "max": null, "min": 73 },
        "normal": { "max": 93.2, "min": 73 },
        "strong": { "max": 111.1, "min": 93.3 },
        "stronger": { "max": 125.4, "min": 111.2 },
        "veryStrong": { "max": 161.9, "min": 125.5 },
        "elite": { "max": 182.7, "min": 162.0 },
        "pro": { "max": 182.8, "min": null }
      },
      "63.1-72": {
        "low": { "max": null, "min": 80 },
        "normal": { "max": 100.4, "min": 80 },
        "strong": { "max": 119.8, "min": 100.5 },
        "stronger": { "max": 135.2, "min": 119.9 },
        "veryStrong": { "max": 174.5, "min": 135.3 },
        "elite": { "max": 196.9, "min": 174.6 },
        "pro": { "max": 197.0, "min": null }
      },
      "72.1-84": {
        "low": { "max": null, "min": 90 },
        "normal": { "max": 105, "min": 90 },
        "strong": { "max": 125.2, "min": 105.1 },
        "stronger": { "max": 141.0, "min": 125.3 },
        "veryStrong": { "max": 182.3, "min": 141.4 },
        "elite": { "max": 205.8, "min": 182.4 },
        "pro": { "max": 205.9, "min": null }
      },
      ">84": {
        "low": { "max": null, "min": 95 },
        "normal": { "max": 110.4, "min": 95 },
        "strong": { "max": 131.7, "min": 110.5 },
        "stronger": { "max": 148.6, "min": 131.8 },
        "veryStrong": { "max": 191.7, "min": 148.7 },
        "elite": { "max": 216.5, "min": 191.8 },
        "pro": { "max": 216.6, "min": null }
      }
    }
  }

  evaluateStrenght_simple(gender, age, score){
      const ageRanges = Object.keys(this.strengthLvl_simple[gender]);
      const ageRange = ageRanges.find(range => {
          const [min, max] = range.split('-');
          return (age >= parseInt(min) && (max ? age <= parseInt(max) : true))
      })

      const levels = this.strengthLvl_simple[gender][ageRange];
      for(const level in levels){
          const {min, max} = levels[level];
          if(max === null && score < min){
              return level;
          }else if(min === null && score > max){
              return level;
          }else if(score >= min && score <= max){
              return level;
          }
      }
      return levels;
  }

  evaluateStrenght_complex(gender, weight, score){
    const weightRanges = Object.keys(this.strengthLvl_complex[gender]);
    const weightRange = weightRanges.find(range => {
      if(range.startsWith('≤')){
        return weight <= parseInt(range.substring(1));
      }else if(range.endsWith('+')){
        return weight >= parseInt(range.substring(0, range.length - 1));
      }else{
        const [min, max] = range.split('-');
        return (weight >= parseInt(min) && weight <= parseInt(max))
      }
    })

    if (!weightRange) {
      return "Weight range not found";
    }

    const levels = this.strengthLvl_complex[gender][weightRange];
    for (const level in levels) {
      const { min, max } = levels[level];
      if(max === null && score < min){
        return level;
      }else if(min === null && score > max){
          return level;
      }else if(score >= min && score <= max){
          return level;
      }
    }

    return "Level not found";

  }

}


let calculator = new LowerBodyTest();
let level = calculator.evaluateStrenght_complex("women", 42, 140);
console.log(level);