from flask import Flask,render_template,url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')
@app.route('/service')
def service():
    return render_template('service.html')


