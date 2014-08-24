function save_options(mybanben){
	chrome.storage.sync.set({'banben': mybanben},function(){
		chrome.runtime.sendMessage({refreshbanben: true});
		var status = document.getElementById("status");
		status.innerHTML = '<div id="savedmessage">新設定已保存！<br />Preference saved!</div>';
		setTimeout(function(){
			status.textContent = '';
		}, 2000)
	});
}
function restore_options(){
	chrome.storage.sync.get({'banben':'tw'}, function(items){
		var radios = document.getElementsByName('banben');
		for (var i = 0; i < radios.length; i++){
			if ( radios[i].value == items.banben ){
				radios[i].checked = true;
				break;
			}
		}
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
var radios = document.getElementsByName('banben');
for (var i = 0; i < radios.length; i++){
	radios[i].addEventListener('click', function(){save_options(this.value)});
}