//X
function romanToDecimal(str) {
    let mp = new Map();
    mp.set('I', 1)
    mp.set('V', 5)
    mp.set('X', 10)
    mp.set('L', 50)
    mp.set('C', 100)
    mp.set('D', 500)
    mp.set('M', 1000)

    let len = str.length; let num; let sum = 0;

    for (let i = 0; i < len;) {
        if (i == (len - 1) || mp[str[i]] >= mp[str[i + 1]]) {
            num = mp[str[i]];
            i++;
        }
        else {
            num = mp[str[i + 1]] - mp[str[i]]
            i = i + 2;
        }
       sum = sum + num;
    }
    console.log(sum)
}

var str = "MCMIV";
romanToDecimal(str)