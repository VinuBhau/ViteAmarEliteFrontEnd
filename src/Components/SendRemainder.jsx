import axios from "axios";
import { useState } from "react";

const  SendReminder =()=> {
    const [reminder, setReminder] = useState({
      oid: "",
      reminder: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setReminder((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSendReminder = (event) => {
      event.preventDefault();
      axios
        .post("https://amarelitebackend.onrender.com/api/secretary/sendReminder", reminder)
        .then(() => {
          alert("Reminder sent successfully!");
          setReminder({ oid: "", reminder: "" });
        })
        .catch((err) => {
          console.error("Error sending reminder:", err);
          alert("Failed to send reminder. Please try again.");
        });
    };
  
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto bg-white text-gray-900 p-6 rounded-lg shadow-xl">
          <h2 className="text-center text-2xl font-semibold mb-6 text-teal-600">
            Send Reminder
          </h2>
          <form className="space-y-6" onSubmit={handleSendReminder}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Owner's ID</label>
              <input
                type="text"
                name="oid"
                value={reminder.oid}
                onChange={handleInputChange}
                placeholder="Enter OID"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Reminder Message</label>
              <textarea
                name="reminder"
                value={reminder.reminder}
                onChange={handleInputChange}
                placeholder="Type your reminder message here"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition duration-300 ease-in-out"
            >
              Send Reminder
            </button>
          </form>
        </div>
      </div>
    );
  }

export default SendReminder;