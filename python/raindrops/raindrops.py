def convert(number):
    factors = {
        'Pling': number % 3 == 0,
        'Plang': number % 5 == 0,
        'Plong': number % 7 == 0
    }
    output = ''
    for k,v in factors.items() :
        if v == True:
            output += k

    return output or str(number)
