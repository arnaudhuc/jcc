const canvas = <HTMLCanvasElement>document.getElementById("main");
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

function drawCanvas(): void {
  // Exemple de tracé de chemin

  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(200, 200);
  ctx.moveTo(200, 20);
  ctx.lineTo(20, 200);
  ctx.closePath();

  ctx.stroke();

  // Voile du bateau
  ctx.beginPath();      // Début du chemin
  ctx.moveTo(150, 80);   // Le tracé part du point 150,80
  ctx.lineTo(300, 230);  // Un segment est ajouté vers 300,230
  ctx.lineTo(150, 230);  // Un segment est ajouté vers 150,230
  ctx.closePath();      // Fermeture du chemin
  ctx.fillStyle = "lightblue"; // Définition de la couleur de remplissage
  ctx.fill();           // Remplissage du dernier chemin tracé

  // Coque du bâteau
  ctx.beginPath();      // Début d'un autre chemin
  ctx.moveTo(50, 250);
  ctx.lineTo(100, 300);
  ctx.lineTo(250, 300);
  ctx.lineTo(300, 250);
  ctx.fillStyle = "peru";
  ctx.strokeStyle = "sienna"; // Définition de la couleur de contour
  ctx.lineWidth = 5;         // Définition de la largeur de ligne
  ctx.fill();            // Application du remplissage
  ctx.stroke();          // Application du contour

  // Mât
  ctx.beginPath();
  ctx.moveTo(140, 50);
  ctx.lineTo(140, 250);
  ctx.lineWidth = 10;
  ctx.stroke();
}

export default drawCanvas;
