function setSubs() {
    var pathOfSubsLayout = "subs.html";
    var contentsOfFile = Filehelper.readStringFromFileAtPath
    (
        pathOfSubsLayout
    );
    document.getElementById("menu").innerHTML = contentsOfFile;
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
    var pathOfSidesLayout = "sides.html";
    var contentsOfFile = Filehelper.readStringFromFileAtPath
    (
        pathOfSidesLayout
    );
    document.getElementById("menu").innerHTML = contentsOfFile;

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
