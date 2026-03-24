import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Mocking an API submission
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("Form submitted:", data);
        setIsSubmitted(true);
        reset();
        resolve();
      }, 800);
    });
  };

  return (
    <div className="w-full bg-white min-h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Section */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-black tracking-tight mb-4">Contact Us</h1>
              <p className="text-lg text-black/60 font-light">
                We welcome inquiries regarding our brands, facilities, and partnership opportunities.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-[#CC0000] pl-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black mb-2">Headquarters</h3>
                <p className="text-black/80 font-light">
                  Kick City LLC<br />
                  McKinney, TX<br />
                  Collin County, North Texas
                </p>
              </div>

              <div className="border-l-2 border-[#CC0000] pl-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black mb-2">Response Time</h3>
                <p className="text-black/80 font-light">
                  Our administrative team reviews all inquiries and will respond within 2 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-[#C9B99A]/20 border border-black/5 p-8 md:p-12">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-16 h-16 bg-[#CC0000] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-black">Inquiry Received</h3>
                <p className="text-black/70 font-light">
                  Thank you for reaching out to Kick City LLC. We will review your message and respond shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 border-b border-black text-sm uppercase tracking-widest font-semibold pb-1 hover:text-[#CC0000] hover:border-[#CC0000]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-widest text-black">
                    Full Name
                  </label>
                  <input 
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-[#CC0000]' : 'border-black/20'} focus:outline-none focus:border-black transition-colors`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-[#CC0000] text-sm">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-widest text-black">
                    Email Address
                  </label>
                  <input 
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-[#CC0000]' : 'border-black/20'} focus:outline-none focus:border-black transition-colors`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-[#CC0000] text-sm">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-widest text-black">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    {...register("message")}
                    className={`w-full px-4 py-3 bg-white border ${errors.message ? 'border-[#CC0000]' : 'border-black/20'} focus:outline-none focus:border-black transition-colors resize-none`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-[#CC0000] text-sm">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#CC0000] text-white py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[#AA0000] disabled:bg-[#CC0000]/70 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
