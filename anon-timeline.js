//DataURL for the anonymous avatar
var anonAv = 'data:image/png;base64,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',
		anonBG = 'data:image/png;base64,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',
		anonHandle = 'USER',
		anonUsername = 'user',
		anonHashtag= 'hashtag',
		navRight = $('.pull-right').get(0),
		clientUsername = $('.js-user-style')[0].id.substr(11),
		clientNameRE = new RegExp(clientUsername, 'i'),
		gnosticState = 0,
		injectedEvent = {},
		sentXHRs = [], 
		sentDatas = [], 
		sentSettingses = [];

var anonCSS =		'.metadata.social-context, .social-context, .context, .follow-text, .verified, .stats, .tweet-stats-container, .bio, .location, ' +
                '.url, .social-proof, #profile_popup.new-design .social-proof, #profile_popup .social-proof, .dogear, .view-profile, .profile-nav, ' +
                '.metadata.social-context, .discover-nav, [data-name="similarTo"] {display: none;}' +
                '.avatar {content:url("'+ anonAv +'");}' +
                '.profile-header-inner {background-image:url("' + anonBG + '");}' +
                '.username:before {content:"@' + anonUsername + '";font-size:12px;line-height:18px;visibility:visible;}' +
                '.username {font-size:0px;visibility:hidden;}' +
                '.fullname:before{content:"' + anonHandle + '";visibility:visible;font-size:14px;line-height:18px;}' +
                '.fullname{visibility:hidden;font-size:0px;}' +
                '.twitter-atreply:before{content:"@' + anonUsername + '";visibility:visible; font-family: Arial,sans-serif; font-size:14px;}' +
                '.twitter-atreply{visibility:hidden;font-size:0px;}' + 
                '.rich-normalizer{display: none;}' + //Hide a phantom @user which appears when writing a reply.
                //TODO: Intercept, replace with @user
                '.message-drawer{display: none;}'; //Hide the "your tweet to @... has been sent message"

//Create the STYLE element to make presentation-layer changes
var anonStyle = document.createElement('style');
		anonStyle.type = 'text/css';
		anonStyle.innerText = anonCSS;

//Make the gnosticon itself and insert to the right of Timeline title
var gnosticon = document.createElement('img');
		gnosticon.src = anonAv;
		gnosticon.alt = 'gnosticon';
		gnosticon.className = 'gnosticize';
		gnosticon.id = 'gnosticon';
		gnosticon.style.position = 'relative';
		gnosticon.style.height = '25px)';
		gnosticon.style.width = '25px';
		gnosticon.style.top = '7px';
		gnosticon.title = 'Gnosticize!';
$(navRight).append(gnosticon);

//Toggle behavior
$('#gnosticon').on('click', function (e) { 
	if (gnosticState === 0) {
		document.head.appendChild(anonStyle);
		gnosticize();
	} else {
		document.head.removeChild(anonStyle);
		//TODO: BUG! Hashtags stay gnosticized
		degnosticize();
	}
});

$(document).on('dataTweetConversationResult', function (e) {
	if (gnosticState == 1) {
	/*
		console.log = console.__proto__.log;
		convoExpandEvent = e;
		console.log(convoExpandEvent);
	*/
		var convoExpandTarget = $(e.target);
		var convoExpandTargetParent = $(convoExpandTarget).parent();
		$(convoExpandTargetParent).on('change', function (e) {gnosticize(this);});
	}
});

$(document).on('uiHasInjectedTimelineItem', function (e) {
	if (gnosticState == 1) {
/*
		console.log = console.__proto__.log;
		injectedEvent = e;
		console.log(injectedEvent));
*/
		gnosticize(injectedEvent.target);
	}
});

$('#profile_popup.has-content').livequery(function () {
	if (gnosticState == 1) {
		gnosticize($('#profile_popup'));
	}
});

$('.my-tweet').livequery(function () {
	if (gnosticState == 1) {gnosticize($('.my-tweet'));}
});

$('#profile_popup .profile-header-inner').livequery(function() {
	$(this).removeAttr('style');
	$('#profile_popup a.profile-picture')[0].href = '/';
});

var sendTweetEvent = {};
$(document).on("uiSendTweet", function (e) {
	console.log = console.__proto__.log;
	console.log(e);
	sendTweetEvent = e;
});

