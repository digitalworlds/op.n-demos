preload(libs['GUI']);


/*
 This program demonstrates how to make and customize Tile Containers using the TileContainer class.
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
	
	
	layout.append(new Label("This is a tile container with 3 unordered tiles inside:"));

	//First we create a Tile Container to hold the tiles
	var tileContainer_1 = new TileContainer();

	//Here we add tiles to manipulate within the container
	tileContainer_1.append(new Tile({label:"Tile 2", icon: an_icon}));
	tileContainer_1.append(new Tile({label:"Tile 3", icon: an_icon}));
	tileContainer_1.append(new Tile({label:"Tile 1", icon: an_icon}));
	
	//Add to container to layout
	layout.append(tileContainer_1);
	

	/*----------------------------------------------------------------------------------------*/

	layout.append(new Label("This is a sorted tile container with the option to select the tiles:"));

	
	//There are many methods in the TileContainer class. 
	//Here we call two of them to sort the tiles and allow them to be rearranged
	var tileContainer_2 = new TileContainer();
	tileContainer_2.append(new Tile({label:"Tile 2", icon: an_icon}));
	tileContainer_2.append(new Tile({label:"Tile 3", icon: an_icon}));
	tileContainer_2.append(new Tile({label:"Tile 1", icon: an_icon}));


	tileContainer_2.sort();
	tileContainer_2.setInteraction("select");

	layout.append(tileContainer_2);

	/*----------------------------------------------------------------------------------------*/

	layout.append(new Label("This is a customized tile container with tiles that can be rearranged:"));


	//Here we change the interaction to be allow the selection of tiles
	var tileContainer_3 = new TileContainer();
	tileContainer_3.append(new Tile({label:"Tile 2", icon: an_icon}));
	tileContainer_3.append(new Tile({label:"Tile 3", icon: an_icon}));
	tileContainer_3.append(new Tile({label:"Tile 1", icon: an_icon}));


	tileContainer_3.setInteraction("rearrange");

	layout.append(tileContainer_3);


	tileContainer_3.appendCustomStyle(
		{
			applyStyle:(tileContainer)=>
			{
				//This function will be called every time that this tile container needs to be redrawn.
				//In this example we customize a few CSS properties of this GUI element.
				tileContainer.div.style.width="auto";
				tileContainer.div.style.display="inline-flex";
				tileContainer.div.style.background="linear-gradient(45deg, blue, orange)";
			}
		});

	


}
