/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface CardData {
  id: number;
  image: string;
  descriptionTitle?: string;
  description?: string;
}

interface CardSectionProps {
  sectionTitle: string;
  seeMoreLink: string;
  cards: CardData[];
}

const CardSection: React.FC<CardSectionProps> = ({
  sectionTitle,
  seeMoreLink,
  cards
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const formatDescription = (description: string) => {
    // Split the description at the bullet point
    const parts = description.split('•');
    if (parts.length >= 3) {
      const [date, time, venue] = parts;
      return (
        <>
          <div className="text-sm text-gray-900">{`${date.trim()} • ${time.trim()}`}</div>
          <div className="text-sm text-gray-500">{venue.trim()}</div>
        </>
      );
    }
    return <div className="text-sm text-gray-600">{description}</div>;
  };

  const slideLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => 
      prev < cards.length - 5 ? prev + 1 : prev
    );
  };

  return (
    <div className="w-full px-4 py-8">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{sectionTitle}</h2>
        <a 
          href={seeMoreLink}
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          See More
        </a>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        <div className="flex items-center">
          <button 
            onClick={slideLeft}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 absolute left-0 z-10"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 5)}%)`
              }}
            >
              {cards.map((card) => (
                <div 
                  key={card.id} 
                  className="w-full md:w-1/5 flex-shrink-0 px-2"
                >
                  <div className="space-y-3">
                    {/* Card with image only */}
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img
                          src={card.image}
                          alt="Event image"
                          className="object-cover w-full h-48 rounded-lg"
                        />
                      </CardContent>
                    </Card>
                    
                    {/* Event information section */}
                    <div className="space-y-1 px-1">
                      {card.descriptionTitle && (
                        <h3 className="font-bold text-base line-clamp-1">
                          {card.descriptionTitle}
                        </h3>
                      )}
                      {card.description && (
                        <div className="space-y-0.5">
                          {formatDescription(card.description)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={slideRight}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 absolute right-0 z-10"
            disabled={currentIndex >= cards.length - 5}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;