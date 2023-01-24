var CreditsScreen=function(app_id,title,text,video_url){
	
	this.app_id=app_id;
	var self=this;
	this.div=document.createElement('div');
	opn.set(this.div.style,{
			position:'absolute',
			top:'0px',
			bottom:'0px',
			left:'0px',
			right:'0px',
			display:'none',
			backgroundColor:'white'
		});
	this.div.addEventListener('touchstart',function(e){
			e.stopPropagation();
		});
	var main=document.createElement('div');
	opn.set(main.style,{
			position:'absolute',
			top:'10px',
			bottom:'10px',
			left:'20%',
			right:'10px',
			backgroundColor:'white',
			border:'5px solid black',
			borderRadius:'0px 30px 30px 0px',
			color:'black',
			fontFamily:'Arial',
			fontWeight:'700',
			fontSize:'20px',
			textAlign:'center',
			overflow:'hidden'
		});
	this.main=main;
	
	
	var tab_container=document.createElement('div');
	opn.set(tab_container.style,{
			position:'absolute',
			left:'0%',
			top:'10%',
			width:'20%',
			height:'100%'
		});
	this.div.appendChild(tab_container);
	
	var addTab=function(r,g,b,icon){
		var t=new Tab(self,r,g,b,icon);
		tab_container.appendChild(t.div);
		return t;
	}
	
	var selected_tab=null;
	addTab(158,206,220,'info_icon.png').makeInfo(title,text).select();
	if(video_url)addTab(252,227,171,'video_icon.png').makeVideo(video_url);
	//addTab(161,218,206,'mobile_icon.png').makeQR();
	//addTab(242,189,217,'embed_icon.png').makeEmbed();
	
	this.div.appendChild(main);
	
	var close=document.createElement('div');
	this.x_div=close;
	opn.set(close.style,{
			position:'absolute',
			top:'0px',
			right:'0px',
			width:'10%',
			height:'10%',
			backgroundColor:'white',
			border:'5px solid black',
			borderRadius:'30px',
			color:'black',
			fontFamily:'Arial',
			fontWeight:'700',
			fontSize:'20px',
			textAlign:'center',
			overflow:'hidden',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center'
		});
	this.div.appendChild(close);
	
	
			close.style.backgroundImage='url(x.png)';
		
	
	close.addEventListener('touchstart',function(e){
			e.preventDefault();
			e.stopPropagation();
			self.div.style.display='none';
		})
	close.addEventListener('mousedown',function(e){
			e.preventDefault();
			e.stopPropagation();
			self.div.style.display='none';
		})
	//this . div . innerHTML = '<h1>Blending Board</h1>Select letters your student has learned, then combine letters to make words! <br><br><br>' ;
	//this . div . innerHTML += 'This app was developed at the University of Florida as a collaboration between:' ;
	//this . div . innerHTML += ' <br>the Digital Worlds Institute <br>and the UF Literacy Institute.' ;
}


CreditsScreen.prototype.getDiv=function(){
	return this.div;
}

