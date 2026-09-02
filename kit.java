import java.util.*;

class kit{
    public static void main (String args[]){
        LinkedList<String> list=new LinkedList<String>();
        list.addFirst("a");
        list.addFirst("is");
        System.out.println(list);
        list.addLast("this");
        list.add("fish");//auto adds on last
        System.out.println(list);

        for(int i=0; i<list.size();i++){
            System.out.print(list.get(i)+"->");
        }
        System.out.println("null");

    }
}