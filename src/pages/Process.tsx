
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, FileText, ArrowDown, CheckCircle } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We begin with a comprehensive consultation to understand your project requirements, assess regulatory needs, and provide expert guidance on the approval pathway.",
      icon: Users,
      details: [
        "Project requirement analysis",
        "Regulatory landscape assessment", 
        "Timeline and cost estimation",
        "Strategic planning session"
      ]
    },
    {
      step: 2,
      title: "Documentation & Liaison",
      description: "Our team prepares all necessary documentation, coordinates with relevant government departments, and ensures all paperwork meets regulatory standards.",
      icon: FileText,
      details: [
        "Complete documentation preparation",
        "Government department coordination",
        "Compliance verification",
        "Application formatting and submission"
      ]
    },
    {
      step: 3,
      title: "Submission & Follow-up",
      description: "We handle the submission process across all relevant departments and maintain regular follow-up to track application progress and address any queries.",
      icon: ArrowDown,
      details: [
        "Multi-department application submission",
        "Regular progress tracking",
        "Query resolution and clarifications", 
        "Status updates to clients"
      ]
    },
    {
      step: 4,
      title: "Approval Acquisition",
      description: "Through our established relationships and expertise, we ensure timely approval acquisition while maintaining full compliance with all regulations.",
      icon: CheckCircle,
      details: [
        "Approval processing facilitation",
        "Compliance verification",
        "Certificate collection and delivery",
        "Post-approval guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-trg-blue/90 to-trg-blue/70 py-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Our Process
          </h1>
          <p className="font-open-sans text-xl max-w-3xl mx-auto">
            A streamlined, efficient approach to securing your regulatory approvals
          </p>
        </div>
      </section>

      {/* Process Highlight */}
      <section className="py-16 bg-trg-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-trg-blue mb-6">
            We Handle the Complexity So You Can Focus on Development
          </h2>
          <p className="font-open-sans text-lg text-trg-charcoal max-w-4xl mx-auto leading-relaxed">
            Our proven 4-step process ensures that every regulatory requirement is met efficiently and effectively. 
            With years of experience and strong government relationships, we transform complex bureaucratic processes 
            into smooth, predictable pathways to approval.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {processSteps.map((process, index) => (
              <div key={process.step} className="mb-12 last:mb-0">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Step Number and Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div className="w-16 h-16 bg-trg-orange rounded-full flex items-center justify-center text-white font-montserrat font-bold text-xl">
                        {process.step}
                      </div>
                      <div className="w-12 h-12 bg-trg-blue/10 rounded-full flex items-center justify-center lg:hidden">
                        <process.icon className="text-trg-blue" size={24} />
                      </div>
                    </div>
                    {/* Connector Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block w-0.5 h-24 bg-trg-grey ml-8 mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-montserrat font-bold text-2xl text-trg-blue">
                            {process.title}
                          </h3>
                          <div className="hidden lg:block w-12 h-12 bg-trg-blue/10 rounded-full flex items-center justify-center">
                            <process.icon className="text-trg-blue" size={24} />
                          </div>
                        </div>
                        <p className="font-open-sans text-lg text-trg-charcoal mb-6 leading-relaxed">
                          {process.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {process.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-trg-orange rounded-full"></div>
                              <span className="font-open-sans text-trg-charcoal">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-trg-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-trg-blue mb-4">
              Benefits of Our Process
            </h2>
            <p className="font-open-sans text-lg text-trg-charcoal max-w-2xl mx-auto">
              Why developers choose TRG Infra Planning for their regulatory needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-3">
                  Time Efficiency
                </h3>
                <p className="font-open-sans text-trg-charcoal">
                  Our established relationships and streamlined processes significantly reduce approval timelines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-3">
                  Complete Transparency
                </h3>
                <p className="font-open-sans text-trg-charcoal">
                  Regular updates and clear communication keep you informed at every stage of the process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-3">
                  Guaranteed Compliance
                </h3>
                <p className="font-open-sans text-trg-charcoal">
                  All approvals are obtained with full regulatory compliance, eliminating future complications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-trg-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-6">
            Ready to Start Your Approval Process?
          </h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through every step of the regulatory approval process
          </p>
          <Link to="/consultation">
            <Button size="lg" className="bg-trg-orange hover:bg-trg-orange/90 text-white font-montserrat font-semibold px-8 py-4 text-lg">
              Start Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
