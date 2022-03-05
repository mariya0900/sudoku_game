

function sameBlock(x1, y1, x2, y2) {
   let firstRow = Math.floor(x1 / 3) * 3;
   let firstCol = Math.floor(y1 / 3) * 3;
   return (x2 >= firstRow && x2 <= (firstRow + 2) && y2 >= firstCol && y2 <= (firstCol + 2));
}
 
function sameRow(x1, y1, x2, y2) {
   return x1 == x2;
}
 
function sameColumn(x1, y1, x2, y2) {
   return y1 == y2;
}

let activeDigit='';
function setActiveDigit(digit){
   activeDigit=digit.toString();
   
}

function attemptMove(x, y){
   if (activeDigit==-1){
      document.getElementById(`cell${x}${y}`).innerHTML='';
      document.getElementById(`cell${x}${y}`).style.backgroundColor='';
      return;
   }
   document.getElementById(`cell${x}${y}`).innerHTML=activeDigit;
   if (findDigitInSameBlock(x, y) || (findDigitInSameCol(x, y) || findDigitInSameRow(x, y))){
      document.getElementById(`cell${x}${y}`).style.backgroundColor='#f76c5e';

   }
}
function findDigitInSameRow(x, y){
   
   for (let i=1;i<=9;i++){
      let currentCell=document.getElementById(`cell${x}${i}`).innerHTML;
      if (i!=y && currentCell==activeDigit){
         return true;
      }
      
   }
   return false;
}
function findDigitInSameCol(x, y){
   
   for (let i=1;i<=9;i++){
      let currentCell=document.getElementById(`cell${i}${y}`).innerHTML;
      if (i!=x && currentCell==activeDigit){
         return true;
      }
   }
   return false;
   
}

function findDigitInSameBlock(x, y){
   firstRow=Math.floor((x-1)/ 3)*3;
   firstCol=Math.floor((y-1)/3)*3;
   
   for (let i=firstRow;i<firstRow+3;i++){
      for (let j=firstCol;j<firstCol+3;j++){
         let currentCell=document.getElementById(`cell${i+1}${j+1}`).innerHTML;
         if (currentCell==activeDigit && (x!=i+1 && y!=j+1) ){
            return true;
         }
      }
   }
   return false;
}
