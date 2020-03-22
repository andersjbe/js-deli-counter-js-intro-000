function takeANumber(line, newPerson) {
  line.push(newPerson);
  return `Welcome ${newPerson}, your are #${line.length} in line!`;
}