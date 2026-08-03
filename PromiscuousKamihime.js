// ==UserScript==
// @name         Promiscuous kamihime
// @description  Unlock hidden potential, satisfy every deep craving.
// @version      0.8964
// @author       Kaneshiro Takeshi

// @match        https://play.games.dmm.co.jp/game/kamipror
// @match        https://play.games.dmm.com/game/kamipro
// @match        https://www.johren.games/games/kamihime-zh-r/play/*
// @match        https://www.johren.games/games/kamihime-zh-g/play/*
// @match        https://www.ero-labs.com/zh/cloud_game.html?id=53&connect_type=1&connection_id=36
// @match        https://www.ero-labs.com/en/cloud_game.html?id=53&connect_type=1&connection_id=35
// @match        https://www.bana-bana.com/game/kamihime
// @match        https://www.nutaku.net/games/kamihime-r/play/*
// @match        https://www.nutaku.net/es/games/kamihime-r/play/*
// @match        https://www.nutaku.net/fr/games/kamihime-r/play/*
// @match        https://www.nutaku.net/de/games/kamihime-r/play/*
// @match        https://www.nutaku.net/pl/games/kamihime-r/play/*
// @match        https://www.nutaku.net/cn/games/kamihime-r/play/*
// @match        https://www.nutaku.net/zh/games/kamihime-r/play/*
// @match        https://www.nutaku.net/jp/games/kamihime-r/play/*

// @match        https://r.kamihimeproject.net/front/cocos2d-proj/components-pc/top/app.html
// @match        https://g.kamihimeproject.net/front/cocos2d-proj/components-pc/top/app.html
// @match        https://gskh-api-r-zh.prod.skh.johren.games/front/cocos2d-proj/components-pc/top/app.html
// @match        https://gskh-api-g-zh.prod.skh.johren.games/front/cocos2d-proj/components-pc/top/app.html
// @match        https://d2bqgmeis0s2xb.cloudfront.net/front/cocos2d-proj/components-pc/top/app.html
// @match        https://du5e2cube3h3c.cloudfront.net/front/cocos2d-proj/components-pc/top/app.html
// @match        https://d39cq07z7xwhr4.cloudfront.net/front/cocos2d-proj/components-pc/top/app.html

// @match        https://r.kamihimeproject.net/front/cocos2d-proj/components-pc/game/app.html
// @match        https://g.kamihimeproject.net/front/cocos2d-proj/components-pc/game/app.html
// @match        https://gskh-api-r-zh.prod.skh.johren.games/front/cocos2d-proj/components-pc/game/app.html
// @match        https://gskh-api-g-zh.prod.skh.johren.games/front/cocos2d-proj/components-pc/game/app.html
// @match        https://d2bqgmeis0s2xb.cloudfront.net/front/cocos2d-proj/components-pc/game/app.html
// @match        https://du5e2cube3h3c.cloudfront.net/front/cocos2d-proj/components-pc/game/app.html
// @match        https://d39cq07z7xwhr4.cloudfront.net/front/cocos2d-proj/components-pc/game/app.html
// @match        https://gnkh-api-r.prod.nkh.dmmgames.com/front/cocos2d-proj/components-pc/game/app.html

// @match        https://r.kamihimeproject.net/front/cocos2d-proj/components-pc/scenario/tyrano.html
// @match        https://g.kamihimeproject.net/front/cocos2d-proj/components-pc/scenario/tyrano.html
// @match        https://gskh-api-r-zh.prod.skh.johren.games/front/cocos2d-proj/components-pc/scenario/tyrano.html
// @match        https://gskh-api-g-zh.prod.skh.johren.games/front/cocos2d-proj/components-pc/scenario/tyrano.html
// @match        https://d2bqgmeis0s2xb.cloudfront.net/front/cocos2d-proj/components-pc/scenario/tyrano.html
// @match        https://du5e2cube3h3c.cloudfront.net/front/cocos2d-proj/components-pc/scenario/tyrano.html
// @match        https://d39cq07z7xwhr4.cloudfront.net/front/cocos2d-proj/components-pc/scenario/tyrano.html
// @match        https://gnkh-api-r.prod.nkh.dmmgames.com/front/cocos2d-proj/components-pc/scenario/tyrano.html

// @match        https://gnkh-api-r.prod.nkh.dmmgames.com/front/cocos2d-proj/components-pc/scenario/anim-player.html
// @match        https://r.kamihimeproject.net/front/cocos2d-proj/components-pc/scenario/anim-player.html
// @match        https://g.kamihimeproject.net/front/cocos2d-proj/components-pc/scenario/anim-player.html
// @match        https://gskh-api-r-zh.prod.skh.johren.games/front/cocos2d-proj/components-pc/scenario/anim-player.html
// @match        https://gskh-api-g-zh.prod.skh.johren.games/front/cocos2d-proj/components-pc/scenario/anim-player.html
// @match        https://d2bqgmeis0s2xb.cloudfront.net/front/cocos2d-proj/components-pc/scenario/anim-player.html
// @match        https://du5e2cube3h3c.cloudfront.net/front/cocos2d-proj/components-pc/scenario/anim-player.html
// @match        https://d39cq07z7xwhr4.cloudfront.net/front/cocos2d-proj/components-pc/scenario/anim-player.html
// @match        https://gnkh-api-r.prod.nkh.dmmgames.com/front/cocos2d-proj/components-pc/scenario/anim-player.html

// @match        https://osapi.dmm.com/gadgets/ifr*
// @match        https://osapi.johren.net/gadgets/ifr*
// @match        https://d2bqgmeis0s2xb.cloudfront.net/*
// @match        https://du5e2cube3h3c.cloudfront.net/*
// @match        https://d39cq07z7xwhr4.cloudfront.net/*
// @match        https://gnkh-api-r.prod.nkh.dmmgames.com/front/nutaku_main_pc.html*

// @require      https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// ==/UserScript==

/** 
 * 標記原網頁的變數給 Tampermonkey
 */
/* global cc */
/* global ccui */
/* global kh */
/* global khutil */
/* global TYRANO */
/* global PurgeRule */
/* global Q */
/* global fflate */

//都跑在Tampermonkey上了, 應該不需要再次IIFE吧
//(function() {
onDocumentEnd();
/**
 * @description 網頁載入後，程式的起點。根據目前的網域名稱判斷應載入哪一個模組。
 */
function onDocumentEnd() {
	try {
		const hostname = window.location.hostname;
		const pathname = window.location.pathname;
		// 網站入口
		const PORTAL_DOMAINS = [
			"www.johren.games", 
			"www.bana-bana.com", 
			"www.ero-labs.com", 
			"www.nutaku.net", 
			"play.games.dmm.co.jp",
			"play.games.dmm.com"
		];
		//判斷是哪個頁面正在載入程式
		if (PORTAL_DOMAINS.includes(hostname)) {
			onPortal();//入口網站頁面
		} else if (pathname === "/front/cocos2d-proj/components-pc/top/app.html") {
			onGameTop();//內嵌遊戲起始頁
		} else if (pathname === "/front/cocos2d-proj/components-pc/game/app.html") {
			onGameApp();//內嵌遊戲頁面
		} else if (pathname === "/front/cocos2d-proj/components-pc/scenario/tyrano.html") {
			onGameScenario();//遊戲劇情頁面
		} else if (pathname === "/front/cocos2d-proj/components-pc/scenario/anim-player.html") {
			onLoveScenes();//寢室頁面
		} else if (pathname === "/front/index.html") {
			console.log("FRONT");//遊戲禁止頁面(維修,倒閉,封鎖)
		} else {
			// 遊戲框架入口
			const GAME_FRAME_DOMAINS = [
				"https://gnkh-api-r.prod.nkh.dmmgames.com/front/nutaku_main_pc.html",
				"https://d2bqgmeis0s2xb.cloudfront.net/",
				"https://d39cq07z7xwhr4.cloudfront.net/",
				"https://du5e2cube3h3c.cloudfront.net/",
				"https://osapi.dmm.com/gadgets/ifr",
				"https://osapi.johren.net/gadgets/ifr"
			];
			const cleanCurrentUrl = window.location.origin + pathname;
			if (GAME_FRAME_DOMAINS.includes(cleanCurrentUrl)) {
				onGameFrame();//遊戲框架頁面
			} else{
				console.log("Unknown frame: " + cleanCurrentUrl);
			}
		}
	} catch (error) {
		console.log("onDocumentEnd" + error);
	}
}
/**
 * @description 遊戲入口網站頁面程式
 */
function onPortal() {
	init();
	/**
	 * @description 遊戲入口網站載入事件
	 */
	function init() {
		scrollToGameFrame();//網頁滾動至遊戲操作介面
	}
	/**
	 * @description 自動滾動至遊戲介面
	 */
	function scrollToGameFrame() {
		try {
			let attempts = 0;
			const maxAttempts = 20;
			const scrollInterval = setInterval(() => {
				const gameElement = document.getElementById('game_frame');
				attempts++;
				if (gameElement) {
					clearInterval(scrollInterval);
					const rect = gameElement.getBoundingClientRect();
					const absoluteTop = rect.top + window.scrollY;
					const offset = 18;
					window.scrollTo({ top: absoluteTop + offset, behavior: 'smooth' });
				} else if (attempts >= maxAttempts) {
					clearInterval(scrollInterval);//Timeout
				}
			}, 1000);
		} catch (error) {
			console.log(error);
		}
	}
}
/**
 * @description 遊戲起始頁，使用 cocos2d 引擎
 */
function onGameTop() {
	init();
	/**
	 * @description 初始化遊戲起始頁
	 */
	function init() {
		setTimeout(onGameTopLoad, 500);
	}
	/**
	 * @description 檢查遊戲起始頁是否載入完成，等待建立完成
	 */
	function onGameTopLoad() {
		try {
			if (!cc || !cc.director || !cc.director._runningScene) {
				setTimeout(onGameTopLoad, 500);
				return;
			}
			debugLog("Game Start page OK");
			setTimeout(executeGameStart, 2000);
		} catch(error) {
			debugLog("onGameTopLoad: " + error);
		}
	}
	/**
	 * @description 自動點擊開始遊戲
	 */
	async function executeGameStart() {
		try{
			const currentScene = cc?.director?.getRunningScene();
			if (currentScene) {
				const btnGameStart = currentScene.seekWidgetByName("top_btn_gamestart_mouse_over");
				if (btnGameStart) {
					await simulateTouch(btnGameStart);
				} else {
					setTimeout(executeGameStart, 1000);
				}
			} else {
				setTimeout(executeGameStart, 1000);
			}
		} catch(error) {
			debugLog("executeGameStart: " + error);
		}
	}
	/**
	 * @description 傳送 LOG 文字至網站頁面顯示
	 * @param {string} msg - 欲記錄的訊息
	 */
	function debugLog(msg) {
		window.parent.postMessage({type:"game_log",message: msg},"*");
	}
	/**
	 * @description 模擬按鈕點擊事件
	 * @param {Object} button - 要觸發點擊的按鈕元件
	 */
	async function simulateTouch(button) {
		try {
			const mockTouch = {
				getLocation: () => ({ x: 0, y: 0 }),
				getStartLocation: () => ({ x: 0, y: 0 }),
				getID: () => 0
			};
			const mockEvent = {};
			button._pushDownEvent(mockTouch, mockEvent);
			button._releaseUpEvent(mockTouch, mockEvent);
		} catch (error) {
			debugLog("simulateTouch: " + error);
		}
	}
}
/**
 * @description 遊戲框架頁面邏輯，包含建立 UI 面板與接收外部訊號
 */
