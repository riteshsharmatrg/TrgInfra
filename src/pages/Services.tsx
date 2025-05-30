
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Users, MapPin, Shield } from "lucide-react";

const Services = () => {
  const regulatoryBodies = [
    {
      id: "tcp",
      name: "TCP",
      fullName: "Town and Country Planning",
      icon: MapPin,
      services: [
        "Change of Land Use (CLU) Applications",
        "CLU Extensions & Modifications", 
        "Layout Plan Approvals",
        "Zoning Clearances",
        "Development Plan Submissions"
      ]
    },
    {
      id: "ulb", 
      name: "ULB",
      fullName: "Urban Local Bodies",
      icon: Users,
      services: [
        "Building Plan Approvals",
        "Completion Certificates",
        "Occupancy Certificates", 
        "Property Tax Assessments",
        "Municipal NOCs"
      ]
    },
    {
      id: "gmda",
      name: "GMDA", 
      fullName: "Gurugram Metropolitan Development Authority",
      icon: FileText,
      services: [
        "Layout Approvals",
        "External Development Charges",
        "Infrastructure Development Permissions",
        "Sector Development Clearances"
      ]
    },
    {
      id: "pwd",
      name: "PWD",
      fullName: "Public Works Department", 
      icon: FileText,
      services: [
        "Road Cutting Permissions",
        "Access Road Approvals",
        "Drainage Connection NOCs",
        "Highway Access Permits"
      ]
    },
    {
      id: "hsvp",
      name: "HSVP",
      fullName: "Haryana State Industrial & Infrastructure Development Corporation",
      icon: FileText,
      services: [
        "Industrial Plot Allotments",
        "Industrial Building Approvals", 
        "Infrastructure Development NOCs",
        "SEZ Related Clearances"
      ]
    },
    {
      id: "fire",
      name: "Fire Department",
      fullName: "Fire Safety Department",
      icon: Shield,
      services: [
        "Fire Safety NOCs",
        "Fire Scheme Approvals",
        "Emergency Exit Clearances",
        "Fire Equipment Compliance"
      ]
    },
    {
      id: "hspcb",
      name: "HSPCB", 
      fullName: "Haryana State Pollution Control Board",
      icon: FileText,
      services: [
        "Environmental Clearances",
        "Pollution NOCs",
        "Water & Air Quality Permissions",
        "Waste Management Approvals"
      ]
    },
    {
      id: "forest",
      name: "Forest Department",
      fullName: "Forest Department",
      icon: FileText,
      services: [
        "Tree Felling NOCs",
        "Forest Land Diversion",
        "Compensatory Afforestation",
        "Wildlife Clearances"
      ]
    },
    {
      id: "revenue",
      name: "Revenue Department", 
      fullName: "Revenue Department",
      icon: FileText,
      services: [
        "Mutation of Land Records",
        "Conversion of Agricultural Land",
        "Land Title Verifications",
        "Revenue Record Updates"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-trg-blue/90 to-trg-blue/70 py-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Our Services
          </h1>
          <p className="font-open-sans text-xl max-w-3xl mx-auto">
            Comprehensive regulatory solutions across all government departments in Haryana
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-trg-blue mb-4">
              Regulatory Bodies We Serve
            </h2>
            <p className="font-open-sans text-lg text-trg-charcoal max-w-3xl mx-auto">
              We maintain active relationships with all major regulatory bodies in Haryana, 
              ensuring smooth and efficient processing of your applications
            </p>
          </div>

          <Tabs defaultValue="tcp" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 mb-8 h-auto p-1">
              {regulatoryBodies.map((body) => (
                <TabsTrigger 
                  key={body.id} 
                  value={body.id}
                  className="text-xs md:text-sm font-montserrat font-medium data-[state=active]:bg-trg-orange data-[state=active]:text-white"
                >
                  {body.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {regulatoryBodies.map((body) => (
              <TabsContent key={body.id} value={body.id}>
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-trg-grey">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-trg-orange rounded-full flex items-center justify-center">
                        <body.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <CardTitle className="font-montserrat text-2xl text-trg-blue">
                          {body.name}
                        </CardTitle>
                        <p className="font-open-sans text-trg-charcoal">
                          {body.fullName}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="font-montserrat font-semibold text-lg text-trg-blue mb-4">
                      Services We Provide:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {body.services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-trg-orange rounded-full"></div>
                          <span className="font-open-sans text-trg-charcoal">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-trg-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-trg-blue mb-4">
              Service Categories
            </h2>
            <p className="font-open-sans text-lg text-trg-charcoal max-w-2xl mx-auto">
              Our comprehensive service portfolio covers every aspect of land development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-trg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-trg-blue" size={32} />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-3">
                  Planning Approvals
                </h3>
                <p className="font-open-sans text-trg-charcoal text-sm">
                  CLU, Layout Plans, Zoning Clearances, Development Permissions
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-trg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-trg-orange" size={32} />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-3">
                  Building Approvals
                </h3>
                <p className="font-open-sans text-trg-charcoal text-sm">
                  Building Plans, Completion Certificates, Occupancy Permits
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-trg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-trg-blue" size={32} />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-3">
                  Safety & Environment
                </h3>
                <p className="font-open-sans text-trg-charcoal text-sm">
                  Fire NOCs, Environmental Clearances, Pollution Permits
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-trg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-trg-orange" size={32} />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-3">
                  Infrastructure
                </h3>
                <p className="font-open-sans text-trg-charcoal text-sm">
                  Road Access, Utilities Connection, Infrastructure Development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
