class Node {
  constructor(key, value = null) {
    this.key = key;
    this.value = value;
  }
}

class HashMap {
  constructor() {
    this.size = 16;
    this.arr = new Array(this.size).fill(null);
    this.loadFactor = 0.75;
  }

  grow() {
    let old = this.arr;
    this.size *= 2;
    this.arr = new Array(this.size).fill(null);

    old.forEach((e, i) => {
      if (e !== null) {
        this.set(e.key, e.value);
      }
    });
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.arr.length;
    }
    return hashCode;
  }

  set(key, value) {
    if (this.length() / this.arr.length >= this.loadFactor) {
      this.grow();
    }
    const code = this.hash(key);
    let node = new Node(key, value);
    this.arr[code] = node;
  }

  get(key) {
    const code = this.hash(key);
    let value = null;
    if (this.arr[code] !== null) {
      value = this.arr[code].value;
    }
    return value;
  }

  has(key) {
    const code = this.hash(key);
    let temp = this.arr[code];
    return temp !== null;
  }

  remove(key) {
    let res = this.has(key);
    if (res) {
      let code = this.hash(key);
      this.arr[code] = null;
      return true;
    }

    return false;
  }

  length() {
    let cnt = 0;
    this.arr.forEach((e) => {
      if (e !== null) cnt++;
    });
    return cnt === 0 ? 0 : cnt + 1;
  }

  clear() {
    this.arr.fill(null);
  }

  keys() {
    return this.arr.filter((e) => e !== null).map((el) => el.key);
  }

  values() {
    return this.arr.filter((e) => e !== null).map((el) => el.value);
  }

  entries() {
    let tmpArr = this.arr.filter((e) => e !== null);
    return JSON.stringify(tmpArr);
  }
}
const hasMapVar = new HashMap();

hasMapVar.set("Carlos", "first");
hasMapVar.set("piewpiew", "second");
hasMapVar.set("ODIN", "third");
console.log("get");
console.log(hasMapVar.get("Carlos"));
console.log(hasMapVar.get("da6767567575675"));
console.log("has");
console.log(hasMapVar.has("da6767567575675"));
console.log(hasMapVar.has("5fgsfsdfsdfsdfsdfsdfdsf"));
console.log(hasMapVar.has("Carlos"));
console.log("remove");
console.log(hasMapVar.remove("Carlos"));
console.log(hasMapVar.remove("0789785"));
//now has carlos should return false
console.log(hasMapVar.has("Carlos"));
console.log("length");
console.log(hasMapVar.length());
console.log("clear");
//console.log(hasMapVar.clear());
hasMapVar.clear();
//now length should return 0
console.log(hasMapVar.length());
hasMapVar.set("Carlos", "first");
hasMapVar.set("piewpiew", "second");
hasMapVar.set("ODIN", "third");
console.log("keys");
console.log(hasMapVar.keys());
console.log("values");
console.log(hasMapVar.values());
console.log("entries");
console.log(hasMapVar.entries());
