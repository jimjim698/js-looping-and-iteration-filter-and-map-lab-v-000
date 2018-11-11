// Code your solution here:
function driversWithRevenueOver(driver,revenue){
  return driver.filter(function (d){return d.revenue > revenue})
}


function driverNamesWithRevenueOver(driver, revenue){
  return  driversWithRevenueOver(driver,revenue).map(function(d){ return d=d.name})
}


function exactMatch(drivers,attribute){
  let key = Object.keys(attribute)[0]
  return drivers.filter(function(d){d[key] === attribute[key]})
  }