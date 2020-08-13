import os
from flask import Flask,request,render_template
import flask
from flask.json import jsonify
from model import generate_text
import os

app = Flask(__name__)

@app.route('/predict',methods=['GET','POST'])
def predict():
    if request.method == 'POST':
        text = request.get_json()
        print(text.get('hi'))
        op = text.get('text')
        prediction = generate_text(start_string=op)
        return jsonify({"prediction":prediction})
    else:
        return 'Not Authorised.'

if __name__ == "__main__":
    app.secret_key = 'ltsmgrurip'
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
