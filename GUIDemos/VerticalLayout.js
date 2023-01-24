preload(libs['GUI']);


/*
 This program demonstrates how to make and customize Vertical Layouts using the VerticalLayout class.
 */
var main=function(args)
{
	//Here is an icon that we will use in this demo.
	var an_icon=new GUIIcon('data:image/svg+xml;utf8,<?xml version="1.0" ?><svg fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></svg>');
	an_icon.setDarkModeIcon(an_icon.getURL().replace("black","white"));
	
	
	
	
	
	//We create a normal layout to place the label
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



	layout.append(new Label("This is a vertical layout composed of three buttons:"))




	//We create a horizontal layout to place the buttons.
	var verticalLayout=new VerticalLayout();
	verticalLayout.appendCustomStyle(
	{
		applyStyle:(layout)=>
		{
			verticalLayout.div.style.padding="5px";
		}
	})
	
	//We add the horizontal layout to this app's window.
	args.app.getWindow().getContent().append(verticalLayout);
	
	
	
	

	//Create and add buttons to the vertical layout
	var button_1=new Button("Button 1");
	verticalLayout.append(button_1);

	var button_2=new Button("Button 2");
	verticalLayout.append(button_2);

	var button_3=new Button("Button 3");
	verticalLayout.append(button_3);
	
	
	
	
}
