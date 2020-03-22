function takeANumber(line, newPerson) {
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}
