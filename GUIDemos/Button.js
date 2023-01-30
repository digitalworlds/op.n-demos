preload(libs['GUI']);


/*
 This program demonstrates how to make and customize Buttons using the Button class.
 */
var main=function(args)
{
	//Here is an icon that we will use in this demo.
	var an_icon=new GUIIcon('data:image/svg+xml;utf8,<?xml version="1.0" ?><svg fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></svg>');
	an_icon.setDarkModeIcon(an_icon.getURL().replace("black","white"));
	
	//We create a layout to place the buttons.
	var layout=new Layout();
	layout.appendCustomStyle(
	{
		applyStyle:(layout)=>
		{
			layout.div.style.padding="5px";
		}
	})
	
	//We add the layout to this app's window.
	args.app.getWindow().getContent().append(layout);
	
	
	layout.append(new Label("This is a simple button:"));
	
	//We first create a button.
	var button_1=new Button("A button");
	//Then we add it to our layout.
	layout.append(button_1);
	
	
	layout.append(new Label("This is button with an icon:"));
	
	//Here we create another button and customize it by calling the setIcon method.
	var button_2=new Button("A button");
	//In this example we add an icon to the button.
	button_2.setIcon(an_icon);
	layout.append(button_2);
	
	
	layout.append(new Label("This is an icon button with a tool tip text:"));
	
	//There are many methods in the Button class. 
	//Here we call two of them to set an icon and a tip text that appears when the user hovers over the button.
	var button_3=new Button("");
	button_3.setIcon(an_icon);
	button_3.setToolTipText("This is the tool tip text.");
	layout.append(button_3);
	
	
	/*layout.append(new Label("This is a button with custom appearance:"));
	
	//In this example we call various methods in sequence; we can do that because each method returns the object itself.
	var button_4=new Button("A button")
	.setIcon(an_icon)
	.setToolTipText("This is a red button.")
	.appendCustomStyle(
	{
		applyStyle:(button)=>
		{
			//This function will be called every time that this button needs to be redrawn.
			//In this example we customize a few CSS properties of this GUI element.
			button.div.style.width="auto";
			button.div.style.display="inline-flex";
			button.div.style.background="linear-gradient(45deg, black, red)";
		}
	});
	layout.append(button_4);*/
	
	
	layout.append(new Label("This is a button with an event listener:"));
	
	//In this example we demonstrate how to setup a button listener. 
	var button_5=new Button("Click me").setIcon(an_icon);
	var times_clicked=0;
	button_5.whenClicked().then((button)=>
	{
		//This function will be called every time the button is clicked.
		//In this example the label of the button will be modified to show the click counter.
		times_clicked+=1;
		button.setLabel("Click me ("+times_clicked+")");
	});
	layout.append(button_5);
}