/*
###pluralizer.js
Write a program that takes an input like...

```js
var thing = 'cat';
var count = '5';
```
and output the pluralized form of the word, depending on what `count` is. For example,
"5 cats" or "1 dog".

**Requirements**
* Your program should pluralize the word based on an integer (`count`)
*/

function pluralize(noun, count) {

  if (count === 1) {
    console.log(noun);
  }
  else {
    console.log(noun = noun + "s");
  }
}

pluralize("cat", 5);
pluralize("dog", 1);
pluralize("camel", -2);
