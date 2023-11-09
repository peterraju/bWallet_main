import LoginModal from "@/components/modals/LoginModal";
import TlBankNav from "@/components/navBar/TlBankNav";
import ContributorModal from "@/components/modals/ContributorModal";

export const metadata = {
  title: "B-Wallet | TL Bank",
  description: "By Bankless DAO",
};

export default function TlBankLayout({ children }) {
  return (
    <section className="bg-black font-grotesque">
      <LoginModal />
      <TlBankNav />
      <ContributorModal />

      {children}
    </section>
  );
}
