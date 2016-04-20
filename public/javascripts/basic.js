_checkIE();

function _checkIE(){
    var browser=navigator.appName; 
    var b_version=navigator.appVersion; 
    var version=b_version.split(";"); 
    if(!version[1]){
        return false;
    }
    var trim_Version=version[1].replace(/[ ]/g,""); 
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") { 
        //alert("IE 6.0"); 
        _showNotAllow();
    } else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") { 
        //alert("IE 7.0"); window.location.href="http://xxxx.com";
        _showNotAllow();
    } else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") { 
        //alert("IE 8.0"); 
        _showNotAllow();
    } else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") { 
        //alert("IE 9.0"); 
        _showNotAllow();
    }else{
        //your code goes here
    }
}

function _showNotAllow(){
    alert("对不起，您的浏览器不支持，请升级IE或改用其他浏览器访问！");
    window.location = "/page/ieupdate.html";
}

/*关键字检索*/
function searchKey() {
	var key = $("#key").val();
	if(key == ""){
		$("#search_result").html("");
		return false;
	}
	$.ajax({
		type: "POST",
		url: "/app/SearchByKey",
		data: {
			key: key
		},
		success: function(data) {
			var res = "<ul class='result-list'>";
			for (var i in data) {
				res += "<li class='result-g'><a href='/post?id=" + data[i].id + "' >【" + data[i].name + "】" + data[i].title + "</a></li>";
			}
			res += "</ul>";
			$("#search_result").html(res);
		}
	});
}