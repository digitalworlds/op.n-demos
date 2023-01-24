preload(libs['GUI']);
preload(libs['UtilityWindows']);
preload(libs['WebStyle']);
preload(libs['ClassicStyle']);
preload(libs['CompactStyle']);
preload(libs['CleanStyle']);
/*
 This program demonstrates how to make and customize Progress Cards using the ProgressCard class.
 */
var main=function(args)
{
	
	var area=args.app.getContentDiv();
	
	//First we need to create a Window Container and a Notification Area
	var winarea=new WindowContainer({parentDiv:area});
	var notificationArea=new NotificationArea();

	//We choose a style for the winarea
	var myStyle=new ClassicStyle();
	winarea.setStyle(myStyle);
	
	//We append the windarea and the notification area
	GuiElement.prototype.append.call(winarea,notificationArea);
	
	//Now we can create the dialog card.
	var progressCard = new ProgressCard({title:"Downloading..."})

	//This is an example of setting up a promise with the progress window
	var p=new opn.Promise();
	progressCard.setPromise(p);
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
	progressCard.setText('Getting ready...');
	one_more();


	//Then we add the Progress Card to the notification area.
	notificationArea.append(progressCard);
	
	
}