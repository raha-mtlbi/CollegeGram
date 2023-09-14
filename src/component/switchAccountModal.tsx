import React from "react";
import { Dialog } from "@headlessui/react";

const SwitchAccount = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog as="div" open={open} onClose={onClose} style={{ direction: "rtl" }}>
      <div
        className="fixed inset-0 bg-black/30 overflow-y-auto"
        aria-hidden="true"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center text-center ">
          <Dialog.Panel className=" transform overflow-hidden rounded-3xl bg-[#FFF] shadow-xl transition-all w-[375px] h-[439px] text-[#17494D]">
            <div className="items-center justify-center text-center"></div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default SwitchAccount;
