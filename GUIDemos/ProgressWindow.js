preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);


/*
 This program demonstrates how to make and customize Progress Windows using the ProgressWindow class.
 */
var main=function(args)
{
	
	
	var area=args.app.getContentDiv();


	//First we must create a window container in order to add an input window
	var winarea=new WindowContainer({parentDiv:area});


	//Choose a style and set it to the Window Container
	var myStyle=new CleanStyle();
	winarea.setStyle(myStyle);

		
	//Now we create a Progress Window
	var progressWindow = new ProgressWindow({title:"Downloading"})


	//This is an example of setting up a promise with the progress window
	var p=new opn.Promise();
	progressWindow.setPromise(p);
	p.getProgress().oneMoreToDo(20);
	var aborted=false;
	var one_more=function(){
		if(!aborted&&p.getProgress().getValue()<1){
			p.getProgress().oneMoreDone();
			p.getProgress().info="File "+Math.floor(Math.random()*1000)+".txt";
			opn.wait({seconds:1}).then(()=>{
					one_more();
				})
		}
	}
	p.ifAborted(()=>{aborted=true;});
	progressWindow.setText('Getting ready...');
	one_more();


	//Then we add it to our window area container.
	winarea.append(progressWindow);
	
	
	
	
	
}