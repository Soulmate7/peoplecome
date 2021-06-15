from flask import Flask,render_template

app = Flask(__name__)


@app.route('/')
def show():
    s="this is a test"
    return render_template('./html/Message.html',s=s)

if __name__ == '__main__':
    app.run()
