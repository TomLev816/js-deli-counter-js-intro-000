var katzDeli = [];

function takeANumber(katzDeli,name){
  katzDeli.push(name)
  return 'Welcome, ' + name + '. You are number ' + (katzDeli.length) + ' in line.'
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    let serving = katzDeliLine.shift()
    return 'Currently Serving ' + serving
  } else {
    return 'There is nobody waiting to be served'
  }
}