function onGameFrame() {
	/** @type {HTMLElement[]} 要鎖定的任務動作按鈕 */
	let _actionButtonsToLock = [];
	/** @type {HTMLInputElement|null} 場景顯示文字框 */
	let _stateSceneInput = null;
	/** @type {HTMLInputElement|null} 關卡顯示文字框 */
	let _stateQuestInput = null;
	/** @type {HTMLInputElement|null} 回合顯示文字框 */
	let _stateTurnInput = null;
	/** @type {HTMLElement|null} 除錯區容器 */
	let _debugWrapper = null;
	/** @type {HTMLElement|null} 功能介面主體容器 */
	let _uiContainer = null;
	/** @type {HTMLElement|null} LOG 區塊容器 */
	let _debugLogBox = null;
	/** @type {HTMLElement|null} 顯示除錯拖曳區 */
	let _dragTitle1 = null;
	/** @type {HTMLElement|null} 功能介面拖曳區 */
	let _dragTitle2 = null;
	/** @type {HTMLElement|null} Connecting 的顯示元件 */
	let _shieldElement = null;
	/** @type {HTMLInputElement|null} 測試訊息輸入框 */
	let _firebaseMsgInput = null;
	/** @type {HTMLSelectElement|null} 機器人選單 */
	let _autonomousRobotSelect = null;

	init();// 程式進入點
	/**
	 * @description 執行遊戲框架的初始化步驟
	 */
	async function init() {
		await buildDebugLogPanel();//建立面板1,除錯LOG
		await buildControlPanel();//建立面板2,遊戲功能
		await setupGameMessageListener();//接收來至遊戲的訊號
		await initConnectingObserver();//監聽Connecting畫面
		await hideConnectingScreen();//不顯示Connecting畫面功能初始化
		if (GM_getValue("noConnectingEnabled", false)) toggleConnectingKiller(true);
		const savedSize = GM_getValue("gameScreenSize", "960x640"); // 預設值為 960x640
		const [width, height] = savedSize.split('x'); // 將 "960x640" 拆解為寬度和高度
		if (width !== 960 || height !== 640) {
			await adjustGameScreenSize(`${width}px`, `${height}px`);
		}
		await updateUIPositions();//設定面板位置
		//window.addEventListener("resize", updateUIPositions);
	}
	/**
	 * @description 接收來自遊戲內部的 postMessage 訊號
	 */
	async function setupGameMessageListener() {
		try {
			//接收來自遊戲的訊號
			window.addEventListener("message", e => {
				if (!e || !e.data) return;
				switch (e.data.type) {
					case "action_lock":{
						const isLocked = e.data.lock;
						_actionButtonsToLock.forEach(btn => {
							btn.disabled = isLocked;//停用/啟用按鈕
							if (isLocked) {
								btn.style.opacity = "0.4";//變灰暗
								btn.style.pointerEvents = "none";//徹底無法點擊
							} else {
								btn.style.opacity = "1";//恢復亮度
								btn.style.pointerEvents = "auto";//恢復點擊
							}
						});
						break;}
					case "game_scene":{
						if (_stateSceneInput) {_stateSceneInput.value = e.data.message;}
						break;}
					case "game_quest":{
						if (_stateQuestInput) {_stateQuestInput.value = e.data.message;}
						break;}
					case "game_turn":{
						if (_stateTurnInput) {_stateTurnInput.value = e.data.message;}
						break;}
					case "game_log":{
						let line = document.createElement("div");
						line.textContent = e.data.message;
						_debugLogBox.appendChild(line);
						//超過200行自動移除舊行
						while (_debugLogBox.children.length > 200) {
							_debugLogBox.removeChild(_debugLogBox.firstChild);
						}
						//滾動至底部
						_debugLogBox.scrollTop = _debugLogBox.scrollHeight;
						break;}
					case "game_bot_interrupt":{
						if (_autonomousRobotSelect) {
							_autonomousRobotSelect.value = "none"; 
							GM_setValue("autonomousRobot", "none"); 
						}
						break;}
					default:
						break;
				}
			});
		} catch (error) {
			_debugLogBox.appendChild(document.createTextNode("\n" + error));
		}
	}
	/**
	 * @description 寫入訊息至除錯面板
	 * @param {string} message - 要顯示的文字
	 */
	function appendDebugLog(message) {
		let line = document.createElement("div");
		line.textContent = message;
		_debugLogBox.appendChild(line);
	}
	/**
	 * @description 建立 LOG 顯示區面板
	 * @returns {Promise<void>}
	 */
	async function buildDebugLogPanel() {
		try {
			_debugWrapper = document.createElement("div");
			_debugWrapper.style.cssText = `
				position: fixed; z-index: 999999;
				width: 1000px; height: 98px; max-width: calc(100vw - 24px);
				display: flex; background: rgba(18, 18, 22, 0.94); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
				border: 1px solid rgba(255, 200, 0, 0.35); border-radius: 8px;
				box-shadow: 0 8px 32px rgba(0,0,0,0.5);
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
				box-sizing: border-box; overflow: hidden;
			`;
			document.body.appendChild(_debugWrapper);
			//控制台欄位
			const debugRightPanel = document.createElement("div");
			debugRightPanel.style.cssText = `
				width: 160px; height: 100%; padding: 6px 12px;
				display: flex; flex-direction: column; justify-content: space-between;
				box-sizing: border-box; background: rgba(25, 25, 30, 0.4);
				border-right: 1px solid rgba(255, 200, 0, 0.2);
				user-select: none;
			`;
			_debugWrapper.appendChild(debugRightPanel);
			//Log區欄位
			_debugLogBox = document.createElement("div");
			_debugLogBox.style.cssText = `
				flex: 1; height: 100%; min-width: 0;
				color: #e0e0e3; font-family: 'SF Mono', Monaco, Consolas, 'Courier New', monospace; font-size: 11px;
				overflow-y: auto; padding: 6px 12px;
				line-height: 1.4; white-space: pre-wrap; box-sizing: border-box;
			`;
			_debugWrapper.appendChild(_debugLogBox);

			const resizer = document.createElement("div");
			resizer.style.cssText = `
				position: absolute; right: 0; bottom: 0; width: 14px; height: 14px;
				cursor: se-resize; z-index: 1000000;
				background: linear-gradient(135deg, transparent 50%, rgba(255, 200, 0, 0.4) 50%);
				border-bottom-right-radius: 8px;
			`;
			_debugWrapper.appendChild(resizer);

			resizer.addEventListener("mousedown", (e) => {
				e.preventDefault();
				e.stopPropagation();
				const startWidth = _debugWrapper.offsetWidth;
				const startHeight = _debugWrapper.offsetHeight;
				const startX = e.clientX;
				const startY = e.clientY;
				const isBottomDocked = (_debugWrapper.style.bottom === "0px");
				function onMouseMove(me) {
					const deltaX = me.clientX - startX;
					const deltaY = me.clientY - startY;
					_debugWrapper.style.width = Math.max(320, startWidth + deltaX) + "px";
					if (isBottomDocked) {
						_debugWrapper.style.height = Math.max(60, startHeight - deltaY) + "px";
					} else {
						_debugWrapper.style.height = Math.max(60, startHeight + deltaY) + "px";
					}
				}
				function onMouseUp() {
					document.removeEventListener("mousemove", onMouseMove);
					document.removeEventListener("mouseup", onMouseUp);
				}
				document.addEventListener("mousemove", onMouseMove);
				document.addEventListener("mouseup", onMouseUp);
			});
			//雙擊左欄自動全選文字
			_debugLogBox.addEventListener("dblclick", () => {
				const range = document.createRange();
				range.selectNodeContents(_debugLogBox);
				const selection = window.getSelection();
				selection.removeAllRanges();
				selection.addRange(range);
			});
			//標題
			const rightRow1 = document.createElement("div");
			rightRow1.style.cssText = `display: flex; align-items: center; justify-content: space-between; width: 100%;`;
			_dragTitle1 = document.createElement("div");
			_dragTitle1.innerHTML = "CONSOLE";
			_dragTitle1.style.cssText = `color: #FFC800; font-size: 10px; font-weight: 800; letter-spacing: 0.5px;cursor: move;`;
			rightRow1.appendChild(_dragTitle1);
			//拖曳功能
			makeDraggable(rightRow1, _debugWrapper);

			debugRightPanel.appendChild(rightRow1);
			//檢視傳輸開關
			const rightRow2 = document.createElement("div");
			rightRow2.style.cssText = `display: flex; align-items: center; justify-content: flex-start; width: 100%; gap: 2px;`;
			const packetLogCheckbox = document.createElement("input");
			packetLogCheckbox.type = "checkbox";
			packetLogCheckbox.checked = GM_getValue("isPacketLoggingEnabled", false);
			const packetLogLabel = createToggleSwitch(packetLogCheckbox, "傳輸", function() {
				GM_setValue("isPacketLoggingEnabled", this.checked);
			});
			//微調開關尺寸與外觀
			packetLogLabel.style.fontSize = "9px";
			packetLogLabel.style.color = "#ccc";
			packetLogLabel.style.gap = "6px";
			packetLogLabel.style.width = "auto";
			packetLogLabel.style.height = "auto";
			rightRow2.appendChild(packetLogLabel);
			//檢視戰鬥開關
			const battleLogCheckbox = document.createElement("input");
			battleLogCheckbox.type = "checkbox";
			battleLogCheckbox.checked = GM_getValue("isBattleLoggingEnabled", false);
			const battleLogLabel = createToggleSwitch(battleLogCheckbox, "戰鬥", function() {
				GM_setValue("isBattleLoggingEnabled", this.checked);
			});
			//微調開關尺寸與外觀
			battleLogLabel.style.fontSize = "9px";
			battleLogLabel.style.color = "#ccc";
			battleLogLabel.style.gap = "6px";
			battleLogLabel.style.width = "auto";
			battleLogLabel.style.height = "auto";
			rightRow2.appendChild(battleLogLabel);

			debugRightPanel.appendChild(rightRow2);
			//清空LOG按鈕
			const rightRow3 = document.createElement("div");
			rightRow3.style.cssText = `display: flex; width: 100%;`;
			const clearLogBtn = document.createElement("button");
			clearLogBtn.textContent = "Clear Log";
			clearLogBtn.style.cssText = `
				width: 100%; padding: 5px 0; cursor: pointer;
				background: rgba(255, 159, 10, 0.04);
				color: #ffb340;
				border: 1px solid rgba(255, 159, 10, 0.25);
				border-radius: 5px;
				font-size: 10px;
				font-weight: 700;
				letter-spacing: 0.8px;
				font-family: inherit;
				text-align: center;
				box-sizing: border-box;
				transition: all 0.2s ease;
				line-height: 1.2;
			`;
			clearLogBtn.onmouseover = () => {
				clearLogBtn.style.background = "rgba(255, 159, 10, 0.15)";
				clearLogBtn.style.borderColor = "#ff9f0a";
				clearLogBtn.style.color = "#ffffff";
			};
			clearLogBtn.onmouseout = () => {
				clearLogBtn.style.background = "rgba(255, 159, 10, 0.04)";
				clearLogBtn.style.borderColor = "rgba(255, 159, 10, 0.25)";
				clearLogBtn.style.color = "#ffb340";
			};
			clearLogBtn.onclick = () => { _debugLogBox.innerHTML = ""; };
			rightRow3.appendChild(clearLogBtn);
			debugRightPanel.appendChild(rightRow3);
		} catch (error) {
			console.log("buildDebugLogPanel: " + error);
		}
	}
	/**
	 * @description 建立遊戲功能操作區面板
	 */
	async function buildControlPanel() {
		try {
			_uiContainer = document.createElement("div");
			_uiContainer.setAttribute("style", "position:fixed; z-index:99999; background:rgba(18,18,22,0.94); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); padding:8px; border-radius:10px; color:#f0f0f0; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size:11px; display:flex; flex-direction:row; gap:0px; box-shadow: 0 8px 32px rgba(0,0,0,0.5); border: 1px solid rgba(255,200,0,0.35); box-sizing:border-box;");
			document.body.appendChild(_uiContainer);
			//左側主面板容器
			const mainPanel = document.createElement("div");
			mainPanel.setAttribute("style", "display:flex; flex-direction:column; gap:10px; width:124px; box-sizing:border-box;");
			_uiContainer.appendChild(mainPanel);
			//右側進階延伸區塊
			const advPanel = document.createElement("div");
			advPanel.setAttribute("style", "display:none; flex-direction:column; gap:10px; width:136px; box-sizing:border-box; border-left:1px solid rgba(255,200,0,0.2); margin-left:10px; padding-left:10px;");
			_uiContainer.appendChild(advPanel);
			//右側蘿蔔延伸區塊
			const robotPanel = document.createElement("div");
			robotPanel.setAttribute("style", "display:none; flex-direction:column; gap:10px; width:136px; box-sizing:border-box; border-left:1px solid rgba(255,200,0,0.2); margin-left:10px; padding-left:10px;");
			_uiContainer.appendChild(robotPanel);
			/**
			 * @description 統一的區塊標題生成函式
			 * @param {string} titleText - 標題名稱
			 * @returns {HTMLElement} 標題元素
			 */
			function createSectionHeader(titleText) {
				const header = document.createElement("div");
				header.setAttribute("style", "font-size:10px; color:#FFC800; font-weight:700; border-bottom:1px solid rgba(255,200,0,0.2); padding-bottom:3px; margin-bottom:4px; letter-spacing:1px; display:flex; align-items:center; gap:4px;");
				header.innerHTML = titleText;
				return header;
			}
			/** @constant {string} 統一的下拉選單欄位建構樣式 */
			const rowStyle = "display:flex; align-items:center; justify-content: space-between; width:100%; box-sizing:border-box; height: 22px;";
			/** @constant {string} 下拉選單元件樣式 */
			const selectStyle = "padding: 2px 4px; border: 1px solid rgba(255,200,0,0.25); border-radius: 4px; background: rgba(30,30,35,0.8); color: #fff; font-size: 11px; cursor: pointer; outline: none; font-family: inherit; width: 62px; text-align: center; transition: all 0.2s;";
			/**
			 * @description 套用下拉選單 Hover 效果
			 * @param {HTMLElement} selectEl 
			 */
			function applySelectHoverEffect(selectEl) {
				selectEl.onmouseover = function() { this.style.borderColor = "#FFC800"; this.style.boxShadow = "0 0 6px rgba(255,200,0,0.2)"; };
				selectEl.onmouseout = function() { this.style.borderColor = "rgba(255,200,0,0.25)"; this.style.boxShadow = "none"; };
			}
			/** @constant {string} 統一的按鈕樣式 */
			const baseBtnStyle = "padding:5px 0; cursor: pointer; background: linear-gradient(180deg, #2a2a32 0%, #1a1a20 100%); color:#e0e0e0; border:1px solid rgba(255,200,0,0.25); border-radius:4px; font-weight:600; text-align:center; box-sizing:border-box; font-family:inherit; font-size:11px; transition: all 0.2s;";
			/**
			 * @description 套用按鈕 Hover 效果
			 * @param {HTMLElement} btnEl 
			 * @param {boolean} [isPrimary=false] - 是否為主要按鈕
			 */
			function applyButtonHoverEffect(btnEl, isPrimary = false) {
				btnEl.onmouseover = function() {
					this.style.background = isPrimary ? "linear-gradient(135deg, #FFE066, #FF9500)" : "linear-gradient(180deg, #353540 0%, #202028 100%)";
					this.style.borderColor = "#FFC800";
					this.style.color = isPrimary ? "#000" : "#fff";
					this.style.boxShadow = "0 0 8px rgba(255,200,0,0.4)";
				};
				btnEl.onmouseout = function() {
					this.style.background = isPrimary ? "linear-gradient(135deg, #FFC800, #FF9500)" : "linear-gradient(180deg, #2a2a32 0%, #1a1a20 100%)";
					this.style.borderColor = isPrimary ? "none" : "rgba(255,200,0,0.25)";
					this.style.color = isPrimary ? "#111" : "#e0e0e0";
					this.style.boxShadow = isPrimary ? "0 0 8px rgba(255,200,0,0.3)" : "none";
				};
			}
			//速度區
			const speedArea = document.createElement("div");
			_dragTitle2 = createSectionHeader("SPEED");
			speedArea.appendChild(_dragTitle2);
			//拖曳功能
			makeDraggable(_dragTitle2, _uiContainer);
			//引擎速度
			const globalScaleLabel = document.createElement("label");
			globalScaleLabel.setAttribute("style", rowStyle);
			globalScaleLabel.appendChild(document.createTextNode("引擎速度"));
			const globalScaleSelect = document.createElement("select");
			globalScaleSelect.setAttribute("style", selectStyle);
			applySelectHoverEffect(globalScaleSelect);
			const scaleOptions = [1.0, 2.0, 8.0, 14.0, 20.0, 100.0];
			const currentSavedScale = GM_getValue("gameTimeScale", 1.0);
			scaleOptions.forEach(function(value) {
				const opt = document.createElement("option"); opt.value = value; opt.text = value;
				if (value === currentSavedScale) opt.selected = true;
				globalScaleSelect.appendChild(opt);
			});
			globalScaleLabel.appendChild(globalScaleSelect);
			speedArea.appendChild(globalScaleLabel);
			globalScaleSelect.onchange = function() {GM_setValue("gameTimeScale", parseFloat(this.value));};
			//FPS 選單,越低的FPS,CPU使用率越低
			const fpsLabel = document.createElement("label");
			fpsLabel.setAttribute("style", rowStyle);
			fpsLabel.appendChild(document.createTextNode("FPS"));
			const fpsSelect = document.createElement("select");
			fpsSelect.setAttribute("style", selectStyle);
			applySelectHoverEffect(fpsSelect);
			const fpsOptions = [144,60,45,30,20,15,10,5];
			const currentSavedFps = GM_getValue("targetFps", 30);
			fpsOptions.forEach(function(value) {
				const opt = document.createElement("option"); opt.value = value; opt.text = value;
				if (value === currentSavedFps) opt.selected = true;
				fpsSelect.appendChild(opt);
			});
			fpsLabel.appendChild(fpsSelect);
			speedArea.appendChild(fpsLabel);
			fpsSelect.onchange = function() {GM_setValue("targetFps", parseInt(this.value, 10));};
			//Http的post延遲,原本預設延遲為100ms
			const httpDelayLabel = document.createElement("label");
			httpDelayLabel.setAttribute("style", rowStyle);
			httpDelayLabel.appendChild(document.createTextNode("指令延遲"));
			const httpDelaySelect = document.createElement("select");
			httpDelaySelect.setAttribute("style", selectStyle);
			applySelectHoverEffect(httpDelaySelect);
			const httpDelayOptions = [100,90,80,70,60,50,40,30,20,10,0];
			const currentSavedHttpDelay = GM_getValue("httpDelay", 100);
			httpDelayOptions.forEach(function(value) {
				const opt = document.createElement("option"); opt.value = value; opt.text = value;
				if (value === currentSavedHttpDelay) opt.selected = true;
				httpDelaySelect.appendChild(opt);
			});
			httpDelayLabel.appendChild(httpDelaySelect);
			httpDelaySelect.onchange = function() {GM_setValue("httpDelay", parseInt(this.value, 10));};
			speedArea.appendChild(httpDelayLabel);
			//攻擊動畫加速,太快會導致戰鬥第二舞台黑畫面
			const animationSpeedLabel = document.createElement("label");
			animationSpeedLabel.setAttribute("style", rowStyle);
			animationSpeedLabel.appendChild(document.createTextNode("戰鬥動畫"));
			const animationSpeedSelect = document.createElement("select");
			animationSpeedSelect.setAttribute("style", selectStyle);
			applySelectHoverEffect(animationSpeedSelect);
			const animationSpeedOptions = [2.0, 3.2, 10.0, 40.0, 100.0];
			const currentAnimationSpeed = GM_getValue("animationSpeedFactor", 2.0);
			animationSpeedOptions.forEach(function(value) {
				const opt = document.createElement("option"); opt.value = value; opt.text = value;
				if (value === currentAnimationSpeed) opt.selected = true;
				animationSpeedSelect.appendChild(opt);
			});
			animationSpeedLabel.appendChild(animationSpeedSelect);
			animationSpeedSelect.onchange = function() {GM_setValue("animationSpeedFactor", parseFloat(this.value));};
			speedArea.appendChild(animationSpeedLabel);
			//取消動畫延遲勾選框,會導致技能卡住,待測試參數
			const animationDelayCheckbox = document.createElement("input");
			animationDelayCheckbox.type = "checkbox";
			animationDelayCheckbox.checked = GM_getValue("skipAnimationDelay", false);
			const animaDelayLabel = createToggleSwitch(animationDelayCheckbox, "取消進場延遲", function() {
				GM_setValue("skipAnimationDelay", this.checked);
			});
			speedArea.appendChild(animaDelayLabel);

			mainPanel.appendChild(speedArea);
			//遊戲快捷區
			const shortcutArea = document.createElement("div");
			shortcutArea.appendChild(createSectionHeader("SHORTCUT"));
			//建立 4列 × 2欄 的網格佈局
			const buttonGrid01 = document.createElement("div");
			buttonGrid01.setAttribute("style", "display:grid; grid-template-columns: 1fr 1fr; gap:4px; width:100%; box-sizing:border-box;");
			shortcutArea.appendChild(buttonGrid01);
			//重新載入遊戲頁面
			const reloadButton = document.createElement("button");
			reloadButton.innerHTML = '重載遊戲';
			reloadButton.setAttribute("style", baseBtnStyle + "background: linear-gradient(135deg, #FFC800, #FF9500); color:#111; border:none; box-shadow: 0 0 8px rgba(255,200,0,0.3);");
			applyButtonHoverEffect(reloadButton, true);
			buttonGrid01.appendChild(reloadButton);
			reloadButton.onclick = function() {GM_setValue("triggerReload", Date.now());}
			//還原武器幻獸飾品
			const sellItemsButton=document.createElement("button");
			sellItemsButton.innerHTML='還原';
			sellItemsButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(sellItemsButton);
			buttonGrid01.appendChild(sellItemsButton);
			sellItemsButton.onclick = function() {GM_setValue("SellItems", Date.now());};
			//清空任務
			const clearMissionsButton=document.createElement("button");
			clearMissionsButton.innerHTML='任務';
			clearMissionsButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(clearMissionsButton);
			buttonGrid01.appendChild(clearMissionsButton);
			clearMissionsButton.onclick = function() {GM_setValue("ClearMissions", Date.now());};
			//清空禮物箱
			const clearPresentsButton=document.createElement("button");
			clearPresentsButton.innerHTML='禮物箱';
			clearPresentsButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(clearPresentsButton);
			buttonGrid01.appendChild(clearPresentsButton);
			clearPresentsButton.onclick = function() {GM_setValue("ClearPresents", Date.now());};
			mainPanel.appendChild(shortcutArea);
			//看寢室
			const watchEpisodesButton = document.createElement("button");
			watchEpisodesButton.innerHTML = '看寢室';
			watchEpisodesButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(watchEpisodesButton);
			buttonGrid01.appendChild(watchEpisodesButton);
			watchEpisodesButton.onclick = function() {GM_setValue("watchEpisodes", Date.now());};
			//測試
			const developerTest2Button = document.createElement("button");
			developerTest2Button.innerHTML = '測試';
			developerTest2Button.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(developerTest2Button);
			buttonGrid01.appendChild(developerTest2Button);
			developerTest2Button.onclick = function() {GM_setValue("developerTest2", Date.now());};
			//點擊時要鎖定的按鍵,防連點
			_actionButtonsToLock.push(sellItemsButton);

			_actionButtonsToLock.push(clearMissionsButton);
			_actionButtonsToLock.push(clearPresentsButton);
			_actionButtonsToLock.push(watchEpisodesButton);
			_actionButtonsToLock.push(developerTest2Button);
			//自動區
			const autoArea = document.createElement("div");
			autoArea.appendChild(createSectionHeader("AUTO"));
			//自動攻擊勾選框
			const autoAttackCheckbox = document.createElement("input");
			autoAttackCheckbox.type = "checkbox";
			autoAttackCheckbox.checked = GM_getValue("isAutoAttackEnabled", false);
			const autoAttackLabel = createToggleSwitch(autoAttackCheckbox, "自動攻擊", function() {
				GM_setValue("isAutoAttackEnabled", this.checked);
			});
			autoArea.appendChild(autoAttackLabel);
			//自動選支援幻獸與戰鬥隊伍勾選框
			const autoDeployCheckbox = document.createElement("input");
			autoDeployCheckbox.type = "checkbox";
			autoDeployCheckbox.checked = GM_getValue("isAutoDeployEnabled", false);
			const _autoTakeTheFieldLabel = createToggleSwitch(autoDeployCheckbox, "自動入場", function() {
				GM_setValue("isAutoDeployEnabled", this.checked);
			});
			autoArea.appendChild(_autoTakeTheFieldLabel);
			//自動連續挑戰勾選框
			const autoRetryCheckbox = document.createElement("input");
			autoRetryCheckbox.type = "checkbox";
			autoRetryCheckbox.checked = GM_getValue("isAutoRetryEnabled", false);
			const autoRetryLabel = createToggleSwitch(autoRetryCheckbox, "連續挑戰", function() {
				GM_setValue("isAutoRetryEnabled", this.checked);
			});
			autoArea.appendChild(autoRetryLabel);
			/** @constant {Object[]} 要使用的 robot 選項清單 */
			const robotOptions = [
				{value: "none", text: "NA"},
				{value: "daily", text: "DAILY"},
				{value: "public", text: "PUBLIC RAID"},
				{value: "rescue", text: "RESCUE ID"},
				{value: "myRaid", text: "MY RAID"},
				{value: "union", text: "UNION"},
				{value: "raidEvent", text: "RAID EVENT"},
				{value: "eidolonOrb", text: "EIDOLON ORB"},
				{value: "freeMan", text: "FREE MAN"}
			];
			//Autonomous Robot
			const autonomousRobotLabel = document.createElement("label");
			autonomousRobotLabel.setAttribute("style", rowStyle);
			autonomousRobotLabel.appendChild(document.createTextNode("蘿蔔"));
			_autonomousRobotSelect = document.createElement("select");
			_autonomousRobotSelect.setAttribute("style", selectStyle);
			applySelectHoverEffect(_autonomousRobotSelect);
			const myCurrentRobot = "none";
			GM_setValue("autonomousRobot", myCurrentRobot);
			robotOptions.forEach(function(optData) {
				const opt = document.createElement("option"); opt.value = optData.value; opt.text = optData.text;
				if (optData.value === myCurrentRobot) opt.selected = true;
				_autonomousRobotSelect.appendChild(opt);
			});
			autonomousRobotLabel.appendChild(_autonomousRobotSelect);
			_autonomousRobotSelect.onchange = function() {GM_setValue("autonomousRobot", this.value);};
			autoArea.appendChild(autonomousRobotLabel);

			mainPanel.appendChild(autoArea);
			//狀態文字
			const statusArea = document.createElement("div");
			statusArea.appendChild(createSectionHeader("STATUS"));		
			const statusDivStyle = "display:flex; align-items:center; margin-bottom:6px; width:100%;";
			const statusLabelStyle = "width:40px; font-size:11px; color:#ccc; margin-right:4px; flex-shrink:0;";
			const statusInputStyle = "flex:1; width:100%; box-sizing:border-box; background:rgba(25,25,30,0.8); color:#00FF00; border:1px solid rgba(255,200,0,0.25); border-radius:4px; font-size:11px; padding:4px; text-align:center; font-family:inherit;";
			//場景狀態顯示
			const stateSceneDiv = document.createElement("div");
			stateSceneDiv.setAttribute("style", statusDivStyle);
			const stateSceneLabel = document.createElement("label");
			stateSceneLabel.innerText = "Scene";
			stateSceneLabel.setAttribute("style", statusLabelStyle);
			_stateSceneInput = document.createElement("input");
			_stateSceneInput.type = "text";
			_stateSceneInput.readOnly = true;
			_stateSceneInput.value = "waiting";
			_stateSceneInput.setAttribute("style", statusInputStyle);
			stateSceneDiv.appendChild(stateSceneLabel);
			stateSceneDiv.appendChild(_stateSceneInput);
			statusArea.appendChild(stateSceneDiv);
			//關卡類型顯示
			const stateQuestDiv = document.createElement("div");
			stateQuestDiv.setAttribute("style", statusDivStyle);
			const stateQuestLabel = document.createElement("label");
			stateQuestLabel.innerText = "Quest";
			stateQuestLabel.setAttribute("style", statusLabelStyle);
			_stateQuestInput = document.createElement("input");
			_stateQuestInput.type = "text";
			_stateQuestInput.readOnly = true;
			_stateQuestInput.value = "none";
			_stateQuestInput.setAttribute("style", statusInputStyle);
			stateQuestDiv.appendChild(stateQuestLabel);
			stateQuestDiv.appendChild(_stateQuestInput);
			statusArea.appendChild(stateQuestDiv);
			//戰鬥回合顯示
			const stateTurnDiv = document.createElement("div");
			stateTurnDiv.setAttribute("style", statusDivStyle);
			const stateTurnLabel = document.createElement("label");
			stateTurnLabel.innerText = "Turn";
			stateTurnLabel.setAttribute("style", statusLabelStyle);
			_stateTurnInput = document.createElement("input");
			_stateTurnInput.type = "text";
			_stateTurnInput.readOnly = true;
			_stateTurnInput.value = "none";
			_stateTurnInput.setAttribute("style", statusInputStyle);
			stateTurnDiv.appendChild(stateTurnLabel);
			stateTurnDiv.appendChild(_stateTurnInput);
			statusArea.appendChild(stateTurnDiv);
			//除錯面板顯示
			const showDebugCheckbox = document.createElement("input");
			showDebugCheckbox.type = "checkbox";
			showDebugCheckbox.checked = true;//預設為開啟
			const showDebugLabel = createToggleSwitch(showDebugCheckbox, "顯示Console", function() {
				if (_debugWrapper) {
					if (this.checked) {
						_debugWrapper.style.display = "flex";
						if (_debugLogBox) _debugLogBox.scrollTop = _debugLogBox.scrollHeight;
					} else {
						_debugWrapper.style.display = "none";
					}
				}
			});
			statusArea.appendChild(showDebugLabel);
			//進階設定收合按鈕
			const advToggleBtn = document.createElement("button");
			advToggleBtn.innerHTML = '⚙️';
			advToggleBtn.setAttribute("style", "position:absolute; top:2px; left:110px; background:none; border:none; cursor:pointer; font-size:20px; color:rgba(255,200,0,0.8); transition:transform 0.3s ease; z-index:10; outline:none; padding:0; line-height:1;");
			advToggleBtn.title = "進階設定";
			// 切換進階面板顯示狀態
			advToggleBtn.onclick = function() {
				if (advPanel.style.display === "none") {
					advPanel.style.display = "flex";
					robotPanel.style.display = "flex";
					this.style.color = "#FFC800"; // 開啟時保持高亮
				} else {
					advPanel.style.display = "none";
					robotPanel.style.display = "none";
					this.style.color = "rgba(255,200,0,0.8)";
				}
			};
			mainPanel.appendChild(advToggleBtn);

			mainPanel.appendChild(statusArea);
			//右側面板1
			const advContentArea = document.createElement("div");
			//RAID面板
			advContentArea.appendChild(createSectionHeader("RAID"));
			//自發Raid的救援請求
			const myHelpLabel = document.createElement("label");
			myHelpLabel.setAttribute("style", rowStyle);
			myHelpLabel.appendChild(document.createTextNode("自車求援"));
			const myHelpSelect = document.createElement("select");
			myHelpSelect.setAttribute("style", selectStyle);
			applySelectHoverEffect(myHelpSelect);
			const helpOptions = [
				{value: "none", text: "關閉"},
				{value: "union", text: "公會"},
				{value: "friend", text: "好友"},
				{value: "unf", text: "公+友"},
				{value: "all", text: "全體"}
			];
			const myCurrentHelp = GM_getValue("myRaidHelpTarget", "none");
			helpOptions.forEach(function(optData) {
				const opt = document.createElement("option"); opt.value = optData.value; opt.text = optData.text;
				if (optData.value === myCurrentHelp) opt.selected = true;
				myHelpSelect.appendChild(opt);
			});
			myHelpLabel.appendChild(myHelpSelect);
			myHelpSelect.onchange = function() {GM_setValue("myRaidHelpTarget", this.value);};
			advContentArea.appendChild(myHelpLabel);
			//他人Raid的救援請求
			const othersHelpLabel = document.createElement("label");
			othersHelpLabel.setAttribute("style", rowStyle);
			othersHelpLabel.appendChild(document.createTextNode("他車求援"));
			const othersHelpSelect = document.createElement("select");
			othersHelpSelect.setAttribute("style", selectStyle);
			applySelectHoverEffect(othersHelpSelect);
			const hisCurrentHelp = GM_getValue("othersRaidHelpTarget", "none");
			helpOptions.forEach(function(optData) {
				const opt = document.createElement("option"); opt.value = optData.value; opt.text = optData.text;
				if (optData.value === hisCurrentHelp) opt.selected = true;
				othersHelpSelect.appendChild(opt);
			});
			othersHelpLabel.appendChild(othersHelpSelect);
			othersHelpSelect.onchange = function() {GM_setValue("othersRaidHelpTarget", this.value);};
			advContentArea.appendChild(othersHelpLabel);
			//求援等級門檻
			const raidHelpLevelLabel = document.createElement("label");
			raidHelpLevelLabel.setAttribute("style", rowStyle);
			raidHelpLevelLabel.appendChild(document.createTextNode("求援等級"));
			const raidHelpLevelInput = document.createElement("input");
			raidHelpLevelInput.type = "number";
			raidHelpLevelInput.min = "1";
			raidHelpLevelInput.max = "200";
			raidHelpLevelInput.setAttribute("style", selectStyle);
			raidHelpLevelInput.style.padding = "2px 0px";
			raidHelpLevelInput.value = GM_getValue("raidHelpLevel", 60);
			applySelectHoverEffect(raidHelpLevelInput);
			raidHelpLevelInput.onchange = function() {
				let val = parseInt(this.value, 10);
				if (isNaN(val)) val = 60;
				GM_setValue("raidHelpLevel", val);
			};
			raidHelpLevelLabel.appendChild(raidHelpLevelInput);
			advContentArea.appendChild(raidHelpLevelLabel);
			//戰鬥開場自動表情符號,自動拿藥水
			const autoStampCheckbox = document.createElement("input");
			autoStampCheckbox.type = "checkbox";
			autoStampCheckbox.checked = GM_getValue("isAutoEmoteEnabled", false);
			const autoStampLabel = createToggleSwitch(autoStampCheckbox, "開場表情", function() {
				GM_setValue("isAutoEmoteEnabled", this.checked);
			});
			advContentArea.appendChild(autoStampLabel);
			//顯示進場玩家
			const rankingCheckbox = document.createElement("input");
			rankingCheckbox.type = "checkbox";
			rankingCheckbox.checked = GM_getValue("isRankingEnabled", false);
			const rankingLabel = createToggleSwitch(rankingCheckbox, "顯示玩家", function() {
				GM_setValue("isRankingEnabled", this.checked);
			});
			advContentArea.appendChild(rankingLabel);
			//進階面板
			advContentArea.appendChild(createSectionHeader("ADVANCED"));
			//遊戲畫面大小
			const screenSizeLabel = document.createElement("label");
			screenSizeLabel.setAttribute("style", rowStyle);
			screenSizeLabel.appendChild(document.createTextNode("遊戲尺寸"));
			const screenSizeSelect = document.createElement("select");
			screenSizeSelect.setAttribute("style", selectStyle);
			applySelectHoverEffect(screenSizeSelect);
			const sizeOptions = [
				{ text: "360x240", width: "360", height: "240" },
				{ text: "540x360", width: "540", height: "360" },
				{ text: "720x480", width: "720", height: "480" },
				{ text: "960x640", width: "960", height: "640" },
				{ text: "1080x720", width: "1080", height: "720" },
				{ text: "1200x800", width: "1200", height: "800" }
			];
			const currentSavedSize = GM_getValue("gameScreenSize", "960x640");
			sizeOptions.forEach(function(optData) {
				const opt = document.createElement("option"); 
				opt.value = optData.text; 
				opt.text = optData.text;
				if (optData.text === currentSavedSize) opt.selected = true;
				screenSizeSelect.appendChild(opt);
			});
			screenSizeLabel.appendChild(screenSizeSelect);
			screenSizeSelect.onchange = function() {
				const selectedVal = this.value;
				GM_setValue("gameScreenSize", selectedVal);
				const selectedOpt = sizeOptions.find(o => o.text === selectedVal);
				if (selectedOpt) {
					adjustGameScreenSize(`${selectedOpt.width}px`, `${selectedOpt.height}px`);
					GM_setValue("triggerReload", Date.now());//必須重載遊戲內容才會正常顯示
				}
			};
			advContentArea.appendChild(screenSizeLabel);
			//關閉connecting阻擋畫面
			const noConnectingCheckbox = document.createElement("input");
			noConnectingCheckbox.type = "checkbox";
			noConnectingCheckbox.checked = GM_getValue("noConnectingEnabled", false);
			const _noConnectingLabel = createToggleSwitch(noConnectingCheckbox, "關閉Connecting", function() {
				GM_setValue("noConnectingEnabled", this.checked);
				toggleConnectingKiller(this.checked);
			});
			advContentArea.appendChild(_noConnectingLabel);
			//關閉Error阻擋畫面
			const noErrorPopupCheckbox = document.createElement("input");
			noErrorPopupCheckbox.type = "checkbox";
			noErrorPopupCheckbox.checked = GM_getValue("disableErrorPopups", false);
			const _noErrorPopupLabel = createToggleSwitch(noErrorPopupCheckbox, "關閉Error", function() {
				GM_setValue("disableErrorPopups", this.checked);
			});
			advContentArea.appendChild(_noErrorPopupLabel);
			//顯示敵方血量與怒氣
			const enemyNumCheckbox = document.createElement("input");
			enemyNumCheckbox.type = "checkbox";
			enemyNumCheckbox.checked = GM_getValue("showEnemyHpValues", false);
			const enemyNumLabel = createToggleSwitch(enemyNumCheckbox, "顯示敵方血怒", function() {
				GM_setValue("showEnemyHpValues", this.checked);
			});
			advContentArea.appendChild(enemyNumLabel);
			//自動略過過場劇情
			const isSkipScenarioCheckbox = document.createElement("input");
			isSkipScenarioCheckbox.type = "checkbox";
			isSkipScenarioCheckbox.checked = GM_getValue("isSkipScenario", false);
			const isSkipScenarioLabel = createToggleSwitch(isSkipScenarioCheckbox, "自動略過劇情", function() {
				GM_setValue("isSkipScenario", this.checked);
			});
			advContentArea.appendChild(isSkipScenarioLabel);
			//戰鬥開場自動幻獸
			const autoSummonCheckbox = document.createElement("input");
			autoSummonCheckbox.type = "checkbox";
			autoSummonCheckbox.checked = GM_getValue("isAutoSummonEnabled", false);
			const _autoSummonLabel = createToggleSwitch(autoSummonCheckbox, "開場招喚幻獸", function() {
				GM_setValue("isAutoSummonEnabled", this.checked);
			});
			advContentArea.appendChild(_autoSummonLabel);
			//戰鬥開場自動調整自動戰鬥模式(紅自動,綠自動)
			const autoBattleModeCheckbox = document.createElement("input");
			autoBattleModeCheckbox.type = "checkbox";
			autoBattleModeCheckbox.checked = GM_getValue("isAutoBattleModeEnabled", false);
			const autoBattleModeLabel = createToggleSwitch(autoBattleModeCheckbox, "自訂紅綠自動", function() {
				GM_setValue("isAutoBattleModeEnabled", this.checked);
			});
			advContentArea.appendChild(autoBattleModeLabel);
			//自動戰鬥時閒置重整,防技能卡死
			const autoReloadCheckbox = document.createElement("input");
			autoReloadCheckbox.type = "checkbox";
			autoReloadCheckbox.checked = GM_getValue("isAutoReloadEnabled", false);
			const autoReloadLabel = createToggleSwitch(autoReloadCheckbox, "戰鬥閒置重整", function() {
				GM_setValue("isAutoReloadEnabled", this.checked);
			});
			advContentArea.appendChild(autoReloadLabel);
			//結算自動補AP|BP
			const autoApBpCheckbox = document.createElement("input");
			autoApBpCheckbox.type = "checkbox";
			autoApBpCheckbox.checked = GM_getValue("isAutoApBpRefillEnabled", false);
			const autoApBpLabel = createToggleSwitch(autoApBpCheckbox, "結算補AP|BP", function() {
				GM_setValue("isAutoApBpRefillEnabled", this.checked);
			});
			advContentArea.appendChild(autoApBpLabel);
			//建立 4列 × 2欄 的網格佈局
			const buttonGrid02 = document.createElement("div");
			buttonGrid02.setAttribute("style", "display:grid; grid-template-columns: 1fr 1fr; gap:4px; width:100%; box-sizing:border-box;");
			advContentArea.appendChild(buttonGrid02);
			//下載神姬,武器,幻獸資料
			const getAllDataButton = document.createElement("button");
			getAllDataButton.innerHTML = '下載資料';
			getAllDataButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(getAllDataButton);
			buttonGrid02.appendChild(getAllDataButton);
			getAllDataButton.onclick = function() { GM_setValue("getAllData", Date.now()); };
			//掃描場景
			const getSceneButton = document.createElement("button");
			getSceneButton.innerHTML = '場景掃描';
			getSceneButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(getSceneButton);
			buttonGrid02.appendChild(getSceneButton);
			getSceneButton.onclick = function() { GM_setValue("getScene", Date.now()); };
			//商店兌換
			const shoppingButton = document.createElement("button");
			shoppingButton.innerHTML = '商店兌換';
			shoppingButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(shoppingButton);
			buttonGrid02.appendChild(shoppingButton);
			shoppingButton.onclick = function() { GM_setValue("shopping", Date.now()); };
			//抽十連
			const autoFreeGachaButton=document.createElement("button");
			autoFreeGachaButton.innerHTML='十連';
			autoFreeGachaButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(autoFreeGachaButton);
			buttonGrid02.appendChild(autoFreeGachaButton);
			autoFreeGachaButton.onclick = function() {GM_setValue("AutoFreeGacha", Date.now());};
			//抽Raid券
			const autoRaidGachaButton=document.createElement("button");
			autoRaidGachaButton.innerHTML='抽R券';
			autoRaidGachaButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(autoRaidGachaButton);
			buttonGrid02.appendChild(autoRaidGachaButton);
			autoRaidGachaButton.onclick = function() {GM_setValue("AutoRaidGacha", Date.now());};
			//下載遊戲快取中的圖片
			const getCacheImageButton=document.createElement("button");
			getCacheImageButton.innerHTML='下載圖片';
			getCacheImageButton.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(getCacheImageButton);
			buttonGrid02.appendChild(getCacheImageButton);
			getCacheImageButton.onclick = function() {GM_setValue("getCacheImage", Date.now());};
			//下載持有的神姬,武器,幻獸,英靈報表

			//點擊時要鎖定的按鍵,防連點
			_actionButtonsToLock.push(getAllDataButton);
			_actionButtonsToLock.push(getSceneButton);
			_actionButtonsToLock.push(shoppingButton);
			_actionButtonsToLock.push(autoFreeGachaButton);
			_actionButtonsToLock.push(autoRaidGachaButton);
			_actionButtonsToLock.push(getCacheImageButton);

			advPanel.appendChild(advContentArea);
			//右側面板2
			const robotDailyArea = document.createElement("div");
			robotDailyArea.appendChild(createSectionHeader("ROBOT DAILY"));
			const dailyLevelMaxLabel = document.createElement("label");
			dailyLevelMaxLabel.setAttribute("style", rowStyle);
			dailyLevelMaxLabel.appendChild(document.createTextNode("小於等級"));
			const dailyLevelMaxInput = document.createElement("input");
			dailyLevelMaxInput.type = "number";
			dailyLevelMaxInput.setAttribute("style", selectStyle);
			dailyLevelMaxInput.style.padding = "2px 0px";
			dailyLevelMaxInput.value = GM_getValue("dailyQuestLevelMax", 110);
			applySelectHoverEffect(dailyLevelMaxInput);
			dailyLevelMaxInput.onchange = function() {
				let val = parseInt(this.value, 10);
				if (isNaN(val)) val = 110;
				GM_setValue("dailyQuestLevelMax", val);
			};
			dailyLevelMaxLabel.appendChild(dailyLevelMaxInput);
			robotDailyArea.appendChild(dailyLevelMaxLabel);
			//飾品關
			const accessoryOptions = [
				{value: 82, text: "火(10)"},{value: 72, text: "火(9)"},{value: 62, text: "火(8)"},
				{value: 52, text: "火(7)"},{value: 42, text: "火(6)"},{value: 30, text: "火(5)"},
				{value: 8, text: "火(4)"},{value: 7, text: "火(3)"},{value: 6, text: "火(2)"},
				{value: 5, text: "火(1)"},
				{value: 83, text: "水(10)"},{value: 73, text: "水(9)"},{value: 63, text: "水(8)"},
				{value: 53, text: "水(7)"},{value: 43, text: "水(6)"},{value: 31, text: "水(5)"},
				{value: 12, text: "水(4)"},{value: 11, text: "水(3)"},{value: 10, text: "水(2)"},
				{value: 9, text: "水(1)"},
				{value: 84, text: "風(10)"},{value: 74, text: "風(9)"},{value: 64, text: "風(8)"},
				{value: 54, text: "風(7)"},{value: 44, text: "風(6)"},{value: 32, text: "風(5)"},
				{value: 16, text: "風(4)"},{value: 15, text: "風(3)"},{value: 14, text: "風(2)"},
				{value: 13, text: "風(1)"},
				{value: 81, text: "雷(10)"},{value: 71, text: "雷(9)"},{value: 61, text: "雷(8)"},
				{value: 51, text: "雷(7)"},{value: 41, text: "雷(6)"},{value: 29, text: "雷(5)"},
				{value: 4, text: "雷(4)"},{value: 3, text: "雷(3)"},{value: 2, text: "雷(2)"},
				{value: 1, text: "雷(1)"},
				{value: 85, text: "光(10)"},{value: 75, text: "光(9)"},{value: 65, text: "光(8)"},
				{value: 55, text: "光(7)"},{value: 45, text: "光(6)"},{value: 33, text: "光(5)"},
				{value: 20, text: "光(4)"},{value: 19, text: "光(3)"},{value: 18, text: "光(2)"},
				{value: 17, text: "光(1)"},
				{value: 86, text: "闇(10)"},{value: 76, text: "闇(9)"},{value: 66, text: "闇(8)"},
				{value: 56, text: "闇(7)"},{value: 46, text: "闇(6)"},{value: 34, text: "闇(5)"},
				{value: 24, text: "闇(4)"},{value: 23, text: "闇(3)"},{value: 22, text: "闇(2)"},
				{value: 21, text: "闇(1)"},
				{value: 87, text: "全(10)"},{value: 77, text: "全(9)"},{value: 67, text: "全(8)"},
				{value: 57, text: "全(7)"},{value: 47, text: "全(6)"},{value: 35, text: "全(5)"},
				{value: 28, text: "全(4)"},{value: 27, text: "全(3)"},{value: 26, text: "全(2)"},
				{value: 25, text: "全(1)"}
			];
			const dailyAccessoryLabel = document.createElement("label");
			dailyAccessoryLabel.setAttribute("style", rowStyle);
			dailyAccessoryLabel.appendChild(document.createTextNode("飾品關卡"));
			const dailyAccessorySelect = document.createElement("select");
			dailyAccessorySelect.setAttribute("style", selectStyle);
			applySelectHoverEffect(dailyAccessorySelect);
			const dailyAccessory = Number(GM_getValue("dailyAccessory", 87));
			accessoryOptions.forEach(function(optData) {
				const opt = document.createElement("option");
				opt.value = optData.value;
				opt.text = optData.text;
				if (optData.value === dailyAccessory) opt.selected = true;
				dailyAccessorySelect.appendChild(opt);
			});
			dailyAccessoryLabel.appendChild(dailyAccessorySelect);
			dailyAccessorySelect.onchange = function() {GM_setValue("dailyAccessory", Number(this.value));};
			robotDailyArea.appendChild(dailyAccessoryLabel);
			robotPanel.appendChild(robotDailyArea);

			const robotPublicArea = document.createElement("div");
			robotPublicArea.appendChild(createSectionHeader("ROBOT PUBLIC"));
			// 血量門檻
			const pubHpLabel = document.createElement("label");
			pubHpLabel.setAttribute("style", rowStyle);
			pubHpLabel.appendChild(document.createTextNode("大於血量%"));
			const pubHpInput = document.createElement("input");
			pubHpInput.type = "number";
			pubHpInput.step = "0.1";
			pubHpInput.setAttribute("style", selectStyle);
			pubHpInput.style.padding = "2px 0px";
			pubHpInput.value = GM_getValue("publicRaidEnemyHp", 30.0);
			applySelectHoverEffect(pubHpInput);
			pubHpInput.onchange = function() {
				let val = parseFloat(this.value);
				if (isNaN(val)) val = 30.0;
				GM_setValue("publicRaidEnemyHp", val);
			};
			pubHpLabel.appendChild(pubHpInput);
			robotPublicArea.appendChild(pubHpLabel);
			// 人數門檻
			const pubPartLabel = document.createElement("label");
			pubPartLabel.setAttribute("style", rowStyle);
			pubPartLabel.appendChild(document.createTextNode("小於人數"));
			const pubPartInput = document.createElement("input");
			pubPartInput.type = "number";
			pubPartInput.setAttribute("style", selectStyle);
			pubPartInput.style.padding = "2px 0px";
			pubPartInput.value = GM_getValue("publicRaidParticipants", 8);
			applySelectHoverEffect(pubPartInput);
			pubPartInput.onchange = function() {
				let val = parseInt(this.value, 10);
				if (isNaN(val)) val = 8;
				GM_setValue("publicRaidParticipants", val);
			};
			pubPartLabel.appendChild(pubPartInput);
			robotPublicArea.appendChild(pubPartLabel);
			//等級門檻
			const pubLvlLabel = document.createElement("label");
			pubLvlLabel.setAttribute("style", rowStyle);
			pubLvlLabel.appendChild(document.createTextNode("大於等級"));
			const pubLvlInput = document.createElement("input");
			pubLvlInput.type = "number";
			pubLvlInput.setAttribute("style", selectStyle);
			pubLvlInput.style.padding = "2px 0px";
			pubLvlInput.value = GM_getValue("publicRaidEnemyLevel", 109);
			applySelectHoverEffect(pubLvlInput);
			pubLvlInput.onchange = function() {
				let val = parseInt(this.value, 10);
				if (isNaN(val)) val = 110;
				GM_setValue("publicRaidEnemyLevel", val);
			};
			pubLvlLabel.appendChild(pubLvlInput);
			robotPublicArea.appendChild(pubLvlLabel);

			robotPanel.appendChild(robotPublicArea);

			const robotRescueArea = document.createElement("div");
			robotRescueArea.appendChild(createSectionHeader("ROBOT RESCUE"));
			//詢問間隔(ms)
			const rescueIntervalLabel = document.createElement("label");
			rescueIntervalLabel.setAttribute("style", rowStyle);
			rescueIntervalLabel.appendChild(document.createTextNode("間隔(ms)"));
			const rescueIntervalInput = document.createElement("input");
			rescueIntervalInput.type = "number";
			rescueIntervalInput.step = "100";
			rescueIntervalInput.setAttribute("style", selectStyle);
			rescueIntervalInput.style.padding = "2px 0px";
			rescueIntervalInput.value = GM_getValue("rescueInterval", 3000);
			applySelectHoverEffect(rescueIntervalInput);
			rescueIntervalInput.onchange = function() {
				let val = parseInt(this.value, 10);
				if (isNaN(val)) val = 3000;
				GM_setValue("rescueInterval", val);
			};
			rescueIntervalLabel.appendChild(rescueIntervalInput);
			robotRescueArea.appendChild(rescueIntervalLabel);
			robotPanel.appendChild(robotRescueArea);

			const robotMyRaidArea = document.createElement("div");
			robotMyRaidArea.appendChild(createSectionHeader("ROBOT MY RAID"));
			// 等級下限
			const myMinLabel = document.createElement("label");
			myMinLabel.setAttribute("style", rowStyle);
			myMinLabel.appendChild(document.createTextNode("大於等級"));
			const myMinInput = document.createElement("input");
			myMinInput.type = "number";
			myMinInput.setAttribute("style", selectStyle);
			myMinInput.style.padding = "2px 0px";
			myMinInput.value = GM_getValue("myRaidQuestLevelMin", 109);
			applySelectHoverEffect(myMinInput);
			myMinInput.onchange = function() {
				let val = parseInt(this.value, 10);
				if (isNaN(val)) val = 110;
				GM_setValue("myRaidQuestLevelMin", val);
			};
			myMinLabel.appendChild(myMinInput);
			robotMyRaidArea.appendChild(myMinLabel);
			// 等級上限
			const myMaxLabel = document.createElement("label");
			myMaxLabel.setAttribute("style", rowStyle);
			myMaxLabel.appendChild(document.createTextNode("小於等級"));
			const myMaxInput = document.createElement("input");
			myMaxInput.type = "number";
			myMaxInput.setAttribute("style", selectStyle);
			myMaxInput.style.padding = "2px 0px";
			myMaxInput.value = GM_getValue("myRaidQuestLevelMax", 160);
			applySelectHoverEffect(myMaxInput);
			myMaxInput.onchange = function() {
				let val = parseInt(this.value, 10);
				if (isNaN(val)) val = 159;
				GM_setValue("myRaidQuestLevelMax", val);
			};
			myMaxLabel.appendChild(myMaxInput);
			robotMyRaidArea.appendChild(myMaxLabel);
			robotPanel.appendChild(robotMyRaidArea);

			const robotUnionArea = document.createElement("div");
			robotUnionArea.appendChild(createSectionHeader("ROBOT UNION"));
			//收屍者
			const unionJanitorCheckbox = document.createElement("input");
			unionJanitorCheckbox.type = "checkbox";
			unionJanitorCheckbox.checked = GM_getValue("janitorMode", false);
			const unionJanitorLabel = createToggleSwitch(unionJanitorCheckbox, "收屍者", function() {
				GM_setValue("janitorMode", this.checked);
			});
			robotUnionArea.appendChild(unionJanitorLabel);
			robotPanel.appendChild(robotUnionArea);

			//外部資料庫
			const firebaseArea = document.createElement("div");
			firebaseArea.appendChild(createSectionHeader("FIREBASE"));
			//Firebase URL輸入框
			//因為XHR安全性問題, 此URL網域必須去Tampermonkey的Script的設定中, 新增至"自訂網域白名單", 否則無法傳送
			const firebaseLabel = document.createElement("label");
			firebaseLabel.setAttribute("style", "display:flex; flex-direction:column; width:100%; box-sizing:border-box; margin-bottom: 6px;");
			const firebaseSpan = document.createElement("span");
			firebaseSpan.textContent = "URL:";
			firebaseSpan.setAttribute("style", "font-size:10px; color:#ccc; margin-bottom:2px;");
			firebaseLabel.appendChild(firebaseSpan);
			const firebaseInput = document.createElement("input");
			firebaseInput.type = "text";
			firebaseInput.setAttribute("style", "width:100%; box-sizing:border-box; background:rgba(30,30,35,0.8); color:#fff; border:1px solid rgba(255,200,0,0.25); border-radius:4px; font-size:10px; padding:4px; font-family:inherit; transition: all 0.2s;");
			firebaseInput.value = GM_getValue("firebaseDbUrl", "");
			firebaseInput.onmouseover = function() { this.style.borderColor = "#FFC800"; this.style.boxShadow = "0 0 6px rgba(255,200,0,0.2)"; };
			firebaseInput.onmouseout = function() { this.style.borderColor = "rgba(255,200,0,0.25)"; this.style.boxShadow = "none"; };
			firebaseInput.onchange = function() {
				GM_setValue("firebaseDbUrl", this.value);
				appendDebugLog("saved Firebase URL");
			};
			firebaseLabel.appendChild(firebaseInput);
			firebaseArea.appendChild(firebaseLabel);
			//Firebase測試
			const fbButtonGrid = document.createElement("div");
			fbButtonGrid.setAttribute("style", "display:grid; grid-template-columns: 1fr 1fr; gap:4px; width:100%; box-sizing:border-box;");
			firebaseArea.appendChild(fbButtonGrid);
			//測試寫入
			const fbWriteBtn = document.createElement("button");
			fbWriteBtn.innerHTML = '測試寫入';
			fbWriteBtn.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(fbWriteBtn);
			fbButtonGrid.appendChild(fbWriteBtn);
			fbWriteBtn.onclick = function() { testFirebaseWrite(); };
			//測試讀取
			const fbReadBtn = document.createElement("button");
			fbReadBtn.innerHTML = '測試讀取';
			fbReadBtn.setAttribute("style", baseBtnStyle);
			applyButtonHoverEffect(fbReadBtn);
			fbButtonGrid.appendChild(fbReadBtn);
			fbReadBtn.onclick = function() { testFirebaseRead(); };
			//測試寫入文字輸入框
			const firebaseMsgLabel = document.createElement("label");
			firebaseMsgLabel.setAttribute("style", "display:flex; flex-direction:column; width:100%; box-sizing:border-box; margin-bottom: 6px;");
			const firebaseMsgSpan = document.createElement("span");
			firebaseMsgSpan.textContent = "Test Message:";
			firebaseMsgSpan.setAttribute("style", "font-size:10px; color:#ccc; margin-bottom:2px;");
			firebaseMsgLabel.appendChild(firebaseMsgSpan);
			_firebaseMsgInput = document.createElement("input");
			_firebaseMsgInput.type = "text";
			_firebaseMsgInput.setAttribute("style", "width:100%; box-sizing:border-box; background:rgba(30,30,35,0.8); color:#fff; border:1px solid rgba(255,200,0,0.25); border-radius:4px; font-size:10px; padding:4px; font-family:inherit; transition: all 0.2s;");
			_firebaseMsgInput.value = "";
			_firebaseMsgInput.onmouseover = function() { this.style.borderColor = "#FFC800"; this.style.boxShadow = "0 0 6px rgba(255,200,0,0.2)"; };
			_firebaseMsgInput.onmouseout = function() { this.style.borderColor = "rgba(255,200,0,0.25)"; this.style.boxShadow = "none"; };
			_firebaseMsgInput.onkeydown = function(event) {
				if (event.key === "Enter") {
					event.preventDefault();
					testFirebaseWrite();
				}
			};
			firebaseMsgLabel.appendChild(_firebaseMsgInput);
			firebaseArea.appendChild(firebaseMsgLabel);
			robotPanel.appendChild(firebaseArea);
		} catch (error) {
			_debugLogBox.appendChild(document.createTextNode("\n" + error));
		}
	}
	/**
	 * @description Toggle Switch 樣式建構函式
	 * @param {HTMLElement} checkboxObj - 要綁定的 checkbox 原件
	 * @param {string} labelText - 開關旁的文字
	 * @param {Function} onToggleCallback - 狀態改變時的回呼函式
	 * @returns {HTMLElement}
	 */
	function createToggleSwitch(checkboxObj, labelText, onToggleCallback) {
		const toggleLabel = document.createElement("label");
		toggleLabel.setAttribute("style", "display:flex; align-items:center; justify-content: space-between; cursor:pointer; padding: 3px 0; user-select: none; width: 100%; height: 22px; box-sizing: border-box;");
		toggleLabel.appendChild(document.createTextNode(labelText));
		checkboxObj.setAttribute("style", "position:absolute; opacity:0; width:0; height:0; pointer-events:none;");
		toggleLabel.appendChild(checkboxObj);
		const toggleSlider = document.createElement("span");
		const toggleKnob = document.createElement("span");
		toggleSlider.appendChild(toggleKnob);
		toggleLabel.appendChild(toggleSlider);
		function renderVisual() {
			if (checkboxObj.checked) {
				toggleSlider.setAttribute("style", "position:relative; display:inline-block; width:30px; height:16px; background-color:rgba(255,200,0,0.2); border:1px solid #FFC800; border-radius:20px; transition:all 0.1s ease-in-out; box-shadow: 0 0 6px rgba(255,200,0,0.4);");
				toggleKnob.setAttribute("style", "position:absolute; content:''; height:10px; width:10px; left:2px; top:2px; background-color:#FFC800; border-radius:50%; transition:all 0.1s ease-in-out; transform:translateX(14px); box-shadow: 0 0 4px #FFC800;");
			} else {
				toggleSlider.setAttribute("style", "position:relative; display:inline-block; width:30px; height:16px; background-color:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.2); border-radius:20px; transition:all 0.2s ease-in-out;");
				toggleKnob.setAttribute("style", "position:absolute; content:''; height:10px; width:10px; left:2px; top:2px; background-color:#888; border-radius:50%; transition:all 0.1s ease-in-out; transform:translateX(0px);");
			}
		}
		renderVisual();
		checkboxObj.addEventListener("change", function() {
			renderVisual();
			if (onToggleCallback) onToggleCallback.call(this);
		});
		return toggleLabel;
	}
	/**
	 * @description 尋找目標元素，直到出現為止
	 * @param {string} selector - CSS 選擇器
	 * @param {number} [timeout=30000] - 最長等待時間 (ms)
	 * @returns {Promise<HTMLElement|null>}
	 */
	async function waitForElement(selector, timeout = 30000) {
		const startTime = Date.now();
		while (Date.now() - startTime < timeout) {
			const el = document.querySelector(selector);
			if (el) return el; //找到了，立刻回傳元素
			await new Promise(resolve => setTimeout(resolve, 100));//找不到，等 0.1 秒再找
		}
		return null;
	}
	/**
	 * @description 初始化 Connecting 畫面監聽器
	 */
	async function initConnectingObserver() {
		_shieldElement = await waitForElement('#shield');//尋找Connecting畫面
		if (_shieldElement) {
			appendDebugLog("get shield!");
		} else {
			appendDebugLog("no shield!");
			return;
		}
		//開始設定 MutationObserver
		const config = { 
			attributes: true, 
			attributeFilter: ['style'] 
		};
		const callback = function(mutationsList) {
			for (const mutation of mutationsList) {
				if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
					const currentStyle = window.getComputedStyle(_shieldElement);
					//偵測顯示與隱藏
					if (currentStyle.display !== 'none') {
						GM_setValue("hideConnectingScreen", true);
					} else {
						GM_setValue("hideConnectingScreen", false);
					}
				}
			}
		};
		//啟動監聽
		const observer = new MutationObserver(callback);
		observer.observe(_shieldElement, config);
	}
	/**
	 * @description 初始化 Connecting 遮擋的開關樣式
	 */
	async function hideConnectingScreen() {
		if (document.getElementById('conditional-shield-style')) return;
		try {
			const styleNode = document.createElement('style');
			styleNode.id = 'conditional-shield-style';
			// 只有當 html 標籤擁有 .shield-killer-on 類別時，才會強制壓制 #shield
			styleNode.innerHTML = `
				html.shield-killer-on #shield {
					display: none !important;
					visibility: hidden !important;
					pointer-events: none !important;
					opacity: 0 !important;
				}
			`;
			(document.head || document.documentElement).appendChild(styleNode);
			appendDebugLog("Load Killer OK");
		} catch (error) {
			appendDebugLog("hideConnectingScreen:", error);
		}
	}
	/**
	 * @description 切換 Connecting 畫面的運作狀態
	 * @param {boolean} isOpen 
	 */
	function toggleConnectingKiller(isOpen) {
		try {
			hideConnectingScreen();
			const rootElement = document.documentElement; 
			if (isOpen) {
				rootElement.classList.add('shield-killer-on');
			} else {
				rootElement.classList.remove('shield-killer-on');
			}
		} catch (error) {
			appendDebugLog("toggleConnectingKiller:", error);
		}
	}
	/**
	 * @description 調整遊戲畫面大小
	 * @param {string} width - 寬度
	 * @param {string} height - 高度
	 * @returns {Promise<void>}
	 */
	async function adjustGameScreenSize(width,height) {
		try {
			const testScreen = await waitForElement(".test-screen.center-block");
			testScreen.style.width = width;
			testScreen.style.paddingBottom = "50px";

			const gameOuter = await waitForElement("#game-outer");
			gameOuter.style.width = width;
			gameOuter.style.height = height;
			gameOuter.classList.remove("frame");

			const classObserver = new MutationObserver(() => {
				if (gameOuter.classList.contains("frame")) {
					gameOuter.classList.remove("frame");
					classObserver.disconnect();
				}
			});
			classObserver.observe(gameOuter, { attributes: true, attributeFilter: ["class"] });
			const shield = await waitForElement("#shield");
			shield.style.width = width;
			shield.style.height = height;
			const game = await waitForElement("#game");
			game.style.width = width;
			game.style.height = height;
		} catch (error) {
			appendDebugLog("adjustGameScreenSize:", error);
		}
	}
	/**
	 * @description 調整面板位置
	 */
	async function updateUIPositions() {
		try {
			const gameOuter = document.querySelector("#game-outer");
			if (!gameOuter) return;

			const rect = gameOuter.getBoundingClientRect();
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			const scrollX = window.scrollX || document.documentElement.scrollLeft;
			const uiContainerWidth = 134;
			//設定 _uiContainer 靠左
			_uiContainer.style.left = `${rect.left - uiContainerWidth + scrollX - 2}px`; 
			_uiContainer.style.top = `${rect.top + scrollY + 26}px`;
			_uiContainer.style.zIndex = "9999";
			//設定 _debugWrapper 靠下
			_debugWrapper.style.left = `${rect.left + scrollX + 8}px`;
			_debugWrapper.style.top = `${rect.bottom + scrollY + 30}px`;
			_debugWrapper.style.width = `${rect.width + 2}px`;
			_debugWrapper.style.zIndex = "9999";
		} catch (error) {
			appendDebugLog("updateUIPositions:", error);
		}
	}
	/**
	 * @description 增加拖曳功能，並加入畫面邊界保護
	 * @param {HTMLElement} dragHandle - 可拖曳的觸發區域
	 * @param {HTMLElement} dragTarget - 被拖曳的目標容器
	 */
	function makeDraggable(dragHandle, dragTarget) {
		let isDragging = false;
		let startX, startY;
		let initialLeft, initialTop;
		dragHandle.style.cursor = 'move';
		//滑鼠按下事件
		dragHandle.addEventListener('mousedown', (event) => {
			isDragging = true;
			startX = event.clientX;
			startY = event.clientY;
			initialLeft = dragTarget.offsetLeft;
			initialTop = dragTarget.offsetTop;
			event.preventDefault();
		});
		//滑鼠移動事件
		document.addEventListener('mousemove', (event) => {
			if (!isDragging) return;
			const deltaX = event.clientX - startX;
			const deltaY = event.clientY - startY;
			let newLeft = initialLeft + deltaX;
			let newTop = initialTop + deltaY;
			const maxLeft = window.innerWidth - dragTarget.offsetWidth;
			const maxTop = window.innerHeight - dragTarget.offsetHeight;
			newLeft = Math.max(0, Math.min(newLeft, maxLeft));
			newTop = Math.max(0, Math.min(newTop, maxTop));
			dragTarget.style.left = `${newLeft}px`;
			dragTarget.style.top = `${newTop}px`;
		});
		//滑鼠放開事件
		document.addEventListener('mouseup', () => {
			isDragging = false;
		});
	}
	/**
	 * @description 將資料寫入Database(Firebase)
	 */
	async function testFirebaseWrite() {
		const url = GM_getValue("firebaseDbUrl", "");
		if (!url || !url.startsWith("http")) {
			appendDebugLog("Invalid Firebase URL, please enter a valid URL.");
			return;
		}
		const customMsg = _firebaseMsgInput.value;
		if (!customMsg) return;
		const testData = {message:customMsg};

		appendDebugLog("Writing to Firebase...");
		try {
			const response = await fetch(url, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(testData)
			});
			if (response.ok) {
				appendDebugLog("Firebase write successful!");
				_firebaseMsgInput.value = "";
			} else {
				appendDebugLog(`Firebase write failed (Status: ${response.status})`);
			}
		} catch (error) {
			appendDebugLog("Error during Firebase write：" + error);
		}
	}
	/**
	 * @description 從Database(Firebase)讀取資料
	 */
	async function testFirebaseRead() {
		const url = GM_getValue("firebaseDbUrl", "");
		if (!url || !url.startsWith("http")) {
			appendDebugLog("Invalid Firebase URL, please enter a valid URL.");
			return;
		}
		appendDebugLog("Reading from Firebase...");
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});
			if (response.ok) {
				const data = await response.json();
				appendDebugLog("Firebase read successful");
				appendDebugLog(data.message);
			} else {
				appendDebugLog(`Firebase read failed (Status: ${response.status})`);
			}
		} catch (error) {
			appendDebugLog("Error during Firebase read: " + error);
		}
	}
}
/**
 * @description 遊戲頁面程式, 遊戲引擎為 cocos2d-js-v3.13.js
 */
