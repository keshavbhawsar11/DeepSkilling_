public class Search {
    // Linear Search
    public static Product linearSearch(Product[] products, int target) {
        for (Product product : products) {
            if (product.productId == target) {
                return product;
            }
        }
        return null;
    }


    // Binary Search
    public static Product binarySearch(Product[] products, int target) {
        int low = 0;
        int high = products.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (products[mid].productId == target)
                return products[mid];
            else if (products[mid].productId < target)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }
}
