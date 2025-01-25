////////////////////////////////////////////////////////////
// GAME v1.1
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */

//field settings
var fieldSettings = [
	{
		sky:'assets/bg_sky_01.png',
		race:'assets/bg_race_01.png',
		billboard:'assets/bg_billboard_01.png',
		end:'assets/bg_end_01.png',
		endline:'assets/bg_end_line_01.png',
		gate:'assets/item_race_gate.png',
		gateFirst:'assets/item_race_gate_first.png',
		gateOpen:'assets/item_gate_open.png',
		shadow:'assets/bg_shadow_01.png',
	},
	{
		sky:'assets/bg_sky_02.png',
		race:'assets/bg_race_02.png',
		billboard:'assets/bg_billboard_02.png',
		end:'assets/bg_end_01.png',
		endline:'assets/bg_end_line_01.png',
		gate:'assets/item_race_gate.png',
		gateFirst:'assets/item_race_gate_first.png',
		gateOpen:'assets/item_gate_open.png',
		shadow:'assets/bg_shadow_02.png',
	},
	{
		sky:'assets/bg_sky_03.png',
		race:'assets/bg_race_03.png',
		billboard:'assets/bg_billboard_03.png',
		end:'assets/bg_end_01.png',
		endline:'assets/bg_end_line_01.png',
		gate:'assets/item_race_gate_02.png',
		gateFirst:'assets/item_race_gate_first_02.png',
		gateOpen:'assets/item_gate_open_02.png',
		shadow:'assets/bg_shadow_03.png',
	}
];

var horseSettings = [
	{
		name:'DMoney Parcheesy',
		icon:'assets/icon_01.png',
		race:'assets/horse_01.png',
		odds:[
			2.38,
			1.25,
			1.10,
			2.38,
			2.38,
			2.38,
			2.38,
			2.38,
			2.38,
		],
		percent:80
	},
	{
		name:'KG Money Monster',
		icon:'assets/icon_02.png',
		race:'assets/horse_02.png',
		odds:[
			2.75,
			1.29,
			1.11,
			2.75,
			2.75,
			2.75,
			2.75,
			2.75,
			2.75,
		],
		percent:80
	},
	{
		name:'Red Rum',
		icon:'assets/icon_03.png',
		race:'assets/horse_03.png',
		odds:[
			4.50,
			3.00,
			2.25,
			4.50,
			4.50,
			4.50,
			4.50,
			4.50,
			4.50,
		],
		percent:80
	},
	{
		name:'Barbaro',
		icon:'assets/icon_04.png',
		race:'assets/horse_04.png',
		odds:[
			6.00,
			3.40,
			1.50,
			6.00,
			6.00,
			6.00,
			6.00,
			6.00,
			6.00,
		],
		percent:70
	},
	{
		name:'Smarty Jones',
		icon:'assets/icon_05.png',
		race:'assets/horse_05.png',
		odds:[
			7.50,
			3.76,
			1.55,
			7.50,
			7.50,
			7.50,
			7.50,
			7.50,
			7.50,
		],
		percent:70
	},
	{
		name:'Lost in the Fog',
		icon:'assets/icon_06.png',
		race:'assets/horse_06.png',
		odds:[
			8.50,
			6.00,
			3.25,
			8.50,
			8.50,
			8.50,
			8.50,
			8.50,
			8.50,
		],
		percent:50
	},
	{
		name:'War Admiral',
		icon:'assets/icon_07.png',
		race:'assets/horse_07.png',
		odds:[
			9.50,
			7.50,
			3.12,
			9.50,
			9.50,
			9.50,
			9.50,
			9.50,
			9.50,
		],
		percent:50
	},
	{
		name:'Winx',
		icon:'assets/icon_08.png',
		race:'assets/horse_08.png',
		odds:[
			9.75,
			5.20,
			2.48,
			9.75,
			9.75,
			9.75,
			9.75,
			9.75,
			9.75,
		],
		percent:30
	},
	{
		name:'Sunday Silence',
		icon:'assets/icon_09.png',
		race:'assets/horse_09.png',
		odds:[
			11.65,
			7.89,
			3.44,
			11.65,
			11.65,
			11.65,
			11.65,
			11.65,
			11.65,
		],
		percent:30
	},
	{
		name:'Holy Bull',
		icon:'assets/icon_10.png',
		race:'assets/horse_10.png',
		odds:[
			17.25,
			8.75,
			6.30,
			17.25,
			17.25,
			17.25,
			17.25,
			17.25,
			17.25,
		],
		percent:30
	}
];

var betSettings = [
	{
		name:"WIN",
		nameShort:'WN',
		type:'win',
		bets:[1,2,5,10,50,100],
		payout:-1,	
	},
	{
		name:"PLACE",
		nameShort:'PL',
		type:'place',
		bets:[1,2,5,10,50,100],
		payout:-1,	
	},
	{
		name:"SHOW",
		nameShort:'SH',
		type:'show',
		bets:[1,2,5,10,50,100],
		payout:-1,
	},
	{
		name:"EXACTA",
		nameShort:'EX',
		type:'exacta',
		bets:[1,2,5,10],
		payout:1000,
	},
	{
		name:"EXACTA BOX",
		nameShort:'EX BOX',
		type:'exactabox',
		bets:[1,2,5,10],
		payout:500,
	},
	{
		name:"TRIFECTA",
		nameShort:'TR',
		type:'trifecta',
		bets:[1,2,5,10],
		payout:3000,
	},
	{
		name:"TRIFECTA BOX",
		nameShort:'TR BOX',
		type:'trifectabox',
		bets:[1,2,5,10],
		payout:1000,	
	},
	{
		name:"SUPERFECTA",
		nameShort:'SU',
		type:'superfecta',
		bets:[1,2,5,10],
		payout:5000,
	},
	{
		name:"SUPERFECTA BOX",
		nameShort:'SU BOX',
		type:'superfectabox',
		bets:[1,2,5,10],
		payout:3000,
	}
];


//game settings
var gameSettings = {
	credit:100, //game credit
	maxBets:8, //max bets
	winSpeed:1, //reveal result speed
	raceSpeed:500, //race speed
	enablePercentage:true //option to have result base on percentage
};

//game text display
var textDisplay = {
	currency:'$',
	betType:'BET TYPE',
	betAmount:'BET AMOUNT',
	credits:'CREDITS',
	totalBet:'TOTAL BET',
	tablePlace:['POST','ODDS','HORSE NAME'],
	tableSummary:['','BET TYPE','HORSES','TOTAL BET'],
	tableRaceSummary:['','BET TYPE','HORSES','TOTAL BET','WIN'],
	tableRaceResult:['POS','HORSE NO & NAME'],
	position:['1ST','2ND','3RD','4TH','5TH','6TH','7TH','8TH','9TH','10TH'],
	or:', ',
	race:'RACE',
	field:'FIELD',
	summaryTitle:'YOUR BETS SUMMARY',
	raceSummaryTitle:'YOUR BETS RESULT',
	raceResultTitle:'RACE RESULT',
	totalWin:'TOTAL WIN',
	exitTitle:'EXIT GAME',
	exitMessage:'ARE YOU SURE YOU\nWANT TO QUIT GAME?',
	share:'SHARE YOUR SCORE:',
	resultTitle:'GAME OVER',
	resultDescTitle:'YOU WIN TOTAL OF',
	resultDesc:'$[NUMBER]',
};

//Social share, [SCORE] will replace with game score
var shareEnable = true; //toggle share
var shareTitle = 'Highscore on Horse Racing is $[SCORE]';//social share score title
var shareMessage = '$[SCORE] is mine new highscore on Horse Racing game! Try it now!'; //social share score message

/*!
 * GAME SETTING CUSTOMIZATION END
 *
 */
var playerData = {win:0, bets:[]};
var gameData = {paused:true, fieldIndex:0, betTypeIndex:0, betAmountIndex:0, revealResults:[]};
var tweenData = {win:0, credit:0, bet:0};
var blinkData = {alpha:1};

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	$(window).focus(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(false);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(false);
			}
		}
	});
	
	$(window).blur(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(true);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(true);
			}
		}
	});
	
	if($.browser.mobile || isTablet){
		if(gameSettings.easeFollowMove){
			setupStageEvents();
		}
	}else{
		
	}

	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('game');
	});
	
	itemExit.addEventListener("click", function(evt) {
	});
	
	buttonMain.cursor = "pointer";
	buttonMain.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('main');
	});
	
	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function(evt) {
		share('facebook');
	});
	
	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function(evt) {
		share('twitter');
	});
	buttonWhatsapp.cursor = "pointer";
	buttonWhatsapp.addEventListener("click", function(evt) {
		share('whatsapp');
	});
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleSoundMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleSoundMute(false);
	});

	if (typeof buttonMusicOff != "undefined") {
		buttonMusicOff.cursor = "pointer";
		buttonMusicOff.addEventListener("click", function(evt) {
			toggleMusicMute(true);
		});
	}
	
	if (typeof buttonMusicOn != "undefined") {
		buttonMusicOn.cursor = "pointer";
		buttonMusicOn.addEventListener("click", function(evt) {
			toggleMusicMute(false);
		});
	}
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		togglePop(true);
		toggleOption();
	});
	
	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function(evt) {
		toggleOption();
	});
	
	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function(evt) {
		playSound('soundButton');
		togglePop(false);
		
		stopGame();
		goPage('main');
	});
	
	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function(evt) {
		playSound('soundButton');
		togglePop(false);
	});

	buttonBetTypeL.cursor = "pointer";
	buttonBetTypeL.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleBetType(false);
	});

	buttonBetTypeR.cursor = "pointer";
	buttonBetTypeR.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleBetType(true);
	});

	buttonBetAmountL.cursor = "pointer";
	buttonBetAmountL.addEventListener("click", function(evt) {
		playSound('soundChips');
		toggleBetAmount(false);
	});

	buttonBetAmountR.cursor = "pointer";
	buttonBetAmountR.addEventListener("click", function(evt) {
		playSound('soundChips');
		toggleBetAmount(true);
	});

	buttonPlace.cursor = "pointer";
	buttonPlace.addEventListener("click", function(evt) {
		tryPlaceBet(true);
	});

	buttonCancelBet.cursor = "pointer";
	buttonCancelBet.addEventListener("click", function(evt) {
		playSound('soundButton');
		goGamePage('summary');
	});

	buttonNew.cursor = "pointer";
	buttonNew.addEventListener("click", function(evt) {
		playSound('soundButton');
		goGamePage('bet');
	});

	buttonRace.cursor = "pointer";
	buttonRace.addEventListener("click", function(evt) {
		playSound('soundButton');
		tryStartRace();
	});

	buttonPlaceAgain.cursor = "pointer";
	buttonPlaceAgain.addEventListener("click", function(evt) {
		playSound('soundButton');
		playSound('soundStart');
		playerData.bets = [];
		goGamePage('bet');
	});

	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('result');
	});

	buttonBetLeft.cursor = "pointer";
	buttonBetLeft.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleBetTable(false);
	});

	buttonBetRight.cursor = "pointer";
	buttonBetRight.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleBetTable(true);
	});

	buttonSummaryLeft.cursor = "pointer";
	buttonSummaryLeft.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleSummaryTable(false);
	});

	buttonSummaryRight.cursor = "pointer";
	buttonSummaryRight.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleSummaryTable(true);
	});

	buttonRaceSummaryLeft.cursor = "pointer";
	buttonRaceSummaryLeft.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleRaceSummaryTable(false);
	});

	buttonRaceSummaryRight.cursor = "pointer";
	buttonRaceSummaryRight.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleRaceSummaryTable(true);
	});

	buttonRaceLeft.cursor = "pointer";
	buttonRaceLeft.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleRaceTable(false);
	});

	buttonRaceRight.cursor = "pointer";
	buttonRaceRight.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleRaceTable(true);
	});

	buttonHow.cursor = "pointer";
	buttonHow.addEventListener("click", function(evt) {
		playSound('soundButton');
		goGamePage('how');
	});

	buttonClose.cursor = "pointer";
	buttonClose.addEventListener("click", function(evt) {
		playSound('soundButton');
		goGamePage('bet');
	});

	window.addEventListener('blur', function() {
		TweenMax.ticker.useRAF(false);
	}, false);

	window.addEventListener('focus', function() {
		TweenMax.ticker.useRAF(true);
	}, false);

	if(gameSettings.enablePercentage){
		createPercentage();
	}
}



