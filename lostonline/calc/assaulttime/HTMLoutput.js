function HTMLout() {

	var HTMLbase = document.getElementById('HTMLdiv');

	HTMLbase.style.display = "block";

	var scrTop = document.body.scrollTop || document.documentElement.scrollTop;

	var scrLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

	var dispWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;

	HTMLbase.style.top = (scrTop + 50) + "px";

	HTMLbase.style.left = ( (dispWidth / 2) - 150 + scrLeft ) + "px";

	var sumidaOutHTML = "", cityOutHTML = "", pastOutHTML = "", sewerOutHTML = "", nobunagaOutHTML = "", hideyosiOutHTML = "", ghostOutHTML = "", otherOutHTML = "";

	sumidaOutHTML = document.getElementById('sumidamainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('sumidamainDiv').innerHTML + "</div>");

	cityOutHTML = document.getElementById('citymainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('citymainDiv').innerHTML + "</div>");

	pastOutHTML = document.getElementById('pastasamainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('pastasamainDiv').innerHTML + "</div>");

	sewerOutHTML = document.getElementById('sewermainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('sewermainDiv').innerHTML + "</div>");

	nobunagaOutHTML = document.getElementById('nobunagamainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('nobunagamainDiv').innerHTML + "</div>");

	hideyosiOutHTML = document.getElementById('hideyosimainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('hideyosimainDiv').innerHTML + "</div>");

	ghostOutHTML = document.getElementById('ghostmainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('ghostmainDiv').innerHTML + "</div>");
	mshipOutHTML = document.getElementById('mshipmainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('mshipmainDiv').innerHTML + "</div>");
	emergeOutHTML = document.getElementById('emergemainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('emergemainDiv').innerHTML + "</div>");

	otherOutHTML = document.getElementById('othermainDiv').outerHTML || ("<div width='100%'>" + document.getElementById('othermainDiv').innerHTML + "</div>");

	var startDate, endDate;

	startDate = document.getElementById('settagstarttime').value;

	endDate = document.getElementById('settagendtime').value;

	var brdata = String.fromCharCode(13,10);

	outputHTMLdata = "<HTML>" + brdata + "<head>" + brdata + "<title>ÉAÉTÉãÉgéûçèåvéZåãâ (Powered By ÅöÇoÇ`ÇqÇ`ÇcÇhÇrÅöé∑íÖ)</title>" + brdata + "</head>" + brdata + "<body>" + brdata + "<H1 align='center'>ÉAÉTÉãÉgéûçèåvéZåãâ </H1>";

	outputHTMLdata = outputHTMLdata + brdata + sumidaOutHTML + brdata + cityOutHTML + brdata + pastOutHTML + brdata + sewerOutHTML + brdata + nobunagaOutHTML + brdata + hideyosiOutHTML + brdata + ghostOutHTML + brdata + mshipOutHTML + brdata + emergeOutHTML + brdata + otherOutHTML + brdata + "</body></HTML>";

	document.getElementById('HTMLdata').value = outputHTMLdata;

}

function saveHTMLclose() {

	document.getElementById('HTMLdiv').style.display = "none";

}