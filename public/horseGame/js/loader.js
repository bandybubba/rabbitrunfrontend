////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 * 
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 * 
 */
function initPreload(){
	toggleLoader(true);
	
	checkMobileEvent();
	
	$(window).resize(function(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkMobileOrientation, 1000);
	});
	resizeGameFunc();
	
	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/background.png', id:'background'},
			{src:'assets/background_p.png', id:'backgroundP'},
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/logo_p.png', id:'logoP'},
			{src:'assets/button_start.png', id:'buttonStart'},

			{src:'assets/button_arrow_left.png', id:'buttonArrowL'},
			{src:'assets/button_arrow_right.png', id:'buttonArrowR'},
			{src:'assets/button_left.png', id:'buttonLeft'},
			{src:'assets/button_right.png', id:'buttonRight'},
			{src:'assets/button_new.png', id:'buttonNew'},
			{src:'assets/button_cancel_bet.png', id:'buttonCancelBet'},
			{src:'assets/button_place.png', id:'buttonPlace'},
			{src:'assets/button_place_disabled.png', id:'buttonPlaceDisabled'},
			{src:'assets/button_race.png', id:'buttonRace'},
			{src:'assets/button_race_disabled.png', id:'buttonRaceDisabled'},
			{src:'assets/button_remove.png', id:'buttonRemove'},
			{src:'assets/button_continue.png', id:'buttonContinue'},
			{src:'assets/item_bg_place.png', id:'itemBgPlace'},
			{src:'assets/item_bg_place_p.png', id:'itemBgPlaceP'},
			{src:'assets/item_bg_result.png', id:'itemBgResult'},
			{src:'assets/item_bg_result_p.png', id:'itemBgResultP'},
			{src:'assets/item_bg_summary.png', id:'itemBgSummary'},
			{src:'assets/item_field.png', id:'itemField'},
			{src:'assets/item_field_long.png', id:'itemFieldLong'},
			{src:'assets/item_highlight.png', id:'itemHighlight'},
			{src:'assets/item_highlight_p.png', id:'itemHighlightP'},
			{src:'assets/item_checkbox.png', id:'itemCheckbox'},
			{src:'assets/item_checkbox_tick.png', id:'itemCheckboxTick'},
			{src:'assets/item_checkbox_disabled.png', id:'itemCheckboxDisabled'},
			{src:'assets/item_race_score.png', id:'itemRaceScore'},
			{src:'assets/item_race_pin.png', id:'itemRaceScorePin'},
			{src:'assets/item_result_highlight.png', id:'itemResultScore'},
			{src:'assets/button_how.png', id:'buttonHow'},
			{src:'assets/button_close.png', id:'buttonClose'},
			{src:'assets/item_explain.png', id:'itemExplain'},
			{src:'assets/item_explain_p.png', id:'itemExplainP'},
			{src:'assets/item_race_display.png', id:'itemRaceDisplay'},
		
			{src:'assets/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/button_whatsapp.png', id:'buttonWhatsapp'},
			{src:'assets/button_main.png', id:'buttonMain'},
			{src:'assets/item_result.png', id:'itemResult'},
			{src:'assets/item_result_p.png', id:'itemResultP'},
			{src:'assets/button_confirm.png', id:'buttonConfirm'},
			{src:'assets/button_cancel.png', id:'buttonCancel'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_music_on.png', id:'buttonMusicOn'},
			{src:'assets/button_music_off.png', id:'buttonMusicOff'},
			{src:'assets/button_exit.png', id:'buttonExit'},
			{src:'assets/button_settings.png', id:'buttonSettings'}
	];

	for(var n=0; n<fieldSettings.length; n++){
		manifest.push({src:fieldSettings[n].sky, id:'bgSky'+n});
		manifest.push({src:fieldSettings[n].race, id:'bgRace'+n});
		manifest.push({src:fieldSettings[n].billboard, id:'bgBillboard'+n});
		manifest.push({src:fieldSettings[n].end, id:'bgEnd'+n});
		manifest.push({src:fieldSettings[n].endline, id:'bgEndline'+n});
		manifest.push({src:fieldSettings[n].gate, id:'bgGate'+n});
		manifest.push({src:fieldSettings[n].gateFirst, id:'bgGateFirst'+n});
		manifest.push({src:fieldSettings[n].gateOpen, id:'bgGateOpen'+n});
		manifest.push({src:fieldSettings[n].shadow, id:'bgShadow'+n});
	}

	for(var n=0; n<horseSettings.length; n++){
		manifest.push({src:horseSettings[n].icon, id:'horseIcon'+n});
		manifest.push({src:horseSettings[n].race, id:'horseRace'+n});
	}

	//memberpayment
	if(typeof memberData != 'undefined' && memberSettings.enableMembership){
		addMemberRewardAssets();
	}
	
	if ( typeof addScoreboardAssets == 'function' ) { 
		addScoreboardAssets();
	}
	
	soundOn = true;
	if($.browser.mobile || isTablet){
		if(!enableMobileSound){
			soundOn=false;
		}
	}else{
		if(!enableDesktopSound){
			soundOn=false;
		}
	}
	
	if(soundOn){
		manifest.push({src:'assets/sounds/sound_click.ogg', id:'soundButton'});
		manifest.push({src:'assets/sounds/sound_error.ogg', id:'soundError'});
		manifest.push({src:'assets/sounds/sound_start.ogg', id:'soundStart'});
		manifest.push({src:'assets/sounds/sound_end.ogg', id:'soundEnd'});
		manifest.push({src:'assets/sounds/sound_win.ogg', id:'soundWin'});
		manifest.push({src:'assets/sounds/sound_nowin.ogg', id:'soundNoWin'});
		manifest.push({src:'assets/sounds/sound_result.ogg', id:'soundResult'});
		manifest.push({src:'assets/sounds/sound_hitwin.ogg', id:'soundHitWin'});
		manifest.push({src:'assets/sounds/sound_play.ogg', id:'soundPlay'});
		manifest.push({src:'assets/sounds/sound_chips.ogg', id:'soundChips'});
		manifest.push({src:'assets/sounds/sound_bet.ogg', id:'soundBet'});
		manifest.push({src:'assets/sounds/sound_count.ogg', id:'soundCount'});
		manifest.push({src:'assets/sounds/sound_gate.ogg', id:'soundGate'});
		manifest.push({src:'assets/sounds/sound_run.ogg', id:'soundRun1'});
		manifest.push({src:'assets/sounds/sound_run2.ogg', id:'soundRun2'});
		manifest.push({src:'assets/sounds/sound_run3.ogg', id:'soundRun3'});
		manifest.push({src:'assets/sounds/sound_ambience.ogg', id:'soundAmbience'});
		manifest.push({src:'assets/sounds/sound_calltopost.ogg', id:'soundCallToPost'});
		
		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 * 
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 * 
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", evt.item.id);
}

/*!
 * 
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 * 
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 * 
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 * 
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+' percent');
}

/*!
 * 
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 * 
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 * 
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 * 
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}