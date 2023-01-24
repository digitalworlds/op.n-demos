preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);

/*
 This program demonstrates how to make and customize a Table using the Table class.
 */
var main=function(args)
{
	
	//We create a layout to place the Table.
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


	layout.append(new Label("This is a Table with a modified cell:"));
	
	//We first create a table.
	//Within the Table parameters you specify the number of rows, columns and the column headers.
	var table=new Table({rows:10,cols:4,tHeaders:["Column 1", "Column 2", "Column 3", "Column 4"]});

	//You can choose a style for your table
	var myStyle = new CleanStyle();
	table.setStyle(myStyle);

	//This is the way we can customize our table.
	table.appendCustomStyle({
		applyStyle:function(table){
			table.div.style.height='300px';
		}
	});


	//In this example, we use loops to give random values to each cell, i = row index, j = column index
	for(var i=0;i<10;i++){
		for(var j=0;j<4;j++){
			table.setValue(i,j,Math.floor(Math.random()*100))
		}
	}

	//This function allows you to change a specific cell in the table.
	table.setCellContent(5,3, new Button("Modified cell: 99")); 

	//Then we add it to our layout.
	layout.append(table);
	
	
	
	
	
}