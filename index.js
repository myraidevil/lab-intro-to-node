class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let low = 0;
    let high = this.length;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (this.items[mid] < item) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    this.items.splice(low, 0, item);
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }


  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
}

sum() {
  if (this.length === 0) {
    return 0; 
  }
  return this.items.reduce((acc, curr) => acc + curr, 0); 
}

avg() {
  if (this.length === 0) {
    throw new Error('EmptySortedList'); 
  }
  return this.sum() / this.length; 
}
}

export default SortedList;