class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    background(bg2)
    //target1 = createSprite(1000,500);
    //target1.addImage(target_1);
    //target1.scale = 0.9;

  

    s1 = createSprite(150,680);
    s1.addImage(s_1);
    s1.scale = 0.7;
    s1.debug=true
    s1.setCollider("circle",-20,-80,20)
    

    s2 = createSprite(450,670);
    s2.addImage(s_2);
    s2.scale = 1.2;
    s2.debug=true
    s2.setCollider("circle",-30,-50,10)
    

    s3 = createSprite(350,600);
    s3.addImage(s_3);
    s3.scale = 1.2;
    s3.debug=true
    s3.setCollider("circle",-10,-50,10)
    

    s4 = createSprite(520,600);
    s4.addImage(s_4);
    s4.scale = 1.2;
    s4.debug=true
    s4.setCollider("circle",0,-40,10)

    s5 = createSprite(1150,670);
    s5.addImage(s_5);
    s5.scale = 1.3;
    s5.debug=true
    s5.setCollider("circle",-10,-50,10)

    s6 = createSprite(1170,500);
    s6.addImage(s_6);
    s6.scale = 1.2;
    s6.debug=true
    s6.setCollider("circle",5,-40,10) 

    s7 = createSprite(1090,520);
    s7.addImage(s_7);
    s7.scale = 1.2;
    s7.debug=true
    s7.setCollider("circle",10,-50,10)

    s8 = createSprite(1300,450);
    s8.addImage(s_8);
    s8.scale = 0.8;
    s8.debug=true
    s8.setCollider("circle",20,-50,20)

    player1=[s1,s2,s3,s4]
    player2=[s5,s6,s7,s8]
    mydepth=s8.depth

    gun1=createSprite(760,710,50,50)
    gun1.addImage(gun_2)
              gun1.scale=0.5
              gun1.x=mouseX
              gun1.y=mouseY

              gun2=createSprite(760,710,50,50)
              gun2.addImage(gun_1)
              gun2.scale=0.5
              gun2.x=mouseX
              gun2.y=mouseY
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(bg);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;

         
          if (index === player.index){
            stroke(10);
            fill("red");
            camera.position.x = displayWidth/2;
            camera.position.y = displayHeight/2;
          }
         
          if (player.index===1){
            p1 = createSprite(1135,600);
            p1.addImage(p_1);
            p1.scale = 0.7;
            p1.depth=mydepth-10
            
            p2 = createSprite(1180,455);
            p2.addImage(p_2);
            p2.scale =  0.7;
            p2.depth=p1.depth-1

            p3 = createSprite(1090,455);
            p3.addImage(p_3);
            p3.scale =  0.7;
            p3.depth=p2.depth-1

            p4 = createSprite(1320,410);
            p4.addImage(p_4);
            p4.scale =  0.7;
            p4.depth=p3.depth-1

            n1 = createSprite(130,615);
            n1.addImage(n_1);
            n1.scale =  0.7;
            n1.depth=mydepth-10

            n2 = createSprite(410,606);
            n2.addImage(n_2);
            n2.scale =  0.7;
            n2.depth=n1.depth-1

            n3 = createSprite(335,540);
            n3.addImage(n_3);
            n3.scale =  0.7;
            n3.depth=n2.depth-1

            n4 = createSprite(520,550);
            n4.addImage(n_4);
            n4.scale =  0.7;        
            n4.depth=n3.depth-1

            gun2.visible=false  
            gun1.x=mouseX
            gun1.y=mouseY 

              /*if (keyDown("left")){
                gun1.x-=3
              }
              if (keyDown("right")&&gun1.x<width-100){
                gun1.x+=3
              }
              if (keyDown("up")&&gun1.y>200){
                gun1.y-=3
              }
              if (keyDown("down")&&gun1.y<height-60){
                gun1.y+=3
              }*/
              
              if (keyWentDown("space")){
                var bullet=createSprite(gun1.x-50,gun1.y-10)
                bullet.addImage(b_1)
                bullet.scale=0.3
                bullet.lifetime=200
                bullets1.add(bullet)
              }
              if (keyWentUp("space")){
                this.shoot1(bullets1[bullets1.length-1])
              }
              var dots=[p1,p2,p3,p4]
          for(var i=0;i<player1.length;i++){
            for(var j=0;j<bullets1.length;j++){
              if(bullets1.get(j).isTouching(player1[i])){
                killedbyplayer1+=1
                bullets1.get(j).destroy()
                player1[i].destroy()
                dots[i].destroy()
                player1.splice(i,1)
                dots.splice(i,1)
                player.updatePlayersKilled(killedbyplayer1)
              }
            }
          }
          if (player.playersKilled===4){
            gameState=2
          }
           }          
          
          if (player.index===2){
            p1 = createSprite(130,615);
            p1.addImage(p_1);
            p1.scale = 0.7;
            p1.depth=mydepth-10

            p2 = createSprite(410,606);
            p2.addImage(p_2);
            p2.scale =  0.7;
            p2.depth=p1.depth-1

            p3 = createSprite(335,540);
            p3.addImage(p_3);
            p3.scale =  0.7;
            p3.depth=p2.depth-1

            p4 = createSprite(520,550);
            p4.addImage(p_4);
            p4.scale =  0.7;
            p4.depth=p3.depth-1

            n1 = createSprite(1135,600);
            n1.addImage(n_1);
            n1.scale =  0.7;
            n1.depth=mydepth-10

            n2 = createSprite(1180,455);
            n2.addImage(n_2);
            n2.scale =  0.7;
            n2.depth=n1.depth-1

            n3 = createSprite(1090,455);
            n3.addImage(n_3);
            n3.scale =  0.7;
            n3.depth=n2.depth-1

            n4 = createSprite(1320,410);
            n4.addImage(n_4);
            n4.scale =  0.7;        
            n4.depth=n3.depth-1

           
 
            gun1.visible=false
            gun2.x=mouseX
            gun2.y=mouseY 
            /*if (keyDown("left")&&gun2.x>100){
              gun2.x-=3
            }
            if (keyDown("right")&&gun2.x<width-100){
              gun2.x+=3
            }
            if (keyDown("up")&&gun2.y>200){
              gun2.y-=3
            }
            if (keyDown("down")&&gun2.y<height-60){
              gun2.y+=3
            }
            
            */if (keyWentDown("space")){
              var bullet=createSprite(gun2.x-0.90,gun2.y-10)
              bullet.addImage(b_1)
              bullet.scale=0.3
              bullet.lifetime=200
              bullets2.add(bullet)
            }
            if (keyWentUp("space")){
              this.shoot2(bullets2[bullets2.length-1])
            }
            var dots=[p1,p2,p3,p4]
            for(var i=0;i<player2.length;i++){
              for(var j=0;j<bullets2.length;j++){
                if(bullets2.get(j).isTouching(player2[i])){
                  killedbyplayer2+=1
                  bullets2.get(j).destroy()
                  player2[i].destroy()
                  dots[i].destroy()
                  player2.splice(i,1)
                  dots.splice(i,1)
                  player.updatePlayersKilled(killedbyplayer2)
                  
                }
              }
            }
            if (player.playersKilled===4){
              gameState=2
            }
          }

          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
        
  
      }
  
      drawSprites();
    }
  shoot1(bullet){
    bullet.setSpeedAndDirection(-5,30)
  }

  shoot2(bullet){
    bullet.setSpeedAndDirection(10,-20)
  }
  end(){
    console.log("game over")

  }
    }
  
  