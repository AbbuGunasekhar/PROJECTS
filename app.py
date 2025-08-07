from flask import Flask, render_template, request
import joblib
import numpy as np

# Load model
model = joblib.load('flood_model.pkl')

# Label decoder
label_map = {0: 'High', 1: 'Low', 2: 'Medium'}

# Flask app
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        rainfall = float(request.form['rainfall'])
        dam_level = float(request.form['dam_level'])
        humidity = float(request.form['humidity'])
        temperature = float(request.form['temperature'])

        input_data = np.array([[rainfall, dam_level, humidity, temperature]])
        prediction = model.predict(input_data)[0]
        severity = label_map[prediction]

        return render_template('index.html', prediction_text=f'Flood Severity: {severity}')

    except:
        return render_template('index.html', prediction_text="⚠ Please enter valid numbers.")

if __name__ == '__main__':
    app.run(debug=True)