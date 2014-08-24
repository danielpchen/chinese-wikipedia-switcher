var thebanben;
function refreshbanben(){
	chrome.storage.sync.get({'banben': 'tw'}, function(items){
		thebanben = items.banben;
	});	
}
refreshbanben();
chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		return {redirectUrl: details.url.replace('zh.wikipedia.org/wiki','zh.wikipedia.org/zh-'+thebanben)};
	}, 
	{urls: ["*://zh.wikipedia.org/wiki/*"]}, 
	["blocking"]
);
chrome.runtime.onMessage.addListener(function(request){
	if ( typeof request.refreshbanben !== 'undefined'){
		refreshbanben();
	}
});