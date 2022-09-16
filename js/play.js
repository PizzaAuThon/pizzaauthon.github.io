var preload;
var instances = [];

function init() {
    if (!createjs.Sound.initializeDefaultPlugins()) {
        document.getElementById("error").style.display = "block";
        document.getElementById("content").style.display = "none";
        return;
    }

    //examples.showDistractor("content");
	var assetsPath = "mp3/";
    var sounds = [
	    {src:"01-cesdiableries.mp3",id:0},
        {src:"02-jsuisbourré.mp3",id:1},
		// {src:"03-kapriunevolee.mp3",id:2},
		// {src:"04-hehofman.mp3",id:3},
		// {src:"05-lopezdevosmorts.mp3",id:4},
		// {src:"06-jvaisvousenculer.mp3",id:5},
		// {src:"07-tuviensquand.mp3",id:6},
		// {src:"08-50detesfreres.mp3",id:7},
		// {src:"09-tuvoiscequtumforce.mp3",id:8},
		// {src:"10-moijevienstoutseul.mp3",id:9},
		// {src:"11-viensonvaenfinir.mp3",id:10},
		// {src:"12-moitieroute.mp3",id:11},
		// {src:"13-etcuilaquivientpas.mp3",id:12},
		// {src:"14-onsdonnerdv.mp3",id:13},
		// {src:"15-jeveuxenfinir.mp3",id:14},
		// {src:"16-jaijamaispris.mp3",id:15},
		// {src:"17-jenveux.mp3",id:16},
		// {src:"18-2012.mp3",id:17},
		// {src:"19-vousallezpayer.mp3",id:18},
		// {src:"20-lesang.mp3",id:19},
		// {src:"21-lacalote.mp3",id:20},
		// {src:"22-vienslatoi.mp3",id:21},
		// {src:"23-juisuce.mp3",id:22},
		// {src:"24-lesangdeleurmort.mp3",id:23},
		// {src:"25-tafemme.mp3",id:24},
		// {src:"26-fermetagueule.mp3",id:25},
		// {src:"27-balles.mp3",id:26},
		// {src:"28-2coupsdepoing.mp3",id:27},
		// {src:"29-volees.mp3",id:28},
		// {src:"30-castagne.mp3",id:29},
		// {src:"31-cri.mp3",id:30},
		// {src:"32-75kilos.mp3",id:31}
    ];

    //createjs.Sound.alternateExtensions = ["mp3"];    // add other extensions to try loading if the src file extension is not supported
    createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
    createjs.Sound.registerSounds(sounds, assetsPath);
}

function soundLoaded(event) {
    //examples.hideDistractor();
    var div = document.getElementById(event.id);
    div.innerHTML = div.dataset.label;
}

function stop() {
    if (preload != null) {
        preload.close();
    }
    if (instances.length > 0) {
        for (index = 0; index < instances.length; ++index) {
            var target = instances[index];
            target.innerHTML = target.dataset.label;
            target.className = "button";
        }
    }
    //console.log();
    createjs.Sound.stop();
}

function playSound(target) {
    stop();
    var instance = createjs.Sound.play(target.id, createjs.Sound.INTERRUPT_ANY, 0, 0, false, 1);

    if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
        return;
    }
    var text = target.innerHTML;
    var width = target.offsetWidth;
	console.log()
	target.innerHTML = '<img class="icon" src="images/preloader.svg" width="40" height="25" alt="">';
    target.className = "button active";
    target.style.width = width+"px";
    instance.addEventListener("complete", function (instance) {
        target.innerHTML = text;
        target.className = "button";
    });
    instances.push(target);
    return false;
}

