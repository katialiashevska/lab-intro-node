class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length !== 0) {
      return Math.max(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length !== 0) {
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    const initialValue = 0;
    if (this.items.length === 0) {
      return initialValue;
    } else {
      return this.items.reduce((a, b) => a + b, initialValue);
    }
  }

  avg() {
    if (this.items.length !== 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
