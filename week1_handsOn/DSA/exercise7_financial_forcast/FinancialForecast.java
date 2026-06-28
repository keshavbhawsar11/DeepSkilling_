public class FinancialForecast {

    // Recursive method to calculate future value
    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        //base case to stop recursion when years is 0
        if (years == 0) {
            return currentValue;
        }

        //recursively calling the function to calculate future value
        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10;   // 10%
        int years = 5;

        double futureValue = predictFutureValue(currentValue, growthRate, years);

        System.out.printf("Current Value : %.2f%n", currentValue);
        System.out.println("Growth Rate  : 10%");
        System.out.println("Years        : " + years);
        System.out.printf("Future Value : %.2f%n", futureValue);
    }
}