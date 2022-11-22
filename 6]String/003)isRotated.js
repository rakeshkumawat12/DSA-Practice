function isRotated(a, b) {
  let temp1 = "", temp2 = "";
  let len1 = a.length, len2 = b.length;
  if (len1 < 2 || len2 < 2)
    if (a == b)
      console.log(true)
    else
      console.log(false)
  temp1 += (a.substr(2, len1 - 2));
  temp1 += (a.substr(0, 2));

  temp2 += (a.substr(len1 - 2, 2));
  temp2 += (a.substr(0, len1 - 2));
  if (temp1 == b || temp2 == b)
    console.log(true)
  else
    console.log(false)
}

let a = "amazon"
let b = "azonam"
isRotated(a, b)