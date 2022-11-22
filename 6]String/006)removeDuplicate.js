function removeDup(S) {
    let st = new Set()
    for (let i = 0; i < S.length; i++) {
        st.add(S[i])
    }
    console.log(st)
}


let S = "zvvo";
removeDup(S);
