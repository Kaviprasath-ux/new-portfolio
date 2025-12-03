"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MapPin, ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteConfig, socialLinks } from "@/data/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[200px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Content */}
          <div>
            <SectionHeading
              label="Get in Touch"
              title="Let's Work Together"
              description="Have a project in mind? Let's discuss how we can create something amazing together."
            />

            <FadeIn delay={0.2} className="mt-12 space-y-8">
              {/* Contact info */}
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-accent/50 group-hover:shadow-glow transition-all duration-300">
                    <Mail className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">Email</p>
                    <p className="text-white group-hover:text-accent transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">Location</p>
                    <p className="text-white">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-4">
                  Find me on
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border hover:border-accent/50 hover:shadow-glow transition-all duration-300"
                    >
                      <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-text-tertiary group-hover:text-accent transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3 p-4 rounded-xl glass">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-text-secondary">
                  Currently available for new projects
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right column - Form */}
          <FadeIn delay={0.3}>
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 p-8 rounded-2xl glass"
            >
              <Input
                label="Name"
                placeholder="Your name"
                error={errors.name?.message}
                {...register("name")}
              />

              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                error={errors.email?.message}
                {...register("email")}
              />

              <Textarea
                label="Message"
                placeholder="Tell me about your project..."
                rows={5}
                error={errors.message?.message}
                {...register("message")}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                icon={
                  isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )
                }
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Contact;
