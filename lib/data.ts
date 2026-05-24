export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
  href: string
}

export interface Package {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  featured?: boolean
  popular?: boolean
  tagline?: string
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

// Event Services
export const services: Service[] = [
  {
    id: 'birthday-events',
    title: 'Birthday Events',
    description: 'Memorable birthday celebrations for all ages with custom decorations, themed parties, and entertainment that creates lasting memories.',
    icon: 'Cake',
    image: '/images/birthday.png',
    href: '/birthday',
  },
  {
    id: 'graduation-ceremonies',
    title: 'Graduation Ceremonies',
    description: 'Celebrate academic achievements with elegant ceremonies, custom backdrops, photography, and memorable receptions.',
    icon: 'GraduationCap',
    image: '/images/GraduationCeremony.png',
    href: '/graduation',
  },
  {
    id: 'opening-ceremony',
    title: 'Opening Ceremony',
    description: 'Grand opening events for businesses, venues, and product launches with red carpet treatment, ribbon cutting, and entertainment.',
    icon: 'Sparkles',
    image: '/images/ser2.png',
    href: '/opening',
  },
  {
    id: 'wedding-events',
    title: 'Wedding Events',
    description: 'Complete wedding planning and coordination services for a seamless celebration, from traditional ceremonies to modern receptions.',
    icon: 'Heart',
    image: '/images/ser1.png',
    href: '/wedding',
  },
]

// Wedding Packages
export const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic Wedding Package',
    price: 2500,
    description: 'Perfect for simple and elegant weddings.',
    features: [
      'Simple Wedding Decoration',
      'DJ & Sound System',
      'Photographer',
      'Wedding Stage Setup',
      'Invitation Design',
      'Protocol Team',
    ],
    tagline: 'Simple & Beautiful Wedding',
  },
  {
    id: 'standard',
    name: 'Standard Wedding Package',
    price: 5000,
    description: 'Best for modern and stylish weddings.',
    features: [
      'Modern Hall Decoration',
      'Professional DJ',
      'Big Sound System',
      'Videographer & Photographer',
      'Smoke Flare (QAAC)',
      'Cold Sparks (Bulaler)',
      'Wedding Cake Table',
      'Invitation Cards',
      'Luxury Bride & Groom Seating',
      'TV Coverage',
    ],
    popular: true,
    tagline: 'Elegant Wedding Experience',
  },
  {
    id: 'vip',
    name: 'VIP Wedding Package',
    price: 10000,
    description: 'Luxury full wedding management.',
    features: [
      'Premium Wedding Decoration',
      'Full Photography & Videography',
      'Professional DJ & Entertainment',
      'Fanaaniin',
      'Dhaanto & Buraanbur',
      'Luxury Entrance Setup',
      'Smoke Effects & Cold Sparks',
      'Wedding Stage & Red Carpet',
      'Invitation Cards',
      'Luxury Cars',
      'Full Event Coordination Team',
      'TV News Coverage',
    ],
    featured: true,
    tagline: 'Luxury Wedding Experience',
  },
  {
    id: 'home',
    name: 'Home Wedding Decoration Package',
    price: 3500,
    description: 'Special package for weddings held at home.',
    features: [
      'Home Decoration Setup',
      'Luxury Chairs & Tables',
      'Wedding Backdrop',
      'Flower Decoration',
      'Bride & Groom Seating',
      'Lighting Setup',
      'Sound System',
      'Cake Table Decoration',
      'Full Setup & Arrangement Team',
    ],
    tagline: 'Turn Your Home Into a Beautiful Wedding Venue',
  },
  {
    id: 'custom',
    name: 'Custom Wedding Package',
    price: 0,
    description: 'Create your own wedding package based on your budget and style.',
    features: [
      'You choose the services you need',
      'We organize everything professionally',
      'Flexible budget options',
      'Personalized wedding experience',
    ],
    tagline: 'Your Dream Wedding, Your Way',
  },
]

