/* Priority Queue */
module.exports = class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    printCollection() {
        (console.log(this.collection));
    };
    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) { //checking priorities
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    };
    dequeue() {
        const value = this.collection.shift();
        return {
            item: value[0],
            priority: value[1]
        };
    };
    front() {
        return this.collection[0];
    };
    size() {
        return this.collection.length;
    };
    isEmpty() {
        return (this.collection.length === 0);
    };
}