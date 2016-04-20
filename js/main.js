var gameMain = function(game){
    var sounds;
};

gameMain.prototype = {
    create: function(){  
        button1 = this.add.sprite(20,20,'button');
        button2 = this.add.sprite(220,20,'button');
        button3 = this.add.sprite(420,20,'button');
        button4 = this.add.sprite(20,240,'button');
        button5 = this.add.sprite(220,240,'button');
        button6 = this.add.sprite(420,240,'button');
        
        cricket = this.add.image(50, 85, 'cricket');
        drums = this.add.image(235, 50, 'drums');
        horn = this.add.image(450, 90, 'horn');
        jaws_harp = this.add.image(60, 285, 'jaws_harp');
        mask = this.add.image(275, 250, 'mask');
        trombone = this.add.image(465, 270, 'trombone');
        
        button1.inputEnabled = true;
        button2.inputEnabled = true;
        button3.inputEnabled = true;
        button4.inputEnabled = true;
        button5.inputEnabled = true;
        button6.inputEnabled = true;
        
        button1.input.useHandCursor = true;
        button2.input.useHandCursor = true;
        button3.input.useHandCursor = true;
        button4.input.useHandCursor = true;
        button5.input.useHandCursor = true;
        button6.input.useHandCursor = true;
 
        sounds = [ 
            sfxCricket = game.add.audio('sfxCricket'),
            sfxDrums = game.add.audio('sfxDrums'),
            sfxHorn = game.add.audio('sfxHorn'),
            sfxHorror = game.add.audio('sfxHorror'),
            sfxJaws_harp = game.add.audio('sfxJaws_harp'),
            sfxTrombone = game.add.audio('sfxTrombone')
        ];
        
        button1.events.onInputDown.add(function(){
            stopSounds();
            sfxCricket.play();
            
            button1.tint = 0xaaff44;
            sfxCricket.onStop.add(function(){
               button1.tint = 0xffffff;
            }, this);
            
            game.stage.backgroundColor = '#000055';
        }, this);
        
        button2.events.onInputDown.add(function(){
            stopSounds();
            sfxDrums.play();
            
            button2.tint = 0xff1155;
            sfxDrums.onStop.add(function(){
               button2.tint = 0xffffff;
            }, this);
            
            game.stage.backgroundColor = '#00ff00';
        }, this);
        
        button3.events.onInputDown.add(function(){
            stopSounds();
            sfxHorn.play();
           
            button3.tint = 0xaa55ff;
            sfxHorn.onStop.add(function(){
               button3.tint = 0xffffff;
            }, this);
            
            game.stage.backgroundColor = '#ffff00';
        }, this);
        
        button4.events.onInputDown.add(function(){
            stopSounds();
            sfxJaws_harp.play();
            
            button4.tint =  0xaa55ff;
            sfxJaws_harp.onStop.add(function(){
               button4.tint = 0xffffff;
            }, this);
            
            game.stage.backgroundColor = '#00ffff';
        }, this);
        
        button5.events.onInputDown.add(function(){
            stopSounds();
            sfxHorror.play();
            
            button5.tint = 0xaaff44;
            sfxHorror.onStop.add(function(){
               button5.tint = 0xffffff;
            }, this);
            
            game.stage.backgroundColor = '#000000';
        }, this);
        
        button6.events.onInputDown.add(function(){
            stopSounds();
            sfxTrombone.play();
            
            button6.tint =  0xff1155;
            sfxTrombone.onStop.add(function(){
               button6.tint = 0xffffff;
            }, this);
            
            game.stage.backgroundColor = '#faa00f';
        }, this);
    },
    
    update: function(){   

    },  
};

function stopSounds(){
    for (n = 0; n < sounds.length; n++){
        sounds[n].stop();
    }   
}
