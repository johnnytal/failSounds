var gameMain = function(game){
    var sounds;
    var banner;
    
    playModes = ['toggle', 'trigger', 'gate', 'pause', 'none'];
    mode = playModes[0];
    
    timeModes = [0, 3, 7, 12];
    time = timeModes[0];
    
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
        
        button7 = this.add.sprite(220,178,'button');
        button7.scale.set(0.5,0.5);
        button7.tint = 0x00bbff;
        button7.alpha = 0.8;
        
        gearBtn = this.add.sprite(223,180,'gear');
        gearBtn.alpha = 0.8;
        
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
        button7.inputEnabled = true;
        
        button1.input.useHandCursor = true;
        button2.input.useHandCursor = true;
        button3.input.useHandCursor = true;
        button4.input.useHandCursor = true;
        button5.input.useHandCursor = true;
        button6.input.useHandCursor = true;
        button7.input.useHandCursor = true;
 
        sounds = [ 
            sfxCricket = game.add.audio('sfxCricket'),
            sfxDrums = game.add.audio('sfxDrums'),
            sfxHorn = game.add.audio('sfxHorn'),
            sfxHorror = game.add.audio('sfxHorror'),
            sfxJaws_harp = game.add.audio('sfxJaws_harp'),
            sfxTrombone = game.add.audio('sfxTrombone')
        ];
        
        modal = new gameModal(game);
        
        buttons = [button1, button2, button3, button4, button5, button6];
        
        button1.events.onInputDown.add(function(){
            playSound(sfxCricket, button1, 0xaaff44, '#000055');
        }, this);
            
        button2.events.onInputDown.add(function(){
            playSound(sfxDrums, button2, 0xff1155, '#00ff00');
        }, this);
        
        button3.events.onInputDown.add(function(){
            playSound(sfxHorn, button3, 0xaa55ff, '#f3fff5');
        }, this);
        
        button4.events.onInputDown.add(function(){
            playSound(sfxJaws_harp, button4, 0xaa55ff, '#00ffff');
        }, this);
        
        button5.events.onInputDown.add(function(){
            playSound(sfxHorror, button5, 0xaaff44, '#000000');
        }, this);
        
        button6.events.onInputDown.add(function(){
            playSound(sfxTrombone, button6, 0xff1155, '#ffd00f');
        }, this);
        
        button7.events.onInputDown.add(function(){
            openOptions();
        }, this);
       
        for (b = 0; b< buttons.length; b++){
            buttons[b].events.onInputUp.add(function(){
                if (mode == 'gate') stopSounds();
            }, this);  
        } 
        
        Cocoon.Ad.AdMob.configure({
             android: { 
                  banner:"ca-app-pub-9795366520625065/3578360636"
             }
        });
        
        banner = Cocoon.Ad.AdMob.createBanner();
        banner.load();  
         
    }
};

function stopSounds(){
    for (n = 0; n < sounds.length; n++){
        sounds[n].stop();
    }   
}

function playSound(sound, button, color1, color2){
    if (!sound.isPlaying){
        stopSounds();
        
        setTimeout(function(){
            if (!sound.paused){
                sound.play();    
            }
            else{
                sound.resume();
            }
        }, (time * 1000));

        button.tint = color1;
        sound.onStop.add(function(){
           button.tint = 0xffffff;
        }, this);
        
        game.stage.backgroundColor = color2;
    } 
    else{
        if (mode == 'toggle'){
            sound.stop();
            game.stage.backgroundColor = '#fffa6f';
        }
        else if (mode == 'trigger'){
            sound.play();
        }
        else if (mode == 'pause'){
            sound.pause();
        }
    }    
}

