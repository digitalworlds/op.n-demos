preload(libs['GUI']);


/*
 This program demonstrates how to make and customize Toggle Buttons using the ToggleButton class.
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
	
	
	layout.append(new Label("This is a simple toggle button:"));
	
	//We first create a toggle button.
	var toggleButton_1=new ToggleButton("A toggle button");


	//Then we add it to our layout.
	layout.append(toggleButton_1);


	layout.append(new Label("This is a toggle button with a custom appearance and a tool tip text:"));


	//How to change the styling of the toggle button
	//In this example we call various methods in sequence; we can do that because each method returns the object itself.
	var toggleButton_2=new ToggleButton("A toggle button")
	.setToolTipText("This is a toggle button")
	.appendCustomStyle(
	{
		applyStyle:(toggleButton)=>
		{
			//This function will be called every time that this button needs to be redrawn.
			//In this example we customize a few CSS properties of this GUI element.
			toggleButton.div.style.width="auto";
			toggleButton.div.style.display="inline-flex";
			toggleButton.div.style.background="linear-gradient(45deg, orange, blue)";
		}
	});
	layout.append(toggleButton_2);







}
