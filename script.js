let contador = 0;
let lista = [];
let listaGreen = [];
let listaRed = [];

let flag = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
};

let tictacclick = (valor) => {
    if (flag[valor]) {
        flag[valor] = false;

        contador += 1;
        if (contador % 2 == 1) {
            document.getElementById("" + valor).style.backgroundColor = "green";
            listaGreen.push(valor);
        } else {
            document.getElementById("" + valor).style.backgroundColor = "red";
            listaRed.push(valor);
        }
        valorlistaultimo = lista[lista.length - 1];
        valorlistapenultimo = lista[lista.length - 2];
        if (valorlistaultimo == valor && valorlistapenultimo == valor) {
            alert("deu pau");
            contador -= 1;
            contador % 2 == 1
                ? (document.getElementById("" + valor).style.backgroundColor = "green")
                : (document.getElementById("" + valor).style.backgroundColor = "red");
        }
        console.log("verde", listaGreen);
        console.log("vermelho", listaRed);
    }
    ganhou()
};

let ganhou = () => {
    const reducer = (accumulator, curr) => accumulator + curr;
    if (
        (listaGreen.indexOf(8) != -1 && listaGreen.indexOf(1) != -1 && listaGreen.indexOf(6) != -1) ||
        (listaGreen.indexOf(3) != -1 && listaGreen.indexOf(5) != -1 && listaGreen.indexOf(7) != -1) ||
        (listaGreen.indexOf(4) != -1 && listaGreen.indexOf(9) != -1 && listaGreen.indexOf(2) != -1) ||
        (listaGreen.indexOf(8) != -1 && listaGreen.indexOf(3) != -1 && listaGreen.indexOf(4) != -1) ||
        (listaGreen.indexOf(1) != -1 && listaGreen.indexOf(5) != -1 && listaGreen.indexOf(9) != -1) ||
        (listaGreen.indexOf(6) != -1 && listaGreen.indexOf(7) != -1 && listaGreen.indexOf(2) != -1) ||
        (listaGreen.indexOf(4) != -1 && listaGreen.indexOf(5) != -1 && listaGreen.indexOf(6) != -1) ||
        (listaGreen.indexOf(8) != -1 && listaGreen.indexOf(5) != -1 && listaGreen.indexOf(2) != -1)

    ) {
        alert("O VERDE GANHOU")
        window.location.reload()
    } else if (
        (listaRed.indexOf(8) != -1 && listaRed.indexOf(1) != -1 && listaRed.indexOf(6) != -1) ||
        (listaRed.indexOf(3) != -1 && listaRed.indexOf(5) != -1 && listaRed.indexOf(7) != -1) ||
        (listaRed.indexOf(4) != -1 && listaRed.indexOf(9) != -1 && listaRed.indexOf(2) != -1) ||
        (listaRed.indexOf(8) != -1 && listaRed.indexOf(3) != -1 && listaRed.indexOf(4) != -1) ||
        (listaRed.indexOf(1) != -1 && listaRed.indexOf(5) != -1 && listaRed.indexOf(9) != -1) ||
        (listaRed.indexOf(6) != -1 && listaRed.indexOf(7) != -1 && listaRed.indexOf(2) != -1) ||
        (listaRed.indexOf(4) != -1 && listaRed.indexOf(5) != -1 && listaRed.indexOf(6) != -1) ||
        (listaRed.indexOf(8) != -1 && listaRed.indexOf(5) != -1 && listaRed.indexOf(2) != -1)
    ) {
        alert("O VERMELHO GANHOU")
        window.location.reload()
    }
};
