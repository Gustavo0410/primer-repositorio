monto = int(input("ingrese su monto"))
    
if monto >= 10000:
    
    descuento = monto * 0.20

else:
    descuento = monto * 0.10
    
print("el total es:",monto-descuento)
    
