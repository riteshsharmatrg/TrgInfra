
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-trg-blue/90 to-trg-blue/70 py-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            About TRG Infra Planning LLP
          </h1>
          <p className="font-open-sans text-xl max-w-3xl mx-auto">
            Your trusted partner in navigating the complex landscape of land development and regulatory approvals
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-trg-blue mb-6">
                Company Overview
              </h2>
              <div className="space-y-4 font-open-sans text-lg text-trg-charcoal leading-relaxed">
                <p>
                  TRG Infra Planning LLP stands as a premier consultation firm in Haryana, specializing in land development 
                  and regulatory approvals. With years of dedicated service in the region, we have built an unparalleled 
                  reputation for excellence in navigating the complex regulatory landscape.
                </p>
                <p>
                  Our comprehensive understanding of local regulations, combined with strong relationships across various 
                  government departments, enables us to provide seamless solutions for developers, builders, and investors. 
                  We pride ourselves on transforming complex bureaucratic processes into streamlined, efficient pathways 
                  to approval.
                </p>
                <p>
                  From Change of Land Use (CLU) applications to Fire NOCs, from Building Plan approvals to environmental 
                  clearances, TRG Infra Planning LLP serves as your single point of contact for all regulatory requirements 
                  in Haryana's development sector.
                </p>
              </div>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80')`
              }}
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-trg-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-trg-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-white" size={40} />
            </div>
            <h2 className="font-montserrat font-bold text-3xl text-trg-blue mb-6">
              Our Mission
            </h2>
            <p className="font-open-sans text-xl text-trg-charcoal leading-relaxed">
              "To simplify and expedite the land development process by offering expert consultation and strategic guidance, 
              ensuring our clients achieve their development goals with full regulatory compliance, minimal delays, and maximum efficiency."
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-trg-blue mb-4">
              Our Core Values
            </h2>
            <p className="font-open-sans text-lg text-trg-charcoal max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-trg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-4">
                  Excellence
                </h3>
                <p className="font-open-sans text-trg-charcoal">
                  We strive for excellence in every project, ensuring the highest standards of service and results for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-trg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-4">
                  Integrity
                </h3>
                <p className="font-open-sans text-trg-charcoal">
                  We operate with complete transparency and honesty, building trust through ethical practices and reliable service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-trg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-trg-blue mb-4">
                  Results
                </h3>
                <p className="font-open-sans text-trg-charcoal">
                  We are committed to delivering tangible results, ensuring every approval is obtained efficiently and effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
