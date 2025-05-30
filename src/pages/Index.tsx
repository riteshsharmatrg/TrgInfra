import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, FileText, Users, Phone, Mail, Home } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "CLU & Extension",
      description: "Change of Land Use approvals and extensions",
      icon: FileText
    },
    {
      title: "Building Plan Approval",
      description: "Complete building plan submission and approval",
      icon: Home
    },
    {
      title: "Fire NOCs",
      description: "Fire safety clearances and NOCs",
      icon: FileText
    },
    {
      title: "Tree Felling NOC",
      description: "Environmental clearances for development",
      icon: FileText
    }
  ];

  const whyChooseUs = [
    {
      title: "End-to-End Solutions",
      description: "Complete regulatory support from start to finish"
    },
    {
      title: "Timely Deliverables",
      description: "We ensure all approvals are processed efficiently"
    },
    {
      title: "Experienced Team",
      description: "Years of expertise in Haryana's regulatory landscape"
    },
    {
      title: "Full Regulatory Compliance",
      description: "100% compliant with all government requirements"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-trg-blue/90 to-trg-blue/70 min-h-[600px] flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 animate-fade-in">
            Your Trusted Partner in<br />
            <span className="text-trg-orange">Land Development</span><br />
            & Regulatory Approvals in Haryana
          </h1>
          <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Simplifying complex regulatory processes with expert consultation and strategic guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-trg-orange hover:bg-trg-orange/90 text-white font-montserrat font-semibold px-8 py-4 text-lg">
                Get Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-trg-blue font-montserrat font-semibold px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white" size={24} />
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-trg-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-trg-blue mb-6">
            About TRG Infra Planning LLP
          </h2>
          <p className="font-open-sans text-lg text-trg-charcoal max-w-4xl mx-auto leading-relaxed">
            TRG Infra Planning LLP is a leading consultation firm specializing in land development and regulatory approvals across Haryana. 
            With our deep understanding of local regulations and strong relationships with government bodies, we streamline the complex 
            approval process for developers, ensuring timely and compliant project execution.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-trg-blue mb-4">
              Our Services
            </h2>
            <p className="font-open-sans text-lg text-trg-charcoal max-w-2xl mx-auto">
              Comprehensive regulatory solutions for all your land development needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-trg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-trg-orange" size={32} />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-2">
                    {service.title}
                  </h3>
                  <p className="font-open-sans text-trg-charcoal">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button className="bg-trg-blue hover:bg-trg-blue/90 text-white font-montserrat font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-trg-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-trg-blue mb-4">
              Why Choose TRG Infra Planning
            </h2>
            <p className="font-open-sans text-lg text-trg-charcoal max-w-2xl mx-auto">
              We bring expertise, efficiency, and reliability to every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-3">
                    {item.title}
                  </h3>
                  <p className="font-open-sans text-trg-charcoal">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-12 bg-trg-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="font-open-sans text-lg opacity-90">
                Get expert consultation and fast-track your approvals today
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2 text-white">
                <Phone size={20} className="text-trg-orange" />
                <span className="font-open-sans">+91 9999105055</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Mail size={20} className="text-trg-orange" />
                <span className="font-open-sans">trg.infra@outlook.com</span>
              </div>
              <Link to="/consultation">
                <Button className="bg-trg-orange hover:bg-trg-orange/90 text-white font-montserrat font-semibold">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
