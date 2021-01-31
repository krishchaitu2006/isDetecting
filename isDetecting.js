function isDetecting(kc,karthik) {



    if(kc.x - karthik.x < kc.width/2 + karthik.width/2
      && karthik.x - kc.x < kc.width/2 + karthik.width/2
      && karthik.y - kc.y < kc.height/2 + karthik.height/2
      && kc.y - karthik.y < kc.height/2 + karthik.width/2) {
  
  
      return true;
  
  
  
  
   } else {
  
  
       return false;
  
   }
  
  
  
  
  }