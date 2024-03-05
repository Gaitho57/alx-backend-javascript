export function taskFirst() {
  const task1 = 'I prefer const when I can.';
  return task1;
}
export function getLast() {
  return ' is okay';
}
export function tasktaskNext() {
	var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

console.log(`${taskFirst()} ${tasktaskNext()}`);

