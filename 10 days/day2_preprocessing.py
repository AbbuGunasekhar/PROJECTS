# 1. Import Libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

# 2. Load the Dataset
df = pd.read_csv('day1_data.csv')  # Ensure file is in the same folder
print("📄 Data Preview:")
print(df.head())

# 3. Check for Missing Values
print("\n🔍 Missing Values:")
print(df.isnull().sum())

# 4. Encode Output Labels (e.g., Low, Medium, High → 1, 2, 0)
le = LabelEncoder()
df['severity_encoded'] = le.fit_transform(df['severity'])

# Show label encoding
print("\n🎯 Label Encoding Mapping:")
print(dict(zip(le.classes_, le.transform(le.classes_))))

# 5. Split Features and Target
X = df[['rainfall', 'dam_level', 'humidity', 'temperature']]
y = df['severity_encoded']

# 6. Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print("\n✅ Data Split Done")
print("Training samples:", len(X_train))
print("Testing samples:", len(X_test))

# 1. Import Required Libraries
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib  # To save model

# 2. Train Random Forest Model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 3. Predict on Test Set
y_pred = model.predict(X_test)

# 4. Evaluate the Model
print("🎯 Accuracy Score:", accuracy_score(y_test, y_pred))
print("\n📊 Classification Report:\n", classification_report(y_test, y_pred))

# 5. Save the Trained Model
joblib.dump(model, 'flood_model.pkl')  # Saves the model to a file

print("✅ Model saved as flood_model.pkl")
# Day 4: Real-time Flood Severity Prediction

import joblib
import numpy as np

# Load trained model
model = joblib.load('flood_model.pkl')

# Label decoding (same encoding used during training)
label_map = {0: 'High', 1: 'Low', 2: 'Medium'}

# Take user input
try:
    rainfall = float(input("Enter rainfall (in mm): "))
    dam_level = float(input("Enter dam level (in meters): "))
    humidity = float(input("Enter humidity (%): "))
    temperature = float(input("Enter temperature (°C): "))

    # Prepare input
    input_data = np.array([[rainfall, dam_level, humidity, temperature]])

    # Predict
    prediction = model.predict(input_data)[0]
    severity = label_map[prediction]

    print("\n🌊 Predicted Flood Severity Level:", severity)

except ValueError:
    print("⚠ Please enter valid numeric inputs!")