/*!
 * 
 * TOGGLE POP - This is the function that runs to toggle popup overlay
 * 
 */
function togglePop(con){
	confirmContainer.visible = con;
}


/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	mainContainer.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	
	var targetContainer = null;
	switch(page){
		case 'main':
			targetContainer = mainContainer;
		break;
		
		case 'game':
			targetContainer = gameContainer;
			startGame();
		break;
		
		case 'result':
			targetContainer = resultContainer;
			stopGame();
			togglePop(false);
			playSound('soundResult');

			tweenData.win = 0;
			TweenMax.to(tweenData, .5, {win:playerData.totalWin, overwrite:true, onUpdate:function(){
				resultDescTxt.text = textDisplay.resultDesc.replace('[NUMBER]', addCommas(Math.round(tweenData.win)));
			}});
			
			saveGame(playerData.totalWin);
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}

/*!
 * 
 * START GAME - This is the function that runs to start game
 * 
 */
function startGame(){
	gameData.paused = false;
	gameData.raceCount = 1;
	
	playerData.totalWin = 0;
	playerData.bets = [];
	playerData.credit = gameSettings.credit;

	gameData.fieldIndex = Math.floor(Math.random() * fieldSettings.length);

	gameBetContainer.visible = true;
	gameRaceContainer.visible = false;
	scoreContainer.visible = false;
	raceDisplayContainer.visible = false;
	creditRedTxt.alpha = 0;

	//memberpayment
	if(typeof memberData != 'undefined' && memberSettings.enableMembership){
		playerData.credit = memberData.point;
		if(!checkMemberGameType()){
			goMemberPage('user');
		}
	}

	/*gameData.revealResults = [1,2,0,4,3,5,6,7,8,9];
	playerData.bets.push({type:0, horse:[1], totalBet:60});
	playerData.bets.push({type:1, horse:[2], totalBet:1});
	playerData.bets.push({type:8, horse:[1,2,0,4], totalBet:5});
	playerData.bets.push({type:1, horse:[4], totalBet:10});
	goGamePage('summary');*/
	gameData.revealResults = [1,2,0,4,3,5,6,7,8,9];

	playSound('soundStart');
	goGamePage('bet');
}

function resizeGameLayout(){
	betTypeContainer.textL.visible = false;
	betTypeContainer.textP.visible = false;
	betAmountContainer.textL.visible = false;
	betAmountContainer.textP.visible = false;
	creditContainer.textL.visible = false;
	creditContainer.textP.visible = false;
	betTotalContainer.textL.visible = false;
	betTotalContainer.textP.visible = false;

	if(viewport.isLandscape){
		betContainer.visible = true;
		betContainerP.visible = false;
		betSummaryContainer.visible = true;
		betSummaryContainerP.visible = false;
		raceSummaryContainer.visible = true;
		raceSummaryContainerP.visible = false;
		raceResultContainer.visible = true;
		raceResultContainerP.visible = false;
		howContainer.visible = true;
		howContainerP.visible = false;

		betAllContainer.x = canvasW/2;
		betAllContainer.y = canvasH/2;

		betTypeContainer.textL.visible = true;
		betTypeContainer.x = canvasW/100 * 38;
		betTypeContainer.y = canvasH/100 * 17;

		betAmountContainer.textL.visible = true;
		betAmountContainer.x = canvasW/100 * 74;
		betAmountContainer.y = canvasH/100 * 17;

		buttonHow.x = canvasW/100 * 52;
		buttonHow.y = canvasH/100 * 17;

		buttonClose.x = canvasW/2;
		buttonClose.y = canvasH/100 * 83;

		creditContainer.textL.visible = true;
		creditContainer.x = canvasW/100 * 34;
		creditContainer.y = canvasH/100 * 83;

		betTotalContainer.textL.visible = true;
		betTotalContainer.x = canvasW/100 * 58;
		betTotalContainer.y = canvasH/100 * 83;

		betPlaceContainer.x = canvasW/100 * 72;
		betPlaceContainer.y = canvasH/100 * 83;

		betSummaryAllContainer.x = canvasW/2;
		betSummaryAllContainer.y = canvasH/2;

		buttonRace.x = canvasW/100 * 72;
		buttonRace.y = canvasH/100 * 83;
		buttonRaceDisabled.x = canvasW/100 * 72;
		buttonRaceDisabled.y = canvasH/100 * 83;

		buttonNew.x = canvasW/100 * 58;
		buttonNew.y = canvasH/100 * 83;

		raceResultAllContainer.x = canvasW/100 * 25;
		raceResultAllContainer.y = canvasH/2;

		raceSummaryAllContainer.x = canvasW/100 * 64.5;
		raceSummaryAllContainer.y = canvasH/2;

		raceButtonsContainer.x = canvasW/2;
		raceButtonsContainer.y = canvasH/100 * 83;

		howAllContainer.x = canvasW/2;
		howAllContainer.y = canvasH/2;

		scoreContainer.x = canvasW/2;
		scoreContainer.y = canvasH/100 * 82;

		raceDisplayContainer.x = canvasW/2;
		raceDisplayContainer.y = canvasH/100 * 50;

		gameRaceContainer.x = 0;
		gameRaceContainer.y = -200;
	}else{
		betContainer.visible = false;
		betContainerP.visible = true;
		betSummaryContainer.visible = false;
		betSummaryContainerP.visible = true;
		raceSummaryContainer.visible = false;
		raceSummaryContainerP.visible = true;
		raceResultContainer.visible = false;
		raceResultContainerP.visible = true;
		howContainer.visible = false;
		howContainerP.visible = true;

		betAllContainer.x = canvasW/2;
		betAllContainer.y = canvasH/2;

		betTypeContainer.textP.visible = true;
		betTypeContainer.x = canvasW/100 * 34;
		betTypeContainer.y = canvasH/100 * 25;

		betAmountContainer.textP.visible = true;
		betAmountContainer.x = canvasW/100 * 74;
		betAmountContainer.y = canvasH/100 * 25;

		buttonHow.x = canvasW/100 * 57;
		buttonHow.y = canvasH/100 * 25;

		buttonClose.x = canvasW/2;
		buttonClose.y = canvasH/100 * 78;

		creditContainer.textP.visible = true;
		creditContainer.x = canvasW/100 * 26;
		creditContainer.y = canvasH/100 * 78;

		betTotalContainer.textP.visible = true;
		betTotalContainer.x = canvasW/100 * 50;
		betTotalContainer.y = canvasH/100 * 78;

		betPlaceContainer.x = canvasW/100 * 74;
		betPlaceContainer.y = canvasH/100 * 78;

		betSummaryAllContainer.x = canvasW/2;
		betSummaryAllContainer.y = canvasH/2;

		buttonRace.x = canvasW/100 * 74;
		buttonRace.y = canvasH/100 * 78;
		buttonRaceDisabled.x = canvasW/100 * 74;
		buttonRaceDisabled.y = canvasH/100 * 78;

		buttonNew.x = canvasW/100 * 50;
		buttonNew.y = canvasH/100 * 78;

		raceResultAllContainer.x = canvasW/2;
		raceResultAllContainer.y = canvasH/100 * 25;

		raceSummaryAllContainer.x = canvasW/2;
		raceSummaryAllContainer.y = canvasH/100 * 60;

		raceButtonsContainer.x = canvasW/2;
		raceButtonsContainer.y = canvasH/100 * 86;

		howAllContainer.x = canvasW/2;
		howAllContainer.y = canvasH/2;

		scoreContainer.x = canvasW/2;
		scoreContainer.y = canvasH/100 * 82;

		raceDisplayContainer.x = canvasW/2;
		raceDisplayContainer.y = canvasH/100 * 50;

		gameRaceContainer.x = -200;
		gameRaceContainer.y = 0;
	}
}

/*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(){
	gameData.paused = true;
	TweenMax.killAll(false, true, false);
}

function saveGame(score){
	if ( typeof toggleScoreboardSave == 'function' ) { 
		$.scoreData.score = score;
		if(typeof type != 'undefined'){
			$.scoreData.type = type;	
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

/*!
 * 
 * GO GAME PAGE - This is the function that runs to go game page
 * 
 */
function goGamePage(type){
	betAllContainer.visible = false;
	betTypeContainer.visible = false;
	betAmountContainer.visible = false;
	creditContainer.visible = false;
	betTotalContainer.visible = false;
	betPlaceContainer.visible = false;

	betSummaryAllContainer.visible = false;
	buttonNew.visible = false;
	buttonRace.visible = false;
	buttonRaceDisabled.visible = false;

	raceResultAllContainer.visible = false;
	raceSummaryAllContainer.visible = false;
	raceButtonsContainer.visible = false;

	howAllContainer.visible = false;
	buttonHow.visible = false;
	buttonClose.visible = false;

	if(type == 'bet'){
		betAllContainer.visible = true;
		betTypeContainer.visible = true;
		betAmountContainer.visible = true;
		creditContainer.visible = true;
		betTotalContainer.visible = true;
		betPlaceContainer.visible = true;

		buttonHow.visible = true;
		buttonBetLeft.visible = false;
		buttonBetRight.visible = true;
		betContentContainerP.x = 0;
		
		updateBetOptions();
		updateBetTable();
		updateCredit();
	}else if(type == 'how'){
		howAllContainer.visible = true;
		buttonClose.visible = true;
	}else if(type == 'summary'){
		betSummaryAllContainer.visible = true;
		creditContainer.visible = true;
		buttonNew.visible = true;
		buttonRace.visible = true;
		buttonRaceDisabled.visible = true;

		buttonSummaryLeft.visible = false;
		buttonSummaryRight.visible = false;
		betSummaryContentContainerP.x = 0;

		checkCanBet();
		updateSummaryTable();
	}else if(type == 'result'){
		raceResultAllContainer.visible = true;
		raceSummaryAllContainer.visible = true;
		raceButtonsContainer.visible = true;

		buttonRaceLeft.visible = false;
		buttonRaceRight.visible = true;
		raceResultContentContainerP.x = 0;

		buttonRaceSummaryLeft.visible = false;
		buttonRaceSummaryRight.visible = false;
		raceSummaryContentContainerP.x = 0;

		updateRaceTable();
		updateRaceSummaryTable();
		gameData.revealResults = [];

		if(playerData.credit > 0){
			buttonPlaceAgain.visible = true;
			buttonContinue.visible = true;
			buttonPlaceAgain.x = -90;
			buttonContinue.x = 90;
		}else{
			buttonPlaceAgain.visible = false;
			buttonContinue.visible = true;
			buttonContinue.x = 0;
		}

		//memberpayment
		if(typeof memberData != 'undefined' && memberSettings.enableMembership){
			var returnPoint = {chance:0, point:playerData.credit, score:0};
			matchUserResult(undefined, returnPoint);
		}
	}
}

function checkCanBet(){
	buttonNew.visible = true;
	var totalAmount = getCurrentBetAmount();
	if(playerData.bets.length >= gameSettings.maxBets || (playerData.credit - totalAmount) == 0){
		buttonNew.visible = false;
	}

	buttonRace.visible = false;
	if(playerData.bets.length > 0){
		buttonRace.visible = true;
	}
}

 /*!
 * 
 * BET OPTIONS - This is the function that runs to update bet options
 * 
 */
function toggleBetType(con){
	if(con){
		gameData.betTypeIndex++;
		gameData.betTypeIndex = gameData.betTypeIndex > betSettings.length-1 ? 0 :gameData.betTypeIndex;
	}else{
		gameData.betTypeIndex--;
		gameData.betTypeIndex = gameData.betTypeIndex < 0 ? betSettings.length-1 :gameData.betTypeIndex;
	}

	gameData.betAmountIndex = 0;
	updateBetOptions();
	updateBetTable();
}

