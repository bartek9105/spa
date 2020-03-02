// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let obw = (a, b, c) => {
    return (a+b+c)/2
}

let heron = (a, b, c) => {
    return Math.sqrt(obw(a,b,c)*(obw(a,b,c)-a)*(obw(a,b,c)-b)*(obw(a,b,c)-c))
}

console.log(heron(b,c,h));