import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, CheckCircle, Trash2, Loader2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [savedMessages, setSavedMessages] = useState<ContactMessage[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Load saved messages from localStorage on mount
  useEffect(() => {
    const messages = localStorage.getItem('hind_portfolio_messages');
    if (messages) {
      try {
        setSavedMessages(JSON.parse(messages));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const nameStr = formData.name.trim();
    const emailStr = formData.email.trim();
    const subjectStr = formData.subject?.trim() || '';
    const messageStr = formData.message.trim();

    // Field check validation
    if (!nameStr || !emailStr || !messageStr) {
      setSubmitError("Please fill in all required fields (*).");
      return;
    }

    // Email address validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailStr)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setIsSubmitted(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hindalaa26@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: nameStr,
          email: emailStr,
          subject: subjectStr || "New Message from Portfolio",
          message: messageStr,
          _honey: "", // spam bot protection field
        })
      });

      if (response.ok) {
        // Also add to local saved list for visual high-fidelity interactive review
        const localMsg: ContactMessage = {
          name: nameStr,
          email: emailStr,
          subject: subjectStr,
          message: messageStr
        };
        const updatedMessages = [localMsg, ...savedMessages];
        setSavedMessages(updatedMessages);
        localStorage.setItem('hind_portfolio_messages', JSON.stringify(updatedMessages));

        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error("Failed to deliver your message. FormSubmit responded with an error.");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "An unexpected error occurred while transmitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearMessages = () => {
    localStorage.removeItem('hind_portfolio_messages');
    setSavedMessages([]);
  };

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      label: "Email Address",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`
    },
    {
      icon: <Phone className="w-5 h-5 text-indigo-400" />,
      label: "Phone / WhatsApp",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-400" />,
      label: "Location",
      value: PERSONAL_INFO.location,
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative radial lighting backdrops */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-bold">
            06 / CONTACT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let's Orchestrate Something Great
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Have an exciting mobile application concept, full-stack deployment project, or freelance inquiry? Send a message and let's discuss details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Methods Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-lg font-display font-bold text-white">
              Direct Contact Channels
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Feel free to reach out directly through the form or using the alternative channels listed below.
            </p>

            {/* Methods Cards */}
            <div className="space-y-4">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center space-x-4 block"
                >
                  <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                      {item.label}
                    </span>
                    <span className="block text-sm font-semibold text-white mt-0.5 break-all">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Alternative social link networks */}
            <div className="pt-6">
              <h4 className="text-xs font-mono tracking-wider text-gray-500 uppercase mb-4">
                Follow me on social networks
              </h4>
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.05] hover:border-purple-500/20 transition-all duration-300"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.05] hover:border-purple-500/20 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Elegant Interactive Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/[0.06] text-left">
              <h3 className="text-lg font-display font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#090514]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#090514]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#090514]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#090514]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                    placeholder="Tell me about your concept, required timeline, and specific tech preferences..."
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    {/* Submit state indicators */}
                    {isSubmitted && (
                      <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold animate-fade-in">
                        <CheckCircle className="w-4 h-4" />
                        <span>Thank you! Your message has been sent successfully.</span>
                      </div>
                    )}
                  </div>

                  {submitError && (
                    <div className="flex items-center space-x-2 text-rose-400 bg-rose-500/5 border border-rose-500/15 p-3 rounded-xl text-xs font-semibold animate-fade-in">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Local Inbox display section (Optional tester panel for recruiters!) */}
        {savedMessages.length > 0 && (
          <div className="mt-16 text-left max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <button
                id="toggle-inbox-btn"
                onClick={() => setShowInbox(!showInbox)}
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold text-xs uppercase tracking-wider font-mono cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{showInbox ? 'Hide Local Submissions' : `Show Local Submissions (${savedMessages.length})`}</span>
              </button>

              {showInbox && (
                <button
                  id="clear-inbox-btn"
                  onClick={clearMessages}
                  className="flex items-center space-x-1.5 text-rose-400 hover:text-rose-300 text-xs font-mono font-bold cursor-pointer"
                  title="Clear Local Submissions"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Storage</span>
                </button>
              )}
            </div>

            {showInbox && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedMessages.map((msg, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/[0.05] p-5 rounded-2xl relative space-y-2">
                    <span className="absolute top-4 right-4 text-[10px] font-mono text-purple-400 bg-purple-500/5 border border-purple-500/10 px-2 py-0.5 rounded">
                      Local DB Saved
                    </span>
                    <div className="space-y-0.5">
                      <span className="block text-xs font-bold text-white">{msg.name}</span>
                      <span className="block text-[11px] text-gray-500 font-mono">{msg.email}</span>
                    </div>
                    {msg.subject && (
                      <span className="block text-xs font-semibold text-gray-300">
                        Sub: {msg.subject}
                      </span>
                    )}
                    <p className="text-xs text-gray-400 leading-relaxed italic bg-white/[0.01] p-2 rounded-lg border border-white/[0.03]">
                      "{msg.message}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
