     const codigo = (r,g,b) => `#${[r,g,b].map(valor => {
        return(parseInt(valor) < 16 ? "0" : "") + parseInt(valor).toString(16);

    }).join("")}`; // el maping lo convierte en lo que entre , despues de join quitaria las comas y arrays y quedaria con el resultado final empezando por # porque lo hemos indicado al inicio del template string.


    const cuadros = document.querySelectorAll(".cuadro");
    const rangos = document.querySelectorAll("input");
    const texto = document.querySelector("p");

    rangos.forEach((rango,indice) => {
        rango.addEventListener("input", function(){
            let combinacion = codigo(rangos[0].value,rangos[1].value,rangos[2].value);
            cuadros[0].style.backgroundColor = combinacion;
            texto.innerHTML = combinacion;
            cuadros[indice + 1].style.backgroundColor = codigo(indice == 0 ? this.value : 0 , indice == 1 ? this.value : 0, indice == 2 ? this.value : 0);
        })
    });
   