$(document).on( "keydown", function(e){
	console.log(e.keyCode);
	if(e.keyCode === 65) {
		$('.button').eq(0).trigger('click');
	}
	if(e.keyCode === 90) {
		$('.button').eq(1).trigger('click');
	}
	if(e.keyCode === 69) {
		$('.button').eq(2).trigger('click');
	}
	if(e.keyCode === 82) {
		$('.button').eq(3).trigger('click');
	}	
	if(e.keyCode === 84) {
		$('.button').eq(4).trigger('click');
	}
	if(e.keyCode === 89) {
		$('.button').eq(5).trigger('click');
	}
	if(e.keyCode === 85) {
		$('.button').eq(6).trigger('click');
	}
	if(e.keyCode === 73) {
		$('.button').eq(7).trigger('click');
	}
	if(e.keyCode === 79) {
		$('.button').eq(8).trigger('click');
	}			
	if(e.keyCode === 80) {
		$('.button').eq(9).trigger('click');
	}	
	if(e.keyCode === 81) {
		$('.button').eq(10).trigger('click');
	}
	if(e.keyCode === 83) {
		$('.button').eq(11).trigger('click');
	}			
	if(e.keyCode === 68) {
		$('.button').eq(12).trigger('click');
	}
	if(e.keyCode === 70) {
		$('.button').eq(13).trigger('click');
	}
	if(e.keyCode === 71) {
		$('.button').eq(14).trigger('click');
	}
	if(e.keyCode === 72) {
		$('.button').eq(15).trigger('click');
	}	
	if(e.keyCode === 74) {
		$('.button').eq(16).trigger('click');
	}
	if(e.keyCode === 75) {
		$('.button').eq(17).trigger('click');
	}	
	if(e.keyCode === 76) {
		$('.button').eq(18).trigger('click');
	}	
	if(e.keyCode === 77) {
		$('.button').eq(19).trigger('click');
	}
	if(e.keyCode === 87) {
		$('.button').eq(20).trigger('click');
	}
	if(e.keyCode === 88) {
		$('.button').eq(21).trigger('click');
	}
	if(e.keyCode === 67) {
		$('.button').eq(22).trigger('click');
	}			
	if(e.keyCode === 86) {
		$('.button').eq(23).trigger('click');
	}
	if(e.keyCode === 66) {
		$('.button').eq(24).trigger('click');
	}
	if(e.keyCode === 78) {
		$('.button').eq(25).trigger('click');
	}	
	if(e.keyCode === 188) {
		$('.button').eq(26).trigger('click');
	}		
	if(e.keyCode === 186) {
		$('.button').eq(27).trigger('click');
	}	
	if(e.keyCode === 187) {
		$('.button').eq(28).trigger('click');
	}
	if(e.keyCode === 97) {
		$('.button').eq(29).trigger('click');
	}
	if(e.keyCode === 98) {
		$('.button').eq(30).trigger('click');
	}	
	if(e.keyCode === 99) {
		$('.button').eq(31).trigger('click');
	}
	if(e.keyCode === 100) {
		$('.button').eq(32).trigger('click');
	}
	if(e.keyCode === 101) {
		$('.button').eq(33).trigger('click');
	}
	if(e.keyCode === 102) {
		$('.button').eq(34).trigger('click');
	}	
	if(e.keyCode === 103) {
		$('.button').eq(35).trigger('click');
	}
	if(e.keyCode === 104) {
		$('.button').eq(36).trigger('click');
	}
	if(e.keyCode === 105) {
		$('.button').eq(37).trigger('click');
	}
	if(e.keyCode === 49) {
		$('.button').eq(38).trigger('click');
	}
	if(e.keyCode === 50) {
		$('.button').eq(39).trigger('click');
	}
	if(e.keyCode === 222) {
		$('.button').eq(40).trigger('click');
	}
	if(e.keyCode === 54) {
		$('.button').eq(41).trigger('click');
	}
	if(e.keyCode === 55) {
		$('.button').eq(42).trigger('click');
	}	
	if(e.keyCode === 56) {
		$('.button').eq(43).trigger('click');
	}
	if(e.keyCode === 57) {
		$('.button').eq(44).trigger('click');
	}		
	if(e.keyCode === 48) {
		$('.button').eq(45).trigger('click');
	}									
});