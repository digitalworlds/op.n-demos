preload('app:2eyj5vvfa5jrkyyf@research.dwi.ufl.edu/op.n');//JSTokenizer

var DecoratedTextSkin=function(){
	
	var self=this;
	
	//DEFINE GLOBAL COLORS
	this.backgroundColor='rgb(255,255,255)';
	this.defaultTextColor='rgb(0,0,0)';
	this.editBackgroundColor='rgba(255,255,255,0.1)';
	
	//DEFINE TOKENIZER
	this.tokenizer=new JSTokenizer(this);
	
	//DEFINE LINE NUMBER RENDERER
	this.lineNumberRenderer=function(div,options){
		var style={
			overflow:'hidden',
			width:'100%',
			userSelect:'none',
			fontFamily:'"Courier New", Courier, monospace',
			fontSize:'14px',
			lineHeight:'20px',
			color:'rgb(120,120,120)',
			paddingLeft:'2px',
			background:'rgb(255,255,255)'
		};
		if(options.error){
			style.background='red';
			style.color='white';
		}
		opn.set(div.style,style);
	};
	
	//reserved keywords
	var k=["function","new","var","let","const","for","of","if","else","this","true","false","while","null","try","catch","in","return","switch","continue","break","case","default","undefined","Infinity","NaN","typeof","instanceof","do"];
	var keys={};
	for(var i=0;i<k.length;i++)keys[k[i]]=true;
	
	//DEFINE TOKEN RENDERER
	this.tokenRenderer=function(token)
	{
		//first we apply some default style properties
		token.div_container.style="";
		opn.set(token.div_container.style,{
				display:'inline-block',
				minHeight:'20px',
				cursor:'text',
				verticalAlign:'top'
			});
		
		if(token.hasBlock()){
			if(token.block.cancollapse&&!token.block.isCollapsed())token.div_container.style.width="100%";
		}else{
			
		}
		
		
		if(token.edit_mode)
		{
			token.text_input.style="";
			token.text_input.style.width=(9*(token.text_input.value.length+1))+'px';
			opn.set(token.text_input.style,{
					position:'inline',
					verticalAlign:'middle',
					height:'20px',
					lineHeight:'20px',
					padding:'0px',
					border:'0px',
					fontSize:'14px',
					outline:'none',
					boxSizing:'content-box',
					background:'rgba(0,0,0,0)',
					borderRadius:'0px',
					color:token.getTextEditor().skin.defaultTextColor,
					webkitAppearance:'none'
				});
			
		}else{
			token.text_input.style="";
			opn.set(token.text_input.style,{
					display:'inline-block',
					verticalAlign:'middle',
					lineHeight:'20px',
					fontSize:'14px',
					color:token.getTextEditor().skin.defaultTextColor
				});
		}
		token.text_input.style.fontFamily='"Courier New", Courier, monospace';
		
		token.space.style="";
		opn.set(token.space.style,{
				display:'inline-block',
				verticalAlign:'middle',
				minHeight:'20px',
				fontFamily:"Arial"
			})
		
		
		//here we call the code from my_styles
		if(token.implementation){
			var f=my_styles[token.implementation.constructor.name];
			if(f)f(token);
		}else{
			if(token.edit_mode&&token.getText().length==0){
				opn.set(token.text_input.style,{
						background:'rgba(0,0,0,0.05)'
					});
			}
		}
		
		//at the end we may apply more style properties if we want
		if(token.highlighted){
			opn.set(token.div_container.style,{
					background:'rgb(0,120,215)'
				});
			opn.set(token.text_input.style,{
					color:'rgb(255,255,255)'
				});
		}
		else if(token.marked){
			if(token.marked==1)//left
			opn.set(token.div_container.style,{
					boxShadow:'inset 4px 0px 0px rgb(0,0,0)'
				});
			else if(token.marked==2)//right
			opn.set(token.div_container.style,{
					boxShadow:'inset -4px 0px 0px rgb(0,0,0)'
				});
		}
		else if(token.mouseover){
			opn.set(token.div_container.style,{
					//background:'rgba(255,0,0,0.1)',
					boxShadow:'inset 1px 1px 1px rgba(25,125,245,0.1),inset -1px -1px 1px rgba(25,125,245,0.1)'
				});
		}
		
		
		
	};
	
	
	var icon_collapse='data:image/svg+xml;utf8,<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/><path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z"/></svg>';
	var icon_expand='data:image/svg+xml;utf8,<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/><path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z"/><path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z"/></svg>';
	
	var icon_collapse_green=icon_collapse.replace('path d','path fill="rgb(63,127,95)" d').replace('path d','path fill="rgb(63,127,95)" d');
	var icon_expand_green=icon_expand.replace('path d','path fill="rgb(63,127,95)" d').replace('path d','path fill="rgb(63,127,95)" d').replace('path d','path fill="rgb(63,127,95)" d');
	
	
	var my_styles={
		"ParenthesisToken":function(token){
			opn.set(token.div_container.style,
				{
					boxSizing:'border-box',
					borderRadius:'10px',
					background:'rgba(0,255,0,0.05)'
				}
			);
			
			opn.set(token.block.div_open.style,{
					color:self.defaultTextColor,
					fontFamily:'"Courier New", Courier, monospace'
				});
			opn.set(token.block.div_close.style,{
					color:self.defaultTextColor,
					fontFamily:'"Courier New", Courier, monospace'
				});
			
			if(token.block.isCollapsed()){
				token.block.minmax_button.style.cursor="zoom-in";
				token.block.minmax_button.style.background="url('"+icon_expand+"')";
			}
			else{
				token.block.minmax_button.style.cursor="zoom-out";
				token.block.minmax_button.style.background="url('"+icon_collapse+"')";
			}
		},
		"BracketToken":function(token)
		{
			opn.set(token.div_container.style,
				{
					boxSizing:'border-box',
					background:'rgba(255,0,0,0.05)'
				}
			);
			
			opn.set(token.block.div_open.style,{
					color:self.defaultTextColor,
					fontFamily:'"Courier New", Courier, monospace'
				});
			opn.set(token.block.div_close.style,{
					color:self.defaultTextColor,
					fontFamily:'"Courier New", Courier, monospace'
				});
			
			if(token.block.isCollapsed()){
				token.block.minmax_button.style.cursor="zoom-in";
				token.block.minmax_button.style.background="url('"+icon_expand+"')";
			}
			else{
				token.block.minmax_button.style.cursor="zoom-out";
				token.block.minmax_button.style.background="url('"+icon_collapse+"')";
			}
		},
		"BraceToken":function(token)
		{
			var pt=token;
			var c=0;
			while(pt.line&&pt.line.block.getParentToken()){
				pt=pt.line.block.getParentToken();
				c+=1;
			}
			
			opn.set(token.div_container.style,
				{
					boxSizing:'border-box',
					marginBottom:'0px',
					background:'rgba(0,0,255,0.05)',
				}
			);
			
			if(token.multiline&&!token.block.isCollapsed()){
				opn.set(token.div_container.style,
					{
						border:'1px solid gray',
						borderRadius:'0px 0px 20px 0px',
						boxShadow:'0px 0px 5px rgba(0,0,0,0.2), 0px 5px 5px rgba(0,0,0,0.5)',
						marginBottom:'8px'
					}
				);
			}
			
			if(c%2==0)token.div_container.style.background='rgba(0,0,255,0.05)';
			else token.div_container.style.background='rgba(255,255,255,0.49)';
			
			opn.set(token.block.div_open.style,{
					color:self.defaultTextColor,
					fontFamily:'"Courier New", Courier, monospace'
				});
			opn.set(token.block.div_close.style,{
					color:self.defaultTextColor,
					fontFamily:'"Courier New", Courier, monospace'
				});
			
			if(token.block.isCollapsed()){
				token.block.minmax_button.style.cursor="zoom-in";
				token.block.minmax_button.style.background="url('"+icon_expand+"')";
			}
			else{
				token.block.minmax_button.style.cursor="zoom-out";
				token.block.minmax_button.style.background="url('"+icon_collapse+"')";
			}
			
		},
		"SlashStarCommentToken":function(token){
			opn.set(token.text_input.style,
				{
					color:'black',
					fontFamily:'Arial',
					fontSize:"16px",
				}
			);
		},
		"SlashSlashCommentToken":function(token){
			opn.set(token.text_input.style,
				{
					color:'black',
					fontFamily:'Arial',
					fontSize:"16px",
				}
			);
		},
		"SlashSlashToken":function(token){
			opn.set(token.div_container.style,
				{
					boxSizing:'border-box',
					background:'rgba(0,0,0,0.05)',
					fontFamily:'Arial',
					border:'1px dashed gray',
					paddingRight:'5px',
					fontSize:"16px"
				}
			);
			opn.set(token.block.div_open.style,{
					color:'rgb(63,127,95)',
					fontFamily:'"Courier New", Courier, monospace',
					fontSize:"14px",
					verticalAlign:'middle',
					lineHeight:'20px'
				});
		},
		"SlashStarToken":function(token){
			opn.set(token.div_container.style,
				{
					boxSizing:'border-box',
					background:'rgba(0,0,0,0.05)',
					fontFamily:'Arial',
					border:'1px dashed gray',
					paddingTop:'5px'
				}
			);
			
			if(token.multiline){}else token.div_container.style.paddingBottom='5px';
			
			opn.set(token.block.div_open.style,{
					color:'rgb(63,127,95)',
					fontFamily:'"Courier New", Courier, monospace',
					fontSize:"14px",
					verticalAlign:'middle',
					lineHeight:'20px'
				});
			opn.set(token.block.div_close.style,{
					color:'rgb(63,127,95)',
					fontFamily:'"Courier New", Courier, monospace',
					fontSize:"14px",
					verticalAlign:'middle',
					lineHeight:'20px'
				});
			
			if(token.block.isCollapsed()){
				token.block.minmax_button.style.cursor="zoom-in";
				token.block.minmax_button.style.background="url('"+icon_expand_green+"')";
			}
			else{
				token.block.minmax_button.style.cursor="zoom-out";
				token.block.minmax_button.style.background="url('"+icon_collapse_green+"')";
			}
		},
		
		"SingleStringToken":function(token)
		{
			
			opn.set(token.implementation.div_open.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)',
					fontFamily:'"Courier New", Courier, monospace'
				});
			
			opn.set(token.implementation.div_close.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)',
					fontFamily:'"Courier New", Courier, monospace'
				});
		},
		"SingleStringCharacterToken":function(token)
		{
			opn.set(token.text_input.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)'
				});
			
		},
		"DoubleStringToken":function(token)
		{
			
			opn.set(token.implementation.div_open.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)',
					fontFamily:'"Courier New", Courier, monospace'
				});
			
			opn.set(token.implementation.div_close.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)',
					fontFamily:'"Courier New", Courier, monospace'
				});
		},
		"DoubleStringCharacterToken":function(token)
		{
			opn.set(token.text_input.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)',
				});
		},
		"GraveStringToken":function(token)
		{
			
			opn.set(token.implementation.div_open.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)',
					fontFamily:'"Courier New", Courier, monospace'
				});
			
			opn.set(token.implementation.div_close.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)',
					fontFamily:'"Courier New", Courier, monospace'
				});
		},
		"GraveStringCharacterToken":function(token)
		{
			opn.set(token.text_input.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)',
				});
		},
		"EscapedCharacterToken":function(token)
		{
			opn.set(token.text_input.style,{
					fontWeight:'500',
					color:'rgb(42,0,255)',
				});
		},
		"NameToken":function(token)
		{
			if(keys[token.getText()])
			{
				opn.set(token.text_input.style,{
						fontWeight:'900',
						color:'rgb(127,0,85)',
					});
			}
			else//a simple variable
			{
				opn.set(token.text_input.style,{
						fontWeight:'500',
						color:self.defaultTextColor,
					});
			}
		},
		"NumberToken":function(token)
		{
			opn.set(token.text_input.style,{
					color:self.defaultTextColor
				});
		}
	};
	
}

var main=function(){
	exportData({DecoratedTextSkin});
}