import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://your-api-endpoint.com/contact", data);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <input {...register("name")} className="block w-full p-3 border mb-2" placeholder="Your Name" />
        <p className="text-red-500">{errors.name?.message}</p>

        <input {...register("email")} className="block w-full p-3 border mb-2" placeholder="Your Email" />
        <p className="text-red-500">{errors.email?.message}</p>

        <textarea {...register("message")} className="block w-full p-3 border mb-2" placeholder="Your Message"></textarea>
        <p className="text-red-500">{errors.message?.message}</p>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-3">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
