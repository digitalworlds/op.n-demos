preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);


/*
 This program demonstrates how to make and customize an Element Group using the ElementGroup class.
 */
var main=function(args)
{

	//We create a layout to place the Element Group.
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
	
	
	layout.append(new Label("This is an Element Group:"));
	
	//We first create the element group
	var elementGroup = new ElementGroup();
	

	//Here we apply the default style of the element group
	elementGroup.defaultStyle={

		applyStyle:function(group)
		{
			group.applyStyleForClass("ElementGroup");
		}
	}


	//Create some elements to add to the element group
	var button=new Button("A button");
	var checkbox = new Checkbox("A checkbox");
	

	//This is how you add whichever elements you need to the element group
	elementGroup.append(button);
	elementGroup.append(checkbox);
	elementGroup.append(new ToggleButton("A toggle button")); //A chained and more direct way of adding an element
	


	//Then we add it to our layout.
	layout.append(elementGroup);
	
}
