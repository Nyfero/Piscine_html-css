function getR()
{
	return Math.floor(Math.random() * (256));
}

function myFunc()
{
	$("body").css("background-color", "rgb(" + getR() + "," + getR() + "," + getR() + ")");
}
