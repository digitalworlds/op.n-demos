preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);

/*
 This program demonstrates how to make and customize a Dialog Card using the DialogCard class.
 */
var main=function(args)
{

	var area=args.app.getContentDiv();
	
	//First we need to create a Window Container and a Notification Area.
	var winarea=new WindowContainer({parentDiv:area});
	var notificationArea=new NotificationArea();

	//We choose a style for the winarea.
	var myStyle=new ClassicStyle();
	winarea.setStyle(myStyle);
	
	//We append the windarea and the notification area.
	GuiElement.prototype.append.call(winarea,notificationArea);
	
	//Now we can create the dialog card.
	var dialogCard = new DialogCard({title:"Dialog Notification Card",prompt:"Is this a dialog notification card?",buttons:["Yes","No"],icon:DialogWindow.QUESTIONMARK});

	//Then we add it to the notification area.
	notificationArea.append(dialogCard);

	/*------------------------------------------------------------------------------*/

	//Here is another example using a Dialog Card with a button event listener.
	var layout=new Layout();
	args.app.getWindow().getContent().append(layout);
	
	layout.append(new Label("This button calls a Dialog Card:"));
	
	var button = new Button("Dialog Card Button");
	layout.append(button);


	button.whenPressed().then(()=>{
		//Here we create the a Dialog Card and append it to the notification area
		var dialogCard=new DialogCard({title:"Dialog Notification Card",prompt:"Is this a dialog notification card?",buttons:["Yes","No"],icon:DialogWindow.QUESTIONMARK});
		notificationArea.append(dialogCard);
	})
	
}