
const img1 = document.getElementById('img')
const btn1 = document.getElementById('btn')
const frase = document.getElementById('dia')

btn1.onclick = function changeImage(){
    if(btn1.value === 'estado1'){
        img1.src = "img/terca_maior.png";
        btn1.value = 'estado2';
        frase.innerHTML = 'Terça';
        // removeFrase.innerHTML = ''

    }
    else if(btn1.value === 'estado2'){
        img1.src = 'img/quarta_maior.png';
        btn1.value = 'estado3';
        frase.innerHTML = 'Quarta';
    }
    else if(btn1.value === 'estado3'){
        img1.src = 'img/quinta_maior.png';
        btn1.value = 'estado4';
        frase.innerHTML = 'Quinta';

    }   
    else if(btn1.value === 'estado4'){
        img1.src = 'img/sexta_maior.png';
        btn1.value = 'estado5';
        frase.innerHTML = 'SEXTOU!!!';
    }
    else if(btn1.value === 'estado5'){
        img1.src = 'img/sabado_maior.png';
        btn1.value = 'estado6';
        frase.innerHTML = 'Sábado';
    }
    else if(btn1.value === 'estado6'){
        img1.src = 'img/domingo.png';
        btn1.value = 'estado7';
        frase.innerHTML = 'Domingo';
    }
    else if(btn1.value === 'estado7'){
        img1.src = 'img/segunda_maior.png';
        btn1.value = 'estado1';
        frase.innerHTML = 'Segunda';
    }
}