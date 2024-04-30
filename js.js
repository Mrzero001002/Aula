const form = document.getElementById('Valores')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const ValorAinp = document.getElementById('nx');
    const ValorBinp = document.getElementById('ny');

    const ValorA = parseFloat(ValorAinp);
    const ValorB = parseFloat(ValorBinp);

    const falso = `Tente novamente`;
    const verdade = `Esta correto o número ${campoB} é maior que o número ${campoA}`;
    if(!isNaN(ValorA) &&  !isan(ValorB)) {
        if(ValorA >= ValorB){
            const containerFalso = document.querySelector('.Diferentes');
            containerFalso.innerHTML = falso;
            containerFalso.style.display = 'block';
            document.querySelector('.Iguais').style.display = 'none';
        } else {
            const containerVerdade = document.querySelector('.Iguais');
            containerVerdade.innerHTML = verdade;
            containerVerdade.style.display = 'block';
            document.querySelector('.Diferentes').style.display = 'none';
        }
    } else {
        alert("Por favor insira números válidos")
    }
});