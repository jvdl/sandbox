function repeatedString(s: string, n: number): number {
  const STRING_TO_FIND = "a";
  const STRING_TO_FIND_RE = new RegExp(STRING_TO_FIND, "gi");
  if (s.length === 1 && s === STRING_TO_FIND) {
    return n;
  }

  // how many times does our string fit in a given length
  //  if (n > s.length) {
  // // // const baseMultiplier = Math.floor(n / s.length);
  const remainingString = s.substring(0, n % s.length);
  const baseStringMatch = s.match(STRING_TO_FIND_RE);
  const baseCount = baseStringMatch
    ? baseStringMatch.length * baseMultiplier
    : 0;
  const remainingStringMatch = remainingString.match(STRING_TO_FIND_RE);
  const remainingCount = remainingStringMatch ? remainingStringMatch.length : 0;

  return baseCount + remainingCount;
}

function logWithAssert(str: string, num: number, expectedOutput: number) {
  const output = repeatedString(str, num);
  console.log(output, output === expectedOutput);
}

logWithAssert("aba", 10, 7);
logWithAssert("a", 10, 10);
logWithAssert("a", 10000000000000, 10000000000000);
logWithAssert(
  "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
  736778906400,
  51574523448
);
