var gameMain = function(game){
    var sounds;
    var banner;
    
    multiSounds = false;
    
    playModes = ['toggle', 'trigger', 'gate', 'pause', 'none'];
    mode = playModes[0];
    
    timeModes = [0, 3, 7, 12];
    time = timeModes[0];

    var bmd;
    var innerCircle;
    var outerCircle;
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
        
        button7 = this.add.sprite(205,175,'button');
        button7.scale.set(0.6,0.6);
        button7.tint = 0xffff00;
        button7.alpha = 0.7;
        
        cricket = this.add.image(68, 104, 'cricket');
        drums = this.add.image(345, 70, 'drums');
        horn = this.add.image(625, 90, 'horn');
        jaws_harp = this.add.image(75, 290, 'random');
        mask = this.add.image(370, 255, 'mask');
        trombone = this.add.image(627, 282, 'trombone');
        
        button1.inputEnabled = true;
        button2.inputEnabled = true;
        button3.inputEnabled = true;
        button4.inputEnabled = true;
        button5.inputEnabled = true;
        button6.inputEnabled = true;
        button7.inputEnabled = true;
 
        sounds = [ 
            sfxCricket = game.add.audio('sfxCricket'),
            sfxDrums = game.add.audio('sfxDrums'),
            sfxHorn = game.add.audio('sfxHorn'),
            sfxHorror = game.add.audio('sfxHorror'),
            sfxJaws_harp = game.add.audio('sfxJaws_harp'),
            sfxTrombone = game.add.audio('sfxTrombone'),
            
            sfxBoing = game.add.audio('sfxBoing'),
            sfxCheer = game.add.audio('sfxCheer'),
            sfxCow = game.add.audio('sfxCow'),
            sfxCrazy = game.add.audio('sfxCrazy'),
            sfxEvil = game.add.audio('sfxEvil'),
            sfxGlass = game.add.audio('sfxGlass'),
            sfxLaugh = game.add.audio('sfxLaugh'),
            sfxSnore = game.add.audio('sfxSnore')
        ];
        
        randomColors = [
            '#000055', '#00ff00', '#f3fff5', '#00ffff', '#000000', '#ffd00f'
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
            playSound(sounds[game.rnd.integerInRange(0, sounds.length-1)],
            button4, 0xaa55ff, randomColors[game.rnd.integerInRange(0, randomColors.length-1)]);
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

        bmd = game.make.bitmapData(800, 600);
        bmd.addToWorld();

        innerCircle = new Phaser.Circle(268, 238, 40);
        outerCircle = new Phaser.Circle(268, 238, 120);
    
        game.add.tween(innerCircle).to( { x: 300, y: 200, radius: 1 }, 3000, "Sine.easeInOut", true, 0, -1, true);

        gearBtn = this.add.sprite(240, 190,'gear');
        gearBtn.alpha = 0.7;
        gearBtn.scale.set(0.9,0.9);
        
       /* Cocoon.Ad.AdMob.configure({
             android: { 
                  banner:"ca-app-pub-9795366520625065/3578360636"
             }
        });
        
        banner = Cocoon.Ad.AdMob.createBanner();
        banner.load(); */ 
         
    },

    update: function(){
        var grd = bmd.context.createRadialGradient(innerCircle.x, innerCircle.y, innerCircle.radius, outerCircle.x, outerCircle.y, outerCircle.radius);
        grd.addColorStop(0, '#8ED6FF');
        grd.addColorStop(1, '#003BA2');
    
        bmd.cls();
        bmd.circle(outerCircle.x, outerCircle.y, outerCircle.radius, grd);
    }
};

function stopSounds(){
    for (n = 0; n < sounds.length; n++){
        sounds[n].stop();
    }   
}

