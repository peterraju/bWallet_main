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

const PayContributor = () => {
  return (
    <section className="flex-[3] space-y-6 rounded-xl bg-gray-900 p-4">
      <h3 className="border-b border-gray-700 bg-transparent pb-3 text-xl font-semibold">
        Pay Contributor
      </h3>

      <div className="mt-6 space-y-4">
        <Input color="white" type="number" label="Quantity" />
        <Input color="white" type="text" label="Wallet Address" />
      </div>

      <div>
        <h4 className="font-semibold text-gray-400">Lockup Period</h4>

        <List className="flex-row gap-6 px-0">
          <ListItem className="rounded-lg bg-black/20 p-0 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-900">
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

          <ListItem className="rounded-lg bg-black/20 p-0 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-900">
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
            <p className="text-right">23-4-23 1:00</p>
          </div>

          <div className="flex justify-between">
            <h4 className="text-gray-400">Unlock Date</h4>
            <p className="text-right">23-4-23 1:00</p>
          </div>
        </div>
      </div>

      <AddToQueueBtn />

      <PayContributorBtn />
    </section>
  );
};

export default PayContributor;
