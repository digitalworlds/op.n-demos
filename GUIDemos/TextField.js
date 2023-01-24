preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);
/*
 This program demonstrates how to make and customize a Text Field using the TextField class.
 */
var main=function(args)
{
	
	//We create a layout to place the TextField.
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
	
	
	layout.append(new Label("This is a Text Field:"));
	
	//We first create a the Text Field.
	var textField = new TextField();

	//There are some common methods in the TextField class. 
	//Here we call two of them to set a placeholder and a tip text that appears when the user hovers over the text field.
	textField.setPlaceholder("Type your name");
	textField.setToolTipText("This is a text field");

	//These are two listener methods used to manage the user input into the text field.
	textField.whenInput().then(function(textField){
		console.log(textField.getText())
	})
	textField.whenSubmit().then(function(textField){
		console.log('Submit: '+textField.getText());
	})

	//Then we add it to our layout.
	layout.append(textField);
	
	

}
