const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

console.log(colors.reverse()); // ['purple', empty × 2, 'blue', 'yellow', 'red']


colors.forEach((item, index) => {
    console.log(
        "hi"
    )
    console.log(colors.reverse());
})