let siguiente = -1;
let anterior = 1;
let fibonacci = 0;
while(siguiente <= 10){
    fibonacci = siguiente + anterior;
    siguiente = anterior;
    anterior = fibonacci;
    console.log(fibonacci);
}