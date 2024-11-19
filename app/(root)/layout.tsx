import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-auto w-full font-inter bg-slate-100 bg-opacity-5">
      <Sidebar />
      <div className="flex size-full lg:ml-[252px] w-full flex-col overflow-x-hidden">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        {children}
      </div>
    </main>
  );
}
