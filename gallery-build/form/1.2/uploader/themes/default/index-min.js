KISSY.add("gallery/form/1.2/uploader/themes/default/index",function(d,c,b){var f="",e=c.all;function a(h){var g=this;a.superclass.constructor.call(g,h)}d.extend(a,b,{afterUploaderRender:function(g){},_getStatusWrapper:function(g){return g.children(".J_FileStatus")},_waitingHandler:function(g){},_startHandler:function(m){var n=this,j=m.uploader,l=m.index,k=n.get("queue"),g=j.get("type"),h=e(".J_ProgressBar_"+m.id);if(g=="ajax"||g=="flash"){var o=n.get("oPlugin").progressBar,i;if(o){i=new o(h);i.on("change",function(p){if(p.value==100){i.hide()}});i.render()}k.updateFile(l,{progressBar:i})}},_progressHandler:function(j){var h=j.file,g=j.loaded,i=j.total,l=Math.ceil((g/i)*100),k=h.progressBar;if(!k){return false}k.set("value",l)},_successHandler:function(i){var h=i.file,l=h.id,g=e(".J_Del_"+l),k=e(".J_Cancel_"+l),j=h.progressBar;g.show();k.hide();if(!j){e(".J_ProgressBar_"+l).hide();return false}j.set("value",100)},_errorHandler:function(g){var h=g.msg,i=g.id;e(".J_ErrorMsg_"+i).html(h)}},{ATTRS:{name:{value:"defaultTheme"},cssUrl:{value:"gallery/form/1.2/uploader/themes/default/style.css"},fileTpl:{value:'<li id="queue-file-{id}" class="clearfix" data-name="{name}"><div class="f-l sprite file-icon"></div><div class="f-l">{name}</div><div class="f-l status-wrapper J_FileStatus"><div class="status waiting-status">等待上传，<a class="J_Upload_{id}" href="#Upload">点此上传</a> </div><div class="status start-status progress-status success-status clearfix"><div class="J_ProgressBar_{id} f-l uploader-progress"><img class="loading" src="http://img01.taobaocdn.com/tps/i1/T1F5tVXjRfXXXXXXXX-16-16.gif" alt="loading" /></div> <a  class="J_Cancel_{id} f-l upload-cancel" href="#uploadCancel">取消</a><a href="#fileDel" class="J_Del_{id}" style="display:none;">删除</a></div> <div class="status cancel-status">已经取消上传，<a href="#reUpload" id="J_ReUpload_{id}" class="J_Upload_{id}">点此重新上传</a> </div><div class="status error-status upload-error"><span class="J_ErrorMsg_{id}"></span><a href="#fileDel" class="J_Del_{id}">删除</a></div></div></li>'},plugins:{value:["progressBar"]}}});return a},{requires:["node","../../theme"]});