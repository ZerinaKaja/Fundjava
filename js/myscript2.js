/*
var person ={
firstmane:"John",
lastname:"Doe",
age:"23",
getName :function(){
  return this.firstname + " " + this.lastname
}
};
console.log(person.age);

*/

document.getElementById('demoo').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

document.getElementById('demoo').style.color = "blue";
document.querySelector('body').style.backgroundColor = "grey";


function ndrysho(){
  document.querySelector("#button").innerHTML= "changed"
  document.querySelector("#button").style.backgroundColor = 'yellow'
}

document.querySelector("#button").addEventListener("dblclick",function(){
this.innerHTML= "aaaaa"
this.style.backgroundColor = 'green'

})

document.querySelector('button').addEventListener("dblclick",function(){
document.querySelector('#button').style.backgroundColor = " lightgreen";





})
