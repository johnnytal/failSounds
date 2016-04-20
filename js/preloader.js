var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        // create progress % text
        this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px ' + font, fill: 'green', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
    
        // create progress bar
        var loadingBar = this.add.sprite(this.game.world.centerX - 55,  this.game.world.centerY + 30, "loading");
        loadingBar.anchor.setTo(0, 0.5);
        this.load.setPreloadSprite(loadingBar);

        this.game.load.image("cricket", "assets/images/cricket.png");
        this.game.load.image("drums", "assets/images/drums.png");
        this.game.load.image("horn", "assets/images/horn.png");
        this.game.load.image("jaws_harp","assets/images/jaws_harp.png");
        this.game.load.image("mask","assets/images/mask.png");
        this.game.load.image("trombone","assets/images/trombone.png");
        this.game.load.image("button","assets/images/button.png");

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

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
    // console.log(progress, cacheKey, success);
};
