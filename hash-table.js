class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total + WEIRD_PRIME * value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if (this.keyMap[index] == null) {
            this.keyMap[index] = [];
        } 
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let target = this._hash(key);
        if (this.keyMap[target]) {
            for (let i = 0; i < this.keyMap.length; i++) {
                if (this.keyMap[target][i][0] === key) {
                    return this.keyMap[target][i][1];
                }
            }
        }
        return undefined;
    }
    keys() {
        let result = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!result.includes(this.keyMap[i][j][0])) {
                        result.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return result;
    }
    values() {
        let result = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!result.includes(this.keyMap[i][j][1])) {
                        result.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return result;
    }
}

let ht = new HashTable(4);

ht.set("1st", "Maiko");
ht.set("2nd", "Aiko");
ht.set("3rd", "Taiko");
ht.set("4th", "Yoiko");
ht.set("5th", "Seiko");
ht.set("6th", "Minako");
ht.set("7th", "Reiko");
ht.set("8th", "Yoko");
ht.set("7th", "Reiko");
ht.set("7th", "Reiko");
