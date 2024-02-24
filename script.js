/* Calculatro of circle by Kleon :) */

document.addEventListener("DOMContentLoaded", function () {
    const rBtn = document.getElementById('raggioBtn');
    const dBtn = document.getElementById('diametroBtn');
    const cBtn = document.getElementById('perimetroBtn');
    const aBtn = document.getElementById('areaBtn');
    const pi = 3.14;


    rBtn.onclick = function () {
        
        let rInput = document.getElementById('raggio').value;
        let circle = document.getElementById('cerchio');
        let rLbl = document.getElementById('r');
        let dLbl = document.getElementById('d');
        let cLbl = document.getElementById('c');
        let aLbl = document.getElementById('a');
        let circonferenza = 2 * pi * rInput;
        circonferenza = circonferenza.toFixed(3);
        let diametro = rInput * 2;

        rLbl.textContent = `raggio = ${rInput} cm`;
        dLbl.textContent = `diametro = ${diametro} cm`;
        cLbl.textContent = `circonferenza \u2248 ${circonferenza} cm`;
        aLbl.textContent = `area \u2248 ${circonferenza ** 2 / (4 * pi).toFixed(4)} cm\u00B2`;
        
        diametro = diametro * 32.29 / 8;
        let width = diametro + 'px';
        width = width;
        let height = width;
        circle.style.width = width;
        circle.style.height = height;

    }

    dBtn.onclick = function () {

        let dInput = document.getElementById('diametro').value;
        let circle = document.getElementById('cerchio');
        let rLbl = document.getElementById('r');
        let dLbl = document.getElementById('d');
        let cLbl = document.getElementById('c');
        let aLbl = document.getElementById('a');
        let circonferenza = pi * dInput

        rLbl.textContent = `raggio = ${dInput / 2} cm`;
        dLbl.textContent = `diametro = ${dInput} cm`;
        cLbl.textContent = `circonferenza \u2248 ${circonferenza.toFixed(3)} cm`;
        aLbl.textContent = `area \u2248 ${pi * (Math.pow(dInput / 2, 2)).toFixed(4)} cm\u00B2`;

        let diametro = dInput * 32.29 / 8;
        let width = diametro + 'px';
        let height = width;

        circle.style.height = height;
        circle.style.width = width;
    }

    cBtn.onclick = function () {
        let cInput = document.getElementById('perimetro').value;
        let circle = document.getElementById('cerchio');
        let rLbl = document.getElementById('r');
        let dLbl = document.getElementById('d');
        let cLbl = document.getElementById('c');
        let aLbl = document.getElementById('a');
        let raggio = cInput / (2 * pi);
        let diametro = raggio * 2;

        cLbl.textContent = `circonferenza = ${cInput} cm`;
        rLbl.textContent = `raggio \u2248 ${raggio.toFixed(4)} cm`;
        dLbl.textContent = `diametro = ${diametro} cm`;
        aLbl.textContent = `area \u2248 ${pi * (raggio ** 2).toFixed(4)} cm\u00B2`;

        diametro = diametro * 32.29 / 8;
        let width = diametro + 'px';
        let height = width;

        circle.style.height = height;
        circle.style.width = width;
    }

    aBtn.onclick = function () {
        let aInput = document.getElementById('area').value;
        let circle = document.getElementById('cerchio');
        let rLbl = document.getElementById('r');
        let dLbl = document.getElementById('d');
        let cLbl = document.getElementById('c');
        let aLbl = document.getElementById('a');
        let raggio = Math.sqrt(aInput / pi);
        let diametro = raggio * 2;

        aLbl.textContent = `area = ${aInput} cm\u00B2`;
        rLbl.textContent = `raggio \u2248 ${raggio} cm`;
        dLbl.textContent = `diametro = ${diametro} cm`;
        cLbl.textContent = `circonferenza = ${2 * pi * raggio} cm`;

        diametro = diametro * 32.29 / 8;
        let width = diametro + 'px';
        let height = width;

        circle.style.width = width;
        circle.style.height = height;
    }
});