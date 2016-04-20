var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        this.game.load.image("cricket", "assets/images/cricket.png");
        this.game.load.image("drums", "assets/images/drums.png");
        this.game.load.image("horn", "assets/images/horn.png");
        this.game.load.image("jaws_harp","assets/images/jaws_harp.png");
        this.game.load.image("mask","assets/images/mask.png");
        this.game.load.image("trombone","assets/images/trombone.png");
        this.game.load.image("button","assets/images/button.png");
        this.game.load.image("border","assets/images/border.png");

        this.game.load.audio('sfxCricket', 'assets/audio/crickets.mp3');
        this.game.load.audio('sfxDrums', 'assets/audio/drums.mp3');
        this.game.load.audio('sfxHorn', 'assets/audio/horn.mp3');
        this.game.load.audio('sfxHorror', 'assets/audio/horror.mp3'); 
        this.game.load.audio('sfxJaws_harp', 'assets/audio/jaws_harp.mp3');
        this.game.load.audio('sfxTrombone', 'assets/audio/trombone.mp3');
    },
    
    create: function(){
        this.game.state.start("Game");  
    }
};