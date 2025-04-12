const loveScore = Math.floor(Math.random() * 100);

if (loveScore > 70) {
    console.log(`Your love score is ${loveScore}, you go together like coke and mentos.`);
} else if (loveScore > 40) {    
    console.log(`Your love score is ${loveScore}, you are alright together.`);
} else {        
    console.log(`Your love score is ${loveScore}, you go together like oil and water.`);
}


$(document).ready(function() {
    $("#submit").click(function() {
        const name1 = $("#name1").val();
        const name2 = $("#name2").val();
        loveCalculator(name1, name2);
    });

    $("#btn").click(function() {
        $(".para").text("Calculating...")
    })
});


document.getElementById("btn").addEventListener("click" ,loveCalculator);



function loveCalculator() {
    
    if (loveScore > 70) {
        document.getElementById("love-result").innerHTML = `Your love score is ${loveScore}%! You go together like coke and mentos.😍❤️❤️`
    } else if (loveScore > 40) {    
        document.getElementById("love-result").innerHTML = `Your love score is ${loveScore}%! You are alright together.😊❤️❤️`
    } else {        
        document.getElementById("love-result").innerHTML = `Your love score is ${loveScore}%! You go together like oil and water.😔💔💔`
}
    
}