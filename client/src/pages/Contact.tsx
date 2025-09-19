
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const BASE_URL = 'https://trginfra.onrender.com'
// const BASE_URL = 'http://localhost:5000'



const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_URL}/api/v1/contactUs/contact`, formData);

      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative bg-gradient-to-r from-trg-blue/90 to-trg-blue/70 py-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white backdrop-blur-sm bg-black/40">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Contact Us
          </h1>
          <p className="font-open-sans text-xl max-w-3xl mx-auto">
            Get in touch with our regulatory experts for personalized consultation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-trg-grey">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-montserrat text-2xl text-trg-blue">
                    Send Us a Message
                  </CardTitle>
                  <p className="font-open-sans text-trg-charcoal">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-open-sans font-medium text-trg-charcoal mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-open-sans font-medium text-trg-charcoal mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-open-sans font-medium text-trg-charcoal mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-open-sans font-medium text-trg-charcoal mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[120px]"
                        placeholder="Tell us about your project and regulatory requirements"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-trg-orange hover:bg-trg-orange/90 text-white font-montserrat font-semibold py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trg-orange rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-trg-blue mb-2">
                        Phone Numbers
                      </h3>
                      <div className="space-y-1 font-open-sans text-trg-charcoal">
                        <div>+91 9999105055</div>
                        <div>+91 9990105056</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trg-blue rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-trg-blue mb-2">
                        Email Address
                      </h3>
                      <div className="font-open-sans text-trg-charcoal">
                        trg.infra@outlook.com
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trg-orange rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-trg-blue mb-2">
                        Office Address
                      </h3>
                      <div className="font-open-sans text-trg-charcoal leading-relaxed">
                        401A, 4th Floor,<br />
                        Good Earth City Centre,<br />
                        Sector 50, Gurugram,<br />
                        Haryana 122018
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-trg-blue mb-4">
                    Our Location
                  </h3>
                  <div className="w-full h-64 bg-trg-grey rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="text-trg-blue mx-auto mb-2" size={32} />
                      <p className="font-open-sans text-trg-charcoal">
                        Interactive map would be embedded here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
