/*加载技术分类菜单
 *默认读取localStorage里的数据，如果没有则访问服务器调取数据
 * */
function loadMenu() {
	var _storage = window.sessionStorage;
	if (_storage.getItem("menu")) {
		console.log("read data in storage");
		$("#ajax_menu").html(_storage.getItem("menu"));
	} else {
		console.log("read data from server");
		$.ajax({
			type: "POST",
			url: domino + "/app/getMenu",
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			dataType: "json",
			success: function(data) {
				var res = "";
				for (var i in data) {
					res += "<li class=''><a href='/app/list?c=" + data[i].id + "'>" + data[i].name + "</a></li>";
				}
				$("#ajax_menu").html(res);
				_storage.setItem("menu", res);
			}
		});
	}
}
