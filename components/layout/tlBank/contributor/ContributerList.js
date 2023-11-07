import ContributorItem from "./ContributorItem";

const ContributerList = () => {
  const contributors = [
    {
      src: "/images/contributors/1.jpg",
      name: "John Doe",
      address: "0x1234567890abcdef1234567890",
    },
    {
      src: "/images/contributors/2.jpg",
      name: "John Doe",
      address: "0x1234567890abcdef1234567890",
    },
    {
      src: "/images/contributors/3.jpg",
      name: "John Doe",
      address: "0x1234567890abcdef1234567890",
    },
    {
      src: "/images/contributors/4.jpg",
      name: "John Doe",
      address: "0x1234567890abcdef1234567890",
    },
    {
      src: "/images/contributors/5.jpg",
      name: "John Doe",
      address: "0x1234567890abcdef1234567890",
    },
    {
      src: "/images/contributors/6.jpg",
      name: "John Doe",
      address: "0x1234567890abcdef1234567890",
    },
  ];

  return (
    <section className="mt-10 w-full max-w-6xl space-y-3 bg-gray-800/70 px-4 py-5">
      {contributors.map((contributor, index) => (
        <ContributorItem key={index} contributor={contributor} />
      ))}
    </section>
  );
};

export default ContributerList;