// Opening Ceremony Packages
export const openingPackages: Package[] = [
  {
    id: 'opening-basic',
    name: 'Basic Opening Ceremony Package',
    price: 1500,
    description: 'Perfect for small business openings and simple launch events.',
    features: [
      'Simple Decoration',
      'Sound System',
      'DJ Music',
      'Photographer',
      'Ribbon Cutting Setup',
      'Protocol Team',
      'Invitation Design',
    ],
    tagline: 'Simple & Professional Opening',
  },
  {
    id: 'opening-standard',
    name: 'Standard Opening Ceremony Package',
    price: 3500,
    description: 'Best for stylish business openings and brand launches.',
    features: [
      'Modern Hall Decoration',
      'Professional DJ & Sound System',
      'Videographer & Photographer',
      'Ribbon Cutting Ceremony',
      'Smoke Flare (QAAC)',
      'Cold Sparks (Bulaler)',
      'TV Coverage',
      'Invitation Cards',
      'Protocol Team',
      'Business Branding & Boor',
    ],
    popular: true,
    tagline: 'Professional & Memorable Experience',
  },
  {
    id: 'opening-vip',
    name: 'VIP Opening Ceremony Package',
    price: 8000,
    description: 'Luxury opening ceremony with celebrity appearance and full entertainment.',
    features: [
      'Premium Decoration',
      'Professional DJ & Big Sound System',
      'Full Photography & Videography',
      'TV News Coverage',
      'Celebrity Guests Appearance',
      'Fanaaniin & Entertainment',
      'Dancers / Dhaanto / Buraanbur',
      'Luxury Entrance Setup',
      'Ribbon Cutting Ceremony',
      'Smoke Effects & Cold Sparks',
      'Invitation Cards',
      'Full Event Coordination Team',
      'Business Branding & Stage Setup',
    ],
    featured: true,
    tagline: 'Grand Luxury Opening Experience',
  },
  {
    id: 'opening-corporate',
    name: 'Corporate Opening Package',
    price: 2500,
    description: 'Perfect for companies, shops, restaurants, and office launches.',
    features: [
      'Elegant Decoration',
      'Protocol Team',
      'Photographer & Videographer',
      'Sound System',
      'TV Coverage',
      'Ribbon Cutting Setup',
      'Branding & Banner Design',
      'Full Event Coordination',
    ],
    tagline: 'Professional Business Launch Experience',
  },
]

// Graduation Packages
export const graduationPackages: Package[] = [
  {
    id: 'graduation-basic',
    name: 'Basic Graduation Package',
    price: 1000,
    description: 'Perfect for simple graduation celebrations.',
    features: [
      'Simple Graduation Decoration',
      'Graduation Banner',
      'Music & Speaker Setup',
      'TV Coverage',
      'Photographer',
      'Cake Table Decoration',
      'Graduate Chair Setup',
    ],
    tagline: 'Simple & Beautiful Celebration',
  },
  {
    id: 'graduation-standard',
    name: 'Standard Graduation Package',
    price: 2500,
    description: 'Best for modern and memorable graduation events.',
    features: [
      'Modern Hall Decoration',
      'Professional DJ',
      'Big Sound System & Music Setup',
      'TV News Coverage',
      'Professional Photographer',
      'Videographer',
      'Graduation Stage Setup',
      'Smoke Flare (QAAC)',
      'Cold Sparks (Bulaler)',
      'Invitation Design',
      'LED Number & Name Setup',
      'Graduation Cake Table',
    ],
    popular: true,
    tagline: 'Stylish Graduation Experience',
  },
  {
    id: 'graduation-vip',
    name: 'VIP Graduation Package',
    price: 5000,
    description: 'Luxury graduation event with full entertainment and media coverage.',
    features: [
      'Premium Graduation Decoration',
      'TV News Coverage',
      'Professional DJ & Sound System',
      'Full Photography & Videography',
      'Luxury Entrance Setup',
      'Customized Graduation Stage',
      'Cold Sparks & Smoke Effects',
      'Dancers / Entertainment Team',
      'Invitation Cards',
      'Graduate Red Carpet',
      'Full Event Coordination Team',
    ],
    featured: true,
    tagline: 'Premium Graduation Experience',
  },
  {
    id: 'graduation-group',
    name: 'Group Graduation Package',
    price: 1800,
    description: 'Perfect for classmates or group celebrations.',
    features: [
      'Group Stage Decoration',
      'TV Coverage',
      'DJ & Sound System',
      'Group Photography & Videography',
      'Graduation Backdrop',
      'Smoke Effects',
      'Invitation Design',
      'Full Coordination',
    ],
    tagline: 'Celebrate Success Together',
  },
]