$.ajaxSetup({
	beforeSend: function(req, settings) {
		console.log = console.__proto__.log; 
		if (settings.url === '/i/tweet/create' && gnosticState === 1) {
			console.log(settings.data); 
			sentXHRs.push(req); 
			sentSettingses.push(settings);
			sentDatas.push(settings.data); 
			var targetMentions = $(replyTarget).data('datamentions'),
					maskedMentions = $(replyTarget).data('mentions'),
					replyTarget = $('[data-tweet-id="' + settings.data.match(/in_reply_to_status_id=\d+(?=&)/).toString().substr(22) + '"]')[0],
					targetAuthor = $(replyTarget).data('datascreenName'),
					lengthDiff = targetAuthor.length - anonUsername.length,
					authorRE = new RegExp((lengthDiff > 0) ? anonUsername + Array(lengthDiff + 1).join('.') : anonUsername, 'i');

			settings.data = settings.data.replace(authorRE, targetAuthor);
			
			if (targetMentions && maskedMentions) {
				targetMentions = targetMentions.split(' ');
				maskedMentions = maskedMentions.split(' ');
        targetMentions.forEach(function (el, n, arr) {
					if (el.length != clientUsername.length || el.search(clientNameRE) < 0) {
						settings.data = settings.data.replace(maskedMentions[n], el);
						// console.log('Replaced ' + maskedMentions[n] + ' with ' + targetMentions[n]);
					}
				});
			}
			//console.log(settings.data);
		}
	}
});


