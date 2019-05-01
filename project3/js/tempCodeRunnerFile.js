[].forEach.call(optionalExpensesText, function (element) {
      element.addEventListener("input", function () {
        for (let i = 0; i < optionalExpensesText.length; i++) {  
            let a = optionalExpensesText[i],
                  b = optionalExpensesText[++i],
                  c = optionalExpensesText[++i];
                console.log(a);
                //console.log(b);
                //console.log(c);
          //   let a = optionalExpensesText[i].value,
          //       b = optionalExpensesText[++i].value,
          //       c = optionalExpensesText[++i].value,
          //     opt = a + ' ' + b + ' ' + c + ' ' ;
          //   // opt = a + b + c;

          //    // console.log(opt);
          //     appData.optionalExpenses[--i] = a;
          //     appData.optionalExpenses[i] = b;
          //     appData.optionalExpenses[++i] = c;
          //     console.log(appData.optionalExpenses[i]);
          // optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
      });
});