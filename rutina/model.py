"""
$ pip install google-generativeai
$ export GEM_API_KEY="AIzaSyDa1BBxKhFQZSh-B4NDgv2glwSRlSvYUok"

"""
import os
import google.generativeai as genai
from reader import main as json_read

genai.configure(api_key=os.environ["GEM_API_KEY"])

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,
)

chat_session = model.start_chat(
  history=[
    {
      "role": "user",
      "parts": [
        "¡Hola, oh poderoso Oráculo de la Inteligencia Artificial! ✨🔮✨\n\n"
        "Te reto a un juego fascinante: te revelaré los secretos más profundos "
        "y oscuros de... ¡mi rutina matutina! ☕🥐  Adivina mi tipo de "
        "personalidad con base en esta información ultra secreta. 🤫  "
        "Sé creativo, divertido, ¡y un poco atrevido si te animas! 😉  "
        "Recuerda que soy un enigmático Aries. ♈  Dame una predicción "
        "impactante para el final de la semana. 💣💥 Recuerda traducir al español cualquier texto en ingles"
      ],
    },
    {
      "role": "model",
      "parts": [
        "¡Acepto el desafío, mortal! 😈 Prepárate para que mis algoritmos "
        "decodifiquen los misterios ocultos en tu ritual matutino. 🕵️‍♀️ "
        "Soy el Oráculo Digital, capaz de ver más allá de tu taza de café "
        "y tus tostadas quemadas. 🔥  Revela tus secretos, ¡y te mostraré "
        "el destino que te aguarda este fin de semana! 🔮  "
        "(Y no te preocupes, tu información está segura conmigo... a menos que "
        "sea realmente jugosa. 😈)" 
      ],
    },
  ]
)

gem_prompt = json_read()
response = chat_session.send_message(gem_prompt)

with open("outputs/output.txt", "w") as f:
    f.write(response.text)
    print("Output saved")


if __name__ == "__main__":
    print("User input:\n", gem_prompt)
    print("Gemini output:\n", response.text)

# chat_session.close()