preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);

/*
 This program demonstrates how to make and customize an Input Window using the InputWindow class.
 */
var main=function(args)
{


	var area=args.app.getContentDiv();

	//First we must create a window container in order to add an input window.
	var winarea=new WindowContainer({parentDiv:area});

	//Choose a style and set it to the Window Container
	var myStyle=new CleanStyle();
	winarea.setStyle(myStyle);

	//Create the input window and specify some of the attributes.
	var inputWindow=new InputWindow({title:"Input Window",prompt:"Type your name:",value:"",placeholder:"John Smith"});
	
	//Then we add it to our window container.
	winarea.append(inputWindow);
	
	//Input window with a button event listener
	var button = new Button("Sign in with Username");
	inputWindow.append(button);

	button.whenClicked().then((button)=>
	{
		//Chained way of adding and creating an Input Window
		winarea.append(new InputWindow({title:"Username Input Window",prompt:"Type your username:",value:"@",placeholder:"johnnydepp292"}));
	});


	

	
	




	

	
	
	
	
	
	
	
	
}
