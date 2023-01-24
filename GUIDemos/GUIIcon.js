preload(libs['GUI']);


/*
 This program demonstrates how to make and customize GUI icons using the GUIIcon class.
 */
var main=function(args)
{
	
	//We create a layout to place the button with the GUI icon.
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
	
	
	layout.append(new Label("This is a button with a GUI icon:"));
	
    
    //Here we create the icon with an image path
	var an_icon=new GUIIcon('data:image/svg+xml;utf8,<?xml version="1.0" ?><svg fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></svg>');
    
    //A function to change the icon to dark mode
    an_icon.setDarkModeIcon(an_icon.getURL().replace("black","white"));

    //Note: An icon cannot be appended by itself, it needs to be set as an icon for another object

    var button = new Button();

	//Here we use the setIcon method to add our GUIIcon to the button
	button.setIcon(an_icon);

	//Then we add it to our layout.
    layout.append(button);

}