// Birthday Packages
export const birthdayPackages: Package[] = [
  {
    id: 'birthday-basic',
    name: 'Basic Birthday Package',
    price: 800,
    description: 'Perfect for simple family birthdays.',
    features: [
      'Simple Birthday Decoration',
      'Birthday Table Setup',
      'Music & Speaker',
      'Photographer',
      'Birthday Banner',
      'Cake Table Decoration',
    ],
    tagline: 'Affordable Package',
  },
  {
    id: 'birthday-standard',
    name: 'Standard Birthday Package',
    price: 1500,
    description: 'Best for stylish birthday celebrations.',
    features: [
      'Modern Hall Decoration',
      'DJ & Sound System',
      'Professional Photographer',
      'Videographer',
      'Birthday Cake Setup',
      'Smoke Flare (QAAC)',
      'Cold Sparks (Bulaler)',
      'Invitation Design',
      'LED Number Setup',
    ],
    popular: true,
    tagline: 'Elegant & Fun Experience',
  },
  {
    id: 'birthday-vip',
    name: 'VIP Birthday Package',
    price: 3000,
    description: 'Luxury birthday celebration with full entertainment.',
    features: [
      'Premium Hall Decoration',
      'Professional DJ',
      'Full Photography & Videography',
      'Luxury Entrance Setup',
      'Cold Sparks & Smoke Effects',
      'Customized Birthday Stage',
      'Dancers / Entertainment Team',
      'Birthday Cake Table',
      'Invitation Cards',
      'Event Coordination Team',
    ],
    featured: true,
    tagline: 'Luxury Birthday Experience',
  },
  {
    id: 'birthday-kids',
    name: 'Kids Birthday Package',
    price: 600,
    description: 'Special package for children.',
    features: [
      'Cartoon Theme Decoration',
      'Balloon Decoration',
      'Kids Music Setup',
      'Cake Table',
      'Photography',
      'Fun Entertainment',
    ],
    tagline: 'Fun & Colorful Celebration',
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
    src: '/images/birthday.png',
    alt: 'Birthday Celebration',
    category: 'Birthday',
    type: 'image',
  },
  {
    id: '2',
    src: '/images/GraduationCeremony.png',
    alt: 'Graduation Ceremony',
    category: 'Graduation',
    type: 'image',
  },
  {
    id: '3',
    src: '/images/GrandOpening.png',
    alt: 'Grand Opening',
    category: 'Opening',
    type: 'image',
  },
  {
    id: '4',
    src: '/images/g4.png',
    alt: 'Wedding Event',
    category: 'Wedding',
    type: 'image',
  },
  {
    id: '5',
    src: '/images/EventDecoration.png',
    alt: 'Event Decoration',
    category: 'Events',
    type: 'image',
  },
  {
    id: '6',
    src: '/images/CelebrationMoments.png',
    alt: 'Celebration Moments',
    category: 'Events',
    type: 'image',
  },
  {
    id: '7',
    src: '/images/MemorableMoments.png',
    alt: 'Memorable Moments',
    category: 'Events',
    type: 'image',
  },
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/wedding', label: 'Wedding' },
  { href: '/opening', label: 'Opening' },
  { href: '/graduation', label: 'Graduation' },
  { href: '/birthday', label: 'Birthday' },
  { href: '/packages', label: 'Packages' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

// Stats with Somali context
export const stats = [
  { value: '500+', label: 'Somali Weddings' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '50+', label: 'Team Members' },
]