var Tab=function(parent,r,g,b,icon){
	var self=this;
	this.parent=parent;
	this.content_div=document.createElement('div');
	opn.set(this.content_div.style,{
			position:'absolute',
			width:'100%',
			top:'0px',
			left:'0px',
			height:'100%',
			background:'linear-gradient(to right, rgb('+r+','+g+','+b+'), #fff 5%)',
			overflowY:'auto',
			overflowX:'hidden'
		});
	this.main=document.createElement('div');
	opn.set(this.main.style,{
			display:'block',
			position:'relative',
			width:'90%',
			top:'0px',
			left:'5%',
			backgroundColor:'white'
		});
	this.content_div.appendChild(this.main);
	
	this.div=document.createElement('div');
	opn.set(this.div.style,{
			float:'top',
			width:'100%',
			height:'15%',
			boxSizing:'border-box',
			//border : '5px solid black' ,
			borderRadius:'30px 0px 0px 30px',
			backgroundColor:'red',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center'
		});
	if(icon)
			self.div.style.backgroundImage='url('+icon+')';
		
	this.default_style={
		borderTop:"5px solid "+'rgb('+Math.min(255,Math.floor(r*1.2))+','+Math.min(255,Math.floor(g*1.2))+','+Math.min(255,Math.floor(b*1.2))+')',
		borderLeft:"5px solid "+'rgb('+Math.min(255,Math.floor(r*1.2))+','+Math.min(255,Math.floor(g*1.2))+','+Math.min(255,Math.floor(b*1.2))+')',
		borderRight:"5px solid "+'rgb('+Math.floor(r*0.7)+','+Math.floor(g*0.7)+','+Math.floor(b*0.7)+')',
		borderBottom:"5px solid "+'rgb('+Math.floor(r*0.7)+','+Math.floor(g*0.7)+','+Math.floor(b*0.7)+')',
		//boxShadow : "0px 0px 1px #000" ,
		backgroundColor:'rgb('+r+','+g+','+b+')',
		height:'15%'
	};
	this.pressed_style={
		borderTop:"5px solid "+'rgb('+Math.floor(r*0.9)+','+Math.floor(g*0.9)+','+Math.floor(b*0.9)+')',
		borderLeft:"5px solid "+'rgb('+Math.floor(r*0.9)+','+Math.floor(g*0.9)+','+Math.floor(b*0.9)+')',
		borderRight:"5px solid "+'rgb('+Math.min(255,Math.floor(r*1.2))+','+Math.min(255,Math.floor(g*1.2))+','+Math.min(255,Math.floor(b*1.2))+')',
		borderBottom:"5px solid "+'rgb('+Math.min(255,Math.floor(r*1.2))+','+Math.min(255,Math.floor(g*1.2))+','+Math.min(255,Math.floor(b*1.2))+')',
		//boxShadow : "0px 0px 1px #000" ,
		backgroundColor:'rgb('+Math.min(255,Math.floor(r*1.2))+','+Math.min(255,Math.floor(g*1.2))+','+Math.min(255,Math.floor(b*1.2))+')',
		height:'35%'
	};
	opn.set(this.div.style,this.default_style);
	
	this.div.addEventListener('touchstart',function(){
			self.select();
		})
	this.div.addEventListener('mousedown',function(){
			self.select();
		})
	this.loadTab=null;
}

Tab.prototype.makeInfo=function(title,text){
	this.main.appendChild(this.textDiv(900,'30px','<br>'+title+'<br>'));
	this.main.appendChild(this.textDiv(700,'18px','<br>'+text+'<br><br>'));
	var div=document.createElement('div');
	opn.set(div.style,{
			display:'block',
			width:'100%',
			height:'256px'
		});
	this.main.appendChild(div);
	
	var w='50%';
	if(text.indexOf('Yonge')>-1)w='33%';
	
	var ufli=document.createElement('div');
	opn.set(ufli.style,{
			float:'left',
			width:w,
			height:'100%',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center',
			cursor:'pointer'
		});
	
			ufli.style.backgroundImage='url(UFLI.jpg)';
	
	div.appendChild(ufli);
	ufli.addEventListener('mousedown',function(e){
			e.preventDefault();
			e.stopPropagation();
			open('https://education.ufl.edu/ufli/','_blank');
		});
	ufli.addEventListener('touchstart',function(e){
			e.preventDefault();
			e.stopPropagation();
			open('https://education.ufl.edu/ufli/','_blank');
		});
	
	var dw=document.createElement('div');
	opn.set(dw.style,{
			float:'left',
			width:w,
			height:'100%',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center',
			cursor:'pointer'
		});

			dw.style.backgroundImage='url(dw_logo.png)';
		
	div.appendChild(dw);
	dw.addEventListener('mousedown',function(e){
			e.preventDefault();
			e.stopPropagation();
			open('https://digitalworlds.ufl.edu/','_blank');
		});
	dw.addEventListener('touchstart',function(e){
			e.preventDefault();
			e.stopPropagation();
			open('https://digitalworlds.ufl.edu/','_blank');
		});
	
	if(text.indexOf('Yonge')>-1){
		var pky=document.createElement('div');
		opn.set(pky.style,{
				float:'left',
				width:w,
				height:'100%',
				backgroundSize:'contain',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'center',
				cursor:'pointer'
			});
	
				pky.style.backgroundImage='url(PKY.jpg)';
			
		div.appendChild(pky);
		pky.addEventListener('mousedown',function(e){
				e.preventDefault();
				e.stopPropagation();
				open('https://pkyonge.ufl.edu/','_blank');
			});
		pky.addEventListener('touchstart',function(e){
				e.preventDefault();
				e.stopPropagation();
				open('https://pkyonge.ufl.edu/','_blank');
			});
	}
	return this;
}

