import React, { ReactNode } from "react";
import { Dialog } from "@headlessui/react";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function MyModal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  const phone = useMediaQuery("only screen and (max-width : 600px)");

  return (
    <>
      {phone && open ? (
        <div
          className="fixed bottom-0 z-10 md:p-3 bg-[#F1EBE3] border border-[#CDCDCD] rounded-t-3xl w-full top-28 right-0 pt-5 flex flex-col text-[#C19008]"
          onClick={onClose}
        >
          {children}
        </div>
      ) : (
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
      )}
    </>
  );
}
