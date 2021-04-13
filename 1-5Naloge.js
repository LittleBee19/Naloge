// 1. Naloga 
for(i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("Trojka");
        console.log("Petka");
        // ali:
        // console.log("Trojka Petka");
    } else if(i % 3 == 0) {
        console.log("Trojka");
    } else if(i % 5 == 0) {
        console.log("Petka");
    } else {
        console.log(i);
    }
}

// 2. Naloga
(function () {
    length = 20;
    for (var index = 0; index < this.length; index++) {
        function timer() {
            var i = index;
            setTimeout(function () {
                console.log(i);
            }, index * 200);
        }
        timer();
    }
})();

// 3. Naloga
(function () {
    if (navigator.appVersion.indexOf("MSIE 7.") != -1) {
        alert("Hello World");
    }
})();

// 4. Naloga
var object = { 
    confirmation: function (alertTxt, confirmTxt) { 
        alert(alertTxt); 
        confirm(confirmTxt);
    }, 
 }	
        
object.confirmation("Warning: you are about to delete this item!", "Are you sure?"); 

// 5. Naloga
document.getElementById("element1").addEventListener('mousemove', event => {
    addCoor(event, "ena");
})
document.getElementById("element2").addEventListener('mousemove', event => {
    addCoor(event, "dve");
})
document.getElementById("element3").addEventListener('mousemove', event => {
    addCoor(event, "tri");
})

function addCoor(e, id) {
    var x = e.clientX;
    var y = e.clientY;
    if(id === "ena") {
        var koordinate = "Koordinate element 1: (" + x + "," + y + ")";
        document.getElementById("ena").innerHTML = koordinate;
    } else if(id === "dve") {
        var koordinate = "Koordinate element 2: (" + x + "," + y + ")";
        document.getElementById("dve").innerHTML = koordinate;
    } else if(id === "tri") {
        var koordinate = "Koordinate element 3: (" + x + "," + y + ")";
        document.getElementById("tri").innerHTML = koordinate;
    }
}

function clearCoor() {
    document.getElementById("ena").innerHTML = "";
    document.getElementById("dve").innerHTML = "";
    document.getElementById("tri").innerHTML = "";
}