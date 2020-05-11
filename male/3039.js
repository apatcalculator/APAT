    $(window).load(function(){
      
      	$('#TesterGroup').html("(Males 30-39)");
      
        $('input').keyup(function(){
        
        	//Tester Group
            
        	//Scores
            var push  = Number($('#A').val()); 
            var sit = Number($('#B').val()); 
            var chin  = Number($('#C').val());

            //Push Up
            if (push >= 70) {document.getElementById("PushUp").innerHTML = "Machine";}
            if (push <= 69 & push >= 50) {document.getElementById("PushUp").innerHTML = "Excellent";}
            if (push <= 49 & push >= 41) {document.getElementById("PushUp").innerHTML = "Good";}
            if (push <= 40 & push >= 36) {document.getElementById("PushUp").innerHTML = "Fair";}
            if (push <= 35 & push >= 30) {document.getElementById("PushUp").innerHTML = "Poor";}
            if (push <= 29 & push >= 1) {document.getElementById("PushUp").innerHTML = "Very Poor";}
            if (push == null | push == "") {document.getElementById("PushUp").innerHTML = "";}

            //Sit Up
            if (sit >= 70) {document.getElementById("SitUp").innerHTML = "Machine";}
            if (sit <= 69 & sit >= 43) {document.getElementById("SitUp").innerHTML = "Excellent";}
            if (sit <= 42 & sit >= 39) {document.getElementById("SitUp").innerHTML = "Good";}
            if (sit <= 38 & sit >= 35) {document.getElementById("SitUp").innerHTML = "Fair";}
            if (sit <= 34 & sit >= 30) {document.getElementById("SitUp").innerHTML = "Poor";}
            if (sit <= 29 & sit >= 1) {document.getElementById("SitUp").innerHTML = "Very Poor";}
            if (sit == null | sit == "") {document.getElementById("SitUp").innerHTML = "";}

            //Chin Up
            if (chin >= 70) {document.getElementById("ChinUp").innerHTML = "Machine";}
            if (chin <= 69 & chin >= 10) {document.getElementById("ChinUp").innerHTML = "Excellent";}
            if (chin <= 9 & chin >= 8) {document.getElementById("ChinUp").innerHTML = "Good";}
            if (chin <= 7 & chin >= 6) {document.getElementById("ChinUp").innerHTML = "Fair";}
            if (chin <= 5 & chin >= 3) {document.getElementById("ChinUp").innerHTML = "Poor";}
            if (chin <= 2 & chin >= 1) {document.getElementById("ChinUp").innerHTML = "Very Poor";}
            if (chin == null | chin == "") {document.getElementById("ChinUp").innerHTML = "";}
            
            //Run Time
            const min = 60 * Number($('#D').val() || NaN);
            const sec = Number($('#E').val() || NaN);
            const total = min + sec;
            const speed = isNaN(total) ? '' : '';

            document.getElementById("RunTime").innerHTML = speed;
            
            if (total <= 770) {document.getElementById("RunTime").innerHTML = "Excellent";}
            if (total <= 864 & (min+sec) >= 771) {document.getElementById("RunTime").innerHTML = "Good";}
            if (total <= 926 & (min+sec) >= 865) {document.getElementById("RunTime").innerHTML = "Fair";}
            if (total <= 993 & (min+sec) >= 927) {document.getElementById("RunTime").innerHTML = "Poor";}
            if (total >= 994) {document.getElementById("RunTime").innerHTML = "Very Poor";}
            if (min === null || min === "") {document.getElementById("RunTime").innerHTML = "";}
            if (sec === null || sec === "") {document.getElementById("RunTime").innerHTML = "";}
            
            //Total Score
            var pushpoint = document.getElementById("PushUp").innerHTML;
            var sitpoint = document.getElementById("SitUp").innerHTML;
            var chinpoint = document.getElementById("ChinUp").innerHTML;
            var runpoint = document.getElementById("RunTime").innerHTML;
            
            var p = [];
            var s = [];
            var c = [];
            var r = [];
            
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

			$('#Score').html(p + s + c + r);
            
        });
        
	});
