'use strict';

function reduce(str) {
    const myArr = str.split(" ");
    let answer = myArr.reduce((a, b) => {
        if (b.length === 3) {
            a += " "
        } else {
            let bigLetter = b[b.length-1].toUpperCase()
            a += bigLetter
        }
        return a
    },"")
    return answer;
}

reduce('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest')