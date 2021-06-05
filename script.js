var students = ["João", "Pedro", "Fabiana"]
var test1 = [10, 8, 7]
var test2 = [6, 5, 9]

function media(n1,n2) {
    return (n1+n2) /2
}

function aprovation(aMedia) {

    var resultado = aMedia >= 7 ? "aprovado" : "reprovado"
    return resultado
}

for(var i in students) {

    var firstTest = test1[i];
    var SecondTest = test2[i];
    var aMedia = media(firstTest, SecondTest)

    console.log(students[i] + " = Suas notas são " + test1[i] + " e " + test2[i] + " a média é " + media(firstTest,SecondTest) + " e você foi " + aprovation(aMedia))
}