function countAllPaarl(regNumbers){
    var list = [];
    var regNumbersForPaarl = regNumbers.split(',');
      
    for (var i = 0; i < regNumbersForPaarl.length; i++){
      
      var Plist = regNumbersForPaarl[i].trim();
      
      if (Plist.startsWith('CJ')){
        list.push(Plist);
      }
    }
     return list.length;
    }