//seleccionar el archivo subido del input con el id archivo y darle formato en una tabla mostrar el resultado y sumar el numero al final de cada linea
document.getElementById('btn-subir').addEventListener('click', function(){
    var archivo = document.getElementById('archivo').files[0];
    var lector = new FileReader();
    lector.readAsText(archivo);
    lector.onload = function(e){
    var contenido = e.target.result;
    var contenidoArray = contenido.split('\n');
    var tabla = '<table class="table table-striped">';

        let totalSuma = 0;
        for(var i = 0; i < contenidoArray.length; i++){
            var linea = contenidoArray[i].split(',');
            tabla += '<tr>';
            for(var j = 0; j < linea.length; j++){
                tabla += '<td>' + linea[j] + '</td>';
            }
            for(var j = 5; j < linea.length; j++){
                ultimoCaracter = linea[j].substr(linea[j].length - 1);
                //sumar todos los ultimos caracteres
                if(ultimoCaracter == '1'){
                    totalSuma += 1;
                }else if(ultimoCaracter == '2'){
                    totalSuma += 2;
                }else if(ultimoCaracter == '3'){
                    totalSuma += 3;
                }else if(ultimoCaracter == '4'){
                    totalSuma += 4;
                }else if(ultimoCaracter == '5'){
                    totalSuma += 5;
                }else if(ultimoCaracter == '6'){
                    totalSuma += 6;
                }else if(ultimoCaracter == '7'){
                    totalSuma += 7;
                }else if(ultimoCaracter == '8'){
                    totalSuma += 8;
                }else if(ultimoCaracter == '9'){
                    totalSuma += 9;
                }else if(ultimoCaracter == '0'){
                    totalSuma += 0;
                }
                console.log(ultimoCaracter);
            }
            tabla += '</tr>';
        }

        tabla += '</table>';
        document.getElementById('resultado').innerHTML = tabla;
        document.getElementById('total').innerHTML = totalSuma;
    }
});