function playSound(sound, button, color1, color2){
    if (!sound.isPlaying){
        if (!multiSounds) stopSounds();
        
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
    button7.inputEnabled = false;
    optionsColor = '0x49FFFE';
    optionsFontSize = 32;
    
    modal.createModal({
        type:"options",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [
            {
                type: "image", content: "panel", offsetY: 0, offsetX: 0, contentScale: 1.05
            },
            {
                type: "text", content: "Rewind mode:", fontSize: 34, color: "0xFEFF49",
                offsetY: -150, stroke: "0x000000", strokeThickness: 5, fontFamily: "Luckiest Guy",
            },
            {
                type: "text", content: "Toggle", fontSize: optionsFontSize, color: optionsColor,
                stroke: "0x000000", strokeThickness: 4,
                offsetY: -100, offsetX: -300, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[0], this);         
                }
            },
            {
                type: "text", content: "Trigger", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: -100, offsetX: -150, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[1], this);
                }
            },
            {
                type: "text", content: "Gate", fontSize: optionsFontSize, 
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: -100, offsetX: 0, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[2], this);
                }
            },
            {
                type: "text", content: "Pause", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: -100, offsetX: 150,  fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[3], this);
                }
            },
            {
                type: "text", content: "None", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: -100, offsetX: 300,  fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[4], this);
                }
            },
            {
                type: "text", content: "Set timer:", fontSize: 34, color: "0xFEFF49", offsetY: -50,
                stroke: "0x000000", strokeThickness: 5,  fontFamily: "Luckiest Guy",
            },
            {
                type: "text", content: "12s", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 0, offsetX: 150,
                stroke: "0x000000", strokeThickness: 3, fontFamily: "Luckiest Guy",                     
                callback: function () {
                    changeTimer(timeModes[3], this);
                }
            },
            {
                type: "text", content: "7s", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 0, offsetX: 50,
                stroke: "0x000000", strokeThickness: 3, fontFamily: "Luckiest Guy",                    
                callback: function () {
                    changeTimer(timeModes[2], this);
                }
            },
            {
                type: "text", content: "3s", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 0, offsetX: -50,  fontFamily: "Luckiest Guy",
                stroke: "0x000000", strokeThickness: 3, 
                callback: function () {
                    changeTimer(timeModes[1], this);
                }
            },
            {
                type: "text", content: "0s", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 0, offsetX: -150,  fontFamily: "Luckiest Guy",
                stroke: "0x000000", strokeThickness: 3, 
                callback: function () {
                    changeTimer(timeModes[0], this);
                }
            },
            {
                type: "text", content: "Allow Multichannel", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 70, offsetX: 0,  fontFamily: "Luckiest Guy",
                stroke: "0x000000", strokeThickness: 3, 
                callback: function () {
                    allowMultiple(this);
                }
            },
            
            {
                type: "text", content: "Rate if you like !", fontSize: 16, color: '0x0000ff', fontFamily: "Luckiest Guy",
                offsetY: 150, offsetX: -290,

                callback: function () {
                    window.open('market://details?id=com.com.johnnytal_failSounds');
                }
            },
            
            
            {
                type: "image", content: "ok", offsetY: 100, offsetX: 300, contentScale: 0.5,
                callback: function () {
                    modal.hideModal('options');
                    button7.inputEnabled = true;
                    //banner.hide(); 
                }
            },
        ]
   });
   
   modal.showModal("options"); 
   //banner.show(); 
   
   if (multiSounds) modal.getModalItem('options',14).tint = 0x00ff00;
   
   if (mode == 'toggle') modal.getModalItem('options',4).tint = 0x00ff00;
   else if (mode == 'trigger') modal.getModalItem('options',5).tint = 0x00ff00;
   else if (mode == 'gate') modal.getModalItem('options',6).tint = 0x00ff00;
   else if (mode == 'pause') modal.getModalItem('options',7).tint = 0x00ff00;
   else if (mode == 'none') modal.getModalItem('options',8).tint = 0x00ff00;

   if (time == 12) modal.getModalItem('options',10).tint = 0x00ff00;
   else if (time == 7) modal.getModalItem('options',11).tint = 0x00ff00;
   else if (time == 3) modal.getModalItem('options',12).tint = 0x00ff00;
   else if (time == 0) modal.getModalItem('options',13).tint = 0x00ff00;
    
   for (n=0; n<17; n++){
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

function allowMultiple(btn){
    if (multiSounds) multiSounds = false;
    else { multiSounds = true; }
    
    if (btn.tint == 0xffffff) btn.tint = 0x00ff00;
    else { btn.tint = 0xffffff; }
}