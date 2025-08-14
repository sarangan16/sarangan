import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { t } = useTranslation();

  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!formRef.current) return;

    gsap.fromTo(
      formRef.current,
      { opacity: 1, y: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_n3vfxer",
        "template_ngm0r1r",
        formRef.current,
        "IyLH_onUBQW3zh1hY"
      )
      .then(
        () => {
          if (formRef.current) formRef.current.reset();
          setSubmitted(true);
          setLoading(false);
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-2xl mx-auto">
        {submitted ? (
          <p className="text-green-600 text-center font-medium">
            {t("messageSent")}
          </p>
        ) : (
          <form
            onSubmit={sendEmail}
            ref={formRef}
            className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-md"
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
