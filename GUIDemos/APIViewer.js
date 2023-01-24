preload('app:22v5dwtd3mjxhnuy@research.dwi.ufl.edu/op.n');//API Scanner class
preload(libs['GUI']).before(function(args){
		args.app.showLoading();
	})
//preload('tests/text_editor/TextEditor.js');
preload('app:licoq0cz7yvlu1rc@research.dwi.ufl.edu/op.n')//TextEditor
preload('tests/demos/DecoratedTextSkin.js');
preload(libs['ClassicStyle']);


var APIViewer = function(args,api){
	

//Layout constructors

	//Banner
	this.banner = new Layout();
	this.banner.appendCustomStyle({
		applyStyle:function(top){
			opn.set(top.div.style,{
					//backgroundColor:'rgb(173,216,230)',
					minHeight:'80px',
				});
		}
	});
	
	this.bannerTitle=new Label("API Viewer");
	this.bannerTitle.appendCustomStyle({
		applyStyle:function(bannerTitle){
			opn.set(bannerTitle.div.style,{
					color:'black',
					fontSize:'52px',
					fontWeight:'700',
					lineHeight:'64px'
				});
		}
	});
	this.banner.append(this.bannerTitle);



	//Footer
	this.footer = new Layout();
	this.footer.appendCustomStyle({
		applyStyle:function(top){
			opn.set(top.div.style,{
					backgroundColor:'rgb(173,216,230)',
					minHeight:'80px',
				});
		}
	});

	
	this.outterLayout=new VerticalLayout();
	args.app.getWindow().getContent().append(this.outterLayout);




	//Structure of the API
	this.outterLayout.append(this.banner);
	

	this.menuLayout = new MenuLayout();
	this.outterLayout.append(this.menuLayout);
	this.menuBar=this.menuLayout.getMenuBar();
	
	this.mainLayout=this.menuLayout.getContainer();
	
	this.outterLayout.append(this.footer);
	this.footer.append(new Label("Digital Worlds rocks!!"));
	
	this.show_api(api);

};
	

APIViewer.prototype.show_api=function(api){
	console.log(api);
	//area . style . overflowY = 'auto' ;
	
    //the blank background on the right
	var layout=this.mainLayout.append(new SplitLayout({orientation:'horizontal',sticky:'second',splitPosition:0.2,splitLimit:0.5,editable:false}));
	
	layout.appendCustomStyle({
			applyStyle:function(l){
				opn.set(l.div.style,{
						maxWidth:'1200px',
						margin:'5px',
						height:'auto',
						//backgroundColor: "#7F5283"
                    
					})
				
			}
		});
		
	//globalLayout=layout;
	
	var classContainer=layout.getFirstContainer();
	classContainer.scrollY(true);

	classContainer.appendCustomStyle({
		applyStyle:function(top){
			opn.set(top.div.style,{
					minHeight:'80px',
					padding:'10px',
				
				});
		}
	});
	
	const tableOptions={
		rows:0,
		cols:1,
		tHeaders:["Classes"]
	};
	var table=new Table(tableOptions);
	table.appendCustomStyle({
			applyStyle:function(table){
				table.div.style.height='100%';
				table.div.style.margin='0px';
				
			}
		});
	classContainer.append(table);
	
	var classes=api.classes;
	
	for(var classContainer in classes){
		
		var row=table.addRow();
		row.setCellValue(0,classContainer);
		row.classname=classContainer;
		row.whenClicked().then((row,event)=>{
				console.log(row.classname);
				//console.log("this is the part");
				
				this.show_class(row.classname,layout.getSecondContainer(),api);
			});
		
	}
};

