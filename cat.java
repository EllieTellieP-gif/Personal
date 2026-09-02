public class cat {
    Node head;
    private int size;

    cat(){
        this.size=0;

    }
    class Node {
        String data;
        Node next;

        Node(String data) {
            this.data = data;
            this.next = null;
            size++;
        }
    }


    public void addFirst(String data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
    }

    public void addLast(String data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node currNode = head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        currNode.next = newNode;
    }

    public void deleteFirst(){
        if(head==null){
            System.out.println("The list is empty");
            return;
        }
        size--;
        head=head.next;
    }

    public void deleteLast(){
        if (head == null) {//cornercase//
            System.out.println("List is empty");
            return;
        }
        size--;
        if(head.next==null){
            head=null;
            return;
        }
        Node secondLast=head;
        Node lastNode=head.next;
        while(lastNode.next != null){
            secondLast = lastNode;
            lastNode = lastNode.next;
        }
        secondLast.next = null;
    }

    public void printList() {
        if (head == null) {//cornercase//
            System.out.println("List is empty");
            return;
        }
        Node currNode = head;
        while (currNode != null) {
            System.out.print(currNode.data + " -> ");
            currNode = currNode.next;
        }
        System.out.println("NULL");
    }

    public int getSize(){
         return size;
}

    public void reverseIterate(){
        if(head== null || head.next== null){
            return;
        }
        Node prevNode=head;
        Node currNode=head.next;
        while(currNode!=null){
            Node nextNode=currNode.next;
            currNode.next=prevNode;

            prevNode=currNode;
            currNode=nextNode;

        }
        head.next=null;
        head=prevNode;

    }

    public reverseRecursive(Node head){
        if(head==null||head.next=null){
            return head;
        }
        Node newHead=reverseRecursive(head.next);
        head.next.next=head;
        head.next=null;
        return newHead;
    }
    public static void main(String args[]) {
        cat list = new cat();
        list.addFirst("a");
        list.addFirst("is");
        list.printList();
        list.addFirst("Apple");
        list.printList();
        list.deleteFirst();
        list.printList();waiy
        System.out.print(list.getSize());
        list.reverseIterate();
        list.printList();
        list.head=list.reverseRecursive(list.head);
        list.printList();
    }
}