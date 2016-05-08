var gameMain = function(game){
    var sounds;
};

gameMain.prototype = {
    create: function(){  
        border = this.add.image(0,0,'border');
        
        button1 = this.add.sprite(20,15,'button');
        button2 = this.add.sprite(303,15,'button');
        button3 = this.add.sprite(583,15,'button');
        button4 = this.add.sprite(20,235,'button');
        button5 = this.add.sprite(303,235,'button');
        button6 = this.add.sprite(583,235,'button');
        
        cricket = this.add.image(68, 104, 'cricket');
        drums = this.add.image(345, 70, 'drums');
        horn = this.add.image(625, 90, 'horn');
        jaws_harp = this.add.image(65, 300, 'jaws_harp');
        mask = this.add.image(370, 255, 'mask');
        trombone = this.add.image(627, 282, 'trombone');
        
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
                if (!sfxCricket.isPlaying){
                    stopSounds();
                    sfxCricket.play();
                    
                    button1.tint = 0xaaff44;
                    sfxCricket.onStop.add(function(){
                       button1.tint = 0xffffff;
                    }, this);
                    
                    game.stage.backgroundColor = '#000055';
                } 
                else{
                    sfxCricket.stop();
                    game.stage.backgroundColor = '#fffa6f';
                }
         }, this);
            
            
        button2.events.onInputDown.add(function(){
            if (!sfxDrums.isPlaying){
                stopSounds();
                sfxDrums.play();
                
                button2.tint = 0xff1155;
                sfxDrums.onStop.add(function(){
                   button2.tint = 0xffffff;
                }, this);
                
                game.stage.backgroundColor = '#00ff00';
            }
            else{
                sfxDrums.stop();
                game.stage.backgroundColor = '#fffa6f';
            }
        }, this);
        
        button3.events.onInputDown.add(function(){
            if (!sfxHorn.isPlaying){
                stopSounds();
                sfxHorn.play();
               
                button3.tint = 0xaa55ff;
                sfxHorn.onStop.add(function(){
                   button3.tint = 0xffffff;
                }, this);
                
                game.stage.backgroundColor = '#f3fff5';
            }
            else{
                sfxHorn.stop();
                game.stage.backgroundColor = '#fffa6f';
            }
        }, this);
        
        button4.events.onInputDown.add(function(){
            if (!sfxJaws_harp.isPlaying){
                stopSounds();
                sfxJaws_harp.play();
                
                button4.tint =  0xaa55ff;
                sfxJaws_harp.onStop.add(function(){
                   button4.tint = 0xffffff;
                }, this);
                
                game.stage.backgroundColor = '#00ffff';
            }
            else{
                sfxJaws_harp.stop();
                game.stage.backgroundColor = '#fffa6f';
            }
        }, this);
        
        button5.events.onInputDown.add(function(){
            if (!sfxHorror.isPlaying){
                stopSounds();
                sfxHorror.play();
                
                button5.tint = 0xaaff44;
                sfxHorror.onStop.add(function(){
                   button5.tint = 0xffffff;
                }, this);
                
                game.stage.backgroundColor = '#000000';
            }
            else{
                sfxHorror.stop();
                game.stage.backgroundColor = '#fffa6f';
            }
        }, this);
        
        button6.events.onInputDown.add(function(){
            if (!sfxTrombone.isPlaying){
                stopSounds();
                sfxTrombone.play();
                
                button6.tint =  0xff1155;
                sfxTrombone.onStop.add(function(){
                   button6.tint = 0xffffff;
                }, this);
                
                game.stage.backgroundColor = '#ffd00f';
            }
            else{
                sfxTrombone.stop();
                game.stage.backgroundColor = '#fffa6f';
            }
        }, this);
        
        Cocoon.Ad.AdMob.configure({
             android: {
                  banner:"ca-app-pub-9795366520625065/3578360636"
             }
        });
        
        var banner = Cocoon.Ad.AdMob.createBanner();
        alert(banner)
        banner.load();
        alert(banner)
        banner.show();
        alert(banner)
        
         banner.on("load", function(){
           alert("Banner loaded " + banner.width, banner.height);
        });
         
        banner.on("fail", function(){
           alert("Banner failed to load");
        });
         
        banner.on("show", function(){
           alert("Banner shown a modal content");
        });
         
        banner.on("dismiss", function(){
           alert("Banner dismissed the modal content");
        });
         
        banner.on("click", function(){
           alert("Banner clicked");
        });
    }
};

function stopSounds(){
    for (n = 0; n < sounds.length; n++){
        sounds[n].stop();
    }   
}
