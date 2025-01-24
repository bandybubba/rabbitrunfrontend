////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.framerate = 50;
	createjs.Ticker.addEventListener("tick", tick);
}

var guide = false;
var canvasContainer, mainContainer, gameContainer, instructionContainer, mapContainer, objectsContainer, resultContainer, scoreContainer, moveContainer, confirmContainer;
var guideline, bg, logo, buttonOk, result, shadowResult, buttonReplay, buttonFacebook, buttonTwitter, buttonWhatsapp, buttonFullscreen, buttonSoundOn, buttonSoundOff;

$.checkbox = {};
$.horse = {};
$.field = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	betAllContainer = new createjs.Container();
	betContainer = new createjs.Container();
	betContentContainer = new createjs.Container();
	betContainerP = new createjs.Container();
	betContentContainerP = new createjs.Container();
	betTypeContainer = new createjs.Container();
	betAmountContainer = new createjs.Container();
	betTotalContainer = new createjs.Container();
	betPlaceContainer = new createjs.Container();
	creditContainer = new createjs.Container();
	betSummaryAllContainer = new createjs.Container();
	betSummaryContainer = new createjs.Container();
	betSummaryContentContainer = new createjs.Container();
	betSummaryContainerP = new createjs.Container();
	betSummaryContentContainerP = new createjs.Container();
	raceResultAllContainer = new createjs.Container();
	raceResultContainer = new createjs.Container();
	raceResultContentContainer = new createjs.Container();
	raceResultContainerP = new createjs.Container();
	raceResultContentContainerP = new createjs.Container();
	raceSummaryAllContainer = new createjs.Container();
	raceSummaryContainer = new createjs.Container();
	raceSummaryContentContainer = new createjs.Container();
	raceSummaryContainerP = new createjs.Container();
	raceSummaryContentContainerP = new createjs.Container();
	raceButtonsContainer = new createjs.Container();
	howAllContainer = new createjs.Container();
	howContainer = new createjs.Container();
	howContainerP = new createjs.Container();
	statusContainer = new createjs.Container();
	horsesContainer = new createjs.Container();
	horsesShadowContainer = new createjs.Container();
	scoreContainer = new createjs.Container();
	scoreMoveContainer = new createjs.Container();
	scoreListContainer = new createjs.Container();
	gameRaceContainer = new createjs.Container();
	gameBetContainer = new createjs.Container();
	raceDisplayContainer = new createjs.Container();
	raceDisplayMoveContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	confirmContainer = new createjs.Container();
	
	
	bg = new createjs.Bitmap(loader.getResult('background'));
	bgP = new createjs.Bitmap(loader.getResult('backgroundP'));
	logo = new createjs.Bitmap(loader.getResult('logo'));
	logoP = new createjs.Bitmap(loader.getResult('logoP'));
	
	buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
	centerReg(buttonStart);
	
	//game
	itemExplain = new createjs.Bitmap(loader.getResult('itemExplain'));
	centerReg(itemExplain);
	itemExplain.y
	howContainer.addChild(itemExplain);

	itemExplainP = new createjs.Bitmap(loader.getResult('itemExplainP'));
	centerReg(itemExplainP);
	howContainerP.addChild(itemExplainP);

	buttonClose = new createjs.Bitmap(loader.getResult('buttonClose'));
	centerReg(buttonClose);

	buttonHow = new createjs.Bitmap(loader.getResult('buttonHow'));
	centerReg(buttonHow);
	howAllContainer.addChild(howContainer, howContainerP, buttonClose);

	itemBgPlace = new createjs.Bitmap(loader.getResult('itemBgPlace'));
	centerReg(itemBgPlace);
	betContainer.addChild(itemBgPlace, betContentContainer);

	itemBgPlaceP = new createjs.Bitmap(loader.getResult('itemBgPlaceP'));
	centerReg(itemBgPlaceP);
	buttonBetLeft = new createjs.Bitmap(loader.getResult('buttonLeft'));
	centerReg(buttonBetLeft);
	buttonBetRight = new createjs.Bitmap(loader.getResult('buttonRight'));
	centerReg(buttonBetRight);
	buttonBetLeft.x = -270;
	buttonBetRight.x = 270;

	betMaskP = new createjs.Shape();	
	betMaskP.graphics.beginFill('red').drawRect(-240, -210, 480, 420);
	betContentContainerP.mask = betMaskP;
	betContainerP.addChild(itemBgPlaceP, betContentContainerP, buttonBetLeft, buttonBetRight);

	betAllContainer.addChild(betContainer, betContainerP);

	itemTypeField = new createjs.Bitmap(loader.getResult('itemFieldLong'));
	centerReg(itemTypeField);
	buttonBetTypeL = new createjs.Bitmap(loader.getResult('buttonArrowL'));
	centerReg(buttonBetTypeL);
	buttonBetTypeR = new createjs.Bitmap(loader.getResult('buttonArrowR'));
	centerReg(buttonBetTypeR);
	buttonBetTypeL.x = -119;
	buttonBetTypeR.x = 119;
	betTypeTxt = new createjs.Text();
	betTypeTxt.font = "20px montheavy_demo";
	betTypeTxt.color = '#fff';
	betTypeTxt.textAlign = "center";
	betTypeTxt.textBaseline='alphabetic';
	betTypeTxt.text = 'WIN';
	betTypeTxt.y = 6;

	betTypeDisplayTxt = new createjs.Text();
	betTypeDisplayTxt.font = "20px montheavy_demo";
	betTypeDisplayTxt.color = '#fff';
	betTypeDisplayTxt.textAlign = "right";
	betTypeDisplayTxt.textBaseline='alphabetic';
	betTypeDisplayTxt.text = textDisplay.betType;
	betTypeDisplayTxt.x = -155;
	betTypeDisplayTxt.y = 6;

	betTypeDisplayPTxt = new createjs.Text();
	betTypeDisplayPTxt.font = "20px montheavy_demo";
	betTypeDisplayPTxt.color = '#fff';
	betTypeDisplayPTxt.textAlign = "center";
	betTypeDisplayPTxt.textBaseline='alphabetic';
	betTypeDisplayPTxt.text = textDisplay.betType;
	betTypeDisplayPTxt.y = -30;

	betTypeContainer.textL = betTypeDisplayTxt;
	betTypeContainer.textP = betTypeDisplayPTxt;
	betTypeContainer.addChild(itemTypeField, betTypeDisplayTxt, betTypeDisplayPTxt, buttonBetTypeL, buttonBetTypeR, betTypeTxt);


	itemBetField = new createjs.Bitmap(loader.getResult('itemField'));
	centerReg(itemBetField);
	buttonBetAmountL = new createjs.Bitmap(loader.getResult('buttonArrowL'));
	centerReg(buttonBetAmountL);
	buttonBetAmountR = new createjs.Bitmap(loader.getResult('buttonArrowR'));
	centerReg(buttonBetAmountR);
	buttonBetAmountL.x = -59;
	buttonBetAmountR.x = 59;
	betAmountTxt = new createjs.Text();
	betAmountTxt.font = "20px montheavy_demo";
	betAmountTxt.color = '#fff';
	betAmountTxt.textAlign = "center";
	betAmountTxt.textBaseline='alphabetic';
	betAmountTxt.text = 'WIN';
	betAmountTxt.y = 6;

	betAmountDisplayTxt = new createjs.Text();
	betAmountDisplayTxt.font = "20px montheavy_demo";
	betAmountDisplayTxt.color = '#fff';
	betAmountDisplayTxt.textAlign = "right";
	betAmountDisplayTxt.textBaseline='alphabetic';
	betAmountDisplayTxt.text = textDisplay.betAmount;
	betAmountDisplayTxt.x = -95;
	betAmountDisplayTxt.y = 6;

	betAmountDisplayPTxt = new createjs.Text();
	betAmountDisplayPTxt.font = "20px montheavy_demo";
	betAmountDisplayPTxt.color = '#fff';
	betAmountDisplayPTxt.textAlign = "center";
	betAmountDisplayPTxt.textBaseline='alphabetic';
	betAmountDisplayPTxt.text = textDisplay.betAmount;
	betAmountDisplayPTxt.y = -30;

	betAmountContainer.textL = betAmountDisplayTxt;
	betAmountContainer.textP = betAmountDisplayPTxt;
	betAmountContainer.addChild(itemBetField, betAmountDisplayTxt, betAmountDisplayPTxt, buttonBetAmountL, buttonBetAmountR, betAmountTxt);

	itemCreditField = new createjs.Bitmap(loader.getResult('itemField'));
	centerReg(itemCreditField);
	creditTxt = new createjs.Text();
	creditTxt.font = "20px montheavy_demo";
	creditTxt.color = '#fff';
	creditTxt.textAlign = "center";
	creditTxt.textBaseline='alphabetic';
	creditTxt.y = 6;

	creditRedTxt = new createjs.Text();
	creditRedTxt.font = "20px montheavy_demo";
	creditRedTxt.color = '#D90000';
	creditRedTxt.textAlign = "center";
	creditRedTxt.textBaseline='alphabetic';
	creditRedTxt.y = 6;

	creditDisplayTxt = new createjs.Text();
	creditDisplayTxt.font = "20px montheavy_demo";
	creditDisplayTxt.color = '#fff';
	creditDisplayTxt.textAlign = "right";
	creditDisplayTxt.textBaseline='alphabetic';
	creditDisplayTxt.text = textDisplay.credits;
	creditDisplayTxt.x = -95;
	creditDisplayTxt.y = 6;

	creditDisplayPTxt = new createjs.Text();
	creditDisplayPTxt.font = "20px montheavy_demo";
	creditDisplayPTxt.color = '#fff';
	creditDisplayPTxt.textAlign = "center";
	creditDisplayPTxt.textBaseline='alphabetic';
	creditDisplayPTxt.text = textDisplay.credits;
	creditDisplayPTxt.y = -30;

	creditContainer.textL = creditDisplayTxt;
	creditContainer.textP = creditDisplayPTxt;
	creditContainer.addChild(itemCreditField, creditDisplayTxt, creditDisplayPTxt, creditTxt, creditRedTxt);

	itemBetTotalField = new createjs.Bitmap(loader.getResult('itemField'));
	centerReg(itemBetTotalField);
	betTotalTxt = new createjs.Text();
	betTotalTxt.font = "20px montheavy_demo";
	betTotalTxt.color = '#fff';
	betTotalTxt.textAlign = "center";
	betTotalTxt.textBaseline='alphabetic';
	betTotalTxt.text = 'WIN';
	betTotalTxt.y = 6;

	betTotalDisplayTxt = new createjs.Text();
	betTotalDisplayTxt.font = "20px montheavy_demo";
	betTotalDisplayTxt.color = '#fff';
	betTotalDisplayTxt.textAlign = "right";
	betTotalDisplayTxt.textBaseline='alphabetic';
	betTotalDisplayTxt.text = textDisplay.totalBet;
	betTotalDisplayTxt.x = -95;
	betTotalDisplayTxt.y = 6;

	betTotalDisplayPTxt = new createjs.Text();
	betTotalDisplayPTxt.font = "20px montheavy_demo";
	betTotalDisplayPTxt.color = '#fff';
	betTotalDisplayPTxt.textAlign = "center";
	betTotalDisplayPTxt.textBaseline='alphabetic';
	betTotalDisplayPTxt.text = textDisplay.totalBet;
	betTotalDisplayPTxt.y = -30;

	betTotalContainer.textL = betTotalDisplayTxt;
	betTotalContainer.textP = betTotalDisplayPTxt;
	betTotalContainer.addChild(itemBetTotalField, betTotalDisplayTxt, betTotalDisplayPTxt, betTotalTxt);

	buttonPlace = new createjs.Bitmap(loader.getResult('buttonPlace'));
	centerReg(buttonPlace);
	buttonPlaceDisabled = new createjs.Bitmap(loader.getResult('buttonPlaceDisabled'));
	centerReg(buttonPlaceDisabled);
	buttonCancelBet = new createjs.Bitmap(loader.getResult('buttonCancelBet'));
	centerReg(buttonCancelBet);
	betPlaceContainer.addChild(buttonPlaceDisabled, buttonCancelBet, buttonPlace);

	itemBgSummary = new createjs.Bitmap(loader.getResult('itemBgPlace'));
	centerReg(itemBgSummary);
	summaryTitleTxt = new createjs.Text();
	summaryTitleTxt.font = "28px montheavy_demo";
	summaryTitleTxt.color = "#fff";
	summaryTitleTxt.textAlign = "center";
	summaryTitleTxt.textBaseline='alphabetic';
	summaryTitleTxt.text = textDisplay.summaryTitle;
	summaryTitleTxt.y = -230;
	betSummaryContainer.addChild(itemBgSummary, summaryTitleTxt, betSummaryContentContainer);

	itemBgSummaryP = new createjs.Bitmap(loader.getResult('itemBgPlaceP'));
	centerReg(itemBgSummaryP);
	summaryTitleTxtP = new createjs.Text();
	summaryTitleTxtP.font = "28px montheavy_demo";
	summaryTitleTxtP.color = "#fff";
	summaryTitleTxtP.textAlign = "center";
	summaryTitleTxtP.textBaseline='alphabetic';
	summaryTitleTxtP.text = textDisplay.summaryTitle;
	summaryTitleTxtP.y = -230;

	buttonSummaryLeft = new createjs.Bitmap(loader.getResult('buttonLeft'));
	centerReg(buttonSummaryLeft);
	buttonSummaryRight = new createjs.Bitmap(loader.getResult('buttonRight'));
	centerReg(buttonSummaryRight);
	buttonSummaryLeft.x = -270;
	buttonSummaryRight.x = 270;

	betMaskP = new createjs.Shape();	
	betMaskP.graphics.beginFill('red').drawRect(-240, -210, 480, 420);
	betSummaryContentContainerP.mask = betMaskP;
	betSummaryContainerP.addChild(itemBgSummaryP, summaryTitleTxtP, betSummaryContentContainerP, buttonSummaryLeft, buttonSummaryRight);

	betSummaryAllContainer.addChild(betSummaryContainer, betSummaryContainerP);

	buttonRace = new createjs.Bitmap(loader.getResult('buttonRace'));
	centerReg(buttonRace);
	buttonRaceDisabled = new createjs.Bitmap(loader.getResult('buttonRaceDisabled'));
	centerReg(buttonRaceDisabled);
	buttonNew = new createjs.Bitmap(loader.getResult('buttonNew'));
	centerReg(buttonNew);

	itemBgResult = new createjs.Bitmap(loader.getResult('itemBgResult'));
	centerReg(itemBgResult);
	raceResultTitleTxt = new createjs.Text();
	raceResultTitleTxt.font = "28px montheavy_demo";
	raceResultTitleTxt.color = "#fff";
	raceResultTitleTxt.textAlign = "center";
	raceResultTitleTxt.textBaseline='alphabetic';
	raceResultTitleTxt.text = textDisplay.raceResultTitle;
	raceResultTitleTxt.y = -230;
	raceResultContainer.addChild(itemBgResult, raceResultTitleTxt, raceResultContentContainer);

	itemBgResultP = new createjs.Bitmap(loader.getResult('itemBgResultP'));
	centerReg(itemBgResultP);
	raceResultTitleTxtP = new createjs.Text();
	raceResultTitleTxtP.font = "28px montheavy_demo";
	raceResultTitleTxtP.color = "#fff";
	raceResultTitleTxtP.textAlign = "center";
	raceResultTitleTxtP.textBaseline='alphabetic';
	raceResultTitleTxtP.text = textDisplay.raceResultTitle;
	raceResultTitleTxtP.y = -90;
	buttonRaceLeft = new createjs.Bitmap(loader.getResult('buttonLeft'));
	centerReg(buttonRaceLeft);
	buttonRaceRight = new createjs.Bitmap(loader.getResult('buttonRight'));
	centerReg(buttonRaceRight);
	buttonRaceLeft.x = -270;
	buttonRaceRight.x = 270;

	betMaskP = new createjs.Shape();
	betMaskP.graphics.beginFill('red').drawRect(-245, -210, 490, 420);
	raceResultContentContainerP.mask = betMaskP;
	raceResultContainerP.addChild(itemBgResultP, raceResultTitleTxtP, raceResultContentContainerP, buttonRaceLeft, buttonRaceRight);

	raceResultAllContainer.addChild(raceResultContainer, raceResultContainerP);

	itemBgSummary = new createjs.Bitmap(loader.getResult('itemBgSummary'));
	centerReg(itemBgSummary);
	raceSummaryTitleTxt = new createjs.Text();
	raceSummaryTitleTxt.font = "28px montheavy_demo";
	raceSummaryTitleTxt.color = "#fff";
	raceSummaryTitleTxt.textAlign = "center";
	raceSummaryTitleTxt.textBaseline='alphabetic';
	raceSummaryTitleTxt.text = textDisplay.raceSummaryTitle;
	raceSummaryTitleTxt.y = -230;

	var newCredits = new createjs.Text();
	newCredits.font = "20px montheavy_demo";
	newCredits.color = '#fff';
	newCredits.textAlign = "left";
	newCredits.textBaseline='alphabetic';
	newCredits.x = -275;
	newCredits.y = 190;

	var newWin = new createjs.Text();
	newWin.font = "20px montheavy_demo";
	newWin.color = '#fff';
	newWin.textAlign = "right";
	newWin.textBaseline='alphabetic';
	newWin.x = 275;
	newWin.y = 190;

	gameData.summaryCredits = newCredits;
	gameData.summaryWin = newWin;
	raceSummaryContainer.addChild(itemBgSummary, raceSummaryTitleTxt, raceSummaryContentContainer, newCredits, newWin);

	itemBgSummaryP = new createjs.Bitmap(loader.getResult('itemBgPlaceP'));
	centerReg(itemBgSummaryP);
	raceSummaryTitleTxtP = new createjs.Text();
	raceSummaryTitleTxtP.font = "28px montheavy_demo";
	raceSummaryTitleTxtP.color = "#fff";
	raceSummaryTitleTxtP.textAlign = "center";
	raceSummaryTitleTxtP.textBaseline='alphabetic';
	raceSummaryTitleTxtP.text = textDisplay.raceSummaryTitle;
	raceSummaryTitleTxtP.y = -230;
	buttonRaceSummaryLeft = new createjs.Bitmap(loader.getResult('buttonLeft'));
	centerReg(buttonRaceSummaryLeft);
	buttonRaceSummaryRight = new createjs.Bitmap(loader.getResult('buttonRight'));
	centerReg(buttonRaceSummaryRight);
	buttonRaceSummaryLeft.x = -270;
	buttonRaceSummaryRight.x = 270;

	betMaskP = new createjs.Shape();	
	betMaskP.graphics.beginFill('red').drawRect(-250, -210, 500, 420);
	raceSummaryContentContainerP.mask = betMaskP;

	var newCreditsP = new createjs.Text();
	newCreditsP.font = "20px montheavy_demo";
	newCreditsP.color = '#fff';
	newCreditsP.textAlign = "left";
	newCreditsP.textBaseline='alphabetic';
	newCreditsP.x = -245;
	newCreditsP.y = 190;

	var newWinP = new createjs.Text();
	newWinP.font = "20px montheavy_demo";
	newWinP.color = '#fff';
	newWinP.textAlign = "right";
	newWinP.textBaseline='alphabetic';
	newWinP.x = 245;
	newWinP.y = 190;

	gameData.summaryCreditsP = newCreditsP;
	gameData.summaryWinP = newWinP;

	raceSummaryContainerP.addChild(itemBgSummaryP, raceSummaryTitleTxtP, raceSummaryContentContainerP, buttonRaceSummaryLeft, buttonRaceSummaryRight, newCreditsP, newWinP);

	raceSummaryAllContainer.addChild(raceSummaryContainer, raceSummaryContainerP);

	buttonPlaceAgain = new createjs.Bitmap(loader.getResult('buttonPlace'));
	centerReg(buttonPlaceAgain);
	buttonContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
	centerReg(buttonContinue);
	raceButtonsContainer.addChild(buttonPlaceAgain, buttonContinue);

	itemRaceScore = new createjs.Bitmap(loader.getResult('itemRaceScore'));
	centerReg(itemRaceScore);
	itemRaceScorePin = new createjs.Bitmap(loader.getResult('itemRaceScorePin'));
	centerReg(itemRaceScorePin);
	scoreMoveContainer.addChild(itemRaceScore, itemRaceScorePin, scoreListContainer);
	scoreContainer.addChild(scoreMoveContainer);

	itemRaceDisplay = new createjs.Bitmap(loader.getResult('itemRaceDisplay'));
	centerReg(itemRaceDisplay);
	itemRaceDisplay.x = -20;

	raceDisplayTxt = new createjs.Text();
	raceDisplayTxt.font = "35px montheavy_demo";
	raceDisplayTxt.color = '#fff';
	raceDisplayTxt.textAlign = "center";
	raceDisplayTxt.textBaseline='alphabetic';
	raceDisplayTxt.x = 25;
	raceDisplayTxt.y = 0;

	fieldDisplayTxt = new createjs.Text();
	fieldDisplayTxt.font = "22px montheavy_demo";
	fieldDisplayTxt.color = '#fff';
	fieldDisplayTxt.textAlign = "center";
	fieldDisplayTxt.textBaseline='alphabetic';
	fieldDisplayTxt.y = 33;
	raceDisplayMoveContainer.addChild(itemRaceDisplay, raceDisplayTxt, fieldDisplayTxt);
	raceDisplayContainer.addChild(raceDisplayMoveContainer);

	dimShape = new createjs.Shape();	
	dimShape.graphics.beginFill('#000').drawRect(-(landscapeSize.w/2), -(portraitSize.h/2), landscapeSize.w, portraitSize.h);
	dimShape.x = landscapeSize.w/2;
	dimShape.y = portraitSize.h/2;
	
	//result
	itemResult = new createjs.Bitmap(loader.getResult('itemResult'));
	itemResultP = new createjs.Bitmap(loader.getResult('itemResultP'));
	
	buttonMain = new createjs.Bitmap(loader.getResult('buttonMain'));
	centerReg(buttonMain);
	
	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "25px montheavy_demo";
	resultShareTxt.color = '#1e4f27';
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = textDisplay.share;
	
	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "50px montheavy_demo";
	resultTitleTxt.color = '#1e4f27';
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = textDisplay.resultTitle;

	resultDescTitleTxt = new createjs.Text();
	resultDescTitleTxt.font = "28px montheavy_demo";
	resultDescTitleTxt.color = '#1e4f27';
	resultDescTitleTxt.textAlign = "center";
	resultDescTitleTxt.textBaseline='alphabetic';
	resultDescTitleTxt.text = textDisplay.resultDescTitle;
	
	resultDescTxt = new createjs.Text();
	resultDescTxt.font = "45px montheavy_demo";
	resultDescTxt.lineHeight = 45;
	resultDescTxt.color = '#f8e02f';
	resultDescTxt.textAlign = "center";
	resultDescTxt.textBaseline='alphabetic';
	resultDescTxt.text = '';

	itemResultScore = new createjs.Bitmap(loader.getResult('itemResultScore'));
	centerReg(itemResultScore);
	
	
	buttonFacebook = new createjs.Bitmap(loader.getResult('buttonFacebook'));
	buttonTwitter = new createjs.Bitmap(loader.getResult('buttonTwitter'));
	buttonWhatsapp = new createjs.Bitmap(loader.getResult('buttonWhatsapp'));
	centerReg(buttonFacebook);
	createHitarea(buttonFacebook);
	centerReg(buttonTwitter);
	createHitarea(buttonTwitter);
	centerReg(buttonWhatsapp);
	createHitarea(buttonWhatsapp);
	
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonMusicOn = new createjs.Bitmap(loader.getResult('buttonMusicOn'));
	centerReg(buttonMusicOn);
	buttonMusicOff = new createjs.Bitmap(loader.getResult('buttonMusicOff'));
	centerReg(buttonMusicOff);
	buttonMusicOn.visible = false;
	
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonMusicOn);
	createHitarea(buttonMusicOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);
	optionsContainer = new createjs.Container();
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit);
	optionsContainer.visible = false;
	
	//exit
	itemExit = new createjs.Bitmap(loader.getResult('itemResult'));
	itemExitP = new createjs.Bitmap(loader.getResult('itemResultP'));
	
	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
	centerReg(buttonConfirm);
	
	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	
	popTitleTxt = new createjs.Text();
	popTitleTxt.font = "50px montheavy_demo";
	popTitleTxt.color = "#1e4f27";
	popTitleTxt.textAlign = "center";
	popTitleTxt.textBaseline='alphabetic';
	popTitleTxt.text = textDisplay.exitTitle;
	
	popDescTxt = new createjs.Text();
	popDescTxt.font = "28px montheavy_demo";
	popDescTxt.color = "#1e4f27";
	popDescTxt.textAlign = "center";
	popDescTxt.textBaseline='alphabetic';
	popDescTxt.text = textDisplay.exitMessage;
	
	confirmContainer.addChild(itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel);
	confirmContainer.visible = false;
	
	if(guide){
		guideline = new createjs.Shape();	
		guideline.graphics.setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
	}
	
	mainContainer.addChild(logo, logoP, buttonStart);
	gameBetContainer.addChild(howAllContainer, buttonHow, buttonClose, betAllContainer, betSummaryAllContainer, raceResultAllContainer, raceSummaryAllContainer, raceButtonsContainer, betTypeContainer, betAmountContainer, creditContainer, betTotalContainer, betPlaceContainer, buttonRaceDisabled, buttonRace, buttonNew);
	gameRaceContainer.addChild();
	gameContainer.addChild(gameRaceContainer, gameBetContainer, scoreContainer, raceDisplayContainer);
	resultContainer.addChild(itemResult, itemResultP, itemResultScore, buttonMain, resultTitleTxt, resultDescTxt, resultDescTitleTxt);
	
	if(shareEnable){
		resultContainer.addChild(resultShareTxt, buttonFacebook, buttonTwitter, buttonWhatsapp);
	}
	
	canvasContainer.addChild(bg, bgP, mainContainer, gameContainer, resultContainer, confirmContainer, optionsContainer, buttonSettings, guideline);
	stage.addChild(canvasContainer);
	
	changeViewport(viewport.isLandscape);
	resizeGameFunc();
}

