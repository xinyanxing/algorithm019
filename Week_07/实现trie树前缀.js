class Trie {
    constructor() {
        this.root = Object.create(null)
    }
    //insert
    insert(word) {
        let node = this.root
        for (const c of word) {
            if (!node[c]) node[c] = Object.create(null)
            node = node[c]
        }
        node.isWord = true
    }

    traverse(word) {
        let node = this.root
        for (const c of word) {
            node = node[c]
            if (!node) { return null }
        }
        return node
    }
    //search
    search(word) {
        const node = this.traverse(word)
        return !!node && !!node.isWord
    }
    //startsWith
    startsWith(prefix) {
        return !!this.traverse(prefix)
    }










}