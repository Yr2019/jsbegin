var max = 100; 

function simpleNumber(max) {
  let filter = [],
    i, j, simple = [];
  for (i = 2; i <= max; i++) {
    if (!filter[i]) {
      simple.push(i);
      for (j = i << 1; j <= max; j += i) {
        filter[j] = true;
      }
    }
  }
  for (i = 0; i < simple.length; i++) {
    console.log( simple[i] + " -- Делители этого числа: 1 и " + simple[i]);
  }
}

simpleNumber(max);

