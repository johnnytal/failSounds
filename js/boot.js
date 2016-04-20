window.onload = function(){
    font = 'Chewy';

    WIDTH = 640; HEIGHT = 480; 
    
    w = window.innerWidth * window.devicePixelRatio;
    h = window.innerHeight * window.devicePixelRatio;
    
    game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, "");    
      
    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Game", gameMain);
    
    game.state.start("Boot");  
};

var boot = function(game){};
  
boot.prototype = {
    preload: function(){

    },
    create: function(){
        game.stage.backgroundColor = '#fffa6f';
 
        if (this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            var factor = 1.12; 
            
            this.scale.maxWidth = w / factor; 
            this.scale.maxHeight = h / factor; 
            
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.setScreenSize(true);
        } 
        
        else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.maxWidth = w;
            this.scale.maxHeight = h;
            
            this.scale.pageAlignHorizontally = true;
            this.scale.forceOrientation(false, true);

            this.scale.onOrientationChange.add(onOrientationChange, this);
            
            this.scale.setScreenSize(true);
        }
        game.state.start('Preloader');
    }
};

function onOrientationChange(){
    
}

