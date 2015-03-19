var userChoice;
var score;
var myFuncCalls = -1;
roundNum = 0;
var computerOptions = ["x", "x", "y", "x", "x", "x", "x", "y", "x", "x", "x", "y", "x", "x", "x"];

var time1 = Math.floor((Math.random() * 10000) + 3000);
var time2 = Math.floor((Math.random() * 10000) + 3000);
var time3 = Math.floor((Math.random() * 10000) + 3000);


var message = function(){
    roundNum;
    if (roundNum === 1){
        return '<div class="smallFont"> Round '+roundNum+'<br><br> You will now play the other participant<br><br>Please decide whether you would like to cooperate or compete with the other player<br>(Refer to the diagram to help make your decison)<br><br>Press \"X\" if you would like to Cooperate<br><br>Press \"Y\" if you would like to Compete</div>';
    }
    else{
        return '<div class="smallFont"> Round '+roundNum+'<br><br> You will now play the other participant<br><br>Please decide whether you would like to cooperate or compete with the other player<br>(Refer to the diagram to help make your decison)<br><br>Press \"X\" if you would like to Cooperate<br><br>Press \"Y\" if you would like to Compete</div>';
    }
}

$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function(title) {
        if (!this.options.title ) {
            title.html("&#160;");
        } else {
            title.html(this.options.title);
        }
    }
}));


//Experiment Functions



var participantNo = function(){
    var pNo = prompt("Enter participant number");
            return  'Participant Number:'+pNo;
}

var countRound = function(){
    roundNum++;
    return roundNum;
}


$.extend({ prompt: function (message, title) {
setTimeout(function(){$('.closebtn').click(); }, 6000);
  $("<div></div>").dialog( {
    buttons: {
        CloseME:{ text:'CloseME', class: 'closebtn', click: function closefunc(){
            userChoice = "0"
            if (computerChoice === "x"){
                score = '<div class="resultLeft">The other player chose to:</div><br><br><br><br><span class="cooperate">Cooperate</span><br><br><br><br><div class="resultLeft">You did not select a choice<br>So no points were allocated</div>'


            }
            else{
               score = '<div class="resultLeft">The other player chose to:</div><br><br><br><br><span class="compete">Compete</span><br><br><br><br><div class="resultLeft"><div class="resultLeft">You did not select a choice<br>So no points were allocated</div>'

           }
           $(this).dialog('close');
        }

        },
        Cooperate:{ text:'Cooperate', class: 'coopbtn', click: function coopfunc() {
            userChoice = "x"
            if (computerChoice === "x"){
                score = '<div class="resultLeft">The other player chose to:</div><br><br><br><br><span class="cooperate">Cooperate</span><br><br><br><br><div class="resultLeft">So<br>You received 90 points<br> They received 90 points</div>'


            }
            else{
               score = '<div class="resultLeft">The other player chose to:</div><br><br><br><br><span class="compete">Compete</span><br><br><br><br><div class="resultLeft">So<br>You received 30 points<br> They received 120 points</div>'

           }
           $(this).dialog('close');

       }

   },

   Compete: {text:'Compete', class:'combtn', click: function comfunc() {
    userChoice = "y"
    if (computerChoice === "y"){
        score = '<div class="resultLeft">The other player chose to:</div><br><br><br><br><span class="compete">Compete</span><br><br><br><br><div class="resultLeft">So<br>You received 60 points<br> They received 60 points</div>'

    }
    else{
       score = '<div class="resultLeft">The other player chose to:</div><br><br><br><br><span class="cooperate">Cooperate</span><br><br><br><br><div class="resultLeft">So<br>You received 120 points<br> They received 30 points</div>'

   }
   $(this).dialog('close');



},
},

},

close: function (event, ui){ $(this).remove(); },
resizable: false,
title: (message),
modal: true
})
}
});



$(function(){
    $('body').keydown(function(e){
    var key = e.which;
       if(key == 89)  // the enter key code
    {
    
    $('.combtn').click();
    return false;

  }
    });
});

$(function(){
    $('body').keydown(function(e){
    var key = e.which;
       if(key == 88)  // the enter key code
    {
    
    $('.coopbtn').click();
    return false;

  }
    });
});




//Compare Function

