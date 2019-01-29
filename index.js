function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
takeANumber(line) -> 1 
takeANumber(line) -> 2
nowServing(line) -> 1
nowServing(line) -> 2 
takeANumber(line) -> 3 

var i = 0

function takeANumber(line) {
  i++
  line.push(i)
  return i
  
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  } else {
  var firstInLine = katzDeliLine.shift()
  return `Currently serving ${firstInLine}.`
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  } else {
    var newLine = []
    var i = 0
    do {
      newLine.push(`${i + 1}. ${line[i]}`)
      i++
    } while (i < line.length)
    return `The line is currently: ${newLine.join(", ")}`
  }
}