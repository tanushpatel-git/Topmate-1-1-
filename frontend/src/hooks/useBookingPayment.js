import toast from "react-hot-toast";

import { createBookingOrder } from "../services/booking-services/createBookingOrder";
import { verifyBookingPayment } from "../services/booking-services/verifyBookingPayment";

const useBookingPayment = () => {
   
const bookService = async (bookingData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await createBookingOrder(bookingData);

      if (!result?.success) {
        toast.error(result?.message || "Failed to create order");
        reject(result);
        return;
      }

      const order = result.order;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,

        handler: async (response) => {
          try {
            const verify =
              await verifyBookingPayment({
                razorpay_order_id:
                  response.razorpay_order_id,
                razorpay_payment_id:
                  response.razorpay_payment_id,
                razorpay_signature:
                  response.razorpay_signature,
              });

            if (verify?.success) {
              toast.success(
                "Booking Confirmed Successfully"
              );

              resolve(verify); // IMPORTANT
            } else {
              reject(
                new Error(
                  verify?.message ||
                    "Verification Failed"
                )
              );
            }
          } catch (err) {
            reject(err);
          }
        },

        modal: {
          ondismiss: () => {
            reject(
              new Error("Payment Cancelled")
            );
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", (response) => {
        reject(
          new Error(response.error.description)
        );
      });

      rzp.open();
    } catch (err) {
      reject(err);
    }
  });
};
    
    return {
        bookService,
    };
};

export default useBookingPayment;


