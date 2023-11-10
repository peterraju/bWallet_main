import LoginModal from "@/components/modals/LoginModal";
import TlBankNav from "@/components/navBar/TlBankNav";
import ContributorModal from "@/components/modals/ContributorModal";
import RoleModal from "@/components/modals/RoleModal";

export const metadata = {
  title: "B-Wallet | TL Bank",
  description: "By Bankless DAO",
};

export default function TlBankLayout({ children }) {
  return (
    <>
      <LoginModal />
      <RoleModal />

      <section className="bg-black font-grotesque">
        <TlBankNav />
        <ContributorModal />

        {children}
      </section>
    </>
  );
}
