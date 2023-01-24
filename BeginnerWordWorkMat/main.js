preload(libs['GUI'])
preload('CreditsScreen.js').before(function(args){
		args.app.showLoading();
	});

var main=function(args){
	
	if(false&&document.fonts.check('1em Didact Gothic')){
		start(args);
	}else
	{
			var font=new FontFace('Didact Gothic','url("DidactGothic-Regular.ttf")');
			font.load().then(function(loaded_face){
					document.fonts.add(loaded_face);
					start(args);
				});
	}
}

var alphabets=[
	{name:'Latin (lower case)',letters:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']},
	{name:'Latin (upper case)',letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']},
	{name:'Ελληνικά (μικρά)',letters:['α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','ο','π','ρ','σ','τ','υ','φ','χ','ψ','ω']},
	{name:'Ελληνικά (κεφαλαία)',letters:['Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Ι','Κ','Λ','Μ','Ν','Ξ','Ο','Π','Ρ','Σ','Τ','Υ','Φ','Χ','Ψ','Ω']},
	{name:'עִברִית',letters:['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ך','ל','מ','ם','נ','ן','ס','ע','פ','ף','צ','ץ','ק','ר','ש','ת']}
];

var alphabet=alphabets[0].letters;

var start=function(args)
{
	args.app.clearContents();
	var area=document.createElement('div');
	
	var menubar;
	
	var showHelpWindow;
	
	if(args.app.isWindowed()){
		
		var wind=args.app.getWindow();
		
		wind.whenResized().then((wind)=>{
				for(var i=0;i<float_list.length;i++)float_list[i]();
			})
		
		var menulayout=new MenuLayout();
		menubar=menulayout.getMenuBar();
		wind.getContent().append(menulayout);
		menulayout.getContainer().div.appendChild(area);
		
		showHelpWindow=function(){
			var w2=wind.getWindowContainer().append(new Window({title:"Help"}));
			w2.setSize(900,850);
			w2.center();
			w2.block();
			var div=document.createElement('div');
			opn.set(div.style,{
					position:'absolute',
					display:'block',
					top:'0px',
					bottom:'0px',
					left:'0px',
					right:'0px',
					backgroundColor:'white',
					overflow:'hidden'
				});
			w2.getContentDiv().appendChild(div);
			div.appendChild(cs.getDiv());
			cs.getDiv().style.display='block';
			cs.x_div.style.display='none';
		}
		
		menubar.append(new MenuItem('Help')).whenClicked().then((item)=>{
				showHelpWindow();
			});
		
		var alp_menu=menubar.append(new MenuItem('Alphabets')).getSubMenu();
		for(var i=0;i<alphabets.length;i++){
			alp_menu.append(new MenuItem(alphabets[i].name)).whenClicked().then((item,e,p)=>{
					item.collapseMenu();
					alphabet=alphabets[p.i].letters;
					for(var i=0;i<float_list.length;i++)float_list[i](true);
					makeFloatBoxes();
					
					
				}).i=i;
		}
		
	}else{
		args.app.getContentDiv().appendChild(area);
	}
	
	opn.set(area.style,{
			position:'absolute',
			display:'block',
			top:'0px',
			bottom:'0px',
			left:'0px',
			right:'0px',
			backgroundColor:'white',
			overflow:'hidden'
		});
	
	area.addEventListener('touchstart',function(e){
			e.preventDefault();
		});
	
	var top=document.createElement('div');
	opn.set(top.style,{
			position:'absolute',
			left:'0px',
			right:'0px',
			top:'0px',
			height:'30%'
			//backgroundColor : 'rgb(255,200,200)'
		});
	area.appendChild(top);
	
	var slotarea_c=document.createElement('div');
	opn.set(slotarea_c.style,{
			position:'absolute',
			left:'50%',
			top:'50%',
			height:'50%',
			width:'50%'
		});
	top.appendChild(slotarea_c);
	
	var slotarea=document.createElement('div');
	opn.set(slotarea.style,{
			position:'absolute',
			left:'-50%',
			top:'-50%',
			height:'100%',
			width:'100%'
			//backgroundColor : 'rgb(200,200,200)'
		});
	slotarea_c.appendChild(slotarea);
	var w=Math.round(100/6);
	for(var i=0;i<6;i++){
		var s=document.createElement('div');
		opn.set(s.style,{
				position:'absolute',
				left:(i*w)+'%',
				top:'0px',
				height:'100%',
				width:w+'%',
				backgroundColor:'rgb(200,200,200)',
				border:'2px solid black'
			});
		slotarea.appendChild(s);
	}
	
	var reset_b=document.createElement('div');
	opn.set(reset_b.style,{
			position:'absolute',
			right:'5%',
			top:'25%',
			height:'50%',
			width:'8%',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center'
		});
	
			reset_b.style.backgroundImage='url("undo.png")';
		
	top.appendChild(reset_b);
	reset_b.addEventListener('touchstart',function(){
			for(var i=0;i<float_list.length;i++)float_list[i]();
		})
	reset_b.addEventListener('mousedown',function(){
			for(var i=0;i<float_list.length;i++)float_list[i]();
		})
	
	var info_b=document.createElement('div');
	opn.set(info_b.style,{
			position:'absolute',
			left:'5%',
			top:'25%',
			height:'50%',
			width:'8%',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center'
		});
	
			info_b.style.backgroundImage='url("questionmark.png")';
	
	top.appendChild(info_b);
	var questionmark_click=function(){
		if(menubar){
			showHelpWindow();
			return;
		}
		
		cs.getDiv().style.zIndex=float_item_indx;
		float_item_indx+=1;
		cs.getDiv().style.display='block';
	};
	top.appendChild(info_b);
	info_b.addEventListener('touchstart',function(e){
			e.stopPropagation();
			e.preventDefault();
			questionmark_click();
		})
	info_b.addEventListener('mousedown',function(e){
			e.stopPropagation();
			e.preventDefault();
			questionmark_click();
		})
	
	
	var cs=new CreditsScreen(args.app.getId(),'Word Work Mat - Beginner','Use the letter cards to make words!'+'<br><br> This app was developed at the University of Florida as a collaboration between the Digital Worlds Institute, Valentina Contesse, M.Ed., the P. K. Yonge Developmental Research School, and the UF Literacy Institute.',
		'https://www.youtube.com/embed/CPgzP6SXouk?feature=oembed'
	);
	area.appendChild(cs.getDiv());
	
	
	var bottom=document.createElement('div');
	opn.set(bottom.style,{
			position:'absolute',
			left:'0px',
			right:'0px',
			bottom:'0px',
			height:'70%'
			//backgroundColor : 'rgb(200,200,200)'
		});
	area.appendChild(bottom);
	
	var ufli=document.createElement('div');
	opn.set(ufli.style,{
			position:'absolute',
			left:'0px',
			width:'10%',
			bottom:'0px',
			height:'10%',
			backgroundSize:'contain',
			backgroundPosition:'center',
			backgroundRepeat:'no-repeat',
			cursor:'pointer'
		});
	
			ufli.style.backgroundImage='url("UFLI.jpg")';
		
	area.appendChild(ufli);
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
	
	global_area=area;
	bottom_area=bottom;
	makeFloatBoxes();
}

var global_area;
var bottom_area;

var makeFloatBoxes=function(){
	float_list=[];
	var w=Math.round(40/5);
	var h=Math.round(100/6);
	
	var h=Math.round(h*0.7*0.9);
	var w=Math.round(w*0.9);
	
	var i=0;
	var j=0;
	for(var l=0;l<alphabet.length;l++){
		var last_row=false;
		if(alphabet.length<=(j+1)*7)last_row=true;
		if(last_row&&i==0){
			i+=Math.floor(((j+1)*7-alphabet.length)/2);
		}
		addFloatingBox2((i+1)*80/7,(j+2)*100/6,w,h,alphabet[l],global_area,bottom_area,'rgb(158,206,220)');
		
		i+=1;
		if(i>=7){
			i=0;
			j+=1;
		}
	}
}


var addFloatingBox=function(x,y,w,h,text,area,bottom,color){
	var s=document.createElement('div');
	opn.set(s.style,{
			position:'absolute',
			left:x+'%',
			top:y+'%',
			height:h+'%',
			width:w+'%',
			userSelect:'none',
			border:'3px solid black',
			borderRadius:'20px',
			fontSize:Math.round(0.6*0.9*bottom.clientHeight/6)+'px',
			fontWeight:700,
			fontFamily:'"Didact Gothic"',
			textAlign:'center',
			lineHeight:Math.round(0.9*bottom.clientHeight/6)+'px',
			color:'black',
			//textShadow : '2px 2px #ffffff, -2px -2px #ffffff, -2px 2px #ffffff, 2px -2px #ffffff ' ,
			backgroundColor:color,
			boxSizing:'content-box',
			boxShadow:'2px 2px 2px #888888'
		});
	s.innerHTML=text;
	area.appendChild(s);
	
	float_list.push(function(delet){
			fx=Math.round(x*area.clientWidth/100);
			fy=Math.round(y*area.clientHeight/100);
			s.style.left=x+'%';
			s.style.top=y+'%';
			s.style.fontSize=Math.round(0.6*0.9*bottom.clientHeight/6)+'px';
			s.style.lineHeight=Math.round(0.9*bottom.clientHeight/6)+'px';
			if(delet)s.remove();
		})
	
	var mt=function(e){
		e.preventDefault();
		fx=memx+e.targetTouches[0].clientX;
		fy=memy+e.targetTouches[0].clientY;
		s.style.left=fx+'px';
		s.style.top=fy+'px';
	}
	var ut=function(e){
		//float_item . style . opacity = 1 ;
		s.style.boxShadow='2px 2px 2px #888888';
		document.removeEventListener('touchend',ut,true);
		document.removeEventListener('touchmove',mt,true);
		document.removeEventListener('touchleave',ut,true);
	}
	var memx,memy;
	var fx=Math.round(x*area.clientWidth/100);
	var fy=Math.round(y*area.clientHeight/100);
	s.addEventListener('touchstart',function(e){
			e.preventDefault();
			e.stopPropagation();
			//float_item . style . opacity = 0.5
			memx=-e.targetTouches[0].clientX+fx;
			memy=-e.targetTouches[0].clientY+fy;
			
			s.style.zIndex=float_item_indx;
			s.style.boxShadow='10px 10px 8px rgba(20,20,20,0.5)';
			float_item_indx+=1;
			
			document.addEventListener('touchmove',mt,true);
			document.addEventListener('touchend',ut,true);
			document.addEventListener('touchleave',ut,true);
		})
	
	var mo=function(e){
		e.preventDefault();
		fx=memx+e.clientX;
		fy=memy+e.clientY;
		s.style.left=fx+'px';
		s.style.top=fy+'px';
	}
	var up=function(e){
		//float_item . style . opacity = 1 ;
		s.style.boxShadow='2px 2px 2px #888888';
		document.removeEventListener('mouseup',up,true);
		document.removeEventListener('mousemove',mo,true);
		
	}
	var memx,memy;
	var fx=Math.round(x*area.clientWidth/100);
	var fy=Math.round(y*area.clientHeight/100);
	s.addEventListener('mousedown',function(e){
			e.preventDefault();
			e.stopPropagation();
			//float_item . style . opacity = 0.5
			memx=-e.clientX+fx;
			memy=-e.clientY+fy;
			
			s.style.zIndex=float_item_indx;
			s.style.boxShadow='10px 10px 8px rgba(20,20,20,0.5)';
			float_item_indx+=1;
			
			document.addEventListener('mousemove',mo,true);
			document.addEventListener('mouseup',up,true);
		})
}

var addFloatingBox2=function(x,y,w,h,text,area,bottom,color){
	for(var i=0;i<3;i++)
	addFloatingBox(x,y,w,h,text,area,bottom,color);
	
}

var float_list=[];
var float_item_indx=1;
