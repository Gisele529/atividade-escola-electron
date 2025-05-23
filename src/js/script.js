var listaAlunos = []
var formVar = document.getElementById("form-cadastro")
 
function cadastrarAluno(evento) {
evento.preventDefault()
 
var inputNome = document.getElementById("nome").value
var inputMatricula = document.getElementById("matricula").value
var inputIdade = document.getElementById("idade").value
var inputMae = document.getElementById("mae").value
var inputTelefone = document.getElementById("telefone").value
 
var objetoAluno = {
  nome: inputNome,
  matricula: inputMatricula,
  idade: inputIdade,
  mae: inputMae,
  telefone: inputTelefone
 
 
}
 
 
listaAlunos.push(objetoAluno)
console.log(listaAlunos)
 
evento.target.reset()
 
}
 
formVar.addEventListener("submit", cadastrarAluno )
 
 
 
 
 
 
 
 
 