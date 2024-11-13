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
    <div className="flex flex-col items-center justify-center h-auto pt-1 w-full">
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
        <div className="fixed inset-0 bg-[#191919] bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Confirm Transfer
            </h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to send{" "}
              <span className="font-semibold">${amount}</span> to account ending
              in
              <span className="font-semibold">
                {toAccountNumber.slice(-4)}
              </span>{" "}
              at {toBankName}?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmTransfer}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
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
