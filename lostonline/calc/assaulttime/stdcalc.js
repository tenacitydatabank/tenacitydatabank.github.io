function assaulttimeStart(baseELM,plustime,assault){
	var basetime = Date.parse(baseELM.value);
	var tagstarttime = Date.parse(document.tagset.settagstarttime.value);
	var tagendtime = Date.parse(document.tagset.settagendtime.value);
	var basetimeTorF = assaultbasetimeTrueorFalse(basetime);
	var commandTorF;
	if(basetimeTorF != "true") {
		alert('基準データが無効です。')
		return false;
	}
	commandTorF = assaulttrueorfalse(tagstarttime,tagendtime);
	if(commandTorF == "true") {
	      assaulttimemain(assault,basetime,plustime,tagstarttime,tagendtime);
	}
	else {
	      alert('算出範囲が無効です。算出範囲は日付が１日違い以内でなければなりません。');
	}
}

function assaultbasetimeTrueorFalse(basetime) {
	var basetimeA = parseFloat(basetime);
	var dt = new Date();
	dt.setTime(basetimeA);
	var dayOfWeek = dt.getDay();
	
	if(dayOfWeek == 4){
		var nowdate = new Date();
		var nowdateDate = nowdate.getDate();
		var basedate = dt.getDate();
		dateDifA = parseFloat(nowdateDate) - parseFloat(basedate)
		if(dateDifA <= 7) {
			resultA = "true";
		}
		else {
			resultA = "false";
		}
	}
	
	else if(dayOfWeek == 5){
		var nowdate = new Date();
		var nowdateDate = nowdate.getDate();
		var basedate = dt.getDate();
		dateDifA = parseFloat(nowdateDate) - parseFloat(basedate)
		if(dateDifA <= 6) {
			resultA = "true";
		}
		else {
			resultA = "false";
		}
	}
	else if(dayOfWeek == 6){
		var nowdate = new Date();
		var nowdateDate = nowdate.getDate();
		var basedate = dt.getDate();
		dateDifA = parseFloat(nowdateDate) - parseFloat(basedate)
		if(dateDifA <= 5) {
			resultA = "true";
		}
		else {
			resultA = "false";
		}
	}
	else if(dayOfWeek == 0){
		var nowdate = new Date();
		var nowdateDate = nowdate.getDate();
		var basedate = dt.getDate();
		dateDifA = parseFloat(nowdateDate) - parseFloat(basedate)
		if(dateDifA <= 4) {
			resultA = "true";
		}
		else {
			resultA = "false";
		}
	}
	else if(dayOfWeek == 1){
		var nowdate = new Date();
		var nowdateDate = nowdate.getDate();
		var basedate = dt.getDate();
		dateDifA = parseFloat(nowdateDate) - parseFloat(basedate)
		if(dateDifA <= 3) {
			resultA = "true";
		}
		else {
			resultA = "false";
		}
	}
	else if(dayOfWeek == 2){
		var nowdate = new Date();
		var nowdateDate = nowdate.getDate();
		var basedate = dt.getDate();
		dateDifA = parseFloat(nowdateDate) - parseFloat(basedate)
		if(dateDifA <= 2) {
			resultA = "true";
		}
		else {
			resultA = "false";
		}
	}
	else {
		var nowdate = new Date();
		var nowdateDate = nowdate.getDate();
		var basedate = dt.getDate();
		dateDifA = parseFloat(nowdateDate) - parseFloat(basedate)
		if(dateDifA <= 1 ) {
			resultA = "true";
		}
		else {
			resultA = "false";
		}
	}
	
	return resultA;
}

