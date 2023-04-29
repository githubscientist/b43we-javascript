class List {
    String name;
    int age;

    List(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Name: " + this.name + "\nAge: " + this.age;
    }

    public static void main(String[] args) {
        List list = new List("Krish", 10);
        System.out.println(list);
    }
}