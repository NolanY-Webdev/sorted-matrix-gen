function generator(row, col) {
  var gen = [];
  var genSize = row * col;
  var nums = [];

  function CompareForSort(first, second) {
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1;
  }

  for (var n = 0; n < genSize; n++) {
    nums[n] = Math.ceil(Math.random() * 100);
  }
  nums.sort(CompareForSort);

  for (var i = 0; i < row; i++) {
    var rowArr = [];
    gen[i] = rowArr;
    for (var c = 0; c < col; c++) {
      rowArr[c] = nums[(i * col) + c];
    }
  }
  console.log(gen);
}