function assaulttrueorfalse(tagstart,tagend) {
	var TorFchkA = new Date();
	TorFchkA.setTime(tagstart);
	var TorFchkB = new Date();
	TorFchkB.setTime(tagend);
	var TorFchkL = TorFchkA.getDate();
	var TorFchkR = TorFchkB.getDate();
	if(parseFloat(TorFchkL) == parseFloat(TorFchkR)) {
		var TorFchkL = TorFchkA.getMonth();
		var TorFchkR = TorFchkB.getMonth();
		if(parseFloat(TorFchkL) == parseFloat(TorFchkR)) {
        		TorFresult = "true";
		}
		else {
			TorFresult = "false";
		}
	}
	
	else {
		var TorFchk2L = parseFloat(TorFchkL) + 1
		if(parseFloat(TorFchk2L) == parseFloat(TorFchkR)) {
			var TorFchkL = TorFchkA.getMonth();
			var TorFchkR = TorFchkB.getMonth();
			if(parseFloat(TorFchkL) == parseFloat(TorFchkR)) {
				TorFresult = "true";
			}
			else {
				TorFresult = "false";
			}
		}
		else {
			TorFresult = "false";
		}
	}
	
	return TorFresult;
}


function assaulttimemain(assault,basetime,plustime,tagstarttime,tagendtime) {
	var PrintStartTime = getPrintStartTime(basetime,plustime,tagstarttime);
	var forDisplay = new Date();
	forDisplay.setTime(PrintStartTime);
	document.getElementById(assault + 'displaytabletr2td1').innerHTML = forDisplay.getFullYear() + "/" + (forDisplay.getMonth() + 1) + "/" + forDisplay.getDate() + "&nbsp;" + forDisplay.getHours() + ":" + forDisplay.getMinutes() + ":" +forDisplay.getSeconds();
	var PrintTime = parseFloat(PrintStartTime) + parseFloat(plustime)
	forDisplay.setTime(PrintTime);
	target = document.getElementById(assault + 'displaytabletr3');
	if(target){
	}
	else {
		var obj = document.createElement('tr');
		obj.name = assault + "displaytabletr3";
		obj.id = assault + "displaytabletr3";
		obj.align = "center";
		document.getElementById(assault + 'displaytbody').appendChild(obj);
	}
	
	target = document.getElementById(assault + 'displaytabletr3td1');
	if(target){
		target.innerHTML = forDisplay.getFullYear() + "/" + (forDisplay.getMonth() + 1) + "/" + forDisplay.getDate() + "&nbsp;" + forDisplay.getHours() + ":" + forDisplay.getMinutes() + ":" + forDisplay.getSeconds();
	}
	else {
		var obj1 = document.createElement('td');
		obj1.name = assault + "displaytabletr3td1";
		obj1.id = assault + "displaytabletr3td1";
		obj1.align = "center";
		obj1.innerHTML = forDisplay.getFullYear() + "/" + (forDisplay.getMonth() + 1) + "/" + forDisplay.getDate() + "&nbsp;" + forDisplay.getHours() + ":" + forDisplay.getMinutes() + ":" + forDisplay.getSeconds();
		document.getElementById(assault + 'displaytabletr3').appendChild(obj1);
	}
	
	
	assaulttimemaincheck(assault,PrintTime,plustime,tagendtime);
	return;
}

