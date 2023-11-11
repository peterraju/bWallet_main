import LoginModal from "@/components/modals/LoginModal";
import TlBankNav from "@/components/navBar/TlBankNav";
import ContributorModal from "@/components/modals/ContributorModal";
import RoleModal from "@/components/modals/RoleModal";
import TransactionModal from "@/components/modals/TransactionModal";

export const metadata = {
  title: "B-Wallet | TL Bank",
  description: "By Bankless DAO",
};

export default function TlBankLayout({ children }) {
  return (
    <div className="h-screen">
      <LoginModal />
      <RoleModal />
      <TransactionModal />

      <section className="min-h-full bg-black font-grotesque">
        <TlBankNav />
        <ContributorModal />

        {children}
      </section>
    </div>
  );
}
