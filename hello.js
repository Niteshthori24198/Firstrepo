
(function f() {
    console.log("Hello JavaScript !");
})();

(() => {
    console.log("Hello ES6 JS !");
})();



class Heap {
    size;
    construtor() {
        this.arr = [];
        this.size = 0;
        console.log("Heap ka begining !")
    }

    insert() { }
    remove() { }
    heapify() { }
    buildHeap() { }
    display() { }
}


const h = new Heap();

h.insert();
h.remove();
h.heapify();
h.buildHeap();
h.display();