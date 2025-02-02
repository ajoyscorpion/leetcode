// To create a node
class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

// To create a Linked List
class linkedList {
    constructor () {
        this.head = null
        this.size=0
    }

    getSize () {
        return this.size
    }

    isEmpty () {
        return this.size === 0
    }

    prepend (value) {
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head // connecting to the first place
            this.head = node // head pointer
        }
        this.size++
    }

    append (value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value,index){
        if (index<0 || index>this.size ){
            return
        }
        if (index===0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head

            for (let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    print(){
        let curr = this.head
        let listValue = ''
        while (curr) {
            listValue += `${curr.value} ->`
            curr = curr.next
        }
        console.log(listValue || "List is empty");
    }
}

const list = new linkedList()
console.log('List is Empty:',list.isEmpty());
console.log('List Size : ',list.getSize());
list.print()

list.prepend(10)
list.print()

list.prepend(20)
list.prepend(30)
list.print()

list.append(30)
list.print()
list.append(20)
list.print()
list.append(10)
list.print()

list.insert(50,1)
list.print()
list.insert(60,3)
list.print()
list.insert(70,5)
list.print()