function toggleBetAmount(con){
	if(con){
		gameData.betAmountIndex++;
		gameData.betAmountIndex = gameData.betAmountIndex > betSettings[gameData.betTypeIndex].bets.length-1 ? 0 :gameData.betAmountIndex;
	}else{
		gameData.betAmountIndex--;
		gameData.betAmountIndex = gameData.betAmountIndex < 0 ? betSettings[gameData.betTypeIndex].bets.length-1 :gameData.betAmountIndex;
	}

	updateBetOptions();
	updateTotalBet();
}

function updateBetOptions(){
	betTypeTxt.text = betSettings[gameData.betTypeIndex].name;
	betAmountTxt.text = textDisplay.currency + addCommas(betSettings[gameData.betTypeIndex].bets[gameData.betAmountIndex]);

	buttonCancelBet.visible = false;
	if(playerData.bets.length > 0){
		buttonCancelBet.visible = true;
	}
}

/*!
 * 
 * BET TABLE - This is the function that runs to update bet table
 * 
 */
function updateBetTable(){
	betContentContainer.removeAllChildren();

	var posData = {x:0, y:0, tY:-180, sX:-305, sY:-138, spaceY:35.5};
	var betType = betSettings[gameData.betTypeIndex].type;
	var columnPos = [0, 60, 110, 160, 210, 300, 400, 530];
	var columnDisplay = [];
	for(var n=0; n<columnPos.length; n++){
		if(n == 0){
			columnDisplay.push({type:'POS', name:textDisplay.tablePlace[0], x:columnPos[n], align:'center'});
		}else if(n == 5){
			columnDisplay.push({type:'HORSE', name:'', x:columnPos[n], align:'center'});
		}else if(n == 6){
			columnDisplay.push({type:'ODDS', name:textDisplay.tablePlace[1], x:columnPos[n], align:'center'});
		}else if(n == 7){
			columnDisplay.push({type:'NAME', name:textDisplay.tablePlace[2], x:columnPos[n], align:'center'});
		}else{
			if(betType == 'win'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0], x:columnPos[1], align:'center'});
			}else if(betType == 'place'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1], x:columnPos[1], align:'left'});
			}else if(betType == 'show'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1]+textDisplay.or+textDisplay.position[2], x:columnPos[1], align:'left'});
			}else if(betType == 'exacta'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0], x:columnPos[1], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[1], x:columnPos[2], align:'center'});
			}else if(betType == 'exactabox'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1], x:columnPos[1], align:'left'});
			}else if(betType == 'trifecta'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0], x:columnPos[1], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[1], x:columnPos[2], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[2], x:columnPos[3], align:'center'});
			}else if(betType == 'trifectabox'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1]+textDisplay.or+textDisplay.position[2], x:columnPos[1], align:'left'});
			}else if(betType == 'superfecta'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0], x:columnPos[1], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[1], x:columnPos[2], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[2], x:columnPos[3], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[3], x:columnPos[4], align:'center'});
			}else if(betType == 'superfectabox'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1]+textDisplay.or+textDisplay.position[2]+textDisplay.or+textDisplay.position[3], x:columnPos[1], align:'left'});
			}
			n = 4;
		}
	}

	posData.x = posData.sX;
	posData.y = posData.tY;
	for(var n=0; n<columnDisplay.length; n++){
		var newDisplay = new createjs.Text();
		newDisplay.font = "20px montheavy_demo";
		newDisplay.color = '#65EF96';
		newDisplay.textAlign = columnDisplay[n].align;
		newDisplay.textBaseline='alphabetic';
		newDisplay.text = columnDisplay[n].name;
		newDisplay.x = posData.x + columnDisplay[n].x;
		newDisplay.y = posData.y + 5;
		if(columnDisplay[n].align == 'left'){
			newDisplay.x -= 16;
		}
		betContentContainer.addChild(newDisplay);
	}

	posData.x = posData.sX;
	posData.y = posData.sY;
	for(var n=0; n<horseSettings.length; n++){
		for(var c=0; c<columnDisplay.length; c++){
			if(columnDisplay[c].type == 'POS'){
				var newIcon = new createjs.Bitmap(loader.getResult('horseIcon'+n));
				centerReg(newIcon);
				newIcon.x = posData.x;
				newIcon.y = posData.y;

				betContentContainer.addChild(newIcon);
			}else if(columnDisplay[c].type == 'ODDS'){
				var newOdds = new createjs.Text();
				newOdds.font = "20px montheavy_demo";
				newOdds.color = '#fff';
				newOdds.textAlign = columnDisplay[c].align;
				newOdds.textBaseline='alphabetic';
				newOdds.text = horseSettings[n].odds[gameData.betTypeIndex];
				newOdds.x = posData.x + columnDisplay[c].x;
				newOdds.y = posData.y + 5;

				betContentContainer.addChild(newOdds);
			}else if(columnDisplay[c].type == 'NAME'){
				var newName = new createjs.Text();
				newName.font = "20px montheavy_demo";
				newName.color = '#fff';
				newName.textAlign = columnDisplay[c].align;
				newName.textBaseline='alphabetic';
				newName.text = horseSettings[n].name;
				newName.x = posData.x + columnDisplay[c].x;
				newName.y = posData.y + 5;

				betContentContainer.addChild(newName);
			}else if(columnDisplay[c].type == 'HORSE'){
				$.horse[n] = createHorse(n);
				$.horse[n].scaleX = $.horse[n].scaleY = .5;
				$.horse[n].x = posData.x + columnDisplay[c].x;
				$.horse[n].y = posData.y + 20;
				betContentContainer.addChild($.horse[n]);
			}else{
				$.checkbox[n+'_'+c] = new createjs.Container();
				$.checkbox[n+'_'+c].horseIndex = n;
				$.checkbox[n+'_'+c].columnIndex = c;

				var newCheckbox = new createjs.Bitmap(loader.getResult('itemCheckbox'));
				centerReg(newCheckbox);
				var newCheckboxTick = new createjs.Bitmap(loader.getResult('itemCheckboxTick'));
				centerReg(newCheckboxTick);
				var newCheckboxDisabled = new createjs.Bitmap(loader.getResult('itemCheckboxDisabled'));
				centerReg(newCheckboxDisabled);
				newCheckboxTick.visible = false;
				newCheckboxDisabled.visible = false;
				$.checkbox[n+'_'+c].x = posData.x + columnDisplay[c].x;
				$.checkbox[n+'_'+c].y = posData.y;

				$.checkbox[n+'_'+c].checkbox = newCheckbox;
				$.checkbox[n+'_'+c].checkboxTick = newCheckboxTick;
				$.checkbox[n+'_'+c].checkboxDisabled = newCheckboxDisabled;
				$.checkbox[n+'_'+c].addChild(newCheckboxDisabled, newCheckbox, newCheckboxTick);
				betContentContainer.addChild($.checkbox[n+'_'+c]);

				$.checkbox[n+'_'+c].cursor = "pointer";
				$.checkbox[n+'_'+c].addEventListener("click", function(evt) {
					playSound('soundButton');
					toggleCheckbox(evt.currentTarget.columnIndex, evt.currentTarget.horseIndex);
				});
			}
		}

		posData.y += posData.spaceY;
	}

	//portrait
	betContentContainerP.removeAllChildren();

	var posData = {x:0, y:0, tY:-180, sX:-210, sY:-138, spaceY:35.5};
	var betType = betSettings[gameData.betTypeIndex].type;
	var columnPos = [0, 60, 110, 160, 210, 300, 400, 530];
	var columnDisplay = [];
	for(var n=0; n<columnPos.length; n++){
		if(n == 0){
			columnDisplay.push({type:'POS', name:textDisplay.tablePlace[0], x:columnPos[n], align:'center'});
		}else if(n == 5){
			columnDisplay.push({type:'HORSE', name:'', x:columnPos[n], align:'center'});
		}else if(n == 6){
			columnDisplay.push({type:'ODDS', name:textDisplay.tablePlace[1], x:columnPos[n], align:'center'});
		}else if(n == 7){
			columnDisplay.push({type:'NAME', name:textDisplay.tablePlace[2], x:columnPos[n], align:'center'});
		}else{
			if(betType == 'win'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0], x:columnPos[1], align:'center'});
			}else if(betType == 'place'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1], x:columnPos[1], align:'left'});
			}else if(betType == 'show'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1]+textDisplay.or+textDisplay.position[2], x:columnPos[1], align:'left'});
			}else if(betType == 'exacta'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0], x:columnPos[1], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[1], x:columnPos[2], align:'center'});
			}else if(betType == 'exactabox'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1], x:columnPos[1], align:'left'});
			}else if(betType == 'trifecta'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0], x:columnPos[1], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[1], x:columnPos[2], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[2], x:columnPos[3], align:'center'});
			}else if(betType == 'trifectabox'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1]+textDisplay.or+textDisplay.position[2], x:columnPos[1], align:'left'});
			}else if(betType == 'superfecta'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0], x:columnPos[1], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[1], x:columnPos[2], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[2], x:columnPos[3], align:'center'});
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[3], x:columnPos[4], align:'center'});
			}else if(betType == 'superfectabox'){
				columnDisplay.push({type:'CHECKBOX', name:textDisplay.position[0]+textDisplay.or+textDisplay.position[1]+textDisplay.or+textDisplay.position[2]+textDisplay.or+textDisplay.position[3], x:columnPos[1], align:'left'});
			}
			n = 4;
		}
	}

	posData.x = posData.sX;
	posData.y = posData.tY;
	for(var n=0; n<columnDisplay.length; n++){
		var newDisplay = new createjs.Text();
		newDisplay.font = "20px montheavy_demo";
		newDisplay.color = '#65EF96';
		newDisplay.textAlign = columnDisplay[n].align;
		newDisplay.textBaseline='alphabetic';
		newDisplay.text = columnDisplay[n].name;
		newDisplay.x = posData.x + columnDisplay[n].x;
		newDisplay.y = posData.y + 5;
		if(columnDisplay[n].align == 'left'){
			newDisplay.x -= 16;
		}
		betContentContainerP.addChild(newDisplay);
	}

	posData.x = posData.sX;
	posData.y = posData.sY;
	for(var n=0; n<horseSettings.length; n++){
		for(var c=0; c<columnDisplay.length; c++){
			if(columnDisplay[c].type == 'POS'){
				var newIcon = new createjs.Bitmap(loader.getResult('horseIcon'+n));
				centerReg(newIcon);
				newIcon.x = posData.x;
				newIcon.y = posData.y;

				betContentContainerP.addChild(newIcon);
			}else if(columnDisplay[c].type == 'ODDS'){
				var newOdds = new createjs.Text();
				newOdds.font = "20px montheavy_demo";
				newOdds.color = '#fff';
				newOdds.textAlign = columnDisplay[c].align;
				newOdds.textBaseline='alphabetic';
				newOdds.text = horseSettings[n].odds[gameData.betTypeIndex];
				newOdds.x = posData.x + columnDisplay[c].x;
				newOdds.y = posData.y + 5;

				betContentContainerP.addChild(newOdds);
			}else if(columnDisplay[c].type == 'NAME'){
				var newName = new createjs.Text();
				newName.font = "20px montheavy_demo";
				newName.color = '#fff';
				newName.textAlign = columnDisplay[c].align;
				newName.textBaseline='alphabetic';
				newName.text = horseSettings[n].name;
				newName.x = posData.x + columnDisplay[c].x;
				newName.y = posData.y + 5;

				betContentContainerP.addChild(newName);
			}else if(columnDisplay[c].type == 'HORSE'){
				$.horse[n+'_p'] = createHorse(n);
				$.horse[n+'_p'].scaleX = $.horse[n+'_p'].scaleY = .5;
				$.horse[n+'_p'].x = posData.x + columnDisplay[c].x;
				$.horse[n+'_p'].y = posData.y + 20;
				betContentContainerP.addChild($.horse[n+'_p']);
			}else{
				$.checkbox[n+'_'+c+'_p'] = new createjs.Container();
				$.checkbox[n+'_'+c+'_p'].horseIndex = n;
				$.checkbox[n+'_'+c+'_p'].columnIndex = c;

				var newCheckbox = new createjs.Bitmap(loader.getResult('itemCheckbox'));
				centerReg(newCheckbox);
				var newCheckboxTick = new createjs.Bitmap(loader.getResult('itemCheckboxTick'));
				centerReg(newCheckboxTick);
				var newCheckboxDisabled = new createjs.Bitmap(loader.getResult('itemCheckboxDisabled'));
				centerReg(newCheckboxDisabled);
				newCheckboxTick.visible = false;
				newCheckboxDisabled.visible = false;
				$.checkbox[n+'_'+c+'_p'].x = posData.x + columnDisplay[c].x;
				$.checkbox[n+'_'+c+'_p'].y = posData.y;

				$.checkbox[n+'_'+c+'_p'].checkbox = newCheckbox;
				$.checkbox[n+'_'+c+'_p'].checkboxTick = newCheckboxTick;
				$.checkbox[n+'_'+c+'_p'].checkboxDisabled = newCheckboxDisabled;
				$.checkbox[n+'_'+c+'_p'].addChild(newCheckboxDisabled, newCheckbox, newCheckboxTick);
				betContentContainerP.addChild($.checkbox[n+'_'+c+'_p']);

				$.checkbox[n+'_'+c+'_p'].cursor = "pointer";
				$.checkbox[n+'_'+c+'_p'].addEventListener("click", function(evt) {
					playSound('soundButton');
					toggleCheckbox(evt.currentTarget.columnIndex, evt.currentTarget.horseIndex);
				});
			}
		}

		posData.y += posData.spaceY;
	}

	buttonPlace.visible = false;
	updateTotalBet();
}

