import React, { useState } from 'react'
import Button1 from '../components/Button1';

function UserPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Handle function for form submission
    
    function handleSubmit(e){
        e.preventDefault();

        alert(`Name:${name} \nEmail:${email}`);

        setShowPopup(false);
        setName("");
        setEmail("");
    }
  return (
    <div>
      {/* Opening pop-up button */}
       <Button1
       
        color="blue"
        text="Add User"
        
        onClick={() => setShowPopup(true)}
      />

      {/* Popup Box working In this */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <form
            onSubmit={handleSubmit}
            className="w-80 rounded-lg bg-white p-6 shadow-lg"
          >
            <h2 className="mb-4 text-xl font-bold">
              Enter User Details
            </h2>

            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mb-3 w-full rounded border p-2"
            />

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-4 w-full rounded border p-2"
            />

            <div className="flex justify-end gap-2">
              <Button1
              text={"Cancel"}
              color='red'
              onClick={() => setShowPopup(false)}
              />

              <Button1
              text={"Submit"}
              color='blue'
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}



export default UserPopup
