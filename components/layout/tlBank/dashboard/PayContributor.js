"use client";

import {
  AddToQueueBtn,
  PayContributorBtn,
} from "@/components/ui/ClientButtons";
import {
  Input,
  Radio,
  ListItem,
  ListItemPrefix,
  List,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";

const PayContributor = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const { address } = useAccount();
  const status = useSelector((state) => state.tlbank.status);
  const [quantity, setQuantity] = useState(0);
  const [date, setDate] = useState();
  const [lockDate, setLockDate] = useState();
  const [selected, setSelected] = useState(1);
  const setSelectedItem = (value) => setSelected(value);

  useEffect(() => {
    setTimeout(() => {
      const now = new Date(Date.now());
      setDate(now.toLocaleString());
      let lockDate;
      if (selected === 1) {
        lockDate = new Date(now.setMonth(now.getMonth() + 6));
      } else {
        lockDate = new Date(now.setMonth(now.getMonth() + 10));
      }
      setLockDate(lockDate.toLocaleString());
    }, 1000);
  }, [date, selected]);

  useEffect(() => {
    if (status !== "ORG") setWalletAddress(address);
  }, [status, address]);

  const handleChange = (e) => {
    if (status === "ORG") {
      setWalletAddress(e.target.value);
    }
  };

  return (
    <section className="flex-[3] space-y-6 rounded-xl bg-gray-900 p-4">
      <h3 className="border-b border-gray-700 bg-transparent pb-3 text-xl font-semibold">
        Pay Contributor
      </h3>

      <div className="mt-6 space-y-4">
        <Input
          color="white"
          type="number"
          label="Quantity"
          value={quantity ? quantity : ""}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          color="white"
          type="text"
          label="Wallet Address"
          value={walletAddress ? walletAddress : ""}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div>
        <h4 className="font-semibold text-gray-400">Lockup Period</h4>

        <List className="flex-row gap-6 px-0">
          <ListItem
            className="rounded-lg bg-black/20 p-0 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-900"
            selected={selected === 1}
            onClick={() => setSelectedItem(1)}
          >
            <label
              htmlFor="horizontal-list-6"
              className="flex w-full cursor-pointer items-center justify-center py-4"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  name="horizontal-list"
                  id="horizontal-list-6"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  color="purple"
                />
              </ListItemPrefix>

              <p className="prevent-select font-bold text-white">6 Months</p>
            </label>
          </ListItem>

          <ListItem
            className="rounded-lg bg-black/20 p-0 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-900"
            selected={selected === 2}
            onClick={() => setSelectedItem(2)}
          >
            <label
              htmlFor="horizontal-list-10"
              className="flex w-full cursor-pointer items-center justify-center py-4"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  name="horizontal-list"
                  id="horizontal-list-10"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  color="purple"
                />
              </ListItemPrefix>

              <p className="prevent-select font-bold text-white">10 Months</p>
            </label>
          </ListItem>
        </List>

        <div className="mt-5 font-medium">
          <div className="flex justify-between">
            <h4 className="text-gray-400">Lock Date</h4>
            <p className="text-right">{date}</p>
          </div>

          <div className="flex justify-between">
            <h4 className="text-gray-400">Unlock Date</h4>
            <p className="text-right">{lockDate}</p>
          </div>
        </div>
      </div>

      <AddToQueueBtn />

      <PayContributorBtn />
    </section>
  );
};

export default PayContributor;
