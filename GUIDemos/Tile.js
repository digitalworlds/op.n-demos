preload(libs['GUI']);


/*
 This program demonstrates how to make and customize Tiles using the Tile class.
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
	
	
	layout.append(new Label("These are two tiles within a tile container:"));

	//To create tiles, we must first create a Tile Container
	var tileContainer_1 = new TileContainer();

	//Now we can create tiles to then add to the container
	var tile_1 = new Tile();
	var tile_2 = new Tile();


	//This is how we title the tiles
	tile_1.setTitle("Tile 1");
	tile_2.setTitle("Tile 2");


	//Here is how you give a tile an icon
	tile_1.setIcon(an_icon);
	tile_2.setIcon(an_icon);
	
	//Add the tiles to the container
	tileContainer_1.append(tile_1);
	tileContainer_1.append(tile_2);

	//Lastly we add the container to the layout
	layout.append(tileContainer_1);


	/*----------------------------------------------------------------------------------------*/

	layout.append(new Label("These are two customized tiles with event listeners: "));


	//In this example we demonstrate how to setup a button listener. 
	var tileContainer_2 = new TileContainer();
	var tile_3 = new Tile({label: "A-names", icon: an_icon});
	var tile_4 = new Tile({label: "G-names", icon: an_icon});




	tile_3.appendCustomStyle(
		{
			applyStyle:(tile)=>
			{
				//This function will be called every time that this tile needs to be redrawn.
				//In this example we customize a few CSS properties of this GUI element.
				tile.div.style.width="auto";
				tile.div.style.background="blue";
			}
		});

	tile_4.appendCustomStyle(
		{
			applyStyle:(tile)=>
			{
				//This function will be called every time that this tile needs to be redrawn.
				//In this example we customize a few CSS properties of this GUI element.
				tile.div.style.width="auto";
				tile.div.style.background="orange";
				}
			});





	tile_3.whenClicked().then((tile)=>{	
		
		tile.setTitle("Alfred")
		
	})


	tile_4.whenClicked().then((tile)=>{	
		
		tile.setTitle("George");
		
	})
	
	//Add the tiles to the container
	tileContainer_2.append(tile_3);
	tileContainer_2.append(tile_4);

	//Lastly we add the container to the layout
	layout.append(tileContainer_2);
	
	

	
}
