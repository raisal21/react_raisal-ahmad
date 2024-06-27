/* eslint-disable react/prop-types */
export default function DeleteConfirm({ isOpen, onConfirm, onCancel }) {
  return (
    <>
      <dialog open={isOpen} className="modal modal-action modal-middle w-[68%] h-[70%]">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-[#1F2937]">Delete</h3>
          <p className="py-4 text-[#1F2937]">This will delete the product permanently. You cannot undo this action.</p>
          <div className="modal-action">
            <button className="btn bg-[#00ACC1] text-white border-none" onClick={onCancel}>Close</button>
            <button className="btn bg-red-500 text-white border-none" onClick={onConfirm}>Delete</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
