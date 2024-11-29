import json

def unpack_kebab(txt: str)-> str:
    return txt.replace("-", " ")

def volume_percentage(txt: str)-> str:
    return f"{int(txt) * 20}%"

def create_information_string(data):
    info_string = f"Mi nombre es {data['name']}, nací en {data['birthday']}. "
    info_string += f"Mi correo electrónico es {data['email']}. "
    info_string += f"Me desperté a las {data['wakeup-time']}. "

    if data['alarm'] == 'yes':
        info_string += f"Mi alarma es indispensable, no podría levantarme sin ella. Si mi alarma fuera una estrellade Hollywood, se llamaría {data['who-alarm']}. "

    else:
        info_string += "No necesito una alarma para levantarme. "


    info_string += f"Hoy me levanté con el pie {data['foot']}, "
    info_string += f"y tardé {data['prep-time']} minutos en salir de la cama. "

    if data['brushed'] == 'yes':
        info_string += "¡Me cepillé los dientes! "
    else:
        info_string += "No me cepillé los dientes. "

    info_string += f"Esperé {data['phone-resistance']} minutos antes de revisar mi teléfono. "
    drink = unpack_kebab(data['drink'])
    info_string += f"Mi primera bebida de hoy fue {drink}. "

    
    if data['music'] == 'yes':
        volume = volume_percentage(data['volume'])
        info_string += f"Escuché música al {volume} de volumen mientras desayunaba. "

    else:
        info_string += "No escuché musica al desayunar, prefiero hacerlo en silencio. "

    info_string += f"Mi desayuno de hoy fue {data['breakfast']}."

    return info_string

def main()->str:
    # Load data from JSON file
    with open('inputs/example.json', 'r') as f:
        data = json.load(f)

    # Create the information string
    return create_information_string(data)


# Print the result
if __name__ == "__main__":
    print(main())

