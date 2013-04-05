##Options
Store options in `localStorage` (see Defer's Options page, uses `bootstrap.js`)

####Toggle:
Page Action icon vs. Icon embedded in page?

####Text fields:
* `anonHandle`
* `anonUsername`
* `anonHashtag`

####Images:
(convert to dataurl)
* `anonAv`
* `anonBG`

####Checkboxes:
* Mask usernames when authoring reply
* Mask profile pop-ups
* Mask hashtags (Trending, Tweets)

##Features/Fixes
- [x] *Catch AJAX responses from /i/connect etc. and [de]gnosticize() across response*
  Used `.on("uiTweetsDisplayed")` instead; works, but redundant with `.on("uiTweetInjected")` (needed for conversation expansions)
- [x] Don't use `:before` injection in `.tweet-box.rich-editor` (prevents manually adding @ mentions)
- [ ] Make/Clean up changes to `.tweet-box.rich-editor` when [de]gnosticizing
- [ ] Error sending tweet after tweeting in gnosticized mode and returning to normal :: May no longer happen? **Test and get STR**
- [ ] Trending topics disappear due to `$.ajax.beforeSend` false return (do I care?)

##Improvements
 - [x] Make [de]gnosticize() calls async? :: **No longer needed** with narrower scope selector
 - [ ] Move anoncss to its own file/inject as CSSStyleSheet instead of HTML element?
 - [x] Remove reliance on livequery? :: **Using MutationObserver()** 
 - [ ] Fix the odd line-height for line after .username:before substitution?
 - [ ] Better name!
 - [ ] Web page!
 - [ ] Encapsulate (namespace/closure.) :: **maybe something like**:

```javascript
Twitnonymizer {
  anonState: 0,
  anonCSS: {},
  anonInit: {
    listeners
  }
  anonIcon: '', //dataurl
  anonOptions: {
    anonHandle: '',
    anonUsername: '',
    anonAv: '', //dataurl
    anonBG: '', //dataurl
    defaultOn: false,
    maskReply: , //boolean
    maskProfile: , //boolean
    maskTrending: , //boolean
    maskHashtags: , //boolean
  },
  twitnonymize: {
    do: function(),
    undo:function()
  }
}
```