var game = function(choice1, choice2){
    myFuncCalls++;
    computerChoice = computerOptions[myFuncCalls];
    $.prompt(message);
};

var returnChoice = function(){
    return userChoice;
};

     
// Experiment Content 
        
var cross = ['<p></p><img src= "img/cross.png" id= "cross">'];
        
var instructions2 = ['<div id="instructions">You will be playing with another participant who is connected to the game in another location.<br><br> As was discussed, the amount of points you earn will be determined by the decision that you make in combination with the decision of the other participant.<br><br> You will be playing a series of rounds.</div>'];

var connecting = [ '<div class="heading">Please wait while we connect you to another player...</div><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'
        ];

var round = function(){
    roundNum;
    if (roundNum === 1){
        return '<p> Round '+roundNum+'<br><br> You will now play the other participant</p>';
    }
    else{
        return '<p> Round '+roundNum+'<br><br> You will now play again</p>';
    }
}

var confirm = ['<p></p>']





var userScore = function() {
    score;
    return '<p>'+score+'<br><br><br><div id="enter"></div></p>';
}

var cross = ['<img src= "img/cross.png" id= "cross">'];

var page_1_questions = ['<p>Please rate how trustworthy you think the other player is by pressing a number from 1-7</p><img src= "img/scale.png" id= "scale">'];

var question = ["<div class=questions><p>Please answer whether the following statements apply to you<br><br> Press the ENTER key to continue.</p></div>"]

var greedStimuli = [
            '<div class=questions><p>"I wanted to earn more than the other person"<br><br>Press Y for Yes<br><br>Press N for no</p></div>'
];

var trustStimuli = [
           '<div class=questions><p>"I wanted to defend myself against the actions of the other person"<br><br>Press Y for Yes<br><br>Press N for no</p></div>'
];        

var debrief = ['<div class=questions><p>End of game<br><br>Please wait for further instructions from the experimenter</p></div>'];
        
        

// Define experiment blocks
             
var participantNo_block = {
    type: "call-function",
    func: participantNo,
};


var instruction_block = {
    type: "single-stim",
    stimuli: instructions2,
    choices: [1],
    timing_response: 8000,
    is_html: true,
    timing_post_trial: 10,
};

var connecting_block = {
    type: "single-stim",
    stimuli: connecting,
    choices: [1],
    timing_response: 6000,
    is_html: true,
    timing_post_trial: 10,
};

var count_block = {
    type: "call-function",
    func: countRound,
}


        
var game_block = {
    type: "call-function",
    func: game,
    args:[userChoice]
};

    
var return_block = {
    type: "call-function",
    func: returnChoice,
    args:[userChoice],
};

var confirm_block = {
    type: "single-stim",
    stimuli: [message],
    choices: [13],
    is_html: true,
    timing_response: 6000,
    timing_post_trial: 10,

};

var score_block ={
    type: "single-stim",
    stimuli: [userScore],
    choices: [1],
    timing_response: 3000,
    is_html: true,
    timing_post_trial: 10,
};

var cross_block = {
      type: "single-stim",
      stimuli: cross,
      choices: [1],
      is_html: true,
      timing_response: 2000,
      timing_post_trial: 10,
    };
        
var trust_block = {
    type: "single-stim",
    stimuli: page_1_questions,
    choices: [49, 50, 51, 52, 53, 54, 55],
    is_html: true,
    continue_after_response: false,
    timing_response: 4000,
    timing_post_trial: 10,
    
    
};
var run_chunk = {
      chunk_type: 'while',
      timeline: [count_block, game_block, return_block, confirm_block, score_block, trust_block, cross_block],
      continue_function: function(){
        if (roundNum > 14){
          return false;
        }
        else{
          return true;
        }
      }
    };




var debrief_block = {
    type: "text",
    text: [debrief],
};



//Initiate Experiment
        
 /* create experiment definition array */
    var experiment = [];
    experiment.push(participantNo_block);
    experiment.push(instruction_block);
    experiment.push(connecting_block);
    experiment.push(run_chunk);
    experiment.push(return_block);
    experiment.push(debrief_block);
    

    /* start the experiment */
    jsPsych.init({
      experiment_structure: experiment,
         on_finish: function(data){jsPsych.data.localSave('data.csv', 'csv', {subject: "n"});}
      
    
});

