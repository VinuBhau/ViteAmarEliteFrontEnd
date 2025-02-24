import React from 'react'

const ChairmanNotices = () => {

    const notice = useRef("");
  
    const postnotice = async () => {
      let notice1 = notice.current.value;
  
      const payload1 = {
        notice: notice1,
      };
      await axios.post("https://amarelitebackend.onrender.com/api/chairman/postnotice", payload1)
        .then((response) => {
          alert("Notice posted successfully...");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-8">
    <h2 className="text-xl font-bold mb-4">Notice</h2>
    <input
      type="text"
      ref={notice}
      placeholder="Enter any notice"
      className="mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
    />
    <button
      onClick={postnotice}
      className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
    >
      Post Notice
    </button>
  </div>
  )
}

export default ChairmanNotices