function assaulttimemaincheck(assault,PrintTime,plustime,tagendtime) {
	var TagEndTimeDateA = new Date();
	TagEndTimeDateA.setTime(tagendtime);
	var TagEndDate = TagEndTimeDateA.getDate();
	var TagEndHours = TagEndTimeDateA.getHours();
	var TagEndMinutes = TagEndTimeDateA.getMinutes();
	var TagEndSeconds = TagEndTimeDateA.getSeconds();
	var PrintTimeDateA = new Date();
	PrintTimeDateA.setTime(PrintTime);
	var PrintingDate = PrintTimeDateA.getDate();
	var PrintingHours = PrintTimeDateA.getHours();
	var PrintingMinutes = PrintTimeDateA.getMinutes();
	var PrintingSeconds = PrintTimeDateA.getSeconds();
	var x = "4";
	
	
	var PrintingTimeAB = PrintTimeDateA.getTime();
	while (PrintingTimeAB < tagendtime) {
		tempdata = assaulttimemaincheckGetPrintTime(PrintTime,plustime);
		PrintTime = tempdata;
		PrintTimeDateA.setTime(PrintTime);
		PrintingHours = PrintTimeDateA.getHours();
		PrintingMinutes = PrintTimeDateA.getMinutes();
		PrintingSeconds = PrintTimeDateA.getSeconds();
		PrintingTimeAB = PrintTimeDateA.getTime();
		var forDisplay = new Date();
		forDisplay.setTime(PrintTime);
		if(PrintingTimeAB > tagendtime) {
			break;
		}
		else {
			target = assault + "displaytabletr" + String(x);
			if(document.getElementById(target)) {
				
			}
			else {
				var obj = document.createElement('tr');
				obj.name = assault + "displaytabletr" + String(x);
				obj.id = assault + "displaytabletr" + String(x);
				obj.align = "center";
				document.getElementById(assault + 'displaytbody').appendChild(obj);
			}
			target = assault + "displaytabletr"+ String(x) +"td1";
			if(document.getElementById(target)) {
				document.getElementById(target).innerHTML = forDisplay.getFullYear() + "/" + (forDisplay.getMonth() + 1) + "/" + forDisplay.getDate() + "&nbsp;" + forDisplay.getHours() + ":" + forDisplay.getMinutes() + ":" +forDisplay.getSeconds();
				x++;
			}
			else {
				var obj1 = document.createElement('td');
				obj1.name = assault + "displaytabletr" + String(x) + "td1";
				obj1.id = assault + "displaytabletr"+ String(x) +"td1";
				obj1.align = "center";
				obj1.innerHTML = forDisplay.getFullYear() + "/" + (forDisplay.getMonth() + 1) + "/" + forDisplay.getDate() + "&nbsp;" + forDisplay.getHours() + ":" + forDisplay.getMinutes() + ":" +forDisplay.getSeconds();
				target = assault + "displaytabletr" + String(x);
				document.getElementById(target).appendChild(obj1);
				x++;
			}
		}
	}
	
	var A9 = "continue"
	while(A9 == "continue"){
		target = assault + "displaytabletr" + String(x);
		if(document.getElementById(target)) {
			tg = document.getElementById(target).parentNode;
			tg.removeChild(document.getElementById(target));
			x++;
		}
		else {
			break;
		}
	}
	
	return;
}

function assaulttimemaincheckGetPrintTime(PrintTime,plustime) {
	var result = parseFloat(PrintTime) + parseFloat(plustime);
	return result;
}

function getPrintStartTime(basetime,plustime,tagstarttime) {
	var BaseTimeA = new Date();
	BaseTimeA.setTime(basetime);
	var TagStartTimeA = new Date();
	TagStartTimeA.setTime(tagstarttime);
	if(BaseTimeA.getDate() == TagStartTimeA.getDate()) {
		var basedata = getPrintStartTimeGetBasedataZero(basetime,plustime);
	}
	else {
		var basedata = getPrintStartTimeGetBasedataToday(basetime,plustime,tagstarttime);
		basetime = basedata;
		basedata = getPrintStartTimeGetBasedataZero(basetime,plustime,tagstarttime);
	}
	
	var TagStartTimeDateA = new Date();
	TagStartTimeDateA.setTime(tagstarttime);
	var TagStartTimeHours = TagStartTimeDateA.getHours();
	var TagStartTimeMinutes = TagStartTimeDateA.getMinutes();
	var TagStartTimeSeconds = TagStartTimeDateA.getSeconds();
	n = (parseFloat(TagStartTimeHours) * 3600) + (parseFloat(TagStartTimeMinutes) * 60) + parseFloat(TagStartTimeSeconds);
	
	if(n <= 3600){
		var result = basedata;
	}
	else {
		var tempdata = parseFloat(basedata) + parseFloat(plustime);
		var result = getPrintStartTimeCheck(tempdata,plustime,tagstarttime);
	}
	
	return result;
}

function getPrintStartTimeCheck(tempdata,plustime,tagstarttime) {
	while (parseFloat(tagstarttime) > tempdata) {
		tempdataB = getPrintStartTimeCheckPlugin(tempdata,plustime);
		tempdata = tempdataB;
	}
	return tempdata;
}

function getPrintStartTimeCheckPlugin(tempdata,plustime) {
	var result = parseFloat(tempdata) + parseFloat(plustime);
	return result;
}

function getPrintStartTimeGetBasedataZero(basetime,plustime) {
	var tempdata = parseFloat(basetime) - parseFloat(plustime);
	var result = getPrintStartTimeGetBasedataZeroCheck(tempdata,plustime);
	return result;
}

