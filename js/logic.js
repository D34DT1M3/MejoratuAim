var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            var juego = {
				random_x: Math.floor(Math.random()* 900 ),
                random_y: Math.floor(Math.random()* 600 ),
				c_x: 0,
				c_y: 0,
				puntaje: 0,
				xp: 0,
				yp: 0,
				nivel: 900,
				errores: 0,
               
clearCanvas: function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);},
circulo: function () {
	 var img = new Image();
    img.src = "https://mejora-tu-aim.000webhostapp.com/images/teemo.png";                  
   	
    ctx.beginPath();
	this.c_x =  parseInt(this.random_x);
	this.c_y = parseInt(this.random_y);
	ctx.drawImage(img, this.c_x, this.c_y, 50,50);
	ctx.fill();
	ctx.closePath();
},
				
		
				
				cambio: function(){					
	this.random_x = Math.random()* 900;
	this.random_y = Math.random()* 600;
				},
				
				click: function(){
					
					
					canvas.addEventListener("click", function(evt){
						function recibirpocision(canvas,evt){
							return{	
								x: evt.clientX,
								y: evt.clientY
							}
						}
						var obtener = recibirpocision(canvas, evt);
						var pun = 0;
						juego.xp = obtener.x - 540;
						juego.yp = obtener.y - 0;
						if( juego.xp > juego.c_x && juego.xp < juego.c_x + 50 && juego.yp > juego.c_y && juego.yp < juego.c_y + 50){ 
							juego.puntaje += 1;
						}
						else{
						juego.errores += 1;	
							if(juego.errores == 15){
					  alert("Gracias por participar :)");location.reload();
					   }
						}
							
						
							
					});
					
					
				},
				     
                enviar: function(){
        		var enviar = document.getElementById('score').innerHTML = juego.puntaje;
        		var enviar2 = document.getElementById('error').innerHTML = juego.errores; },
				
				niveles: function(){
				
					  if(juego.puntaje == 40){
					  		 juego.nivel = 800;
					  }
					  else if(juego.puntaje == 60){
					  	juego.nivel = 700;
					  }
					  else if(juego.puntaje >= 100){
					  	juego.nivel = 500;
					  }
				}
				
};
					
				juego.click();	
		function draw() {
				juego.enviar();
                juego.clearCanvas();
				juego.circulo();
				juego.cambio();
				juego.niveles();
				
			}
            setInterval(draw, juego.nivel);
					

					