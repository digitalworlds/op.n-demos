preload(libs['GUI']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);

/*
 This program demonstrates how to make and customize a Menu Layout using the MenuLayout class. Also included within the demo is the use of the MenuItem class.
 */
var main=function(args)
{
	//Here is an icon that we will use in this demo.
	var an_icon=new GUIIcon('data:image/svg+xml;utf8,<?xml version="1.0" ?><svg fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></svg>');
	an_icon.setDarkModeIcon(an_icon.getURL().replace("black","white"));
	
	//We create a layout to place the Menu Layout and Menu Items.
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
	
	layout.append(new Label("This is a Menu Layout:"));

	//We first create a menu layout
	var menuLayout = new MenuLayout();

	//If you prefer, you can set a style for the menu layout
	var myStyle = new CleanStyle();
	menuLayout.setStyle(myStyle);

	//There are several useful methods in the MenuLayout class
	//Here we call the getMenuBar in order to add a menu item to the menu layout
	var menu=menuLayout.getMenuBar();
	var menuItem_1 = new MenuItem("Item 1")
	menu.append(menuItem_1);


	//Here we are creating a submenu for the first menu item, submenu = submenu of Item 1
	var subMenu=menuItem_1.getSubMenu(); 
	var subMenuItem_1 = new MenuItem("Submenu Option 1");
	subMenu.append(subMenuItem_1);
	var subMenuItem_2 = new MenuItem("Submenu Option 2");
	subMenu.append(subMenuItem_2);
	var subMenuItem_3 = new MenuItem("Submenu Option 3");
	subMenu.append(subMenuItem_3);

	//We can use this method to change the icon
	subMenuItem_1.setImage(an_icon);

	//Here we are creating a nested submenu, a submenu of the first submenu
	var subMenu_A = subMenuItem_1.getSubMenu();
	var subMenuItem_1A = new MenuItem("Submenu Option 1A");
	var subMenuItem_1B = new MenuItem("Submenu Option 1B");
	subMenu_A.append(subMenuItem_1A);
	subMenu_A.append(subMenuItem_1B);

	//Collapse the menu when the last possible selection of the submenu is pressed
	subMenuItem_1A.whenPressed().then(function(b){b.collapseMenu();});
	subMenuItem_1B.whenPressed().then(function(b){b.collapseMenu();});


	//Menu Item 2 with only one submenu, here submenu = submenu of Item 2
	var menuItem_2= new MenuItem("Item 2");
	menu.append(menuItem_2);

	var subMenu=menuItem_2.getSubMenu(); 
	var subMenuItem_1 = new MenuItem("Submenu Option 1");
	subMenu.append(subMenuItem_1);
	var subMenuItem_2 = new MenuItem("Submenu Option 2");
	subMenu.append(subMenuItem_2);

	//Menu Item 3, intentionally left without submenus
	var menuItem_3 = new MenuItem("Item 3");
	menu.append(menuItem_3);

	
	//Then we add it to our layout
	layout.append(menuLayout);


}