Tab.prototype.makeVideo=function(url){
	
	this.loadTab=()=>{
		this.main.appendChild(this.textDiv(900,'30px','<br>Video Demo<br>'));
		this.main.appendChild(this.textDiv(700,'18px','<br>Watch this video for a quick tutorial on how to use this app.<br><br>'));
		var div=document.createElement('div');
		opn.set(div.style,{
				display:'block',
				width:'100%'
			})
		this.main.appendChild(div);
		div.innerHTML='<iframe src="'+url+'" width="100%" height="600" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe>';
		this.loadTab=null;
	};
	return this;
}

Tab.prototype.makeEmbed=function(){
	this.loadTab=()=>{
		this.main.appendChild(this.textDiv(900,'30px','<br>Embed HTML<br>'));
		this.main.appendChild(this.textDiv(700,'18px','<br>Use the following code to embed this app to your learning content management system or web-site.'));
		
		var d=document.createElement('div');
		this.main.appendChild(d);
		d.style.top='10px';
		d.style.width='100%';
		d.style.textAlign='center';
		d.style.lineHeight='14px';
		d.style.verticalAlign='middle';
		d.style.fontFamily='Arial';
		d.style.color='rgb(255,255,255)';
		d.style.textShadow='-1px -1px 0px #5b6178';
		d.style.fontWeight='bold';
		d.style.fontSize='14px';
		d.style.textDecoration='none';
		d.innerHTML='<br><br><textarea style="border-radius:5px;height:80px;width:90%;font-family:Courier;font-size:14px;" readonly>&lt;iframe src="'+opn.hosturl+'file/'+this.parent.app_id.toString()+'/embed'+'" width="600px" height="400px" frameborder="0" scrolling="no"&gt;&lt;/iframe&gt;</textarea>';
		this.loadTab=null;
	};
	return this;
};

Tab.prototype.makeQR=function(){
	
	this.loadTab=()=>{
		this.main.appendChild(this.textDiv(900,'30px','<br>Tablet/Mobile App<br><br>'));
		
		var self=this;
		var a=document.createElement('div');
		this.main.appendChild(a);
		vn.set(a.style,{
				display:'block',
				margin:'auto',
				width:'256px'
			});
		loadAsset('app:89muvxshkuveueob@research.dwi.ufl.edu/op.n').then(function(Assets){
				new Assets.QRCode(a,opn.hosturl+'file/'+self.parent.app_id.toString()+'/embed');
			});
		
		this.main.appendChild(this.textDiv(700,'18px','<br>'+opn.hosturl+'file/'+self.parent.app_id.toString()+'/embed'));
		
		this.main.appendChild(this.textDiv(900,'30px','<br><br>iOS'));
		
		this.main.appendChild(this.textDiv(700,'18px','<br>Open this link from Safari and add it to home screen by clicking on the "share" icon and then the "plus" icon.'));
		
		this.main.appendChild(this.textDiv(900,'30px','<br><br>Android'));
		
		this.main.appendChild(this.textDiv(700,'18px','<br>Open this link from Chrome and add it to home screen from the options menu.'));
		this.loadTab=null;
	};
	return this;
};

Tab.prototype.textDiv=function(fontWeight,fontSize,text){
	var div=document.createElement('div');
	opn.set(div.style,{
			display:'block',
			fontWeight:''+fontWeight,
			fontSize:fontSize,
			lineHeight:'30px'
		});
	div.innerHTML=text;
	return div;
};

Tab.prototype.select=function(){
	if(this.parent.selected_tab){
		opn.set(this.parent.selected_tab.div.style,this.parent.selected_tab.default_style);
		this.parent.main.removeChild(this.parent.selected_tab.content_div);
		this.parent.selected_tab=null;
	}
	this.parent.selected_tab=this;
	if(this.loadTab)this.loadTab();
	opn.set(this.parent.selected_tab.div.style,this.parent.selected_tab.pressed_style);
	this.parent.main.appendChild(this.parent.selected_tab.content_div);
}

var main=function(args)
{
	exportData({CreditsScreen:CreditsScreen});
}