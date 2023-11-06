import TlBankNav from "@/components/navBar/TlBankNav";

export const metadata = {
  title: "B-Wallet | TL Bank",
  description: "By Bankless DAO",
};

export default function TlBankLayout({ children }) {
  return (
    <section className="h-screen bg-black">
      <TlBankNav />
      {children}
    </section>
  );
}
