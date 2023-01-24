preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);

/*
 This program demonstrates how to make and customize Notication Cards using the NotificationCard class.
 */
var main=function(args)
{

	
	var area=args.app.getContentDiv();
	
	//First we need to create a Window Container and a Notification Area
	var winarea=new WindowContainer({parentDiv:area});
	var notificationArea=new NotificationArea();

	//Next we can choose a style for the winarea
	var myStyle=new ClassicStyle();
	winarea.setStyle(myStyle);
	notificationArea.setStyle(myStyle);

	
	//We append the windarea and the notification area
	GuiElement.prototype.append.call(winarea,notificationArea);


	//Here we create a button event listener and a layout for it
	var layout=new Layout();
	args.app.getWindow().getContent().append(layout);
	var button = new Button("This button calls a notification card");
	layout.append(button);


	button.whenPressed().then(()=>{
		//Here we create the notification card and add it to the notification area
		//The setDuration method will allow you to set a time limit on the card
		var notificationCard=new NotificationCard({title:"Notification Card"});
		notificationArea.append(notificationCard);
		var sec=1+Math.round(9*Math.random());
		notificationCard.setDuration(sec);
		notificationCard.append(new Label('This card will close in '+sec+' seconds.'));
		
	})


	
}