/*!
 * 
 * TOGGLE BET TABLE - This is the function that runs to toggle bet table
 * 
 */
function toggleBetTable(con){
	var newX = 0;
	if(con){
		buttonBetLeft.visible = true;
		buttonBetRight.visible = false;
		newX = -170;
	}else{
		buttonBetLeft.visible = false;
		buttonBetRight.visible = true;
	}

	TweenMax.to(betContentContainerP, .2, {x:newX, overwrite:true});
}

function toggleSummaryTable(con){
	var newX = 0;
	if(con){
		buttonSummaryLeft.visible = true;
		buttonSummaryRight.visible = false;
		newX = -105;
	}else{
		buttonSummaryLeft.visible = false;
		buttonSummaryRight.visible = true;
	}

	TweenMax.to(betSummaryContentContainerP, .2, {x:newX, overwrite:true});
}

function toggleRaceSummaryTable(con){
	var newX = 0;
	if(con){
		buttonRaceSummaryLeft.visible = true;
		buttonRaceSummaryRight.visible = false;
		newX = -75;
	}else{
		buttonRaceSummaryLeft.visible = false;
		buttonRaceSummaryRight.visible = true;
	}

	TweenMax.to(raceSummaryContentContainerP, .2, {x:newX, overwrite:true});
}

function toggleRaceTable(con){
	var newX = 0;
	if(con){
		buttonRaceLeft.visible = true;
		buttonRaceRight.visible = false;
		newX = -470;
	}else{
		buttonRaceLeft.visible = false;
		buttonRaceRight.visible = true;
	}

	TweenMax.to(raceResultContentContainerP, .2, {x:newX, overwrite:true});
}

 /*!
 * 
 * TOGGLE BET CHECKBOX - This is the function that runs to update bet checkbox
 * 
 */
function toggleCheckbox(column, horse){
	if($.checkbox[horse+'_'+column].checkboxDisabled.visible){
		return;
	}

	var betType = betSettings[gameData.betTypeIndex].type;
	var totalCheckboxs = 1;
	var totalSelect = 1;
	var totalSelected = 0;
	if(betType == 'exacta'){
		totalCheckboxs = 2;
	}else if(betType == 'exactabox'){
		totalSelect = 2;
	}else if(betType == 'trifecta'){
		totalCheckboxs = 3;
	}else if(betType == 'trifectabox'){
		totalSelect = 3;
	}else if(betType == 'superfecta'){
		totalCheckboxs = 4;
	}else if(betType == 'superfectabox'){
		totalSelect = 4;
	}

	if($.checkbox[horse+'_'+column].checkboxTick.visible){
		$.checkbox[horse+'_'+column].checkboxTick.visible = false;
		$.checkbox[horse+'_'+column].checkbox.visible = true;
		$.checkbox[horse+'_'+column].checkboxDisabled.visible = false;
		$.checkbox[horse+'_'+column+'_p'].checkboxTick.visible = false;
		$.checkbox[horse+'_'+column+'_p'].checkbox.visible = true;
		$.checkbox[horse+'_'+column+'_p'].checkboxDisabled.visible = false;

		$.horse[horse].gotoAndPlay('idle');
		$.horse[horse+'_p'].gotoAndPlay('idle');

		resetCheckbox(totalCheckboxs, column);
	}else{
		$.checkbox[horse+'_'+column].checkboxTick.visible = true;
		$.checkbox[horse+'_'+column].checkbox.visible = false;
		$.checkbox[horse+'_'+column].checkboxDisabled.visible = false;
		$.checkbox[horse+'_'+column+'_p'].checkboxTick.visible = true;
		$.checkbox[horse+'_'+column+'_p'].checkbox.visible = false;
		$.checkbox[horse+'_'+column+'_p'].checkboxDisabled.visible = false;

		$.horse[horse].gotoAndPlay('run');
		$.horse[horse+'_p'].gotoAndPlay('run');
		
		for(var n=0; n<horseSettings.length; n++){
			if($.checkbox[n+'_'+column].checkboxTick.visible){
				totalSelected++;
			}
		}

		if(totalSelected == totalSelect){
			for(var n=0; n<horseSettings.length; n++){
				if(!$.checkbox[n+'_'+column].checkboxTick.visible){
					$.checkbox[n+'_'+column].checkbox.visible = false;
					$.checkbox[n+'_'+column].checkboxDisabled.visible = true;
					$.checkbox[n+'_'+column+'_p'].checkbox.visible = false;
					$.checkbox[n+'_'+column+'_p'].checkboxDisabled.visible = true;
				}
			}

			for(var c=1; c<totalCheckboxs+1; c++){
				if(!$.checkbox[horse+'_'+c].checkboxTick.visible){
					$.checkbox[horse+'_'+c].checkbox.visible = false;
					$.checkbox[horse+'_'+c].checkboxDisabled.visible = true;
					$.checkbox[horse+'_'+c+'_p'].checkbox.visible = false;
					$.checkbox[horse+'_'+c+'_p'].checkboxDisabled.visible = true;
				}
			}
		}
	}

	tryPlaceBet(false);
	updateTotalBet();
}

function resetCheckbox(totalCheckboxs, column){
	var horseNumbers = [];

	if(totalCheckboxs > 1){
		for(var c=1; c<totalCheckboxs+1; c++){
			var thisHorseSelected = -1;
			for(var n=0; n<horseSettings.length; n++){
				if($.checkbox[n+'_'+c].checkboxTick.visible){
					thisHorseSelected = n;
				}
			}
			horseNumbers.push(thisHorseSelected);
		}

		for(var c=1; c<totalCheckboxs+1; c++){
			for(var n=0; n<horseSettings.length; n++){
				$.checkbox[n+'_'+c].checkbox.visible = true;
				$.checkbox[n+'_'+c].checkboxTick.visible = false;
				$.checkbox[n+'_'+c].checkboxDisabled.visible = false;

				$.checkbox[n+'_'+c+'_p'].checkbox.visible = true;
				$.checkbox[n+'_'+c+'_p'].checkboxTick.visible = false;
				$.checkbox[n+'_'+c+'_p'].checkboxDisabled.visible = false;
			}
		}
	
		//prefill
		for(var h=0; h<horseNumbers.length; h++){
			var horseSelect = horseNumbers[h];
			if(horseSelect != -1){
				//column
				for(var n=0; n<horseSettings.length; n++){
					$.checkbox[n+'_'+(h+1)].checkbox.visible = false;
					$.checkbox[n+'_'+(h+1)].checkboxTick.visible = false;
					$.checkbox[n+'_'+(h+1)].checkboxDisabled.visible = true;
					$.checkbox[n+'_'+(h+1)+'_p'].checkbox.visible = false;
					$.checkbox[n+'_'+(h+1)+'_p'].checkboxTick.visible = false;
					$.checkbox[n+'_'+(h+1)+'_p'].checkboxDisabled.visible = true;
				}
	
				//row
				for(var c=1; c<totalCheckboxs+1; c++){
					$.checkbox[horseSelect+'_'+c].checkbox.visible = false;
					$.checkbox[horseSelect+'_'+c].checkboxTick.visible = false;
					$.checkbox[horseSelect+'_'+c].checkboxDisabled.visible = true;
					$.checkbox[horseSelect+'_'+c+'_p'].checkbox.visible = false;
					$.checkbox[horseSelect+'_'+c+'_p'].checkboxTick.visible = false;
					$.checkbox[horseSelect+'_'+c+'_p'].checkboxDisabled.visible = true;
				}
			}
		}
	
		for(var h=0; h<horseNumbers.length; h++){
			var horseSelect = horseNumbers[h];
			if(horseSelect != -1){
				$.checkbox[horseSelect+'_'+(h+1)].checkbox.visible = false;
				$.checkbox[horseSelect+'_'+(h+1)].checkboxTick.visible = true;
				$.checkbox[horseSelect+'_'+(h+1)].checkboxDisabled.visible = false;
				$.checkbox[horseSelect+'_'+(h+1)+'_p'].checkbox.visible = false;
				$.checkbox[horseSelect+'_'+(h+1)+'_p'].checkboxTick.visible = true;
				$.checkbox[horseSelect+'_'+(h+1)+'_p'].checkboxDisabled.visible = false;
			}
		}
	}else{
		var horseNumbers = [];
		for(var n=0; n<horseSettings.length; n++){
			if($.checkbox[n+'_'+1].checkboxTick.visible){
				horseNumbers.push(n);
			}
		}

		for(var n=0; n<horseSettings.length; n++){
			if(horseNumbers.indexOf(n) == -1){
				$.checkbox[n+'_'+column].checkbox.visible = true;
				$.checkbox[n+'_'+column].checkboxTick.visible = false;
				$.checkbox[n+'_'+column].checkboxDisabled.visible = false;
				$.checkbox[n+'_'+column+'_p'].checkbox.visible = true;
				$.checkbox[n+'_'+column+'_p'].checkboxTick.visible = false;
				$.checkbox[n+'_'+column+'_p'].checkboxDisabled.visible = false;
			}
		}
	}
}

function updateTotalBet(){
	var betType = betSettings[gameData.betTypeIndex].type;
	var combination = 0;
	if(buttonPlace.visible){
		combination = 1;
		if(betType == 'exactabox'){
			combination = 4;
		}else if(betType == 'trifectabox'){
			combination = 6;
		}else if(betType == 'superfectabox'){
			combination = 24;
		}
	}

	gameData.totalBet = betSettings[gameData.betTypeIndex].bets[gameData.betAmountIndex] * combination;
	betTotalTxt.text = textDisplay.currency + addCommas(gameData.totalBet);
}

/*!
 * 
 * TRY PLACE BET - This is the function that runs to try place bet
 * 
 */
