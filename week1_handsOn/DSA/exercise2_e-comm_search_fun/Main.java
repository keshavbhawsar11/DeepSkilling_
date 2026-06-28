public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Smartphone", "Electronics"),
                new Product(3, "Desk Chair", "Furniture"),
                new Product(4, "Coffee Table", "Furniture"),
                new Product(5, "Headphones", "Electronics")
        };

        // Linear Search
        int targetId = 3;
        Product foundProductLinear = Search.linearSearch(products, targetId);
        if (foundProductLinear != null) {
            System.out.println("Linear Search Found: " + foundProductLinear);
        } else {
            System.out.println("Linear Search: Product not found.");
        }

        // Binary Search (requires sorted array)
        // Sorting products by productId for binary search
        java.util.Arrays.sort(products, (p1, p2) -> Integer.compare(p1.productId, p2.productId));
        Product foundProductBinary = Search.binarySearch(products, targetId);
        if (foundProductBinary != null) {
            System.out.println("Binary Search Found: " + foundProductBinary);
        } else {
            System.out.println("Binary Search: Product not found.");
        }
    }   
}
