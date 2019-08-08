$ = document;

const searchBox = $.getElementById("searchBox");
const searchHeader = $.getElementsByClassName("searchHeader");
const searchCaption = $.getElementsByClassName("searchCaption");
const searchGroup = $.getElementsByClassName("searchGroup");

searchBox.onkeyup = search;

function search(){

	var searchText = searchBox.value.toLowerCase();

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
} //end search
