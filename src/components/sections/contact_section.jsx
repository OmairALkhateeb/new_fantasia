import React, { useState } from 'react';
import './globals.css'; // Ensure your Tailwind configuration is set up

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    governorate: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="p-8 text-right">
      <h1 className="text-white text-center text-4xl mb-8">تواصل معنا</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2 text-lg">
            الاسم
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="أدخل اسمك"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 bg-transparent border border-gray-500 rounded-xl text-white placeholder-white text-lg"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white mb-2 text-lg">
            البريد الالكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="أدخل بريدك الالكتروني"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 bg-transparent border border-gray-500 rounded-xl text-white placeholder-white text-lg"
          />
        </div>

        <div>
          <label htmlFor="governorate" className="block text-white mb-2 text-lg">
            المحافظة
          </label>
          <select
            id="governorate"
            name="governorate"
            value={formData.governorate}
            onChange={handleChange}
            required
            className="w-full p-4 bg-transparent border border-gray-500 rounded-xl text-white text-lg"
          >
            <option value="" disabled hidden>
              اختر...
            </option>
            <option value="بغداد" className="bg-white text-gray-700">
             بغداد
            </option>
            <option value="البصرة" className="bg-white text-gray-700">
              البصرة
            </option>
            <option value="النجف" className="bg-white text-gray-700">
            النجف الاشرف
            </option>

            <option value="الموصل" className="bg-white text-gray-700">
            الموصل
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-white mb-2 text-lg">
            رسالتك
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="أدخل رسالتك"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 bg-transparent border border-gray-500 rounded-xl text-white placeholder-white text-lg h-40"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-3 px-5 rounded-xl hover:bg-gray-300 focus:outline-none text-lg"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}
