
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    location: "",
    timeline: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Submitted!",
      description: "Our experts will contact you within 2 hours to discuss your project.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      location: "",
      timeline: "",
      description: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const benefits = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Expert consultation within 2 hours of request"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced regulatory specialists"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "100% success rate in approval acquisitions"
    },
    {
      icon: CheckCircle,
      title: "Complete Solution",
      description: "End-to-end regulatory support"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-trg-blue/90 to-trg-blue/70 py-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Request a Consultation
          </h1>
          <p className="font-open-sans text-xl max-w-3xl mx-auto">
            Get expert guidance on your regulatory requirements and fast-track your approvals
          </p>
        </div>
      </section>

      {/* Consultation Form & Benefits */}
      <section className="py-16 bg-trg-grey">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-montserrat text-2xl text-trg-blue">
                    Project Consultation Form
                  </CardTitle>
                  <p className="font-open-sans text-trg-charcoal">
                    Provide your project details and our experts will contact you with a customized solution
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block font-open-sans font-medium text-trg-charcoal mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-open-sans font-medium text-trg-charcoal mb-2">
                          Project Type *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange("projectType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential Development</SelectItem>
                            <SelectItem value="commercial">Commercial Development</SelectItem>
                            <SelectItem value="industrial">Industrial Development</SelectItem>
                            <SelectItem value="institutional">Institutional Development</SelectItem>
                            <SelectItem value="mixed">Mixed-Use Development</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="location" className="block font-open-sans font-medium text-trg-charcoal mb-2">
                          Project Location *
                        </label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          placeholder="City/District in Haryana"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-open-sans font-medium text-trg-charcoal mb-2">
                        Timeline *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need approvals?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                          <SelectItem value="urgent">Urgent (1-3 months)</SelectItem>
                          <SelectItem value="planned">Planned (3-6 months)</SelectItem>
                          <SelectItem value="future">Future (6+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block font-open-sans font-medium text-trg-charcoal mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="min-h-[120px]"
                        placeholder="Describe your project and specific regulatory requirements"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-trg-orange hover:bg-trg-orange/90 text-white font-montserrat font-semibold py-3"
                    >
                      Request Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-trg-blue text-white">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-4">
                    Why Choose Our Consultation?
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-trg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <benefit.icon size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-semibold text-sm mb-1">
                            {benefit.title}
                          </h4>
                          <p className="font-open-sans text-xs text-white/90">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-trg-blue mb-4">
                    What Happens Next?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-trg-orange text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <p className="font-open-sans text-sm text-trg-charcoal">
                        Our expert will review your requirements
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-trg-orange text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <p className="font-open-sans text-sm text-trg-charcoal">
                        You'll receive a call within 2 hours
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-trg-orange text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <p className="font-open-sans text-sm text-trg-charcoal">
                        We'll provide a customized action plan
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

export default Consultation;
