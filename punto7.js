function Click(){
    nombre = document.getElementById("nombre01").value;
    correo = document.getElementById("correo01").value;
    contraseña = document.getElementById("contraseña01").value;
    
    let tabla = document.getElementById("table");
    
    let nueva_fila = tabla.insertRow(-1);
    
    let nueva_celda = nueva_fila.insertCell(0);
    nueva_celda.textContent = nombre;
    
    nueva_celda = nueva_fila.insertCell(1);
    nueva_celda.textContent = correo;
    
    nueva_celda = nueva_fila.insertCell(2);
    nueva_celda.textContent = contraseña;
    
    let borrar = nueva_fila.insertCell(3);
    let boton = document.createElement("button");
    borrar.appendChild(boton);
    boton.textContent = "Borrar";
    boton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove()
    })
    }