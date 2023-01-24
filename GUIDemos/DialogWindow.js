preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);

/*
 This program demonstrates how to make and customize Dialog Windows using the DialogWindow class.
 */
var main=function(args)
{
	var area=args.app.getContentDiv();


	//First we must create a window container in order to add an input window
	var winarea=new WindowContainer({parentDiv:area});

	//Choose a style and set it to the Window Container
	var myStyle=new CleanStyle();
	winarea.setStyle(myStyle);	
	
	//We first create the dialog window.
	var dialogWindow= new DialogWindow({title:"Dialog Window",prompt:"Is this a dialog window?",buttons:["Yes","No"],icon:DialogWindow.QUESTIONMARK})
	
	
	//Then we added it to the window area container
	winarea.append(dialogWindow);
	

	
	
	
	
	
}