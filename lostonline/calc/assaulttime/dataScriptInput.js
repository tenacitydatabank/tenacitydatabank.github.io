function SinputDisplay() {
	var SinputdivELM = document.getElementById('Sinputdiv');

	var scrTop = document.body.scrollTop || document.documentElement.scrollTop;

	var scrLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

	var dispWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;

	SinputdivELM.style.top = (scrTop + 50) + "px";

	SinputdivELM.style.left = ( (dispWidth / 2) - 150 + scrLeft ) + "px";

	if (SinputdivELM.style.display == "block") {
		SinputdivELM.style.display = "none";
	}
	 else {
		SinputdivELM.style.display = "block";
	}

}

function SinputReadmeDisplay() {
	var SinputReadmedivELM = document.getElementById('sinputReadme');

	var scrTop = document.body.scrollTop || document.documentElement.scrollTop;

	var scrLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

	var dispWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;

	SinputReadmedivELM.style.top = (scrTop + 50) + "px";

	SinputReadmedivELM.style.left = ( (dispWidth / 2) - 150 + scrLeft ) + "px";

	if (SinputReadmedivELM.style.display == "block") {
		SinputReadmedivELM.style.display = "none";
	}
	 else {
		SinputReadmedivELM.style.display = "block";
	}

}

function scriptInput(){
	var brdata, brstart, brend, dataArray, i, j, n, itemName, result;
	document.getElementById('brdata').value = "abcde\n12345";
	brstart = document.getElementById('brdata').value.indexOf("e")+1;
	brend = document.getElementById('brdata').value.indexOf("1");
	brdata = document.getElementById('brdata').value.slice(brstart,brend);
	dataArray = document.getElementById('baseScript').value.split(brdata);
	n = dataArray.length;
	for(i=0;i<n;i++){
		itemName = dataArray[i].split(" ")[0];
		j = itemName.length + 1;
		while(dataArray[i].slice(j,j+1)==" "){j++;}
		result = dataArray[i].slice(j);
		scriptWrite(itemName, result);
	}
}

function scriptWrite(name, data){
	var result, sumida, city, past, sewer, nobunaga, hideyosi, ghost, mother, other;
	sumida = name.indexOf("‹÷“c");
	result = name.indexOf("–n“c");
	if(result != -1){sumida=result; result=-1;}
	city = name.indexOf("ƒVƒeƒB");
	past = name.indexOf("¶•¨");
	result = name.indexOf("¶‚à‚Ì");
	if(result != -1){past=result; result=-1;}
	result = name.indexOf("‚È‚Ü‚à‚Ì");
	if(result != -1){past=result; result=-1;}
	result = name.indexOf("ŠC‘¯");
	if(result != -1){past=result; result=-1;}
	result = name.indexOf("‰ß‹Ž");
	if(result != -1){past=result; result=-1;}
	sewer = name.indexOf("‰º…");
	result = name.indexOf("HŽ–");
	if(result != -1){sewer=result; result=-1;}
	nobunaga = name.indexOf("M");
	result = name.indexOf("D“c");
	if(result != -1){nobunaga=result; result=-1;}
	hideyosi = name.indexOf("G");
	result = name.indexOf("‰HŽÄ");
	if(result != -1){hideyosi=result; result=-1;}
	ghost = name.indexOf("—H—ì");
	mother = name.indexOf("•ê‘D");
	emerge = name.indexOf("•sŽž’…");
	other = name.indexOf("‘¼");
	result = name.indexOf("ƒgƒ‰");
	if(result != -1){other=result; result=-1;}
	result = name.indexOf("ƒ}ƒt");
	if(result != -1){other=result; result=-1;}
	result = name.indexOf("ƒ{ƒ‹");
	if(result != -1){other=result; result=-1;}
	result = name.indexOf("Ží");
	if(result != -1){other=result; result=-1;}
	if(sumida != -1){document.getElementById('sumidasetbasetime').value = dataOptimize(data);}
	else if(city != -1){document.getElementById('citysetbasetime').value = dataOptimize(data);}
	else if(past != -1){document.getElementById('pastasasetbasetime').value = dataOptimize(data);}
	else if(sewer != -1){document.getElementById('sewersetbasetime').value = dataOptimize(data);}
	else if(nobunaga != -1){document.getElementById('nobunagasetbasetime').value = dataOptimize(data);}
	else if(hideyosi != -1){document.getElementById('hideyosisetbasetime').value = dataOptimize(data);}
	else if(ghost != -1){document.getElementById('ghostsetbasetime').value = dataOptimize(data);}
	else if(mother != -1){document.getElementById('mshipsetbasetime').value = dataOptimize(data);}
	else if(emerge != -1){document.getElementById('emergesetbasetime').value = dataOptimize(data);}
	else if(other != -1){document.getElementById('otherasasetbasetime').value = dataOptimize(data);}
}

function dataOptimize(data){
	var dateArray, today, thisYear, thisMonth, timeArray, result, dataArray = data.split(" ");
	dateArray = dataArray[0].split("/");
	if(dateArray[2]){void(0);}
	else if(dateArray[1]){
		today = new Date();
		thisYear = parseInt(today.getFullYear());
		if(dataArray[0] == "12/25" || dataArray[0] == "12/26" || dataArray[0] == "12/27" || dataArray[0] == "12/28" || dataArray[0] == "12/29" || dataArray[0] == "12/30" || dataArray[0] == "12/31" ){
			if(parseInt(today.getMonth()) == 0){thisYear--;}
		}
		dataArray[0] = thisYear + "/" + dataArray[0];
	}
	else{
		today = new Date();
		thisYear = parseInt(today.getFullYear());
		thisMonth = parseInt(today.getMonth());
		if(dataArray[0] == 25 || dataArray[0] == 26 || dataArray[0] == 27 || dataArray[0] == 28 || dataArray[0] == 29 || dataArray[0] == 30 || dataArray[0] == 31 ){
			if(parseInt(today.getDate()) == 1 || parseInt(today.getDate()) == 2 || parseInt(today.getDate()) == 3 || parseInt(today.getDate()) == 4 || parseInt(today.getDate()) == 5 || parseInt(today.getDate()) == 6 || parseInt(today.getDate()) == 7){
				if(parseInt(today.getMonth()) == 0){thisYear--; thisMonth = 11;}
				else{thisMonth--;}
			}
		}
		else{void(0);}
		thisMonth++;
		dataArray[0] = thisYear + "/" + thisMonth + "/" + dataArray[0];
	}
	if(dataArray[1]){
		timeArray = dataArray[1].split(":");
		if(timeArray[2]){void(0);}
		else if(timeArray[1]){
			dataArray[1] = "0:" + dataArray[1];
		}
		else{
			dataArray[1] = "0:" + dataArray[1] + ":0";
		}
		result = dataArray[0] + " " + dataArray[1];
	}
	else{result = dataArray[0] + " 00:00:00";}
	return result;
}