import React from "react";
import { Dialog } from "@headlessui/react";

const DetailModal = ({
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
        <div className="flex min-h-full items-end justify-end text-end ">
          <Dialog.Panel className=" transform overflow-hidden rounded-3xl bg-[#F1EBE3] shadow-xl transition-all w-[375px] h-[439px] text-[#17494D]">
            <div className="">
              <div id="dropdown">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default DetailModal;