function changeViewport(isLandscape){
	if(isLandscape){
		//landscape
		stageW=landscapeSize.w;
		stageH=landscapeSize.h;
		contentW = landscapeSize.cW;
		contentH = landscapeSize.cH;
	}else{
		//portrait
		stageW=portraitSize.w;
		stageH=portraitSize.h;
		contentW = portraitSize.cW;
		contentH = portraitSize.cH;
	}
	
	gameCanvas.width = stageW;
	gameCanvas.height = stageH;
	
	canvasW=stageW;
	canvasH=stageH;
	
	changeCanvasViewport();
}

function changeCanvasViewport(){
	if(canvasContainer!=undefined){
		if(viewport.isLandscape){
			bg.visible = true;
			bgP.visible = false;
			
			logo.visible = true;
			logoP.visible = false;
			
			buttonStart.x = canvasW/2;
			buttonStart.y = canvasH/100 * 76;
			
			//game
			
			//result
			itemResult.visible = true;
			itemResultP.visible = false;
			
			buttonFacebook.x = canvasW/100*43;
			buttonFacebook.y = canvasH/100*57;
			buttonTwitter.x = canvasW/2;
			buttonTwitter.y = canvasH/100*57;
			buttonWhatsapp.x = canvasW/100*57;
			buttonWhatsapp.y = canvasH/100*57;
			
			buttonMain.x = canvasW/2;
			buttonMain.y = canvasH/100 * 68;
	
			resultShareTxt.x = canvasW/2;
			resultShareTxt.y = canvasH/100 * 52;
	
			resultTitleTxt.x = canvasW/2;
			resultTitleTxt.y = canvasH/100 * 32;
	
			resultDescTxt.x = canvasW/2;
			resultDescTxt.y = canvasH/100 * 45;

			resultDescTitleTxt.x = canvasW/2;
			resultDescTitleTxt.y = canvasH/100 * 37;

			itemResultScore.x = canvasW/2;
			itemResultScore.y = canvasH/100 * 43;
			
			//exit
			itemExit.visible = true;
			itemExitP.visible = false;

			buttonConfirm.x = (canvasW/2);
			buttonConfirm.y = (canvasH/100 * 56);
			
			buttonCancel.x = (canvasW/2);
			buttonCancel.y = (canvasH/100 * 68);

			popTitleTxt.x = canvasW/2;
			popTitleTxt.y = canvasH/100 * 32;
			
			popDescTxt.x = canvasW/2;
			popDescTxt.y = canvasH/100 * 42;
		}else{
			bg.visible = false;
			bgP.visible = true;
			
			logo.visible = false;
			logoP.visible = true;
			
			buttonStart.x = canvasW/2;
			buttonStart.y = canvasH/100 * 80;
			
			//game
			
			//result
			itemResult.visible = false;
			itemResultP.visible = true;
			
			buttonFacebook.x = canvasW/100*39;
			buttonFacebook.y = canvasH/100*55;
			buttonTwitter.x = canvasW/2;
			buttonTwitter.y = canvasH/100*55;
			buttonWhatsapp.x = canvasW/100*61;
			buttonWhatsapp.y = canvasH/100*55;
			
			buttonMain.x = canvasW/2;
			buttonMain.y = canvasH/100 * 63;
	
			resultShareTxt.x = canvasW/2;
			resultShareTxt.y = canvasH/100 * 51;
	
			resultTitleTxt.x = canvasW/2;
			resultTitleTxt.y = canvasH/100 * 37;
	
			resultDescTxt.x = canvasW/2;
			resultDescTxt.y = canvasH/100 * 45.5;

			resultDescTitleTxt.x = canvasW/2;
			resultDescTitleTxt.y = canvasH/100 * 39.5;

			itemResultScore.x = canvasW/2;
			itemResultScore.y = canvasH/100 * 44;
			
			//exit
			itemExit.visible = false;
			itemExitP.visible = true;

			buttonConfirm.x = (canvasW/2);
			buttonConfirm.y = (canvasH/100 * 54);
			
			buttonCancel.x = (canvasW/2);
			buttonCancel.y = (canvasH/100 * 63);

			popTitleTxt.x = canvasW/2;
			popTitleTxt.y = canvasH/100 * 37;
			
			popDescTxt.x = canvasW/2;
			popDescTxt.y = canvasH/100 * 43;
		}
	}
}



/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		
		buttonSettings.x = (canvasW - offset.x) - 50;
		buttonSettings.y = offset.y + 45;
		
		var distanceNum = 60;
		var nextCount = 0;
		if(curPage != 'game'){
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;

			if (typeof buttonMusicOn != "undefined") {
				buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				buttonMusicOn.x = buttonMusicOff.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				nextCount = 2;
			}else{
				nextCount = 1;
			}
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));
		}else{
			buttonExit.visible = true;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;

			if (typeof buttonMusicOn != "undefined") {
				buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				buttonMusicOn.x = buttonMusicOff.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				nextCount = 2;
			}else{
				nextCount = 1;
			}
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));
			
			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*(nextCount+2));
			
			resizeGameLayout();
		}
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame(event);
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	if(obj.image == undefined){
		return;
	}

	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));	
}