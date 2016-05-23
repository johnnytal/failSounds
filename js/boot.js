document.addEventListener("deviceready", start, false);
//window.onload = start;

function start(){   
    w = window.innerWidth * window.devicePixelRatio;
    h = window.innerHeight * window.devicePixelRatio;
    
    game = new Phaser.Game(850, 480, Phaser.CANVAS, "");    
      
    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Game", gameMain);
    
    game.state.start("Boot");  
};

var boot = function(game){};
boot.prototype = {
    create: function(){
        game.stage.backgroundColor = '#fffa7a';
        font = 'Luckiest Guy'; 

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.maxWidth = w;
        this.scale.maxHeight = h;
        
        this.scale.forceOrientation(false, true);
    
        game.state.start('Preloader');
    }
};