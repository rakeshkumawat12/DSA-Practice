function firstRepeating(str) {
    let st = new Set();
    for (let i = 0; i <= str.length - 1; i++) {
        let c = str[i];
        if (st.has(c))
            console.log(c);
        else
            st.add(c);
    }
    console.log(c);
}


let str = "geeksforgeeks";
firstRepeating(str)


