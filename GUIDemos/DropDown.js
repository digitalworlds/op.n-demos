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
	
	layout.append(new Label("This is a Dropdown:"));

	
	//We first create a Dropdown.
	var dropDown=new DropDown();

	//Use this function to display text in the dropbox
	dropDown.input.setPlaceholder("Choose A Dropdown Item");

	//Next we add the Dropdown items
	var dropDownItem_1 = new DropDownItem("Red Dropdown");
	dropDown.append(dropDownItem_1);
	var dropDownItem_2 = new DropDownItem("Blue Dropdown");
	dropDown.append(dropDownItem_2);
	var dropDownItem_3 = new DropDownItem("Green Dropdown");
	dropDown.append(dropDownItem_3);


	//whenSelected
	dropDown.whenSelected().then(function(item){
		if(item==dropDownItem_1){
			layout.appendCustomStyle({
				applyStyle:function(layout)
				{
					opn.set(layout.div.style,
						{
							background : 'red'
						}
					)
				}
			})
		}
		
		else if(item==dropDownItem_2){
			layout.appendCustomStyle({
				applyStyle:function(layout)
				{
					opn.set(layout.div.style,
						{
							background : 'blue'
						}
					)
				}
			})
		}
		
		else if(item==dropDownItem_3){
			layout.appendCustomStyle({
				applyStyle:function(layout)
				{
					opn.set(layout.div.style,
						{
							background : 'green'
						}
					)
				}
			})
		}
	
	});



	//Then we add it to our layout.
	layout.append(dropDown);
	
	
	
}
