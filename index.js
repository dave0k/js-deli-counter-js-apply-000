function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
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