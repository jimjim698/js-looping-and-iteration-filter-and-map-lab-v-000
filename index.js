// Code your solution here:
function driversWithRevenueOver(driver,revenue){
  return driver.filter(function (d){return d.revenue > revenue})
}


function driverNamesWithRevenueOver(driver, revenue){
  return  driversWithRevenueOver(driver,revenue).map(function(d){ d => d.name})
  
}

 array.push( function (d){d.name})