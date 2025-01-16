import React from 'react';
import CardSection from '@/components/Card';

interface CardData {
  id: number;
  image: string;
  descriptionTitle: string;
  description?: string;
}

export default function Concerts() {
    const concertCards: CardData[] = [
        {
          id: 1,
          image: "/trending/2.webp",
          descriptionTitle: "Arijit Singh"
        },
        {
          id: 2,
          image: "/trending/5.webp",
          descriptionTitle: "A.R. Rahman"
        },
        {
          id: 3,
          image: "/trending/1.webp",
          descriptionTitle: "Cigarettes After Sex"
        },
        {
          id: 4,
          image: "/trending/6.webp",
          descriptionTitle: "Prateek Kuhad"
        },
        {
          id: 5,
          image: "/trending/3.webp",
          descriptionTitle: "Coldplay"
        },
        {
          id: 6,
          image: "/trending/4.webp",
          descriptionTitle: "Divine"
        },
        {
          id: 7,
          image: "/trending/2.webp",
          descriptionTitle: "Taylor Swift"
        }
    ];

  return (
    <div className="container mx-auto">
      <CardSection
        sectionTitle="Popular Musicians"
        seeMoreLink=""
        cards={concertCards}
      />
    </div>
  );
}