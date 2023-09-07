import React from "react";
import { Dialog } from "@headlessui/react";
import Button from "./button";

const BlockModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog
      as="div"
      open={open}
      onClose={onClose}
      className="flex justify-center items-center relative z-10 "
      style={{ direction: "rtl" }}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center ">
          <Dialog.Panel className="w-full  max-w-md transform overflow-hidden rounded-2xl bg-[#F3F0EE] p-6 text-left align-middle shadow-xl transition-all"></Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default BlockModal;
