$(window).load(function(){

	$('#TesterGroup').html("(Female, 30-39)");

	$('input').keyup(function(){

	    //Scores
	    const push  = Number($('#A').val() || NaN); 
	    const sit = Number($('#B').val() || NaN); 
	    const chin  = Number($('#C').val() || NaN);

	    //Push Up
	    const pushed = isNaN(push) ? '' : '';
	    document.getElementById("PushUp").innerHTML = pushed;
	    if (push >= 30) {document.getElementById("PushUp").innerHTML = "Excellent";}
	    if (push <= 29 & push >= 25) {document.getElementById("PushUp").innerHTML = "Good";}
	    if (push <= 24 & push >= 20) {document.getElementById("PushUp").innerHTML = "Fair";}
	    if (push <= 19 & push >= 13) {document.getElementById("PushUp").innerHTML = "Poor";}
	    if (push <= 12) {document.getElementById("PushUp").innerHTML = "Very Poor";}
	    if (push === null || push === "") {document.getElementById("PushUp").innerHTML = "";}

	    //Sit Up
	    const sat = isNaN(sit) ? '' : '';
	    document.getElementById("SitUp").innerHTML = sat;
	    if (sit >= 35) {document.getElementById("SitUp").innerHTML = "Excellent";}
	    if (sit <= 34 & sit >= 29) {document.getElementById("SitUp").innerHTML = "Good";}
	    if (sit <= 28 & sit >= 25) {document.getElementById("SitUp").innerHTML = "Fair";}
	    if (sit <= 24 & sit >= 20) {document.getElementById("SitUp").innerHTML = "Poor";}
	    if (sit <= 19) {document.getElementById("SitUp").innerHTML = "Very Poor";}
	    if (sit === null || sit === "") {document.getElementById("SitUp").innerHTML = "";}

	    //Chin Up
	    const chinned = isNaN(chin) ? '' : '';
	    document.getElementById("ChinUp").innerHTML = chinned;
	    if (chin >= 4) {document.getElementById("ChinUp").innerHTML = "Excellent";}
	    if (chin === 3) {document.getElementById("ChinUp").innerHTML = "Good";}
	    if (chin === 2) {document.getElementById("ChinUp").innerHTML = "Fair";}
	    if (chin === 1) {document.getElementById("ChinUp").innerHTML = "Poor";}
	    if (chin === 0) {document.getElementById("ChinUp").innerHTML = "Very Poor";}
	    if (chin === null || chin === "") {document.getElementById("ChinUp").innerHTML = "";}

	    //Run Time
	    const min = 60 * Number($('#D').val() || NaN);
	    const sec = Number($('#E').val() || NaN);
	    const total = min + sec;
	    const speed = isNaN(total) ? '' : '';
	    document.getElementById("RunTime").innerHTML = speed;
	    if (total <= 822) {document.getElementById("RunTime").innerHTML = "Excellent";}
	    if (total <= 908 & total >= 823) {document.getElementById("RunTime").innerHTML = "Good";}
	    if (total <= 957 & total >= 909) {document.getElementById("RunTime").innerHTML = "Fair";}
	    if (total <= 1034 & total >= 958) {document.getElementById("RunTime").innerHTML = "Poor";}
	    if (total >= 1035) {document.getElementById("RunTime").innerHTML = "Very Poor";}
	    if (min === null || min === "") {document.getElementById("RunTime").innerHTML = "";}
	    if (sec === null || sec === "") {document.getElementById("RunTime").innerHTML = "";}

	    //Total Score
	    var pushpoint = document.getElementById("PushUp").innerHTML;
	    var sitpoint = document.getElementById("SitUp").innerHTML;
	    var chinpoint = document.getElementById("ChinUp").innerHTML;
	    var runpoint = document.getElementById("RunTime").innerHTML;

	    var p;
	    var s; 
	    var c;
	    var r;
	    const add = Number((p +s +c +r) || NaN);
	    const final = isNaN(add) ? '' : '';
        document.getElementById("Score").innerHTML = final;

	    if (pushpoint == "Excellent") {p = 4};
	    if (pushpoint == "Good") {p = 3};
	    if (pushpoint == "Fair") {p = 2};
	    if (pushpoint == "Poor") {p = 1};
	    if (pushpoint == "Very Poor") {p = 0};

	    if (sitpoint == "Excellent") {s = 4};
	    if (sitpoint == "Good") {s = 3};
	    if (sitpoint == "Fair") {s = 2};
	    if (sitpoint == "Poor") {s = 1};
	    if (sitpoint == "Very Poor") {s = 0};

	    if (chinpoint == "Excellent") {c = 4};
	    if (chinpoint == "Good") {c = 3};
	    if (chinpoint == "Fair") {c = 2};
	    if (chinpoint == "Poor") {c = 1};
	    if (chinpoint == "Very Poor") {c = 0};

	    if (runpoint == "Excellent") {r = 4};
	    if (runpoint == "Good") {r = 3};
	    if (runpoint == "Fair") {r = 2};
	    if (runpoint == "Poor") {r = 1};
	    if (runpoint == "Very Poor") {r = 0};

	//document.getElementById("Score").innerHTML = final;
	$('#Score').html(Number(p + s + c + r));

	});
});
