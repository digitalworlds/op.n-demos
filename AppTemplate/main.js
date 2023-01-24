preload(libs['GUI']).before(function(args){
		//this is how you can optionally run scripts before loading your libraries.
		args.app.showLoading();//Here we show the loading animation.
	});

var main=function(args){
	
	args.app.clearContents();//clears the loading animation

	var wind=args.app.getWindow();//gets the window object, which has many parameters, methods, and listeners
	//for example:
	wind.whenResized().then((wind)=>{
			console.log("Window resized!");
	})


	var menubar;
	var menulayout=new MenuLayout();
	menubar=menulayout.getMenuBar();
	menubar.append(new MenuItem('Help')).whenClicked().then((item)=>{
		console.log("Help clicked");
	});

	//You can append GUI elements to the window like this:
	wind.getContent().append(menulayout);

	//Or alternatively you can append custom divs made with vanilla JS
	var area=document.createElement('div');
	opn.set(area.style,{
		position:'absolute',
			display:'block',
			width:'100%',
			height:'100%',
			background:'linear-gradient(to bottom,black 0%, white 100%)',
			overflow:'hidden'
	})
	menulayout.getContainer().div.appendChild(area);

}
