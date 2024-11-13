
import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";
import DateDisplay from "./DateDisplay";

export default function TotalBalanceBox({
  
  totalCurrentBalance,
}: TotlaBalanceBoxProps) {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart  />
      </div>
      <div className="flex flex-col gap-6">
        <DateDisplay/>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total current balance</p>
          <span className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </span>
        </div>
      </div>
    </section>
  );
}
