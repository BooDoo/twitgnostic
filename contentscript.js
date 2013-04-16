//Inject and run twitgnostic, and then remove script element.
var s = document.createElement('script');
	s.src = chrome.extension.getURL('anon-timeline.min.js');
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
(document.head||document.documentElement).appendChild(s);