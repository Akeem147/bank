"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const TransferPage = () => {
  const [fromAccount, setFromAccount] = useState("Checking");
  const [toAccountNumber, setToAccountNumber] = useState("");
  const [toRoutingNumber, setToRoutingNumber] = useState("");
  const [toBankName, setToBankName] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [memo, setMemo] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmTransfer = () => {
    setShowConfirmation(false);
    toast.error(
      "Transfer failed: Please visit your nearest bank branch to resolve this issue.",
      {
        duration: 5000,
        icon: "🚫",
      }
    );
    setTimeout(() => {
      router.push("/"); // Redirect to home page
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto pt-1 w-full mb-[60px]">
      <Toaster />
      <div className="w-full rounded-lg p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Transfer Funds
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-2">
            From Account
          </label>
          <select
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Checking">Checking - $84,053.31</option>
            <option value="Savings">Savings - $50,431.99</option>
            <option value="Business">Business - $201,728.00</option>
          </select>

          <label className="block text-gray-700 font-medium mb-2">
            To Account Number
          </label>
          <input
            type="number"
            value={toAccountNumber}
            onChange={(e) => setToAccountNumber(e.target.value)}
            placeholder="Recipient Account Number"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">
            To Routing Number
          </label>
          <input
            type="number"
            value={toRoutingNumber}
            onChange={(e) => setToRoutingNumber(e.target.value)}
            placeholder="Recipient Routing Number"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">
            Bank Name
          </label>
          <input
            type="text"
            value={toBankName}
            onChange={(e) => setToBankName(e.target.value)}
            placeholder="Recipient Bank Name"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">
            Recipient Email
          </label>
          <input
            type="email"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
            placeholder="Recipient Email"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="Enter amount"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">
            Memo (Optional)
          </label>
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="Memo for the recipient"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-gray-700 font-medium mb-2">
            Transfer Date
          </label>
          <input
            type="date"
            value={transferDate}
            onChange={(e) => setTransferDate(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Money
          </button>
        </form>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-[#191919] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center">
            {/* Close Icon */}
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>

            {/* Icon and Title */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Confirm Transfer
              </h3>
            </div>

            {/* Transfer Details */}
            <p className="text-gray-600 mb-6 text-center">
              Are you sure you want to send{" "}
              <span className="font-semibold text-gray-800">${amount}</span> to
              the account ending in{" "}
              <span className="font-semibold text-gray-800">
                {toAccountNumber.slice(-4)}
              </span>{" "}
              at{" "}
              <span className="font-semibold text-gray-800">{toBankName}</span>?
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmTransfer}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
              >
                Confirm
              </button>
            </div>
          </div>
            
        </div>
      )}
    </div>
  );
};

export default TransferPage;
