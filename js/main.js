var gameMain = function(game){
    var sounds;
    var interstitial;
    var actions = 0;
        
    multiSounds = false;
    randomTimer = false;
    
    playModes = ['toggle', 'trigger', 'gate', 'pause', 'none'];
    mode = playModes[0];
    
    timeModes = [0, 3, 7, 12, '?'];
    time = timeModes[0];

    var bmd;
    var innerCircle;
    var outerCircle;
};

gameMain.prototype = {
    create: function(){  
        actions = 0;
    
        border = this.add.image(0, 0, 'border');
        
        game.add.text(650, 125, '', {
            font: '1px ' + font, fill: 'white', fontWeight: 'normal', align: 'left'
        }).visible = false;

        buttonsGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);
        buttonsGroup.enableBody = true;
        buttonsGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
        button1 = buttonsGroup.create(20, 15, 'button');
        button2 = buttonsGroup.create(303, 15, 'button');
        button3 = buttonsGroup.create(583, 15, 'button');
        button4 = buttonsGroup.create(20, 235, 'button');
        button5 = buttonsGroup.create(303, 235, 'button');
        button6 = buttonsGroup.create(583, 235, 'button');
        
        button7 = this.add.sprite(205, 175, 'button');
        button7.scale.set(0.6,0.6);
        button7.tint = 0xffff00;
        button7.alpha = 0.7;
        
        button8 = this.add.sprite(485, 175, 'button');
        button8.scale.set(0.6,0.6);
        button8.tint = 0xffff00;
        button8.alpha = 0.7;
        
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
        button8.inputEnabled = true;
 
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
            sfxSnore = game.add.audio('sfxSnore'),
            sfxUnimpressed = game.add.audio('sfxUnimpressed'),
            sfxFailed = game.add.audio('sfxFailed'),
            sfxBoo = game.add.audio('sfxBoo')
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
        
        button8.events.onInputDown.add(function(){
            didYouKnow();
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
        
        knowBtn = this.add.sprite(547, 240,'bulb');
        knowBtn.alpha = 0.7;
        knowBtn.scale.set(0.9,0.9);
        knowBtn.anchor.set(0.5,0.5);

        game.add.tween(knowBtn.scale).to( { x: 1.001, y: 1.001 }, 5000, "Sine.easeInOut", true, 0, -1, true);

        try{
            Cocoon.Ad.AdMob.configure({
                android: { 
                    interstitial:"ca-app-pub-9795366520625065/1704674634"
                }
            });

            interstitial = Cocoon.Ad.AdMob.createInterstitial();
            interstitial.load();
        } catch(e){}
    },

    update: function(){
        var grd = bmd.context.createRadialGradient(innerCircle.x, innerCircle.y, innerCircle.radius, outerCircle.x, outerCircle.y, outerCircle.radius);
        grd.addColorStop(0, '#8ED6bb');
        grd.addColorStop(1, '#006d33');
    
        bmd.cls();
        bmd.circle(outerCircle.x, outerCircle.y, outerCircle.radius, grd);
        
        game.physics.arcade.collide(buttonsGroup);
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
        
        if (randomTimer){
            changeTimer('?', null);
        }

        button.tint = color1;
        sound.onStop.add(function(){
           
           button.tint = 0xffffff;

        }, this);
        
        game.stage.backgroundColor = color2;
        addAction();
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
                offsetY: -100, offsetX: -305, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[0], this);         
                }
            },
            {
                type: "text", content: "Trigger", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: -100, offsetX: -137, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[1], this);
                }
            },
            {
                type: "text", content: "Gate", fontSize: optionsFontSize, 
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: -100, offsetX: 10, fontFamily: "Luckiest Guy",
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
                offsetY: -100, offsetX: 305,  fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[4], this);
                }
            },
            {
                type: "text", content: "Set timer:", fontSize: 34, color: "0xFEFF49", offsetY: -30,
                stroke: "0x000000", strokeThickness: 5,  fontFamily: "Luckiest Guy",
            },
            {
                type: "text", content: "???s", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 20, offsetX: 200,
                stroke: "0x000000", strokeThickness: 3, fontFamily: "Luckiest Guy",                     
                callback: function () {
                    changeTimer(timeModes[4], this);
                }
            },
            {
                type: "text", content: "12s", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 20, offsetX: 100,
                stroke: "0x000000", strokeThickness: 3, fontFamily: "Luckiest Guy",                     
                callback: function () {
                    changeTimer(timeModes[3], this);
                }
            },
            {
                type: "text", content: "7s", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 20, offsetX: 0,
                stroke: "0x000000", strokeThickness: 3, fontFamily: "Luckiest Guy",                    
                callback: function () {
                    changeTimer(timeModes[2], this);
                }
            },
            {
                type: "text", content: "3s", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 20, offsetX: -100,  fontFamily: "Luckiest Guy",
                stroke: "0x000000", strokeThickness: 3, 
                callback: function () {
                    changeTimer(timeModes[1], this);
                }
            },
            {
                type: "text", content: "None", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 20, offsetX: -200,  fontFamily: "Luckiest Guy",
                stroke: "0x000000", strokeThickness: 3, 
                callback: function () {
                    changeTimer(timeModes[0], this);
                }
            },
            {
                type: "text", content: "Allow Multichannel", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 90, offsetX: 0,  fontFamily: "Luckiest Guy",
                stroke: "0x000000", strokeThickness: 3, 
                callback: function () {
                    allowMultiple(this);
                }
            },
            
            {
                type: "text", content: "Click here to rate!", fontSize: 16, color: '0x0000ff', fontFamily: "Luckiest Guy",
                offsetY: 150, offsetX: -290,

                callback: function () {
                    window.open('market://details?id=com.com.johnnytal_failSounds');
                }
            },
            
            
            {
                type: "image", content: "ok", offsetY: 100, offsetX: 300, contentScale: 0.5,
                callback: function () {
                    modal.hideModal('options');
                    addAction();
                    
                    button7.inputEnabled = true;
                }
            },
        ]
   });
   
   modal.showModal("options"); 
   
   if (multiSounds) modal.getModalItem('options',15).tint = 0x00ff00;
   
   if (mode == 'toggle') modal.getModalItem('options',4).tint = 0x00ff00;
   else if (mode == 'trigger') modal.getModalItem('options',5).tint = 0x00ff00;
   else if (mode == 'gate') modal.getModalItem('options',6).tint = 0x00ff00;
   else if (mode == 'pause') modal.getModalItem('options',7).tint = 0x00ff00;
   else if (mode == 'none') modal.getModalItem('options',8).tint = 0x00ff00;
    
   if (randomTimer) modal.getModalItem('options',10).tint = 0x00ff00;
   else if (time == 12) modal.getModalItem('options',11).tint = 0x00ff00;
   else if (time == 7) modal.getModalItem('options',12).tint = 0x00ff00;
   else if (time == 3) modal.getModalItem('options',13).tint = 0x00ff00;
   else if (time == 0) modal.getModalItem('options',14).tint = 0x00ff00;
    
   for (n=0; n<18; n++){
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
    if (_time == '?'){
        time = game.rnd.integerInRange(2, 60);
        randomTimer = true;
    }
    else{
        time = _time;
        randomTimer = false;
    }
    for (n = 14; n > 9; n--){
        modal.getModalItem('options', n).tint = 0xffffff;
    } 
    if (btn != null) btn.tint = 0x00ff00;
}

