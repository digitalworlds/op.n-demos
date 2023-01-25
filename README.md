# op.n

## How to run an app locally from your computer as you develop it
Start a web server in the folder where run.html is located. There are many different ways to do this; below we provide a few popular ways. 
You can pick the one that fits your framework:

1. Visual Studio Code:
If you use Visual Studio Code for your development, install the extension Live Server by Ritwick Dey. 
Start a web-server by opening the project folder with Visual Studio Code, and right click on the run.html file and select Open With Live Server.
It will start the server in port 5500.
`http://127.0.0.1:5500/run.html` (shows a blank window)

2. npm/node.js:
If you are using node.js, you can install http-server with npm by typing in your command prompt: `npm install --global http-server`
Start a web-server by: `http-server type/a/path/here`
It will start the server in port 8080.
`http://127.0.0.1:8080/run.html`  (shows a blank window)

3. python:
If you are using python, you can start a web server by typing in your command prompt: `python3 -m http.server`
It will start the server in port 8000.
`http://127.0.0.1:8000/run.html`  (shows a blank window)

To run a specific JS app type `?app=filename.js` at the end of the URL. 
For example: `http://127.0.0.1:5500/run.html?app=main.js`
A live example is available here: https://digitalworlds.github.io/op.n/AppTemplate/run.html?app=main.js
