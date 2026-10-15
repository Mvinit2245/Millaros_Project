
import { useState } from "react";

function Modals() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Open Modal
        </button>

        <button
          onClick={() => setDrawerOpen(true)}
          className="rounded-lg bg-purple-600 px-5 py-3 text-white hover:bg-purple-700"
        >
          Open Drawer
        </button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setModalOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"
          >
            <h2 id="modal-title" className="text-2xl font-bold">
              Confirm Action
            </h2>

            <p className="my-4 text-gray-600">
              Do you want to continue?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-lg bg-gray-200 px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={() => setModalOpen(false)}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {drawerOpen && (
        <div className="fixed inset-0 z-50">
          <button
            aria-label="Close drawer overlay"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 size-full bg-black/40"
          />

          <aside
            aria-label="Side navigation"
            className="absolute right-0 top-0 h-full w-72 max-w-[85%] bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Menu</h2>

              <button
                aria-label="Close drawer"
                onClick={() => setDrawerOpen(false)}
                className="rounded px-3 py-1 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <nav className="mt-8 space-y-4">
              <p>Dashboard</p>
              <p>Profile</p>
              <p>Settings</p>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Modals;
