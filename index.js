var katzDeli = []

function takeANumber(katzDeli, name){
  for (let i = 1; i < name.length +1; i++){
    katzDeli.push(name)
    console.log ('Welcome, ' + name + '. You are number ' + i + ' in line.')
  }
}

function nowServing(katzDeli){
    for (let i = 0; i < katzDeli.length; i++){
      return 'Currently serving ' + katzDeli[i] + '.'
      katzDeli.shift()
    }
    return 'There is nobody waiting to be served!'
}

function currentLine(katzDeli){
  for (let i = 0; i < katzDeli.length; i++){
    return 'The line is currently: ' + (i+1) + '. ' + katzDeli[i]
  }
  return 'The line is currently empty.'
}
