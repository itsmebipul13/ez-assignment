import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  service: yup.string().required("Service is required"),
  message: yup.string().required("Message is required"),
});

const servicesOptions = [
  { value: "Presentation Design", label: "Presentation Design" },
  { value: "Animated Videos", label: "Animated Videos" },
  { value: "Report Design", label: "Report Design" },
];

export default function ContactModal({ show, onClose }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        service: data.service,
        message: data.message,
        subscribe: data.subscribe || false,
      };

      const response = await fetch("https://test.ezworks.ai/form-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("✅ Form submitted successfully!");
        onClose();
      } else {
        alert("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("🚨 An unexpected error occurred.");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white flex rounded-xl w-[90%] md:w-[850px] overflow-hidden relative font-sans">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10"
        >
          &times;
        </button>

        {/* Left Side */}
        <div className="w-1/2 bg-gradient-to-br from-[#062243] to-[#051020] text-white p-6 hidden md:flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">Send us a brief</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Our team will get in touch with you within 10 Minutes!
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <img src="/icon1.svg" alt="icon" />
            <img src="/icon2.svg" alt="icon" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 space-y-4 text-black">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name")}
              placeholder="Name"
              className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  country={"in"}
                  value={field.value}
                  onChange={field.onChange}
                  inputStyle={{
                    width: "100%",
                    borderRadius: "8px",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #d1d5db",
                    color: "#111827",
                    backgroundColor: "#ffffff",
                  }}
                />
              )}
            />

            <input
              {...register("email")}
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <select
              {...register("service")}
              className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Service</option>
              {servicesOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}

            <textarea
              {...register("message")}
              placeholder="Message"
              rows="3"
              className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" {...register("subscribe")} />
              <span>I would like to receive promotional emails</span>
            </label>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-2 rounded-lg w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
