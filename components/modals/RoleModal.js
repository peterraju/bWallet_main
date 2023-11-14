"use client";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Radio,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { handleRoleModal } from "@/redux/slice/modalSlice";
import { useRouter } from "next/navigation";

import { SelectRoleBtn } from "../ui/ClientButtons";
import { setRole } from "@/redux/slice/userSlice";
import { setStatus } from "@/redux/slice/tlbankSlice";

const RoleModal = () => {
  const isOpen = useSelector((state) => state.modal.roleModal);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(2);
  const router = useRouter();

  const handleOpen = () => {
    dispatch(handleRoleModal());
    dispatch(setRole(selected === 1 ? "org" : "contributor"));
    setSelected(0);
  };

  const selectStatus = () => {
    if (selected === 0) return;

    if (selected === 1) {
      dispatch(setStatus("ORG"));
      router.push("/tlBank/organisations");
    } else {
      dispatch(setStatus("CON"));
      router.push("/tlBank/dashboard");
    }

    dispatch(handleRoleModal());
  };

  return (
    <Dialog
      id="content"
      size="sm"
      open={isOpen}
      className="bg-gray-900"
      aria-hidden={isOpen}
    >
      <DialogHeader className="flex items-center">
        <h3 className="ml-6 w-full font-grotesque text-xl font-semibold text-white">
          Select your role to proceed
        </h3>

        <IconButton size="sm" variant="text" className="cursor-default">
          <XMarkIcon className="hidden h-6 w-6 text-white" />
        </IconButton>
      </DialogHeader>

      <DialogBody className="space-y-4 px-10">
        <List className="space-y-3 bg-transparent p-0 font-grotesque">
          <ListItem
            className={`hover:bg-gray-black bg-black/40 active:bg-black/40`}
            style={
              selected === 1
                ? { border: "2px solid #FCADFF" }
                : { border: "2px solid transparent" }
            }
            onClick={() => setSelected(1)}
          >
            <label
              htmlFor="vertical-list-org"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  color="purple"
                  name="vertical-list"
                  id="vertical-list-org"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>

              <div className="prevent-select flex items-center gap-10">
                <div className="space-y-2">
                  <h4 className="font-bold text-white">ORG</h4>

                  <p className="font-thin text-white">
                    Manage organization as safe owner, admin or other custom
                    roles.
                  </p>
                </div>

                <div>
                  <Image
                    src="/images/tlbank/roles/organization-member.svg"
                    width={80}
                    height={80}
                    alt="ORG members standing"
                  />
                </div>
              </div>
            </label>
          </ListItem>

          <ListItem
            className="hover:bg-gray-black bg-black/40 active:bg-black/40"
            style={
              selected === 2
                ? { border: "2px solid #FCADFF" }
                : { border: "2px solid transparent" }
            }
            onClick={() => setSelected(2)}
          >
            <label
              htmlFor="vertical-list-contributor"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  color="purple"
                  name="vertical-list"
                  id="vertical-list-contributor"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  defaultChecked
                />
              </ListItemPrefix>

              <div className="prevent-select flex items-center gap-10">
                <div className="space-y-2">
                  <h4 className="font-bold text-white">Contributor</h4>

                  <p className="font-thin text-white">
                    Manage your profile, create and track payment requests
                  </p>
                </div>

                <div>
                  <Image
                    src="/images/tlbank/roles/contributor.svg"
                    width={80}
                    height={80}
                    alt="ORG members standing"
                  />
                </div>
              </div>
            </label>
          </ListItem>
        </List>
      </DialogBody>

      <DialogFooter className="justify-end px-10">
        <SelectRoleBtn handleClick={selectStatus} />
      </DialogFooter>
    </Dialog>
  );
};

export default RoleModal;
