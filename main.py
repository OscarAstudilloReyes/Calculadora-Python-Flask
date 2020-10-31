# 1)Primero instalar Flaks
# pip install Flask

# 2) importat flask y sus plantillas , jsonnify es para la tecnologia ajax
from flask import Flask , request,render_template , jsonify

# 3) Crear un objeto de tipo flask

app=Flask(__name__)

# Raiz del sitio
@app.route('/') # si es '/' abrir Decorador abrir localHost:3000
def Calculadora():
    # return 'Hola mundo'
    return render_template('calculadora.html') 



@app.route('/Sumar', methods=["POST"])
def sumar():
     if request.method=='POST':
         n1=int(request.form["txtNumero1"])
         n2=int(request.form["txtNumero2"])
         if n1 and n2:
             resultado=n1+n2
             if resultado:
                 return jsonify({"estado":True, "datos":resultado, "mensaje":"Suma realizada"})
             else:
                 return jsonify({"estado":False ,"datos":resultado,"mensaje":"Problemas al ralizar la operacion"})
             
     return render_template('calculadora.html') 
 
 
@app.route('/Restar', methods=["POST"])
def restar():
     if request.method=='POST':
         n1=int(request.form["txtNumero1"])
         n2=int(request.form["txtNumero2"])
         if n1 and n2:
             resultado=n1-n2
             if resultado>=0:
                 return jsonify({"estado":True, "datos":resultado, "mensaje":"Resta realizada"})
             else:
                 return jsonify({"estado":False ,"datos":resultado,"mensaje":"Problemas al ralizar la operacion"})
             
     return render_template('calculadora.html') 
    
    
@app.route('/Multiplicar', methods=["POST"])
def Multiplicar():
     if request.method=='POST':
         n1=int(request.form["txtNumero1"])
         n2=int(request.form["txtNumero2"])
         if n1 and n2:
             resultado=n1*n2
             if resultado:
                 return jsonify({"estado":True, "datos":resultado, "mensaje":"Multiplicacion realizada"})
             else:
                 return jsonify({"estado":False ,"datos":resultado,"mensaje":"Problemas al ralizar la operacion"})
             
     return render_template('calculadora.html') 
 
 
@app.route('/Dividir', methods=["POST"])
def Dividir():
     if request.method=='POST':
         n1=int(request.form["txtNumero1"])
         n2=int(request.form["txtNumero2"])
         if n1 and n2:
             resultado=n1/n2
             if resultado:
                 return jsonify({"estado":True, "datos":resultado, "mensaje":"Division realizada"})
             else:
                 return jsonify({"estado":False ,"datos":resultado,"mensaje":"Problemas al ralizar la operacion"})
             
     return render_template('calculadora.html')  
       
    

# Iniciar la app Depende del terminal
if __name__=="__main__":
    app.run(debug=True)
    
