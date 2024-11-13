"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { useParams } from "next/navigation"; // Import useParams to get dynamic route params
import Link from "next/link";

// Sample data (This should ideally be fetched from an API or stored in a state)
const bankDetailsData = [
  {
    id: 1,
    bankName: "Chase Bank",
    accountType: "Checking",
    accountNumber: "123456789",
    routingNumber: "021000021",
    balance: 62937.5,
    recentTransactions: [
      { date: "2024-11-01", description: "Grocery Store", amount: -76.45 },
      { date: "2024-10-29", description: "Direct Deposit", amount: 1500 },
      { date: "2024-10-25", description: "Gas Station", amount: -50.12 },
      { date: "2024-10-21", description: "Utilities", amount: -120.5 },
      { date: "2024-10-15", description: "Online Shopping", amount: -89.99 },
    ],
  },
  {
    id: 2,
    bankName: "Bank of America",
    accountType: "Savings",
    accountNumber: "234567890",
    routingNumber: "026009593",
    balance: 54474.75,
    recentTransactions: [
      { date: "2024-11-01", description: "Deposit", amount: 1000 },
      { date: "2024-10-30", description: "Transfer", amount: -200 },
    ],
  },
  {
    id: 3,
    bankName: "Wells Fargo",
    accountType: "Business",
    accountNumber: "345678901",
    routingNumber: "121000248",
    balance: 218800.0,
    recentTransactions: [
      { date: "2024-11-02", description: "Invoice Payment", amount: 2000 },
      { date: "2024-10-28", description: "Business Expense", amount: -500 },
    ],
  },
];

const BankDetailsPage = () => {
  const router = useRouter();
  const params = useParams(); // Access dynamic route parameters
  const id = parseInt(Array.isArray(params.id) ? params.id[0] : params.id || '', 10);
  

  // Find the bank account details based on the id
  const accountDetails = bankDetailsData.find((account) => account.id === id);

  // If the account details are not found, show a fallback UI
  if (!accountDetails) {
    return <div>Bank details not found</div>;
  }

  const handleGoBack = () => router.back();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <Toaster />
      <div className="max-w-[950px] mx-auto bg-slate-100 shadow-lg rounded-lg p-8 relative border-t-4 border-blue-600">
        <button
          onClick={handleGoBack}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <span className="text-3xl font-semibold text-black">×</span>
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {accountDetails.bankName} Account Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-sm text-gray-700">Account Type: <span className="font-semibold">{accountDetails.accountType}</span></p>
            <p className="text-sm text-gray-700">Account Number: <span className="font-semibold">{accountDetails.accountNumber.slice(-4)}</span></p>
            <p className="text-sm text-gray-700">Routing Number: <span className="font-semibold">{accountDetails.routingNumber}</span></p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 mt-6 md:mt-0">Available Balance</p>
            <p className="text-2xl font-semibold text-green-600">
              ${accountDetails.balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Recent Transactions</h3>
        <ul className="mt-4 space-y-4">
          {accountDetails.recentTransactions.map((transaction, index) => (
            <li key={index} className="flex justify-between items-center text-gray-600 border-b pb-3">
              <div className="flex-1">
                <span className="block font-medium">{transaction.date}</span>
                <span className="block text-sm text-gray-500">{transaction.description}</span>
              </div>
              <span className={`font-medium ${transaction.amount < 0 ? "text-red-600" : "text-green-600"}`}>
                {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link href={"/payment-transfer"}
            
            className="w-full md:w-1/2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Transfer Funds
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsPage;