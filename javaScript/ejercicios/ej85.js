let siguiente = -1;
let anterior = 1;
let fibonacci = 0;
do{
    fibonacci = siguiente + anterior;
    siguiente = anterior;
    anterior = fibonacci;
    console.log(fibonacci);
}while(siguiente <= 10);