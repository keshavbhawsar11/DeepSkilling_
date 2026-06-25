public class Main {
    public static void main(String[] args){
        //Paypal
        PaymentProcessor paypalProcessor = new PayPalAdapter(new PayPalGateway());
        paypalProcessor.processPayment(1000.0);

        //Paytm
        PaymentProcessor paytmProcessor = new PaytmAdapter(new PaytmGateway());
        paytmProcessor.processPayment(500.0);

        System.out.println("Payment processing completed.");
    }
}
