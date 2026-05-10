export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

export interface Package {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  featured?: boolean
  popular?: boolean
}

export interface Testimonial {
  id: string
  name: string
  quote: string
  image: string
  weddingType: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
  type: 'image' | 'video'
}

// Somali Wedding Services
export const services: Service[] = [
  {
    id: 'henna-night',
    title: 'Henna Night (Qorax Cad)',
    description: 'Traditional henna ceremony with professional artists creating beautiful designs for the bride and guests.',
    icon: 'Sparkles',
    image: 'https://images.pexels.com/photos/10818111/pexels-photo-10818111.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'dowry-consultation',
    title: 'Dowry Consultation (Maher)',
    description: 'Expert guidance on traditional dowry arrangements with cultural sensitivity and modern solutions.',
    icon: 'Heart',
    image: 'https://images.pexels.com/photos-2/13895241/pexels-photo-13895241-free.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'wedding-decoration',
    title: 'Somali Wedding Decoration',
    description: 'Magnificent gold and red themed decorations blending Somali colors with luxury elegance.',
    icon: 'Sparkles',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'hall-decoration',
    title: 'Hall Transformation',
    description: 'Stunning hall decorations featuring traditional Somali patterns and modern luxury.',
    icon: 'Building2',
    image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'photography',
    title: 'Wedding Photography',
    description: 'Expert photographers capturing your special day with cultural expertise and artistic vision.',
    icon: 'Camera',
    image: 'https://images.pexels.com/photos/13895241/pexels-photo-13895241.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'videography',
    title: 'Cinematic Videography',
    description: 'Beautiful wedding films capturing every emotional moment of your celebration.',
    icon: 'Video',
    image: 'https://images.pexels.com/photos/3665416/pexels-photo-3665416.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'daanto',
    title: 'Daanto & Jileeco',
    description: 'Traditional Somali drumming and poetry recitals performed by expert cultural performers.',
    icon: 'Music',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'singing',
    title: 'Somali Singers',
    description: 'Professional Somali vocalists to entertain your guests with traditional and modern songs.',
    icon: 'Mic2',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'cultural-dancers',
    title: 'Cultural Dancers',
    description: 'Traditional Somali dancers bringing authentic entertainment to your celebration.',
    icon: 'Mic2',
    image: 'https://images.pexels.com/photos/3556669/pexels-photo-3556669.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'dj-services',
    title: 'Somali DJ Services',
    description: 'Professional DJs specializing in Somali music and international hits for all guests.',
    icon: 'Music',
    image: 'https://images.pexels.com/photos/1493225457124-a3eb161ffa5f/pexels-photo-1493225457124.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'wedding-cakes',
    title: 'Somali Wedding Cakes',
    description: 'Beautiful multi-tier cakes decorated with traditional patterns and gold accents.',
    icon: 'Cake',
    image: 'https://images.pexels.com/photos/11376646/pexels-photo-11376646.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'protocol',
    title: 'Waqf & Protocol',
    description: 'Traditional wedding coordinator ensuring all cultural protocols are observed perfectly.',
    icon: 'ClipboardCheck',
    image: 'https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg?w=600&h=400&fit=crop',
  },
]

// Somali Wedding Packages
export const packages: Package[] = [
  {
    id: 'qurxin',
    name: 'Qurxin Package',
    price: 8500,
    description: 'Traditional Somali wedding essentials for a beautiful celebration',
    features: [
      'Henna Night decoration & services',
      'Wedding ceremony decoration',
      'Professional photography (8 hours)',
      'Videography highlight reel',
      'Somali DJ services (5 hours)',
      'Daanto & Jileeco performance',
      'Traditional floral arrangements',
      'Wedding coordinator',
      'Invitation design',
      'Guest management',
    ],
  },
  {
    id: 'dumid',
    name: 'Dumid Luxury',
    price: 15000,
    description: 'The complete traditional Somali luxury wedding experience',
    features: [
      'Everything in Qurxin Package',
      'Full hall decoration with gold & red theme',
      'Photography (full day)',
      'Cinematic videography',
      'Live Somali singer performance',
      'Cultural dance troupe',
      'Multi-tier Somali wedding cake',
      'Fireworks display',
      'Photo booth with prints',
      'Dedicated wedding planner',
      'Waqf protocol services',
    ],
    popular: true,
  },
  {
    id: 'caadi',
    name: 'Caadi VIP',
    price: 28000,
    description: 'The ultimate luxury Somali wedding celebration',
    features: [
      'Everything in Dumid Luxury',
      'Multi-day celebration coordination',
      'Premium venue styling',
      'Celebrity Somali DJ',
      'Multiple singer performances',
      'Full cultural dance troupe',
      'Custom bridal backdrop',
      'Luxury car decorations',
      'VIP guest services',
      'Complete protocol management',
      'Post-wedding photoshoot',
      'Honeymoon consultation',
    ],
    featured: true,
  },
]

// Somali Wedding Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ayan & Ibrahim',
    quote: 'XULASHO made our Qarxin and Walima truly magical. They understood our traditions and added their luxury touch. Our guests are still talking about the beautiful Daanto performance!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop',
    weddingType: 'Caadi VIP Wedding',
  },
  {
    id: '2',
    name: 'Liiban & Samatar',
    quote: 'From the Henna Night to the final ceremony, everything was perfect. The team respected our culture while delivering a dream wedding we never imagined possible.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=200&h=200&fit=crop',
    weddingType: 'Dumid Luxury Wedding',
  },
  {
    id: '3',
    name: 'Dekha & Abshir',
    quote: 'Our parents were so happy seeing our traditions honored while having a modern luxury celebration. Thank you XULASHO for understanding our heritage.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop',
    weddingType: 'Dumid Luxury Wedding',
  },
]

// Gallery Categories
export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?w=800&h=600&fit=crop',
    alt: 'Somali Gold & Red Decoration',
    category: 'Decoration',
    type: 'image',
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?w=800&h=600&fit=crop',
    alt: 'Luxury Hall Setup',
    category: 'Halls',
    type: 'image',
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/13895241/pexels-photo-13895241.jpeg?w=800&h=600&fit=crop',
    alt: 'Somali Couple Portrait',
    category: 'Photography',
    type: 'image',
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/3665416/pexels-photo-3665416.jpeg?w=800&h=600&fit=crop',
    alt: 'Henna Night Celebration',
    category: 'Henna',
    type: 'image',
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/11376646/pexels-photo-11376646.jpeg?w=800&h=600&fit=crop',
    alt: 'Somali Wedding Cake',
    category: 'Cakes',
    type: 'image',
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1406282/pexels-photo-1406282.jpeg?w=800&h=600&fit=crop',
    alt: 'Fireworks Celebration',
    category: 'Entertainment',
    type: 'image',
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/3556669/pexels-photo-3556669.jpeg?w=800&h=600&fit=crop',
    alt: 'Cultural Dance Performance',
    category: 'Entertainment',
    type: 'image',
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=800&h=600&fit=crop',
    alt: 'Somali DJ Entertainment',
    category: 'Entertainment',
    type: 'image',
  },
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

// Stats with Somali context
export const stats = [
  { value: '500+', label: 'Somali Weddings' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '50+', label: 'Team Members' },
]