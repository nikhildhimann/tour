/* Client content lives here so a new agency can be configured without editing markup. */
const siteData = {
  businessInfo: {
    name: "Anchal Tour And Travel",
    tagline: "Explore Manali with Comfortable Rides and Reliable Travel Services.",
    highlight: "Taxi, Volvo and Hotel Services in Manali",
    phone: "+91 9816370583",
    address: "Ward No. 7, Bus Stand, Near Volvo, Rangri, Manali, Himachal Pradesh 175131",
    email: ""
  },

  about: {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    description:
      "Anchal Tour And Travel is a Manali-based travel service offering local taxi services, Volvo travel assistance between Manali and Delhi, and hotel services. We help travellers explore Manali and plan convenient journeys.",
    founderNote: "",
    mission:
      "To help travellers enjoy convenient and comfortable journeys in and around Manali.",
    vision:
      "To become a dependable travel partner for visitors exploring Manali and Himachal Pradesh.",
    values:
      "Comfort, reliable travel assistance and customer convenience."
  },

  services: [
    {
      title: "Manali Taxi Service",
      desc: "Taxi services for local travel and exploring Manali."
    },
    {
      title: "Volvo Bus Service",
      desc: "Travel service between Manali and Delhi, including Delhi to Manali."
    },
    {
      title: "Hotel Booking",
      desc: "Hotel and accommodation assistance for travellers visiting Manali."
    },
    {
      title: "Scooter Hire",
      desc: "Scooter hire service for exploring Manali at your own pace."
    },
    {
      title: "Local Sightseeing",
      desc: "Travel assistance for exploring popular places around Manali."
    },
    {
      title: "Travel Assistance",
      desc: "Contact Anchal Tour And Travel for assistance with your Manali trip."
    }
  ],

  offers: {
    newCustomerDiscount: "5% OFF",
    returningCustomerDiscount: "10% OFF",
    newCustomerLabel: "5% OFF for New Customers",
    routes: [
      "Manali to Delhi",
      "Delhi to Manali",
      "Manali Local Sightseeing",
      "Manali and Nearby Destinations"
    ]
  },
  taxiOptions: [
    { type: "4+1 Seater Hatchback / Sedan", desc: "A comfortable choice for individuals, couples, and small families." },
    { type: "6+1 Seater SUV", desc: "Room for the family and luggage, including popular Innova options." },
    { type: "12+1 Seater Tempo Traveller", desc: "Group travel with space for up to 12 passengers." },
    { type: "17+1 Seater Tempo Traveller", desc: "A spacious option for larger groups and tour parties." },
    { type: "21+1 Seater Mini Bus", desc: "Comfortable group transport for events, pilgrimages, and tours." },
    { type: "28+1 Seater Mini Bus", desc: "High-capacity transport for large groups and organized trips." }
  ],
  fleetPricing: [
    { car: "Hatchback / Sedan", features: "Comfortable • 4+1 Seater • Ideal for small groups", price: "Ask for a quote", image: "https://images.unsplash.com/photo-1563089920-90a6a8beebfc?auto=format&fit=crop&w=1000&q=80" },
    { car: "SUV / Toyota Innova", features: "Spacious • 6+1 Seater • Great for family travel", price: "Ask for a quote", image: "https://images.unsplash.com/photo-1753805122830-ce04c477b45a?auto=format&fit=crop&w=1000&q=80" },
    { car: "Tempo Traveller", features: "Group travel • 12+1 Seater", price: "Ask for a quote", image: "https://images.unsplash.com/photo-1608723451450-6fe11e0aa857?auto=format&fit=crop&w=1000&q=80", imageAlt: "Passenger van traveling along a mountain road in Himachal" },
    { car: "Tempo Traveller", features: "Large groups • 17+1 Seater", price: "Ask for a quote", image: "https://images.unsplash.com/photo-1589801321907-302dcf115e10?auto=format&fit=crop&w=1000&q=80", imageAlt: "White minibus on the road, suitable for group travel" },
    { car: "Mini Bus", features: "Group tours • 21+1 Seater", price: "Ask for a quote", image: "https://images.unsplash.com/photo-1625291328217-e04eb671c5d7?auto=format&fit=crop&w=1000&q=80", imageAlt: "Tour buses traveling through a mountain landscape" },
    { car: "Mini Bus", features: "Large group transport • 28+1 Seater", price: "Ask for a quote", image: "https://images.unsplash.com/photo-1595959055458-e30125ac43ea?auto=format&fit=crop&w=1000&q=80", imageAlt: "Passenger bus prepared for group transportation" }
  ],
  whyChooseUs: [
    {
      title: "Local Manali Travel Service",
      desc: "A local travel service based in Manali."
    },
    {
      title: "Multiple Travel Services",
      desc: "Taxi, scooter hire, Volvo and hotel services."
    },
    {
      title: "Manali to Delhi Connectivity",
      desc: "Travel assistance for the Manali–Delhi route."
    },
    {
      title: "Hotel Assistance",
      desc: "Hotel service for travellers planning a Manali visit."
    },
    {
      title: "Easy Contact",
      desc: "Contact the business directly to discuss your travel requirements."
    }],

  placesToVisit: [
    {
      name: "Solang Valley",
      desc: "A popular destination near Manali known for mountain views and adventure activities.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Rohtang Pass",
      desc: "A famous high-altitude mountain destination near Manali.",
      image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Old Manali",
      desc: "Explore cafes, local streets and mountain scenery.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Hadimba Temple",
      desc: "A historic temple surrounded by beautiful cedar forests.",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Atal Tunnel",
      desc: "A remarkable road tunnel connecting the Manali region with Lahaul.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Naggar Castle",
      desc: "A heritage attraction in the Kullu Valley.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  temples: [
    {
      name: "Hadimba Devi Temple",
      desc: "A famous temple in Manali surrounded by cedar trees."
    },
    {
      name: "Manu Temple",
      desc: "A temple located in Old Manali."
    }
  ],

  tourPackages: [
    {
      tag: "Manali",
      title: "Manali Local Sightseeing",
      desc: "Explore popular attractions around Manali. Contact us for your preferred itinerary.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    },
    {
      tag: "Popular Route",
      title: "Manali to Delhi",
      desc: "Ask about available Volvo travel services from Manali to Delhi.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    },
    {
      tag: "Return Route",
      title: "Delhi to Manali",
      desc: "Plan your journey to Manali and enquire about Volvo travel services.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    },
    {
      tag: "Stay",
      title: "Manali Hotel Assistance",
      desc: "Contact us for hotel and accommodation assistance in Manali.",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    },
    {
      tag: "Explore",
      title: "Manali Scooter Hire",
      desc: "Enquire about scooter hire for exploring Manali.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  specialDrops: {
    availability: "",
    destinations: [
      "Manali",
      "Old Manali",
      "Solang Valley",
      "Rohtang Pass",
      "Naggar",
      "Kullu"
    ]
  },

  images: {
    shapeOne: "./assets/images/shape-1.png",
    shapeTwo: "./assets/images/shape-2.png",
    shapeThree: "./assets/images/shape-3.png",
    aboutBanner:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
  },

  hero: {
    kicker: "Taxi and Travel Services in Manali",
    title: "Explore Manali. Travel Comfortably.",
    text:
      "Discover Manali with taxi services, Volvo travel assistance, scooter hire and hotel services from Anchal Tour And Travel.",
    image: "./assets/images/hero-banner.png",
    imageAlt: "Beautiful mountain scenery in Manali"
  },

  serviceAreas: [
    "Manali",
    "Old Manali",
    "Rangri",
    "Solang Valley",
    "Kullu"
  ],

  socialLinks: [
    {
      label: "Facebook",
      icon: "facebook",
      url: "https://www.facebook.com/anchaltourandtravel"
    },
    {
      label: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/anchaltourandtravel/"
    },
    {
      label: "WhatsApp",
      icon: "logo-whatsapp",
      url: "https://wa.me/919816370583"
    }
  ],
  reviews: {
    rating: 5.0,
    countLabel: "Google Review Rating",
    items: [
      { name: "Rahul", text: "Very smooth ride from Una to Chandigarh. The car was clean and the driver was on time.", rating: 5 },
      { name: "Priya", text: "A comfortable trip to Dharamshala with helpful service throughout. Would book again.", rating: 5 },
      { name: "Vikram", text: "Booked a family trip to Manali. Great driving on the hill roads and a relaxed journey.", rating: 5 },
      { name: "Neha", text: "Pickup was punctual and booking was easy. Really nice experience for our local Una travel.", rating: 5 },
      { name: "Amit", text: "We used the taxi for temple darshan. The driver was courteous and made the day stress-free.", rating: 5 }
    ]
  }
};
