from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import pprint


app = Flask(__name__)

mongo = PyMongo(app, uri='mongodb://localhost:27017/craigslist_db')

@app.route('/')

def index():

 # Find one record of data from the mongo database
    stop_data = mongo.db.items

    for stop in stop_data.find():
        pprint.pprint(stop)

    # Return template and data
    return render_template('index.html', police_stops=stop)

if __name__ == "__main__":
    app.run(debug=True)
