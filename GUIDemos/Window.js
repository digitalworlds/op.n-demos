preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['CleanStyle']);


/*
 This program demonstrates how to make and customize a Window using the Window class.
 */
var main=function(args)
{
	//Here is an icon that we will use in this demo.
	var an_icon=new GUIIcon('data:image/svg+xml;utf8,<?xml version="1.0" ?><svg fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></svg>');
	an_icon.setDarkModeIcon(an_icon.getURL().replace("black","white"));
	

	var area=args.app.getContentDiv();
	var myStyle=new CleanStyle;

	//We create a window container to place the window.
	var winarea=new WindowContainer({parentDiv:area});

	//This is the way you set the style of the window container
	winarea.setStyle(myStyle);
	
	
	//Now we can create the Window. Additionally you can specify window count
	var window=new Window({title:"This is a Window ("+(winarea.windows.length+1)+")"});

	//There are many methods in the Window class
	//Here we set an icon and allow the window to be scrollable vertically
	window.setIcon(an_icon);
	window.getContent().scrollY(true);
	window.getContent().scrollX(false);
	
	//These buttons were created to show scrollability
	//This is also how you add elements to the window, getContent() is necessary to add elements within the window layout
	window.getContent().append(new Button("Button 1"));
	window.getContent().append(new Button("Button 2"));
	window.getContent().append(new Button("Button 3"));
	window.getContent().append(new Button("Button 4"));
	window.getContent().append(new Button("Button 5"));
	window.getContent().append(new Button("Button 6"));
	window.getContent().append(new Button("Button 7"));
	window.getContent().append(new Button("Button 8"));
	window.getContent().append(new Button("Button 9"));
	

	//Then we add it to our window container
	winarea.append(window);
	

	
}