function onGameApp() {
	let _animationSpeedFactor = GM_getValue("animationSpeedFactor", 2.0);//動畫加速
	let _animationDelay = GM_getValue("skipAnimationDelay", false);//取消動畫延遲
	let _autoAttackEnabled = GM_getValue("isAutoAttackEnabled", false);//自動攻擊
	let _isAutoDeployEnabled = GM_getValue("isAutoDeployEnabled", false);//自動選擇幻獸與隊伍進場
	let _autoRetryEnabled = GM_getValue("isAutoRetryEnabled", false);//自動再挑戰
	let _myHelpTarget = GM_getValue("myRaidHelpTarget", "none");//自開Raid自動求援
	let _othersHelpTarget = GM_getValue("othersRaidHelpTarget", "none");//他開Raid自動求援
	let _raidHelpLevel = GM_getValue("raidHelpLevel", 55);//小於此Raid Level就自動求援
	let _cocosTimeScale = GM_getValue("gameTimeScale", 1.0);//cocos引擎提速
	let _cocosFps = GM_getValue("targetFps", 30);//cocos引擎FPS
	let _httpDelay = GM_getValue("httpDelay", 100);//Http取值回應延遲
	let _autoSummonEnabled = GM_getValue("isAutoSummonEnabled", false);//開場招喚幻獸
	let _autoStampEnabled = GM_getValue("isAutoEmoteEnabled", false);//開場隨機表情
	let _isRankingEnabled = GM_getValue("isRankingEnabled", false);//Raid顯示玩家排行
	let _autoBattleModeEnabled = GM_getValue("isAutoBattleModeEnabled", false);//開場自動戰鬥模式
	let _autoAPBPEnabled = GM_getValue("isAutoApBpRefillEnabled", false);//結算自動補給
	let _autoReloadEnabled = GM_getValue("isAutoReloadEnabled", false);//自動戰鬥時閒置重整(防卡)
	const _autoReloadWaiting = 20000;//閒置時間
	let _logPacketsEnabled = GM_getValue("isPacketLoggingEnabled", false);//輸出傳輸資訊
	let _logBattleEnabled = GM_getValue("isBattleLoggingEnabled", false);//輸出戰鬥資訊
	let _connectingVisible = GM_getValue("hideConnectingScreen", false);//Connecting畫面
	let _errorPopupVisible = GM_getValue("disableErrorPopups", false);//Error彈窗
	let _enemyNumEnabled = GM_getValue("showEnemyHpValues", false);//顯示敵方血量數字
	let _autonomousRobot = GM_getValue("autonomousRobot", "none");//目前使用的輔助機器人名稱
	let _firebaseDbUrl = GM_getValue("firebaseDbUrl", "");//暫存救援ID的Database網址
	let _playerId = 0;//玩家ID
	let _isTaskProcessing = false;//任務執行鎖
	let _runningScene = null;//暫存場景物件
	let _currentSceneName = "unknown";//現在場景名稱
	let _sceneTimeoutId = null;//場景定時器
	let _httpClient = null;//HTTP連接
	let _battleWorld = null;//戰鬥場景
	let _language = 0;//遊戲顯示語言, 0:jp, 1:cht, 2:en
	let _questType = "unknown";//關卡類型
	let _apItemId = null;//AP道具ID
	let _bpItemId = null;//BP道具ID
	let _battleId = 0;//現在關卡ID
	let _enemyLevel = 0;//進場時關卡Boss等級
	let _enemyElement = '';//進場時關卡屬性
	let _enemyCount = 0;//進場時關卡敵人數量
	let _battlePartyId = 0;//進場時使用隊伍
	let _playerActionTime = 0;//暫存動作時間,防技能卡住
	let _rankingTimestamp = 0;//暫存更新名單的時間
	let _raidPointsDelayOk = false;//是否已關閉功績顯示造成的延遲
	const _minimumDamage = 1000000;//戰鬥紀錄可顯示的最小傷害

	//daily robot資料區
	const _dailyQuests = [];//待處理的每日戰鬥關卡
	let _dailyQuestLevelMax = GM_getValue("dailyQuestLevelMax", 111);//每日Raid關卡等級上限,大於此等級不執行
	let _dailyElementQuestId = 37;//每日屬性任務的執行關卡
	let _dailyMaterialQuestId = 35;//每日素材任務的執行關卡
	let _dailyAccessoryQuestId = GM_getValue("dailyAccessory", 87);//每日飾品任務的執行關卡

	//public raid robot資料區
	let _robotPublicRaidTimerId = null;//避免重復執行
	let _publicRaidEnemyHp = GM_getValue("publicRaidEnemyHp", 30.0);//必須高於此血量(%)
	let _publicRaidParticipants = GM_getValue("publicRaidParticipants", 8);//必須小於此人數
	let _publicRaidEnemyLevel = GM_getValue("publicRaidEnemyLevel", 109);//必須大於此等級

	//rescue raid robot 與 my raid robot 資料區
	let _robotRescueRaidTimerId = null;//避免重復執行
	let _lastRescueId = "";//上一次取得的救援ID
	let _rescueInterval = GM_getValue("rescueInterval", 3000);//救援碼詢問間隔時間(ms)
	let _myRaidQuestLevelMin = GM_getValue("myRaidQuestLevelMin", 109);//Raid關卡等級下限,小於此等級不執行
	let _myRaidQuestLevelMax = GM_getValue("myRaidQuestLevelMax", 160);//Raid關卡等級上限,大於此等級不執行

	//union robot資料區
	let _unionTimerId = null;//避免重復執行
	let _unionEventId = 0;//暫存事件ID
	let _unionPartyID = 0;//暫存隊伍
	let _unionElement = 0;//暫存支援幻獸屬性
	let _unionLevel = 0;//暫存進入關卡等級
	let _janitorMode = GM_getValue("janitorMode", false);//關卡收屍者模式

	//raid event robot資料區
	let _raidEventID = 0;//暫存事件ID

	//檢視傳輸資訊
	const _postQueue = [];//建立一個存放送出的Http字串的佇列
	let _isProcessingQueue = false;//標記目前是否正在處理佇列中，避免重複觸發
	let _battleStartInfo = null;//前一場戰鬥的啟動資訊,{url:?,Json:?}
	let _battleStartTime = 0;//前一場戰鬥的啟動時間,避免連續點擊加入戰鬥
	const _imageCollector = false;//要抓遊戲裡的圖才打開,避免拖累遊戲
	const _interceptedImageUrls = new Set();//記錄攔截到的圖片網址

	//原動畫延遲速度保留用
	let _originalGetPromiseToDelayAnimation = null;
	let _originalCharacterSpeed = null;
	let _originalEnemySpeed = null;
	/** 
	 * @description 延遲
	 * @param {number} ms - 毫秒
	 */
	const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
	/** 
	 * @description 隨機延遲
	 * @param {number} ms - 毫秒
	 */
	const sleepRandom = (baseMs, jitterMs = 100) => sleep(baseMs + Math.floor(Math.random() * jitterMs));

	init();//程式進入點

	/**
	 * @description 初始化遊戲引擎與攔截邏輯
	 */
	async function init() {
		//程式開始,等待遊戲載入
		setTimeout(initNetworkHooks, 500);
		debugLog('initialization Part1 starting...');
		//不顯示Server錯誤初始化
		initErrorKillerStyle();
		toggleErrorKiller(_errorPopupVisible);
		//開場輔助機先清空
		if (_autonomousRobot !== "none") sendRobotStrike();

		//監聽來自外層訊號
		GM_addValueChangeListener("disableErrorPopups", function(key, oldValue, newValue, remote) {
			_errorPopupVisible = newValue;
			toggleErrorKiller(_errorPopupVisible);//Error彈窗顯示
		});
		GM_addValueChangeListener("triggerReload", function() {
			window.parent.postMessage({ type: "action_lock", lock: false }, "*");//恢復外層UI
			location.reload();//重新載入遊戲
		});
		GM_addValueChangeListener("SellItems", async function() {
			runTaskSafely(executeItemReclamation);//還原武器幻獸飾品
		});
		GM_addValueChangeListener("AutoFreeGacha", async function() {
			runTaskSafely(executeFreeGacha);//每日十連
		});
		GM_addValueChangeListener("AutoRaidGacha", async function() {
			runTaskSafely(async () => {
				await executeRaidGacha();//抽當期Raid券
				await executeExpiringRaidGacha();//抽即期Raid券
			});
		});
		GM_addValueChangeListener("ClearMissions", async function() {
			runTaskSafely(claimMissionRewards);//清空任務欄
		});
		GM_addValueChangeListener("ClearPresents", async function() {
			runTaskSafely(collectAllPresents);//清空禮物箱
		});
		GM_addValueChangeListener("watchEpisodes", function() {
			runTaskSafely(autoPlayUnreadEpisodes);//清空未觀賞劇情
		});
		GM_addValueChangeListener("developerTest2", function() {
			runTaskSafely(executeDeveloperTests);//測試
		});
		GM_addValueChangeListener("getCacheImage", function() {
			runTaskSafely(downloadInterceptedImages);//下載快取中的圖片
		});
		GM_addValueChangeListener("getAllData", function() {
			runTaskSafely(async () => {
				try {
					await exportAllHimeData();//取得所有神姬資料
					await exportAllSummonData();//取得所有幻獸資料
					await exportAllWeaponData();///取得所有武器資料
					await exportAllSoulData();//取得所有英靈資料
				} catch (error) {
					debugLog("getAllData: " + error);
				}
			});
		});
		GM_addValueChangeListener("getScene", function() {
			runTaskSafely(async () => {
				try {
					if (!cc || !cc.director || !cc.director._runningScene) return;
					//取得畫面上的按鈕
					const currentScene = cc.director.getRunningScene() || cc.director._runningScene;
					await fetchAllNodes(currentScene);
				} catch (error) {
					debugLog("getScene: " + error);
				}
			});
		});
		GM_addValueChangeListener("shopping", function() {
			runTaskSafely(autoPurchaseShopItems);//商店兌換
		});
		GM_addValueChangeListener("animationSpeedFactor", function(key, oldValue, newValue, remote) {
			_animationSpeedFactor = newValue;
			debugLog('Animation Speed: ' + _animationSpeedFactor);
			applyAnimationSpeed();//動畫加速
		});
		GM_addValueChangeListener("skipAnimationDelay", function(key, oldValue, newValue, remote) {
			_animationDelay = newValue;
			setAnimationDelay();//動畫延遲
		});
		GM_addValueChangeListener("isAutoAttackEnabled", function(key, oldValue, newValue, remote) {
			_autoAttackEnabled = newValue;//戰鬥開始自動攻擊
		});
		GM_addValueChangeListener("isAutoDeployEnabled", function(key, oldValue, newValue, remote) {
			_isAutoDeployEnabled = newValue;//自動選擇幻獸與隊伍進場
		});
		GM_addValueChangeListener("isAutoRetryEnabled", function(key, oldValue, newValue, remote) {
			_autoRetryEnabled = newValue;//自動連續挑戰
		});
		GM_addValueChangeListener("myRaidHelpTarget", function(key, oldValue, newValue, remote) {
			_myHelpTarget = newValue;//自開Raid發送救援
		});
		GM_addValueChangeListener("othersRaidHelpTarget", function(key, oldValue, newValue, remote) {
			_othersHelpTarget = newValue;//他開Raid發送救援
		});
		GM_addValueChangeListener("raidHelpLevel", function(key, oldValue, newValue, remote) {
			_raidHelpLevel = newValue;//小於此Raid Level就不求援
			debugLog(`Level is below ${_raidHelpLevel}, skipping support request.`);
		});
		GM_addValueChangeListener("showEnemyHpValues", function(key, oldValue, newValue, remote) {
			_enemyNumEnabled = newValue;//顯示敵方血量數字
		});
		GM_addValueChangeListener("autonomousRobot", function(key, oldValue, newValue, remote) {
			_autonomousRobot = newValue;//使用的機器人
			robotRun("submitOrder");
		});
		GM_addValueChangeListener("firebaseDbUrl", function(key, oldValue, newValue, remote) {
			_firebaseDbUrl = newValue;//更新firebase URL
		});
		GM_addValueChangeListener("gameTimeScale", function(key, oldValue, newValue, remote) {
			_cocosTimeScale = newValue;
			applyGlobalTimeScale();//遊戲引擎速度
		});
		GM_addValueChangeListener("targetFps", function(key, oldValue, newValue, remote) {
			_cocosFps = newValue;
			applyFPS();//遊戲禎數
		});
		GM_addValueChangeListener("httpDelay", function(key, oldValue, newValue, remote) {
			_httpDelay = newValue;//Http取值回應延遲
		});
		GM_addValueChangeListener("isAutoSummonEnabled", function(key, oldValue, newValue, remote) {
			_autoSummonEnabled = newValue;//戰鬥開始招喚幻獸
		});
		GM_addValueChangeListener("isAutoEmoteEnabled", function(key, oldValue, newValue, remote) {
			_autoStampEnabled = newValue;//戰鬥開始發送表情
		});
		GM_addValueChangeListener("isRankingEnabled", function(key, oldValue, newValue, remote) {
			_isRankingEnabled = newValue;//Raid自動顯示玩家排行
		});
		GM_addValueChangeListener("isAutoBattleModeEnabled", function(key, oldValue, newValue, remote) {
			_autoBattleModeEnabled = newValue;//自訂紅綠自動
		});
		GM_addValueChangeListener("isAutoApBpRefillEnabled", function(key, oldValue, newValue, remote) {
			_autoAPBPEnabled = newValue;//結算自動補給
		});
		GM_addValueChangeListener("isAutoReloadEnabled", function(key, oldValue, newValue, remote) {
			_autoReloadEnabled = newValue;//自動戰鬥時閒置重整(防卡)
		});
		GM_addValueChangeListener("isPacketLoggingEnabled", function(key, oldValue, newValue, remote) {
			_logPacketsEnabled = newValue;//Http傳輸資訊
		});
		GM_addValueChangeListener("isBattleLoggingEnabled", function(key, oldValue, newValue, remote) {
			_logBattleEnabled = newValue;//實時戰鬥LOG更新
		});
		GM_addValueChangeListener("scenarioStart", function() {
			onScenario();//進入劇情
		});
		GM_addValueChangeListener("scenarioSkip", function() {
			onScenarioSkip();//劇情點擊Skip
		});
		GM_addValueChangeListener("loveSceneStart", function() {
			onLoveScenes();//進入寢室
		});
		GM_addValueChangeListener("LoveScenesSkip", function() {
			onLoveScenesSkip();//寢室點擊Skip
		});
		GM_addValueChangeListener("hideConnectingScreen", function(key, oldValue, newValue, remote) {
			_connectingVisible = newValue;//隱藏Connecting畫面
		});
		GM_addValueChangeListener("janitorMode", function(key, oldValue, newValue, remote) {
			_janitorMode = newValue;//煉獄收屍者
		});
		GM_addValueChangeListener("dailyQuestLevelMax", function(key, oldValue, newValue, remote) {
			 _dailyQuestLevelMax = newValue;//每日Raid關卡等級上限
		});
		GM_addValueChangeListener("dailyAccessory", function(key, oldValue, newValue, remote) {
			_dailyAccessoryQuestId = newValue;//每日飾品任務的執行關卡
		});
		GM_addValueChangeListener("rescueInterval", function(key, oldValue, newValue, remote) {
			 _rescueInterval = newValue;//救援碼詢問間隔時間
		});
		GM_addValueChangeListener("myRaidQuestLevelMin", function(key, oldValue, newValue, remote) {
			 _myRaidQuestLevelMin = newValue;//關卡等級下限
		});
		GM_addValueChangeListener("myRaidQuestLevelMax", function(key, oldValue, newValue, remote) {
			 _myRaidQuestLevelMax = newValue;//關卡等級上限
		});
		GM_addValueChangeListener("publicRaidEnemyHp", function(key, oldValue, newValue, remote) {
			 _publicRaidEnemyHp = newValue;//血量閥值
		});
		GM_addValueChangeListener("publicRaidParticipants", function(key, oldValue, newValue, remote) {
			 _publicRaidParticipants = newValue;//人數閥值
		});
		GM_addValueChangeListener("publicRaidEnemyLevel", function(key, oldValue, newValue, remote) {
			 _publicRaidEnemyLevel = newValue;//等級閥值
		});
	}
	/**
	 * @description 伺服器錯誤遮擋的樣式開關初始化
	 */
	function initErrorKillerStyle() {
		//檢查是否已經注入過
		if (document.getElementById('error-killer-style')) return;
		try {
			const styleNode = document.createElement('style');
			styleNode.id = 'error-killer-style';
			styleNode.innerHTML = `
				html.error-killer-on #error-ui {
					display: none !important;
					visibility: hidden !important;
					pointer-events: none !important; 
					opacity: 0 !important;
					z-index: -1 !important;
				}`;
			(document.head || document.documentElement).appendChild(styleNode);
			debugLog("Load Error Killer OK");
		} catch (error) {
			debugLog("initErrorKillerStyle:", error);
		}
	}
	/**
	 * @description 切換伺服器錯誤是否顯示
	 * @param {boolean} isOpen - 是否開啟
	 */
	function toggleErrorKiller(isOpen) {
		try {
			initErrorKillerStyle();
			const rootElement = document.documentElement; 
			if (isOpen) {
				rootElement.classList.add('error-killer-on');
			} else {
				rootElement.classList.remove('error-killer-on');
			}
		} catch (error) {
			debugLog("toggleErrorKiller:", error);
		}
	}
	/**
	 * @description 初始化步驟,傳輸攔截
	 */
	async function initNetworkHooks() {
		try {
			//等待kh建立完成
			if (!kh || !kh.Monitor || !kh.PopupFactoryComApRestart) {
				setTimeout(initNetworkHooks, 500);
				return;
			}
			//廢除路徑檢查機制(防外掛?)
			kh.Monitor.prototype.checkPath = () => {};
			//初始化 HTTP 連接
			if (!_httpClient) {_httpClient = kh.createInstance("HttpConnection");}
			//攔截所有發往遊戲伺服器的 GET 請求
			//const originalKhGet = kh.HttpConnection.prototype.get;
			kh.HttpConnection.prototype.get = function (requestData, reqType = "normal") {
				_postQueue.push(JSON.stringify( {...requestData, method: 'get'}));//加入佇列
				flushRequestQueue();//啟動解析佇列
				this.errorIfNotSetSessionId();
				return this._wrapFireEvent(function (req) {
					req = this._normalizeId(req);
					const actualUrl = this._URLDelegate.process(req);
					return this._connect.get(actualUrl)
						.fail(this.checkFailedReason.bind(this));
				}.bind(this), requestData, reqType);
			};
			//網路傳輸攔截
			//const originalKhPost = kh.HttpConnection.prototype.post;
			//攔截所有發往遊戲伺服器的 POST 請求
			kh.HttpConnection.prototype.post = function (requestData, reqType = "normal") {
				_postQueue.push(JSON.stringify({...requestData, method: 'post'}));//加入佇列
				flushRequestQueue();//啟動解析佇列
				this.errorIfNotSetSessionId();
				return this._wrapFireEvent(function (req) {
					req = this._normalizeId(req);
					const actualUrl = this._URLDelegate.process(req);
					return this._connect.post(actualUrl)
					.then(function (response) {
						PurgeRule.setChangeConnectionFlag();
						if (_httpDelay > 0) {
							return Q.delay(_httpDelay).thenResolve(response);
						} else {
							return response;
						}
					})
					.fail(this.checkFailedReason.bind(this));
				}.bind(this), requestData, reqType);
			};
			//攔截所有發往遊戲伺服器的 PUT 請求
			//const originalKhPut = kh.HttpConnection.prototype.put;
			kh.HttpConnection.prototype.put = function (requestData, reqType = "normal") {
				_postQueue.push(JSON.stringify({...requestData, method: 'put'}));//加入佇列
				flushRequestQueue();//啟動解析佇列
				this.errorIfNotSetSessionId();
				return this._wrapFireEvent(function (req) {
					req = this._normalizeId(req);
					const actualUrl = this._URLDelegate.process(req);
					return this._connect.put(actualUrl)
						.then(function (response) {
							PurgeRule.setChangeConnectionFlag();
							if (_httpDelay > 0) {
								return Q.delay(_httpDelay).thenResolve(response);
							} else {
								return response;
							}
						})
						.fail(this.checkFailedReason.bind(this));
				}.bind(this), requestData, reqType);
			}
			//修改預設的重試設定參數
			kh.HttpConnection.prototype.DEFAULT_RETRY_SETTINGS.minWait = 500;
			kh.HttpConnection.prototype.DEFAULT_RETRY_SETTINGS.maxCount = 10;
			kh.HttpConnection.prototype.DEFAULT_RETRY_SETTINGS.deadline = 40000;
			//斷線重連視窗攔截,直接重連
			kh.HttpConnection.prototype._processRetryResponse = function (argsData, error, timeMs, resultMsg) {
				if (!error || !error.body) return false;
				const [actionFn, reqObj, defer, connStats, reqType] = argsData;
				connStats.endAt = timeMs;
				connStats.result = resultMsg;
				const notifyCenter = kh.createInstance("notificationCenter");
				notifyCenter.dispatchEvent("connectionEnded", [reqObj.url, connStats, undefined, reqType]);
				kh.postMessage("removeLoading");
				if (connStats.count < 20) {
					this._retryAfterMinWait(argsData, error, 500);
				} else {
					kh.postMessage("reload");
				}
			};
			kh.HttpConnection._openRetryMessagePopup = function (argsData, error) {
				this._retryAfterMinWait(argsData, error, 500);
			}
			//跳出繼續戰鬥的視窗時,點擊回復戰鬥
			const originalOnPopupOpened = kh.PopupFactoryComApRestart.prototype.onPopupOpened;
			kh.PopupFactoryComApRestart.prototype.onPopupOpened = function (popup, ...args) {
				const result = originalOnPopupOpened.call(this, popup, ...args);
				setTimeout(() => {
					const restartBtn = popup.seekWidgetByName('btn_restart');
					if (restartBtn) {
						restartBtn._pushDownEvent();
						restartBtn._releaseUpEvent();
					}
				}, 0);
				return result;
			};
			//動畫加速
			kh.PlayerGameConfig.prototype.BATTLE_SPEED_SETTINGS.quick = _animationSpeedFactor;
			debugLog('Animation Speed: ' + _animationSpeedFactor);
			//動畫延遲
			if (!_originalGetPromiseToDelayAnimation) {
				_originalGetPromiseToDelayAnimation = khutil.getPromiseToDelayAnimation;
				_originalCharacterSpeed = kh.Character.prototype.ENTER_BATTLE_ANIMATION_SPEED;
				_originalEnemySpeed = kh.Enemy.prototype.ENTER_BATTLE_ANIMATION_SPEED;
			}
			if (_animationDelay) {
				//複寫動畫延遲 Promise。將原本傳入的延遲時間全部強制歸零 (0)
				khutil.getPromiseToDelayAnimation = function (_, args) {
					return _originalGetPromiseToDelayAnimation(0, args);
				};
				//將玩家與Boss的進場、登場動畫執行速度全部設為0
				kh.Character.prototype.ENTER_BATTLE_ANIMATION_SPEED=0;
				kh.Enemy.prototype.ENTER_BATTLE_ANIMATION_SPEED=0;
			}
			debugLog('Animation Delay: ' + _animationDelay);
			//獲取遊戲語言
			getGameLanguage();
			setTimeout(initGameEngine, 0);
			debugLog('initialization Part2 starting...');
		} catch(error) {
			debugLog("initNetworkHooks: " + error);
		}
	}
	/**
	 * @description 初始化步驟,套用Cocos設定
	 */
	async function initGameEngine() {
		try {
			//等待遊戲主頁建立完成
			if (!cc || !cc.director || !cc.director._runningScene) {
				setTimeout(initGameEngine, 500);
				return;
			}
			//場景切換事件
			_runningScene = cc.director._runningScene;
			//劫持 cc.director 的 _runningScene 屬性
			Object.defineProperty(cc.director, '_runningScene', {
				get() {
					return _runningScene;
				},
				set(newScene) {
					_runningScene = newScene;
					setTimeout(() => {onRunningSceneChanged();}, 0);
				},
				configurable: true,
				enumerable: true
			});
			//抓圖模式
			if (_imageCollector) {
				//攔截 Cocos2d 的 textureCache
				if (cc.textureCache && cc.textureCache.addImage) {
					const originalAddImage = cc.textureCache.addImage;
					cc.textureCache.addImage = function (url, cb, target) {
						if (url && typeof url === 'string') {_interceptedImageUrls.add(url);}
						return originalAddImage.call(this, url, cb, target);
					};
				}
				//攔截 Cocos2d 的 loader
				if (cc.loader && cc.loader.loadImg) {
					const originalLoadImg = cc.loader.loadImg;
					cc.loader.loadImg = function (url, option, cb) {
						if (url && typeof url === 'string') {_interceptedImageUrls.add(url);}
						return originalLoadImg.apply(this, arguments);
					};
				}
			}
			applyFPS();//調整遊戲FPS
			applyGlobalTimeScale();//調整遊戲時間尺度
			syncAnimationSpeed();//調整戰鬥動畫速度
			setTimeout(initBattleObservers, 0);//初始化戰鬥資訊
			debugLog('initialization Part3 starting...');
		} catch(error) {
			debugLog("initGameEngine: " + error);
		}
	}
	/**
	 * @description 初始化步驟, 攔截戰鬥資訊
	*/
	async function initBattleObservers() {
		try {
			if (!kh.RaidMessageHandler || !kh.BattleWorld || !kh.RaidScenarioPlayer || !kh.env || !kh.EnemyStatusBar) {
				setTimeout(initBattleObservers, 500);
				return;
			}
			//關閉傳送錯誤日誌
			kh.env.sendErrorLog = false;
			//攔截開始戰鬥
			const originalMethodStart = kh.BattleWorld.prototype._start;
			kh.BattleWorld.prototype._start = async function(sceneInstanceId) {
				const result = await originalMethodStart.apply(this, [sceneInstanceId]);
				setTimeout(onBattleStart, 0);
				return result;
			}			
			//攔截戰鬥結束
			const originalMethodEndBattle = kh.BattleWorld.prototype.endBattle;
			kh.BattleWorld.prototype.endBattle = async function(isForcedRelease) {
				setTimeout(onBattleEnd, 0);
				return originalMethodEndBattle.call(this, isForcedRelease);
			}
			//攔截戰鬥回合數
			const originalMethodSetTurnNumber = kh.Turn.prototype.setTurnNumber;
			kh.Turn.prototype.setTurnNumber = function (t) {
				const result = originalMethodSetTurnNumber.call(this, t);
				sendTurnText(t+1);
				return result;
			}	
			//攔截自己的戰鬥指令,檢測自動戰鬥中卡住的情況
			const originalMethodUseAbility = kh.BattleWorld.prototype.useAbility;
			kh.BattleWorld.prototype.useAbility = function(character, abilityPos, abilityTarget) {
				_playerActionTime = new Date();
				return originalMethodUseAbility.call(this, character, abilityPos, abilityTarget);
			}
			const originalMethodSummonAttack = kh.BattleWorld.prototype.summonAttack;
			kh.BattleWorld.prototype.summonAttack = function(index) {
				_playerActionTime = new Date();
				return originalMethodSummonAttack.call(this, index);
			}
			const originalMethodAttack = kh.BattleWorld.prototype.attack;
			kh.BattleWorld.prototype.attack = function() {
				_playerActionTime = new Date();
				return originalMethodAttack.call(this);
			}
			//顯示Raid中自己的動作
			const origMethodEnqueueOwnScenario = kh.RaidScenarioPlayer.prototype.enqueueOwnScenario;
			kh.RaidScenarioPlayer.prototype.enqueueOwnScenario = async function(scenarioData) {
				if (_logBattleEnabled) {onRaidActionSelf(scenarioData);}
				return origMethodEnqueueOwnScenario.apply(this, [scenarioData]);
			}
			//顯示Raid中隊友的動作
			const origMethodPostLog = kh.RaidMessageHandler.prototype._postLog;
			kh.RaidMessageHandler.prototype._postLog = async function(message) {
				if (_logBattleEnabled) {onRaidActionTeammate(message);}
				return origMethodPostLog.apply(this, [message]);
			}
			//敵方血量顯示
			const enemyStatusBarProto = kh.EnemyStatusBar.prototype;
			//初始化紀錄
			const originalMethodInitBase = enemyStatusBarProto._initBase;
			enemyStatusBarProto._initBase = function(statusData, param2, param3) {
				originalMethodInitBase.call(this, statusData, param2, param3);//先讓跑完預設邏輯
				this._cachedMaxHp = statusData.hpmax;//備份最大血量，供後續使用
				if (this._hpGauge && this._hpGauge.parent) {
					const parentNode = this._hpGauge.parent;
					const hpNumTxt = getEnemyHpNode(parentNode);
					//偵測顯示狀態
					const displayStr = getEnemyHpString(statusData.hp, this._cachedMaxHp);
					hpNumTxt.setString(displayStr);
				}
			};
			//戰鬥中血量變動
			const originalMethodAdjustHp = enemyStatusBarProto.adjustHP;
			enemyStatusBarProto.adjustHP = function(currentHp, isDamage) {
				originalMethodAdjustHp.call(this, currentHp, isDamage);
				const maxHp = this._cachedMaxHp || this.hpmax;//如果沒有快取最大血量，嘗試從屬性中尋找備用值
				if (this._hpGauge && this._hpGauge.parent && maxHp) {
					const parentNode = this._hpGauge.parent;
					const hpNumTxt = getEnemyHpNode(parentNode);
					if (hpNumTxt.isVisible() !== _enemyNumEnabled) {
						hpNumTxt.setVisible(_enemyNumEnabled);
					}
					if (_enemyNumEnabled) {
						const displayStr = getEnemyHpString(currentHp, maxHp);
						hpNumTxt.setString(displayStr);
					}
				}
			};
			//初始化怒氣條
			const originalMethodInitModeGauge = enemyStatusBarProto._initModeGauge;
			enemyStatusBarProto._initModeGauge = function(statusData) {
				originalMethodInitModeGauge.call(this, statusData);
				if (statusData.has_mode_gauge && this._modeGauge && this._modeGauge.parent) {
					const parentNode = this._modeGauge.parent;
					const modeNumTxt = getEnemyModeNode(parentNode);
					let percentVal = statusData.mode_gauge_percent;
					let displayStr = (typeof percentVal === 'number') 
						? percentVal.toFixed(1) + "%" 
						: percentVal + "%";
					modeNumTxt.setString(displayStr);
				}
			};
			//戰鬥中怒氣變動
			const originalMethodAdjustModeGauge = enemyStatusBarProto.adjustModeGauge;
			enemyStatusBarProto.adjustModeGauge = function(percentVal) {
				originalMethodAdjustModeGauge.call(this, percentVal);
				if (this._modeGauge && this._modeGauge.parent) {
					const parentNode = this._modeGauge.parent;
					const modeNumTxt = getEnemyModeNode(parentNode);
					if (modeNumTxt.isVisible() !== _enemyNumEnabled) {
						modeNumTxt.setVisible(_enemyNumEnabled);
					}
					if (_enemyNumEnabled) {
						let displayStr = (typeof percentVal === 'number') 
							? percentVal.toFixed(1) + "%" 
							: percentVal + "%";
						modeNumTxt.setString(displayStr);
					}
				}
			};
			//操作行為統計與埋點分析追蹤器,把紀錄全攔了
			if (kh._statisticsRepository) {
				debugLog("kill statistics repository!");
				const RepoPrototype = kh._statisticsRepository.prototype;
				const originalLogDown = RepoPrototype.logDown;
				RepoPrototype.logDown = function(nodeKey, normalizedPos, count) {return;};
				const originalLogUp = RepoPrototype.logUp;
				RepoPrototype.logUp = function(nodeKey, normalizedPos, holdDuration) {return;};
				const originalPickHotData = RepoPrototype.pickHotData;
				RepoPrototype.pickHotData = function(targetKey, limit) {return;};
				const originalSetThreshold = RepoPrototype.setThreshold;
				RepoPrototype.setThreshold = function(threshold) {return originalSetThreshold.call(this, -1);};
			}
			//取得玩家ID
			const apiPlayers = kh.createInstance("apiAPlayers");
			if (apiPlayers) {
				const playerRes = await apiPlayers.getMeNumeric();
				_playerId = playerRes.body.a_player_id;
				//_playerId = playerRes.body.dmm_id;
				const playerName = playerRes.body.name;
				debugLog(`current: ${playerName}(${_playerId})`);
			} else {
				debugLog("no apiPlayers!");
			}
			//取得補充AP|BP的道具ID
			await initApBp();
			//顯示現在場景
			const currentSceneName = cc.director._runningScene.sceneName;
			sendSceneText(currentSceneName ?? "*");
			debugLog('initialization ok');
		} catch(error) {
			debugLog("initBattleObservers: " + error);
		}
	}
	/**
	 * @description 取得敵方血量數字顯示元件
	 * @param {HTMLElement} parentNode - 父節點
	 * @returns {ccui.Text} 血量顯示文字元件
	 */
	function getEnemyHpNode(parentNode) {
		if (parentNode._customHpNode) return parentNode._customHpNode;
		let hpNumTxt = parentNode.seekWidgetByName("hpNum");
		if (!hpNumTxt) {
			//建立文字
			hpNumTxt = new ccui.Text();
			hpNumTxt.name = "hpNum";
			hpNumTxt.setFontSize(14);
			hpNumTxt.enableOutline(cc.color(0, 0, 0, 255), 3);
			hpNumTxt.setTextHorizontalAlignment(2);
			hpNumTxt.setPosition(0, parentNode.height - 76);
			hpNumTxt.setVisible(_enemyNumEnabled); 
			parentNode.addChild(hpNumTxt);
		}
		hpNumTxt.setTextAreaSize({ width: 300, height: 0 });
		parentNode._customHpNode = hpNumTxt;
		return hpNumTxt;
	}
	/**
	 * @description 取得敵方怒氣數字顯示元件
	 * @param {HTMLElement} parentNode - 父節點
	 * @returns {ccui.Text} 怒氣顯示文字元件
	 */
	function getEnemyModeNode(parentNode) {
		if (parentNode._customModeNode) return parentNode._customModeNode;
		let modeNumTxt = parentNode.seekWidgetByName("modeNum");
		if (!modeNumTxt) {
			//建立文字
			modeNumTxt = new ccui.Text();
			modeNumTxt.name = "modeNum";
			modeNumTxt.setFontSize(16);
			modeNumTxt.enableOutline(cc.color(0, 0, 0, 255), 3);
			modeNumTxt.setPosition(30, 6);
			modeNumTxt.setVisible(_enemyNumEnabled);
			parentNode.addChild(modeNumTxt);
		}
		parentNode._customModeNode = modeNumTxt;
		return modeNumTxt;
	}
	/**
	 * @description 將敵方血量數字格式化顯示為中文單位
	 * @param {number} currentHp - 當前血量
	 * @param {number} maxHp - 最大血量
	 * @returns {string} 格式化後的字串
	 */
	function getEnemyHpString(currentHp, maxHp) {
		function convertToChineseUnits(n) {
			if (n < 10000000) return n.toLocaleString();
			const yi = Math.floor(n / 100000000);
			const qianwan = Math.floor((n % 100000000) / 10000000);
			let str = "";
			if (yi > 0) str += yi + "億";
			if (qianwan > 0) str += qianwan + "千萬";
			return str;
		}
		// if (!maxHp || maxHp === 0) return "";
		// let hpStr = convertToChineseUnits(currentHp);
		// let maxHpStr = convertToChineseUnits(maxHp);
		// let result = `${hpStr} | ${maxHpStr}`;
		// return result;
		return convertToChineseUnits(currentHp);
	}
	/**
	 * @description 傳送 LOG 文字至網站頁面顯示
	 * @param {string} msg 
	 */
	function debugLog(msg) {
		window.parent.postMessage({type:"game_log",message: msg},"*");
	}
	/**
	 * @description 傳送關卡狀態文字至網站頁面顯示
	 * @param {string} msg 
	 */
	function sendQuestText(msg) {
		window.parent.postMessage({type:"game_quest", message: msg}, "*");
	}
	/**
	 * @description 傳送回合文字至網站頁面顯示
	 * @param {string|number} msg 
	 */
	function sendTurnText(msg) {
		window.parent.postMessage({type:"game_turn", message: msg}, "*");
	}
	/**
	 * @description 傳送場景狀態文字至網站頁面顯示
	 * @param {string} msg 
	 */
	function sendSceneText(msg) {
		window.parent.postMessage({type:"game_scene", message: msg}, "*");
	}
	/**
	 * @description 傳送中斷輔助機器人的指令
	 */
	function sendRobotStrike() {
		window.parent.postMessage({type:"game_bot_interrupt"}, "*");
	}
	/**
	 * @description 按鍵任務的安全包裹器（防連點與保護執行）
	 * @param {Function} taskCallback - 要執行的非同步任務
	 */
	async function runTaskSafely(taskCallback) {
		if (_isTaskProcessing) {
			debugLog(`Task is busy`);
			return;
		}
		_isTaskProcessing = true;
		//鎖定UI
		window.parent.postMessage({ type: "action_lock", lock: true }, "*");
		try {
			await taskCallback();
		} catch (error) {
			debugLog(`Task was error`);
		} finally {
			_isTaskProcessing = false;//解鎖
			//恢復UI
			window.parent.postMessage({ type: "action_lock", lock: false }, "*");
		}
	}
	/**
	 * @description 相對整網址轉換為完整網址
	 * @param {string} [url] - 物件網址
	 */
	function getFullUrl(url) {
		try {
			return new URL(url, document.baseURI).href;
		} catch (error) {
			return url;//解析失敗回傳原始網址
		}
	}
	/**
	 * @description 利用 Tampermonkey 繞過 CORS 下載圖片
	 * @param {string} [url] - 圖片網址
	 */
	function fetchImageAsBlob(url) {
		return new Promise((resolve, reject) => {
			GM_xmlhttpRequest({
				method: "GET",
				url: url,
				responseType: "arraybuffer",
				timeout: 10000,
				headers: {
					"Referer": document.baseURI || window.location.href,
					"Origin": window.location.origin,
					"Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
				},
				onload: function(response) {
					if (response.status === 200) {
						resolve(response.response);
					} else {
						reject(`HTTP Error: ${response.status}`);
					}
				},
				onerror: function(error) {
					reject("Network error or CORS blocked");
				},
				ontimeout: function() {
					reject("Connection timeout");
				}
			});
		});
	}
	/**
	 * @description 下載記錄到的圖片
	 */
	async function downloadInterceptedImages() {
		try {
			if (typeof fflate === 'undefined') {
				debugLog("fflate is not loaded. Please check the @require setting");
				return;
			}
			if (_interceptedImageUrls.size === 0) {
				debugLog("No images intercepted yet");
				return;
			}
			debugLog(`Preparing to pack ${_interceptedImageUrls.size} images. Starting file downloads...`);
			let successCount = 0;
			const zipData = {};
			//下載
			for (let url of _interceptedImageUrls) {
				try {
					const fullUrl = getFullUrl(url);
					const fileData = await fetchImageAsBlob(fullUrl);
					if (!fileData || fileData.byteLength === 0) continue;
					let fileName = fullUrl.split('/').pop().split('?')[0];
					if (!fileName) fileName = `image_${successCount}.png`;
					zipData[`kamihime_images/${fileName}`] = new Uint8Array(fileData);
					successCount++;
					debugLog(`added: ${fileName}`);
				} catch (err) {
					debugLog(`Failed to download image (${url}): ${err}`);
				}
			}
			if (successCount === 0) {
				debugLog("All images failed to download.");
				return;
			}
			debugLog(`File downloads complete! Generating ZIP with ${successCount} images...`);
			//下載
			const zippedUint8Array = fflate.zipSync(zipData, { level: 0 });
			const zipContent = new Blob([zippedUint8Array], { type: "application/zip" });
			const downloadUrl = URL.createObjectURL(zipContent);
			const a = document.createElement("a");
			a.href = downloadUrl;
			a.download = "kamihime_images.zip";
			a.style.display = "none";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(downloadUrl);
			debugLog("Zip download task completed!");
		} catch (error) {
			debugLog("downloadInterceptedImages: " + error);
		}
	}
	/**
	 * @description 查詢一個物件底下的所有方法與變數，並印出至除錯視窗
	 * @param {Object} obj - 要查詢的目標物件
	 * @param {string} [objName="default"] - 自訂顯示的物件名稱，方便在日誌中辨識
	 */
	function inspectObject(obj, objName = "default") {
		if (obj === null || obj === undefined) {
			debugLog("The target object is null or undefined.");
			return;
		}
		const allKeys = new Set();
		let currentObj = obj;
		//向上爬尋原型鏈，收集所有不重複的鍵名
		while (currentObj && currentObj !== Object.prototype) {
			const keys = Reflect.ownKeys(currentObj);
			keys.forEach(key => {
				if (key === 'constructor') return;//排除建構子
				allKeys.add(key);
			});
			currentObj = Object.getPrototypeOf(currentObj);
		}
		const methods = [];
		const variables = [];
		//分類並檢查型態是否為文字或數字
		allKeys.forEach(key => {
			const keyStr = key.toString();
			try {
				const value = obj[key];
				if (typeof value === 'function') {
					let funcCode;
					try {
						funcCode = Function.prototype.toString.call(value);
					} catch (error) {
						funcCode = "[Cannot get source]";
					}
					//處理不同寫法的函數字串
					//匿名函數 (例如 "function(child, ...)")
					if (/^function\s*\(/.test(funcCode)) {
						// 將 "function(" 替換為 "function 名稱("
						funcCode = funcCode.replace(/^function\s*\(/, `function ${keyStr}(`);
					} else if (!/^function\b/.test(funcCode) && !/^\s*\(/.test(funcCode) && !/=>/.test(funcCode)) {
						//直接在最前面補上 function
						funcCode = `function ${funcCode}`;
					}
					methods.push({name: keyStr,code: funcCode});
				} else {
					let valSuffix = "";
					if (typeof value === 'string') {
						valSuffix = ` = "${value}"`;
					} else if (typeof value === 'number') {
						valSuffix = ` = ${value}`;
					} else if (typeof value === 'boolean') {
						valSuffix = ` = ${value}`;
					} else if (Array.isArray(value)) {
						valSuffix = ` = new Array(${value.length})`;
					} else if (typeof value === 'object') {
						// 取得物件的 Constructor 名稱（例如: "Sprite", "Node", "Object"）
						const className = value.constructor && value.constructor.name ? value.constructor.name : "Object";
						valSuffix = ` = null; // ${className}`;
					} else {
						valSuffix = " = null;";
					}
					variables.push(`${keyStr}${valSuffix};`);
				}
			} catch (error) {
				//防止某些層級的 getter 屬性在執行時報錯
				variables.push(`${keyStr}: Read error`);
			}
		});
		//排序
		variables.sort();
		methods.sort((a, b) => {
			if (a.name === 'ctor') return -1;
			if (b.name === 'ctor') return 1;
			if (a.name === 'init') return -1;
			if (a.name === 'init') return -1;
			return a.name.localeCompare(b.name);
		});
		//格式化文字排版
		let logMsg = `${objName}.Variables/Attributes\n`;
		if (variables.length > 0) {
			logMsg += variables.map(v => `let ${v}`).join('\n') + '\n';
		}
		logMsg += `\n${objName}.function\n`;
		if (methods.length > 0) {
				logMsg += methods.map(m => {
					return `${m.code}\n`;
				}).join("\n");
		}
		debugLog(logMsg);
	}
	/**
	 * @description 掃描目前畫面上可見且可點擊的按鈕
	 * @param {Object} scene - 當前運作的 cc.director._runningScene 物件
	 * @returns {Promise<number>} 回傳找到的元件數量
	 */
	async function fetchAllNodes(scene) {
		const currentSceneName = scene.sceneName;
		if (typeof currentSceneName !== "undefined") {
			debugLog("sceneName: " + currentSceneName);
		}
		const foundNodes = [];
		//遞迴搜尋
		traverse(scene, "");
		//排序
		//foundNodes.sort((a, b) => a.className.localeCompare(b.className));
		//顯示取得資訊
		let logMsg = `\n`;
		if (foundNodes.length > 0) {
			foundNodes.forEach(btn => {
				logMsg += `class:${btn.className}, name:${btn.name} , text:${btn.text}, enabled:${btn.isEnabled}, visible:${btn.isVisible}, path:${btn.path}\n`;
			});
		} else {
			debugLog("no button in scene.");
		}
		debugLog(logMsg);
		return foundNodes.length;
		//遞迴搜尋函式，會一直往子層（Children）深入尋找
		function traverse(node, parent) {
			if (!node) return;
			//取得該元件的名稱與型態
			const nodeName = typeof node.getName === 'function' ? node.getName() : "";
			const nodeClassName = node._className || "unknown";
			const nodeNameFixed = (nodeName || (nodeClassName + "(C)"));	
			let isNodeClickable = typeof node.isTouchEnabled === 'function' ? node.isTouchEnabled() : true;
			let isNodeEnabled = typeof node.isEnabled === 'function' ? node.isEnabled() : true;
			let isNodeVisible = typeof node.isVisible === 'function' ? node.isVisible() : true;
			let nodeText = "";
			if (typeof node.getTitleText === 'function') {
				nodeText = node.getTitleText();
			} else if (typeof node.getString === 'function') {
				nodeText = node.getString();
			}
			if (node._className) {
				const CLASS_RECORD = ["Layer", "Scene", "Layer", "Button", "Text", "LabelTTF"];
				if (CLASS_RECORD.includes(node._className)) {
					foundNodes.push({
						node: node,
						name: nodeNameFixed,
						className: nodeClassName,
						text: nodeText,
						path: parent,
						isVisible: isNodeVisible,
						isClickable: isNodeClickable,
						isEnabled: isNodeEnabled
					});
				}
			}
			//繼續深入搜尋所有的子節點
			if (typeof node.getChildren === 'function') {
				const children = node.getChildren();
				if (children && children.length > 0) {
					for (let i = 0; i < children.length; i++) {
						let currentPath = parent ? (parent + "/" + nodeNameFixed) : nodeNameFixed;
						traverse(children[i], currentPath); // 遞迴
					}
				}
			}
		}
	}
	/**
	 * @description 依 fetchAllNodes 找出的路徑獲取元件
	 * @param {Object} rootNode - 根節點
	 * @param {string} path - 指定的搜尋路徑
	 * @returns {Promise<Object|null>} 找到的目標元件
	 */
	async function getNodeByPath(rootNode, path) {
		try {
			if (!rootNode || !path) return null;
			//分解路徑
			const names = path.split('/');
			let currentNode = rootNode;
			const rootName = typeof currentNode.getName === 'function' ? currentNode.getName() : "";
			if (names[0] === rootName || names[0] === (currentNode._className + "(C)")) {
				names.shift();
			}
			//開始往下找
			for (let targetName of names) {
				if (!currentNode) return null;

				let foundChild = null;
				const children = typeof currentNode.getChildren === 'function' ? currentNode.getChildren() : [];
				
				for (let i = 0; i < children.length; i++) {
					const child = children[i];
					const childName = typeof child.getName === 'function' ? child.getName() : "";
					const childClassName = child._className || "unknown";
					const childFixedName = childName || (childClassName + "(C)");
					if (childFixedName === targetName) {
						foundChild = child;
						break; // 找到這層的目標
					}
				}
				currentNode = foundChild;
				if (!currentNode) {
					//debugLog(`can nont find [${targetName}]`);
					return null;
				}
			}
			return currentNode;
		} catch (error) {
			debugLog(`getNodeByPath: ` + error);
			return null;
		}
	}
	/**
	 * @description 執行開發者測試
	 */
	async function executeDeveloperTests() {
		try {
			//列出所有轉蛋資訊
			//fetchAllGachaPools();
			//取得隊伍資料
			//fetchPartyDetails();
			//查詢表情符號
			//fetchOwnedStamps();
			//查詢關卡資料
			//fetchElementQuest();
			//fetchMaterialQuest();
			//fetchAccessoryQuest();

			await exportAllSummonData() ;

			// //個人留言板
			// const raidRes = await _httpClient.get({
			// 	url: kh.env.urlRoot + "/a_greets",
			// 	json: { a_player_id: "me" }
			// });
			// if (raidRes.body.max_record_count < 1) {
			// 	debugLog("no greets");
			// }
			// debugLog(JSON.stringify(raidRes.body, null, 2));
			// //公會留言板
			// const unionRes = await _httpClient.get({url: kh.env.urlRoot + "/a_unions/me/chats"});
			// debugLog(JSON.stringify(unionRes.body, null, 2));

			// if (!_httpClient) { debugLog("HTTP connection not initialized"); return defaultData; }
			// //發送請求取得該關卡的詳細資料
			// const areaId = Math.ceil(64 / 5);
			// const detailRes = await _httpClient.get({url: `${kh.env.urlRoot}/a_worlds/current`});
			// const responseData = detailRes.body;
			// const isAreaExist = responseData.a_areas.some((area) => {return area.area_id === areaId;});
			// if (isAreaExist) {
			// 	const apiAQuestInfo = kh.createInstance("apiAQuestInfo");
			// 	await apiAQuestInfo.moveArea(areaId);
			// } else {
			// 	debugLog("no areaId" + areaId);
			// }
			//debugLog(JSON.stringify(detailRes.body, null, 2));

			//exportAllWeaponData();
			//debugLog(JSON.stringify(res.body, null, 2));
		} catch (error) {
			debugLog("executeDeveloperTests: " + error);
			debugLog(JSON.stringify(error, null, 2));
		}
	}
	/**
	 * @description 由網址取得遊戲語言,0:jp, 1:cht, 2:en
	 */
	function getGameLanguage() {
		try {
			// 取得引入此 iframe 的外層網址
			const outerUrl = document.referrer;
			if (outerUrl.includes("skh.johren.games")) {
				debugLog("Hime lauguage(cht)");
				_language = 1;
			} else if (outerUrl.includes("d2bqgmeis0s2xb")) {
				debugLog("Hime lauguage(cht)");
				_language = 1;
			} else if (outerUrl.includes("d39cq07z7xwhr4")) {
				debugLog("Hime lauguage(cht)");
				_language = 1;
			} else if (outerUrl.includes("du5e2cube3h3c")) {
				debugLog("Hime lauguage(en)");
				_language = 2;
			} else if (outerUrl.includes("nkh.dmmgames.com")) {
				debugLog("Hime lauguage(en)");
				_language = 2;
			} else if (outerUrl.includes("osapi.dmm.com")) {
				debugLog("Hime lauguage(jp)");
				_language = 0;
			} else if (outerUrl.includes("kamihimeproject.net")) {
				debugLog("Hime lauguage(jp)");
				_language = 0;
			} else {
				debugLog("Hime lauguage? " + outerUrl);
				_language = 0;
			}
		} catch (error) {
			debugLog("getGameLanguage: " + error);
		}
		return _language;
	}
	/**
	 * @description 模擬按鈕點擊
	 * @param {string} path - 指定的Button路徑
	 * @returns {Promise<boolean>} 模擬點擊成功回傳 true，否則回傳 false
	 */
	async function simulateTouchByPath(path) {
		try {
			const currentScene = cc.director.getRunningScene();
			const targetButton = await getNodeByPath(currentScene, path);
			return await simulateTouch(targetButton);
		} catch (error) {
			debugLog("simulateTouchByPath: " + error);
			return false;
		}
	}
	/**
	 * @description 模擬按鈕點擊
	 * @param {Object} targetButton - 目標Button物件
	 * @returns {Promise<boolean>} 模擬點擊成功回傳 true，否則回傳 false
	 */
	async function simulateTouch(targetButton) {
		try {
			if (!targetButton) return false;
			if (!targetButton.isVisible()) return false;
			if (!targetButton.isTouchEnabled()) return false;
			if (!targetButton.isEnabled()) return false;
			const mockTouch = {getLocation: () => ({ x: 0, y: 0 }), getStartLocation: () => ({ x: 0, y: 0 }), getID: () => 0};
			const mockEvent = {};
			targetButton._pushDownEvent(mockTouch, mockEvent);//模擬滑鼠按下
			targetButton._releaseUpEvent(mockTouch, mockEvent);//模擬滑鼠放開
			return true;
		} catch (error) {
			debugLog("simulateTouch: " + error);
			return false;
		}
	}
	/**
	 * @description 解析送出給Server的字串
	 */
	function flushRequestQueue() {
		//如果已經在處理中了，就直接返回，讓原本的迴圈繼續跑即可
		if (_isProcessingQueue) return;
		//檢查如果佇列空了，就關閉處理狀態
		if (_postQueue.length === 0) {
			_isProcessingQueue = false;
			return;
		}
		//鎖定並開始處理
		_isProcessingQueue = true;
		setTimeout(function() {
			//取出佇列中最前端資料
			const rawJsonStr = _postQueue.shift();
			//有開啟顯示時,檢視字串
			if (_logPacketsEnabled) {debugLog(rawJsonStr);}
			try {
				//紀錄進入戰鬥時的資訊
				const requestObj = JSON.parse(rawJsonStr);
				if (requestObj.url && requestObj.json) {
					const urlPatternSelf = /^\/a_quests\/\d+\/start$/;
					const urlPatternJoin = /^\/a_battles\/\d+$/;
					if (urlPatternSelf.test(requestObj.url)) {
						//自開關卡
						_battleStartTime = Date.now();
						_battleStartInfo = requestObj;
						//取得隊伍ID
						_battlePartyId = requestObj.json.a_party_id;
					} else if (urlPatternJoin.test(requestObj.url)) {
						//別人的關卡
						_battleStartTime = Date.now();
						_battleStartInfo = null;//先不紀錄
						//取得隊伍ID
						_battlePartyId = requestObj.json.a_party_id;
					}
				}				
			} catch (error) {
				debugLog("Parsing JSON failed: " + error.message);
			}
			//處裡完這一個之後，解鎖狀態，並立刻遞迴檢查下一個
			_isProcessingQueue = false;
			flushRequestQueue();
		}, 0);
	}
	/**
	 * @description 查詢用戶的屬性關卡狀態
	 */
	async function fetchElementQuest() {
		try {
			if (!_httpClient) { debugLog("HTTP connection not initialized"); return; }
			const questRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_quests",
				json: { type: "quest_portal", portal_type: "elemental" }
			});
			if (questRes && questRes.body) {
				debugLog(JSON.stringify(questRes.body, null, 2));
			}
		} catch (error) {
			debugLog("fetchElementQuest: " + error);
		}
	}
	/**
	 * @description 查詢用戶的素材關卡狀態
	 */
	async function fetchMaterialQuest() {
		try {
			if (!_httpClient) { debugLog("HTTP connection not initialized"); return; }
			const questRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_quests",
				json: { type: "quest_portal", portal_type: "material" }
			});
			if (questRes && questRes.body) {
				debugLog(JSON.stringify(questRes.body, null, 2));
			}
		} catch (error) {
			debugLog("fetchMaterialQuest: " + error);
		}
	}
	/**
	 * @description 查詢用戶的飾品關卡狀態
	 */
	async function fetchAccessoryQuest() {
		try {
			if (!_httpClient) { debugLog("HTTP connection not initialized"); return; }
						const questRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_quests",
				json: { type: "quest_portal", portal_type: "accessory" }
			});
			if (questRes && questRes.body) {
				const questsFlame = questRes.body.accessory_quest_list.flame.data;
				debugLog("Flame");
				for (const quest of questsFlame) {debugLog(`ID: ${quest.quest_id}, ${quest.is_new}, ${quest.title}`);}
				debugLog("Water");
				const questsWater = questRes.body.accessory_quest_list.water.data;
				for (const quest of questsWater) {debugLog(`ID: ${quest.quest_id}, ${quest.is_new}, ${quest.title}`);}
				debugLog("Wind");
				const questsWind = questRes.body.accessory_quest_list.wind.data;
				for (const quest of questsWind) {debugLog(`ID: ${quest.quest_id}, ${quest.is_new}, ${quest.title}`);}
				debugLog("Thunder");
				const questsThunder = questRes.body.accessory_quest_list.thunder.data;
				for (const quest of questsThunder) {debugLog(`ID: ${quest.quest_id}, ${quest.is_new}, ${quest.title}`);}
				debugLog("Light");
				const questsLight = questRes.body.accessory_quest_list.light.data;
				for (const quest of questsLight) {debugLog(`ID: ${quest.quest_id}, ${quest.is_new}, ${quest.title}`);}
				debugLog("Darkness");
				const questsDarkness = questRes.body.accessory_quest_list.darkness.data;
				for (const quest of questsDarkness) {debugLog(`ID: ${quest.quest_id}, ${quest.is_new}, ${quest.title}`);}
				debugLog("All");
				const questsAll = questRes.body.accessory_quest_list.all.data;
				for (const quest of questsAll) {debugLog(`ID: ${quest.quest_id}, ${quest.is_new}, ${quest.title}`);}
			}
		} catch (error) {
			debugLog("fetchAccessoryQuest: " + error);
		}
	}
	/**
	 * @description 查詢表情符號
	 */
	async function fetchOwnedStamps() {
		try {
			if (!_httpClient) { debugLog("HTTP connection not initialized"); return; }
			const stampsRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_stamps"
			});
			if (stampsRes && stampsRes.body) {
				debugLog(JSON.stringify(stampsRes.body, null, 2));
			}
		} catch (error) {
			debugLog("fetchOwnedStamps: " + error);
		}
	}
	/**
	 * @description 查詢所有隊伍資訊
	 */
	async function fetchPartyDetails() {
		try {
			const apiAParties = kh.createInstance("apiAParties");
			const response = await apiAParties.getList();
			const partyIds = response.body.a_party_ids.slice(0, 84);
			
			for (const id of partyIds) {
				if (typeof id !== 'number') continue;
				const deckData = await apiAParties.getSelectionDeck(id);
				const deck = deckData.body.deck;
				//deck.selected       //現在的隊伍
				//deck.a_party_id     //隊伍id
				//deck.element_type   //隊伍屬性
				//deck.job            //英靈,要透過job_id再查詢
				//deck.characters[i]  //神姬,要透過character_id再查詢
				//deck.main_weapon    //英靈武器,要透過weapon_id再查詢
				//deck.weapons[i]     //武器,要透過weapon_id再查詢
				//deck.main_summon    //主要幻獸,要透過summon_id再查詢
				//deck.summons[i]     //裝備幻獸,要透過summon_id再查詢
			}
			//apiAParties.getSelectionDeck(id) //切換隊伍
		} catch (error) {
			debugLog("fetchPartyDetails: " + error);
		}
	}
	/**
	 * @description 查詢所有轉蛋資訊
	 */
	async function fetchAllGachaPools() {
		try {
			if (!_httpClient) {debugLog("HTTP connection not initialized"); return;}
			const gachaRes = await _httpClient.get({
				url: kh.env.urlRoot + "/gacha_categories"
			});
			if (gachaRes && gachaRes.body) {
				debugLog(JSON.stringify(gachaRes.body, null, 2));
			}
		} catch (error) {
			debugLog("fetchAllGachaPools: " + error);
		}
	}
	/**
	 * @description 自動安排蘿蔔工作
	 * @param {String} stepName - 位於哪個階段的呼叫
	 * @returns {boolean} 放行程式繼續執行回傳true,否則回傳false
	 */
	async function robotRun(stepName) {
		let result = true;
		try {
			//debugLog("run robotRun(" + _autonomousRobot + ")." + stepName);
			//收到事件, 找現在輪值的蘿蔔去做事
			//submitOrder 用戶提交任務需求
			//BattleRescue 自發取得救援碼
			//died 戰鬥中陣亡
			//onBattleEnd 戰鬥結束
			//onQuestResult 戰鬥結算
			//onQuestResultTimeout 戰鬥結算逾時
			switch (_autonomousRobot) {
				case "daily":
					switch (stepName) {
						case "submitOrder":result = await robotDailyStart();break;
						case "BattleRescue":break;
						case "died":break;
						case "onBattleEnd":break;
						case "onQuestResult":result = await robotDailyQuestResult();break;
						case "onQuestResultTimeout":result = await robotDailyQuestResult();break;
					}
					break;	
				case "public":
					switch (stepName) {
						case "submitOrder":if (!_robotPublicRaidTimerId) _robotPublicRaidTimerId = setTimeout(robotPublicRaidTimer, 0);break;
						case "BattleRescue":break;
						case "died":if (!_robotPublicRaidTimerId) _robotPublicRaidTimerId = setTimeout(robotPublicRaidTimer, 0);break;
						case "onBattleEnd":break;
						case "onQuestResult":if (!_robotPublicRaidTimerId) _robotPublicRaidTimerId = setTimeout(robotPublicRaidTimer, 0);break;
						case "onQuestResultTimeout":break;
					}
					break;
				case "rescue":
					switch (stepName) {
						case "submitOrder":if (!_robotRescueRaidTimerId) _robotRescueRaidTimerId = setTimeout(robotRescueRaidTimer, 0);break;
						case "BattleRescue":break;
						case "died":break;
						case "onBattleEnd":break;
						case "onQuestResult":if (!_robotRescueRaidTimerId) _robotRescueRaidTimerId = setTimeout(robotRescueRaidTimer, 0);break;
						case "onQuestResultTimeout":if (!_robotRescueRaidTimerId) _robotRescueRaidTimerId = setTimeout(robotRescueRaidTimer, 0);break;
					}
					break;
				case "myRaid":
					switch (stepName) {
						case "submitOrder":result = await robotMyRaidStart();break;
						case "BattleRescue":
							result = await robotMyRaidBattleRescue();
							await sleep(_rescueInterval - 1000);
							break;
						case "died":break;
						case "onBattleEnd":break;
						case "onQuestResult":result = await robotMyRaidStart();break;
						case "onQuestResultTimeout":result = await robotMyRaidStart();break;
					}
					break;
				case "union":
					switch (stepName) {
						case "submitOrder":result = await robotUnionStart();break;
						case "BattleRescue":break;
						case "died":result = await robotUnionTrigger();break;
						case "onBattleEnd":break;
						case "onQuestResult":result = await robotUnionTrigger();break;
						case "onQuestResultTimeout":break;
					}
					break;
				case "raidEvent":
					switch (stepName) {
						case "submitOrder":result = await robotRaidEventStart();break;
						case "BattleRescue":break;
						case "died":break;
						case "onBattleEnd":break;
						case "onQuestResult":result = await robotRaidEventTrigger();break;
						case "onQuestResultTimeout":result = await robotRaidEventTrigger();break;
					}
					break;
				case "eidolonOrb":
					switch (stepName) {
						case "submitOrder":result = await robotEidolonOrbStart();break;
						case "BattleRescue":break;
						case "died":break;
						case "onBattleEnd":break;
						case "onQuestResult":result = await robotEidolonOrbTrigger();break;
						case "onQuestResultTimeout":result = await robotEidolonOrbTrigger();break;
					}
					break;
				case "freeMan":
					switch (stepName) {
						case "submitOrder":result = await robotFreeManStart();break;
						case "BattleRescue":break;
						case "died":break;
						case "onBattleEnd":break;
						case "onQuestResult":result = await robotFreeManTrigger();break;
						case "onQuestResultTimeout":result = await robotFreeManTrigger();break;
					}
					break;
			}
		} catch (error) {
			debugLog("botRun: " + error);
			result = false;
		}
		return result;
	}
	/**
	 * @description 幻獸點關卡,主線64-2
	 */
	async function robotEidolonOrbStart() {
		try {
			if (_currentSceneName === "battle") return;//戰鬥中不作用
			robotEidolonOrbTrigger();
		} catch (error) {
			debugLog("robotFreeManStart: " + error);
		}
	}
	/**
	 * @description 幻獸點關卡,主線64-2
	 * @returns {boolean} 放行程式繼續執行回傳true,否則回傳false
	 */
	async function robotEidolonOrbTrigger() {
		try {
			//主線關卡章節
			const questType = "main";
			const mainQuestID = 64;
			const episodeNum = 2;
			//取得關卡之前的資訊
			const main642PrevInfo = await getQuestPrevious(mainQuestID, questType, episodeNum);
			const prevPartyId = main642PrevInfo.prevPartyId;
			const prevSummonElement = main642PrevInfo.prevSummonElement;
			//取得支援幻獸
			const supportSummonId = await getSupportSummonId(prevSummonElement);
			//產生入場資訊
			const currentQuest = {
				url: `${kh.env.urlRoot}/a_quests/${mainQuestID}/start`,
				json: {
					type: questType,
					a_party_id: prevPartyId,
					support_a_summon_id: supportSummonId,
					support_summon_tab_element_type: prevSummonElement,
					episode_num: episodeNum
				}
			}
			//進入幻獸點關卡
			if (await launchRaidBattle(currentQuest)) {
				await sleep(1000);
				return false;
			} else {
				debugLog("launch fail, give up");
			}
		} catch (error) {
			debugLog("robotSummonPointStart: " + error);
		}
	}
	/**
	 * @description raid event關卡
	 */
	async function robotRaidEventStart() {
		try {
			const raidEventType = "raid_event";
			if (_raidEventID === 0) {
				//取得活動ID
				const eventRes = await _httpClient.get({
					url: kh.env.urlRoot + "/a_banners/event_on_period"
				});
				const currentEvent = eventRes.body.data.find((e) => raidEventType === e.event_type);
				if (!currentEvent) {
					debugLog("no event id.");
					return;
				}
				_raidEventID = currentEvent.event_id;
				debugLog("event id: " + _raidEventID);
			}
			await robotRaidEventTrigger();
		} catch (error) {
			debugLog("robotRaidEventStart: " + error);
		}
	}
	/**
	 * @description raid event關卡
	 * @returns {boolean} 放行程式繼續執行回傳true,否則回傳false
	 */
	async function robotRaidEventTrigger() {
		try {
			const raidEventType = "event_raid";
			//取得活動道具數量
			const questRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_quests",
				json: { type: "event", "event_id": _raidEventID}
			});
			if (!questRes) {debugLog("no respone.");return true;}
			if (!questRes.body) {debugLog("no respone.");return true;}
			if (!questRes.body.data) {debugLog("no respone.");return true;}
			const questWithItems = questRes.body.data.find(q => q.required_item && q.required_item.length > 0);
			const itemNum = questWithItems ? questWithItems.required_item[0].possession_amount : 0;
			let targetQuestId = null;
			//道具多就刷ragnarok,否則刷expert
			if (itemNum > 200) {
				const ragnarokQuest = questRes.body.data.find((q) => q.difficulty === "ragnarok");
				if (ragnarokQuest) targetQuestId = ragnarokQuest.quest_id;
			} else {
				const expertQuest = questRes.body.data.find((q) => q.difficulty === "expert");
				if (expertQuest) targetQuestId = expertQuest.quest_id;
			}
			if (!targetQuestId) {debugLog("no quest Id.");return true;}
			//取得關卡之前的資訊
			const questPrevInfo = await getQuestPrevious(targetQuestId, raidEventType);
			const prevPartyId = questPrevInfo.prevPartyId;
			const prevSummonElement = questPrevInfo.prevSummonElement;
			//取得支援幻獸
			const supportSummonId = await getSupportSummonId(prevSummonElement);
			//產生入場資訊
			const currentQuest = {
				url: `${kh.env.urlRoot}/a_quests/${targetQuestId}/start`,
				json: {
					type: raidEventType,
					a_party_id: prevPartyId,
					support_a_summon_id: supportSummonId,
					support_summon_tab_element_type: prevSummonElement,
				}
			}
			//進入關卡
			if (await launchRaidBattle(currentQuest)) {
				await sleep(1000);
				return false;
			} else {
				debugLog("launch fail, give up");
				return true;
			}
		} catch (error) {
			debugLog("robotRaidEventTrigger: " + error);
		}
		return true;
	}
	/**
	 * @description 64-2幻獸點關卡 或是 救援Raid
	 */
	async function robotFreeManStart() {
		try {
			//戰鬥中不作用
			if (_currentSceneName === "battle") return;
			robotFreeManTrigger();
		} catch (error) {
			debugLog("robotFreeManStart: " + error);
		}
	}
	/**
	 * @description 測試多種任務轉換, 64-2幻獸點關卡 或是 救援Raid
	 * @returns {boolean} 放行程式繼續執行回傳true,否則回傳false
	 */
	async function robotFreeManTrigger() {
		try {
			const rescueId = await fetchStringFromFirebase();
			if (rescueId) {
				const pureRescueId = rescueId.slice(0, 9);
				await refillApBpIfNeeded();
				await settleUnverifiedBattles();
				if (await joinRescueRaid(pureRescueId)) {
					await sleep(1000);
					return false;
				} else {
					debugLog("join fail, give up");
					return true;
				}
			} else {
				//主線關卡章節
				const questType = "main";
				const mainQuestID = 64;
				const episodeNum = 2;
				//取得關卡之前的資訊
				const main642PrevInfo = await getQuestPrevious(mainQuestID, questType, episodeNum);
				const prevPartyId = main642PrevInfo.prevPartyId;
				const prevSummonElement = main642PrevInfo.prevSummonElement;
				//取得支援幻獸
				const supportSummonId = await getSupportSummonId(prevSummonElement);
				//產生入場資訊
				const currentQuest = {
					url: `${kh.env.urlRoot}/a_quests/${mainQuestID}/start`,
					json: {
						type: questType,
						a_party_id: prevPartyId,
						support_a_summon_id: supportSummonId,
						support_summon_tab_element_type: prevSummonElement,
						episode_num: episodeNum
					}
				}
				//進入幻獸點關卡
				if (await launchRaidBattle(currentQuest)) {
					await sleep(1000);
					return false;
				} else {
					debugLog("launch fail, give up");
					return true;
				}
			}
		} catch (error) {
			debugLog("robotFreeManTrigger: " + error);
		}
		return true;
	}
	/**
	 * @description 每日要執行的動作集合
	 */
	async function robotDailyStart() {
		try {
			//每日免費水晶
			const coinShopRes = await _httpClient.get({url: `${kh.env.urlRoot}/shop/1`});
				if (coinShopRes?.body?.catalogs) {
				const freeJewelsProduct = coinShopRes.body.catalogs
					.flatMap(catalog => catalog.products)
					.find(product => product.product_id === 11018);
				if (freeJewelsProduct && Number(freeJewelsProduct.stock_info.amount) > 0) {
					await _httpClient.post({
						url: `${kh.env.urlRoot}/shop`, 
						json: {product_id: freeJewelsProduct.product_id, amount: Number(freeJewelsProduct.stock_info.amount)}
					});
					debugLog(`Exchange successful for product ID: ${freeJewelsProduct.product_id}`);
				} else {
					debugLog(`No free jewels`);
				}
			}
			//每日免費10連
			await executeFreeGacha();
			//每日試運3連
			await executeLuckGacha();
			//清空狀態與任務
			_dailyQuests.length = 0;
			const missionApi = kh.createInstance("apiAMissions");
			let elementQuestCount = 0;
			let materialQuestCount = 0;
			let accessoryQuestCount = 0;
			//檢查每日任務
			const dailyRes = await missionApi.getDaily();
			const dailyMissions = dailyRes?.body?.missions || [];
			for (const item of dailyMissions) {
				if (item.clear) continue;
				switch (item.mission_id) {
					case 462:
						debugLog("add the element mission.");
						elementQuestCount += (item.max_progress - item.now_progress);
						break;
					case 469:
						debugLog("add the material mission.");
						materialQuestCount += (item.max_progress - item.now_progress);
						break;
					case 464:
						debugLog("add the accessory mission.");
						accessoryQuestCount += (item.max_progress - item.now_progress);
						break;
				}
			}
			//檢查每周任務
			const weeklyRes = await missionApi.getWeekly();
			const weeklyMissions = weeklyRes?.body?.missions || [];
			for (const item of weeklyMissions) {
				if (item.clear) continue;
				switch (item.mission_id) {
					case 482:
						//(item.max_progress - item.now_progress - elementQuestCount) > 0
						elementQuestCount += 9;
						break;
					case 488:
						//(item.max_progress - item.now_progress - elementQuestCount) > 0
						materialQuestCount += 12;
						break;
				}
			}
			if (elementQuestCount > 0) {
				//加入屬性任務
				const elementPrevInfo = await getQuestPrevious(_dailyElementQuestId, "daily");
				for (let i = 0; i < elementQuestCount; i++) {
					_dailyQuests.push({
						url: `${kh.env.urlRoot}/a_quests/${_dailyElementQuestId}/start`,
						json: {
							type: "daily",
							a_party_id: elementPrevInfo.prevPartyId,
							support_a_summon_id: 0,
							support_summon_tab_element_type: elementPrevInfo.prevSummonElement,
							episode_num: 1
						}
					});
				}
			}
			if (materialQuestCount > 0) {
				//加入素材任務
				const materialPrevInfo = await getQuestPrevious(_dailyMaterialQuestId, "daily");
				for (let i = 0; i < materialQuestCount; i++) {
					_dailyQuests.push({
						url: `${kh.env.urlRoot}/a_quests/${_dailyMaterialQuestId}/start`,
						json: {
							type: "daily",
							a_party_id: materialPrevInfo.prevPartyId,
							support_a_summon_id: 0,
							support_summon_tab_element_type: materialPrevInfo.prevSummonElement,
							episode_num: 1
						}
					});
				}
			}
			if (accessoryQuestCount > 0) {
				//加入飾品任務
				const accessoryPrevInfo = await getQuestPrevious(_dailyAccessoryQuestId, "accessory");
				for (let i = 0; i < accessoryQuestCount; i++) {
					_dailyQuests.push({
						url: `${kh.env.urlRoot}/a_quests/${_dailyAccessoryQuestId}/start`,
						json: {
							type: "accessory",
							a_party_id: accessoryPrevInfo.prevPartyId,
							support_a_summon_id: 0,
							support_summon_tab_element_type: accessoryPrevInfo.prevSummonElement,
							episode_num: 1
						}
					});
				}
			}
			//加入RAID關卡
			const raidRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_quests",
				json: { type: "raid" }
			});
			const questLists = raidRes?.body?.raid_quest_lists
			if (questLists) {
				const questList = [];
				for (const key in questLists) {
					const group = questLists[key];
					if (!group || !Array.isArray(group.data)) continue;
					for (const item of group.data) {
						const enemyLevel = item.raid_info?.enemy_level;
						if (!enemyLevel || enemyLevel <= 0) continue;//已不使用的關卡
						if (enemyLevel >= _dailyQuestLevelMax) continue;//太高不單吃
						if (item.is_new) continue;//未開通的關卡
						const challengeCount = item.limit_info?.remaining_challenge_count;
						if (!challengeCount || challengeCount < 1) continue;//已完成的關卡
						//取得歷史隊伍與幻獸屬性
						const { prevPartyId, prevSummonElement } = await getQuestPrevious(item.quest_id, "raid");
						for (let i = 0; i < challengeCount; i++) {
							questList.push({
								quest_id: item.quest_id,
								a_quest_id: item.a_quest_id,
								enemy_name: item.raid_info?.enemy_name,
								enemy_level: enemyLevel,
								previous_party_id: prevPartyId,
								previous_summon_element: prevSummonElement
							});
						}
					}
				}
				//依敵人等級從低到高排序
				questList.sort((a, b) => a.enemy_level - b.enemy_level);
				//加入任務
				for (const quest of questList) {
					_dailyQuests.push({
						url: `${kh.env.urlRoot}/a_quests/${quest.quest_id}/start`,
						json: {
							type: "raid",
							a_party_id: quest.previous_party_id,
							support_a_summon_id: 0,
							support_summon_tab_element_type: quest.previous_summon_element
						}
					});
				}
			}
			//檢查AP
			await refillApBpIfNeeded();
			//開始執行任務
			debugLog("mission count: " + _dailyQuests.length);
			while (_dailyQuests.length > 0) {
				//取出一個戰鬥任務
				const currentQuest = _dailyQuests.shift();
				//取得支援幻獸
				const supportSummonId = await getSupportSummonId(currentQuest.json.support_summon_tab_element_type);
				if (!supportSummonId) {
					debugLog("no summon, give up");
					continue;//放棄任務
				}
				currentQuest.json.support_a_summon_id = supportSummonId;
				if (await launchRaidBattle(currentQuest)) {
					debugLog("mission start");
					break;//啟動成功跳出
				} else {
					debugLog("launch fail, give up");
					continue;
				}
			}
			if (_dailyQuests.length === 0) {
				debugLog("the daily robot is asleep");
				sendRobotStrike();
			}
		} catch (error) {
			debugLog("robotDailyStart: " + error);
		}
		return true;
	}
	/**
	 * @description 每日要執行的戰鬥任務，取出一個並執行
	 */
	async function robotDailyQuestResult() {
		try {
			while (_dailyQuests.length > 0) {
				debugLog("mission count: " + _dailyQuests.length);
				//取出一個戰鬥任務
				const currentQuest = _dailyQuests.shift();
				//取得支援幻獸
				const supportSummonId = await getSupportSummonId(currentQuest.json.support_summon_tab_element_type);
				if (!supportSummonId) {
					debugLog("no summon, give up");
					continue;//放棄任務
				}
				//開啟關卡
				currentQuest.json.support_a_summon_id = supportSummonId;
				if (await launchRaidBattle(currentQuest)) {
					return false;
				} else {
					debugLog("launch fail, give up");
					continue;
				}
			}
			if (_dailyQuests.length === 0) {
				debugLog("the daily robot is asleep");
				sendRobotStrike();
			}
		} catch (error) {
			debugLog("robotDailyQuestResult: " + error);
		}
		return true;
	}
	/**
	 * @description 煉獄蘿蔔，查詢活動資訊後執行戰鬥
	 * @returns {boolean} 放行程式繼續執行回傳true,否則回傳false
	 */
	async function robotUnionStart() {
		try {
			if (!_httpClient) {debugLog("HTTP connection not initialized"); return;}
			debugLog("Search union...");
			//查詢活動ID
			const bannerRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_banners/event_on_period"
			});
			const unionEventType = "union_raid_event";
			//const unionEventType = "union_raid_event_notice";
			const currentEvent = bannerRes.body.data.find((e) => unionEventType === e.event_type);
			if (!currentEvent) {
				debugLog("no event id.");
				return true;
			}
			_unionEventId = currentEvent.event_id;
			debugLog("union:" + _unionEventId);
			//查詢活動關卡資訊
			const battleRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_battles",
				json: {kind: "event", event_id: _unionEventId}
			});
			//排除is_joined產生新陣列，並進行排序
			const battlesData = battleRes?.body?.data || [];
			const availableBattles = battlesData
				.filter(battle => battle.is_joined === false)
				.map(battle => {
					return {
						a_battle_id: battle.a_battle_id,
						quest_id: battle.quest_id,
						a_quest_id: battle.a_quest_id,
						quest_type: battle.quest_type,
						participants: battle.participants,
						enemy_level: battle.enemy_level,
						is_own_raid: battle.is_own_raid,
						random_weight: Math.random()
					};
				})
				.sort((a, b) => {
					if (_janitorMode) {
						return a.enemy_level - b.enemy_level;//比較敵人等級，等級低的排前面
					} else {
						//人少排前面,同人用隨機
						if (a.participants === b.participants) {
							return a.random_weight - b.random_weight;
						} else {
							return a.participants - b.participants;
						}
					}
				});
			//數量為0退出
			if (availableBattles.length === 0) {
				debugLog("no battle");
				return true; 
			}
			//取出第一個
			const targetBattle = availableBattles[0];
			//使用現在的隊伍
			const apiAParties = kh.createInstance("apiAParties");
			const PartyResponse = await apiAParties.getList();
			const partyIds = PartyResponse.body.a_party_ids.slice(0, 84);
			for (const id of partyIds) {
				if (typeof id !== 'number') continue;
				const deckData = await apiAParties.getSelectionDeck(id);
				const deck = deckData.body.deck;
				if (deck.selected) {
					_unionPartyID = deck.a_party_id;
					_unionElement = deck.element_type;
					break;
				}
			}
			debugLog("party: " + _unionPartyID);
			debugLog("element: " + _unionElement);
			//取得支援幻獸
			const supportSummonId = await getSupportSummonId(_unionElement);
			if (!supportSummonId) {
				debugLog("no summon, give up");
				return true;//放棄任務
			}

			await refillApBpIfNeeded();//BP確認
			await settleUnverifiedBattles();//已完成關卡處裡
			_unionLevel = targetBattle.enemy_level;
			//發送關卡請求
			const apiABattles = kh.createInstance("apiABattles");
			const joinResponse = await apiABattles.joinBattle(
				targetBattle.a_battle_id,
				supportSummonId,
				_unionPartyID,
				targetBattle.quest_type,
				_unionElement);
			const cannotProgressInfo = joinResponse?.body?.cannot_progress_info;
			if (cannotProgressInfo) {
				await showBattleFail(cannotProgressInfo);
				return true; 
			}
			//進入戰鬥畫面
			const router = kh.createInstance("router");
			router.navigate("battle", {
				quest_type: targetBattle.quest_type,
				a_battle_id: targetBattle.a_battle_id,
				a_player_id: _playerId,
				a_quest_id: targetBattle.quest_id,
				is_own_raid: targetBattle.is_own_raid
			});
			return false;
		} catch (error) {
			debugLog("botUnion: " + error);
		}
		return true;
	}
	/**
	 * @description 煉獄蘿蔔，選擇關卡後執行戰鬥
	 * @returns {boolean} 放行程式繼續執行回傳true,否則回傳false
	 */
	async function robotUnionTrigger() {
		try {
			debugLog("Search union...");
			await refillApBpIfNeeded();//BP確認
			await settleUnverifiedBattles();//已完成關卡處裡
			//查詢活動關卡資訊
			const battleRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_battles",
				json: {kind: "event", event_id: _unionEventId}
			});
			//排除is_joined產生新陣列，並進行排序
			const battlesData = battleRes?.body?.data || [];
			const availableBattles = battlesData
				.filter(battle => battle.is_joined === false)
				.map(battle => {
					return {
						a_battle_id: battle.a_battle_id,
						quest_id: battle.quest_id,
						a_quest_id: battle.a_quest_id,
						quest_type: battle.quest_type,
						participants: battle.participants,
						enemy_level: battle.enemy_level,
						is_own_raid: battle.is_own_raid,
						random_weight: Math.random()
					};
				})
				.sort((a, b) => {
					if (_janitorMode) {
						return a.enemy_level - b.enemy_level;//比較敵人等級，等級低的排前面
					} else {
						//人少排前面,同人數用隨機
						if (a.participants === b.participants) {
							return a.random_weight - b.random_weight;
						} else {
							return a.participants - b.participants;
						}
					}
				});
			//數量為0退出, 然後取出第一個
			if (availableBattles.length === 0) {
				debugLog("no battle");
				setTimeout(robotUnionTrigger, 500);//等待一下再重新執行
				return true; 
			}
			const targetBattle = availableBattles[0];
			//取得支援幻獸
			const supportSummonId = await getSupportSummonId(_unionElement);
			if (!supportSummonId) {
				debugLog("no summon, give up");
				return true;//放棄任務
			}
			_unionLevel = targetBattle.enemy_level;
			//發送關卡請求
			const apiABattles = kh.createInstance("apiABattles");
			const joinResponse = await apiABattles.joinBattle(
				targetBattle.a_battle_id,
				supportSummonId,
				_unionPartyID,
				targetBattle.quest_type,
				_unionElement);
			const cannotProgressInfo = joinResponse?.body?.cannot_progress_info;
			if (cannotProgressInfo) {
				await showBattleFail(cannotProgressInfo);
				setTimeout(robotUnionTrigger, 500);//等待一下再重新執行
				return true; 
			}
			//進入戰鬥畫面
			const router = kh.createInstance("router");
			router.navigate("battle", {
				quest_type: targetBattle.quest_type,
				a_battle_id: targetBattle.a_battle_id,
				a_player_id: _playerId,
				a_quest_id: targetBattle.quest_id,
				is_own_raid: targetBattle.is_own_raid
			});
			return false;
		} catch (error) {
			debugLog("robotUnionTrigger: " + error);
		}
		return true;
	}
	/**
	 * @description 清掃自己Raid的蘿蔔，取得一場能執行的戰鬥
	 * @returns {boolean} 放行程式繼續執行回傳true,否則回傳false
	 */
	async function robotMyRaidStart() {
		try {
			const raidRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_quests",
				json: { type: "raid" }
			});
			const questLists = raidRes?.body?.raid_quest_lists;			
			if (!questLists) return true;

			const questList = [];
			for (const key in questLists) {
				const group = questLists[key];
				if (!group || !Array.isArray(group.data)) continue;
				for (const item of group.data) {
					const enemyLevel = item.raid_info?.enemy_level;
					if (!enemyLevel || enemyLevel <= 0) continue;//已不使用的關卡
					if (enemyLevel <= _myRaidQuestLevelMin) continue;//太低不吃
					if (enemyLevel >= _myRaidQuestLevelMax) continue;//太高不吃
					if (item.is_new) continue;//未開通的關卡
					const challengeCount = item.limit_info?.remaining_challenge_count;
					if (!challengeCount || challengeCount < 1) continue;//已完成的關卡
					//加入關卡
					questList.push({
						quest_id: item.quest_id,
						a_quest_id: item.a_quest_id,
						enemy_name: item.raid_info?.enemy_name,
						enemy_level: enemyLevel,
					});
				}
			}
			//檢查數量
			if (questList.length === 0) {
				debugLog("my raid robot is asleep");
				sendRobotStrike();
				return true;
			}
			//依敵人等級從低到高排序
			questList.sort((a, b) => a.enemy_level - b.enemy_level);
			debugLog("quest count: " + questList.length);
			//選第一個
			const firstRaid = questList[0];
			//檢查AP
			await refillApBpIfNeeded();
			//取得歷史隊伍與幻獸屬性
			const elementPrevInfo = await getQuestPrevious(firstRaid.quest_id, "raid");
			//取得支援幻獸
			const supportSummonId = await getSupportSummonId(elementPrevInfo.prevSummonElement);
			if (!supportSummonId) return false;
			const currentQuest = {
				url: `${kh.env.urlRoot}/a_quests/${firstRaid.quest_id}/start`,
				json: {
					type: "raid",
					a_party_id: elementPrevInfo.prevPartyId,
					support_a_summon_id: supportSummonId,
					support_summon_tab_element_type: elementPrevInfo.prevSummonElement
				}
			}
			//進入戰鬥
			if (!await launchRaidBattle(currentQuest)) {debugLog("botMyRaid fail");}
			return false;
		} catch (error) {
			debugLog("robotMyRaidStart: " + error);
		}
		return true;
	}
	/**
	 * @description 當自發的Raid已取得救援碼,將救援碼傳送至DB
	 * @returns {boolean} 放行程式繼續執行回傳true,否則回傳false
	 */
	async function robotMyRaidBattleRescue() {
		try {
			sendStringToFirebase(_lastRescueId);//傳送DB
		} catch (error) {
			debugLog("robotMyRaidBattleRescue: " + error);
		}
		return true;
	}
	/**
	 * @description 救援碼蘿蔔，從DB取得救援碼，然後執行戰鬥
	 */
	async function robotRescueRaidTimer() {
		try {
			debugLog("wait rescue raid...");
			while (_autonomousRobot === "rescue") {
				const rescueId = await fetchStringFromFirebase();
				if (rescueId) {
					//固定取前面9個字元
					const pureRescueId = rescueId.slice(0, 9);
					await refillApBpIfNeeded();
					await settleUnverifiedBattles();
					if (await joinRescueRaid(pureRescueId)) {
						await sleep(1000);
						_robotRescueRaidTimerId = null;
						return;
					}
				}
				await sleep(_rescueInterval);
			}
			if (_autonomousRobot !== "rescue") {debugLog("stop RescueRaid");}
		} catch (error) {
			debugLog("robotRescueRaidTimer: " + error);
		}
		_robotRescueRaidTimerId = null;
	}
	/**
	 * @description 搜尋公開的RAID，選擇一場後進入戰鬥
	 */
	async function robotPublicRaidTimer() {
		try {
			debugLog("Search some raid...");
			while (_autonomousRobot === "public") {
				await refillApBpIfNeeded();
				await settleUnverifiedBattles();
				if (await joinPublicRaids(false)) {
					await sleep(100);
					_robotPublicRaidTimerId = null;
					return;
				}
				await sleep(500);
			}
			if (_autonomousRobot !== "public") {debugLog("stop robotPublicRaid");}
		} catch (error) {
			debugLog("robotPublicRaidTimer: " + error);
		}
		_robotPublicRaidTimerId = null;
	}
	/**
	 * @description 加入公開的RAID關卡,沒有選擇隊伍進場過的會發生錯誤
	 * @param {Boolean} isEventRaids - 查找公開的 EVENT RAID關卡
	 */
	async function joinPublicRaids(isEventRaids) {
		try {
			if(!_httpClient){debugLog("HTTP connection not initialized");return;}
			//const apiABattles = kh.createInstance("apiABattles");
			//const raidRes = apiABattles.getRaidRequestList();
			//const raidRes = apiABattles.getInSessionRaidEventList();
			let battleKind = "raid_request";
			if (isEventRaids) battleKind = "in_session_event";
			const raidRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_battles",
				json: { kind: battleKind }
			});
			//數量檢查
			if (raidRes.body.max_record_count < 1) {return false;}
			//存在未結算的戰鬥
			if (raidRes.body.unverified_battle_exist) await settleUnverifiedBattles();
			//依條件尋找關卡
			const raids = raidRes.body.data;
			const filteredAndSortedRaids = raids.filter(a => {
				if (a.is_own_raid) return false;
				if (a.is_joined) return false;//排除已進入過的關卡
				if ((a.enemy_hp / a.enemy_max) <= (_publicRaidEnemyHp * 0.01)) return false;//排除血量小於30%
				if (a.enemy_level <= _publicRaidEnemyLevel) return false;//排除等級
				if (a.participants >= _publicRaidParticipants) return false;//排除人數
				return true;
			}).sort((a, b) => {
				//優先選擇公會
				const unionDiff = (b.has_union_member ? 1 : 0) - (a.has_union_member ? 1 : 0);
				if (unionDiff !== 0) return unionDiff;
				//選擇高難度敵人
				const levelDiff = b.enemy_level - a.enemy_level;
				if (levelDiff !== 0) return levelDiff;
				return b.enemy_hp - a.enemy_hp;
			}).map(a => {
				//只取需要的參數
				return {
					quest_id: a.quest_id,
					a_battle_id: a.a_battle_id,
					quest_type: a.quest_type
				};
			});
			//數量檢查
			if (filteredAndSortedRaids.length < 1) {return false;}
			//取出第一個,查詢前次隊伍與支援幻獸屬性
			const item = filteredAndSortedRaids[0];
			const elementPrevInfo = await getQuestPrevious(item.quest_id, item.quest_type);
			const previousPartyId = elementPrevInfo.prevPartyId;
			const previousSummonElement = elementPrevInfo.prevSummonElement;
			//取得支援幻獸
			const supportSummonId = await getSupportSummonId(previousSummonElement);
			if (!supportSummonId) {return false;}
			//發送關卡請求
			const apiABattles = kh.createInstance("apiABattles");
			const response = await apiABattles.joinBattle(item.a_battle_id, supportSummonId, previousPartyId, item.quest_type, previousSummonElement);
			const cannotProgressInfo = response?.body?.cannot_progress_info;
			if (cannotProgressInfo) {
				await showBattleFail(cannotProgressInfo);
				if (cannotProgressInfo.type === "has_unconfirmed_battle") {
					await settleUnverifiedBattles();
				}
				return false; 
			}			
			//const is_own_raid = response.body.is_own_raid;
			//進入戰鬥畫面
			const router = kh.createInstance("router");
			router.navigate("battle", {
				quest_type: item.quest_type,
				a_battle_id: item.a_battle_id,
				a_player_id: _playerId,
				a_quest_id: item.quest_id,
				is_own_raid: false
			});
			return true; 
		} catch (error) {
			debugLog("joinPublicRaids: " + error);
			debugLog(JSON.stringify(error, null, 2));
			return false;
		}
	}
	/**
	 * @description 使用救援碼進入關卡
	 *  @param {String} rescueCode - 救援碼
	 */
	async function joinRescueRaid(rescueCode) {
		try {
			if (!_httpClient) {debugLog("HTTP connection not initialized"); return;}
			//const apiABattles = kh.createInstance("apiABattles");
			//const rescueRes = await apiABattles.getTwitterRaidRequestList();
			const rescueRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_battles",
				json: {
					kind: "raid_rescue_code",
					rescue_code: rescueCode}
			});
			//數量檢查
			if (rescueRes.body.max_record_count < 1) return false;
			//存在未結算的戰鬥
			if (rescueRes.body.unverified_battle_exist) await settleUnverifiedBattles();
			//關卡資訊
			const item = rescueRes.body.data[0];
			//查詢前次隊伍與支援幻獸屬性
			const elementPrevInfo = await getQuestPrevious(item.quest_id, item.quest_type);
			const previousPartyId = elementPrevInfo.prevPartyId;
			const previousSummonElement = elementPrevInfo.prevSummonElement;
			//取得支援幻獸
			const supportSummonId = await getSupportSummonId(previousSummonElement);
			if (!supportSummonId) return false;
			//發送關卡請求
			const apiABattles = kh.createInstance("apiABattles");
			const response = await apiABattles.joinBattle(item.a_battle_id, supportSummonId, previousPartyId, item.quest_type, previousSummonElement);
			const cannotProgressInfo = response?.body?.cannot_progress_info;
			if (cannotProgressInfo) {
				await showBattleFail(cannotProgressInfo);
				if (cannotProgressInfo.type === "has_unconfirmed_battle") {
					await settleUnverifiedBattles();
				}
				return false; 
			}			
			//進入關卡
			//const is_own_raid = response.body.is_own_raid;
			//進入戰鬥畫面
			const router = kh.createInstance("router");
			router.navigate("battle", {
				quest_type: item.quest_type,
				a_battle_id: item.a_battle_id,
				a_player_id: _playerId,
				a_quest_id: item.quest_id,
				is_own_raid: false
			});
			return true; 
		} catch (error) {
			debugLog("botRescueCode: " + error);
			return false;
		}
	}
	/**
	 * @description 取得此關卡的前一次的隊伍與幻獸屬性頁
	 * @param {String} questId - 關卡ID
	 * @param {String} questType - 關卡類型
	 * @param {number} questNum - 關卡子章節
	 * @returns {boolean} 回傳此關卡前一次的隊伍號碼與使用的幻獸屬性頁
	 */
	async function getQuestPrevious(questId, questType, questNum = 1) {
		const defaultData = { prevPartyId: 0, prevSummonElement: 0 };
		try {
			if (!_httpClient) { debugLog("HTTP connection not initialized"); return defaultData; }
			//發送請求取得該關卡的詳細資料
			const detailRes = await _httpClient.get({
				url: `${kh.env.urlRoot}/a_quests/${questId}`,
				json: { type: questType, account_id: _playerId }
			});
			const questIndex = questNum - 1; 
			const firstEpisode = detailRes?.body?.episodes?.[questIndex];
			if (!firstEpisode) return defaultData;
			return {
				prevPartyId: firstEpisode.previous_a_party_id || 0,
				prevSummonElement: firstEpisode.previous_support_summon_element_type || 0
			};
		} catch (error) {
			debugLog("getQuestPrevious: " + error);
			return defaultData;
		}
	}
	/**
	 * @description 取得支援幻獸, 0:火, 1:水, 2:風, 3:雷, 4:闇, 5:光, 8:幻
	 * @param {number} elementType - 支援幻獸屬性頁
	 * @returns {number} 回傳要使用的支援幻獸編號
	 */
	async function getSupportSummonId(elementType) {
		try {
			const apiASummons = kh.createInstance("apiASummons");
			const response = await apiASummons.getSupporters(elementType);
			const summonData = response.body.data;
			if (!summonData || summonData.length === 0) {
				debugLog("未找到任何支援幻獸！");
				return null;
			}
			//預設第一隻
			let selectedId = summonData[0].summon_info.a_summon_id;
			//依幻獸屬性頁設置不同挑選條件
			//5012炎貴, 5021炎皇, 5024朱雀, 5028炎天獄, 5044炎天寶, 5052炎機獸, 5056炎騎, 5060炎鬼神, 炎鬼裝
			const flamePriority = [5060, 5044, 5028, 5056, 5052, 5021, 5012];
			//5014水貴, 5020水皇, 5022青龍, 5029冰天獄, 5045水天寶 ,5048水機獸, 5054水騎, 5061水鬼神, 水鬼裝
			const waterPriority = [5061, 5045, 5029, 5054, 5048, 5020, 5014];
			//5015風貴, 5017風皇, 5025玄武, 5030風天獄, 5040風天寶, 5051風機獸, 5058風騎, 5064風鬼神, 風鬼裝
			const widePriority = [5064, 5040, 5030, 5058, 5051, 5017, 5015];
			//5013雷貴, 5019雷皇, 5023白虎, 5031雷天獄, 5041雷天寶, 5050雷機獸, 5059雷騎, 5062雷鬼神, 雷鬼裝
			const thunderPriority = [5062, 5041, 5031, 5059, 5050, 5019, 5013];
			//5011闇貴, 5046闇皇, 5027北斗, 5033闇天獄, 5042闇天寶, 5049闇機獸, 5057闇騎, 5063闇鬼神, 闇鬼裝
			const darknessPriority = [5063, 5042, 5033, 5057, 5049, 5046, 5011];
			//5016光貴, 5047光皇, 5026南斗, 5032光天獄, 5043光天寶, 5053光機獸, 5055光騎, 5065光鬼神, 光鬼裝
			const lightPriority = [5065, 5043, 5032, 5055, 5053, 5047, 5016];
			//5018幻皇
			switch (elementType) {
				case 0://火
					for (const targetId of flamePriority) {
						const match = summonData.find(summon => summon.summon_info.summon_id === targetId);
						if (match) {
							selectedId = match.summon_info.a_summon_id;
							break;
						}
					}
					break;
				case 1://水
					for (const targetId of waterPriority) {
						const match = summonData.find(summon => summon.summon_info.summon_id === targetId);
						if (match) {
							selectedId = match.summon_info.a_summon_id;
							break;
						}
					}
					break;
				case 2://風
					for (const targetId of widePriority) {
						const match = summonData.find(summon => summon.summon_info.summon_id === targetId);
						if (match) {
							selectedId = match.summon_info.a_summon_id;
							break;
						}
					}
					break;
				case 3://雷
					for (const targetId of thunderPriority) {
						const match = summonData.find(summon => summon.summon_info.summon_id === targetId);
						if (match) {
							selectedId = match.summon_info.a_summon_id;
							break;
						}
					}
					break;
				case 4://闇
					for (const targetId of darknessPriority) {
						const match = summonData.find(summon => summon.summon_info.summon_id === targetId);
						if (match) {
							selectedId = match.summon_info.a_summon_id;
							break;
						}
					}
					break;
				case 5://光
					for (const targetId of lightPriority) {
						const match = summonData.find(summon => summon.summon_info.summon_id === targetId);
						if (match) {
							selectedId = match.summon_info.a_summon_id;
							break;
						}
					}
					break;
				case 8://幻
					break;
			}
			return selectedId;
		} catch (error) {
			debugLog("getSupportSummonId: " + error);
			return null;
		}
	}
	/**
	 * @description 當發送關卡請求回傳錯誤時，顯示其原因
	 * @param {object} cannotProgressInfo - 回傳錯誤時的內容
	 */
	async function showBattleFail(cannotProgressInfo) {
		try {
			switch (cannotProgressInfo.type) {
				case "has_quest_in_progress":
					debugLog("has quest in progress");
					break;
				case "has_unconfirmed_battle":
					debugLog("has unconfirmed battle");
					break;
				case "does_not_have_enough_ap":
					debugLog("does not have enough ap");
					break;
				case "accessory_quest_challenge_limit_reached":
					debugLog("accessory quest challenge limit reached");
					break;
				case "challenge_limit_reached":
					debugLog("challenge limit reached");
					break;
				default:
					debugLog("unknown:" + cannotProgressInfo.type);
					break;
			}
		} catch (error) {
			debugLog("showBattleFail: " + error);
		}
	}
	/**
	 * @description 依任務啟動戰鬥
	 * @param {object} missionQuest - 任務物件
	 * @returns {boolean} 進入關卡成功回傳true,否則回傳false
	 */
	async function launchRaidBattle(missionQuest) {
		try {
			const router = kh.createInstance("router");
			const apiParties = kh.createInstance("apiAParties");
			const aQuestInfo = kh.createInstance("aQuestInfo");
			const aQuestType = missionQuest.json.type;
			//選擇隊伍
			await apiParties.changeDeck(missionQuest.json.a_party_id);
			//發送開始關卡請求
			const response = await _httpClient.post({
				url: missionQuest.url,
				json: missionQuest.json
			});
			const cannotProgressInfo = response?.body?.cannot_progress_info;
			if (cannotProgressInfo) {
				await showBattleFail(cannotProgressInfo);
				return false; 
			}
			const responseBody = response.body;
			const nextBattleId = responseBody.next_info.id;
			const nextQuestId = responseBody.a_quest_id;
			const isOwnRaid = (aQuestType === "raid");
			//清理關卡快取資訊
			aQuestInfo.dispose();
			//進入戰鬥畫面
			router.navigate("battle", {
				quest_type: aQuestType,
				a_battle_id: nextBattleId,
				a_player_id: _playerId,
				a_quest_id: nextQuestId,
				is_own_raid: isOwnRaid
			});
			return true; 
		} catch (error) {
			debugLog("launchRaidBattle: " + error);
			debugLog(JSON.stringify(error, null, 2));
			return false; 
		}
	}
	/**
	 * @description 依據前一次的戰鬥任務，再次啟動相同的戰鬥
	 * @returns {boolean} 進入關卡成功回傳true,否則回傳false
	 */
	async function launchRaidBattleAgain() {
		try {
			if (!_battleStartInfo) return false;
			const aQuestType = _battleStartInfo.json.type;
			//選擇隊伍
			const apiParties = kh.createInstance("apiAParties");
			await apiParties.changeDeck(_battleStartInfo.json.a_party_id);
			//重新選擇支援幻獸
			const supportSummonId = await getSupportSummonId(_battleStartInfo.json.support_summon_tab_element_type);
			if (!supportSummonId) {
				debugLog("無法取得支援幻獸");
				return false;
			}
			_battleStartInfo.json.support_a_summon_id = supportSummonId;
			//發送開始關卡請求
			const response = await _httpClient.post({
				url: kh.env.urlRoot + _battleStartInfo.url,
				json: _battleStartInfo.json
			});
			const cannotProgressInfo = response?.body?.cannot_progress_info;
			if (cannotProgressInfo) {
				await showBattleFail(cannotProgressInfo);
				return false; 
			}
			const responseBody = response.body;
			const nextBattleId = responseBody.next_info.id;
			const nextQuestId = responseBody.a_quest_id;
			const isOwnRaid = (aQuestType === "raid");
			//清理關卡快取資訊
			const aQuestInfo = kh.createInstance("aQuestInfo");
			aQuestInfo.dispose();
			//進入戰鬥畫面
			const router = kh.createInstance("router");
			router.navigate("battle", {
				quest_type: aQuestType,
				a_battle_id: nextBattleId,
				a_player_id: _playerId,
				a_quest_id: nextQuestId,
				is_own_raid: isOwnRaid
			});
			return true; 
		} catch (error) {
			debugLog("launchRaidBattleAgain: " + error);
			debugLog(JSON.stringify(error, null, 2));
			return false;
		}
	}
	/**
	 * @description 清除已結束未結算的戰鬥
	 */
	async function settleUnverifiedBattles() {
		try {
			//const apiABattles = kh.createInstance("apiABattles");
			//檢查有無已結束未結算的戰鬥
			//const apiResponse = await apiABattles.getUnverifiedList();
			const apiResponse = await _httpClient.get({
				url: `${kh.env.urlRoot}/a_battles`,
				json: { kind: "unverified" }
			});
			const unverifiedRaids = apiResponse?.body?.data;
			if (!unverifiedRaids || unverifiedRaids.length === 0) return;
			//debugLog(JSON.stringify(unverifiedRaids, null, 2));
			//發送結算指令
			for (const raid of unverifiedRaids) {
				const battleId = raid.a_battle_id;
				const questType = raid.quest_type;
				//apiABattles.getBattleResult(battleId, questType);
				await _httpClient.post({
					url: `${kh.env.urlRoot}/a_battles/${battleId}/result`,
					json: { "quest_type": questType }
				});
				await sleep(50);
			}
		} catch (error) {
			debugLog("settleUnverifiedBattles: " + error);
			//debugLog(JSON.stringify(error, null, 2));
		}
	}
	/**
	 * @description 檢查試運轉蛋次數並執行
	 */
	async function executeLuckGacha() {
		try {
			if (!_httpClient) { debugLog("HTTP connection not initialized"); return; }
			debugLog("execute luck gacha");
			const luckCategoriesId = 1000060;//每期加10
			const cat1Res = await _httpClient.get({
				url: kh.env.urlRoot + "/gacha_categories"
			});
			const hasTargetCategory = cat1Res.body.tabs.some(tab => 
				tab.banners.some(banner => banner.category_id === luckCategoriesId)
			);
			if (!hasTargetCategory) {
				debugLog("no luck gacha");
				return;
			}
			//find the gacha_id
			const cat2Res = await _httpClient.post({
				url: kh.env.urlRoot + "/gacha_category/" + luckCategoriesId
			});
			const gachaIdArray = cat2Res.body?.gacha_information?.map(info => info.gacha_id) || [];
			for (const gachaId of gachaIdArray) {
				try {
					await _httpClient.post({
						url: kh.env.urlRoot + "/a_gacha/normal",
						json: { gacha_id: gachaId }
					});
				} catch (error) {
					debugLog("luck gacha fail: " + error);
				}
			}
			debugLog("luck gacha finish");
		} catch (error) {
			debugLog("executeLuckGacha: " + error);
			debugLog(JSON.stringify(error, null, 2));
		}
	}
	/**
	 * @description 檢查每日寶石轉蛋次數並執行
	 */
	async function executeFreeGacha() {
		try {
			if (!_httpClient) { debugLog("HTTP connection not initialized"); return; }
			debugLog("execute free gacha");
			//獲取轉蛋分類
			const freeRes = await _httpClient.get({
				url: kh.env.urlRoot + "/gacha_categories"
			});
			const tabs = freeRes.body && freeRes.body.tabs;
			if (!tabs) return;
			let free10CategoryId = "";
			for (const tab of tabs) {
				if (!tab.banners) continue;
				for (const banner of tab.banners) {
					if (banner.is_normal_gacha) {
						free10CategoryId = banner.category_id;
						break;
					}
				}
				if (free10CategoryId) break;
			}
			//沒找到
			if (!free10CategoryId) {
				debugLog("no free gacha");
				return;
			}
			//開始抽轉蛋
			for (let i = 0; i < 11; i++) {
				const catRes = await _httpClient.post({
					url: kh.env.urlRoot + "/gacha_category/" + free10CategoryId
				});
				if (catRes.body.is_max_weapon_or_summon) {
					debugLog("weapons or summon are full");
					break;//跳出無限迴圈，結束動作
				}
				//檢查剩餘次數
				if (catRes.body.rest_times) {
					const gachaId = catRes.body.gacha_information[0].gacha_id;
					await _httpClient.post({
						url: kh.env.urlRoot + "/a_gacha/normal",
						json: { gacha_id: catRes.body.rest_times === 1 ? 191 : gachaId }
					});
					debugLog("free gacha OK (" + (i+1) + ")");
					//等待後再繼續
					await sleep(100);
				} else {
					break;
				}
			}
			debugLog("free gacha finish");
		} catch (error) {
			debugLog("executeFreeGacha: " + error);
			debugLog(JSON.stringify(error, null, 2));
		}
	}
	/**
	 * @description 檢查當期Raid活動的轉蛋券，並全部抽取
	 */
	async function executeRaidGacha() {
		try {
			if (!_httpClient) {
				debugLog("HTTP connection not initialized");
				return;
			}
			debugLog("execute Raid gacha");
			//取得活動ID
			const eventRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_banners/event_on_period"
			});
			const raidEventType = "raid_event";
			const currentEvent = eventRes.body.data.find((e) => raidEventType === e.event_type);
			if (!currentEvent) {
				debugLog("no event id.");
				return;
			}
			const raidEventId = currentEvent.event_id;
			//取得轉蛋分類
			const catRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_gacha_categories",
				json: { "type": "event", "event_id": raidEventId }
			});
			const gachaCategory = catRes.body.data[0];
			if (!gachaCategory || !gachaCategory.groups || !gachaCategory.groups[1]) {
				debugLog("no raid gacha");
				return;
			}
			const gachaId1 = gachaCategory.groups[0].gacha_id;
			const gachaId10 = gachaCategory.groups[1].gacha_id;
			const infoRes = await _httpClient.get({
				url: "/v1/events/raid_event/" + raidEventId
			});
			const basicInfo = infoRes.body.basic_info;
			debugLog("name:" + basicInfo.title);
			debugLog("description:" + basicInfo.description);
			//查詢Raid券數量
			const ticketRes = await _httpClient.get({
				url: "/v1/a_events/raid_event/" + raidEventId
			});
			let amount = 0;
			if (ticketRes.body && Array.isArray(ticketRes.body.event_tickets)) {
				for (const ticket of ticketRes.body.event_tickets) {
					amount = ticket.amount;
					debugLog("tickets count:" + amount);
				}
			}
			let magicJewels = 0;
			while (amount > 0) {
				let gachaType = gachaId10;
				let gachaNum = 10;
				if (amount < 10) {
					gachaType = gachaId1;//票券小於 10 張時改為單抽
					gachaNum = 1;
				} else {
					//隨機改成抽1張
					if (Math.floor(Math.random() * 10) < 4) {
						gachaType = gachaId1;
						gachaNum = 1;
					}
				}
				//抽
				let itemRes = await kh.createInstance("apiAGacha").playEventGacha(raidEventId, gachaType);
				//統計魔寶石
				const obtainedItems = itemRes?.body?.obtained_info || [];
				for (const info of obtainedItems) {
					if (info?.item_info?.id === 1) {
						magicJewels += 1;
					}
				}
				amount -= gachaNum;
				debugLog("Remaining tickets:" + amount);
				await sleep(50);//延遲再抽
			}
			magicJewels = magicJewels * 5;
			debugLog("magic jewels: " + magicJewels);
		} catch (error) {
			debugLog("executeRaidGacha: " + error);
		}
		debugLog("raid gacha end.");
	}
	/**
	 * @description 檢查即期Raid活動的轉蛋券，並全部抽取
	 */
	async function executeExpiringRaidGacha() {
		try {
			if (!_httpClient) {
				debugLog("HTTP connection not initialized");
				return;
			}
			debugLog("execute due Raid gacha");
			//取得過期但可領獎的活動
			const eventRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_banners/event_after_period"
			});
			const eventList = eventRes.body.data;
			const raidEvent = eventList.find(item => item.event_type === 'raid_event_receive_reward');
			if (!raidEvent) return;
			//從活動資料中取出該活動的 event_id
			const eventId = raidEvent.event_id;
			debugLog("event id: " + eventId);
			//查詢該活動對應的轉蛋/抽獎卡池分類 ID
			const gachaCatRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_gacha_categories",
				json: { type: "event", event_id : eventId }
			});
			const raidGachaData = gachaCatRes.body.data[0];
			const _single_gacha = raidGachaData.gacha_information.find(item => item.gacha_count === 1);
			const _ten_gacha = raidGachaData.gacha_information.find(item => item.gacha_count === 10);
			if (!_single_gacha) debugLog("no gacha 1");
			if (!_ten_gacha) debugLog("no gacha 10");
			//單抽的卡池 gacha_id
			const raidGachaId1 = _single_gacha ? _single_gacha.gacha_id : '';
			//十連抽的卡池 gacha_id
			const raidGachaId10 = _ten_gacha ? _ten_gacha.gacha_id : '';
			//獲取該活動的抽獎券數量
			const eventDetailRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_events/raid_event/" + eventId
			});
			let eventTickets = eventDetailRes.body.event_tickets;
			let eventTicketsCount = 0;
			if (eventTickets && eventTickets.length > 0) {
				let firstTicket = eventTickets[0];
				if (firstTicket && firstTicket.amount !== undefined && firstTicket.amount !== null && firstTicket.amount !== "") {
					eventTicketsCount = firstTicket.amount;
				}
			}
			debugLog("tickets count:" + eventTicketsCount);
			if (eventTicketsCount === 0) return;
			//開始循環抽獎
			let magicJewels = 0;
			while (eventTicketsCount > 0) {
				let isMultiDraw = false;
				if (eventTicketsCount > 10) {
					if (Math.floor(Math.random() * 10) < 6) isMultiDraw = true;
				}
				let ticketsCost = isMultiDraw ? 10 : 1;
				let gachaId = isMultiDraw ? raidGachaId10 : raidGachaId1;
				//抽抽
				let itemRes = await _httpClient.post({
					url: kh.env.urlRoot + "/a_gacha/event",
					json: { gacha_id: gachaId }
				});
				eventTicketsCount -= ticketsCost;
				debugLog("tickets count:" + eventTicketsCount);
				//統計魔寶石
				const obtainedItems = itemRes?.body?.obtained_info || [];
				for (const info of obtainedItems) {
					if (info?.item_info?.id === 1) {
						magicJewels += 1;
					}
				}
				//還有剩餘的券, 等待一下再抽
				if (eventTicketsCount > 0) await sleep(50);
			}
			magicJewels = magicJewels * 5;
			debugLog("magic jewels: " + magicJewels);
		} catch (error) {
			debugLog("executeExpiringRaidGacha: " + error);
			debugLog(JSON.stringify(error, null, 2));
		}
		debugLog("due raid gacha end");
	}
	/**
	 * @description 領取已完成任務的獎勵
	 */
	async function claimMissionRewards() {
		try {
			debugLog("clear Missions");
			const missionApi = kh.createInstance("apiAMissions");
			const [dailyRes, weeklyRes, eventRes, normalRes, premiumPassDailyRes, premiumPassWeeklyRes] = await Promise.all([
				missionApi.getDaily(),
				missionApi.getWeekly(),
				missionApi.getEvent(),
				missionApi.getNormal(),
				missionApi.getPremiumPassDaily(),
				missionApi.getPremiumPassWeekly()
			]);
			const missionCategories = [
				{ body: dailyRes?.body, type: "daily" },
				{ body: weeklyRes?.body, type: "weekly" },
				{ body: eventRes?.body, type: "event" },
				{ body: normalRes?.body, type: "normal" },
				{ body: premiumPassDailyRes?.body, type: "premium_pass_daily" },
				{ body: premiumPassWeeklyRes?.body, type: "premium_pass_weekly" }
			];
			for (const { body, type } of missionCategories) {
				if (!body || body.complete) continue;
				const missions = body.missions || [];
				for (const item of missions) {
					if (item.clear) {
						await missionApi.receiveMissionReward(type, item.a_mission_id);
					}
				}
			}
			debugLog("Missions cleared");
		} catch (error) {
			debugLog("claimMissionRewards: " + error);
		}
	}
	/**
	 * @description 將禮物箱中的物品全部領取
	 */
	async function collectAllPresents() {
		try {
			const presentTypes = ["normal", "timelimit"];
			for (const presentType of presentTypes) {
				debugLog("clear presents:" + presentType);
				for (let i = 0; i < 9999; i++) {
					try {
						//查詢禮物資訊
						const getRes = await _httpClient.get({
							url: kh.env.urlRoot + "/a_presents_receive",
							json: {type: presentType, page: 1, per_page: 10000}
						});
						const receivedInfo = getRes.body?.received_info;
						const presentIds = getRes.body?.receive_present_ids;
						//判斷禮物箱是否空了
						if (!receivedInfo || receivedInfo.length === 0) {
							debugLog("no present");
							break;//跳出迴圈
						}
						//收取禮物
						const postRes = await _httpClient.post({
							url: kh.env.urlRoot + "/a_presents_receive",
							json: { present_ids: presentIds}
						});
						const postBody = postRes.body || {};
						//檢查是否有未收取的
						if (postBody.not_received_info && postBody.not_received_info.length > 0) {
							debugLog("There are uncollected gifts from the same batch.");
							break;//沒領成功就停止
						}
						//每次領取間加上微小延遲
						await sleep(20);
					} catch (error) {
						debugLog("presents: " + error);
						break;
					}
				}
			}
			debugLog("clear presents end");
		} catch (error) {
			debugLog("collectAllPresents: " + error);
		}
	}
	/**
	 * @description 商店交換物品,主要是每月限量交換的物品
	 */
	async function autoPurchaseShopItems() {
		try {
			if (!_httpClient) { debugLog("HTTP connection not initialized");return;}
			const purchaseQueue = [];
			//星紋幣,魔水晶交換
			//11018 免費水晶
			const coinShopRes = await _httpClient.get({url: `${kh.env.urlRoot}/shop/1`});
			if (coinShopRes?.body?.catalogs) {
				const freeJewelsProduct = coinShopRes.body.catalogs
					.flatMap(catalog => catalog.products)
					.find(product => product.product_id === 11018);
				if (freeJewelsProduct && Number(freeJewelsProduct.stock_info.amount) > 0) {
					purchaseQueue.push({
						product_id: freeJewelsProduct.product_id,
						amount: Number(freeJewelsProduct.stock_info.amount)
					});
				}
			}
			//RAID獎章
			//100001 豪華轉蛋券(Premium Gacha Ticket)
			//100002 神龍眼(Draconic Eye)
			//100003 神龍眼碎片(Draconic Eye Shard)
			//100005 奧利哈鋼(Orichalcon)
			//100099 慈愛結晶(Crystal of Compassion)
			//100100 哀憐結晶(Crystal of Pity)
			//100101 勇敢結晶(Crystal of Valor)
			//100201 剎那水晶(Instant Crystal)
			const raidShopRes = await _httpClient.get({url: kh.env.urlRoot + "/shop/19"});
			if (raidShopRes?.body?.catalogs) {
				const RAID_TARGET_IDS = [100001,100002,100003,100005,100099,100100,100101,100201];
				const allRaidProducts = raidShopRes.body.catalogs.flatMap(c => c.products);
				const itemsToExchange = allRaidProducts.filter(p => 
					RAID_TARGET_IDS.includes(p.product_id) && Number(p.stock_info.amount) > 0
				);
				for (const item of itemsToExchange) {
					purchaseQueue.push({
						product_id: item.product_id,
						amount: Number(item.stock_info.amount)
					});
				}
			}
			//活動獎章,無限制的請自己換
			//72001 公會獎牌,幻獸界限突破組合
			//72017 公會獎牌,魔水晶x300
			//73001 公會勳章,魔水晶x100
			//73011 公會勳章,混沌魔導金剛(5000)
			//73003 公會勳章,神龍眼
			//73021 公會勳章,神龍眼碎片
			//75002 伏魔殿勳章,SSR確定轉蛋券
			//75004 伏魔殿勳章,神龍眼
			const eventShopRes = await _httpClient.get({url: kh.env.urlRoot + "/shop/7"});
			if (eventShopRes?.body?.catalogs) {
				const EVENT_TARGET_IDS = [73001,73003,75002];
				const allEventProducts = eventShopRes.body.catalogs.flatMap(c => c.products);
				const itemsToExchange = allEventProducts.filter(p => 
					EVENT_TARGET_IDS.includes(p.product_id) && Number(p.stock_info.amount) > 0
				);
				for (const item of itemsToExchange) {
					purchaseQueue.push({
						product_id: item.product_id,
						amount: Number(item.stock_info.amount)
					});
				}
			}
			//神龍眼
			//41010 神龍眼碎片
			const draconicShopRes = await _httpClient.get({url: kh.env.urlRoot + "/shop/10"});
			if (draconicShopRes?.body?.catalogs) {
				const draconicProduct = draconicShopRes.body.catalogs
					.flatMap(catalog => catalog.products)
					.find(product => product.product_id === 41010);
				if (draconicProduct && Number(draconicProduct.stock_info.amount) > 0) {
					purchaseQueue.push({
						product_id: draconicProduct.product_id,
						amount: Number(draconicProduct.stock_info.amount)
					});
				}
			}
			//滅寶/天寶/詩篇
			//43046 道具,奧利哈鋼
			//93049 道具,魔導秘本[封魔]
			//93050 道具,魔導秘本[星辰]
			const labroShopRes = await _httpClient.get({url: kh.env.urlRoot + "/shop/16"});
			if (labroShopRes?.body?.catalogs) {
				const LABRO_TARGET_IDS = [43046,93049,93050];
				const allLabroProducts = labroShopRes.body.catalogs.flatMap(c => c.products);
				const itemsToExchange = allLabroProducts.filter(p => 
					LABRO_TARGET_IDS.includes(p.product_id) && Number(p.stock_info.amount) > 0
				);
				for (const item of itemsToExchange) {
					purchaseQueue.push({
						product_id: item.product_id,
						amount: Number(item.stock_info.amount)
					});
				}
			}
			//神想真化
			//201001 真愛聖結晶
			//201003 真哀聖結晶
			//201005 真勇聖結晶
			const awakenshopRes = await _httpClient.get({url: `${kh.env.urlRoot}/shop/21`});
			if (awakenshopRes?.body?.catalogs) {
				const AWAKEN_TARGET_IDS = [201001,201003,201005];
				const allAwakenProducts = awakenshopRes.body.catalogs.flatMap(c => c.products);
				const itemsToExchange = allAwakenProducts.filter(p => 
					AWAKEN_TARGET_IDS.includes(p.product_id) && Number(p.stock_info.amount) > 0
				);
				for (const item of itemsToExchange) {
					purchaseQueue.push({
						product_id: item.product_id,
						amount: Number(item.stock_info.amount)
					});
				}
			}
			//幻獸寶珠
			//61011 神龍眼碎片
			const eidolonshopRes = await _httpClient.get({url: `${kh.env.urlRoot}/shop/6`});
			if (eidolonshopRes?.body?.catalogs) {
				const draconicProduct = eidolonshopRes.body.catalogs
					.flatMap(catalog => catalog.products)
					.find(product => product.product_id === 61011);
				if (draconicProduct && Number(draconicProduct.stock_info.amount) > 0) {
					purchaseQueue.push({
						product_id: draconicProduct.product_id,
						amount: Number(draconicProduct.stock_info.amount)
					});
				}
			}
			if (purchaseQueue.length === 0) {
				debugLog("No items available for exchange at this time.");
				return;
			}
			for (const item of purchaseQueue) {
				try {
					await _httpClient.post({url: `${kh.env.urlRoot}/shop`, json: item});
					debugLog(`Exchange successful for product ID: ${item.product_id}`);
					await sleep(50);
				} catch (error) {
					debugLog(`Exchange failed for product ID: ${item.product_id}.`);
				}
			}
			debugLog("autoPurchaseShopItems end");
		} catch (error) {
			debugLog("autoPurchaseShopItems: " + error);
		}
	}
	/**
	 * @description 還原不需要的持有物品,將其轉為資源
	 */
	async function executeItemReclamation() {		
		try {
			await reclaimWeapons();//還原武器
			await reclaimSummons();//還原幻獸
			await reclaimAccessories();//還原飾品
		} catch (error) {
			debugLog("executeItemReclamation: " + error);
		}
	}
	/**
	 * @description 還原武器為材料與點數
	 */
	async function reclaimWeapons() {
		try {
			//取得武器清單
			const response = await _httpClient.get({
				url: kh.env.urlRoot + "/a_weapons",
				json: { page: 1, per_page: 1000 }
			});
			const weaponList = response?.body?.data;
			if (!weaponList || weaponList.length === 0) {
				return;
			}
			//篩選
			const targetWeaponIds = [];
			weaponList.forEach(item => {
				const isTargetRarity = ["N", "R", "SR"].includes(item.rare);
				const isAvailable = !item.is_equipped && !item.is_locked;
				if (isTargetRarity && isAvailable) {
					targetWeaponIds.push(item.a_weapon_id);
				}
			});
			debugLog("weapon count: " + targetWeaponIds.length);
			if (targetWeaponIds.length == 0) return;
			//還原
			while (targetWeaponIds.length > 0) {
				const batch = targetWeaponIds.splice(0, 20);
				await _httpClient.post({
					url: kh.env.urlRoot + "/a_weapons_reduct",
					json: { ids: batch }
				});
				if (targetWeaponIds.length > 0) {
					debugLog("weapon count: " + targetWeaponIds.length);
					await sleep(300);
				}
			}
			debugLog("reclaimWeapons OK");
		} catch (error) {
			debugLog("reclaimWeapons: " + error);
		}
	}
	/**
	 * @description 還原幻獸為材料與點數
	 */
	async function reclaimSummons() {
		try {
			//求取得幻獸清單
			const response = await _httpClient.get({
				url: kh.env.urlRoot + "/a_summons",
				json: {display_filter_name: "reduct_summon", selectable_base_filter: "reductable", page: 1, per_page: 100000}
			});
			const summonList = response?.body?.data;
			if (!summonList || summonList.length === 0) {
				return;
			}
			//篩選
			const targetSummonIds = [];
			summonList.forEach(item => {
				const isTargetRarity = ["N", "R", "SR"].includes(item.rare);
				const isAvailable = item.can_sell && !item.is_equipped && !item.is_locked;
				if (isTargetRarity && isAvailable) {
					targetSummonIds.push(item.a_summon_id);
				}
			});
			debugLog("summon count: " + targetSummonIds.length);
			if (targetSummonIds.length === 0) return;
			//還原
			while (targetSummonIds.length > 0) {
				const batch = targetSummonIds.splice(0, 20);
				await _httpClient.post({
					url: kh.env.urlRoot + "/a_summons_reduct",
					json: { ids: batch }
				});
				if (targetSummonIds.length > 0) {
					debugLog("summon count: " + targetSummonIds.length);
					await sleep(300);
				}
			}
			debugLog("reclaimSummons OK");
		} catch (error) {
			debugLog("reclaimSummons: " + error);
		}
	}
	/**
	 * @description 還原飾品為材料與點數
	 */
	async function reclaimAccessories() {
		try {
			const targetAccessoriesIds = [];
			//let logMsg = `\n`;
			for (let pageIndex = 1; pageIndex <= 60; pageIndex++) {
				try {
					//求取得飾品清單
					const response = await _httpClient.get({
						url: kh.env.urlRoot + "/a_accessories/",
						json: {display_filter_name: "book_acce",page: pageIndex, per_page: 100000, panels_per_page: 18}
					});
					if (response && response.body && response.body.data) {
						const accessoriesList = response.body.data;
						if (accessoriesList.length === 0) break;
						//篩選
						accessoriesList.forEach(item => {
							//logMsg += JSON.stringify(item, null, 2);
							//logMsg += (`aid:` + item.accessory_id + ` ,name:` + item.name + ` ,category:` + item.category + ` ,brand:` + item.brand + `\n`)
							if (item.is_equipped) return;
							if (item.is_locked) return;
							if (item.level > 1) return;

							if (["N", "R", "SR"].includes(item.rare)) {
								targetAccessoriesIds.push(item.a_accessory_id);
								return;
							}
							//要刪除的SSR
							const ssrAccessories = [
								401,402,403,404,405,406,
								407,408,409,410,411,412,
								413,414,415,416,417,418,
								419,420,421,422,423,424,
								425,426,427,428,429,430,
								431,432,433,434,435,436,
								1101,1102,1103,1104,1105,1106,
								1107,1108,1109,1110,1111,1112,
								1113,1114,1115,1116,1117,1118,
								1119,1120,1121,1122,1123,1124,
								1125,1126,1127,1128,1129,1130,
								1131,1132,1133,1134,1135,1136,
								1221,1222,1223,1224,1225,1226,
								1231,1232,1233,1234,1235,1236,
								1241,1242,1243,1244,1245,1246,
								1251,1252,1253,1254,1255,1256,
								1331,1332,1333,1334,1335,1336,
								1341,1342,1343,1344,1345,1346,
								2001,2002,2003,2004,2005,2006,
								3001,3002,3003,3004,3005,3006];
							if (ssrAccessories.includes(item.accessory_id)) {
								targetAccessoriesIds.push(item.a_accessory_id);
								return;
							}
							//護符 3001~3006
							//懷錶 2001~2006
							//惡魔王冠, 只留二攻要檢查 effect_rate 數值
							const ssrCrown1 = [1201,1202,1203,1204,1205,1206];
							if (ssrCrown1.includes(item.accessory_id)) {
								if (item.sub_effects[0].name !== item.sub_effects[1].name) {
									targetAccessoriesIds.push(item.a_accessory_id);
									return;
								}
							}
							//惡魔手鐲, 只留四攻要檢查 effect_rate 數值
							const ssrBracelet1 = [1211,1212,1213,1214,1215,1216];
							if (ssrBracelet1.includes(item.accessory_id)) {
								if (item.sub_effects[0].name !== item.sub_effects[1].name) {
									targetAccessoriesIds.push(item.a_accessory_id);
									return;
								} else if (item.sub_effects[0].name !== item.sub_effects[2].name) {
									targetAccessoriesIds.push(item.a_accessory_id);
									return;
								}
							}
							//天使王冠, 只留二攻要檢查 effect_rate 數值
							const ssrCrown2 = [1301,1302,1303,1304,1305,1306];
							if (ssrCrown2.includes(item.accessory_id)) {
								if (item.sub_effects[0].name !== item.sub_effects[1].name) {
									targetAccessoriesIds.push(item.a_accessory_id);
									return;
								}
							}
							//天使項鍊 
							const ssrNecklace2 = [1351,1352,1353,1354,1355,1356];
							if (ssrNecklace2.includes(item.accessory_id)) {
								if (item.sub_effects[0].name !== item.sub_effects[2].name) {
									targetAccessoriesIds.push(item.a_accessory_id);
									return;
								}
							}	
							//天使手鐲
							const ssrBracelet2 = [1311,1312,1313,1314,1315,1316];
							if (ssrBracelet2.includes(item.accessory_id)) {
								if (item.sub_effects[0].name !== item.sub_effects[2].name) {
									targetAccessoriesIds.push(item.a_accessory_id);
									return;
								}
							}
							//天使耳環 
							const ssrEarrings2 = [1321,1322,1323,1324,1325,1326];
							if (ssrEarrings2.includes(item.accessory_id)) {
								if (item.sub_effects[0].name !== item.sub_effects[1].name) {
									targetAccessoriesIds.push(item.a_accessory_id);
									return;
								}
							}
						});
					}
					await sleep(100);
				}catch (error) {
					debugLog("reclaimAccessories loop: " + error);
					break;
				}
			}
			//debugLog(logMsg);
			debugLog("accessories count: " + targetAccessoriesIds.length);
			if (targetAccessoriesIds.length === 0) return;
			//還原
			while (targetAccessoriesIds.length > 0) {
				const batch = targetAccessoriesIds.splice(0, 20);
				await _httpClient.post({
					url: kh.env.urlRoot + "/a_accessories_reduct",
					json: { ids: batch }
				});
				if (targetAccessoriesIds.length > 0) {
					debugLog("accessories count: " + targetAccessoriesIds.length);
					await sleep(300);
				}
			}
			debugLog("reclaimAccessories OK");
		} catch (error) {
			debugLog("reclaimAccessories: " + error);
		}
	}
	/**
	 * @description 背景閱讀所有寢室劇情,領取魔水晶
	 */
	async function autoPlayUnreadEpisodes() {
		try {
			const allEpisodes = [];
			//取得角色劇情
			const charRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_library/character_episodes",
				json: {
					harem: true,
					page: 1,
					per_page: 100000,
					display_filter_name: "episode_chara"
				}
			});
			const characters = charRes.body.data.filter(c => c.unread_episode);
			if (characters.length > 0) {
				//取得未閱讀角色劇情
				for (const character of characters) {
					try {
						const questRes = await _httpClient.get({
							url: kh.env.urlRoot + "/a_quests",
							json: {
								type: "harem-character",
								character_id: character.character_id
							}
						});
						//篩選出尚未通關的劇情
						const quests = questRes.body.data.filter(q => !q.is_cleared && q.a_quest_id);
						allEpisodes.push(...quests);
					} catch (error) {
						debugLog("get character ID (:" + character.character_id + ") fail.");
					}
				}
			}
			//取得幻獸劇情
			const summonRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_library/summon_episodes",
				json: {
					harem: true,
					page: 1,
					per_page: 100000,
					display_filter_name: "episode_summ"
				}
			});
			const summons = summonRes.body.data.filter(c => c.unread_episode);
			//取得未閱讀幻獸劇情
			if (summons.length > 0) {
				for (const summon of summons) {
					try {
						const questRes = await _httpClient.get({
							url: kh.env.urlRoot + "/a_quests",
							json: {
								type: "harem-summon",
								summon_id: summon.summon_id
							}
						});
						//篩選出尚未通關的劇情
						const quests = questRes.body.data.filter(q => !q.is_cleared && q.a_quest_id);
						allEpisodes.push(...quests);
					} catch (error) {
						debugLog("get summon ID (:" + summon.summon_id + ") fail.");
					}
				}
			}
			//取得英靈劇情
			const jobRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_library/jobs",
				json: {
					harem: true,
					page: 1,
					per_page: 100000
				}
			});
			const souls = jobRes.body.data.filter(c => c.unread_episode);
			if (souls.length > 0) {
				for (const soul of souls) {
					try {
						const questRes = await _httpClient.get({
							url: kh.env.urlRoot + "/a_quests",
							json: {
								type: "harem-job",
								job_id: soul.job_id
							}
						});
						//篩選出尚未通關的劇情
						const quests = questRes.body.data.filter(q => !q.is_cleared && q.a_quest_id);
						allEpisodes.push(...quests);
					} catch (error) {
						debugLog("get soul ID (:" + soul.job_id + ") fail.");
					}
				}
			}
			//Extra_skin
			const skinsRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_library/skins",
				json: {
					harem: true,
					page: 1,
					per_page: 100000
				}
			});
			const skins = skinsRes.body.data.filter(c => c.unread_episode);
			if (skins.length > 0) {
				for (const skin of skins) {
					try {
						const questRes = await _httpClient.get({
							url: kh.env.urlRoot + "/a_quests",
							json: {
								type: "harem-character",
								character_id: skin.id
							}
						});
						const quests = questRes.body.data.filter(q => !q.is_cleared && q.a_quest_id);
						allEpisodes.push(...quests);
					} catch (error) {
						debugLog("get skin ID (:" + skin.character_id + ") fail.");
					}
				}
			}
			//Extra_memorial
			//{"url":"/a_library/memorial_illusts","json":{"harem":true,"page":1,"per_page":100000,"filter":"all"}}
			//{"url":"/a_library/burst_skins","json":{"harem":true,"page":1,"per_page":100000}}
			//Others劇情
			//{"url":"/a_quests","json":{"type":"harem-ex","page":1,"per_page":100000}}
			//{"url":"/a_library/harem_main_quests","json":{"page":1,"per_page":100000}}
			if (allEpisodes.length === 0) return;
			//閱讀劇情
			for (let i = 0; i < allEpisodes.length; i++) {
				const episode = allEpisodes[i];
				const battleId = episode.a_quest_id;
				const questId = episode.quest_id;
				const questType = episode.type;
				debugLog("watch: " + episode.title);
				try {
					await _httpClient.post({
						url: kh.env.urlRoot + "/a_quests/" + questId + "/start",
						json: { type: questType }
					});
					//完成劇情
					await _httpClient.post({
						url: kh.env.urlRoot + "/a_battles/" + battleId + "/result",
						json: { quest_type: questType }
					});
				} catch (error) {
					debugLog("watch fail: " + error);
				}
			}
			debugLog("clear episodes ok");
		} catch (error) {
			debugLog("autoPlayUnreadEpisodes: " + error);
		}
	}
	/**
	 * @description 將輸入文字轉為檔案下載到本地
	 * @param {String} source - 要轉為檔案下載的文字內容
	 */
	function exportToJsonFile(source) {
		try {
			const blob = new Blob([source], { type: "application/json;charset=utf-8;" });
			//產生一個暫時性下載網址
			const downloadUrl = URL.createObjectURL(blob);
			const downloadLink = document.createElement("a");
			downloadLink.href = downloadUrl;
			//下載的檔案名稱
			const now = new Date();
			const dateStr = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
			downloadLink.download = `hime_data_${dateStr}.json`;
			//塞入網頁的body
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
			//模擬點擊超連結
			downloadLink.click();
			//移除建立的隱藏標籤並釋放記憶體
			document.body.removeChild(downloadLink);
			URL.revokeObjectURL(downloadUrl);
			debugLog(`Download successful! Please check your browser's downloads folder.`);
		} catch (error) {
			debugLog("exportToJsonFile: " + error);
		}
	}
	/**
	 * @description 將持有的神姬資料轉為檔案下載到本地
	 */
	async function exportOwnedHimeData() {
		try {
			//設置神姬過濾條件
			await _httpClient.post({
				url: kh.env.urlRoot + "/a_players/me/display_filter/book_chara",
				json: {
					rarity: [],
					element_type: [],
					character_type: [],
					proper_weapon_type: []
				}
			});
			//獲取持有的神姬列表
			const charactersRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_characters",
				json: {
					display_filter_name: "book_chara",
					page: 1,
					per_page: 100000,
					from_tower: false
				}
			});
			const charas = [];
			if (charactersRes && charactersRes.body && charactersRes.body.data) {
				charactersRes.body.data.forEach(function (item) {
					charas.push(item.a_character_id);
				});
			}
			//查詢神姬
			const himeList = [];
			for (let i = 0; i < charas.length; i++) {
				await sleep(200);
				debugLog("load " + (i+1) + " | " + charas.length)
				const chara = charas[i];
				//查詢神姬詳細資料
				const detailRes = await _httpClient.get({
					url: kh.env.urlRoot + "/a_characters/" + chara
				});
				if (detailRes && detailRes.body) {
					//名稱,稀有度,id
					const himeData = {
						name: detailRes.body.name,
						rare: detailRes.body.rare,
						element: detailRes.body.element_type,
						character_id: detailRes.body.character_id
					};
					himeList.push(himeData);
				}
			}
			//自動轉文字檔並下載
			if (himeList.length === 0) {
				debugLog("No Hime");
				return;
			}
			exportToJsonFile(JSON.stringify(himeList));
		} catch (error) {
			debugLog("exportOwnedHimeData: " + error);
		}
	}
	/**
	 * @description 將所有的神姬資料轉為檔案下載到本地
	 */
	async function exportAllHimeData() {
		try{
			const charas = [];
			//早期編號
			for (let i = 1; i < 100; i++) {charas.push(i);}
			//R
			for (let i = 7001; i < 7300; i++) {charas.push(i);}
			//SR
			for (let i = 6001; i < 6400; i++) {charas.push(i);}
			//SSR
			for (let i = 5001; i < 5600; i++) {charas.push(i);}
			//真化
			for (let i = 9001; i < 9040; i++) {charas.push(i);}
			//查詢神姬
			const himeMap = {};
			for (let i = 0; i < charas.length; i++) {
				await sleep(500);
				const chara = charas[i];
				try {
					//查詢神姬詳細資料
					const detailRes = await _httpClient.get({
						url: kh.env.urlRoot + "/characters/" + chara
					});
					if (detailRes && detailRes.body) {
						const himeName = detailRes.body.name;//取得神姬名字
						debugLog("load " + (i+1) + " | " + charas.length + ", id = " + chara + ", " + himeName);
						let currentData = "";
						switch (_language) {
							case 0:
								currentData = transformCharaData_jp(detailRes.body);
								break;
							case 1:
								currentData = transformCharaData_cht(detailRes.body);
								break;
							case 2:
								currentData = transformCharaData_en(detailRes.body);
								break;
							default:
								currentData = detailRes.body;
								break;
						}
						//以名字作為 Key 存入物件
						if (himeMap[himeName]) {debugLog("重複資料: " + himeName + " (" + chara + ")");}
						himeMap[himeName] = currentData;
					}
				} catch (error) {
					debugLog("id(" + chara + "):" + error.toString());
				}
			}
			const himeList = Object.values(himeMap);
			if (himeList.length === 0) {
				debugLog("No Hime");
				return;
			}
			debugLog("hime count: " + himeList.length);
			exportToJsonFile(JSON.stringify(himeList, null, 2));
		} catch (error) {
			debugLog("exportAllHimeData: " + error);
		}
		/**
		 * @description 中文版神姬要儲存的欄位與資訊
		 */
		function transformCharaData_cht(source) {
			if (!source) return null;
			return {
				hime_id: source.character_id ?? "",							//查詢用ID
				name_cht: source.name ?? "",								//名稱
				rarity: source.rare ?? "",									//稀有度
				element: source.element_type ?? "",							//元素屬性
				personality: source.character_type ?? "",					//類型
				weapon_favorite_1: source.proper_weapon?.[0] ?? "",			//得意武器1
				weapon_favorite_2: source.proper_weapon?.[1] ?? "",			//得意武器2
				burst_name_cht: source.burst.name ?? "",					//burst名稱
				burst_effect_cht: source.burst.description ?? "", 			//burst描述
				ability_1_name_cht : source.abilities?.[0]?.name ?? "",		//1技名稱
				ability_1_effect_cht : source.abilities?.[0]?.description ?? "",//1技描述
				ability_1_color : source.abilities?.[0]?.category ?? "",	//1技顏色
				ability_1_cooldown: source.abilities?.[0]?.recast ?? 0,		//1技冷卻回合
				ability_2_name_cht : source.abilities?.[1]?.name ?? "",		//2技名稱
				ability_2_effect_cht : source.abilities?.[1]?.description ?? "",//2技描述
				ability_2_color : source.abilities?.[1]?.category ?? "",	//2技顏色
				ability_2_cooldown: source.abilities?.[1]?.recast ?? 0,		//2技冷卻回合
				ability_3_name_cht : source.abilities?.[2]?.name ?? "",		//3技名稱
				ability_3_effect_cht : source.abilities?.[2]?.description ?? "",//3技描述
				ability_3_color : source.abilities?.[2]?.category ?? "",	//3技顏色
				ability_3_cooldown: source.abilities?.[2]?.recast ?? 0,		//3技冷卻回合
				ability_4_name_cht : source.abilities?.[3]?.name ?? "",		//4技名稱
				ability_4_effect_cht : source.abilities?.[3]?.description ?? "",//4技描述
				ability_4_color : source.abilities?.[3]?.category ?? "",	//4技顏色
				ability_4_cooldown: source.abilities?.[3]?.recast ?? 0,		//4技冷卻回合
				assist_1_name_cht : source.assists?.[0]?.name ?? "",		//被動1名稱
				assist_1_effect_cht : source.assists?.[0]?.description ?? "",//被動1說明
				assist_2_name_cht : source.assists?.[1]?.name ?? "",		//被動2名稱
				assist_2_effect_cht : source.assists?.[1]?.description ?? "",//被動2說明
				assist_3_name_cht : source.assists?.[2]?.name ?? "",		//被動3名稱
				assist_3_effect_cht : source.assists?.[2]?.description ?? ""//被動3說明
			};
		}
		/**
		 * @description 英文版神姬要儲存的欄位與資訊
		 */
		function transformCharaData_en(source) {
			if (!source) return null;
			return {
				hime_id: source.character_id ?? "",							//查詢用ID
				name_en: source.name ?? "",									//名稱
				rarity: source.rare ?? "",									//稀有度
				element: source.element_type ?? "",							//元素屬性
				personality: source.character_type ?? "",					//類型
				weapon_favorite_1: source.proper_weapon?.[0] ?? "",			//得意武器1
				weapon_favorite_2: source.proper_weapon?.[1] ?? "",			//得意武器2
				burst_name_en: source.burst.name ?? "",						//burst名稱
				burst_effect_en: source.burst.description ?? "", 			//burst描述
				ability_1_name_en : source.abilities?.[0]?.name ?? "",		//1技名稱
				ability_1_effect_en : source.abilities?.[0]?.description ?? "",//1技描述
				ability_1_color : source.abilities?.[0]?.category ?? "",	//1技顏色
				ability_1_cooldown: source.abilities?.[0]?.recast ?? 0,		//1技冷卻回合
				ability_2_name_en : source.abilities?.[1]?.name ?? "",		//2技名稱
				ability_2_effect_en : source.abilities?.[1]?.description ?? "",//2技描述
				ability_2_color : source.abilities?.[1]?.category ?? "",	//2技顏色
				ability_2_cooldown: source.abilities?.[1]?.recast ?? 0,		//2技冷卻回合
				ability_3_name_en : source.abilities?.[2]?.name ?? "",		//3技名稱
				ability_3_effect_en : source.abilities?.[2]?.description ?? "",//3技描述
				ability_3_color : source.abilities?.[2]?.category ?? "",	//3技顏色
				ability_3_cooldown: source.abilities?.[2]?.recast ?? 0,		//3技冷卻回合
				ability_4_name_en : source.abilities?.[3]?.name ?? "",		//4技名稱
				ability_4_effect_en : source.abilities?.[3]?.description ?? "",//4技描述
				ability_4_color : source.abilities?.[3]?.category ?? "",	//4技顏色
				ability_4_cooldown: source.abilities?.[3]?.recast ?? 0,		//4技冷卻回合
				assist_1_name_en : source.assists?.[0]?.name ?? "",			//被動1名稱
				assist_1_effect_en : source.assists?.[0]?.description ?? "",//被動1說明
				assist_2_name_en : source.assists?.[1]?.name ?? "",			//被動2名稱
				assist_2_effect_en : source.assists?.[1]?.description ?? "",//被動2說明
				assist_3_name_en : source.assists?.[2]?.name ?? "",			//被動3名稱
				assist_3_effect_en : source.assists?.[2]?.description ?? ""	//被動3說明
			};
		}
		/**
		 * @description 日文版神姬要儲存的欄位與資訊
		 */
		function transformCharaData_jp(source) {
			if (!source) return null;
			return {
				hime_id: source.character_id ?? "",							//查詢用ID
				name_jp: source.name ?? "",									//名稱
				rarity: source.rare ?? "",									//稀有度
				element: source.element_type ?? "",							//元素屬性
				personality: source.character_type ?? "",					//類型
				weapon_favorite_1: source.proper_weapon?.[0] ?? "",			//得意武器1
				weapon_favorite_2: source.proper_weapon?.[1] ?? "",			//得意武器2
				burst_name_jp: source.burst.name ?? "",						//burst名稱
				burst_effect_jp: source.burst.description ?? "", 			//burst描述
				ability_1_name_jp : source.abilities?.[0]?.name ?? "",		//1技名稱
				ability_1_effect_jp : source.abilities?.[0]?.description ?? "",//1技描述
				ability_1_color : source.abilities?.[0]?.category ?? "",	//1技顏色
				ability_1_cooldown: source.abilities?.[0]?.recast ?? 0,		//1技冷卻回合
				ability_2_name_jp : source.abilities?.[1]?.name ?? "",		//2技名稱
				ability_2_effect_jp : source.abilities?.[1]?.description ?? "",//2技描述
				ability_2_color : source.abilities?.[1]?.category ?? "",	//2技顏色
				ability_2_cooldown: source.abilities?.[1]?.recast ?? 0,		//2技冷卻回合
				ability_3_name_jp : source.abilities?.[2]?.name ?? "",		//3技名稱
				ability_3_effect_jp : source.abilities?.[2]?.description ?? "",//3技描述
				ability_3_color : source.abilities?.[2]?.category ?? "",	//3技顏色
				ability_3_cooldown: source.abilities?.[2]?.recast ?? 0,		//3技冷卻回合
				ability_4_name_jp : source.abilities?.[3]?.name ?? "",		//4技名稱
				ability_4_effect_jp : source.abilities?.[3]?.description ?? "",//4技描述
				ability_4_color : source.abilities?.[3]?.category ?? "",	//4技顏色
				ability_4_cooldown: source.abilities?.[3]?.recast ?? 0,		//4技冷卻回合
				assist_1_name_jp : source.assists?.[0]?.name ?? "",			//被動1名稱
				assist_1_effect_jp : source.assists?.[0]?.description ?? "",//被動1說明
				assist_2_name_jp : source.assists?.[1]?.name ?? "",			//被動2名稱
				assist_2_effect_jp : source.assists?.[1]?.description ?? "",//被動2說明
				assist_3_name_jp : source.assists?.[2]?.name ?? "",			//被動3名稱
				assist_3_effect_jp : source.assists?.[2]?.description ?? ""	//被動3說明
			};
		}
	}
	/**
	 * @description 將所有的武器資料轉為檔案下載到本地
	 */
	async function exportAllWeaponData() {
		try {
			const weaponIds = [];
			for (let i = 1; i < 9999; i++) {weaponIds.push(i);}
			const weaponMap = {};
			for (let i = 0; i < weaponIds.length; i++) {
				await sleep(50);
				const weaponId = weaponIds[i];
				try {
					const detailRes = await _httpClient.get({
						url: kh.env.urlRoot + "/weapons/" + weaponId
					});
					if (detailRes && detailRes.body) {
						const weaponName = detailRes.body.name;
						debugLog("load " + (i+1) + " | " + weaponIds.length + ", id = " + weaponId + ", " + weaponName);
						let currentData = "";
						switch (_language) {
							case 0:
								currentData = transformWeaponData_jp(detailRes.body);
								break;
							case 1:
								currentData = transformWeaponData_cht(detailRes.body);
								break;
							case 2:
								currentData = transformWeaponData_en(detailRes.body);
								break;
							default:
								currentData = detailRes.body;
								break;
						}
						weaponMap[weaponName] = currentData;
					}
				} catch (error) {
					debugLog("id(" + weaponId + "):" + error.toString());
				}
			}
			const weaponList = Object.values(weaponMap);
			if (weaponList.length === 0) {
				debugLog("No weapon");
				return;
			}
			debugLog("weapons count: " + weaponList.length);
			exportToJsonFile(JSON.stringify(weaponList, null, 2));
		} catch(error) {
			debugLog("exportAllWeaponData: " + error);
		}
		/**
		 * @description 中文版武器要儲存的欄位與資訊
		 */
		function transformWeaponData_cht(source) {
			if (!source) return null;
			if (source.can_arouse) {
				return {
					weapon_id: source.weapon_id ?? "",//查詢用ID
					name_cht: source.name ?? "",//名稱
					rarity: source.rare ?? "",//稀有度
					element_type: source.element_type ?? 0,//元素屬性
					weapon_type: source.weapon_type ?? "",//種類
					can_arouse: source.can_arouse ?? false,//終突
					skill_1_name_cht : source.aroused_2_status?.skills?.[0]?.name ?? "",//1技名稱
					skill_1_description_cht : source.aroused_2_status?.skills?.[0]?.description ?? "",//1技描述
					skill_1_type : source.aroused_2_status?.skills?.[0]?.type,//1技類型
					skill_2_name_cht : source.aroused_2_status?.skills?.[0]?.name ?? "",//2技名稱
					skill_2_description_cht : source.aroused_2_status?.skills?.[0]?.description ?? "",//2技描述
					skill_2_type : source.aroused_2_status?.skills?.[0]?.type,//2技類型
					burst_name_cht: source.aroused_2_status?.burst?.name,//爆發名稱
					burst_description_cht: source.aroused_2_status?.burst?.description//爆發描述
				};
			} else {
				return {
					weapon_id: source.weapon_id ?? "",//查詢用ID
					name_cht: source.name ?? "",//名稱
					rarity: source.rare ?? "",//稀有度
					element_type: source.element_type ?? 0,//元素屬性
					weapon_type: source.weapon_type ?? "",//種類
					can_arouse: source.can_arouse ?? false,//終突
					skill_1_name_cht : source.aroused_status?.skills?.[0]?.name ?? "",//1技名稱
					skill_1_description_cht : source.aroused_status?.skills?.[0]?.description ?? "",//1技描述
					skill_1_type : source.aroused_status?.skills?.[0]?.type,//1技類型
					skill_2_name_cht : source.aroused_status?.skills?.[0]?.name ?? "",//2技名稱
					skill_2_description_cht : source.aroused_status?.skills?.[0]?.description ?? "",//2技描述
					skill_2_type : source.aroused_status?.skills?.[0]?.type,//2技類型
					burst_name_cht: source.aroused_status?.burst?.name,//爆發名稱
					burst_description_cht: source.aroused_status?.burst?.description//爆發描述
				};
			}
		}
		/**
		 * @description (待完成)英文版武器要儲存的欄位與資訊
		 */
		function transformWeaponData_en(source) {
			if (!source) return null;
			return source;
		}
		/**
		 * @description (待完成)日文版武器要儲存的欄位與資訊
		 */
		function transformWeaponData_jp(source) {
			if (!source) return null;
			return source;
		}
	}
	/**
	 * @description 將所有的幻獸資料轉為檔案下載到本地
	 */
	async function exportAllSummonData() {
		try {
			const summonsIds = [];
			for (let i = 1; i < 300; i++) {summonsIds.push(i);}
			for (let i = 1000; i < 1100; i++) {summonsIds.push(i);}
			for (let i = 2000; i < 2100; i++) {summonsIds.push(i);}
			for (let i = 5000; i < 5100; i++) {summonsIds.push(i);}
			for (let i = 6000; i < 6200; i++) {summonsIds.push(i);}
			for (let i = 9000; i < 9100; i++) {summonsIds.push(i);}
			for (let i = 9200; i < 9300; i++) {summonsIds.push(i);}
			for (let i = 9500; i < 9600; i++) {summonsIds.push(i);}
			const summonsMap = {};
			for (let i = 0; i < summonsIds.length; i++) {
				await sleep(50);
				const summonId = summonsIds[i];
				try {
					//查詢幻獸詳細資料
					const detailRes = await _httpClient.get({
						url: kh.env.urlRoot + "/summons/" + summonId
					});
					if (detailRes && detailRes.body) {
						const summonName = detailRes.body.name;//取得幻獸名字
						debugLog("load " + (i+1) + " | " + summonsIds.length + ", id = " + summonId + ", " + summonName);
						let currentData = "";
						switch (_language) {
							case 0:
								currentData = transformSummonnData_jp(detailRes.body);
								break;
							case 1:
								currentData = transformSummonnData_cht(detailRes.body);
								break;
							case 2:
								currentData = transformSummonnData_en(detailRes.body);
								break;
							default:
								currentData = detailRes.body;
								break;
						}
						summonsMap[summonName] = currentData;
					}
				} catch (error) {
					//debugLog("id(" + summonId + "):" + error.toString());
				}
			}
			const summonList = Object.values(summonsMap);
			if (summonList.length === 0) {
				debugLog("No summon");
				return;
			}
			debugLog("summon count: " + summonList.length);
			exportToJsonFile(JSON.stringify(summonList, null, 2));
		} catch(error) {
			debugLog("exportAllSummonData: " + error);
		}
		/**
		 * @description 中文版幻獸要儲存的欄位與資訊
		 */
		function transformSummonnData_cht(source) {
			if (!source) return null;
			return {
				summon_id: source.summon_id ?? "",//查詢用ID
				name_cht: source.name ?? "",//名稱
				rarity: source.rare ?? "",//稀有度
				element_type: source.element_type ?? 0,//元素屬性
				can_final_evolve: source.can_final_evolve ?? false,//終突
				attack_name_cht: source.status.final.attack.name ?? "",//招喚攻擊名稱
				attack_description_cht: source.status.final.attack.description ?? "",//招喚攻擊描述
				attack_turn: source.status.final.attack.turn ?? 0,//招喚攻擊冷卻回合
				main_effect_name_cht: source.status.final.summon_main_effect.name ?? "",//主幻效果名稱
				main_effect_description_cht: source.status.final.summon_main_effect.description ?? "",//主幻效果描述
				sub_effect_name_cht: source.status.final.summon_sub_effect.name ?? "",//副幻效果名稱
				sub_effect_description_cht: source.status.final.summon_sub_effect.description ?? ""//副幻效果描述
			};
		}
		/**
		 * @description (待完成)英文版幻獸要儲存的欄位與資訊
		 */
		function transformSummonnData_en(source) {
			if (!source) return null;
			return source.body;
		}
		/**
		 * @description (待完成)日文版幻獸要儲存的欄位與資訊
		 */
		function transformSummonnData_jp(source) {
			if (!source) return null;
			return source.body;
		}
	}
	/**
	 * @description 將所有的英靈資料轉為檔案下載到本地
	 */
	async function exportAllSoulData() {
		try {
			const jobIds = [];
			for (let i = 1; i < 50; i++) {jobIds.push(i);}
			const jobMap = {};
			for (let i = 0; i < jobIds.length; i++) {
				await sleep(50);
				const jobId = jobIds[i];
				try {
					//查詢英靈詳細資料
					const detailRes = await _httpClient.get({
						url: kh.env.urlRoot + "/a_jobs/" + jobId
					});
					if (detailRes && detailRes.body) {
						const jobName = detailRes.body.name;//取得英靈名字
						debugLog("load " + (i+1) + " | " + jobIds.length + ", id = " + jobId + ", " + jobName);
						let currentData = detailRes.body;
						jobMap[jobName] = currentData;
					}
				} catch (error) {
					//debugLog("id(" + jobId + "):" + error.toString());
				}
			}
			const jobList = Object.values(jobMap);
			if (jobList.length === 0) {
				debugLog("No job");
				return;
			}
			debugLog("job count: " + jobList.length);
			exportToJsonFile(JSON.stringify(jobList, null, 2));
		} catch(error) {
			debugLog("exportAllSoulData: " + error);
		}
	}
	/**
	 * @description 改變攻擊動畫的演出速度
	 */
	function applyAnimationSpeed() {
		try {
			debugLog("apply animation speed");
			if (typeof kh !== 'undefined' && kh.createInstance && typeof cc !== 'undefined' && cc.director && cc.director._runningScene) {
				const battleWorld = kh.createInstance("battleWorld");
				if (battleWorld && battleWorld.battleUI) {syncAnimationSpeed();}
			}
		} catch(error) {
			debugLog("applyAnimationSpeed: " + error);
		}
	}
	/**
	 * @description 改變攻擊動畫的演出速度
	 */
	function syncAnimationSpeed() {
		try {
			const gameConfig = kh.createInstance("playerGameConfig");
			if (gameConfig && gameConfig.BATTLE_SPEED_SETTINGS && gameConfig.BATTLE_SPEED_SETTINGS.quick !== _animationSpeedFactor) {
				gameConfig.BATTLE_SPEED_SETTINGS.quick = _animationSpeedFactor;
				debugLog('Animation Speed: ' + _animationSpeedFactor);
			}
		} catch(error) {
			debugLog("syncAnimationSpeed: " + error);
		}
	}
	/**
	 * @description 修改戰鬥入場時的動畫演出時間
	 */
	function setAnimationDelay() {
		try {
			//檢查是否有備份資料
			if (_originalGetPromiseToDelayAnimation === null) return;
			if (typeof kh !== 'undefined' && typeof khutil !== 'undefined') {
				if (_animationDelay) {
					khutil.getPromiseToDelayAnimation = function (_, args) {
						return _originalGetPromiseToDelayAnimation(0, args);
					};
					kh.Character.prototype.ENTER_BATTLE_ANIMATION_SPEED=0;
					kh.Enemy.prototype.ENTER_BATTLE_ANIMATION_SPEED=0;
				} else {
					khutil.getPromiseToDelayAnimation = _originalGetPromiseToDelayAnimation;
					kh.Character.prototype.ENTER_BATTLE_ANIMATION_SPEED = _originalCharacterSpeed;
					kh.Enemy.prototype.ENTER_BATTLE_ANIMATION_SPEED = _originalEnemySpeed;
				}
				debugLog('Animation Delay: ' + _animationDelay);
			}
		} catch (error) {
			debugLog("setAnimationDelay: " + error);
		}
	}
	/**
	 * @description 調整 Cocos2d 遊戲速度
	 */
	function applyGlobalTimeScale() {
		try {
			if (typeof cc !== 'undefined' && cc.director && cc.director.getScheduler) {
				cc.director.getScheduler().setTimeScale(_cocosTimeScale);
			}
			debugLog("TimeScale: " + _cocosTimeScale);
		} catch (error) {
			debugLog("applyGlobalTimeScale: " + error);
		}
	}
	/**
	 * @description 調整 Cocos2d 遊戲FPS
	 */
	function applyFPS() {
		try {
			if (typeof cc !== 'undefined' && cc.game && typeof cc.game.setFrameRate === 'function') {
				cc.game.setFrameRate(_cocosFps);
				if (cc.macro) {
					cc.macro.FPS = _cocosFps;
				}
				debugLog("FPS: " + _cocosFps);
			}
		} catch (error) {
			debugLog("applyFPS: " + error);
		}
	}
	/**
	 * @description 將救援碼字串發送到資料庫(Firebase)
	 */
	async function sendStringToFirebase(rescueId) {
		if (!_firebaseDbUrl) {
			debugLog("null url");
			return;
		}
		GM_xmlhttpRequest({
			method: "PUT", //覆蓋掉該節點原本的資料
			url: _firebaseDbUrl,
			headers: {
				"Content-Type": "application/json"
			},
			data: JSON.stringify({message: rescueId}),
			onload: function(response) {
				if (response.status === 200) {
					debugLog("[Firebase] successfully:" + rescueId);
				} else {
					debugLog("[Firebase] failed, status code: " + response.status);
				}
			},
			onerror: function(error) {
				debugLog("[Firebase] network request error: " + error);
			}
		});
	}
	/**
	 * @description 從資料庫(Firebase)讀取救援碼字串
	 * @returns {string} 回傳救援碼字串, 失敗回傳null
	 */
	async function fetchStringFromFirebase() {
		if (!_firebaseDbUrl) {
			debugLog("null url");
			return null;
		}
		return new Promise((resolve, reject) => {
			GM_xmlhttpRequest({
				method: "GET",
				url: _firebaseDbUrl,
				onload: function(response) {
					if (response.status === 200) {
						try {
							if (response.responseText === "null") {
								resolve(null);
								return;
							}
							const data = JSON.parse(response.responseText);
							const newRescueId = data.message;
							if (newRescueId && newRescueId !== _lastRescueId) {
								_lastRescueId = newRescueId;
								debugLog("[Firebase] received! Content: " + newRescueId);
								resolve(newRescueId);
							} else {
								resolve(null);
							}
						} catch (error) {
							debugLog("[Firebase] Failed: " + error);
							reject(error);
						}
					} else {
						reject(new Error("HTTP Error: " + response.status));
					}
				},
				onerror: function(error) {
					debugLog("[Firebase] Network Error: " + error);
					reject(error);
				}
			});
		});
	}
	/**
	 * @description 取得小聖靈藥(AP)與種子(BP)的物品ID
	 */
	async function initApBp() {
		try {
			const e = await _httpClient.get({
				url: kh.env.urlRoot + "/a_items",
				json: { "type": "cure_evolution", page: 1, per_page: 100 }
			});
			if (e && e.body && e.body.data) {
				_apItemId = e.body.data[1].a_item_id;
				_bpItemId = e.body.data[3].a_item_id;
				debugLog("initApBp OK");
			}
		} catch(error) {
			debugLog("initApBp: " + error);
		}
	}
	/**
	 * @description 取得當前的AP與BP,不足自動補給
	 */
	async function refillApBpIfNeeded() {
		try {
			const e = await _httpClient.get({
				url: kh.env.urlRoot + "/a_players/me/quest_points"
			});
			const apItemCount = e.body.quest_points.ap;
			const bpItemCount = e.body.quest_points.bp;
			if (apItemCount < 100) {
				await increaseAP();
			} else if (bpItemCount < 10) {
				await increaseBP();
			}
		} catch(error) {
			debugLog("refillApBpIfNeeded: " + error);
		}
	}
	/**
	 * @description 取得當前的AP,不足自動補給
	 */
	async function refillApIfNeeded() {
		try {
			const apRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_players/me/quest_points"
			});
			const apItemCount = apRes.body.quest_points.ap;
			if (apItemCount < 100) await increaseAP();
		} catch(error) {
			debugLog("refillApIfNeeded: " + error);
		}
	}
	/**
	 * @description 消耗小聖靈藥增加AP
	 */
	async function increaseAP(count = 5) {
		try {
			await kh.createInstance("apiAItems").useItem(_apItemId, count);
			debugLog("increase AP: " + count);
		} catch (error) {
			debugLog("increaseAP: " + error);
		}
	}
	/**
	 * @description 取得當前的BP,不足自動補給
	 */
	async function refillBpIfNeeded() {
		try {
			const bpRes = await _httpClient.get({
				url: kh.env.urlRoot + "/a_players/me/quest_points"
			});
			const bpItemCount = bpRes.body.quest_points.bp;
			 if (bpItemCount < 10) await increaseBP();
		} catch(error) {
			debugLog("refillBpIfNeeded: " + error);
		}
	}
	/**
	 * @description 消耗種子增加BP
	 */
	async function increaseBP(count = 10) {
		try {
			await kh.createInstance("apiAItems").useItem(_bpItemId, count);
			debugLog("increase BP: " + count);
		} catch (error) {
			debugLog("increaseBP: " + error);
		}
	}
	/**
	 * @description 降低多人戰鬥中的功績顯示時間
	 */
	async function battleRaidPointsDelay() {
		try {
			if (_raidPointsDelayOk) return;
			if (_questType === "raid" || _questType === "raid_event") {
				const bcrrp = kh.createInstance("BattleCommandReceiveRaidPoints");
				if (!bcrrp) return;
				const proto = Object.getPrototypeOf(bcrrp);
				if (proto) {
					proto.COMMAND_DURATION = 0;
					proto.FADE_IN_SPEED = 0.1;
					proto.FADE_OUT_SPEED = 0.1;
					proto.VISIBLE_DURATION = 200;
				}
				bcrrp.COMMAND_DURATION = 0;
				bcrrp.FADE_IN_SPEED = 0.1;
				bcrrp.FADE_OUT_SPEED = 0.1;
				bcrrp.VISIBLE_DURATION = 200;
				_raidPointsDelayOk = true;
				debugLog("reset raid points delay");
			}
		} catch (error) {
			debugLog("battleRaidPointsDelay: " + error);
		}
	}
	/**
	 * @description 自動傳送支援,進場時發送支援會導致所有人卡頓,越多人發越卡
	 */
	async function battleSendHelp() {
		try {
			if (_enemyLevel < _raidHelpLevel) return;

			let questInfo = kh.createInstance("questInfo");
			if (questInfo._isOwnRaid) {
				const rescueId = await battleGetRescueId();//救援碼
				if (rescueId) {
					_lastRescueId = rescueId;
					await robotRun("BattleRescue");
				}
				//自己的場子, 根據UI選擇設定發送對象
				let toUnion = false;
				let toFriends = false;
				let toAll = false;
				switch (_myHelpTarget) {
					case "union":toUnion = true;break;
					case "friend":toFriends = true;break;
					case "unf":toUnion = true;toFriends = true;break;
					case "all":toAll = true;toFriends = true;toUnion = true;break;
					default: return;
				}
				await _httpClient.post({
					url: kh.env.urlRoot + "/a_battles/" + _battleId + "/help_request",
					json: {quest_type: _questType, to_all: toAll, to_friends: toFriends, to_union_members: toUnion}
				});			
			} else if (questInfo._isJoinedRaid) {
				//別人的場子, 根據UI選擇設定發送對象
				let toUnion = false;
				let toFriends = false;
				let toAll = false;
				switch (_othersHelpTarget) {
					case "union":toUnion = true;break;
					case "friend":toFriends = true;break;
					case "unf":toUnion = true;toFriends = true;break;
					case "all":toAll = true;toFriends = true;toUnion = true;break;
					default: return;
				}
				await _httpClient.post({
					url: kh.env.urlRoot + "/a_battles/" + _battleId + "/help_request",
					json: {quest_type: _questType, to_all: toAll, to_friends: toFriends, to_union_members: toUnion}
				});
			}
		} catch(error) {
			debugLog("battleSendHelp: " + error);
		}
	}
	/**
	 * @description 多人戰鬥中傳送貼圖,可以取得小聖靈藥
	 */
	async function battleSendStamp() {
		try {
			const apiBattle = _battleWorld?.backendAPI;
			if(!apiBattle) return;
			//隨機貼圖
			const stampNum = Math.floor(Math.random() * 10);
			apiBattle.postStamp(_questType, stampNum);
		} catch(error) {
			debugLog("BattleSendStamp: " + error);
		}
	}
	/**
	 * @description 獲取本場多人戰鬥的救援碼
	 */
	async function battleGetRescueId() {
		try {
			if (_questType !== "raid") return;
			const apiBattle = _battleWorld?.backendAPI;
			if(!apiBattle) return;
			const rescueIdRes = await apiBattle.postRescueId(_questType);
			return rescueIdRes.body.rescue_code;
		} catch(error) {
			debugLog("GetRescueId: " + error);
			return;
		}
	}
	/**
	 * @description 建立Ranking UI,顯示場上玩家功績排名
	 */
	async function createRankingUI() {
		const createTextUI = (name) => {
			const textNode = new ccui.Text();
			textNode.setName(name);
			textNode.setFontSize(12);
			textNode.setAnchorPoint(0, 0);
			textNode.setPosition(10, 80);
			textNode.enableOutline(cc.color.BLACK, 2);
			textNode.setFontName("GameFont");
			return textNode;
		};
		try {
			const layer =_battleWorld?.UIBackLayer;
			if (!layer) return;
			const startY = 460;
			const spacingY = 20;
			for (let i = 0; i < 15; i++) {
				const rankLabel = createTextUI("rankingLabel_" + i);
				rankLabel.setPosition(4, startY - (i * spacingY));
				rankLabel.setText("");
				_battleWorld.UIBackLayer.addChild(rankLabel);
			}
			_rankingTimestamp = new Date();
		} catch(error) {
			debugLog("CreateRankingUI: " + error);
		}
	}
	/**
	 * @description 將Ranking UI上的資訊清除
	 */
	async function clearRankingUI() {
		try {
			const layer =_battleWorld?.UIBackLayer;
			if (!layer) return;
			for (let i = 0; i < 15; i++) {
				const rankLabel = layer.getChildByName("rankingLabel_" + i);
				if (rankLabel) rankLabel.setText("");
			}
		} catch(error) {
			debugLog("clearRankingUI: " + error);
		}
	}
	/**
	 * @description 取得場上玩家功績排名並更新Ranking UI
	 */
	async function battleGetRanking() {
		try {
			const apiBattle = _battleWorld?.backendAPI;
			if(!apiBattle) return;
			const rankRes = await apiBattle.getRanking(_questType);
			const players = rankRes?.body || [];
			const layer =_battleWorld?.UIBackLayer;
			if (!layer) return;
			for (let i = 0; i < 15; i++) {
				const rankLabel = layer.getChildByName("rankingLabel_" + i);
				if (!rankLabel) break;
				if (i < players.length) {
					const player = players[i];
					let displayName = player.player_name || "";
					if (player.is_mine) {
						rankLabel.setTextColor(cc.color(100, 200, 255));
					} else {
						rankLabel.setTextColor(cc.color(50, 255, 50));
					}
					if (player.is_down) {displayName = applyStrikethrough(displayName);}
					rankLabel.setText(displayName);
				} else {
					rankLabel.setText("");
				}
			}
		} catch(error) {
			debugLog("GetRanking: " + error);
		}
		/**
		 * @description 為字串加上 Unicode 刪除線效果 (\u0336)
		 * @param {string} text - 原始文字
		 * @returns {string} 帶有刪除線效果的文字
		 */
		function applyStrikethrough(text) {
			if (!text) return "";
			// 將字串拆成字元陣列，在每個字元後面加上 \u0336 組合刪除線符號
			return text.split("").join("\u0336") + "\u0336";
		}
	}
	/**
	 * @description 發送救援討伐 (Raid level 90以下可用,戰鬥5分鐘以上有效)
	 */
	async function battleReliefSubjugation() {
		try {
			const apiBattle = _battleWorld?.backendAPI;
			if(apiBattle) {
				debugLog("Run Relief Subjugation!");
				await apiBattle.postReliefSubjugation(_questType);
			} else {
				debugLog("no battle World");
			}
		} catch(error) {
			debugLog("battleReliefSubjugation: " + error);
		}
	}
	/**
	 * @description 指定攻擊目標
	 * @param {number} index - 目標索引
	 */
	async function battleSelectEnemy(index) {
		try {
			const statusBar = _battleWorld?.enemyStatusBarList?.[index];
			if (!statusBar) return;
			statusBar._targetEnemy(statusBar, 2);
		} catch (error) {
			debugLog("battleSelectEnemy: " + error);
		}
	}
	/**
	 * @description 戰鬥中點擊Reload
	 */
	async function battleReload() {
		try {
			if (_battleWorld && _battleWorld.battleUI && _battleWorld.battleUI.ReloadButton) {
				_battleWorld.battleUI.ReloadButton._onReload();
			}
		} catch (error) {
			debugLog("battleReload: " + error);
		}
	}
	/**
	 * @description 設定自動攻擊模式
	 * @param {number} targetState - 0:手動, 1:綠自動, 2:紅自動
	 */
	async function setBattleAutoState(targetState) {
		try {
			const autoButton = _battleWorld?.battleUI?.AutoButton;
			if (!autoButton) return;
			//取得當前狀態(0:手動,1:綠,2:紅)
			const currentState = kh.createInstance("AutoScenarioStateHandler")?.getViewState()?.STATE;
			if (currentState === undefined) return;
			//計算點擊次數
			const clicksNeeded = (targetState - currentState + 3) % 3;
			for (let i = 0; i < clicksNeeded; i++) {
				autoButton._onTouchEvent(autoButton._widget, 2);
			}
		} catch (error) {
			debugLog("setBattleAutoState: " + error);
		}
	}
	/**
	 * @description 依關卡選擇自動戰鬥類型,邏輯依人而定
	 */
	async function battleAdjustAutoState() {
		try {
			switch (_questType) {
				case "raid"://合作副本
					if (_enemyLevel < 90) {
						await setBattleAutoState(1);//綠自動
					} else {
						await setBattleAutoState(2);//紅自動
					}
					break;
				case "event_raid": //活動副本
					if (_enemyLevel < 110) {
						await setBattleAutoState(1);//綠自動
					} else {
						await setBattleAutoState(2);//紅自動
					}
					break;
				case "daily":
					await setBattleAutoState(1);//綠自動
					break;
				case "accessory"://飾品
					await setBattleAutoState(2);//紅自動
					break;
				case "main":
					await setBattleAutoState(1);//綠自動
					break;
				case "event_union_seraph_raid"://煉獄主關卡
					//臨時的蘿蔔條件
					if (_unionLevel > 0) {
						if (_unionLevel < 250) {
							await setBattleAutoState(1);//綠自動
						} else {
							await setBattleAutoState(2);//紅自動
						}
					}
					break;
				case "event_union_throne_raid"://煉獄十字架
					await setBattleAutoState(1);//綠自動
					break;
			}
		} catch(error) {
			debugLog("battleAdjustAutoState: " + error);
		}
	}
	/**
	 * @description 依據敵人名稱比對關鍵字並回傳對應元素屬性
	 * @param {String} enemyName - 敵人名稱
	 */
	async function getElementByEnemyName(enemyName) {
		//敵人名稱與屬性的關鍵字
		const ENEMY_ELEMENT_KEYWORDS = {
			flame: ["炎", "火", "PB01", "茨木童子", "Fire"],
			water: ["氷", "水", "PB02", "牛鬼", "Aqua"],
			wind: ["風", "PB03", "天邪鬼", "Wind"],
			thunder: ["雷", "PB04", "大嶽丸", "Bolt"],
			darkness: ["闇", "PB06", "両面宿儺", "Dark"],
			light: ["光", "PB05", "酒呑童子", "Ray"],
			phantom: ["幻", "ロキ", "オク", "洛基", "歐柯"]
		};
		for (const [element, keywords] of Object.entries(ENEMY_ELEMENT_KEYWORDS)) {
			// 只要符合其中一個關鍵字就回傳該屬性
			if (keywords.some(keyword => enemyName.includes(keyword))) {
				return element;
			}
		}
		return "";
	}
	/**
	 * @description 戰鬥開始時,取得關卡資訊
	 */
	async function battleUpdateData() {
		try {
			//更新現在關卡屬性與等級
			const currentScene = cc.director.getRunningScene();
			if (currentScene) {
				_questType = currentScene.getQuestType();
				sendQuestText(_questType);
			}
			const questInfo = kh.createInstance("questInfo");
			let questElementStr = "";
			if (questInfo) {
				questElementStr = questInfo.getQuestSubCategory();
			}
			//回傳的屬性名稱
			const VALID_ELEMENTS = new Set(["flame", "water", "wind", "thunder", "darkness", "light", "phantom"]);
			_enemyElement = VALID_ELEMENTS.has(questElementStr) ? questElementStr : "";
			//查詢所有敵人
			if (_battleWorld && Array.isArray(_battleWorld.enemyList)) {
				_enemyLevel = 0;
				_enemyCount = _battleWorld.enemyList.length;
				for (const enemy of _battleWorld.enemyList) {
					if (enemy && enemy.id && enemy._avatarData) {
						const avatar = enemy._avatarData;
						//找出等級最高的敵人
						if (avatar.level > _enemyLevel) {
							_enemyLevel = avatar.level;
						}
						//依據敵人名稱關鍵字判定屬性
						if (_enemyElement === "" && avatar.name) {
							_enemyElement = await getElementByEnemyName(avatar.name);
						}
					}
				}
			}
			//debugLog("Element: " + _enemyElement + ", level: " + _enemyLevel);
		} catch(error) {
			debugLog("battleUpdateData: " + error);
		}
	}
	/**
	 * @description 依關卡選擇指定敵方,邏輯依人而定
	 */
	async function battleAutoSelectEnemy() {
		try {
			//debugLog('Element: ' + _enemyElement + ", level: " + _enemyLevel + ", count: " + _enemyCount);
			if (_questType === "raid" && _enemyCount > 1 && _enemyLevel > 100) {
				switch (_enemyElement) {
				case "flame":
					if (_enemyLevel === 130 && _enemyCount === 2) {await battleSelectEnemy(Math.floor(Math.random()*2));}
					break;
				case "water":
					if (_enemyLevel === 130 && _enemyCount === 3) {await battleSelectEnemy(2);}
					break;
				case "wind":
					if (_enemyLevel === 130 && _enemyCount === 3) {await battleSelectEnemy(2);}
					break;
				case "thunder":
					if (_enemyLevel === 130 && _enemyCount === 2) {await battleSelectEnemy(1);}
					break;
				case "darkness":
					if (_enemyLevel === 130 && _enemyCount === 2) {await battleSelectEnemy(1);}
					break;
				case "light":
					if (_enemyLevel === 130 && _enemyCount === 3) {await battleSelectEnemy(2);}
					break;
				case "phantom":
					if (_enemyLevel === 140 && _enemyCount === 3) {await battleSelectEnemy(2);}
					break;
				}
			}
		} catch(error) {
			debugLog("battleAutoSelectEnemy: " + error);
		}
	}
	/**
	 * @description 自動選擇幻獸攻擊
	 */
	async function battleAutoSummon() {
		try {
			if (_battleWorld.battleUI.SummonButton && _battleWorld.battleUI.SummonButton._widget && _battleWorld.battleUI.SummonButton._widget.isEnabled()) {
				//開啟幻獸面板
				//_battleWorld.battleUI.SummonButton.onPushTouchPanel(_battleWorld.battleUI.SummonButton._widget, 2);
				if (_battleWorld.battleUI.SummonPanelGroup) {
					const panelList = _battleWorld.battleUI.SummonPanelGroup.panelList;
					//應該要依元素或功能排序後發動, 但是還沒寫
					for (const summon of panelList) {
						if (summon.isUsable()) {
							_battleWorld.summonAttack(summon.index);
							await sleep(300);
							//debugLog("run summon");
							break;
						}
					}
				}
			}
		} catch(error) {
			debugLog("battleAutoSummon: " + error);
		}
	}
	/**
	 * @description 檢查Attack按鈕啟用
	 * @returns {boolean} Attack可點擊回傳true,否則回傳false
	 */
	async function isAttackButtonReady() {
		_battleWorld = kh.createInstance("battleWorld");
		if (!_battleWorld) return false;
		const battleUI = _battleWorld?.battleUI;
		if (!battleUI) return false;
		const centerPanel = _battleWorld.battleUI.CenterPanel;
		if (!centerPanel) return false;
		if (centerPanel._visibleButton !== centerPanel.BUTTONS.ATTACK) return false;
		const btnAttack = battleUI.AttackButton?._widget;
		if (!btnAttack) return false;
		if (!btnAttack.isVisible()) return false;
		return btnAttack.isEnabled();
	}
	/**
	 * @description 等待Attack按鈕啟用
	 * @param {number} [timeout=15000] - 最長等待時間 (ms)
	 */
	async function waitForAttackButton(timeout = 15000) {
		try {
			const startTime = Date.now();
			while (Date.now() - startTime < timeout) {
				if (await isAttackButtonReady()) break;
				await sleep(100);
			}
			await sleep(100);
		} catch(error) {
			debugLog("waitForAttackButton: ", error);
		}
	}
	/**
	 * @description 等待指定元件啟用
	 * @param {object} widgetName - 指定的視覺元件
	 * @param {number} [timeout=10000] - 最長等待時間 (ms)
	 */
	async function waitForWidget(widgetName, timeout = 10000) {
		let result = false;
		try {
			const startTime = Date.now();
			while (Date.now() - startTime < timeout) {
				const currentScene = cc.director.getRunningScene();
				if (currentScene?.seekWidgetByName(widgetName)) {
					result = true;
					break;
				}
				await sleep(100);
			}
		} catch(error) {
			debugLog("waitForWidget: ", error);
		}
		return result;
	}
	/**
	 * @description 戰鬥開始時的事件,關卡的每個階段也都會觸發一次
	 */
	async function onBattleStart() {
		try {
			const currentScene = cc.director.getRunningScene();
			_currentSceneName = "battle";//更新戰鬥場景
			sendSceneText(_currentSceneName);
			//由戰鬥場次的ID判斷是否為新的戰鬥
			let currentBattleId = currentScene.getBattleId();
			if (_battleId === currentBattleId) {
				const currentScene = cc.director.getRunningScene();
				if (currentScene) {
					const questType = currentScene.getQuestType();
					if (questType && questType === "raid") {
						await createRankingUI();
					}
				}
			} else {
				_battleId = currentBattleId;//更新戰鬥ID
				_battleWorld = kh.createInstance("battleWorld");
				await waitForAttackButton();
				//更新現在關卡類型
				await battleUpdateData();//更新戰鬥資訊
				if (_autoBattleModeEnabled) await battleAdjustAutoState();//調整自動攻擊模式
				if (_autoSummonEnabled) await battleAutoSummon();//幻獸攻擊
				if (_questType === "raid") {
					await battleSendHelp();//發送支援
					if (_autoStampEnabled) await battleSendStamp();//傳送表情
					await createRankingUI();
				}
				await battleAutoSelectEnemy();//選擇敵方
				await battleRaidPointsDelay();//測試中的取消功績延遲
				//點擊攻擊
				const currentState = kh.createInstance("AutoScenarioStateHandler")?.getViewState()?.STATE ?? 0;
				if (currentState > 0 && _autoAttackEnabled) {
					_battleWorld.battleUI.AttackButton.simulateAttack();
				}
				_playerActionTime = new Date();
				//開始監視戰鬥
				setTimeout(onBattling, 0);
			}
		} catch(error) {
			debugLog("onBattleStart: " + error);
		}
	}
	/**
	 * @description 戰鬥結束事件
	 */
	async function onBattleEnd() {
		try {
			//debugLog("on battle end");
			_currentSceneName = "*";
			sendSceneText(_currentSceneName);
			sendTurnText("*");
			//根據機器人種類繼續任務
			await robotRun("onBattleEnd");
		} catch(error) {
			debugLog("onBattleEnd: " + error);
		}
	}
	/**
	 * @description 戰鬥中定時觸發的事件
	 */
	async function onBattling() {
		try {
			//非戰鬥狀態退出
			if (_currentSceneName !== "battle") return;
			if (typeof cc.director.getRunningScene().sceneName !== "undefined") return;
			//注意,過場時battleWorld是空的
			_battleWorld = kh.createInstance("battleWorld");
			const battleUI = _battleWorld?.battleUI;
			if(battleUI) {
				//檢查狀態
				if (await isAttackButtonReady()) {
					//攻擊間格時間檢查
					_playerActionTime = new Date();
					//取得當前狀態 (0:手動,1:綠,2:紅),手動不點擊攻擊
					const currentState = kh.createInstance("AutoScenarioStateHandler")?.getViewState()?.STATE ?? 0;
					if (currentState > 0 && _autoAttackEnabled) {
						_battleWorld.battleUI.AttackButton.simulateAttack();//遊戲的攻擊函數
					}
				} else {
					await onAutoBattling();//自動攻擊中
					if (await hasNoLivingCharacters()) {
						if (!await robotRun("died")) return;
					}
				}
				//更新排行
				if (_questType === "raid") {
					const currentTime = new Date();
					if (currentTime - _rankingTimestamp > 5000) {
						_rankingTimestamp = currentTime;
						if (_isRankingEnabled) {
							battleGetRanking();
						} else {
							clearRankingUI();
						}
					}
				}
			}
			//非戰鬥狀態退出
			if (_currentSceneName !== "battle") return;
			if (typeof cc.director.getRunningScene().sceneName !== "undefined") return;
		} catch(error) {
			debugLog(`onBattling error: ${error}`);
		}
		setTimeout(onBattling, 300);
	}
	/**
	 * @description 自動戰鬥時定時觸發的事件
	 */
	async function onAutoBattling() {
		try {
			//檢查敵方數量
			const enemyList = _battleWorld.enemyList || [];			
			//太苦了,人都死光
			if (await hasNoLivingCharacters()) {
				sendQuestText(`${_questType};${enemyList.length};died`);
				return;
			} else {
				sendQuestText(`${_questType};${enemyList.length}`);
			}
			//自動攻擊中太久沒有動作時自動Reload
			if (_autoReloadEnabled) {
				// 取得當前狀態(0:手動,1:綠,2:紅)
				const currentState = kh.createInstance("AutoScenarioStateHandler")?.getViewState()?.STATE;
				// 非自動攻擊不作用
				if (currentState === 0) return;
				// 檢查閒置時間
				let currentTime = new Date();
				if (currentTime - _playerActionTime > _autoReloadWaiting) {
					await battleReload();
					_playerActionTime = currentTime;
				}
				//沒有設定自動攻擊時也要去自動點攻擊
				if (!_autoAttackEnabled) setTimeout(onReloadAttackAgain, 1000);
			}
		} catch(error) {
			debugLog("onAutoBattling: " + error);
		}
	}
	/**
	 * @description 檢查隊伍是否已經全滅
	 * @returns {Boolean} 若全滅回傳 true，否則回傳 false
	 */
	async function hasNoLivingCharacters() {
		try {
			const allCharacters = (_battleWorld.characterList || []).concat(_battleWorld.subList || []);
			const livingCharacters = allCharacters.filter(char => {
				return char != null && Object.keys(char).length > 0;
			});
			return livingCharacters.length === 0;
		} catch(error) {
			debugLog("hasNoLivingCharacters: " + error);
			return false;
		}
	}
	/**
	 * @description 戰鬥中閒置被重啟後的自動點擊攻擊
	 */
	async function onReloadAttackAgain() {
		try {
			if (await isAttackButtonReady()) {
				_battleWorld.battleUI.AttackButton.simulateAttack();
				_playerActionTime = new Date();
			} 
		} catch(error) {
			debugLog("onReloadAttackAgain: " + error);
		}
	}
	/**
	 * @description 戰鬥結算時等待資訊載入完成
	 * @returns {boolean} 載入完成回傳true, 逾時回傳false
	 */
	async function waitingQuestInfo() {
		try {
			let elapsed = 0;
			const checkInterval = 80;
			const timeoutLimit = 31000;
			const busyInterval = 8000;
			let nextBusyCheck = busyInterval;
			_questType = cc.director.getRunningScene().quest_type;
			while (!_questType) {
				await sleep(checkInterval);
				elapsed += checkInterval;
				if (elapsed >= timeoutLimit) {
					debugLog("q_result:timeout!");
					return false;
				}
				//發出警告
				if (elapsed >= nextBusyCheck) {
					debugLog("server busy!");
					nextBusyCheck += busyInterval;
				}
				_questType = cc.director.getRunningScene().quest_type;
			}
		} catch(error) {
			debugLog("waitingQuestInfo: " + error);
			return false;
		}
		return true;
	}
	/**
	 * @description 當場景切換時被觸發的事件
	 */
	async function onRunningSceneChanged() {
		try {
			//清除前一個場景的定時器
			if (_sceneTimeoutId) {clearTimeout(_sceneTimeoutId);_sceneTimeoutId = null;}
			if (!cc.director._runningScene) {return;}
			let currentSceneName = cc.director._runningScene.sceneName;
			//忽略特殊場景
			if (typeof currentSceneName === "undefined") {return;}
			_currentSceneName = currentSceneName;
			sendSceneText(_currentSceneName);
			//新場景定時器
			switch (_currentSceneName) {
				case "q_result"://結算
					//結算自動補APBP
					if (_autoAPBPEnabled) {await refillApBpIfNeeded();}
					//等待場景完成
					if (await waitingQuestInfo()) {
						_sceneTimeoutId = setTimeout(onQuestResult, 0);
					} else {
						const tempSceneName = cc?.director?._runningScene?.sceneName;
						if (tempSceneName && tempSceneName === "q_001") {
							await settleUnverifiedBattles();//檢查未完成
							await robotRun("onQuestResultTimeout");//通知蘿蔔逾時
						}
					}
					break;
				case "q_011"://Raid主頁
					break;
				case "q_009"://選擇幻獸與隊伍
					await waitForWidget("label_to_quest");
					_sceneTimeoutId = setTimeout(onQuestSummonSelection, 0);
					break;
				case "q_002"://選擇幻獸與隊伍
					await waitForWidget("label_to_quest");
					_sceneTimeoutId = setTimeout(onQuestSummonSelection, 0);
					break;
				case "ev_000"://活動
					break;
				case "my_001"://主畫面
					break;
				case "ga_000"://轉蛋
					break;
				case "q_006_007_008"://尋找合作副本
					break;
				case "q_011"://一般raid
					break;
				case "ra_002"://活動raid
					break;
				case "q_001"://主線
					_sceneTimeoutId = setTimeout(onQuestResultMainStory, 0);
					break;
				case "q_special_top"://素材,屬性,飾品
					break;
				default:
					//進入未處理的場景
					break;
			}
		} catch(error) {
			debugLog("onRunningSceneChanged: " + error);
		}
	}
	/**
	 * @description 戰鬥結算畫面的定時觸發的事件
	 */
	async function onQuestResult() {
		try {
			if (!await robotRun("onQuestResult")) return;
			//自動連續挑戰有開啟
			if (_autoRetryEnabled) {
				const currentScene = cc.director.getRunningScene();
				let currentSceneName1 = currentScene.sceneName;
				if (typeof currentSceneName1 === "undefined") return;
				if (currentSceneName1 !== "q_result") return;
				//Touch [OK]
				let btn_blue = currentScene.seekWidgetByName("blue_btn");
				if (btn_blue) {
					let btn_blue_text = "";
					if (typeof btn_blue.getTitleText === 'function') {
						btn_blue_text = btn_blue.getTitleText();
					} else if (typeof btn_blue.getString === 'function') {
						btn_blue_text = btn_blue.getString();
					}
					if (btn_blue_text) {
						await simulateTouch(btn_blue);
					}
				}
				switch (_questType) {
					case "raid"://合作副本
						//Touch [返回]
						await simulateTouch(currentScene.seekWidgetByName("btn_back_top"));
						break;
					case "event_raid"://活動副本
						{
							let btnRetry = currentScene.seekWidgetByName("btn_retry");
							if (btnRetry && btnRetry.isVisible()) {
								if (await launchRaidBattleAgain()) return;
								//Touch [再挑戰]
								await simulateTouch(btnRetry);
							} else {
								//Touch [返回]
								await simulateTouch(currentScene.seekWidgetByName("btn_back_top"));
							}
							//Touch [道具]
							await simulateTouch(currentScene.seekWidgetByName("btn_challenge"));
						}
						break;
					case "daily":
						if (await launchRaidBattleAgain()) return;
						//Touch [再挑戰]
						await simulateTouch(currentScene.seekWidgetByName("btn_retry"));
						await simulateTouch(currentScene.seekWidgetByName("btn_ok"));
						break;
					case "event"://降臨活動
						if (await launchRaidBattleAgain()) return;
						break;
					case "main"://主線劇情
						if (await launchRaidBattleAgain()) return;
						await simulateTouchByPath("Scene(C)/popupLayer/default/default/default/Layer/popup_base/btn_ok");
						await simulateTouchByPath("Scene(C)/popupLayer/default/default/default/Layer/popup_base/btn_cancel");
						//Touch [再挑戰]
						await simulateTouchByPath("Scene(C)/contentLayer/Scene/window_gray/btn_retry");
						await simulateTouch(currentScene.seekWidgetByName("blue_btn"));
						break;
					case "scenario_only_main"://主線劇情撥放
						await simulateTouch(currentScene.seekWidgetByName("btn_retry"));
						break;
					case "free":
						break;
					case "primal_conquest":
						break;
					case "quest_story_event":
						break;
					case "event_union_throne_raid"://煉獄十字架
						if (await launchRaidBattleAgain()) return;
						break;
					case "accessory"://飾品
						if (await launchRaidBattleAgain()) return;
						await simulateTouch(currentScene.seekWidgetByName("btn_retry"));
						//Touch [道具]
						await simulateTouch(currentScene.seekWidgetByName("btn_challenge"));
						break;
					case "score_attack_event":
						break;
					case "rush_event":
						break;
					case "solo"://神想真化
						await simulateTouch(currentScene.seekWidgetByName("btn_retry"));
						break;
					case "weapon_break"://兵仗
						await simulateTouch(currentScene.seekWidgetByName("btn_back_top"));
						break;
					case "epic":
						if (await launchRaidBattleAgain()) return;
						await simulateTouchByPath("Scene(C)/contentLayer/Scene/window_gray/btn_retry");
						break;
					default:
						break;
				}
			}
			let currentSceneName2 = cc.director._runningScene.sceneName;
			if (typeof currentSceneName2 === "undefined") return;
			if (currentSceneName2 !== "q_result") return;
			_sceneTimeoutId = setTimeout(onQuestResult, 500);
		} catch(error) {
			debugLog("onQuestResult: " + error);
		}			
	}
	/**
	 * @description 定期檢查主線劇情的對話框按鈕,並點擊
	 */
	async function onQuestResultMainStory() {
		try {
			await simulateTouchByPath("Scene(C)/popupLayer/default/default/default/Layer/popup_base/btn_node/blue_btn")
			let currentSceneName = cc.director._runningScene.sceneName;
			if (typeof currentSceneName === "undefined") return;
			if (currentSceneName !== "q_001") return;
			setTimeout(onQuestResultMainStory, 2000);
		} catch(error) {
			debugLog("onQuestResultMainStory: " + error);
		}	
	}
	/**
	 * @description 檢查選擇幻獸畫面是否還在
	 */
	async function isBattlingQ29() {
		try {
			if (_currentSceneName === "battle") return true;
			_battleWorld = kh.createInstance("battleWorld");
			const battleUI = _battleWorld?.battleUI;
			if(battleUI) return true;
			let currentSceneName = cc.director._runningScene?.sceneName;
			if (!currentSceneName) return true;
			if (currentSceneName === "q_002" || currentSceneName === "q_009") {
				return false;
			} else {
				return true;
			}
		} catch(error) {
			debugLog("isBattlingQ29: " + error);
		}	
	}
	/**
	 * @description 選擇幻獸畫面的定期觸發事件
	 */
	async function onQuestSummonSelection() {
		try {
			if (_isAutoDeployEnabled) {
				if (await isBattlingQ29()) return;
				if ((Date.now() - _battleStartTime) < 20000) return;
				//自動選擇幻獸與隊伍進場
				const currentScene = cc.director.getRunningScene();
				const labelToQuest = currentScene?.seekWidgetByName("label_to_quest");
				if (labelToQuest.isVisible()) {
					//Touch[加入]
					if (await simulateTouch(currentScene.seekWidgetByName("btn_blue"))) {
						//debugLog("onQuestSummonSelection Touch join!");
						await sleep(2000);
					}
				} else {
					// Touch [第一支支援幻獸]
					if (await simulateTouch(currentScene.seekWidgetByName("supportlist_base"))) {
						//debugLog("onQuestSummonSelection Touch support!");
						await sleep(50);
						if (await simulateTouch(currentScene.seekWidgetByName("btn_blue"))) {
							//debugLog("onQuestSummonSelection Touch join!");
							await sleep(2000);
						}
					}
				}
			}
			if ((Date.now() - _battleStartTime) < 20000) return;
			if (await isBattlingQ29()) return;
			setTimeout(onQuestSummonSelection, 1000);
		} catch(error) {
			debugLog("onQuestSummonSelection: " + error);
		}			
	}
	/**
	 * @description 過場劇情開始的事件
	 */
	async function onScenario() {
		try {
			sendSceneText("Scenario");
		} catch(error) {
			debugLog("onScenario: " + error);
		}
	}
	/**
	 * @description 過場劇情腳本按下Skip傳送的訊號
	 */
	async function onScenarioSkip() {
		try {
			const targetPath = "Scene(C)/popupLayer/default/default/default/Layer/popup_base/btn_node/yellow_btn";
			const maxWaitTime = 2000;
			const retryInterval = 100;
			let elapsedTime = 0;
			while (elapsedTime < maxWaitTime) {
				if (await simulateTouchByPath(targetPath)) {
					break;
				}
				await sleep(retryInterval);
				elapsedTime += retryInterval;
			}
		} catch(error) {
			debugLog("onScenarioSkip: " + error);
		}
	}
	/**
	 * @description 寢室開始的事件
	 */
	async function onLoveScenes() {
		try {
			sendSceneText("Love Scenes");
		} catch(error) {
			debugLog("onLoveScenes: " + error);
		}
	}
	/**
	 * @description 寢室腳本按下Skip傳送的訊號
	 */
	async function onLoveScenesSkip() {
		try {
			const targetPath = "Scene(C)/popupLayer/default/default/default/Layer/popup_base/btn_node/yellow_btn";
			const maxWaitTime = 2000;
			const retryInterval = 100;
			let elapsedTime = 0;
			while (elapsedTime < maxWaitTime) {
				if (await simulateTouchByPath(targetPath)) {
					break;
				}
				await sleep(retryInterval);
				elapsedTime += retryInterval;
			}
		} catch(error) {
			debugLog("onLoveScenesSkip: " + error);
		}
	}
	/**
	 * @description 攔截到的其他玩家Raid顯示資訊
	 */
	function onRaidActionTeammate(message) {
		try{
			//debugLog(JSON.stringify(message, null, 2));
			//過濾訊息
			if (message.line_2_action === "Attacked") {
				const damageStr = message.line_3_damage_result || "";
				const rawNumber = parseInt(damageStr.replace(/,/g, ''));
				if (isNaN(rawNumber)) return;
				//傷害太低不洗版
				if (rawNumber < _minimumDamage) return;

				let damageFormatted = "";
				if (rawNumber >= 100000000) { 
					damageFormatted = (rawNumber / 100000000).toFixed(2).replace(/\.?0+$/, "") + "億";
				} else if (rawNumber >= 10000) { 
					damageFormatted = (rawNumber / 10000).toFixed(1).replace(/\.0$/, "") + "萬";
				} else if (rawNumber > 0) {
					damageFormatted = rawNumber.toLocaleString();
				} else {
					damageFormatted = "0";
				}
				debugLog(`${message.line_1_action}${damageFormatted}`);
			}			
		} catch(error) {
			debugLog("onRaidActionTeammate: " + error);
		}
	}
	/**
	 * @description 攔截到自己的Raid顯示資訊
	 */
	function onRaidActionSelf(scenarioData) {
		if (!scenarioData || !scenarioData.length) return;
		//計算總傷害值
		const calculateTotalDamage = (scenarioData) => {
			//建立一個通用提取傷害值的邏輯
			const getDmg = (cmdList, target = null) => 
				cmdList.map(e => e.damage || [])
						.flat(2)
						.filter(e => !target || e.to === target)
						.reduce((sum, e) => sum + (e.value || 0), 0);

			const damageCmds = scenarioData.filter(e => e.cmd === "damage");
			const attacks = scenarioData.filter(e => e.cmd === "attack" && e.from === "player");
			const summons = scenarioData.filter(e => e.cmd === "summon_damage");
			const burstStreak = scenarioData.filter(e => e.cmd === "burst_streak");
			return getDmg(damageCmds, "enemy") + getDmg(attacks) + getDmg(summons) + getDmg(burstStreak);
		};
		//解析動作類型並返回描述字串
		const getActionDescription = (scenarioData) => {
			const ability = scenarioData.find(e => e.cmd === "ability" && e.from === "player");
			const bursts = scenarioData.some(e => e.cmd === "burst" && e.from === "player");
			const summons = scenarioData.some(e => e.cmd === "summon_damage");
			const attacks = scenarioData.some(e => e.cmd === "attack" && e.from === "player");
			if (summons) return "幻獸攻擊";
			if (bursts) return "爆裂攻擊";
			if (ability) return `技能(${ability.name}) `;
			if (attacks) return "普通攻擊";
			return "";//無特定動作
		};
		try{
			//計算傷害並取得動作描述
			const totalDamage = calculateTotalDamage(scenarioData);
			//傷害太低不洗版
			if (totalDamage < _minimumDamage) return;
			const actionText = getActionDescription(scenarioData);
			if (actionText) {
				let damageFormatted = "";
				if (totalDamage >= 100000000) { 
					//大於等於 1 億：除以 1 億，保留最多 2 位小數，並去除結尾多餘的 0
					damageFormatted = (totalDamage / 100000000).toFixed(2).replace(/\.?0+$/, "") + "億";
				} else if (totalDamage >= 1000) { 
					//大於等於 1 萬：除以 1 萬，保留最多 1 位小數，並去除結尾的 .0
					damageFormatted = (totalDamage / 10000).toFixed(1).replace(/\.0$/, "") + "萬";
				} else if (totalDamage > 0) {
					//小於 1 萬：直接加千分位逗號顯示
					damageFormatted = totalDamage.toLocaleString();
				} else {
					damageFormatted = "0";
				}
				debugLog(`${actionText} ${damageFormatted}`);
			}
		} catch(error) {
			debugLog("onRaidActionSelf: " + error);
		}
	}
}
/**
 * @description 故事劇情頁面,使用 TyranoScript 引擎
 */