function tryPlaceBet(con){
	buttonPlace.visible = false;

	var betType = betSettings[gameData.betTypeIndex].type;
	var totalCheckboxs = 1;
	var totalSelected = 1;
	var checkType = 0;
	if(betType == 'exacta'){
		totalCheckboxs = 2;
	}else if(betType == 'exactabox'){
		checkType = 1;
		totalSelected = 2;
	}else if(betType == 'trifecta'){
		totalCheckboxs = 3;
	}else if(betType == 'trifectabox'){
		checkType = 1;
		totalSelected = 3;
	}else if(betType == 'superfecta'){
		totalCheckboxs = 4;
	}else if(betType == 'superfectabox'){
		checkType = 1;
		totalSelected = 4;
	}

	var horseNumbers = [];
	for(var c=1; c<totalCheckboxs+1; c++){
		for(var n=0; n<horseSettings.length; n++){
			if($.checkbox[n+'_'+c].checkboxTick.visible){
				horseNumbers.push(n);
			}
		}
	}

	if(checkType == 0){
		if(horseNumbers.length == totalCheckboxs){
			buttonPlace.visible = true;
		}
	}else if(checkType == 1){
		if(horseNumbers.length == totalSelected){
			buttonPlace.visible = true;
		}
	}

	if(con){
		if(playerData.credit >= gameData.totalBet){
			playSound('soundBet');
			playerData.bets.push({type:gameData.betTypeIndex, horse:horseNumbers, totalBet:gameData.totalBet});
			goGamePage('summary');
			updateCredit();
			checkCanBet();
		}else{
			playSound('soundError');
			animateCredit(creditRedTxt, .5);
		}
	}
}

/*!
 * 
 * SUMMARY TABLE - This is the function that runs to update summary table
 * 
 */
function updateSummaryTable(){
	betSummaryContentContainer.removeAllChildren();

	var posData = {x:0, y:0, tY:-180, sX:-305, sY:-138, spaceY:35.5};
	var columnPos = [0, 30, 310, 450, 580];

	posData.x = posData.sX;
	posData.y = posData.tY;
	for(var n=0; n<columnPos.length; n++){
		var newDisplay = new createjs.Text();
		newDisplay.font = "20px montheavy_demo";
		newDisplay.color = '#65EF96';
		newDisplay.textAlign = "center";
		if(n == 1){
			newDisplay.textAlign = "left";
		}
		newDisplay.textBaseline='alphabetic';
		newDisplay.text = textDisplay.tableSummary[n];
		newDisplay.x = posData.x + columnPos[n];
		newDisplay.y = posData.y + 5;
		betSummaryContentContainer.addChild(newDisplay);
	}

	posData.x = posData.sX;
	posData.y = posData.sY;
	for(var n=0; n<playerData.bets.length; n++){
		for(var c=0; c<columnPos.length; c++){
			var extraY = 5;
			var newSummary = new createjs.Text();
			newSummary.font = "20px montheavy_demo";
			newSummary.color = '#fff';
			newSummary.textAlign = "center";
			newSummary.textBaseline='alphabetic';
			
			if(c == 0){
				newSummary.text = (n+1)+'.';
			}else if(c == 1){
				newSummary.textAlign = "left";
				newSummary.text = betSettings[playerData.bets[n].type].name;
			}else if(c == 2){
				newSummary.text = returnHorseNumbers(playerData.bets[n].horse);
			}else if(c == 3){
				newSummary.text = textDisplay.currency + addCommas(playerData.bets[n].totalBet);
			}else if(c == 4){
				newSummary = new createjs.Bitmap(loader.getResult('buttonRemove'));
				newSummary.betIndex = n;
				centerReg(newSummary);
				extraY = 0;

				newSummary.cursor = "pointer";
				newSummary.addEventListener("click", function(evt) {
					playSound('soundError');
					removeBet(evt.currentTarget.betIndex);
				});
			}

			newSummary.x = posData.x + columnPos[c];
			newSummary.y = posData.y + extraY;

			betSummaryContentContainer.addChild(newSummary);
		}

		posData.y += posData.spaceY;
	}

	//portrait
	betSummaryContentContainerP.removeAllChildren();

	var posData = {x:0, y:0, tY:-180, sX:-225, sY:-138, spaceY:35.5};
	var columnPos = [0, 30, 190, 310, 420];

	posData.x = posData.sX;
	posData.y = posData.tY;
	for(var n=0; n<columnPos.length; n++){
		var newDisplay = new createjs.Text();
		newDisplay.font = "20px montheavy_demo";
		newDisplay.color = '#65EF96';
		newDisplay.textAlign = "center";
		if(n == 1){
			newDisplay.textAlign = "left";
		}
		newDisplay.textBaseline='alphabetic';
		newDisplay.text = textDisplay.tableSummary[n];
		newDisplay.x = posData.x + columnPos[n];
		newDisplay.y = posData.y + 5;
		betSummaryContentContainerP.addChild(newDisplay);
	}

	posData.x = posData.sX;
	posData.y = posData.sY;
	for(var n=0; n<playerData.bets.length; n++){
		for(var c=0; c<columnPos.length; c++){
			var extraY = 5;
			var newSummary = new createjs.Text();
			newSummary.font = "20px montheavy_demo";
			newSummary.color = '#fff';
			newSummary.textAlign = "center";
			newSummary.textBaseline='alphabetic';
			
			if(c == 0){
				newSummary.text = (n+1)+'.';
			}else if(c == 1){
				newSummary.textAlign = "left";
				newSummary.text = betSettings[playerData.bets[n].type].nameShort;
			}else if(c == 2){
				newSummary.text = returnHorseNumbers(playerData.bets[n].horse);
			}else if(c == 3){
				newSummary.text = textDisplay.currency + addCommas(playerData.bets[n].totalBet);
			}else if(c == 4){
				newSummary = new createjs.Bitmap(loader.getResult('buttonRemove'));
				newSummary.betIndex = n;
				centerReg(newSummary);
				extraY = 0;

				newSummary.cursor = "pointer";
				newSummary.addEventListener("click", function(evt) {
					playSound('soundButton');
					removeBet(evt.currentTarget.betIndex);
				});
			}

			newSummary.x = posData.x + columnPos[c];
			newSummary.y = posData.y + extraY;

			betSummaryContentContainerP.addChild(newSummary);
		}

		posData.y += posData.spaceY;
	}
}

function removeBet(index){
	playerData.bets.splice(index,1);
	updateSummaryTable();
	updateCredit();
	checkCanBet();
}

function returnHorseNumbers(horses){
	var returnValue = '';
	for(var n=0; n<horses.length; n++){
		returnValue += (horses[n]+1);
		if(n < horses.length-1){
			returnValue += '-';
		}
	}
	return returnValue;
}

/*!
 * 
 * START RACE - This is the function that runs to start race
 * 
 */
function tryStartRace(){
	//memberpayment
	if(typeof memberData != 'undefined' && memberSettings.enableMembership){
		if(!checkMemberGameType()){
			goMemberPage('user');
		}else{
			startRace();
		}
	}else{
		startRace();
	}
}

function startRace(){
	//memberpayment
	if(typeof memberData != 'undefined' && memberSettings.enableMembership && !memberData.ready){
		return;
	}

	var totalAmount = getCurrentBetAmount();
	playerData.credit -= totalAmount;

	//memberpayment
	if(typeof memberData != 'undefined' && memberSettings.enableMembership){
		getUserResult("proceedStartRace", {bets:playerData.bets});
	}else{
		proceedStartRace();
	}
}

function proceedStartRace(result){
	if(result != undefined){
		gameData.revealResults = result.numbers;
	}else if(gameData.revealResults.length == 0){
		if(gameSettings.enablePercentage){
			gameData.revealResults = getResultOnPercent();
		}else{
			for(var n=0; n<horseSettings.length; n++){
				gameData.revealResults.push(n);
			}
			shuffle(gameData.revealResults);
		}
	}

	prepareRace();
	gameData.fieldIndex++;
	gameData.fieldIndex = gameData.fieldIndex > fieldSettings.length-1 ? 0 : gameData.fieldIndex;

	gameBetContainer.visible = false;
	gameRaceContainer.visible = true;
	scoreContainer.visible = true;
	raceDisplayContainer.visible = true;
}

function getCurrentBetAmount(){
	var totalAmount = 0;
	for(var n=0; n<playerData.bets.length; n++){
		totalAmount += playerData.bets[n].totalBet;
	}
	return totalAmount;
}

/*!
 * 
 * RACE TABLE - This is the function that runs to update race table
 * 
 */
function updateRaceTable(){
	raceResultContentContainer.removeAllChildren();

	var posData = {x:0, y:0, tY:-180, sX:-135, sY:-138, spaceY:35.5};
	var columnPos = [0, 70, 100];

	posData.x = posData.sX;
	posData.y = posData.tY;

	posData.x = posData.sX;
	posData.y = posData.tY;
	for(var n=0; n<columnPos.length; n++){
		var newDisplay = new createjs.Text();
		newDisplay.font = "20px montheavy_demo";
		newDisplay.color = '#65EF96';
		newDisplay.textAlign = "left";
		newDisplay.textBaseline='alphabetic';
		newDisplay.text = textDisplay.tableRaceResult[n];
		newDisplay.x = posData.x + columnPos[n];
		newDisplay.y = posData.y + 5;
		raceResultContentContainer.addChild(newDisplay);
	}

	posData.x = posData.sX;
	posData.y = posData.sY;
	var delayCount = 0;
	for(var n=0; n<gameData.revealResults.length; n++){
		var horseIndex = gameData.revealResults[n];
		for(var c=0; c<columnPos.length; c++){
			var extraY = 5;
			var newRace = new createjs.Text();
			newRace.font = "20px montheavy_demo";
			newRace.color = '#fff';
			newRace.textAlign = "left";
			newRace.textBaseline='alphabetic';

			if(c == 0){
				newRace.text = textDisplay.position[n];
			}else if(c == 1){
				newRace = new createjs.Bitmap(loader.getResult('horseIcon'+horseIndex));
				centerReg(newRace);
				extraY = 0;
			}else if(c == 2){
				newRace.text = horseSettings[horseIndex].name;
			}

			newRace.x = posData.x + columnPos[c];
			newRace.y = posData.y + extraY;

			TweenMax.from(newRace, .5, {delay:delayCount, x:newRace.x + 30, alpha:0, overwrite:true});
			raceResultContentContainer.addChild(newRace);
		}
		delayCount += .4;
		posData.y += posData.spaceY;
	}

	//portrait
	raceResultContentContainerP.removeAllChildren();

	var posData = {x:0, y:0, sX:-195, sY:-35, spaceX:95};

	posData.x = posData.sX;
	posData.y = posData.sY;
	var delayCount = 0;
	for(var n=0; n<gameData.revealResults.length; n++){
		var horseIndex = gameData.revealResults[n];

		var newPos = new createjs.Text();
		newPos.font = "20px montheavy_demo";
		newPos.color = '#65EF96';
		newPos.textAlign = "center";
		newPos.textBaseline='alphabetic';
		newPos.text = textDisplay.position[n];
		newPos.x = posData.x;
		newPos.y = posData.y;

		var newIcon = new createjs.Bitmap(loader.getResult('horseIcon'+horseIndex));
		centerReg(newIcon);
		newIcon.x = posData.x;
		newIcon.y = posData.y + 33;

		var newName = new createjs.Text();
		newName.font = "15px montheavy_demo";
		newName.color = '#fff';
		newName.textAlign = "center";
		newName.textBaseline='alphabetic';
		newName.text = horseSettings[horseIndex].name;
		newName.x = posData.x;
		newName.y = posData.y + 65;
		if(!isEven(n)){
			newName.y = posData.y + 82;
		}
		TweenMax.from(newPos, .5, {delay:delayCount, x:newPos.x + 30, alpha:0, overwrite:true});
		TweenMax.from(newIcon, .5, {delay:delayCount, x:newIcon.x + 30, alpha:0, overwrite:true});
		TweenMax.from(newName, .5, {delay:delayCount, x:newName.x + 30, alpha:0, overwrite:true});
		delayCount += .4;
		raceResultContentContainerP.addChild(newPos, newIcon, newName);
		posData.x += posData.spaceX;
	}
}

