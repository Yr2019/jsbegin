var start = 1;
var end = 300;
function getFriendlyNumbers(start, end) {
    let allNumber = [],
        i, j, simple = [];
    for (i = start; i <= end.length; i++) {
        console.log(i);
        allNumber.push(i);
    }
    for (i = 0; i < simple.length; i++) {
        console.log(simple[i] + " -- Делители этого числа: 1 и " + simple[i]);
    }
    console.log(allNumber);
    return [];
}

getFriendlyNumbers(start, end);


// module.exports = {
//     firstName: 'Yurii',
//     secondName: 'Oliinyk',
//     task: getFriendlyNumbers
// }


