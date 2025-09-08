import React, { useState } from "react";
import { DynamicIcon, dynamicIconImports } from "lucide-react/dynamic";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  type IconName = keyof typeof dynamicIconImports;
  const ContactEntry = (props: {
    icon: IconName;
    header: string;
    text: string;
    href: string;
  }) => {
    return (
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <DynamicIcon name={props.icon} className="h-5 w-5 text-accent" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">
              {props.header}
            </h4>
            <a href={props.href} className="text-gray-700 mt-1">
              {props.text}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-700 mb-8">
              Have a project in mind or want to collaborate? Feel free to reach
              out through the form or using the contact information below.
            </p>
            <div className="space-y-6">
              {/*<ContactEntry
                icon="mail"
                header="Email"
                text="alekso.bekker@gmail.com"
                href="mailto:alekso.bekker@gmail.com"
              />
              <ContactEntry
                icon="phone"
                header="Phone"
                text="(520) 330-8080"
                href="tel:5203308080"
              />*/}
              <ContactEntry
                icon="linkedin"
                header="LinkedIn"
                text="linkedin.com/in/AleksBekker"
                href="https://linkedin.com/in/AleksBekker"
              />
              <ContactEntry
                icon="mail"
                header="Email"
                text="alekso.bekker@gmail.com"
                href="mailto:alekso.bekker+site@gmail.com"
              />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="min-h-24 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your message"
                />
              </div>
              {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${submitStatus === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  {submitMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-400"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
