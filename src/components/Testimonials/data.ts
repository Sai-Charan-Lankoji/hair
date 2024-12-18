interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Pallavi Nigam',
    date: '2024-08-02',
    rating: 5,
    comment: 'Looks very real and of good quality. Seems where the clip is on can be thinner to look seamless for people with thin hair. Wish they had customizable hair textures too',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Manmohans',
    date: '2024-09-15',
    rating: 5,
    comment: 'Miracle I have been waiting for years now! So glad you exist HairOriginals, this is a great product finish, packaging & after sale service regarding queries about the care of the thick hair patch.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Ritik Gupta',
    date: '2023-11-06',
    rating: 5,
    comment: 'This actually made my day. I\'m so happy.. this product is so easy to use. it\'s a little shiny but it\'s worth it...',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'Ojasvin',
    date: '2024-03-20',
    rating: 5,
    comment: 'Loved the product Nice packaging, The extension was neatly packaged. It fitted perfectly on my scalp and looked so original. For all Those looking to buy extension .. must try this',
    image: 'https://images.unsplash.com/photo-1522337678412-b8ee7f1f77e4?auto=format&fit=crop&q=80'
  },
  {
    id: '5',
    name: 'Kanak',
    date: '2024-02-15',
    rating: 5,
    comment: 'I ordered a hair patch and I am extremely happy with the product. The quality is amazing and the customer service is excellent. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1522337650137-8b2c7369d3bf?auto=format&fit=crop&q=80'
  }
];