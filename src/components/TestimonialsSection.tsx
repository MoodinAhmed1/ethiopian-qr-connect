
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "./ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Abebe Kebede",
    position: "Small Business Owner",
    company: "Addis Café",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    testimonial:
      "EthioQRConnect transformed how my café connects with customers. The QR cards made it easy for people to find our menu and contact us. Highly recommend!",
    rating: 5,
  },
  {
    name: "Tigist Alemu",
    position: "Independent Consultant",
    company: "TConsult",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    testimonial:
      "As a consultant, having a professional digital presence is crucial. Their design perfectly blends Ethiopian elements with modern professionalism. Worth every birr!",
    rating: 5,
  },
  {
    name: "Dawit Mekonnen",
    position: "CEO",
    company: "Ethio Solutions",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    testimonial:
      "The gold package gave us everything we needed to establish our brand. The TikTok promotion brought in several new clients within the first month.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="section-container">
      <AnimatedSection animation="fade-in">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-ethiopia-red font-semibold">
            Testimonials
          </h2>
          <div className="h-1 w-24 bg-ethiopia-gold mx-auto mt-1 mb-3"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-ethiopia-brown">
            What Our Clients Say
          </h3>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection
            key={index}
            animation="fade-in"
            delay={index * 100}
          >
            <Card className="h-full bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-ethiopia-brown">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 flex-grow">
                  "{testimonial.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
