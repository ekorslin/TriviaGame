window.onload = function() {
        $("#start-screen").show();
        $("#questions").hide();
        $("#score-board").hide();};

var correct = 0;
var incorrect = 0;
var unanswered = 5;

        function scoreUpdate () {
            $("#score-board").append("Correct Answers: " + correct + "<br>");
            $("#score-board").append("Incorrect Answers: " + incorrect +"<br>");
            $("#score-board").append("Unanswered Questions: " + unanswered);
        }

$(document).ready(function(){
    $("#start").click(function(){
        $("#questions").show();
        $("#start-screen").hide();
        var counter = 6;
        var interval = setInterval(function(){ 
        counter--;
        if (counter === -1) {
            clearInterval(interval);
            $("#questions").hide();
            $("#score-board").show();
            scoreUpdate();
        } else 
    $("#clock").text(counter);},1000);})});
 
$(document).ready(function(){
        $("input[name='jordan']").click(function(){
            var jordanResponse = $("input[name='jordan']:checked").val();
            if (jordanResponse === "false") {
                correct++;
                unanswered--;
            } else {
                incorrect++;
                unanswered--;
            }
            })});   
$(document).ready(function(){ 
        $("input[name='bryant']").click(function(){
            var bryantResponse = $("input[name='bryant']:checked").val();
            if (bryantResponse === "false") {
                correct++;
                unanswered--;
            } else {
                incorrect++;
                unanswered--;
            }
            })});  
    $(document).ready(function(){
        $("input[name='favre']").click(function(){
            var favreResponse = $("input[name='favre']:checked").val();
            if (favreResponse === "false") {
                correct++;
                unanswered--;
            } else {
                incorrect++;
                unanswered--;
            }
            })});  
    $(document).ready(function(){
        $("input[name='mario']").click(function(){
            var marioResponse = $("input[name='mario']:checked").val();
            if (marioResponse === "true") {
                correct++;
                unanswered--;
            } else {
                incorrect++;
            }
            })});    
    $(document).ready(function(){
        $("input[name='luigi']").click(function(){
            var luigiResponse = $("input[name='luigi']:checked").val();
            if (luigiResponse === "true") {
                correct++;
                unanswered--;
                console.log(unanswered);
            } else {
                incorrect++;
                unanswered--;
            }
            })});  

