function takeANumber(line, newPerson) {
  line.push(newPerson);
  return `Welcome ${newPerson}, your are number ${line.length} in line!`;
}
