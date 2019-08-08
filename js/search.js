const searchBox = document.getElementById("searchBox");
const searchHeader = document.getElementsByClassName("searchHeader");
const searchCaption = document.getElementsByClassName("searchCaption");
const searchGroup = document.getElementsByClassName("searchGroup");

searchBox.onkeyup = search;

function search(){
	var searchText = searchBox.value.toLowerCase();
	compareText(searchText);
} //end search

function compareText(searchText){
	for(var i = 0; i < searchGroup.length; i++){
		var text = searchHeader[i].innerText.toLowerCase();
		var caption = searchCaption[i].innerText.toLowerCase();

		if(text.includes(searchText) || caption.includes(searchText)){
			searchGroup[i].style.display = "inherit";
		}
		else if(!(text.includes(searchText) || caption.includes(searchText))){
			searchGroup[i].style.display = "none";
		}
	} //end for loop
} //end compareText
