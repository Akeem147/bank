"use client";

import { FC, useState } from "react";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "debit" | "credit";
}

// Transactions array defined here
const transactions: Transaction[] = [
  { id: 1, date: "2024-11-06", description: "Direct Deposit - Salary", amount: 2500.0, type: "credit" },
  { id: 2, date: "2024-11-05", description: "Starbucks Coffee", amount: -5.75, type: "debit" },
  { id: 3, date: "2024-11-05", description: "Uber Ride", amount: -15.0, type: "debit" },
  { id: 4, date: "2024-11-04", description: "Grocery Store - Walmart", amount: -88.92, type: "debit" },
  { id: 5, date: "2024-11-03", description: "Electricity Bill Payment", amount: -100.0, type: "debit" },
  { id: 6, date: "2024-11-02", description: "Transfer from Savings", amount: 300.0, type: "credit" },
  { id: 7, date: "2024-11-01", description: "Gas Station - Shell", amount: -45.2, type: "debit" },
  { id: 8, date: "2024-10-30", description: "Dining - Olive Garden", amount: -60.0, type: "debit" },
  { id: 9, date: "2024-10-29", description: "Mortgage Payment", amount: -1200.0, type: "debit" },
  { id: 10, date: "2024-10-27", description: "ATM Withdrawal", amount: -100.0, type: "debit" },
  { id: 11, date: "2024-10-26", description: "Health Insurance", amount: -250.0, type: "debit" },
  { id: 12, date: "2024-10-25", description: "Transfer to Savings", amount: -500.0, type: "debit" },
  { id: 13, date: "2024-10-24", description: "Refund - Apple Store", amount: 29.99, type: "credit" },
  { id: 14, date: "2024-10-23", description: "Hotel Booking", amount: -300.0, type: "debit" },
  { id: 15, date: "2024-10-20", description: "Flight Booking", amount: -450.0, type: "debit" },
];

const RecentTransactionsWithShowMore: FC = () => {
  const [visibleTransactions, setVisibleTransactions] = useState(8);

  const showMoreTransactions = () => {
    setVisibleTransactions((prev) => Math.min(prev + 8, transactions.length));
  };

  return (
    <div className="w-full flex flex-col justify-between md:gap-[55px] pt-20 lg:pt-5 min-h-screen md:px-5 px-4 pb-10 lg:px-5 bg-slate-100 rounded-lg shadow-md">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Recent Transactions
        </h2>
        <ul className="divide-y divide-gray-200">
          {transactions.slice(0, visibleTransactions).map((transaction) => (
            <li
              key={transaction.id}
              className="py-4 flex items-center gap-4 justify-between"
            >
              <div>
                <p className="text-gray-700 font-medium">
                  {transaction.description}
                </p>
                <p className="text-gray-500 text-sm">{transaction.date}</p>
              </div>
              <div
                className={`text-sm font-semibold ${
                  transaction.type === "credit"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "debit" ? "-" : "+"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Show More Button */}
      {visibleTransactions < transactions.length && (
        <button
          onClick={showMoreTransactions}
          className="w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300 transition duration-300 my-4"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default RecentTransactionsWithShowMore;
