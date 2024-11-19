import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import RecentTransactionsWithShowMore from "./transaction-history/page";
import RecentTransact from "@/components/RecentTransact";


export default function Home() {
 
  const loggedIn = { firstName: "Paris Watson.", lastName: "Watson",  email: "Waltsonparis22@gmail.com"};
  return (
    <section className="home">
       
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your accounts and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={336212.25}
          />
        </header>
        <RecentTransact/>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 1320}]}/>
    </section>
  );
}
