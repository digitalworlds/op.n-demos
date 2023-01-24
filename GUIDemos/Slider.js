preload(libs['GUI']);


/*
 This program demonstrates how to make and customize Sliders using the Slider class.
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
	
	
	layout.append(new Label("This is a simple slider:"));
	
	//We first create a slider
	var slider_1=new Slider();

	//Then we add it to our layout.
	layout.append(slider_1);
	

	layout.append(new Label("This is a slider with parameters (min: 1, max: 5):"));
	
	//Here we can use a method to specify the minimum and maximum values of the slider
	var slider_2=new Slider();
	slider_2.setMinMax(1,5);

	layout.append(slider_2);




	layout.append(new Label("This is a slider with a progress bar:"));
	
	//Here combine the use of the slider with a progress bar
	//One method is a listener for when the slider is moved and the others are to align the value of the slider with the progress bar
	var slider_3=new Slider({min:1,max:5});
	var progressbar=new ProgressBar();
	slider_3.whenMoved().then(function(slider_3){
			progressbar.setValue((slider_3.getValue()-1)*25);
		})
		
	

	layout.append(slider_3);
	layout.append(progressbar);
	
	
}
