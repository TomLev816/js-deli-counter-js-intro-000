var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  for (let i = 1; i < name.length +1; i++){
    katzDeliLine.push(name)
    return 'Welcome, ' + name + '. You are number ' i + ' in line.'
  }
}

function nowServing(katzDeliLine){
    for (let i = 0; i < katzDeliLine.length; i++){
      return 'Currently serving' + katzDeliLine[i]
      katzDeliLine.shift()
    }
}

function currentLine(katzDeliLine){
  for (let i = 0; i < katzDeliLine.length; i++){
    return 'The line is currently ' + i+1 + '. ' + katzDeliLine[i]
  }
  return 'The line is currently empty.'
}