function updateRaceSummaryTable(){
	raceSummaryContentContainer.removeAllChildren();

	var posData = {x:0, y:0, tY:-180, sX:-260, sY:-138, spaceY:35.5};
	var columnPos = [0, 25, 280, 400, 500];

	posData.x = posData.sX;
	posData.y = posData.tY;
	for(var n=0; n<columnPos.length; n++){
		var newDisplay = new createjs.Text();
		newDisplay.font = "20px montheavy_demo";
		newDisplay.color = '#65EF96';
		newDisplay.textAlign = "center";
		if(n == 1){
			newDisplay.textAlign = "left";
		}
		newDisplay.textBaseline='alphabetic';
		newDisplay.text = textDisplay.tableRaceSummary[n];
		newDisplay.x = posData.x + columnPos[n];
		newDisplay.y = posData.y + 5;
		raceSummaryContentContainer.addChild(newDisplay);
	}

	gameData.summaryCredits.amount = playerData.credit;;
	gameData.summaryWin.amount = 0;

	gameData.summaryCredits.text = textDisplay.credits +' : '+ textDisplay.currency + addCommas(playerData.credit);
	gameData.summaryWin.text = textDisplay.totalWin +' : '+ textDisplay.currency + addCommas(0);

	posData.x = posData.sX;
	posData.y = posData.sY;
	var delayWin = 1;
	var isPlayerWin = false;
	for(var n=0; n<playerData.bets.length; n++){
		var winData = checkWinAmount(n);
		var winTxt;

		if(winData.win){
			isPlayerWin = true;
			playerData.totalWin += Math.round(winData.amount);
			playerData.credit += Math.round(winData.amount);
			
			var itemHighlight = new createjs.Bitmap(loader.getResult('itemHighlight'));
			centerReg(itemHighlight);
			itemHighlight.regX = 0;
			itemHighlight.x = posData.x - 23;
			itemHighlight.y = posData.y;
			itemHighlight.visible = false;
			raceSummaryContentContainer.addChild(itemHighlight);
		}

		for(var c=0; c<columnPos.length; c++){
			var extraY = 5;
			var newSummary = new createjs.Text();
			newSummary.font = "20px montheavy_demo";
			newSummary.color = '#fff';
			newSummary.textAlign = "center";
			newSummary.textBaseline='alphabetic';
			
			if(c == 0){
				newSummary.text = (n+1)+'.';
			}else if(c == 1){
				newSummary.textAlign = "left";
				newSummary.text = betSettings[playerData.bets[n].type].name;
			}else if(c == 2){
				newSummary.text = returnHorseNumbers(playerData.bets[n].horse);
			}else if(c == 3){
				newSummary.text = textDisplay.currency + addCommas(playerData.bets[n].totalBet);
			}else if(c == 4){
				winTxt = newSummary;
				newSummary.text = textDisplay.currency + addCommas(0);
			}

			newSummary.x = posData.x + columnPos[c];
			newSummary.y = posData.y + extraY;

			raceSummaryContentContainer.addChild(newSummary);
		}

		if(winData.win){
			animateWinHighlight(itemHighlight, delayWin, winTxt, winData.amount, true);
			delayWin += gameSettings.winSpeed;
		}

		posData.y += posData.spaceY;
	}

	//portrait
	raceSummaryContentContainerP.removeAllChildren();

	var posData = {x:0, y:0, tY:-180, sX:-225, sY:-138, spaceY:35.5};
	var columnPos = [0, 30, 190, 310, 420];

	posData.x = posData.sX;
	posData.y = posData.tY;
	for(var n=0; n<columnPos.length; n++){
		var newDisplay = new createjs.Text();
		newDisplay.font = "20px montheavy_demo";
		newDisplay.color = '#65EF96';
		newDisplay.textAlign = "center";
		if(n == 1){
			newDisplay.textAlign = "left";
		}
		newDisplay.textBaseline='alphabetic';
		newDisplay.text = textDisplay.tableRaceSummary[n];
		newDisplay.x = posData.x + columnPos[n];
		newDisplay.y = posData.y + 5;
		raceSummaryContentContainerP.addChild(newDisplay);
	}

	gameData.summaryCreditsP.amount = playerData.credit;
	gameData.summaryWinP.amount = 0;

	gameData.summaryCreditsP.text = textDisplay.credits +' : '+ textDisplay.currency + addCommas(playerData.credit);
	gameData.summaryWinP.text = textDisplay.totalWin +' : '+ textDisplay.currency + addCommas(0);

	posData.x = posData.sX;
	posData.y = posData.sY;
	var delayWin = 1;
	for(var n=0; n<playerData.bets.length; n++){
		var winData = checkWinAmount(n);
		var winTxt;

		if(winData.win){
			var itemHighlight = new createjs.Bitmap(loader.getResult('itemHighlightP'));
			centerReg(itemHighlight);
			itemHighlight.regX = 0;
			itemHighlight.x = posData.x - 23;
			itemHighlight.y = posData.y;
			itemHighlight.visible = false;
			raceSummaryContentContainerP.addChild(itemHighlight);
		}

		for(var c=0; c<columnPos.length; c++){
			var extraY = 5;
			var newSummary = new createjs.Text();
			newSummary.font = "20px montheavy_demo";
			newSummary.color = '#fff';
			newSummary.textAlign = "center";
			newSummary.textBaseline='alphabetic';
			
			if(c == 0){
				newSummary.text = (n+1)+'.';
			}else if(c == 1){
				newSummary.textAlign = "left";
				newSummary.text = betSettings[playerData.bets[n].type].nameShort;
			}else if(c == 2){
				newSummary.text = returnHorseNumbers(playerData.bets[n].horse);
			}else if(c == 3){
				newSummary.text = textDisplay.currency + addCommas(playerData.bets[n].totalBet);
			}else if(c == 4){
				winTxt = newSummary;
				newSummary.text = textDisplay.currency + addCommas(0);
			}

			newSummary.x = posData.x + columnPos[c];
			newSummary.y = posData.y + extraY;

			raceSummaryContentContainerP.addChild(newSummary);
		}

		if(winData.win){
			animateWinHighlight(itemHighlight, delayWin, winTxt, winData.amount, false);
			delayWin += gameSettings.winSpeed;
		}

		posData.y += posData.spaceY;
	}

	if(!isPlayerWin){
		playSound('soundNoWin');
	}
}

function animateWinHighlight(itemHighlight, delay, winTxt, amount, update){
	TweenMax.to(itemHighlight, .3, {delay:delay, overwrite:true, onComplete:function(){
		playSound('soundHitWin');
		playSound('soundCount');
		itemHighlight.visible = true;
		animateBlink(itemHighlight, .5);

		if(update){
			updateSummary(amount);
		}
		
		winTxt.amount = 0;
		TweenMax.to(winTxt, gameSettings.winSpeed, {amount:amount, overwrite:true, onUpdate:function(){
			winTxt.text = textDisplay.currency + addCommas(Math.round(winTxt.amount));
		}});
	}});
}

function updateSummary(amount){
	var newCredit = gameData.summaryCredits.amount + amount;
	TweenMax.to(gameData.summaryCredits, gameSettings.winSpeed, {amount:newCredit, overwrite:true, onUpdate:function(){
		gameData.summaryCredits.text = textDisplay.credits +' : '+ textDisplay.currency + addCommas(Math.round(gameData.summaryCredits.amount));
	}});
	TweenMax.to(gameData.summaryCreditsP, gameSettings.winSpeed, {amount:newCredit, overwrite:true, onUpdate:function(){
		gameData.summaryCreditsP.text = textDisplay.credits +' : '+ textDisplay.currency + addCommas(Math.round(gameData.summaryCreditsP.amount));
	}});

	var newWin = gameData.summaryWin.amount + amount;
	TweenMax.to(gameData.summaryWin, gameSettings.winSpeed, {amount:newWin, overwrite:true, onUpdate:function(){
		gameData.summaryWin.text = textDisplay.totalWin +' : '+ textDisplay.currency + addCommas(Math.round(gameData.summaryWin.amount));
	}});
	TweenMax.to(gameData.summaryWinP, gameSettings.winSpeed, {amount:newWin, overwrite:true, onUpdate:function(){
		gameData.summaryWinP.text = textDisplay.totalWin +' : '+ textDisplay.currency + addCommas(Math.round(gameData.summaryWinP.amount));
	}});
}

function checkWinAmount(index){
	var betIndex = playerData.bets[index].type;
	var betType = betSettings[betIndex].type;
	var winData = {win:false, amount:0};
	if(betType == 'win'){
		if(gameData.revealResults[0] == playerData.bets[index].horse[0]){
			winData.win = true;
			winData.amount += horseSettings[playerData.bets[index].horse[0]].odds[betIndex] * playerData.bets[index].totalBet;
		}
	}else if(betType == 'place'){
		if(gameData.revealResults[0] == playerData.bets[index].horse[0] || gameData.revealResults[1] == playerData.bets[index].horse[0]){
			winData.win = true;
			winData.amount += horseSettings[playerData.bets[index].horse[0]].odds[betIndex] * playerData.bets[index].totalBet;
		}
	}else if(betType == 'show'){
		if(gameData.revealResults[0] == playerData.bets[index].horse[0] || gameData.revealResults[1] == playerData.bets[index].horse[0] || gameData.revealResults[2] == playerData.bets[index].horse[0]){
			winData.win = true;
			winData.amount += horseSettings[playerData.bets[index].horse[0]].odds[betIndex] * playerData.bets[index].totalBet;
		}
	}else if(betType == 'exacta'){
		if(gameData.revealResults[0] == playerData.bets[index].horse[0] && gameData.revealResults[1] == playerData.bets[index].horse[1]){
			winData.win = true;
			winData.amount += betSettings[betIndex].payout;
		}
	}else if(betType == 'exactabox'){
		if(gameData.revealResults[0] == playerData.bets[index].horse[0] || gameData.revealResults[1] == playerData.bets[index].horse[0]){
			if(gameData.revealResults[0] == playerData.bets[index].horse[1] || gameData.revealResults[1] == playerData.bets[index].horse[1]){
				winData.win = true;
				winData.amount += betSettings[betIndex].payout;
			}
		}
	}else if(betType == 'trifecta'){
		if(gameData.revealResults[0] == playerData.bets[index].horse[0] && gameData.revealResults[1] == playerData.bets[index].horse[1] && gameData.revealResults[2] == playerData.bets[index].horse[2]){
			winData.win = true;
			winData.amount += betSettings[betIndex].payout;
		}
	}else if(betType == 'trifectabox'){
		if(gameData.revealResults[0] == playerData.bets[index].horse[0] || gameData.revealResults[1] == playerData.bets[index].horse[0] || gameData.revealResults[2] == playerData.bets[index].horse[0]){
			if(gameData.revealResults[0] == playerData.bets[index].horse[1] || gameData.revealResults[1] == playerData.bets[index].horse[1] || gameData.revealResults[2] == playerData.bets[index].horse[1]){
				if(gameData.revealResults[0] == playerData.bets[index].horse[2] || gameData.revealResults[1] == playerData.bets[index].horse[2] || gameData.revealResults[2] == playerData.bets[index].horse[2]){
					winData.win = true;
					winData.amount += betSettings[betIndex].payout;
				}
			}
		}
	}else if(betType == 'superfecta'){
		if(gameData.revealResults[0] == playerData.bets[index].horse[0] && gameData.revealResults[1] == playerData.bets[index].horse[1] && gameData.revealResults[2] == playerData.bets[index].horse[2] && gameData.revealResults[3] == playerData.bets[index].horse[3]){
			winData.win = true;
			winData.amount += betSettings[betIndex].payout;
		}
	}else if(betType == 'superfectabox'){
		if(gameData.revealResults[0] == playerData.bets[index].horse[0] || gameData.revealResults[1] == playerData.bets[index].horse[0] || gameData.revealResults[2] == playerData.bets[index].horse[0] || gameData.revealResults[3] == playerData.bets[index].horse[0]){
			if(gameData.revealResults[0] == playerData.bets[index].horse[1] || gameData.revealResults[1] == playerData.bets[index].horse[1] || gameData.revealResults[2] == playerData.bets[index].horse[1] || gameData.revealResults[3] == playerData.bets[index].horse[1]){
				if(gameData.revealResults[0] == playerData.bets[index].horse[2] || gameData.revealResults[1] == playerData.bets[index].horse[2] || gameData.revealResults[2] == playerData.bets[index].horse[2] || gameData.revealResults[3] == playerData.bets[index].horse[2]){
					if(gameData.revealResults[0] == playerData.bets[index].horse[3] || gameData.revealResults[1] == playerData.bets[index].horse[3] || gameData.revealResults[2] == playerData.bets[index].horse[3] || gameData.revealResults[3] == playerData.bets[index].horse[3]){
						winData.win = true;
						winData.amount += betSettings[betIndex].payout;
					}
				}
			}
		}
	}
	winData.amount = Math.round(winData.amount);
	return winData;
}

 /*!
 * 
 * UPDATE CREDIT VALUE - This is the function that runs to update credit value
 * 
 */
