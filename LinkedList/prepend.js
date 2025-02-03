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

    // insert at the first position in linked list
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

    // insert at the last position in linked list
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

    // insert a node in linked list
    insert(value,index){
        if (index<0 || index>this.size ){
            return null
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

    // Remove the node in linked list
    remove(index){
        let removeNode
        if(index < 0 || index > this.size){
            return null
        } else if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    // remove value from the linked list
    removeValue(value){
        if (this.isEmpty()) {
            return null
        } else if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if (prev.next) {
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            } else {
                return null
            }
        }
    }

    // search valu in linked list
    search(value){
        if (this.isEmpty()) {
            return false
        } else {
            let i = 0
            let current = this.head
            while (current !== null) {
                if(current.value === value){
                    return i
                }
                current = current.next
                i++
            }
            return false
        }
    }

    // Reverse linked list
    reverse(){
        let prev = null
        let current = this.head
        while(current !== null) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    // Print the linked list
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

list.remove(1)
list.print()
list.remove(3)
list.print()
list.remove(0)
list.print()

list.removeValue(60)
list.print()

console.log(list.search(70))

list.reverse()
list.print()