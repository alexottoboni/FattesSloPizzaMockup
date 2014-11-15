function setSubs() {
    document.getElementById("menu").innerHTML = "Subs";
}

function setPizza() {
    var pathOfPizzaLayout = "pizza.html";
    var contentsOfFile = FileHelper.readStringFromFileAtPath
    (
        pathOfPizzaLayout
    );
    document.getElementById("menu").innerHTML = contentsOfFile;
}

function setSides() {
    document.getElementById("menu").innerHTML = "Sides";

}

function FileHelper()
{}
{
    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }
}
