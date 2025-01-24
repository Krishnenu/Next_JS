"use client";
export default function FormData() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="flex flex-col gap-4 p-8 w-1/4 bg-white shadow-lg rounded-md ">
        <div className="flex px-2 flex-col">
          <label htmlFor="firstName" className="mb-1" style={{ width: "12vw" }}>
            First Name:
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex px-2 flex-col">
          <label htmlFor="lastName" className="mb-1" style={{ width: "12vw" }}>
            Last Name:
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex px-2 flex-col">
          <label htmlFor="email" className="mb-1" style={{ width: "12vw" }}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex px-2 flex-col">
          <label
            htmlFor="phoneNumber"
            className="mb-1"
            style={{ width: "12vw" }}
          >
            Phone Number:
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex px-2 flex-col">
          <label htmlFor="message" className="mb-1" style={{ width: "200px" }}>
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="border p-2 rounded"
            rows={4}
          ></textarea>
        </div>
        <div className="flex px-2 flex-col">
          <button className="bg-blue-500 text-white py-2 px-4  rounded mt-4 hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
