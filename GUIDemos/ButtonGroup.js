preload(libs['GUI']);


/*
 This program demonstrates how to make and customize Button Groups using the ButtonGroup class.
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
	
	
	layout.append(new Label("This is a button group:"));                           


	//We first create the button group
	var buttonGroup_1=new ButtonGroup();


	//Here we add elements to the button group
	buttonGroup_1.append(new Button("A button"));
	buttonGroup_1.append(new ToggleButton("On/Off"));
	buttonGroup_1.append(new Checkbox("This is a checkbox"));


	//Then we add it to our layout.
	layout.append(buttonGroup_1);


	/*----------------------------------------------------------------------------------------*/

	layout.append(new Label("\n"));
	layout.append(new Label("This is a button group with a matrix orientation:")); 

    //Here we specify the type of orientation
	var buttonGroup_2=new ButtonGroup({orientation:'matrix', columns:3}); //You could also use 'horizontal' or 'vertical' orientation
	
	buttonGroup_2.append(new Button("button 1"));
	buttonGroup_2.append(new Button("button 2"));
	buttonGroup_2.append(new Button("button 3"));
	buttonGroup_2.append(new Button("button 4"));
	buttonGroup_2.append(new Button("button 5"));
	buttonGroup_2.append(new Button("button 6"));

	

	layout.append(buttonGroup_2);


	/*----------------------------------------------------------------------------------------*/



	layout.append(new Label("\n"));
	layout.append(new Label("This is a customized button group with a horizontal orientation:")); 

	//Here we shift to horizontal orientation and customize the button group
	var buttonGroup_3=new ButtonGroup({orientation:'horizontal'}); 
	
	buttonGroup_3.append(new Button("button 1"));
	buttonGroup_3.append(new Button("button 2"));
	buttonGroup_3.append(new Button("button 3"));
	buttonGroup_3.append(new Button("button 4"));
	buttonGroup_3.append(new Button("button 5"));
	

	buttonGroup_3.appendCustomStyle(
		{
			applyStyle:(buttonGroup)=>
			{
				//This function will be called every time that this button group needs to be redrawn.
				//In this example we customize a few CSS properties of this GUI element.
				buttonGroup.div.style.width="auto";
				buttonGroup.div.style.background="linear-gradient(45deg, blue, orange)";
			}
		});
	
	
		layout.append(buttonGroup_3);
	
}
