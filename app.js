"use strict"

let n = + prompt('ededi daxil edin');
const eded = Math.floor(Math.random() * 100) + 1;
let tryCount = 1;


while (n !== eded); {
    if (n < eded) {
        alert('artir');
    }
    else {
        alert('azalt');
    }

    tryCount += 1;
    n = +prompt('ededi daxil edin');
}
if (tryCount <= 2) {
    alert(`siz ${tryCount} defeye tapdiginiz ucun 1 - ci yer qazandiniz👍`);
}
else if (tryCount <= 10) {
    alert(`siz ${tryCount} defeye tapdiginiz ucun 2 - ci yerdesiniz✌️`);
}
else {
    alert(`siz ${tryCount} defeye tapdiginiz ucun teessuf ki, wansinizi itirdiniz😒`)
}
