preload(libs['GUI']);


/*
 This program demonstrates how to make and customize Tabbed Layouts using the TabbedLayout class.
 */
var main=function(args)
{
	//Here is an icon that we will use in this demo.
	var an_icon=new GUIIcon('data:image/svg+xml;utf8,<?xml version="1.0" ?><svg fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></svg>');
	an_icon.setDarkModeIcon(an_icon.getURL().replace("black","white"));
	
	//We create a layout to place the Tabbed Layout.
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
	
	
	layout.append(new Label("This is a tabbed layout:"));
	
	
	//We start out by create a TabbedLayout object
	var tabs=new TabbedLayout();
		
	//You can use the appendCustomStyle method to change style of the tabbed layout
		tabs.appendCustomStyle({
				applyStyle:function(tabs){
					tabs.div.style.height='200px';
				}
			})
		
		
	//Now you can add the individual tabs using the newTab method
	tabs.newTab('Tab 1',new Label('The first tab is shown'));
	tabs.newTab('Tab 2',new Label('The second tab is shown'));
	tabs.newTab('Tab 3',new Label('The third tab is shown'));
	tabs.newTab('Tab 4',new Label('The fourth tab is shown'));
	tabs.newTab('Tab 5',new Label('The fifth tab is shown'));
	
	//Then we add it to the layout
	layout.append(tabs);
		
}
