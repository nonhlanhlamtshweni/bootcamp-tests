function mostProfitableDepartment(salesData){
    //console.log(salesData.length);
    const salesdataMap = {};
      
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      salesdataMap[salesdata.department] = 0;
    }
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      var currentDepartmentTotal = salesdataMap[salesdata.department];
      currentDepartmentTotal += salesdata.sales;
      salesdataMap[salesdata.department] = currentDepartmentTotal;
    }
    
    var maxSales = 0;
    var currentDepartment = '';
      
    for(const salesdepartment in salesdataMap){
    //console.log(salesdepartment);
       //console.log(salesdataMap[salesdepartment]);
    const currentSalesDepartmentsales = salesdataMap[salesdepartment];
    
    if(currentSalesDepartmentsales > maxSales){
         maxSales = currentSalesDepartmentsales;
         currentDepartment = salesdepartment;
         }
    
    }
      //console.log(currentDepartment)
      return currentDepartment;
    }
    
    function mostProfitableDay(salesData){
    const salesdataMap = {};
      
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      salesdataMap[salesdata.day] = 0;
    }
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      var currentDayTotal = salesdataMap[salesdata.day];
      currentDayTotal += salesdata.sales;
      salesdataMap[salesdata.day] = currentDayTotal;
    }
    
    var maxSales = 0;
    var currentDay = '';
      
    for(const salesday in salesdataMap){
    const currentSalesDaysales = salesdataMap[salesday];
    
    if(currentSalesDaysales > maxSales){
         maxSales = currentSalesDaysales;
         currentDay = salesday;
         }
    
    }
      //console.log(currentDepartment)
      return currentDay;
    
    
    
    }
    