//Send all known events to the log
/*
$(document).on("uiShowMessage dataGotProfileStats uiDidRetweet uiDidUnretweet uiDidDeleteTweet uiDidFavoriteTweet uiDidUnfavoriteTweet uiGetTweet uiHasInjectedTimelineItem uiShouldFixMargins uiPermalinkClick uiOpenSigninOrSignupDialog dataDidDeleteTweet dataDidRetweet dataDidUnretweet dataFailedToUnfavoriteTweet dataFailedToFavoriteTweet dataFailedToUnretweet dataFailedToRetweet uiDidFavoriteTweetToggle uiDidRetweetTweetToggle uiDidReplyTweetToggle uiBeforePageChanged uiOpenConfirmDialog uiOpenTweetDialog uiOpenDMConversation uiFollowStateChange dataFollowStateChange uiFollowAction uiUnfollowAction uiCancelFollowRequestAction uiBlockAction uiReportSpamAction uiUnblockAction uiRetweetOnAction dataRetweetOnAction uiRetweetOffAction dataRetweetOffAction uiDeviceNotificationsOnAction dataDeviceNotificationsOnAction uiDeviceNotificationsOffAction dataDeviceNotificationsOffAction uiShowMobileNotificationsConfirm uiShowPushTweetsNotificationsConfirm uiShowProfilePopup uiItemLinkClick uiHasExpandedTweet uiHasCollapsedTweet dataTweetSuccess uiExpandFocus uiTweetBoxExpanded uiInitTweetbox uiRequestActivityPopup uiHasRenderedTweetSocialProof dataTweetConversationResult dataTweetSocialProofResult uiWantsMediaForTweet uiNeedsTweetExpandedContent uiShouldToggleExpandedState uiWantsToCloseAllTweets uiHasInjectedNewTimeline uiPageChanged dataDidResolveUrl uiWantsLinkResolution uiFlagConfirmation uiFlagMedia uiUpdateViewPossiblySensitive uiHasAddedLegacyMediaIcon dataTrendsRefreshed dataGotTrendsDialog dataTrendsLocationChanged dataPageMutated uiWantsTrendsDialog uiChangeTrendsLocation uiRefreshTrends uiTrendSelected uiTrendsDisplayed uiTweetsDisplayed uiTrendsDialogOpened uiShowTrendsLocationDialog dataGotTrendsDialogError uiNearTheTop uiNearTheBottom uiTimelineReset dataGotMoreTimelineItems dataGotMoreTimelineItemsError uiWantsMoreTimelineItems uiFetchActivityPopup dataActivityPopupSuccess dataActivityPopupError uiOpenTweetDialogWithOptions dataTweetExpansionError dataUpdatedViewPossiblySensitiveResult uiShowError dataHelpPipsLoaded dataHelpPipsError uiHelpPipExplainTriggered uiHelpPipPromptFollowed uiHelpPipExplainFollowed uiHelpPipIconClicked uiHelpPipExplainClicked uiHelpPipOpened uiHelpPipDismissed uiHelpPipIconAdded uiShortcutCloseAll uiInjectNewItems uiShortcutSelectPrev uiShortcutSelectNext uiShortcutEnter uiShortcutGotoTopOfScreen uiSelectTopTweet uiShortcutFavorite uiShortcutRetweet uiShortcutReply uiWantsToRefreshTimestamps uiHasDisabledAutoplay uiHasEnabledAutoplay uiTimelineShouldRefresh uiTimelinePollForNewItems uiAddPageCount uiHasInjectedOldTimelineItems uiGetUserRecommendations uiUsersDisplayed uiDidGetRecommendations dataDidGetUserRecommendations dataFailedToGetUserRecommendations uiDismissUserRecommendation uiDidDismissUserRecommendation uiClickedWtfLink dataDidDismissRecommendation dataFailedToDismissUserRecommendation uiDidHideEmptyTimelineModule uiSwiftLoaded uiDidDismissEmptyTimelineRecommendations dataDidExcludeUserRecommendations uiRefreshUserRecommendations uiPromptbirdDismissPrompt uiPromptbirdSetLanguage uiPromptbirdDoOneClickImport uiPromptbirdDoInlineContactImport uiPromptbirdClick dataPromptbirdDidOneClickImport dataPromptbirdLanguageChangeSuccess uiOpenGallery dataUserHasUnreadDMs dataUserHasNoUnreadDMs uiMediaThumbnailsVisible uiMediaThumbnailClick uiMediaViewAllClick uiReloadThumbs uiMediaThumbnailGotNewItems uiSuggestedUsersRendered dataSuggestedUsersSuccess uiGalleryOpened uiGalleryClosed uiGalleryMediaLoaded uiGalleryMediaFailed uiGalleryNavigatePrev uiGalleryNavigateNext uiCloseGallery uiShortcutEsc uiShortcutLeft uiShortcutRight dataGotTweet uiDidFollower dataFollowerAcceptSuccess dataFollowerDeclineSuccess dataFollowerAcceptFailure dataFollowerDeclineFailure dataFollower uiDidFollowerAccept uiDidFollowerDecline uiOpenCreateListDialog dataUserActionSuccess uiNeedsFacets dataHasFacets uiRefreshUserSearchModule dataUserSearchContent uiAddSavedSearch uiRemoveSavedSearch uiNavigate uiSavedSearchRemoveConfirm dataAddedSavedSearch dataRemovedSavedSearch uiCardMediaClick uiCardNewsClick uiCardSearchClick uiTweetStoryLinkClicked uiStoryTweetSent uiCardImageLoaded uiCardImageLoadError uiOneboxDisplayed uiOneboxViewAllClick uiEventOneboxClick uiStoryTweetAction uiTweetSent uiHasCollapsedStory uiHasExpandedStory uiSearchAssistanceAction uiReplyButtonTweetSuccess uiDidRetweetSuccess dataDidFavoriteTweet dataDidUnfavoriteTweet uiNeedsShareViaEmailDialog dataShareViaEmailSuccess uiMentionAction uiListAction uiDmAction dataProfilePopupSuccess uiItemSelected uiItemDeselected uiHashtagClick uiCashtagClick uiMapShow uiMapClick uiNavigationLinkClick uiTeardown dataPageRefresh dataPageFetch uiShortcutNavigateHome uiShortcutNavigateActivity uiShortcutNavigateConnect uiShortcutNavigateMentions uiShortcutNavigateDiscover uiShortcutNavigateProfile uiShortcutNavigateFavorites uiShortcutNavigateSettings uiShortcutNavigateLists dataBeforeNavigate uiPromotedLinkClick uiCloseDropdowns uiShowProfileNewWindow dataSetDebugData uiTweetDismissed uiDialogFadeInComplete uiDialogOpened uiDialogHidden uiDialogCloseRequested uiDialogClosed uiCloseDialog uiSigninOrSignupDialogOpened uiSigninOrSignupDialogClosed uiSignupButtonClicked uiCloseSigninOrSignupDialog dataGeoState dataGeoSearchResults dataGeoSearchResultsUnavailable uiRequestGeoState uiGeoPickerEnable uiGeoPickerTurnOn uiGeoPickerTurnOff uiGeoPickerChange uiGeoPickerSearch dataTweetError dataDirectMessageSuccess uiSendTweet uiSendTweetWithMedia uiSendDirectMessage uiOverrideTweetBoxOptions uiPrepareTweetBox uiShortcutShowTweetbox uiOpenReplyDialog uiDialogUpdateTitle uiTweetboxTweetError uiTweetBoxCondensed uiTweetBoxRemoveImage uiImagePickerRemove uiTweetBoxShowPreview uiTweetBoxHidePreview uiImagePickerAdd uiImagePickerFileReady uiImagePickerError uiImagePickerClick uiAutocompleteItemSelected uiAutocompleteEnter uiHideAutocomplete uiMoveSelectionUp uiMoveSelectionDown uiTextChanged uiSendAutocompleteData uiAutocompleteNeedsUpdate dataAutocompleteMatches uiGeoPickerOffer uiGeoPickerOpen uiGeoPickerSelect uiGeoPickerInteraction uiNeedsDMDialog uiDMDialogOpenedConversation uiDMDialogHasNewConversations uiDropdownOpened uiSearchQuery uiTypeaheadInputSubmit uiTypeaheadItemSelected uiTypeaheadSubmitQuery dataTypeaheadSuggestionsResults uiNeedsTypeaheadSuggestions uiTypeaheadRenderResults uiTypeaheadInputFocus uiTypeaheadItemComplete uiTypeaheadSetPreventDefault uiTypeaheadInputBlur uiTypeaheadInputChanged uiShortcutGotoSearch uiOpenKeyboardShortcutsDialog uiOpenRetweetDialog uiDidDeleteTweetSuccess uiOpenDeleteDialog uiNeedsListMembershipContent uiAddUserToList uiOpenListMembershipDialog dataGotListMembershipContent dataFailedToGetListMembershipContent dataDidAddUserToList dataFailedToRemoveUserFromList dataDidRemoveUserFromList dataFailedToAddUserToList uiOpenUpdateListDialog dataDidCreateList dataDidUpdateList dataFailedToCreateList dataFailedToUpdateList uiNeedsDMConversationList uiNeedsDMConversation uiDMDialogSendMessage uiDMDialogDeleteMessage dataRefreshDMs dataDMConversationListResult uiDMDialogOpenedConversationList uiDMDialogOpenedNewConversation uiDMBoxReset uiShortcutShowDMs uiShortcutNewDM dataDMSuccess dataDMConversationResult uiSendDM dataDMError dataSocialProofSuccess dataSocialProofFailure dataProfilePopupFailure uiWantsProfilePopup uiCloseProfilePopup uiHideSuggestionAction uiRemoveUserFromList uiCreateList uiShortcutShowGotoUser uiNeedsFeedbackData uiOpenFeedbackDialog dataFeedback uiToggleDebugFeedback dataDebugFeedbackChanged uiResendConfirmationEmail uiResetBounceLink", function (e) {
	console.log = console.__proto__.log;
	console.log(e);
});
*/

