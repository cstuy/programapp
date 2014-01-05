from flask import Flask,render_template,url_for,redirect
from flask import session,request
import json
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.secret_key="dsfjslfjdlfjdsklf"
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/x")
def x():
    return render_template('index.html')

@app.route("/user", methods=["GET","POST","PUT","DELETE"])
def user():
    if request.method=="POST":
        print request.json
    # this will change the email attribute of the user 
    # and add an r and an id 
    return json.dumps({'r':'no worky',
                       'email':'FOOFOOFFO',
                       'id':'12345'})


app.debug=True
if __name__=="__main__":
    app.debug=True
    app.config['DEBUG_TB_TEMPLATE_EDITOR_ENABLED']=True
    #toolbar = DebugToolbarExtension(app)

    app.run(host='0.0.0.0',port=8000)
    
