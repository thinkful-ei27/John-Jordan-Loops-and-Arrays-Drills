/*function max(numbers) {
    if (numbers === []) {
        return null
    } else {
        return numbers.reduce((a,b) => (a > b) ? a:b );
    }


  }
  
  function min(numbers) {
    if (numbers === []) {
        return null
    } else {
        return numbers.reduce((a,b) => (a < b) ? a:b );
    }  }*/


function max(numbers) {
    if (numbers === []) {
        return null
    } else {
        let i = 0
        let max = numbers[0]
        while (i < numbers.length) {
            if (numbers[i] > max) {
                max = numbers[i]
            }
            i++
        }
        return max;
        }
    }

function min(numbers) {
    if (numbers === []) {
        return null
    } else {
        let i = 0
        let min = numbers[0]
        while (i < numbers.length) {
            if (numbers[i] < min) {
                min = numbers[i]
            }
            i++
        }
        return min;
        }}
