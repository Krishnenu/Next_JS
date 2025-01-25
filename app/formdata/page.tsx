"use client";

import { ChangeEvent, useState } from "react";

export default function FormData() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitDataHandler = () => {
    console.log(
      `Name: ${value?.firstname} ${value?.lastname} Email: ${value?.email} Phone: ${value?.phone} Message: ${value?.message}`
    );
  };
  console.log(value);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="flex flex-col gap-4 p-8 w-1/4 bg-white shadow-lg rounded-md ">
        <div className="flex px-2 flex-col">
          <label htmlFor="firstName" className="mb-1" style={{ width: "12vw" }}>
            First Name:
          </label>
          <input
            name="firstname"
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="border p-2 rounded"
            onChange={(event) => onChangeHandler(event)}
          />
        </div>
        <div className="flex px-2 flex-col">
          <label htmlFor="lastName" className="mb-1" style={{ width: "12vw" }}>
            Last Name:
          </label>
          <input
            id="lastName"
            name="lastname"
            type="text"
            placeholder="Enter your last name"
            className="border p-2 rounded"
            onChange={(event) => onChangeHandler(event)}
          />
        </div>
        <div className="flex px-2 flex-col">
          <label htmlFor="email" className="mb-1" style={{ width: "12vw" }}>
            Email:
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            className="border p-2 rounded"
            onChange={(event) => onChangeHandler(event)}
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
            name="phone"
            id="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            className="border p-2 rounded"
            onChange={(event) => onChangeHandler(event)}
          />
        </div>
        <div className="flex px-2 flex-col">
          <label htmlFor="message" className="mb-1" style={{ width: "200px" }}>
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            className="border p-2 rounded"
            rows={4}
            onChange={(event) => onChangeHandler(event)}
          ></textarea>
        </div>
        <div className="flex px-2 flex-col">
          <button
            className="bg-blue-500 text-white py-2 px-4  rounded mt-4 hover:bg-blue-600"
            onClick={submitDataHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
