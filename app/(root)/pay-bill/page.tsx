// pages/pay-bills.tsx
"use client"
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const PayBill: FC = () => {
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [payee, setPayee] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Handle Confirm Button - Show Toast and Redirect
  const handleConfirmPayment = () => {
    toast.error(
      "Failed: Please visit your nearest bank branch to resolve this issue.",
      {
        duration: 5000,
        icon: "🚫",
      }
    );
    setTimeout(() => {
      router.push("/"); // Redirect to home page
    }, 4000);
  };

  // Handle Review Payment Button Click
  const handleReviewPayment = () => {
    if (!account || !payee || !amount || !paymentDate) {
      toast.error("All fields are required.");
      return;
    }
    setShowModal(true); // Show modal if all fields are filled
  };

  // Reset form fields


  return (
    <div className="h-auto lg:h-screen md:px-6 px-3 lg:px-0 mb-[60px] pt-[50px] lg:pt-0 lg:mb-0">
       <Toaster />
      <div className="max-w-[950px] mx-auto bg-slate-100 shadow-md rounded-lg py-6 lg:px-4 md:px-3 px-2.5 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Pay Bills</h1>
          <p className="text-gray-600 mt-1">Easily pay bills and manage your scheduled payments.</p>
        </div>

        {/* Pay Bills Form */}
        <div className="space-y-6">
          {/* Select Account */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Account</label>
            <select
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className="mt-1 w-full py-2 px-2 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Choose an account</option>
              <option value="checking">Checking Account</option>
              <option value="savings">Savings Account</option>
            </select>
          </div>

          {/* Select Payee */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Payee</label>
            <select
              value={payee}
              onChange={(e) => setPayee(e.target.value)}
              className="mt-1 w-full py-2 px-2 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Choose a payee</option>
              <option value="utility">Utility Company</option>
              <option value="credit-card">Credit Card</option>
              <option value="mortgage">Mortgage</option>
            </select>
          </div>

          {/* Payment Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 w-full py-2 px-2 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Schedule Payment Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Schedule Payment Date</label>
            <input
              type="date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              className="mt-1 w-full py-2 px-2 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Review & Submit */}
          <button
            type="button"
            onClick={handleReviewPayment} // Use handleReviewPayment function
            className="w-full py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Review Payment
          </button>
        </div>

        {/* Payment History */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mt-6">Payment History</h2>
          <ul className="space-y-4 mt-4">
            {/* Sample Payment History Items */}
            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div>
                <p className="text-gray-700 font-medium">Utility Company</p>
                <p className="text-gray-500 text-sm">Paid: Nov 1, 2024</p>
                <p className="text-gray-500 text-sm">Confirmation #: 123456</p>
              </div>
              <p className="text-red-600 font-semibold">-$120.00</p>
            </li>
            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div>
                <p className="text-gray-700 font-medium">Credit Card</p>
                <p className="text-gray-500 text-sm">Paid: Oct 15, 2024</p>
                <p className="text-gray-500 text-sm">Confirmation #: 654321</p>
              </div>
              <p className="text-red-600 font-semibold">-$200.00</p>
            </li>
            {/* Additional items as needed */}
          </ul>
        </div>
      </div>

      {/* Modal for Review Payment */}
      {showModal && (
        <div className="fixed inset-0 bg-[#191919] bg-opacity-50 flex items-center justify-center w-full h-screen">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Review Payment</h2>
            <p><strong>Account:</strong> {account || "N/A"}</p>
            <p><strong>Payee:</strong> {payee || "N/A"}</p>
            <p><strong>Amount:</strong> ${amount || "N/A"}</p>
            <p><strong>Payment Date:</strong> {paymentDate || "N/A"}</p>

            <div className="flex items-center justify-center space-x-4 pt-6">
              <button
                onClick={() => setShowModal(false)}
                className="py-2 px-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPayment}
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayBill;
