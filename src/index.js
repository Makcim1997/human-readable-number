module.exports = function toReadable (number) {
    const obj = {
        1: 'one' ,
        2: 'two' ,
        3: 'three' ,
        4: 'four' ,
        5: 'five' ,
        6: 'six' ,
        7: 'seven' ,
        8: 'eight' ,
        9: 'nine' ,
        // до 10
        10: 'ten' ,   
        11: 'eleven' ,
        12: 'twelve' ,
        13: 'thirteen' ,
        14: 'fourteen' ,
        15: 'fifteen' ,
        16: 'sixteen' ,
        17: 'seventeen' ,
        18: 'eighteen' ,
        19: 'nineteen' ,
        20: 'twenty' ,
        30: 'thirty' ,
        40: 'fourty' ,
        50: 'fifty' ,
        60: 'sixty' ,
        70: 'seventy' ,
        80: 'eighty' ,
        90: 'ninety',
        // до 100
        100: 'one hundred' ,
        200: 'two hundred' ,
        300: 'three hundred' ,
        400: 'four hundred' ,
        500: 'five hundred' ,
        600: 'six hundred' ,
        700: 'seven hundred' ,
        800: 'eight hundred' ,
        900: 'nine hundred'
        // до 1000 
      }
    
      let first;
      let second;
      let three;
      let four;
    
      if (number <= 20) {
        return obj[number]
      }
    
      if (number <= 100) {
        first = number % 10;
        second = number - first;
        if (number % 10 === 0) {
          return obj[number]
        } else {
          return `${obj[second]} ${obj[first]}` 
        }
      } 
    
      if (number <= 999) {
        first = number % 100;
        second = first % 10;
        three = first - second;
        four =  number - first;
    
        if (number % 100 === 0) {
          return obj[number]
        } 
    
       if (first <= 19 && first >= 11 ) {
        return `${obj[four]} ${obj[first]}`
       } else if (first <= 9) {
        return `${obj[four]} ${obj[second]}`
       }
    
    
        if (first % 10 === 0) {
          return `${obj[four]} ${obj[three]}`
        } else if (first % 10 != 0) {
          return `${obj[four]} ${obj[three]} ${obj[second]}`
        } else {
          return `${obj[four]} ${obj[first]}`
        }
      }
}
