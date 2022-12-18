function pageFaults(N, C, pages) {
    let memory = new Set()
    let cache = new Map()
    let page_fault = 0
    for (let i = 0; i < N; i++) {
        if (memory.size < C) {
            if (!memory.has(pages[i])) {
                memory.add(pages[i])
                page_fault++
            }
            cache[pages[i]] = i
        } else {
            //LRU algo
            if (!memory.has(pages[i])) {
                page_fault++
                let lru = Number.MAX_VALUE
                let value
                for (let it of memory) {
                    if (cache[it] < lru) {
                        lru = cache[it]
                        value = it
                    }
                }

                memory.delete(value)
                memory.add(pages[i])
                cache[pages[i]] = i
            }
            cache[pages[i]] = i
        }

    }
    return page_fault
}

let pages = [5, 0, 1, 3, 2, 4, 1, 0, 5];
let N = pages.length;
let C = 4;
console.log(pageFaults(N, C, pages))