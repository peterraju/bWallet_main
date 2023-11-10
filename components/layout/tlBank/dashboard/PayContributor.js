"use client";

import {
  AddToQueueBtn,
  PayContributorBtn,
} from "@/components/ui/ClientButtons";
import useSafe from "@/hooks/useSafe";
import useTLBank from "@/hooks/useTLBank";
import { addToQueue } from "@/redux/slice/tlbankSlice";
import {
  Input,
  Radio,
  ListItem,
  ListItemPrefix,
  List,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";

const PayContributor = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const dispatch = useDispatch();
  const { address } = useAccount();
  const status = useSelector((state) => state.tlbank.status);
  const [quantity, setQuantity] = useState(0);
  const [lockDate, setLockDate] = useState();
  const [selected, setSelected] = useState(1);
  const setSelectedItem = (value) => setSelected(value);
  const { createTLBank, lockAndLoadTLBank, executeTransaction } = useTLBank();
  const { executeSafeTransaction } = useSafe();
  const safeAddress = useSelector((state) => state.wallet.safe);
  const [client, setClient] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const now = new Date(Date.now());
      let lockDate = now;
      if (selected === 1) {
        lockDate.setMonth(lockDate.getMonth() + 6);
      } else {
        lockDate.setMonth(lockDate.getMonth() + 10);
      }
      setLockDate(lockDate);
    }, 1000);
  }, [lockDate, selected]);

  useEffect(() => {
    if (status !== "ORG") setWalletAddress(address);
  }, [status, address]);

  useEffect(() => {
    setClient(true);
  }, []);

  const handleChange = (e) => {
    if (status === "ORG") {
      setWalletAddress(e.target.value);
    }
  };

  const handlePayContributor = async () => {
    if (!walletAddress || !quantity || !lockDate) return;

    const unSignedTx = await createTLBank(
      walletAddress,
      quantity,
      (lockDate.getTime() / 1000).toFixed(0),
    );

    console.log(unSignedTx);

    if (status === "CON") {
      await executeTransaction(unSignedTx);
    } else {
      await executeSafeTransaction(
        safeAddress,
        "0xeaEAb9f1B25fa00FC01a3fcE521b47E88527Aa02",
        unSignedTx,
      );
    }
  };

  const handleAddToQueue = async () => {
    if (!walletAddress || !quantity || !lockDate) return;

    const item = {
      walletAddress,
      quantity,
      lockDate,
    };

    dispatch(addToQueue(item));

    setWalletAddress("");
    setQuantity(0);
  };

  return (
    client && (
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
              <p className="text-right">
                {new Date(Date.now()).toLocaleString()}
              </p>
            </div>

            <div className="flex justify-between">
              <h4 className="text-gray-400">Unlock Date</h4>
              <p className="text-right">
                {lockDate ? lockDate.toLocaleString() : "Loading"}
              </p>
            </div>
          </div>
        </div>

        <AddToQueueBtn handleClick={handleAddToQueue} />

        <PayContributorBtn handleClick={handlePayContributor} />
      </section>
    )
  );
};

export default PayContributor;
