function countAllFromTown(regNumbers,startstring){
    var list = [];
    var regNumbersTown = regNumbers.split(',');
      
    for (var i = 0; i < regNumbersTown.length; i++){
      if (regNumbersTown[i].includes(startstring) == true){
        list.push(regNumbersTown[i].trim());
      }
    }
    
      return list.length;
    }