let contador = 1

function agregar() {
    let nt = document.createTextNode('parrafo ' + contador + '-')
    let nparrafo = document.getElementById('texto')
    nparrafo.appendChild(nt)
    contador++
}

function eliminar() {
    let nparrafo = document.getElementById('texto')
    if (nparrafo.hasChildNodes()) {
        nparrafo.removeChild(nparrafo.firstChild)
        contador--
    }
}