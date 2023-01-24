preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);

/*
 This program demonstrates how to make and customize a Tree View using the TreeView class.
 */
var main=function(args)
{
	//Here is an icon that we will use in this demo.
	var an_icon=new GUIIcon('data:image/svg+xml;utf8,<?xml version="1.0" ?><svg fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></svg>');
	an_icon.setDarkModeIcon(an_icon.getURL().replace("black","white"));
	
	//We create a layout to place the Tree View.
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
	
	
	layout.append(new Label("This is a Tree View:"));
	
	//First we create the Tree View
	var tree=new TreeView();

	tree.appendCustomStyle({
		//This function will be called every time that this Tree View needs to be redrawn.
		//Here you can change a CSS properties for this element.
			applyStyle:function(tree){
				tree.div.style.height='100%';
			}
		})

	
	//Now that we have a tree, we add folder elements
	var treeFolder_1=tree.append(new TreeFolderElement());
		
		//
		for(var i=0;i<100;i++){
			var file=treeFolder_1.append(new TreeFileElement());
			file.setName("File "+i+".txt");
			file.whenClicked().then((treeFolder_1)=>{
				if(treeFolder_1.isSelected()){
						notificationarea.append(new NotificationCard({title:"New Card"}))
						.setDuration(5)
						.append(new Label('Clicked:'+treeFolder_1.getName()));
					}
				})
			//These are two ways to set an icon for the tree folder element
			if(i==0)file.setIcon(an_icon);
			else if(i==1)file.setSmallIcon(an_icon);
		}


		
	//Here we add more tree folder elements to the Tree View
	//These are various ways of manipulating the tree folder's icon and name
	var treeFolder_2=tree.append(tree.newFolder());
	treeFolder_2.setIcons({open:an_icon});

	var treeFolder_3=tree.append(tree.newFolder());
	treeFolder_3.setIcons({closed:an_icon});

	var treeFolder_4=tree.append(tree.newFolder());
	treeFolder_4.setIcons({open:an_icon,open_empty:an_icon});
	treeFolder_4.setName("Zebra Files");

	var treeFolder_5=tree.append(tree.newFolder());
	treeFolder_5.setIcons({closed:an_icon,closed_empty:an_icon});
	treeFolder_5.setName("Apple Files");

	var treeFolder_6=tree.append(tree.newFolder());
	treeFolder_6.setName("Banana Files");



	//Then add the tree to the layout
	layout.append(tree);

	
	layout.append(new Label("<br>This button sorts the Tree View:"))
	var button = layout.append(new Button("Sort Tree"));
	
	button.whenClicked().then((button)=>
	{
		//These two methods allow you to sort the Tree View
		tree.getRoot().sort();
	})
	
}