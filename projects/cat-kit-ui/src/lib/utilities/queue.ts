export class Queue <T> {
    private elements: any[] = [];
    constructor() {

    }

    list(){
        return this.elements;
    }

    enqueue(element:any) {
        this.elements.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.elements.shift(); 
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.elements[0];
    }

    isEmpty() {
        return this.elements.length === 0;
    }


    size() {
        return this.elements.length;
    }


    clear() {
        this.elements = [];
    }
}