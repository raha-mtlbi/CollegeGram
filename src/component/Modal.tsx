import React, { ReactNode } from "react";
import { Dialog } from "@headlessui/react";

export default function MyModal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="flex justify-center items-center "
      style={{ direction: "rtl" }}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center ">
          <Dialog.Panel className=" max-w-md transform overflow-hidden rounded-2xl bg-[#F3F0EE] p-6 text-left align-middle shadow-xl transition-all">
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