//TODO: Use $('#doc').ajaxComplete() to ensure gnosticizer is run where missing when going between Home/Interactions &c.

function gnosticize(scope) {
	//Assume document scope if none give)n.
	if(typeof scope === 'undefined') {
		scope = document;	
	}

	scope = $('*',scope).not('.gnosticized').not('.rich-normalizer *');
	
	//Don't obscure the login form!
	if ($('.logged-out').length < 1) {
		//Mark that we have gnosticization is active
		gnosticState = 1;

		//Make jQuery sets of actionable items;
		/*
		var jqAvatars = $('.avatar', scope),
				jqUsernames = $('.username', scope),
				jqFullnames = $('.fullname', scope),
				jqAtReplyLabels = $('.twitter-atreply', scope),
				// jqElementsToHide = $('.social-context, .context, .follow-text, .verified, .stats, .tweet-stats-container, .bio, .location, .url, .social-proof, .dogear, .view-profile, .profile-nav, .discover-nav, [data-name="similarTo"]', scope),
				jqTweets = $('.tweet', scope),
				jqProfileLinks = $('.account-group, .pretty-link, .twitter-atreply', scope),
				jqDropdownItems = $('.mention-text, .block-text, .unblock-text, .report-spam-text', scope);
		*/
	
  //Strip @mention and username data used to derive reply default content by extractMentionsForReply
  //Pretty sure this is what causes the long-ish init time on the extension. Not sure if it matters
  $('.tweet', scope).each(function (i) {
    var o_screenName = $(this).data('screenName'),
      screenNameDiff = o_screenName.length - anonUsername.length,
      new_screenName,
      o_mentions = $(this).data('mentions'),
      new_mentions = [],
      mentionDiff;
    
    $(this).addClass('gnosticized');
    
    if (typeof $(this).data('datascreenName') === 'undefined') {
      $(this).data('datascreenName', o_screenName);
      
      new_screenName = (screenNameDiff > 0) ? anonUsername + Array(screenNameDiff + 1).join('.') : anonUsername;
      $(this).data('screenName', new_screenName);
      this.attributes['data-screen-name'].value = new_screenName;
    }
    
    if (o_mentions && typeof $(this).data('datamentions') === 'undefined') {
      $(this).data('datamentions', o_mentions);
      
      o_mentions = o_mentions.split(' ');
      o_mentions.forEach(function(el, n, arr) {
        if (el.length != clientUsername.length || el.search(clientNameRE) < 0) {
          mentionDiff = el.length - anonUsername.length;
          if (mentionDiff > 0) {
            new_mentions[n] = anonUsername + Array(mentionDiff+1).join(n);
          }
          else {
            new_mentions[n] = anonUsername;
          }
        }
      });
      
      $(this).data('mentions', new_mentions);
      $(this).attr('data-mentions', new_mentions);
    }
  });

		//Remove links to users' profiles
		$('.account-group, .pretty-link, .twitter-atreply .js-action-profile-name', scope)
			.each(function (i) {
				$(this).addClass('gnosticized');
				$(this).data('orighref', this.href);
				this.href = '/';
			});
	
		//Anonymize generic title tooltips for user avatar)s:
		$('.js-user-tipsy', scope)
			.each(function (i) {
				$(this).addClass('gnosticized');
				$(this).data('origtitle', this.title);
				this.title = anonHandle;

				$(this).data('orighref', this.href);
				this.href = '/';
			});

		//Anonymize twitter custom tooltips for user avatars:
		$('.avatar.js-tooltip', scope)
			.each(function (i) {
				$(this).addClass('gnosticized');
				$(this).data('origalt', this.alt);
				$(this).data('origdata-original-title', this.alt);

				this.alt = anonHandle;
				if (this.attributes['data-original-title']) {
					this.attributes['data-original-title'].value = anonHandle;
				}
				if (this.title !== "") {
					this.title = anonHandle;
				}
			});

		//Replace mentions of username in dropdown list with anonUsername:
		$('.mention-text, .block-text, .unblock-text, .report-spam-text', scope).each(function (i) {
			var inner = this.innerText;
			$(this).addClass('gnosticized');
			$(this).data('originnerText', inner);
			this.innerText = inner.substr(0, inner.indexOf('@') + 1) + anonUsername;
			if (inner.indexOf('for Spam') > -1) {
				this.innerText += ' for Spam';
			}
		});

		//Anonymize hashtags in the Trending Topics panel
		$('.js-trend-item .js-nav', scope)
			.each(function (i){
				$(this).addClass('gnosticized');
				$(this).data('originnerText', this.innerText);
				$(this).data('orighref', this.href);
				if (i === 0) {
					this.innerText = '#PROMOTED' + anonHashtag;
					this.href = '/search?q=%22PROMOTED' + anonHashtag + '%22&amp;src=tren';
				} else {
					this.innerText = '#' + anonHashtag;
					this.href = '/search?q=%22' + anonHashtag + '%22&amp;src=tren';
				}
			});
	}
}