function allowMultiple(btn){
    if (multiSounds) multiSounds = false;
    else { multiSounds = true; }
    
    if (btn.tint == 0xffffff) btn.tint = 0x00ff00;
    else { btn.tint = 0xffffff; }
}

function allowPhysics(){  
    buttonsGroup.forEach(function(btn){
        btn.body.gravity.y = game.rnd.integerInRange(-200, 200);
        btn.body.gravity.x = game.rnd.integerInRange(-200, 200);
        btn.body.bounce.y = 0.9;
        btn.body.bounce.x = 0.9;
        btn.body.collideWorldBounds = true;  
    });
}

function didYouKnow(){
    button8.inputEnabled = false;

    didYouKnows = ["Never push the red button", 'A short sequence played\nfor punctuation is called\na "Sting"',
    'Notation of the drum que:', 'Indie developers love\nto get good ratings!', 
    'Gate mode - the sound\n will play as long as\n you press the button', 
    'Trigger mode - The sound\nwill restart when you\npress the button',
    'Pause mode - The sound\nwill pause / resume\n when you press',
    'In multichannel mode\nyou can play many sounds\nat the same time!',
    "\"Never look at the\nTrombones, you'll only\nencourage them\"\n(R.Strauss)",
    "\"I don't know why\nbut the trombone makes\nme very uncomfortable\"\n(S.Freud)",
    "Some species of crickets\nare mute", 
    "Male crickets chirp\nto attract female crickets,\nand also after\nsuccessful mating",
    "This app will never include\nsounds of bodily functions.\nNot my style",
    "Fail - an embarrassing\nor humorous mistake,\nhumiliating situation, etc.,\nthat is subject to\nridicule and given an\nexaggerated importance",
    "This in an app by iLyich Games.\nIlich is my dog.",
    "Pyotr Tchaikovsky's \nmiddle name was Ilich",
    "The Cow goes Moooooo!",
    "The horror sound's origins\nrooted in R.Wagner\nmusic, were first heard\non Radio Dramas",
    "The longest drum roll\nwas played by\nChristopher Anthony - \n8H 1M 17S",
    "7 Seconds is the\naverage time it takes\nto tell a really\nstupid joke",
    "The cubical dice was\noriginated in China\nat about 600 b.c",
    "Set the timer to '???s'\nto play the sound\nat a random time\nbetween 2 & 60 seconds",
    "Atychiphobia - \nThe fear of failure",
    "Everybody fails",
    "I won't ask you\nto click the ads\nif you like this app\ncause that would be\nunethical",
    "\"Success is most often\nachieved by those\nwho don't know that\nfailure is inevitable.\"\n(Coco Chanel)",
    "\"We are all failures - \nat least the best\nof us are\"\n(J.M. Barrie)",
    "cricket chirps are more frequent\nin higher temperature"
    ];

    rndDidYouKnow = game.rnd.integerInRange(0, didYouKnows.length - 1);
    
    if (rndDidYouKnow == 0){
        redBtn = game.add.button(345, 200, 'button');
        redBtn.scale.set(0.5, 0.5);
        redBtn.inputEnabled = true;
        redBtn.tint = '0xff0000';
        redBtn.events.onInputDown.add(function(){
           allowPhysics();
        }, this);
        
        tweenDidYouKnow(redBtn);
        
        didYouKnows.push("You shouldn't have\npushed the red button");
    }
    
    else if (rndDidYouKnow == 2){
        notes = game.add.sprite(305, 207, 'stingNotes');
        tweenDidYouKnow(notes);    
    }
    
    thisDidYouLabel = game.add.text(185, 90, didYouKnows[rndDidYouKnow], {
        font: '34px ' + font, fill: 'lightblue', fontWeight: 'normal', align: 'center', 
        stroke: "black", strokeThickness: 7
    });
     
    tweenDidYouKnow(thisDidYouLabel);  
}

function tweenDidYouKnow(thing){
    tweenY = game.add.tween(thing).from( { y: -500}, 350, Phaser.Easing.Sinusoidal.InOut, true);
    tweenY.onComplete.add(function(){ 
        setTimeout(function(){
            tweenY2 = game.add.tween(thing).to( { y: 750}, 1000, Phaser.Easing.Sinusoidal.InOut, true);
            tweenY2.onComplete.add(function(){ 
                thing.destroy();
                button8.inputEnabled = true;
                
                addAction();
            });
        }, didYouKnows[rndDidYouKnow].length * 60); 
    });    
}

function addAction(){
   if (actions < 15) actions++;
   else if (actions == 15){
       actions = 0;
       
       try{
           interstitial.show();
       } catch(e){}
   }
}