function updateCredit(){
	var totalAmount = getCurrentBetAmount();
	creditTxt.text = creditRedTxt.text = textDisplay.currency + addCommas(playerData.credit-totalAmount);
}

/*!
 * 
 * CREATE HORSE - This is the function that runs to create horse
 * 
 */
function createHorse(index){
	var _difSpeed = randomIntFromInterval(8,10) * .1;
	var _frameW = 130;
	var _frameH = 86;
	var _regX = _frameW/2;
	var _regY = _frameH;
	var _count = 10;
	var _animations;
	var _spritesheetData;
	var _default = "idle";
	var _assetID = "horseRace" + index;

	_animations = {
		idle:{frames: [0], speed:_difSpeed},
		run:{frames: [0,1,2,3,4,5,6,7,8,9], speed:_difSpeed}
	};
			
	_spritesheetData = new createjs.SpriteSheet({
		"images": [loader.getResult(_assetID).src],
		"frames": {"regX": _regX, "regY": _regY, "height": _frameH, "width": _frameW, "count": _count},
		"animations": _animations
	});

	var newHorse = new createjs.Sprite(_spritesheetData, _default);
	newHorse.framerate = 20;
	return newHorse;
}

 /*!
 * 
 * PREPARE RACE - This is the function that runs to prepare race
 * 
 */
function prepareRace(){
	gameData.race = {
		start:false,
		speed:500,
		gates:[],
		gatesOpen:[],
		rangeX:[300,800],
		rangeY:[455,455+360],
		moveX:[-50,50],
		moveY:[-50,50],
		endX:800,
		distance:0,
		distanceEnd:150,
		pos:[],
		update:0,
		lists:[]
	};

	gameRaceContainer.removeAllChildren();
	horsesContainer.removeAllChildren();
	horsesShadowContainer.removeAllChildren();
	scoreListContainer.removeAllChildren();

	var skyImg = loader.getResult("bgSky"+gameData.fieldIndex);
    $.field['sky'] = new createjs.Shape();
    $.field['sky'].graphics.beginBitmapFill(skyImg).drawRect(0, 0, skyImg.width*2, skyImg.height);
    $.field['sky'].tileW = skyImg.width;
    $.field['sky'].cache(0, 0, skyImg.width*2, skyImg.height);

	var billboardImg = loader.getResult("bgBillboard"+gameData.fieldIndex);
    $.field['billboard'] = new createjs.Shape();
    $.field['billboard'].graphics.beginBitmapFill(billboardImg).drawRect(0, 0, billboardImg.width*2, billboardImg.height);
    $.field['billboard'].tileW = billboardImg.width;
    $.field['billboard'].cache(0, 0, billboardImg.width*2, billboardImg.height);
	$.field['billboard'].y = 305;

	var groundImg = loader.getResult("bgRace"+gameData.fieldIndex);
    $.field['ground'] = new createjs.Shape();
    $.field['ground'].graphics.beginBitmapFill(groundImg).drawRect(0, 0, groundImg.width*2, groundImg.height);
    $.field['ground'].tileW = groundImg.width;
    $.field['ground'].cache(0, 0, groundImg.width*2, groundImg.height);
	$.field['ground'].y = 330;
	
	$.field['end'] = new createjs.Bitmap(loader.getResult('bgEnd' + gameData.fieldIndex));
	$.field['end'].regX = $.field['end'].image.naturalWidth;
	$.field['end'].regY = $.field['end'].image.naturalHeight;

	$.field['endline'] = new createjs.Bitmap(loader.getResult('bgEndline' + gameData.fieldIndex));
	$.field['endline'].regX = $.field['endline'].image.naturalWidth;
	$.field['endline'].regY = 0;

	$.field['endline'].x = 1310;
	$.field['endline'].y = 420;
	$.field['end'].x = $.field['endline'].x + 5;
	$.field['end'].y = $.field['endline'].y;
	gameRaceContainer.addChild($.field['sky'], $.field['billboard'], $.field['ground'],horsesShadowContainer,$.field['endline'],$.field['end'],horsesContainer,dimShape);
	scoreListContainer.x = 165;

	var posData = {x:300, y:455, spaceY:41.5, lX:0};
	gameData.race.gates = [];
	gameData.race.gatesOpen = [];
	for(var n=0; n<horseSettings.length; n++){
		//icons
		$.horse['icon'+n] = new createjs.Bitmap(loader.getResult('horseIcon'+n));
		centerReg($.horse['icon'+n]);
		$.horse['icon'+n].x = posData.lX;
		$.horse['icon'+n].y = 10;
		scoreListContainer.addChild($.horse['icon'+n]);
		posData.lX -= 35;
		gameData.race.lists.push($.horse['icon'+n].x);

		//position
		gameData.race.pos.push(0);

		$.horse['race'+n] = createHorse(n);
		$.horse['race'+n].x = posData.x;
		$.horse['race'+n].y = $.horse['race'+n].oriY = posData.y;
		$.horse['race'+n].delayNum = 0;

		$.horse['shadow'+n] = new createjs.Bitmap(loader.getResult('bgShadow'+gameData.fieldIndex));
		centerReg($.horse['shadow'+n]);
		$.horse['shadow'+n].x = posData.x;
		$.horse['shadow'+n].y = posData.y;

		var newGateT = new createjs.Bitmap(loader.getResult('bgGate'+gameData.fieldIndex));
		centerReg(newGateT);
		newGateT.regY = newGateT.image.naturalHeight;
		newGateT.x = posData.x + 5;
		newGateT.y = posData.y - (posData.spaceY/2);
		gameData.race.gates.push(newGateT);

		var newGateB = new createjs.Bitmap(loader.getResult('bgGateFirst'+gameData.fieldIndex));
		centerReg(newGateB);
		newGateB.regY = newGateB.image.naturalHeight;
		newGateB.x = posData.x + 8;
		newGateB.y = posData.y + (posData.spaceY/2);
		gameData.race.gates.push(newGateB);

		var newGateOpenT = new createjs.Bitmap(loader.getResult('bgGateOpen'+gameData.fieldIndex));
		newGateOpenT.regX = 0;
		newGateOpenT.regY = newGateOpenT.image.naturalHeight;
		newGateOpenT.x = posData.x + 68;
		newGateOpenT.y = posData.y - (posData.spaceY/2);
		newGateOpenT.scaleX = 0;
		gameData.race.gatesOpen.push(newGateOpenT);

		var newGateOpenB = new createjs.Bitmap(loader.getResult('bgGateOpen'+gameData.fieldIndex));
		newGateOpenB.regX = 0;
		newGateOpenB.regY = newGateOpenB.image.naturalHeight;
		newGateOpenB.x = posData.x + 68;
		newGateOpenB.y = posData.y + (posData.spaceY/2);
		newGateOpenB.scaleX = 0;
		gameData.race.gatesOpen.push(newGateOpenB);

		horsesContainer.addChild($.horse['race'+n], newGateT, newGateB, newGateOpenT, newGateOpenB);
		horsesShadowContainer.addChild($.horse['shadow'+n]);

		//race
		$.horse['raceicon'+n] = new createjs.Bitmap(loader.getResult('horseIcon'+n));
		centerReg($.horse['raceicon'+n]);
		$.horse['raceicon'+n].x = posData.x + 100;
		$.horse['raceicon'+n].y = posData.y;
		$.horse['raceicon'+n].alpha = 0;

		$.horse['racename'+n] = new createjs.Text();
		$.horse['racename'+n].font = "20px montheavy_demo";
		$.horse['racename'+n].color = '#fff';
		$.horse['racename'+n].textAlign = "left";
		$.horse['racename'+n].textBaseline='alphabetic';
		$.horse['racename'+n].text = horseSettings[n].name;
		$.horse['racename'+n].x = $.horse['raceicon'+n].x + 25;
		$.horse['racename'+n].y = posData.y + 5;
		$.horse['racename'+n].alpha = 0;
		horsesContainer.addChild($.horse['raceicon'+n], $.horse['racename'+n]);

		posData.y += posData.spaceY;
	}

playSound('soundCallToPost');
	playSoundLoop('soundAmbience');
	dimShape.alpha = 1;
	TweenMax.to(dimShape, 1, {delay:1.5, alpha:0, overwrite:true});

	raceDisplayTxt.text = textDisplay.race + gameData.raceCount;
	gameData.raceCount++;
	fieldDisplayTxt.text = textDisplay.field + (gameData.fieldIndex + 1);
	raceDisplayContainer.alpha = 0;
	raceDisplayMoveContainer.y = 0;
	TweenMax.to(raceDisplayContainer, .5, {alpha:1, overwrite:true, onComplete:function(){
		var delayNum = 1;
		for(var n=0; n<horseSettings.length; n++){
			var oriX = $.horse['raceicon'+n].x;
			$.horse['raceicon'+n].x = $.horse['raceicon'+n].x + 50;
			TweenMax.to($.horse['raceicon'+n], .4, {delay:delayNum, x:oriX, alpha:1, overwrite:true});
			delayNum += .1;
		}
		
		var delayNum = 1.1;
		for(var n=0; n<horseSettings.length; n++){
			var oriX = $.horse['racename'+n].x;
			$.horse['racename'+n].x = $.horse['racename'+n].x + 50;
			TweenMax.to($.horse['racename'+n], .4, {delay:delayNum, x:oriX, alpha:1, overwrite:true});
			delayNum += .1;
		}

		TweenMax.to(raceDisplayMoveContainer, .5, {delay:1, y:-200, ease:Expo.easeOut, overwrite:true});
		TweenMax.to(raceDisplayContainer, .5, {delay:4.5, alpha:0, overwrite:true});
	}});

	scoreMoveContainer.alpha = 0;
	scoreMoveContainer.y = 50;
	TweenMax.to(scoreMoveContainer, .5, {delay:4.5, overwrite:true, onComplete:function(){
		var delayNum = 0;
		for(var n=0; n<horseSettings.length; n++){
			var moveX = $.horse['raceicon'+n].x - 50;
			TweenMax.to($.horse['raceicon'+n], .4, {delay:delayNum, x:moveX, alpha:0, overwrite:true});
			delayNum += .1;
		}
		
		var delayNum = .1;
		for(var n=0; n<horseSettings.length; n++){
			var moveX = $.horse['racename'+n].x - 50;
			TweenMax.to($.horse['racename'+n], .4, {delay:delayNum, x:moveX, alpha:0, overwrite:true});
			delayNum += .1;
		}

		TweenMax.to(scoreMoveContainer, .5, {delay:1.5, y:0, alpha:1, overwrite:true, onComplete:function(){
			
		}});
	}});

	TweenMax.to(gameRaceContainer, 8, {overwrite:true, onComplete:function(){
		playSound('soundGate');
		for(var n=0; n<gameData.race.gatesOpen.length; n++){
			var gateOpen = gameData.race.gatesOpen[n];
			TweenMax.to(gateOpen, .2, {scaleX:1, overwrite:true});
		}

		TweenMax.to(gameRaceContainer, .1, {overwrite:true, onComplete:function(){
			gameData.race.start = true;
			playSoundLoop('soundRun1');
			playSoundLoop('soundRun2');
			playSoundLoop('soundRun3');
			for(var n=0; n<horseSettings.length; n++){
				$.horse['race'+n].gotoAndPlay('run');
			}
		}});
	}});

	updateHorseScore(0);
}