APIViewer.prototype.show_class = function(classname,layout,api){
	layout.removeAll();
	
	while(layout.div.firstChild)layout.div.firstChild.remove();

	
	var mainMiddle=new Layout();
	
	layout.append(mainMiddle);
	
	
	this.banner.removeAll();
	
	
    
	var bannerTitle=new Label(classname+' Class');
	this.banner.append(bannerTitle);
	bannerTitle.appendCustomStyle({
			applyStyle:function(bannerTitle){
				opn.set(bannerTitle.div.style,{
						color:'black',
						fontSize:'52px',
						fontWeight:'700',
						lineHeight:'64px'
					});
			}
		});
	
	if(api.classes[classname].extends){
		var extLay=new HorizontalLayout();
		this.banner.append(extLay);
		
		var ext=new Label('(extends '+api.classes[classname].extends+')');
		extLay.append(ext);
		ext.appendCustomStyle({
				applyStyle:function(ext){
					opn.set(ext.div.style,{
							color:'black',
							fontSize:'26px',
							fontWeight:'500',
							lineHeight:'32px'
						});
				}
			});
	}
	
	
	
	
	var leftright=new SplitLayout({orientation:'horizontal',sticky:'second',splitPosition:0.80,splitLimit:0.1,editable:true});
	mainMiddle.append(leftright);
	leftright.getFirstContainer().scrollY(true);

	leftright.getFirstContainer().appendCustomStyle({
		applyStyle:function(layout){
			opn.set(layout.div.style,{	
					//minWidth:'550px',
					padding: "20px",
					
				
				});
		}
	});
	
	var methodsContainer=leftright.getSecondContainer();
	methodsContainer.scrollY(true);
	
	methodsContainer.appendCustomStyle({
			applyStyle:function(layout){
				opn.set(layout.div.style,{
						padding:'10px',
						minWidth: 'auto',
					
					});
			}
		});

    

	const tableOptions={
		rows:0,
		cols:1,
		tHeaders:["Methods"]
	};
	var table=new Table(tableOptions);
	table.appendCustomStyle({
			applyStyle:function(table){
				table.div.style.height='100%';
				table.div.style.margin='0px';
				
			}
		});
	methodsContainer.append(table);
	
	var cl=api.classes[classname];
	
	

	var constructor_row=null;
	
	for(var m in cl.methods){
		
		var row=table.addRow();
		row.setCellValue(0,m);
		row.methodname=m;
		row.whenClicked().then((row,event)=>{
			
				//globalLayout.div.parentElement.scrollTop=0;
				this.show_method(row.methodname,leftright.getFirstContainer(),cl,api,classname);
			});
		if(m==='constructor')constructor_row=row;
	}
	
	if(constructor_row){
		constructor_row.whenClicked().callThen();
	}
	
};

