import axios from "axios";
import { useState } from "react";

const AddExpense =()=> {
    const [expense, setExpense] = useState({
      date: "",
      amount: "",
      description: "",
      status: "",
      modeOfPayment: "",
      personOrAgencyName: "",
      monthOfPayment: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setExpense((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleAddExpense = (event) => {
      event.preventDefault();
      axios
        .post("https://amarelitebackend.onrender.com/api/secretary/addExpense", expense)
        .then(() => {
          alert("Expense added successfully!");
          setExpense({
            date: "",
            amount: "",
            description: "",
            status: "",
            modeOfPayment: "",
            personOrAgencyName: "",
            monthOfPayment: "",
          });
        })
        .catch((err) => {
          console.error("Error adding expense:", err);
          alert("Failed to add expense. Please try again.");
        });
    };
  
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto bg-white text-gray-900 p-6 rounded-lg shadow-xl">
          <h2 className="text-center text-2xl font-semibold mb-6 text-blue-600">
            Add Expense
          </h2>
          <form className="space-y-6" onSubmit={handleAddExpense}>
            {[{ label: "Expense Date", name: "date", type: "date" },
              { label: "Expense Amount", name: "amount", type: "number", placeholder: "Enter amount" },
              { label: "Description", name: "description", type: "text", placeholder: "Describe the expense" },
              { label: "Status", name: "status", type: "text", placeholder: "e.g., Paid, Pending" },
              { label: "Mode of Payment", name: "modeOfPayment", type: "text", placeholder: "e.g., Cash, Card" },
              { label: "Person/Agency Name", name: "personOrAgencyName", type: "text", placeholder: "Name of person or agency" },
              { label: "Payment Month", name: "monthOfPayment", type: "text", placeholder: "Enter month of payment" }]
              .map(({ label, name, type, placeholder }) => (
                <div key={name} className="space-y-2">
                  <label className="text-sm font-medium">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={expense[name]}
                    onChange={handleInputChange}
                    placeholder={placeholder || ""}
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Add Expense
            </button>
          </form>
        </div>
      </div>
    );
  }

  export default AddExpense;