tinymce.PluginManager.add('pagebreak',function(b){var p='mce-pagebreak',s=b.getParam('pagebreak_separator','<!-- pagebreak -->');var c=new RegExp(s.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,function(a){return'\\'+a;}),'gi');var d='<img src="'+tinymce.Env.transparentSrc+'" class="'+p+'" data-mce-resize="false" data-mce-placeholder />';b.addCommand('mcePageBreak',function(){if(b.settings.pagebreak_split_block){b.insertContent('<p>'+d+'</p>');}else{b.insertContent(d);}});b.addButton('pagebreak',{title:'Page break',cmd:'mcePageBreak'});b.addMenuItem('pagebreak',{text:'Page break',icon:'pagebreak',cmd:'mcePageBreak',context:'insert'});b.on('ResolveName',function(e){if(e.target.nodeName=='IMG'&&b.dom.hasClass(e.target,p)){e.name='pagebreak';}});b.on('click',function(e){e=e.target;if(e.nodeName==='IMG'&&b.dom.hasClass(e,p)){b.selection.select(e);}});b.on('BeforeSetContent',function(e){e.content=e.content.replace(c,d);});b.on('PreInit',function(){b.serializer.addNodeFilter('img',function(n){var i=n.length,a,e;while(i--){a=n[i];e=a.attr('class');if(e&&e.indexOf('mce-pagebreak')!==-1){var f=a.parent;if(b.schema.getBlockElements()[f.name]&&b.settings.pagebreak_split_block){f.type=3;f.value=s;f.raw=true;a.remove();continue;}a.type=3;a.value=s;a.raw=true;}}});});});