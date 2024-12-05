
(function f() {
    console.log("Hello JavaScript !");
})();

(() => {
    console.log("Hello ES6 JS !");
})();



class Heap {
    construtor() {
        console.log("Heap ka begining !")
    }

    insert() { }
    remove() { }
    heapify() { }
    buildHeap() { }
}


const h = new Heap();

h.insert();
h.remove();
h.heapify();
h.buildHeap();