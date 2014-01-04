from flask import Flask,render_template,url_for,redirect
from flask import session

from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY']="HELLoWoLW"
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/x")
def x():
    return "HELLO X"

if __name__=="__main__":
    app.debug=True
    toolbar = DebugToolbarExtension(app)
    app.run(host='0.0.0.0',port=8000)
