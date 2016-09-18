

window.alert(30+75);

function convertBinary(){
   var binaryNumber = document.getElementById('binary').value;
   binaryNumber = parseInt(binaryNumber,2);
   var decimalNumber = binaryNumber.toString(10);
   
document.getElementById("p1").innerHTML= decimalNumber;
 }

function myFunction() {
    var x = Math.floor((Math.random() * 100) + 1);
    document.getElementById("demo").innerHTML = x;
}


function fun(){
var x=Math.max(99,70,122,212,55,30,2);

document.getElementById("max1").innerHTML= x ;

}

function nam(){
var x=document.getElementById("text1").value;
var y=document.getElementById("text2").value;


document.getElementById("max").innerHTML=x +" "+ y;



}


function myname() {
    var x = document.getElementById("mySelect");
    x.remove(x.selectedIndex);
}



function mybox() {
    var person = prompt("Please enter your name", "MAHIPAL REDDY");
    if (person != null) {
        document.getElementById("demo1").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}







function myFun() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}
