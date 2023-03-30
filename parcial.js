function boletas(){
    let tHora = document.getElementById("ponp").value;
    let tSala = document.getElementById("tSala").value;
    let nBoletas = document.getElementById("nBoletas").value;
    let tPago = document.getElementById("tPago").value;
    let reserva = document.getElementById("reserva").value;
    
    let precio2D = 11300.0;
    let precio3D = 15500.0;
    let precioDinamix = 18800.0;

    let descuentoHoraNoPico = 0.1;
    let descuentoPorCantidad = 500.0;
    let recargoPorReserva = 2000.0;
    let descuentoTarjetaCinema = 0.05;
    let recargoHoraPico3D2D = 0.25;
    let recargoHoraPicoDinamix = 0.5;

    if (tHora == "Hora no pico"){

        precio2D *= (1 - descuentoHoraNoPico);
        precio3D *= (1 - descuentoHoraNoPico);
        precioDinamix *= (1 - descuentoHoraNoPico);
    }
    
    else {
        if (tSala == "3D" || tSala == "2D") {
          precio2D *= (1 + recargoHoraPico3D2D);
          precio3D *= (1 + recargoHoraPico3D2D);
        } else {
          precioDinamix *= (1 + recargoHoraPicoDinamix);
        }
    }


    if (nBoletas >= 3) {
        precio2D -= descuentoPorCantidad * (nBoletas - 2);
        precio3D -= descuentoPorCantidad * (nBoletas - 2);
        precioDinamix -= descuentoPorCantidad * (nBoletas - 2);
    }
    
    if (tPago == "Tarjeta de cinema") {
        precio2D *= (1 - descuentoTarjetaCinema);
        precio3D *= (1 - descuentoTarjetaCinema);
        precioDinamix *= (1 - descuentoTarjetaCinema);
      }

    if (reserva == "reserva") {
        precio2D += recargoPorReserva;
        precio3D += recargoPorReserva;
        precioDinamix += recargoPorReserva;
      }
    
     if (tSala == "2D"){
        let total = precio2D*nBoletas;
          document.getElementById("resultado").innerHTML="El total a pagar es: "+ total;
    }

    if (tSala == "3D"){
        let total = precio3D*nBoletas;
          document.getElementById("resultado").innerHTML="El total a pagar es: "+ total;
        }
    
     if (tSala == "Dinamix"){
        let total = precioDinamix*nBoletas;
          document.getElementById("resultado").innerHTML="El total a pagar es: "+ total;
        }

}