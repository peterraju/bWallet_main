import ContributerList from "@/components/layout/tlBank/contributor/ContributerList";
import { AddContributorBtn } from "@/components/ui/ClientButtons";

const ContributorsPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-black">
      <div className="flex w-full max-w-6xl justify-between">
        <h2 className="text-3xl font-bold">Contributors</h2>
        <AddContributorBtn />
      </div>

      <ContributerList />
    </main>
  );
};

export default ContributorsPage;
