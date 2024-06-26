# Presentation of the Chatbot

CHRYSAN is a medical chatbot dedicate for children who suffer from Cerebral Palsy. His name is attributed from the flower Chrysanthemum which is used for medical such as treating chest pain (angina), high blood pressure, type 2 diabetes, fever, cold, headache, dizziness, and swelling.

It is designed such as a quick-answer mode, the chatbot attempts to match a question asked in natural language with one of the a priori defined query templates. Templates used in quick reply mode are defined using regular expressions.


## Initial Setup:

Clone repo and create a virtual environment
```
$ git clone  https://github.com/RahmaHaouas/Chatbot.git
$ cd Chatbot
$ python3 -m venv venv
$ . venv/bin/activate
```
Install dependencies.
```
$ (venv) pip install Flask torch torchvision nltk
```
Install nltk package.
```
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```
Modify `intents.json` with different intents and responses for your Chatbot.

Run
```
$ (venv) python train.py
```
This will dump data.pth file. And then run
the following command to test it in the console.
```
$ (venv) python chat.py
```

## Demonstration

![c3](https://github.com/RahmaHaouas/platform/assets/93491702/efcc8c80-9807-404c-9494-c3f8a0bbe148)




#   A i c h a l l e n g e  
 