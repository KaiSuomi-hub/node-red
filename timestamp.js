// timestamp.js
function getPastTimestamp(t) {
    var d = new Date(t);
    // muista lisata yksi kuukausiin etta nayttaa oikein
    MM = d.getMonth()+1;
    DD = d.getDate();
    YY = d.getFullYear();
    hh = d.getHours();
    mm = d.getMinutes();
    var output = hh + ":" + mm + " " + DD + "." + MM + "." + YY;
    return output;
}

function getCurrentTimestamp() {
    return getPastTimestamp((new Date()).getTime());
}
document.getElementById("demo").innerHTML = getCurrentTimestamp();