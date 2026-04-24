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
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      },
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
        "IyLH_onUBQW3zh1hY",
      )
      .then(
        () => {
          formRef.current.reset();
          setSubmitted(true);
          setLoading(false);
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        },
      );
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-16">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Contact
        </h2>
        <p className="mt-4 text-white/50">Let’s build something together.</p>
      </div>

      {/* FORM */}
      <form
        onSubmit={sendEmail}
        ref={formRef}
        className="max-w-5xl mx-auto space-y-8"
      >
        {/* NAME */}
        <div className="space-y-2">
          <label className="text-sm text-white/50 uppercase tracking-widest">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="
              w-full bg-transparent
              border-b border-white/10
              py-3 text-white
              focus:outline-none
              focus:border-[#F16D34]
              transition
            "
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <label className="text-sm text-white/50 uppercase tracking-widest">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="
              w-full bg-transparent
              border-b border-white/10
              py-3 text-white
              focus:outline-none
              focus:border-[#F16D34]
              transition
            "
          />
        </div>

        {/* MESSAGE */}
        <div className="space-y-2">
          <label className="text-sm text-white/50 uppercase tracking-widest">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="
              w-full bg-transparent
              border-b border-white/10
              py-3 text-white
              focus:outline-none
              focus:border-[#F16D34]
              transition resize-none
            "
          />
        </div>

        {/* BUTTON + STATUS */}
        <div className="flex items-center justify-between pt-4">
          <button
            type="submit"
            disabled={loading}
            className="
              px-6 py-3
              bg-[#F16D34]
              text-black
              font-medium
              hover:opacity-90
              transition
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <p className="text-sm text-white/60">{t("messageSent")}</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
