preload(libs['GUI']);


/*
 This program demonstrates how to make and customize Toggle Button Groups using the ToggleButtonGroup class.
 */
var main=function(args)
{
	//Here is an icon that we will use in this demo.
	var an_icon=new GUIIcon('data:image/svg+xml;utf8,<?xml version="1.0" ?><svg fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></svg>');
	an_icon.setDarkModeIcon(an_icon.getURL().replace("black","white"));
	
	//We create a layout to place the toggle buttons.
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
	
	
	layout.append(new Label("This is a toggle button group:")); 


	//We first create the toggle button group
	var toggleGroup_1=new ToggleButtonGroup();


	//Here we add elements to the toggle button group
	toggleGroup_1.append(new ToggleButton("Toggle Button 1"));
	toggleGroup_1.append(new ToggleButton("Toggle Button 2"));
	toggleGroup_1.append(new ToggleButton("Toggle Button 3"));


	//Then we add it to our layout.
	layout.append(toggleGroup_1);


	/*----------------------------------------------------------------------------------------*/

	layout.append(new Label("This is a customized toggle button group with a horizontal orientation:")); 

	//Here we shift to horizontal orientation and customize the button group
	var toggleGroup_2=new ToggleButtonGroup({orientation:'horizontal'}); 
	
	toggleGroup_2.append(new Checkbox("Checkbox 1"));
	toggleGroup_2.append(new Checkbox("Checkbox 2"));
	toggleGroup_2.append(new Checkbox("Checkbox 3"));
	

	toggleGroup_2.appendCustomStyle(
		{
			applyStyle:(toggleGroup)=>
			{
				//This function will be called every time that this toggle button group needs to be redrawn.
				//In this example we customize a few CSS properties of this GUI element.
				toggleGroup.div.style.width="auto";
				toggleGroup.div.style.background="linear-gradient(45deg, blue, orange)";
			}
		});
	
	
		layout.append(toggleGroup_2);
	

}
