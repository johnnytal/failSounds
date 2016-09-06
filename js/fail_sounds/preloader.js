var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        this.game.load.image("cricket", "assets/fail_sounds/images/cricket.png");
        this.game.load.image("drums", "assets/fail_sounds/images/drums.png");
        this.game.load.image("horn", "assets/fail_sounds/images/horn.png");
        this.game.load.image("random","assets/fail_sounds/images/random.png");
        this.game.load.image("mask","assets/fail_sounds/images/horror.png");
        this.game.load.image("trombone","assets/fail_sounds/images/trombone.png");

        this.game.load.image("button","assets/fail_sounds/images/button.png");
        
        this.game.load.image("border","assets/fail_sounds/images/border.png");
        this.game.load.image("gear","assets/fail_sounds/images/gear.png");
        this.game.load.image("panel","assets/fail_sounds/images/panel.png");
        this.game.load.image("ok","assets/fail_sounds/images/ok.png");
        this.game.load.image("bulb","assets/fail_sounds/images/bulb.png");
        this.game.load.image("stingNotes","assets/fail_sounds/images/stingNotes.png");
        
        this.game.load.audio('sfxCricket', 'assets/fail_sounds/audio/crickets.ogg');
        this.game.load.audio('sfxDrums', 'assets/fail_sounds/audio/drums.ogg');
        this.game.load.audio('sfxHorn', 'assets/fail_sounds/audio/horn.ogg');
        this.game.load.audio('sfxHorror', 'assets/fail_sounds/audio/horror.ogg'); 
        this.game.load.audio('sfxJaws_harp', 'assets/fail_sounds/audio/jaws_harp.ogg');
        this.game.load.audio('sfxTrombone', 'assets/fail_sounds/audio/trombone.ogg');

        this.game.load.audio('sfxBoing', 'assets/fail_sounds/audio/boing.ogg');
        this.game.load.audio('sfxCheer', 'assets/fail_sounds/audio/cheer.ogg');
        this.game.load.audio('sfxCow', 'assets/fail_sounds/audio/cow.ogg');
        this.game.load.audio('sfxCrazy', 'assets/fail_sounds/audio/crazy.ogg');
        this.game.load.audio('sfxEvil', 'assets/fail_sounds/audio/evil.ogg');
        this.game.load.audio('sfxGlass', 'assets/fail_sounds/audio/glass.ogg');
        this.game.load.audio('sfxLaugh', 'assets/fail_sounds/audio/laugh.ogg');
        this.game.load.audio('sfxSnore', 'assets/fail_sounds/audio/snore.ogg');
        this.game.load.audio('sfxUnimpressed', 'assets/fail_sounds/audio/unimpressed.ogg');
        this.game.load.audio('sfxFailed', 'assets/fail_sounds/audio/you-have-failed.ogg');
        this.game.load.audio('sfxBoo', 'assets/fail_sounds/audio/boo.ogg');
    },
    
    create: function(){
        this.game.state.start("Game");  
    }
};