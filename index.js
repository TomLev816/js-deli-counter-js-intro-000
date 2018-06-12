var katzDeli = [];

function takeANumber(katzDeli,name){
  katzDeli.push(name)
  return 'Welcome, ' + name + '. You are number ' + (katzDeli.length) + ' in line.'
}

function nowServing(katzDeliLine){
  if (katzDeliLine.Length > 0){
    return 'Currently Serving ' + katzDeliLine[0]
    katzDeliLine.shift()
  } else {
    return 'There is nobody waiting to be served'
  }
}
