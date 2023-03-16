myarray = [1, 2, 2, 4, 3, 6, 7, 8, 8, 8, ]


num_i = 0
long_i = 0
long_f = 0


for i in myarray:
    long_i = 0
    for j in myarray:
        if i == j:
            long_i += 1
            if long_i > long_f:
                num_f = i
                long_f = long_i

print("numero")
print(num_f)
print("longitud")
print(long_f)