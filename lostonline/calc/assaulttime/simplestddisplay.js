function resultdisplay(assault,formELM) {
	var assaultName;
		if(assault=="sumida"){
			assaultName = "隅田公園";
		}
		else if(assault=="city"){
			assaultName = "シティタワー";
		}
		else if(assault=="pastasa"){
			assaultName = "過去年代";
		}
		else if(assault=="sewer"){
			assaultName = "工事現場 下水道";
		}
		else if(assault=="nobunaga"){
			assaultName = "織田信長";
		}
		else if(assault=="hideyosi"){
			assaultName = "羽柴秀吉";
		}
		else if(assault=="ghost"){
			assaultName = "幽霊船";
		}
		else if(assault=="mship"){
			assaultName = "パラサイト母船";
		}
		else if(assault=="emerge"){
			assaultName = "不時着";
		}
		else{
			assaultName = "その他";
		};
	
	if(formELM.checked){
		var titleELM = document.createElement('H2');
		titleELM.id = assault + "displaytitle";
		titleELM.innerHTML = assaultName + "アサルト";
		document.getElementById(assault + 'mainDiv').appendChild(titleELM);
		var tableELM = document.createElement('table');
		tableELM.id = assault + "displaytable";
		tableELM.border = "1";
		tableELM.width = "100%";
		document.getElementById(assault + 'mainDiv').appendChild(tableELM);
		var tbodyELM = document.createElement('tbody');
		tbodyELM.id = assault + "displaytbody";
		document.getElementById(assault + 'displaytable').appendChild(tbodyELM);
		var tr1ELM = document.createElement('tr');
		tr1ELM.id = assault + "displaytabletr1";
		tr1ELM.align = "center";
		document.getElementById(assault + 'displaytbody').appendChild(tr1ELM);
		var tr1td1ELM = document.createElement('td');
		tr1td1ELM.id = assault + "displaytabletr1td1";
		tr1td1ELM.align = "center";
		tr1td1ELM.innerHTML = assaultName + "結果";
		document.getElementById(assault + 'displaytabletr1').appendChild(tr1td1ELM);
		var tr2ELM = document.createElement('tr');
		tr2ELM.id = assault + "displaytabletr2";
		tr2ELM.align = "center";
		document.getElementById(assault + 'displaytbody').appendChild(tr2ELM);
		var tr2td1ELM = document.createElement('td');
		tr2td1ELM.id = assault + "displaytabletr2td1";
		tr2td1ELM.align = "center";
		tr2td1ELM.innerHTML = "処理未実行";
		document.getElementById(assault + 'displaytabletr2').appendChild(tr2td1ELM);
	}
	else{
		document.getElementById(assault + 'mainDiv').removeChild(document.getElementById(assault + 'displaytitle'));
		document.getElementById(assault + 'mainDiv').removeChild(document.getElementById(assault + 'displaytable'));
	};
}
