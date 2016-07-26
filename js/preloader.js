var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        this.game.load.image("cricket", "assets/images/cricket.png");
        this.game.load.image("drums", "assets/images/drums.png");
        this.game.load.image("horn", "assets/images/horn.png");
        this.game.load.image("random","assets/images/random.png");
        this.game.load.image("mask","assets/images/horror.png");
        this.game.load.image("trombone","assets/images/trombone.png");

        this.game.load.image("button","assets/images/button.png");
        
        this.game.load.image("border","assets/images/border.png");
        this.game.load.image("gear","assets/images/gear.png");
        this.game.load.image("panel","assets/images/panel.png");
        this.game.load.image("ok","assets/images/ok.png");
        this.game.load.image("bulb","assets/images/bulb.png");
        this.game.load.image("stingNotes","assets/images/stingNotes.png");
        
        this.game.load.audio('sfxCricket', 'assets/audio/crickets.ogg');
        this.game.load.audio('sfxDrums', 'assets/audio/drums.ogg');
        this.game.load.audio('sfxHorn', 'assets/audio/horn.ogg');
        this.game.load.audio('sfxHorror', 'assets/audio/horror.ogg'); 
        this.game.load.audio('sfxJaws_harp', 'assets/audio/jaws_harp.ogg');
        this.game.load.audio('sfxTrombone', 'assets/audio/trombone.ogg');

        this.game.load.audio('sfxBoing', 'assets/audio/boing.ogg');
        this.game.load.audio('sfxCheer', 'assets/audio/cheer.ogg');
        this.game.load.audio('sfxCow', 'assets/audio/cow.ogg');
        this.game.load.audio('sfxCrazy', 'assets/audio/crazy.ogg');
        this.game.load.audio('sfxEvil', 'assets/audio/evil.ogg');
        this.game.load.audio('sfxGlass', 'assets/audio/glass.ogg');
        this.game.load.audio('sfxLaugh', 'assets/audio/laugh.ogg');
        this.game.load.audio('sfxSnore', 'assets/audio/snore.ogg');
        this.game.load.audio('sfxUnimpressed', 'assets/audio/unimpressed.ogg');
        this.game.load.audio('sfxFailed', 'assets/audio/you-have-failed.ogg');
        this.game.load.audio('sfxBoo', 'assets/audio/boo.ogg');
    },
    
    create: function(){
        this.game.state.start("Game");  
    }
};