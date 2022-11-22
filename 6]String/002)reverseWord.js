function reverseWord(S1) {
  let len = S1.length;
  let r;
  let S2 = "";
  for (let i = len - 1; i >= 0; i--) {
    if (S1[i] == '.') {
      r = len - i;
      len = i - 1;
      S2 += (S1.substr(i + 1, r));
      S2 += (".");

    }
  }
  S2 += (S1.substr(0, len + 1))
  console.log(S2)
}

let S1 = "i.like.this.program.very.much"
reverseWord(S1)