function onGameScenario() {
	init();//程式進入點
	/**
	 * @description 初始化故事劇情頁面
	 */
	async function init() {
		await initializationTyrano();
		await onScenarioLoaded();
		GM_setValue("scenarioStart", Date.now());//通知劇情啟動
		if (GM_getValue("isSkipScenario", false)) {
			setTimeout(searchSkipButtons, 500);//點擊Skip
		}
	}
	/**
	 * @description 等待Tyrano引擎準備完成
	 */
	function initializationTyrano() {
		return new Promise((resolve) => {
			function check() {
				if (typeof TYRANO !== "undefined" && TYRANO.kag && TYRANO.kag.stat && TYRANO.kag.ftag) {
					resolve();
				} else {
					setTimeout(check, 100); 
				}
			}
			check();
		});
	}
	/**
	 * @description TyranoScript載入完成後
	 */
	async function onScenarioLoaded() {
		try {
			const kag = TYRANO.kag;
			//加速設定
			if (kag.config) {
				kag.config.chSpeed = "0";//文字出現速度
				kag.config.skipSpeed = "1";//Skip的速度
			}
			kag.stat.is_skip = true;
			if (kag.ftag && typeof kag.ftag.nextOrder === "function") {
				kag.ftag.nextOrder();
			}
			//TyranoScript的skipstart
			if (kag.ftag && typeof kag.ftag.startTag === "function") {
				kag.ftag.startTag("skipstart", {});
			}
		} catch(error) {
			console.log("onScenarioLoaded: " + error);
		}
	}
	/**
	 * @description 找出畫面中的Skip Button並點擊
	 */
	function searchSkipButtons() {
		try {
			const allButtons = document.querySelectorAll('button');
			const skipBtn = Array.from(allButtons).find(btn => {
				return btn.style.background && btn.style.background.includes('btn_skip.png');
			});
			if (skipBtn) {
				skipBtn.click();
				GM_setValue("scenarioSkip", Date.now());
			} else {
				console.log("no skipBtn");
				setTimeout(searchSkipButtons, 500);
			}
		} catch(error) {
			console.log("searchButtons: " + error);
		}
	}
}
/**
 * @description 寢室撥放器頁面
 */
