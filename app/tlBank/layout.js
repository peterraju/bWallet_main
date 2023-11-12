import LoginModal from "@/components/modals/LoginModal";
import TlBankNav from "@/components/navBar/TlBankNav";
import ContributorModal from "@/components/modals/ContributorModal";
import RoleModal from "@/components/modals/RoleModal";
import TransactionModal from "@/components/modals/TransactionModal";
import AddContributorsModal from "@/components/modals/AddContributorsModal";
import { ToggleDialer } from "@/components/layout/tlBank/toggleDialer";
import TxCompleteModal from "@/components/modals/TxCompleteModal";

export const metadata = {
  title: "B-Wallet | TL Bank",
  description: "By Bankless DAO",
};

export default function TlBankLayout({ children }) {
  return (
    <div className="relative h-screen">
      <LoginModal />
      <RoleModal />
      <TransactionModal />
      <ContributorModal />
      <AddContributorsModal />
      <TxCompleteModal />

      <section className="min-h-full bg-black font-grotesque">
        <TlBankNav />
        <ContributorModal />

        {children}
      </section>
      <ToggleDialer />
    </div>
  );
}
