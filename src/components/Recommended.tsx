import React from 'react';
import CardSection from '@/components/Card';

interface CardData {
  id: number;
  image: string;
  descriptionTitle: string;
  description?: string; // Made optional since we won't use it
}

export default function Recommend() {
    const recommendedCards: CardData[] = [
        {
          id: 1,
          image: "/trending/1.webp",
          descriptionTitle: "Cigarettes After Sex"
        },
        {
          id: 2,
          image: "/trending/2.webp",
          descriptionTitle: "Arijit Singh Live in Concert"
        },
        {
          id: 3,
          image: "/trending/3.webp",
          descriptionTitle: "Coldplay Music of The Spheres"
        },
        {
          id: 4,
          image: "/trending/cricket.webp",
          descriptionTitle: "India vs England - 5th Test Match"
        },
        {
          id: 5,
          image: "/trending/4.webp",
          descriptionTitle: "Arijit Singh Tere Hawaale Tour"
        },
        {
          id: 6,
          image: "/trending/5.webp",
          descriptionTitle: '"HAAZRI" A.R.Rahman Live'
        },
        {
          id: 7,
          image: "/trending/6.webp",
          descriptionTitle: "Prateek Kuhad India Tour"
        }
    ];

  return (
    <div className="container mx-auto">
      <CardSection
        sectionTitle="Recommended for you"
        seeMoreLink=""
        cards={recommendedCards}
      />
    </div>
  );
}