function getPrintStartTimeGetBasedataZeroCheck(tempdata,plustime) {
	var TempDataDate = new Date();
	TempDataDate.setTime(tempdata);
	var TempDataYear = TempDataDate.getFullYear();
	var TempDataMonth = TempDataDate.getMonth();
	var TempDataDate = TempDataDate.getDate();
	var TodayZeroOClockforcalc = new Date();
	TodayZeroOClockforcalc.setFullYear(parseFloat(TempDataYear));
	TodayZeroOClockforcalc.setMonth(parseFloat(TempDataMonth));
	TodayZeroOClockforcalc.setDate(parseFloat(TempDataDate));
	TodayZeroOClockforcalc.setHours(0);
	TodayZeroOClockforcalc.setMinutes(0);
	TodayZeroOClockforcalc.setSeconds(0);
	var TodayZeroOClock = TodayZeroOClockforcalc.getTime();
	var TimeDifA = parseFloat(tempdata) - parseFloat(TodayZeroOClock);
	var TimeDifAforcalc = new Date();
	TimeDifAforcalc.setTime(TimeDifA);
	TimeDifAhours = TimeDifAforcalc.getUTCHours();
	TimeDifAminutes = TimeDifAforcalc.getMinutes();
	TimeDifAseconds = TimeDifAforcalc.getSeconds();
	n = (parseFloat(TimeDifAhours) * 3600) + (parseFloat(TimeDifAminutes) * 60) + parseFloat(TimeDifAseconds);
	while (n > 3600) {
		tempdataB = getPrintStartTimeGetBasedataZeroCheckPlugin(tempdata,plustime);
		tempdata = tempdataB;
		TimeDifA = parseFloat(tempdata) - parseFloat(TodayZeroOClock);
		TimeDifAforcalc.setTime(TimeDifA);
		TimeDifAhours = TimeDifAforcalc.getUTCHours();
		TimeDifAminutes = TimeDifAforcalc.getMinutes();
		TimeDifAseconds = TimeDifAforcalc.getSeconds();
		n = (parseFloat(TimeDifAhours) * 3600) + (parseFloat(TimeDifAminutes) * 60) + parseFloat(TimeDifAseconds);
	}
	return tempdata;
}

function getPrintStartTimeGetBasedataZeroCheckPlugin(tempdata,plustime) {
	var result = parseFloat(tempdata) - parseFloat(plustime);
	return result;
}

function getPrintStartTimeGetBasedataToday(basetime,plustime,tagstarttime) {
	var plustimeResidue = 86400000 % plustime;
	var tempdataTemp = new Date();
	tempdataTemp.setTime(basetime - plustimeResidue);
	tempdataTemp.setDate(tempdataTemp.getDate() + 1);
	var tempdata = tempdataTemp.getTime();
	var result = getPrintStartTimeGetBasedataTodayCheck(tempdata,plustime,tagstarttime);
	return result;
}

function getPrintStartTimeGetBasedataTodayCheck(tempdata,plustime,tagstarttime) {
	var tempdataDate = new Date();
	tempdataDate.setTime(tempdata);
	var TagStartTimeA = new Date();
	TagStartTimeA.setTime(tagstarttime);
	var TagStartDateA = TagStartTimeA.getDate();
	var tempdataDateA = tempdataDate.getDate();
	var DateDifA = parseFloat(TagStartDateA) - parseFloat(tempdataDateA);
	while (DateDifA > 0) {
		tempdataB = getPrintStartTimeGetBasedataTodayCheckPlugin(tempdata,plustime,tagstarttime);
		tempdata = tempdataB
		tempdataDate.setTime(tempdata);
		tempdataDateA = tempdataDate.getDate();
		DateDifA = parseFloat(TagStartDateA) - parseFloat(tempdataDateA);
	}
	return tempdata;
}

function getPrintStartTimeGetBasedataTodayCheckPlugin(tempdata,plustime,tagstarttime) {
	var plustimeResidue = 86400000 % plustime;
	var tempdataTemp = new Date();
	tempdataTemp.setTime(tempdata - plustimeResidue);
	tempdataTemp.setDate(tempdataTemp.getDate() + 1);
	var result = tempdataTemp.getTime();
	return result;
}