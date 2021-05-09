//Random Game Chooser
var randGame = 0;
var name = "";
var img = "";
var desc = "";

function LoadRandomGame() {
	//Randomize
	randGame = Math.floor(Math.random()*40);
	
	//Game Information
	switch(randGame) {
		case 0:
			name = "Mario's Egg";
			img = "img/legacy_megg.png";
			desc = "Mario needs to collect Yoshi eggs for some reason.";
			break;
		case 1:
			name = "Mario's Journey";
			img = "img/legacy_mj.png";
			desc = "A very basic platform game made using Trisoft's Mario engine.";
			break;
		case 2:
			name = "Super Mario Bros: Hello";
			img = "img/legacy_smbh.png";
			desc = "Mario goes on another adventure. Yeah.";
			break;
		case 3:
			name = "Super Mario Greetings";
			img = "img/legacy_smg.png";
			desc = "Mario needs to manipulate switches in order to collect all the red coins.";
			break;
		case 4:
			name = "Super Mario Bros: Adventure Journey";
			img = "img/legacy_smbaj.png";
			desc = "Mario goes on an adventure and a journey.";
			break;
		case 5:
			name = "Super Mario Bros: Journey to Peach";
			img = "img/legacy_smbjtp.png";
			desc = "Mario goes on a journey to save Peach.";
			break;
		case 6:
			name = "Super Mario Bros: Coin Quest";
			img = "img/legacy_smcq.png";
			desc = "Mario needs to collect red coins again.";
			break;
		case 7:
			name = "Super Mario Bros: Kill Bowser";
			img = "img/legacy_smbkb.png";
			desc = "Join Mario in his quest to... kill Bowser!?";
			break;
		case 8:
			name = "Super Luigi Paradise";
			img = "img/legacy_slp.png";
			desc = "Help Luigi explore this water filled paradise!";
			break;
		case 9:
			name = "Super Mario Bros: Bowser's Terror";
			img = "img/legacy_smbbt.png";
			desc = "Save the Mushroom Kingdom from Bowser's reign of terror!";
			break;
		case 10:
			name = "Super Mario Bros: Dark Days";
			img = "img/legacy_smbdarkdays.png";
			desc = "Mario with guns and blood!";
			break;
		case 11:
			name = "Super Mario Bros: Mushroom Journey";
			img = "img/legacy_smbmj.png";
			desc = "A short and simple game.";
			break;
		case 12:
			name = "Yoshi Click and Go";
			img = "img/legacy_yclickandgo.png";
			desc = "Click to shoot, and click Yoshi to jump!";
			break;
		case 13:
			name = "Super Mario Bros: Koopa Chaos";
			img = "img/legacy_smbkc.png";
			desc = "King Koopa is causing chaos, as usual.";
			break;
		case 14:
			name = "Mario's Run";
			img = "img/legacy_mrun.png";
			desc = "Drop blocks and springs onto the course to influence the outcome of the game as Mario walks back and forth like a Goomba.";
			break;
		case 15:
			name = "Save the Goombas";
			img = "img/legacy_stgoombas.png";
			desc = "Use the mouse to break stuff and press switches in order to get all the Goombas to reach the goal.";
			break;
		case 16:
			name = "Super Mario Bros: Kingdom Troubles";
			img = "img/legacy_smbkt.png";
			desc = "Save the Mushroom Kingdom from trouble!";
			break;
		case 17:
			name = "Mario the Mathematician";
			img = "img/legacy_mtmathematician.png";
			desc = "Solve math problems to attack Bowser and his minions with fireballs!";
			break;
		case 18:
			name = "Super Mario Bros: Shine Pursuit";
			img = "img/legacy_smbsp.png";
			desc = "Toadsworth has challenged Mario to a shine collecting game! Collect all the shines in a level to progress.";
			break;
		case 19:
			name = "Super Mario Bros: Crimson Hours";
			img = "img/legacy_smbch.png";
			desc = "Mario with guns and blood! And explosions!";
			break;
		case 20:
			name = "Super Mario Bros: Dual Dash";
			img = "img/legacy_smbdd.png";
			desc = "Play as both Mario and Luigi at the same time as they go on a journey to defeat Bowser and Wart!";
			break;
		case 21:
			name = "Super Mario Subpop";
			img = "img/legacy_smsubpop.png";
			desc = "Play as Mario in a submarine, and move up and down while shooting enemies!";
			break;
		case 22:
			name = "Super Mario Bros: Revenge of Bowser";
			img = "img/legacy_smbrob.png";
			desc = "Oh no! Princess Peach has been trapped by Bowser! Go through pipes in Peach's castle which take you all around the Mushroom Kingdom in this classic platformer, and collect the stars by finishing a level, finding 5 Ace coins, and finding the hidden shine. Can you collect all 120 stars in 40 levels, and defeat Bowser?";
			break;
		case 23:
			name = "A Koopa's Adventure";
			img = "img/legacy_akadventure.png";
			desc = "Play as a Koopa and retreat into your shell to kill Goombas and smash bricks!";
			break;
		case 24:
			name = "Super Mario Bros: Fierce Days";
			img = "img/legacy_smbfd.png";
			desc = "Bowser has taken over some islands in the Mushroom Kingdom. He then set up lots of forts. Mario received a letter telling him about the forts. Can you crush all of the forts?";
			break;
		case 25:
			name = "Bowser's Recruitment";
			img = "img/legacy_brecruitment.png";
			desc = "A game starring Bowser! After Mario beats up all of your minions, you need to go on an adventure to collect new ones.";
			break;
		case 26:
			name = "Super Luigi and the Golden Shrooms";
			img = "img/legacy_slatgs.png";
			desc = "Luigi needs to explore many different areas to find and collect golden mushrooms. There are lots of golden mushrooms scattered all over the Mushroom Kingdom. When all of them are collected, they function as a key, allowing you into a vault filled with riches. Unfortunately, these mushrooms are scattered everywhere, so collecting them will be a long and difficult task. Luckily, Luigi has plenty of free time, so he heads off in search of these mushrooms.";
			break;
		case 27:
			name = "Present Panic";
			img = "img/legacy_ppanic.png";
			desc = "Mario forgot to bring Peach a gift for Christmas! Help Mario collect presents for Peach in this block pushing puzzle minigame.";
			break;
		case 28:
			name = "Super Mario Bros: Shine Expedition";
			img = "img/legacy_smbse.png";
			desc = "Is there a way to stop Bowser once and for all? Embark on a quest to collect shines so that you can use them all to permanently kick Bowser out of the Mushroom Kingdom.";
			break;
		case 29:
			name = "Super Mario Bros: Bloody Battles";
			img = "img/legacy_smbbb.png";
			desc = "Bowser somehow got ahold of deadly weapons, and is using them to terrorize the Mushroom Kingdom, spilling blood everywhere. It is up to you to avenge the deaths of so many. Annihilate Bowser and his minions with all kinds of weapons.";
			break;
		case 30:
			name = "Super Mario Bros: Seeking Sunshine";
			img = "img/legacy_smbss.png";
			desc = "There was one night that for some reason has lasted for an unusually long time. Mario now must go on an adventure to collect the shines solving all sorts of puzzles on the way, and restore daylight to the Mushroom Kingdom.";
			break;
		case 31:
			name = "Escape the Ghost House";
			img = "img/legacy_etgh.png";
			desc = "Oh no! Luigi is trapped inside a ghost house. Can you escape before running out of time in this minigame?";
			break;
		case 32:
			name = "Hello Winter Mario Games 2009";
			img = "img/legacy_hwmg09.png";
			desc = "This winter game includes winter remakes of Super Luigi Paradise and Mario's Run. In addition to this, extra new levels have been added.";
			break;
		case 33:
			name = "Super Mario Bros: Restless Reality";
			img = "img/legacy_smbrr.png";
			desc = "Many years have passed since the Mario Bros last defeated Bowser and stopped his plans for world domination. The Mushroom Kingdom enjoyed years of peace. Until one day... Bowser is up to no good again! He is invading the once peaceful kingdom, and setting up forts! What could he be planning!? Mario must travel through many different locations to find out what Bowser is up to and stop his evil plans!";
			break;
		case 34:
			name = "Super Mario Bros: Mythical Mushrooms";
			img = "img/legacy_smbmm.png";
			desc = "There is a legend that tells of five mythical mushrooms of untold power. Mario sets off on a journey to collect these mushrooms in this challenging metroidvania platformer.";
			break;
		case 35:
			name = "Super Mario Bros: Ztar Turmoil";
			img = "img/legacy_smbzt.png";
			desc = "A dark force has begun to sweep over the Mushroom Kingdom. Guns have been introduced into the world mysteriously, and are being used to bring about death and destruction. It is up to Mario (or Luigi) to save the Mushroom Kingdom from the Ztars.";
			break;
		case 36:
			name = "Yoshi Tanks";
			img = "img/ytanks.png";
			desc = "In Yoshi Tanks, the aim of the game is to take out all of your opponent tanks, whether they are your friends, or AI controlled.";
			break;
		case 37:
			name = "Super Mario Eclipse";
			img = "img/sme.png";
			desc = "The eclipse stars, a source of mythical powers, have been unleashed upon the world. As a result, the entire Mushroom Kingdom has been shrouded in the shadows of an everlasting eclipse. It is up to Mario to collect these stars, and save everyone from an eternal twilight.";
			break;
		case 38:
			name = "Super Mario Dynamo";
			img = "img/smd.png";
			desc = "The people of the Mushroom Kingdom have finally embraced industrialization, and it is all thanks to everyone's favorite plumber, Luigi! Unfortunately, Luigi's greed got the best of him, and the entire kingdom became shrouded in darkness. The thick smog emanating from Luigi's accomplishments have darkened the once bright and colorful kingdom. It is now up to Mario to try and solve this dilemma!";
			break;
		case 39:
			name = "Hello Fangaming Collection";
			img = "img/hfc.png";
			desc = "Join Mario and Luigi on their adventure in this ten year anniversary collection! This collection includes an assortment of remastered levels handpicked from a wide variety of fangames released by Hello Fangaming between 2006-2016.";
			break;
	}
	
	//Set the page elements
	$("#randLink").attr("name", name.replace("Super Mario Bros","SMB"));
	$("#randThumb").attr("src", img);
	$("#randName").text(name);
	$("#randImg").attr("src", img);
	$("#randDesc").text(desc);
	
}

//Call when page is loaded (JQuery)
$(function() {
	LoadRandomGame();
	$('#randBox').show();
});