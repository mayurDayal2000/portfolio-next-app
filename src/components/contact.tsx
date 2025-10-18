"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Union type that includes all possible fields
type FormValues = {
  audienceType?: "recruiter" | "hiring-manager" | "client" | "other";
  email: string;
  message: string;
  name: string;
  purpose: string;
  budget?: string;
  company?: string;
  roleInterest?: string;
};

// Dynamic Zod Schema based on audience type
const createFormSchema = (audienceType: string) => {
  const baseSchema = {
    audienceType: z
      .enum(["recruiter", "hiring-manager", "client", "other"] as const, {
        message: "Please select an option",
      })
      .optional(),
    budget: z.string().optional(),
    company: z.string().optional(),
    email: z.string().min(1, "Email is required").email("Please enter a valid email"),
    message: z
      .string()
      .min(1, "Message is required")
      .min(10, "Message should be at least 10 characters")
      .max(500, "Message should not exceed 500 characters"),
    name: z.string().min(1, "Name is required"),
    purpose: z.string().min(1, "Purpose is required"),
    roleInterest: z.string().optional(),
  };

  // Add conditional validation based on audience type
  if (audienceType === "client") {
    return z.object({
      ...baseSchema,
      budget: z.string().optional(),
      company: z.string().optional(),
    });
  } else if (audienceType === "recruiter" || audienceType === "hiring-manager") {
    return z.object({
      ...baseSchema,
      company: z.string().min(1, "Company name is required"),
      roleInterest: z.string().min(1, "Role/Position is required"),
    });
  }

  return z.object(baseSchema);
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      audienceType: undefined,
      budget: "",
      company: "",
      email: "",
      message: "",
      name: "",
      purpose: "",
      roleInterest: "",
    },
    resolver: zodResolver(createFormSchema("")),
  });

  const audienceType = form.watch("audienceType");

  const budgetOptions = [
    { label: "< $5K", value: "under-5k" },
    { label: "$5K - $10K", value: "5k-10k" },
    { label: "$10K - $25K", value: "10k-25k" },
    { label: "$25K+", value: "25k-plus" },
  ];

  const purposeOptions = [
    { label: "Full-time Role", value: "full-time" },
    { label: "Contract Work", value: "contract" },
    { label: "Collaboration", value: "collaboration" },
    { label: "New Project (Freelance)", value: "new-project" },
    { label: "Just saying hi!", value: "other" },
  ];

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);

    // Show success toast
    toast.success("Message Sent Successfully!", {
      description: `Thank you for reaching out! I've received your message and will get back to you within 24 hours.`,
      duration: 5000,
    });

    // Reset form
    form.reset();
  };

  const contactMethods = [
    {
      description: "mayur.dayal5k@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      link: "mailto:mayur.dayal5k@gmail.com",
    },
    {
      description: "+91-92xxxxxx30",
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      link: "tel:+91-92xxxxxx30",
    },
    {
      description: "Bengaluru, India",
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-dark overflow-hidden" id="contact">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I'm actively seeking new full-time opportunities in a frontend-focused role. If you're a
            recruiter, hiring manager, or just want to talk about AI-driven tech, I'd love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info & Social */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Methods */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-light">Contact Info</h3>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                    href={method.link}
                    key={method.label}
                    rel="noopener noreferrer"
                    target={method.link.startsWith("http") ? "_blank" : undefined}
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted mb-1">{method.label}</p>
                      <p className="text-light font-medium group-hover:text-accent transition-colors">
                        {method.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Book a Call CTA */}
            <div className="glass-effect rounded-2xl p-6 hover:bg-white/5 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-light">Prefer a Quick Call?</h4>
              </div>
              <p className="text-sm text-muted mb-4">
                Schedule a 30-minute intro call to discuss an opportunity or project directly.
              </p>
              <a
                className="w-full"
                href="https://calendly.com/yourusername/30min"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  className="w-full group border-primary/30 hover:bg-primary/10 hover:border-primary text-light"
                  variant="outline"
                >
                  <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Book a Call</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl p-6 hover:bg-white/5 transition-all duration-300">
              <h4 className="text-light font-semibold mb-4">Connect on Social</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    aria-label={social.label}
                    className="group p-3 glass-effect hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110 flex-1 flex items-center justify-center"
                    href={social.href}
                    key={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-muted group-hover:text-primary transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Send className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-light">Send a Message</h3>
              </div>

              <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                  {/* Audience Type Radio Group */}
                  <FormField
                    control={form.control}
                    name="audienceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-light">
                          I'm a... <span className="text-accent">*</span>
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <div>
                              <RadioGroupItem
                                className="peer sr-only"
                                id="recruiter"
                                value="recruiter"
                              />
                              <Label
                                className="flex flex-col items-center justify-center rounded-xl border-2 border-white/10 bg-dark-secondary p-4 hover:bg-white/5 hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all duration-300"
                                htmlFor="recruiter"
                              >
                                <Users className="mb-2 h-5 w-5 text-muted peer-data-[state=checked]:text-primary" />
                                <span className="text-sm font-medium text-light">Recruiter</span>
                              </Label>
                            </div>
                            <div>
                              <RadioGroupItem
                                className="peer sr-only"
                                id="hiring-manager"
                                value="hiring-manager"
                              />
                              <Label
                                className="flex flex-col items-center justify-center rounded-xl border-2 border-white/10 bg-dark-secondary p-4 hover:bg-white/5 hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all duration-300"
                                htmlFor="hiring-manager"
                              >
                                <Briefcase className="mb-2 h-5 w-5 text-muted" />
                                <span className="text-sm font-medium text-light">
                                  Hiring Manager
                                </span>
                              </Label>
                            </div>
                            <div>
                              <RadioGroupItem className="peer sr-only" id="client" value="client" />
                              <Label
                                className="flex flex-col items-center justify-center rounded-xl border-2 border-white/10 bg-dark-secondary p-4 hover:bg-white/5 hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all duration-300"
                                htmlFor="client"
                              >
                                <Sparkles className="mb-2 h-5 w-5 text-muted" />
                                <span className="text-sm font-medium text-light">Client</span>
                              </Label>
                            </div>
                            <div>
                              <RadioGroupItem className="peer sr-only" id="other" value="other" />
                              <Label
                                className="flex flex-col items-center justify-center rounded-xl border-2 border-white/10 bg-dark-secondary p-4 hover:bg-white/5 hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all duration-300"
                                htmlFor="other"
                              >
                                <MessageSquare className="mb-2 h-5 w-5 text-muted" />
                                <span className="text-sm font-medium text-light">Other</span>
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-sm text-red-500 animate-fadeIn" />
                      </FormItem>
                    )}
                  />

                  {/* Purpose Select */}
                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-light">
                          Purpose <span className="text-accent">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-xl text-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
                              <SelectValue placeholder="Select purpose of contact" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-dark-secondary border border-white/10 text-light">
                            {purposeOptions.map((option) => (
                              <SelectItem
                                className="hover:bg-white/5 focus:bg-white/5 cursor-pointer"
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-sm text-red-500 animate-fadeIn" />
                      </FormItem>
                    )}
                  />

                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-light">
                          Full Name <span className="text-accent">*</span>
                        </FormLabel>
                        <FormControl>
                          <div
                            className={`relative transition-all duration-300 ${
                              focusedField === "name" ? "scale-[1.01]" : ""
                            }`}
                          >
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-xl text-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                              onBlur={() => {
                                setFocusedField(null);
                                field.onBlur();
                              }}
                              onFocus={() => setFocusedField("name")}
                            />
                            {focusedField === "name" && !form.formState.errors.name && (
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm text-red-500 animate-fadeIn" />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-light">
                          Email Address <span className="text-accent">*</span>
                        </FormLabel>
                        <FormControl>
                          <div
                            className={`relative transition-all duration-300 ${
                              focusedField === "email" ? "scale-[1.01]" : ""
                            }`}
                          >
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                              className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-xl text-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                              onBlur={() => {
                                setFocusedField(null);
                                field.onBlur();
                              }}
                              onFocus={() => setFocusedField("email")}
                            />
                            {focusedField === "email" && !form.formState.errors.email && (
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm text-red-500 animate-fadeIn" />
                      </FormItem>
                    )}
                  />

                  {/* Conditional Fields for Recruiters/Hiring Managers */}
                  {(audienceType === "recruiter" || audienceType === "hiring-manager") && (
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Company Field - Required */}
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-light">
                              Company Name <span className="text-accent">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Company"
                                {...field}
                                className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-xl text-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                              />
                            </FormControl>
                            <FormMessage className="text-sm text-red-500 animate-fadeIn" />
                          </FormItem>
                        )}
                      />

                      {/* Role/Position Field */}
                      <FormField
                        control={form.control}
                        name="roleInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-light">
                              Role/Position <span className="text-accent">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Frontend Developer"
                                {...field}
                                className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-xl text-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                              />
                            </FormControl>
                            <FormMessage className="text-sm text-red-500 animate-fadeIn" />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* Conditional Fields for Clients */}
                  {audienceType === "client" && (
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Company Field - Optional */}
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-light">
                              Company <span className="text-muted text-xs">(Optional)</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Company"
                                {...field}
                                className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-xl text-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Budget Field */}
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-light">
                              Project Budget <span className="text-muted text-xs">(Optional)</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-xl text-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-dark-secondary border border-white/10 text-light">
                                {budgetOptions.map((option) => (
                                  <SelectItem
                                    className="hover:bg-white/5 focus:bg-white/5 cursor-pointer"
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-light">
                          Message <span className="text-accent">*</span>
                        </FormLabel>
                        <FormControl>
                          <div
                            className={`relative transition-all duration-300 ${
                              focusedField === "message" ? "scale-[1.01]" : ""
                            }`}
                          >
                            <Textarea
                              autoComplete="off"
                              maxLength={500}
                              placeholder="Please let me know about the role, your company, or just say hello... I'm excited to connect!"
                              rows={5}
                              {...field}
                              className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-xl text-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                              onBlur={() => {
                                setFocusedField(null);
                                field.onBlur();
                              }}
                              onFocus={() => setFocusedField("message")}
                            />
                            <div className="absolute bottom-3 right-3 text-xs text-muted">
                              {field.value?.length || 0} / 500
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm text-red-500 animate-fadeIn" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    className={`group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                      !isSubmitting ? "glow-effect" : ""
                    }`}
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted text-center">
                    I typically respond within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