function updateRacePos(raceProgress){
	var endX = gameData.race.rangeX[1];
	var rangeX = [5,10];
	if(gameData.race.update == 0){
		var pos = getCenterPosition(gameData.race.rangeX[0], 0, gameData.race.rangeX[1], 0);
		endX = pos.x;
	}else if(gameData.race.update == 1){
		rangeX = [10,50];
		endX = gameData.race.rangeX[1];
	}else if(gameData.race.update == 2){
		rangeX = [10,50];
		endX = gameData.race.rangeX[1];
	}

	for(var n=0; n<gameData.revealResults.length; n++){
		var horseIndex = gameData.revealResults[n];
		$.horse['race'+horseIndex].delayNum = 0;

		var distanceX = randomIntFromInterval(rangeX[0],rangeX[1]);
		endX -= distanceX;
		gameData.race.pos[horseIndex] = endX;
	}
}

/*!
 * 
 * END RACE - This is the function that runs to end race
 * 
 */
function endRace(){
	for(var n=0; n<horseSettings.length; n++){
		var randomX = randomIntFromInterval(10,500);
		$.horse['race'+n].newX = $.horse['race'+n].x + (1000 + randomX);
		var tweenSpeed = getDuration(1000, gameSettings.raceSpeed/1.7);
		TweenMax.to($.horse['race'+n], tweenSpeed, {x:$.horse['race'+n].newX, y:$.horse['race'+n].newY, overwrite:true, onUpdate:updateHorseShadow, onUpdateParams:[n]});
	}

	var volumeData = {volume:1};
	TweenMax.to(volumeData, 2.5, {volume:0, overwrite:true, onUpdate:function(){
		setSoundLoopVolume('soundRun1', volumeData.volume);
		setSoundLoopVolume('soundRun2', volumeData.volume);
		setSoundLoopVolume('soundRun3', volumeData.volume);
	}});

	TweenMax.to(gameRaceContainer, 2.5, {overwrite:true, onComplete:function(){
		stopSoundLoop('soundAmbience');
		stopSoundLoop('soundRun1');
		stopSoundLoop('soundRun2');
		stopSoundLoop('soundRun3');

		gameBetContainer.visible = true;
		gameRaceContainer.visible = false;
		scoreContainer.visible = false;
		raceDisplayContainer.visible = false;
		goGamePage('result');
	}});
}

function updateHorseShadow(index){
	$.horse['shadow'+index].x = $.horse['race'+index].x;
	$.horse['shadow'+index].y = $.horse['race'+index].y;
}

/*!
 * 
 * LOOP FIELD - This is the function that runs to loop field
 * 
 */
function loopField(deltaS){
	if(gameData.race.start){
		gameData.race.distance = (gameData.race.distance + deltaS * (gameSettings.raceSpeed/50));

		var raceProgress = gameData.race.distance/gameData.race.distanceEnd * 100;
		updateHorseScore(raceProgress);

		$.field['ground'].x = ($.field['ground'].x - deltaS * (gameSettings.raceSpeed)) % $.field['ground'].tileW;
		$.field['billboard'].x = ($.field['billboard'].x - deltaS * (gameSettings.raceSpeed * .8)) % $.field['billboard'].tileW;
		$.field['sky'].x = ($.field['sky'].x - deltaS * (gameSettings.raceSpeed * .3)) % $.field['sky'].tileW;

		if(raceProgress > 95){
			$.field['endline'].x = ($.field['endline'].x - deltaS * (gameSettings.raceSpeed));
			$.field['end'].x = ($.field['end'].x - deltaS * (gameSettings.raceSpeed));
		}

		for(var n=0; n<gameData.race.gates.length; n++){
			var gate = gameData.race.gates[n];
			gate.x = (gate.x - deltaS * (gameSettings.raceSpeed));
			gate.x = gate.x < -200 ? -200 : gate.x;
		}

		for(var n=0; n<gameData.race.gatesOpen.length; n++){
			var gateOpen = gameData.race.gatesOpen[n];
			gateOpen.x = (gateOpen.x - deltaS * (gameSettings.raceSpeed));
			gateOpen.x = gateOpen.x < -200 ? -200 : gateOpen.x;
		}
		
		if(raceProgress > 0 && gameData.race.update == 0){
			updateRacePos(raceProgress);
			gameData.race.update++;
		}else if(raceProgress > 30 && gameData.race.update == 1){
			updateRacePos(raceProgress);
			gameData.race.update++;
		}else if(raceProgress > 90 && gameData.race.update == 2){
			updateRacePos(raceProgress);
			gameData.race.update++;
		}

		for(var n=0; n<horseSettings.length; n++){
			if($.horse['race'+n].delayNum <= 0){
				$.horse['race'+n].delayNum = randomIntFromInterval(10, 50);
				var rangeX = randomIntFromInterval(gameData.race.moveX[0], gameData.race.moveX[1]);
				var rangeY = randomIntFromInterval(gameData.race.moveY[0], gameData.race.moveY[1]);
				$.horse['race'+n].newX = $.horse['race'+n].x + rangeX;
				$.horse['race'+n].newY = $.horse['race'+n].y + rangeY;

				if(raceProgress > 90){
					$.horse['race'+n].newX = gameData.race.pos[n];
				}else if(raceProgress > 0){
					$.horse['race'+n].newX = gameData.race.pos[n] + rangeX;
				}

				$.horse['race'+n].newX = $.horse['race'+n].newX < gameData.race.rangeX[0] ? gameData.race.rangeX[0] : $.horse['race'+n].newX;
				$.horse['race'+n].newX = $.horse['race'+n].newX > gameData.race.rangeX[1] ? gameData.race.rangeX[1] : $.horse['race'+n].newX;
				$.horse['race'+n].newY = $.horse['race'+n].newY < gameData.race.rangeY[0] ? gameData.race.rangeY[0] : $.horse['race'+n].newY;
				$.horse['race'+n].newY = $.horse['race'+n].newY > gameData.race.rangeY[1] ? gameData.race.rangeY[1] : $.horse['race'+n].newY;
			}else{
				$.horse['race'+n].delayNum = ($.horse['race'+n].delayNum - deltaS * (10));
			}

			var newDistance = getDistance($.horse['race'+n].x, $.horse['race'+n].y, $.horse['race'+n].newX, $.horse['race'+n].newY);
			var tweenSpeed = getDuration(newDistance, gameSettings.raceSpeed/10);
			TweenMax.to($.horse['race'+n], tweenSpeed, {x:$.horse['race'+n].newX, y:$.horse['race'+n].newY, overwrite:true});

			updateHorseShadow(n);
		}

		if($.field['endline'].x < gameData.race.endX){
			gameData.race.start = false;
			endRace();
		}
	}else if(gameData.race.update == 0){
		for(var n=0; n<horseSettings.length; n++){
			var randomY = randomIntFromInterval(-2,2);
			if(randomBoolean()){
				randomY = 0;
			}
			$.horse['race'+n].y = $.horse['race'+n].oriY + randomY;
		}
	}

horsesContainer.sortChildren(sortFunction);
}

var sortFunction = function(obj1, obj2) {
	if (obj1.y > obj2.y) { return 1; }
	if (obj1.y < obj2.y) { return -1; }
	return 0;
}

function updateHorseScore(raceProgress){
	var posData = {sX:-170, eX:195, length:0};
	posData.length = posData.eX - posData.sX;
	itemRaceScorePin.y = 32;

	itemRaceScorePin.x = Math.floor(posData.sX + (raceProgress/100 * posData.length));
	itemRaceScorePin.x = itemRaceScorePin.x > posData.eX ? posData.eX : itemRaceScorePin.x;

	var sortArr = [];
	for(var n=0; n<horseSettings.length; n++){
		sortArr.push({index:n, x:$.horse['race'+n].x});
	}

	sortOnObject(sortArr, 'x', true);
	for(var n=0; n<sortArr.length; n++){
		var horseIndex = sortArr[n].index;
		scoreListContainer.setChildIndex($.horse['icon'+horseIndex], scoreListContainer.numChildren-1);
		TweenMax.to($.horse['icon'+horseIndex], .2, {x:gameData.race.lists[n], overwrite:true});
	}
}

/*!
 * 
 * ANIMATE - This is the function that runs to animate objects
 * 
 */
function animateBlink(obj, alpha){
	var alphaNum = alpha == undefined ? .5 : alpha;
	obj.visible = true;
	obj.alpha = alphaNum;
	TweenMax.to(obj, .3, {alpha:1, overwrite:true, onComplete:function(){
		TweenMax.to(obj, .3, {alpha:alphaNum, overwrite:true, onComplete:animateBlink, onCompleteParams:[obj, alpha]});	
	}});
}

function animateCredit(obj, alpha){
	var alphaNum = alpha == undefined ? .5 : alpha;
	obj.alpha = alphaNum;
	TweenMax.to(obj, .3, {alpha:1, overwrite:true, onComplete:function(){
		TweenMax.to(obj, .3, {alpha:0, overwrite:true, onComplete:function(){
			TweenMax.to(obj, .3, {alpha:1, overwrite:true, onComplete:function(){
				TweenMax.to(obj, .3, {alpha:0, overwrite:true});
			}});
		}});
	}});
}

function getDuration(distance, pixelsPerSecond){
	var duration = distance / pixelsPerSecond;
	return duration;
}

/*!
 * 
 * PERCENTAGE - This is the function that runs to create result percentage
 * 
 */
function createPercentage(){
	gameData.percentageArray = [];

	for(var n=0; n<horseSettings.length; n++){
		var percent = horseSettings[n].percent;
		if(!isNaN(percent)){
			if(percent > 0){
				for(var p=0; p<percent; p++){
					gameData.percentageArray.push(n);
				}
			}
		}
	}
}

function getResultOnPercent(){
	shuffle(gameData.percentageArray);

	var orderArr = [];
	for(var n=0; n<horseSettings.length; n++){
		orderArr.push({index:n, percent:0});
	}

	for(var n=0; n<gameData.percentageArray.length/2; n++){
		var horseIndex = gameData.percentageArray[n];
		orderArr[horseIndex].percent++;
	}

	sortOnObject(orderArr,'percent',true);
	var returnArr = [];
	for(var n=0; n<orderArr.length; n++){
		returnArr.push(orderArr[n].index);
	}
	return returnArr;
}

/*!
 * 
 * UPDATE GAME - This is the function that runs to loop game update
 * 
 */
function updateGame(event){
	if(!gameData.paused){
		var deltaS = event.delta / 1000;
		if(gameRaceContainer.visible){
			loopField(deltaS);
		}
	}
}

/*!
 * 
 * OPTIONS - This is the function that runs to toggle options
 * 
 */

function toggleOption(){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
}


/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleSoundMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleSoundInMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleMusicMute(con){
	buttonMusicOff.visible = false;
	buttonMusicOn.visible = false;
	toggleMusicInMute(con);
	if(con){
		buttonMusicOn.visible = true;
	}else{
		buttonMusicOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozCancelFullScreen) { // old firefox method
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action){
	gtag('event','click',{'event_category':'share','event_label':action});
	
	var loc = location.href
	loc = loc.substring(0, loc.lastIndexOf("/") + 1);
	
	var title = '';
	var text = '';
	
	title = shareTitle.replace("[SCORE]", playerData.totalWin);
	text = shareMessage.replace("[SCORE]", playerData.totalWin);
	
	var shareurl = '';
	
	if( action == 'twitter' ) {
		shareurl = 'https://twitter.com/intent/tweet?url='+loc+'&text='+text;
	}else if( action == 'facebook' ){
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(loc+'share.php?desc='+text+'&title='+title+'&url='+loc+'&thumb='+loc+'share.jpg&width=590&height=300');
	}else if( action == 'google' ){
		shareurl = 'https://plus.google.com/share?url='+loc;
	}else if( action == 'whatsapp' ){
		shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
	}
	
	window.open(shareurl);
}