function openOptions(){
    modal.createModal({
        type:"options",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [
            {
                type: "image", content: "panel", offsetY: 0, offsetX: 0, contentScale: 1.5
            },
            {
                type: "text", content: "Rewind mode:", fontSize: 34, color: "0xFEFF49",
                offsetY: -170, stroke: "0x000000", strokeThickness: 5
            },
            {
                type: "text", content: "Toggle", fontSize: 20, color: "0xFEFF49",
                stroke: "0x000000", strokeThickness: 4,
                offsetY: -120, offsetX: -180,
                callback: function () {
                    changePlayMode(playModes[0], this);         
                }
            },
            {
                type: "text",
                content: "Trigger",
                fontSize: 20,
                color: "0xFEFF49",
                stroke: "0x000000",
                strokeThickness: 4,
                offsetY: -120,
                offsetX: -85,
                callback: function () {
                    changePlayMode(playModes[1], this);
                }
            },
            {
                type: "text",
                content: "Gate",
                fontSize: 20,
                color: "0xFEFF49",
                stroke: "0x000000",
                strokeThickness: 4,
                offsetY: -120,
                offsetX: 0,
                callback: function () {
                    changePlayMode(playModes[2], this);
                }
            },
            {
                type: "text",
                content: "Pause",
                fontSize: 20,
                color: "0xFEFF49",
                stroke: "0x000000",
                strokeThickness: 4,
                offsetY: -120,
                offsetX: 90,
                callback: function () {
                    changePlayMode(playModes[3], this);
                }
            },
            {
                type: "text",
                content: "None",
                fontSize: 20,
                color: "0xFEFF49",
                stroke: "0x000000",
                strokeThickness: 4,
                offsetY: -120,
                offsetX: 180,
                callback: function () {
                    changePlayMode(playModes[4], this);
                }
            },
            {
                type: "text", content: "Set timer:", fontSize: 34, color: "0xFEFF49", offsetY: -50,
                stroke: "0x000000", strokeThickness: 5
            },
            {
                type: "text", content: "12s", fontSize: 24, color: "0xFEFF49",
                offsetY: 0, offsetX: 100,
                stroke: "0x000000", strokeThickness: 3,                     
                callback: function () {
                    changeTimer(timeModes[3], this);
                }
            },
            {
                type: "text", content: "7s", fontSize: 24, color: "0xFEFF49",
                offsetY: 0, offsetX: 33,
                stroke: "0x000000", strokeThickness: 3,                     
                callback: function () {
                    changeTimer(timeModes[2], this);
                }
            },
            {
                type: "text", content: "3s", fontSize: 24, color: "0xFEFF49",
                offsetY: 0, offsetX: -33,
                stroke: "0x000000", strokeThickness: 3, 
                callback: function () {
                    changeTimer(timeModes[1], this);
                }
            },
             {
                type: "text", content: "0s", fontSize: 24, color: "0xFEFF49",
                offsetY: 0, offsetX: -100,
                stroke: "0x000000", strokeThickness: 3, 
                callback: function () {
                    changeTimer(timeModes[0], this);
                }
            },
            
            {
                type: "image", content: "ok", offsetY: 120, contentScale: 0.35,
                callback: function () {
                    modal.hideModal('options');
                    banner.hide(); 
                }
            },
        ]
   });
   
   modal.showModal("options"); 
   banner.show(); 
   
   if (mode == 'toggle') modal.getModalItem('options',4).tint = 0x00ff00;
   else if (mode == 'trigger') modal.getModalItem('options',5).tint = 0x00ff00;
   else if (mode == 'gate') modal.getModalItem('options',6).tint = 0x00ff00;
   else if (mode == 'pause') modal.getModalItem('options',7).tint = 0x00ff00;
   else if (mode == 'none') modal.getModalItem('options',8).tint = 0x00ff00;

   if (time == 12) modal.getModalItem('options',10).tint = 0x00ff00;
   else if (time == 7) modal.getModalItem('options',11).tint = 0x00ff00;
   else if (time == 3) modal.getModalItem('options',12).tint = 0x00ff00;
   else if (time == 0) modal.getModalItem('options',13).tint = 0x00ff00;
    
   for (n=0; n<15; n++){
       game.add.tween(modal.getModalItem('options',n)).from( { y: - 800 }, 500, Phaser.Easing.Linear.In, true);
   }    
}

function changePlayMode(_mode, btn){
    mode = _mode;
    for (n=8; n>3; n--){
        modal.getModalItem('options', n).tint = 0xffffff;
    }
    btn.tint = 0x00ff00;
}

function changeTimer(_time, btn){
    time = _time;
    for (n=13; n>9; n--){
        modal.getModalItem('options', n).tint = 0xffffff;
    } 
    btn.tint = 0x00ff00;
}

function rateUs(){
    navigator.notification.confirm(
    'If you enjoy using FailSounds, whould you mind taking a moment to rate it? It won\'t take more than a minute. Thanks for your support!',
    
    function(button){
        if (button == '1') {    // Rate Now
            window.open('market://details?id=<package_name>');
            this.core.rate_app = false;
        } 
        
        else if (button == '2') { // Later
            this.core.rate_app_counter = 0;
        } 
        
        else if (button == '3') { // No
            this.core.rate_app = false;
        }
    }, 'Rate domainsicle', ['Rate domainsicle', 'Remind me later', 'No Thanks']);   
}
