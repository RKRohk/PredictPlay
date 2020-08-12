import os
from flask import Flask,request
import flask
from flask.json import jsonify
from model import generate_text

app = Flask(__name__)

@app.route('/predict',methods=['GET','POST'])
def predict():
    text = request.get_json()
    print(text.get('hi'))
    op = text.get('text')
    prediction = generate_text(start_string=op)
    return jsonify({"prediction":prediction})

app.run(debug=True)
