
import React from 'react';
import CardSection from '@/components/Card';


interface CardData {
  id: number;
  image: string;
  description: string;
  descriptionTitle: string;
}

export default function Trending() {

    const featuredCards: CardData[] = [
        {
          id: 1,
          image: "/trending/1.webp",
          descriptionTitle: "Cigarettes After Sex",
          description: "Sat, Mar 9 • 8:30 PM • JIO World Garden"
        },
        {
          id: 2,
          image: "/trending/2.webp",
          descriptionTitle: "Arijit Singh Live in Concert",
          description: "Sun, Mar 17 • 7:00 PM • DY Patil Stadium"
        },
        {
          id: 3,
          image: "/trending/3.webp",
          descriptionTitle: "Coldplay Music of The Spheres",
          description: "Fri, Mar 22 • 6:30 PM • DY Patil Stadium"
        },
        {
          id: 4,
          image: "/trending/cricket.webp",
          descriptionTitle: "India vs England - 5th Test Match",
          description: "Thu, Mar 7 • 9:30 AM • Dharamshala Stadium"
        },
        {
          id: 5,
          image: "/trending/4.webp",
          descriptionTitle: "Arijit Singh Tere Hawaale Tour",
          description: "Sat, Mar 30 • 7:30 PM • Mahalaxmi Race Course"
        },
        {
          id: 6,
          image: "/trending/5.webp",
          descriptionTitle: '"HAAZRI" A.R.Rahman Live',
          description: "Sun, Apr 14 • 8:00 PM • MMRDA Grounds"
        },
        {
          id: 7,
          image: "/trending/6.webp",
          descriptionTitle: "Prateek Kuhad India Tour",
          description: "Sat, Mar 16 • 7:00 PM • Jio World Convention"
        }
      ];

  return (
    <div className="container mx-auto">
      <CardSection
        sectionTitle="Trending Events near Mumbai"
        seeMoreLink=""
        cards={featuredCards}
      />
    </div>
  );
}