APIViewer.prototype.show_method = function(methodname, parent_layout,cl,api,classname){
	var method=cl.methods[methodname];


	parent_layout.removeAll();
	while(parent_layout.div.firstChild)parent_layout.div.firstChild.remove();
	

	//Remove all previous menu items
	this.menuBar.removeAll();
	
	var menu=this.menuBar;
	var menuItem_1 = new MenuItem("Open JS file")
	menu.append(menuItem_1);
	var menuItem_2= new MenuItem("Demo");
	menu.append(menuItem_2);
	

	menuItem_1.whenPressed().then(()=>{
		var oid=new opnCloudObjectID(api.classes[classname].oid);
		open(opn.hosturl+'file/'+oid.toString(true)+'/code');
	});

	menuItem_2.whenPressed().then(()=>{
		var oid=new opnCloudObjectID(api.classes[classname].oid);
		open(opn.hosturl+'Alex Files/'+oid.toString(true)+'/code');
	});


	var layout=parent_layout;





	var txt=cl.name+'.'+methodname+' method';
	if(methodname==='constructor')txt='Constructor';
	var title=new Label(txt);
	layout.append(title);
	title.appendCustomStyle({
			applyStyle:function(title){
				opn.set(title.div.style,{
						color:'black',
						fontSize:'32px',
						fontWeight:'700',
						lineHeight:'32px'
					});
			}
		});
	
	var params=method.params;
	var param=method.param;
	var returns=method.returns;
	var comments=method.comments;
	var inheritedFrom=false;
	var code=method.code;

	
	if(method.inheritedFrom){
		
		var m=api.classes[method.inheritedFrom].methods[methodname];
		params=m.params;
		comments=m.comments;
		inheritedFrom=method.inheritedFrom;
		code=m.code;
		
		
	}
	
	var p=new Label("  ");// created for spacing
	layout.append(p);
	p.appendCustomStyle({
			applyStyle:function(l){
				opn.set(l.div.style,{
						minHeight:'40px'
					});
			}
		})
	
	var methodName=new HorizontalLayout();
	layout.append(methodName);
	
	var codeStyle={
		applyStyle:function(title){
			opn.set(title.div.style,{
					//color : 'white' ,
					fontFamily:'Courier',
					fontSize:'24px',
					fontWeight:'500',
					lineHeight:'24px'
				});
		}
	};
	
	if(methodname==="constructor"){
		
		var name=new Label('new '+cl.name);
		name.appendCustomStyle(codeStyle);
		methodName.append(name);
		
	}else{
		var name=new Label(methodname);
		name.appendCustomStyle(codeStyle);
		methodName.append(name);
	}
	
	
	
	var p=new Label('(');
	methodName.append(p);
	p.appendCustomStyle(codeStyle);
	if(params)
	for(var i=0;i<params.length;i++){
		var p=new Label(params[i]);
		p.appendCustomStyle(codeStyle);
		methodName.append(p);
		if(i<params.length-1){
			var p=new Label(',');
			p.appendCustomStyle(codeStyle);
			methodName.append(p);
		}
		
	}
	var p=new Label(')');
	methodName.append(p);
	p.appendCustomStyle(codeStyle);
	if(inheritedFrom){
		var i=new Label('inherited from');
		methodName.append(i);
		var i=new Label(inheritedFrom);
		methodName.append(i);
	}
	
	var p=new Label("  "); //For spacing
	layout.append(p);
	p.appendCustomStyle({
			applyStyle:function(l){
				opn.set(l.div.style,{
						minHeight:'40px'
					});
			}
		})
	
	var descriptionLabel = new Label("Description");
	descriptionLabel.appendCustomStyle({
		applyStyle:function(descriptionLabel){
			opn.set(descriptionLabel.div.style,{
				color:'black',
				fontSize:'26px',
				fontWeight:'500',
				lineHeight:'32px'
				});
		}
	});
	layout.append(descriptionLabel);
	if(comments)
	for(var i=0;i<comments.length;i++){
		var commentLabel=new Label(comments[i]);
		layout.append(commentLabel);
	}else{
		var commentLabel=new Label('No description available.');
		layout.append(commentLabel);
	}
	
	if(param){ 
		var p=new Label(""); //For spacing
		layout.append(p);
		p.appendCustomStyle({
				applyStyle:function(l){
					opn.set(l.div.style,{
							minHeight:'40px'
						});
				}
			})
		
		var p=new Label("Input");
		p.appendCustomStyle({
			applyStyle:function(p){
				opn.set(p.div.style,{
					color:'black',
					fontSize:'26px',
					fontWeight:'500',
					lineHeight:'32px'
					});
			}
		});
		layout.append(p);
		
		
		for(var i=0;i<param.length;i++){
			var p=new Label(param[i]);
			layout.append(p);
		}
	}
	
	if(returns){
		var p=new Label("");
		layout.append(p);
		p.appendCustomStyle({
				applyStyle:function(l){
					opn.set(l.div.style,{
							minHeight:'40px'
						});
				}
			})
		
		var p=new Label("Output:");
		layout.append(p);
		p.appendCustomStyle({
				applyStyle:function(l){
					opn.set(l.div.style,{
							fontWeight:'700'
						});
				}
			})
		
		var p=new Label(returns);
		layout.append(p);
	}
	
	var p=new Label("  ");
	layout.append(p);
	p.appendCustomStyle({
			applyStyle:function(l){
				opn.set(l.div.style,{
						minHeight:'40px'
					});
			}
		})

	


	if(code){

		var editorLabel = new Label("Try it!");
		editorLabel.appendCustomStyle({
			applyStyle:function(bannerTitle){
				opn.set(bannerTitle.div.style,{
					color:'black',
					fontSize:'26px',
					fontWeight:'500',
					lineHeight:'32px'
					});
			}
		});
		layout.append(editorLabel);
		layout.append(new Label(""));


		//Text Editor
		var e = new TextEditor();
		e.hideNumbers();
		e.setSkin(new DecoratedTextSkin());
		layout.div.appendChild(e.getDiv());
		e.setReadOnly(true);
		e.typeAsync(code).then(()=>{
			e.setReadOnly(true);
			opn.wait().then(()=>{e.getGlobalScope().scrollToTop();})
		});
		
		
	}

	
};
	
var main=function(args)
{
	var layout=args.app.getWindow().getContent().append(new Layout());
    
	var progress_bar=new ProgressBar();
	var sc=new APIScanner();
	var p=sc.scan('iaxupknf3kjiyo2a@research.dwi.ufl.edu/op.n');
	//var p=sc.scan('viqny8y1zv7fl2m0@research.dwi.ufl.edu/op.n');
	p.getProgress().whenProgress().then(function(p){
			progress_bar.setValue(Math.round(p.getValue()*100));
		});
	layout.append(progress_bar);
	p.then(function(api){
			
			args.app.getWindow().getContent().removeAll();
			var area=args.app.getContentDiv();
			while(area.firstChild)area.firstChild.remove();
			new APIViewer(args,api);

			
		})
	
}
