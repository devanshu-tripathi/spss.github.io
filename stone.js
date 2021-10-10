function rpsGame(yourChoice){
     console.log(yourChoice.id);
     var humanChoice,botChoice;
     humanChoice=yourChoice.id;
   botChoice=numberTOchoice(randToRpsInt());
   console.log(botChoice);
   results= decideWinner(humanChoice,botChoice);
   console.log(results);
   message=finalMessage(results);
   console.log(message);
   rpsFrontEnd(humanChoice,botChoice,message)
 }
 function randToRpsInt(){
     return Math.floor(Math.random()*3);
 }
 function numberTOchoice(number){
     return ['stones','paper','sissor'][number];
 }
 function decideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'stones':{'sissor': 1, 'stones': 0.5,'paper': 0},
        'sissor':{'sissor': 0.5 ,'stones': 0 ,'paper': 1},
        'paper':{'sissor': 0 ,'stones': 1 , 'paper': 0.5}
    };
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
    
    return [yourScore ,computerScore];
}
function finalMessage([yourScore ,computerScore]){
    if(yourScore===0){
        return {'messege':'you lost !','color':'red'}
       
    }
    else if(yourScore===0.5){
        return {'messege':'match tied!','color':'yellow'}
      
    }
    else {
     return {'messege':'you won !','color':'green'}
    }

}
function rpsFrontEnd(humanImageChoice,botImageChoice,message){
    var imagesDatabase={
        'stones':document.getElementById('stones').src,
        'sissor':document.getElementById('sissor').src,
        'paper':document.getElementById('paper').src,        
    }
     document.getElementById('stones').remove();
     document.getElementById('sissor').remove();
     document.getElementById('paper').remove();
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var playAgainDiv = document.createElement('div');
    humanDiv.innerHTML =  "<img src='"+imagesDatabase[humanImageChoice]+"'>";
    messageDiv.innerHTML ="<h1 style='color: "+message.color+";font-size:85px' >" + message.messege+ "</h1>";
    botDiv.innerHTML = "<img src='"+imagesDatabase[botImageChoice]+"'>";  document.getElementById('flex-box-rps-div').appendChild(botDiv);
     playAgainDiv.innerHTML ="<h1 style='color:black;font-size:85px' >" + "play again" + "</h1>";
     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
     document.getElementById('flex-box-rps-div').appendChild(messageDiv);
     document.getElementById('flex-box-rps-div').appendChild(botDiv);
     document.getElementById('a').appendChild(playAgainDiv);
}
