function resultdisplay(assault,formELM) {
	var assaultName;
		if(assault=="sumida"){
			assaultName = "���c����";
		}
		else if(assault=="city"){
			assaultName = "�V�e�B�^���[";
		}
		else if(assault=="pastasa"){
			assaultName = "�ߋ��N��";
		}
		else if(assault=="sewer"){
			assaultName = "�H������ ������";
		}
		else if(assault=="nobunaga"){
			assaultName = "�D�c�M��";
		}
		else if(assault=="hideyosi"){
			assaultName = "�H�ďG�g";
		}
		else if(assault=="ghost"){
			assaultName = "�H��D";
		}
		else if(assault=="mship"){
			assaultName = "�p���T�C�g��D";
		}
		else if(assault=="emerge"){
			assaultName = "�s����";
		}
		else{
			assaultName = "���̑�";
		}
	
	if(formELM.checked){
		var titleELM = document.createElement('H2');
		titleELM.id = assault + "displaytitle";
		titleELM.innerHTML = assaultName + "�A�T���g";
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
		tr1td1ELM.innerHTML = assaultName + "����";
		document.getElementById(assault + 'displaytabletr1').appendChild(tr1td1ELM);
		var tr2ELM = document.createElement('tr');
		tr2ELM.id = assault + "displaytabletr2";
		tr2ELM.align = "center";
		document.getElementById(assault + 'displaytbody').appendChild(tr2ELM);
		var tr2td1ELM = document.createElement('td');
		tr2td1ELM.id = assault + "displaytabletr2td1";
		tr2td1ELM.align = "center";
		tr2td1ELM.innerHTML = "���������s";
		document.getElementById(assault + 'displaytabletr2').appendChild(tr2td1ELM);
	}
	else{
		document.getElementById(assault + 'mainDiv').removeChild(document.getElementById(assault + 'displaytitle'));
		document.getElementById(assault + 'mainDiv').removeChild(document.getElementById(assault + 'displaytable'));
	}
}