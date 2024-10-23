function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //evitare loop 
}

function draw() {
  background("#3c3b4c");

  fill("lightblue");
  noStroke(); 
  let altezza=25;
  let vGutter=5;
  let larghezza=10;
  let hGutter= 5;
  // colonne = larghezza schermo / (larghezza rett + gutter orizzontale)
  let colums = windowWidth/(10+5);
  // colonne = altezza schermo / (altezza rett + gutter verticale)
  let rows = windowHeight/(altezza+vGutter);
  
  for (i =0; i < colums; i++){
    for (r=0; r < rows; r++) {
      //i è 0, 1, 2 ... così ho prima giro 0, poi 15, poi 30, poi 45, poi 60...
      //posizione x
      let xPos= i*(larghezza+hGutter) + random(-2.5, 2.5);
      //posizione y
      let yPos= r*(altezza+vGutter) + random(-2.5, 2.5);
      rect(xPos, yPos, larghezza, altezza);
    }
  }
  //se allargo pagina e ricarico crea i rettangolini mancanti
  
}

