
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Globe, QrCode } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import { Card } from "@/components/ui/card";

interface BusinessCard {
  id: number;
  name: string;
  title: string;
  company: string;
  design: {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
  };
}

const sampleCards: BusinessCard[] = [
  {
    id: 1,
    name: "Abebe Kebede",
    title: "Marketing Director",
    company: "Ethiopian Coffee Exports",
    design: {
      primaryColor: "bg-ethiopia-red",
      secondaryColor: "bg-ethiopia-gold",
      textColor: "text-white"
    }
  },
  {
    id: 2,
    name: "Sara Tekle",
    title: "Lead Developer",
    company: "Addis Tech Solutions",
    design: {
      primaryColor: "bg-ethiopia-brown",
      secondaryColor: "bg-ethiopia-cream",
      textColor: "text-ethiopia-light"
    }
  },
  {
    id: 3,
    name: "Dawit Mengistu",
    title: "Financial Consultant",
    company: "Habesha Finance Group",
    design: {
      primaryColor: "bg-ethiopia-gold", 
      secondaryColor: "bg-ethiopia-red",
      textColor: "text-ethiopia-brown"
    }
  },
  {
    id: 4,
    name: "Tigist Alemu",
    title: "Creative Director",
    company: "Addis Design Studio",
    design: {
      primaryColor: "bg-ethiopia-cream",
      secondaryColor: "bg-ethiopia-brown",
      textColor: "text-ethiopia-red"
    }
  }
];

const BusinessCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full">
      <Carousel className="w-full max-w-md mx-auto">
        <CarouselContent>
          {sampleCards.map((card) => (
            <CarouselItem key={card.id}>
              <div className="p-1">
                <Card className={cn(
                  "rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover-lift",
                  card.design.primaryColor
                )}>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className={cn("space-y-1", card.design.textColor)}>
                        <h3 className="font-bold text-xl">{card.name}</h3>
                        <p className="text-sm opacity-90">{card.title}</p>
                        <p className="text-xs opacity-75">{card.company}</p>
                      </div>
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        card.design.secondaryColor
                      )}>
                        <QrCode className={cn("w-8 h-8", card.design.textColor)} />
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className={cn("w-4 h-4", card.design.textColor)} />
                        <span className={cn("text-xs", card.design.textColor)}>ethioconnect.biz/{card.name.toLowerCase().replace(' ', '')}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-none bg-white/80 hover:bg-white" />
        <CarouselNext className="right-0 border-none bg-white/80 hover:bg-white" />
      </Carousel>
    </div>
  );
};

export default BusinessCardCarousel;
