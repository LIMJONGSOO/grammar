function dfs(k) {
  if (k === numbers.length) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];

    if (sum === target) answer++;

    return;
  } else {
    numbers[k] *= 1;
    dfs(k + 1);

    numbers[k] *= -1;
    dfs(k + 1);
  }
}
