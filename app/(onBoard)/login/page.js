import Logo from "@/components/Logo";
import OnBoardHeading from "@/components/layout/onBoard/OnBoardHeading";
import LoginHero from "@/components/layout/onBoard/login/LoginHero";
import LoginMain from "@/components/layout/onBoard/login/LoginMain";

export default function Login() {
  return (
    <>
      <>
        <section className="flex-1 p-8 px-7">
          <Logo />
          <OnBoardHeading heading={"Ok"} paragraph={"para"} />
          <LoginMain />
        </section>

        <section className="grid-bg flex-1">
          <LoginHero />
        </section>
      </>
    </>
  );
}