function degnosticize(scope) {
	if (typeof scope === 'undefined') {
		scope = document;
	}
	//Note that we've turned off gnostification
	gnosticState = 0;
	// $('.gnosticized.avatar').remove();
	var gnosticHidden = $('.gnosticized[style]', scope).removeAttr('style'),
      gnosticSet = $('.gnosticized', scope),
      noGo = [];
      gnosticSet.each(function (n, el) {
        try {
          if ($.hasData(el)) {
            var elData = $(el).data();
            $.each(elData, function(name, datum) {
              if (name.indexOf('orig') === 0) {
                if ( $(el).attr(name.substr(4)) ) {
                  $(el).attr(name.substr(4), datum);
                }
              else {
                  el[name.substr(4)] = datum;
                }
              }
              else if (name.indexOf('data') === 0) {
                var origDatum = datum;
                $(el).data(name.substr(4), origDatum);
                
                if (name === 'datascreenName') {
                  $(el).attr('data-screen-name', origDatum);
                }
                else if (name === 'datamentions') {
                  $(el).attr('data-mentions', origDatum);
                }
                else if (name === 'dataoriginalTitle') {
                  $(el).attr('original-title', origDatum);
                }
              }
            });
          }
        }
        catch (e) {
          noGo.push(el);
        }
	});
  $(gnosticSet).removeClass('gnosticized');
}