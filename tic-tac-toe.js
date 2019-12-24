var game=1, score1=0, score2=0;

var turn=1;
var data = [0,0,0,0,0,0,0,0,0];
var over=false;
var timer=false;
var done=false;

function reset(){
data = [0,0,0,0,0,0,0,0,0];
turn=1;
var i=0;
while(i<9){
document.getElementById(String(i)).innerHTML="";
i++;
}
}


function addRow(winner){
var row = document.getElementById("score").insertRow(game);
//var row = table.insertRow(game);
row.insertCell(0).innerHTML = game;
row.insertCell(1).innerHTML = winner;
row.insertCell(2).innerHTML = score1;
row.insertCell(3).innerHTML = score2;
}


function print(args){
var index = Number(args);
if(timer) timer=false;
else{
if(data[index]==0){
if(turn%2==0){
document.getElementById(args).innerHTML = "O";
data[index] = 2;
}

else{
document.getElementById(args).innerHTML = "X";
data[index] = 1;
}

turn = turn+1;
var col2 = (index+6)%9;
var col1 = (index+3)%9;
var col_check = (data[index]==data[col1]) && (data[index]==data[col2] && data[index]!=0);
var row = 3*Math.floor(index/3);
var row_check = ((data[row]==data[row+1]) && (data[row+1]==data[row+2] && data[row]!=0));
var d1_check = ((data[0]==data[4]) && (data[4]==data[8]) && (data[0]!=0));
var d2_check = (data[2]==data[4] && data[4]==data[6] && data[2]!=0);

if(row_check || col_check || d1_check || d2_check){
var counter=0;

timer=true;
over=true;
if(game%2==1) winner=data[index];
else winner=3-data[index];
winner = data[index];
if(winner==2){
score2 += 4;
}
else{
score1 += 4;
}
addRow(winner);
var counter=0;
var interval = setInterval(function() {
//counter++;
document.getElementById("result").innerHTML = "Player " + winner + " Won! Starting a new game in "  + (5-counter) + " seconds...";
if(counter==5 || !timer){
reset();
clearInterval(interval);
document.getElementById("result").innerHTML="";
//timer=false;
}
counter++;
}, 1000);
game++;
}

else if (turn>9){
timer=true;
turn=1;
var counter=0;
over=true;
//document.getElementById("result").innerHTML = "Match Tied";
score2+=1;
score1+=1;
reset();
addRow("T");
var interval = setInterval(function() {

document.getElementById("result").innerHTML = "Match Tied! Starting a new game in "  + (5-counter) + " seconds...";
if(counter==5 || !timer){
reset();
clearInterval(interval);
document.getElementById("result").innerHTML="";
//timer=false;
}
counter++;
}, 1000);
game++;
}
}

else if(data[index]!=0 && timer){
reset();
document.getElementById("result").innerHTML="";
timer=false;
}

else if(data[index]=0 && timer){
reset();
document.getElementById("result").innerHTML="";
timer=false;

}
}}