function onLoveScenes() {
	init();//程式進入點
	/**
	 * @description 初始化寢室撥放器頁面
	 */
	async function init() {
		GM_setValue("loveSceneStart", Date.now());//通知寢室啟動
		hijackAutoPlayTimer();//加速撥放
		forceEnableAutoMode();//開啟自動
		if (GM_getValue("isSkipScenario", false)) {
			startUniversalSkip();//點擊Skip
		}
	}
	/**
	 * @description 點擊Skip略過寢室
	 */
	function startUniversalSkip() {
		const skipTimer = setInterval(() => {
			const skipBtn = document.getElementById('skip-btn');
			if (skipBtn) {
				// PC的滑鼠放開
				const mouseUpEvent = new MouseEvent('mouseup', {bubbles: true, cancelable: true, view: document.defaultView});
				skipBtn.dispatchEvent(mouseUpEvent);
				// 觸控的離開
				const touchEndEvent = new Event('touchend', {bubbles: true, cancelable: true});
				skipBtn.dispatchEvent(touchEndEvent);
				GM_setValue("LoveScenesSkip", Date.now());
				clearInterval(skipTimer);
			}
		}, 500);
	}
	/**
	 * @description 快速撥放寢室,未完成
	 */
	function hijackAutoPlayTimer() {
		//等待AnimPlayer
		const hookTimer = setInterval(() => {
			if (window.AnimPlayer && window.AnimPlayer.prototype && window.AnimPlayer.prototype.setAutoTransitionTimer) {
				clearInterval(hookTimer);
				const originalMethodSetAutoTransitionTimer = window.AnimPlayer.prototype.setAutoTransitionTimer;
				window.AnimPlayer.prototype.setAutoTransitionTimer = function(delay) {
					return originalMethodSetAutoTransitionTimer.call(this, 10);//預設250
				};
				const shield = document.getElementById('shield');
				if (shield) {shield.style.display = 'none'; }
			}
		}, 100);
	}
	/**
	 * @description 自動打開AUTO開關
	 */
	function forceEnableAutoMode() {
		const autoTimer = setInterval(() => {
			const autoCheckbox = document.getElementById('toggle-auto');
			if (autoCheckbox) {
				if (!autoCheckbox.checked) {
					autoCheckbox.click();
				}
				clearInterval(autoTimer);
			}
		}, 500);
	}
}
//})();
