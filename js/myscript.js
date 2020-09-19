//console.log('2');
/*
var nr1 = '12';
var nr2 = 33
var a="text"
console.log(nr1,nr2,a);
var sum=nr1+nr2;
console.log(sum);
var sub=nr2-nr1;
var mult=nr1*nr2;
var div=nr2/nr1;
var yes=false;
//inkrementim
nr2=nr2+2; //ekuivalente me nr+=2

//shuma e dy numrave
function myFxn(a,b){

  return a+b;
}
var shuma=myFxn(3,4);
//funksion qe ben nje mesazh
function mesazh(pershendetje){
alert(pershendetje);

}
var abc = mesazh('ckemi');

//funksion qe konverton inches ne

function inchTocm(inches){
  var cm = 2.54*inches;
  return cm;

}
console.log(inchTocm(1))

//funksion qe afishon fjalin numrat qe ju keni perdorua jane

function afishoNr(a,b){

alert('Numrat qe keni perdorua jane' +a+ ' '+b);


  return a,b;

}
var a=afishoNr(1,2);


//funksion qe shkruan ne dokument shumen e tre numrave
function afisho(a,b,c){
document.write(a+b+c);
}
var afishim=afisho(2,3,5)


//krijoni nje funksion (8/2)-4*6
function ekuacion(a,b,c,d){
var k=(a/b)-c*d;

return k;
}
var zh=ekuacion(8,2,4,6)
var fh=ekuacion(7,2,5,1)

//nje funksion qe afishon dyfishin e nje numri
function double(x){
var t=2*x;
return t;
}
var sh=double(3)


//krijojme dy variabla,njeri true dhe tjetri false
var var1=true;
var var2=false;
var var3=3;
var var4=3;
if(var3>var4){
  document.write(var3 + "eshte me madhe se "+ var4);

}
else if(var3==var4){
  document.write( "Numrat jane te barabarte");
}
else {
  document.write(var4 + "eshte me e madhe se"+ var3);

}
//funksion qe krahason dy numra
function krahaso(a,b,c) {
  if(a>b)
  return a;
  else if(a==b)
  document.write('jane te barabarta');
  return a;
  else{
    return b;
  }
  }
  var ft=krahaso(1,2);
  var nr2=krahaso(nr,10);






console.log(var1&&var2);
console.log(var1 || var2);
console.log(var1 && var1);







//konkatenim string+numer
alert("Nr2 eshte i barabarte me "+nr2);
document.write("Nr2 eshte i barabarte me "+' '+nr2);

*/

var colors=['Red','Green','Blue'];
var heq=colors.slice(0,2);
console.log(heq);

//nga array ne string
document.write('<br>')
document.write(colors.join('-'));

console.log(colors.toString());




//funksion qe gjen elem me te madh ne array dhe hiqe
var vec1=[1,9,3,4,5];
function findElem(vec){
   vec=vec.sort();
   document.write(vec[vec.length-1]);
   vec.pop();
  document.write('<br> Array perfundimtar eshte:');
  document.write(vec);

}
findElem(vec1)
//ciklet
//ushtrim afisho numrat nga 1-10

var i=0;
while(i<=10){
  document.write(i);
  document.write('<br>');
  i++
}
document.write("<br> kemi arritur deri ne fund te ciklit")


//nxjerrim ne ckonsol elem e nje Array
var k=0;
while (k<vec1.length){
  console.log(vec1[k])
  k++
}


document.getElementById('demo1').innerHTML=123;

i=0;
//numrat nga 0 ne 5
//document.getElementsById('demo1').innerHtml=m+''
var text = '';
for (var m=0;m<=5;m++){
text+=m+ ' ';

}
document.getElementById('demo1').innerHTML=text;

//krijoni nje funksion qe merr 2 parametra , i pari eshte nr i pare dhe i dyti nr i fundit dhe te gjen shumen e numrave midis

function gjejShumen(nr1,nr2){
  var s=0;
  if(nr1>nr2){
    alert('Numri i pare duhet te jete me i vogel!')
  }
  else{
  for (var i=nr1;i<=nr2;i++){
  s += i;
  }
  return s;
}
}
console.log(gjejShumen(8,3));


var student = {
  firstname:"Leo",
  lastname :"tern",
  class:"A",
  subject:"IT",
  marks:"80",
  getName:function(){
    return this.firstname + " " + this.subject + " " + this.marks
  }

}
console.log(student.getName())
