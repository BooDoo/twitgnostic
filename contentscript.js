//Inject and run livequery, and then remove it.
var s = document.createElement('script');
	s.src = chrome.extension.getURL('livequery-111.min.js');
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
(document.head||document.documentElement).appendChild(s);

//Inject and run twitgnostic, and then remove it.
var s = document.createElement('script');
	s.src = chrome.extension.getURL('anon-timeline.js');
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
(document.head||document.documentElement).appendChild(s);