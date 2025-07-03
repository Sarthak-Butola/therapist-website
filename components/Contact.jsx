'use client';

import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    time: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const headingRef = useRef(null);
  const refs = {
    name: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    reason: useRef(null),
    time: useRef(null),
    agree: useRef(null),
    submit: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    Object.values(refs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      Object.values(refs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required.';
    else if (!/^[\d()+\s-]+$/.test(formData.phone.trim()))
      newErrors.phone = 'Only numbers, +, (), -, and spaces are allowed.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format.';
    if (!formData.reason.trim()) newErrors.reason = 'Please tell us what brings you here.';
    if (!formData.time.trim()) newErrors.time = 'Preferred time is required.';
    if (!formData.agree) newErrors.agree = 'You must agree to be contacted.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
    //   alert('Form submitted! ✅');
    // }
    if (Object.keys(newErrors).length === 0) {
  alert('Form submitted! ✅');
  setFormData({
    name: '',
    phone: '',
    email: '',
    reason: '',
    time: '',
    agree: false,
  });
  setErrors({});
}   
  };


  return (
    <section id="contact" className="w-full bg-white px-4 sm:px-6 md:px-12 py-12 sm:py-16">
      <div className="max-w-xl mx-auto border border-[#345c4a] p-4 sm:p-6 rounded-md">
        
        {/* Heading */}
        <h2
          ref={headingRef}
          className="fadeInOnScroll text-3xl md:text-4xl font-serif font-bold text-[#345c4a] mb-8 text-center"
        >
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div ref={refs.name} className="fadeInOnScroll">
            <label className="block text-sm font-medium text-gray-800 mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-[#b9cfcf] text-gray-900"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div ref={refs.phone} className="fadeInOnScroll">
            <label className="block text-sm font-medium text-gray-800 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-[#b9cfcf] text-gray-900"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div ref={refs.email} className="fadeInOnScroll">
            <label className="block text-sm font-medium text-gray-800 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-[#b9cfcf] text-gray-900"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Reason */}
          <div ref={refs.reason} className="fadeInOnScroll">
            <label className="block text-sm font-medium text-gray-800 mb-1">What brings you here?</label>
            <textarea
              name="reason"
              rows="4"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-[#b9cfcf] text-gray-900"
              value={formData.reason}
              onChange={handleChange}
            />
            {errors.reason && <p className="text-red-600 text-sm mt-1">{errors.reason}</p>}
          </div>

          {/* Preferred Time */}
          <div ref={refs.time} className="fadeInOnScroll">
            <label className="block text-sm font-medium text-gray-800 mb-1">Preferred time to reach you</label>
            <input
              type="text"
              name="time"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-[#b9cfcf] text-gray-900"
              value={formData.time}
              onChange={handleChange}
            />
            {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
          </div>

          {/* Checkbox */}
          <div ref={refs.agree} className="fadeInOnScroll flex items-start">
            <input
              type="checkbox"
              name="agree"
              className="mt-1 mr-2"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label className="text-sm text-gray-800">I agree to be contacted.</label>
          </div>
          {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}

          {/* Submit Button */}
          <div ref={refs.submit} className="fadeInOnScroll pt-4">
            <button
              type="submit"
              className="w-full bg-[#345c4a] hover:bg-[#2d4d3f] text-white py-3 rounded-md text-lg font-semibold transition"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
