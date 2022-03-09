function* min() {
  let i = 1;
  while (true) {
    yield i;
    i = i * 2;
  }
}

const gene = min();

console.log(gene.next(), gene.next(), gene.next(), gene.next());
