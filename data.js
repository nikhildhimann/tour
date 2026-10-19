/* Client content lives here so a new agency can be configured without editing markup. */
const siteData = {
  businessInfo: {
    name: "AK Tour and Travel",
    tagline: "Reliable. Comfortable. Affordable. Your trusted travel partner for Himachal and beyond.",
    highlight: "Best Taxi Service In Una",
    phone: "+91 9805256396",
    address: "Near ISBT, Professor Colony, Una, Himachal Pradesh 174303",
    email: "info@aktourandtravel.com"
  },
  about: {
    image: "https://images.unsplash.com/photo-1753621005133-d45f2e9fca97?auto=format&fit=crop&w=1200&q=80",
    description: "At AK Tour and Travel, we believe travel should be more than just reaching a destination — it should be an unforgettable journey. With years of experience and a passion for exploration, we specialize in creating tailor-made tours across India and beyond. From breathtaking Himalayan adventures to relaxing beach holidays and spiritual pilgrimages, our team ensures every detail is handled with care, comfort, and a personal touch.",
    founderNote: "Hello, I’m Ajay Kumar, founder of AK Tour and Travel. My personal promise is to make every journey so comfortable and rewarding that you’ll want us to be your travel partner for years to come. We work hard to pair attentive service with some of the region’s best offers.",
    mission: "To redefine travel by creating meaningful, comfortable, and affordable journeys that inspire exploration and cultural connection.",
    vision: "To become India’s most trusted and innovative travel partner, known for excellence, transparency, and unforgettable experiences.",
    values: "Integrity, hospitality, customer satisfaction, and innovation are at the heart of everything we do — ensuring every traveler feels valued."
  },
  services: [
    { title: "Local Taxi Service", desc: "Fast and reliable city rides with courteous drivers and well-maintained vehicles." },
    { title: "Outstation Tours", desc: "Affordable long-distance travel options for families, friends, and business trips." },
    { title: "Himachal Tours", desc: "Explore the beauty of Himachal with custom-made tour packages and expert guides." },
    { title: "Airport Pickup & Drop", desc: "On-time airport transfers to and from major airports like Delhi, Chandigarh & Amritsar." },
    { title: "Wedding Car Rental", desc: "Premium cars for weddings and events to make your day unforgettable and classy." },
    { title: "Custom Tour Packages", desc: "Tailored travel experiences to suit your budget, schedule, and destination choices." }
  ],
  offers: {
    newCustomerDiscount: "5% OFF",
    returningCustomerDiscount: "10% OFF",
    newCustomerLabel: "5% OFF for New Customers",
    routes: ["Una to Delhi Airport", "Devi Darshan", "Mathura and Vrindavan", "Khatu Shyam and Salasar Balaji", "Shimla, Manali and Spiti", "Shimla, Rampur Bushahr, Kinnaur and Kaza"]
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
    { title: "Trusted & Reliable", desc: "We’re known for our reliability and transparency with thousands of satisfied travelers across India." },
    { title: "24x7 Support", desc: "Round-the-clock customer service to ensure your journey remains stress-free and on time." },
    { title: "Clean & Well-Maintained Cars", desc: "Our vehicles are sanitized, air-conditioned, and maintained to the highest standards for your comfort." },
    { title: "Affordable Pricing", desc: "We offer competitive and transparent pricing without compromising quality or comfort." },
    { title: "All India Network", desc: "From mountains to beaches, our cabs and drivers operate in all major cities and tourist destinations." },
    { title: "Professional Drivers", desc: "Our drivers are trained, courteous, and experienced to ensure your journey is smooth and safe." }
  ],
  placesToVisit: [
    { name: "Shimla", desc: "The capital city with colonial architecture and Mall Road charm.", image: "https://images.unsplash.com/photo-1785651975023-2bae16114077?auto=format&fit=crop&w=1200&q=80" },
    { name: "Manali", desc: "Adventure paradise with snow peaks and river rafting thrills.", image: "https://images.unsplash.com/photo-1753621005133-d45f2e9fca97?auto=format&fit=crop&w=1200&q=80" },
    { name: "Dharamshala", desc: "Home of the Dalai Lama and peaceful monasteries.", image: "https://images.unsplash.com/photo-1584108132271-5189ee552144?auto=format&fit=crop&w=1200&q=80" },
    { name: "Dalhousie", desc: "Serene hills, pine forests, and colonial charm.", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80" },
    { name: "McLeod Ganj", desc: "Tibetan culture, cafes, and stunning views.", image: "https://images.unsplash.com/photo-1584108132271-5189ee552144?auto=format&fit=crop&w=1200&q=80" },
    { name: "Kullu", desc: "The valley of gods — rivers, temples, and festivals.", image: "https://images.unsplash.com/photo-1753621005133-d45f2e9fca97?auto=format&fit=crop&w=1200&q=80" },
    { name: "Spiti Valley", desc: "Cold desert mountains and ancient monasteries.", image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?auto=format&fit=crop&w=1200&q=80" },
    { name: "Kasauli", desc: "A quaint town with British-era vibe and pine trails.", image: "https://images.unsplash.com/photo-1785651975023-2bae16114077?auto=format&fit=crop&w=1200&q=80" }
  ],
  temples: [
    { name: "Hidimba Devi Temple", desc: "Ancient cave temple in Manali, surrounded by cedar forests." },
    { name: "Baijnath Temple", desc: "Dedicated to Lord Shiva near Palampur, built in 1204 AD." },
    { name: "Jwala Ji Temple", desc: "Famous for eternal flames in Kangra district, a Shakti Peeth." },
    { name: "Naina Devi Temple", desc: "Popular hilltop temple with spiritual and scenic value." },
    { name: "Chintpurni Temple", desc: "A revered Shakti Peeth dedicated to Goddess Chinnamasta." },
    { name: "Bijli Mahadev Temple", desc: "Shiva temple near Kullu, known for lightning striking its idol." },
    { name: "Baba Balak Nath Temple", desc: "Major pilgrimage center near Hamirpur, carved in a cave." },
    { name: "Bagalamukhi Temple", desc: "Located in Bankhandi, devoted to the goddess of power and protection." }
  ],
  tourPackages: [
    { tag: "Best Seller", title: "Chandigarh Shimla Manali Chandigarh Tour", desc: "Experience the ultimate Himalayan getaway covering the scenic landscapes of Shimla and the adventure hubs of Manali starting right from Chandigarh.", image: "https://images.unsplash.com/photo-1785651975023-2bae16114077?auto=format&fit=crop&w=1200&q=80" },
    { tag: "Popular", title: "Amritsar to Dharamshala Tour Package", desc: "A perfect blend of spiritual serenity and mountain bliss, taking you from the Golden City of Amritsar straight into the tranquil hills of Dharamshala.", image: "https://images.unsplash.com/photo-1584108132271-5189ee552144?auto=format&fit=crop&w=1200&q=80" },
    { tag: "Trending", title: "Chandigarh Manali Tour", desc: "Escape to the snow-capped peaks and lush valleys of Manali. A quick, refreshing, and action-packed mountain journey starting from Chandigarh.", image: "https://images.unsplash.com/photo-1753621005133-d45f2e9fca97?auto=format&fit=crop&w=1200&q=80" },
    { tag: "Scenic", title: "Una to Dharamshala, Mcleodganj, Dalhousie & Khajjiar", desc: "Get picked up from Una and explore the mini-Switzerland of India along with the beautiful Tibetan culture of Mcleodganj.", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80" },
    { tag: "5% OFF · New Customers", title: "Una Railway Station to Devi Darshan", desc: "A sacred pilgrimage route designed for comfort, taking you seamlessly from the station to the historic and highly revered Devi temples.", offer: "new-customer", image: "https://images.unsplash.com/photo-1752399604089-45a4aabedf81?auto=format&fit=crop&w=1200&q=80" },
    { tag: "Epic Journey", title: "Chandigarh Shimla Sarahan Sangla Kalpa Kaza Manali Tour", desc: "The ultimate Kinnaur and Spiti Valley expedition. Travel through rugged terrains, old monasteries, and raw Himalayan beauty.", image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?auto=format&fit=crop&w=1200&q=80" },
    { tag: "Heritage", title: "Delhi Agra Jaipur Tour Package", desc: "Immerse yourself in rich Indian heritage. Witness the monumental Taj Mahal, historic Delhi streets, and the imperial palaces of Jaipur.", image: "https://images.unsplash.com/photo-1523980077198-60824a7b2148?auto=format&fit=crop&w=1200&q=80" },
    { tag: "Bucket List", title: "9 Days Leh Ladakh Tour Package", desc: "An absolute adventure through high-altitude passes, breathtaking blue lakes, and dramatic cold deserts. Truly a once-in-a-lifetime journey.", image: "https://images.unsplash.com/photo-1731317607857-7dc18a434f11?auto=format&fit=crop&w=1200&q=80" },
    { tag: "5% OFF · New Customers", title: "Una to Delhi Airport Transfer", desc: "Reliable airport drop and pickup service from Una to Delhi, with convenient travel planning and luggage-friendly vehicles.", offer: "new-customer", image: "https://images.unsplash.com/photo-1563089920-90a6a8beebfc?auto=format&fit=crop&w=1200&q=80" },
    { tag: "5% OFF · New Customers", title: "Mathura and Vrindavan Spiritual Tour", desc: "Plan a comfortable pilgrimage to the sacred temples and historic sites of Mathura and Vrindavan.", offer: "new-customer", image: "https://images.unsplash.com/photo-1752399604089-45a4aabedf81?auto=format&fit=crop&w=1200&q=80" },
    { tag: "5% OFF · New Customers", title: "Khatu Shyam & Salasar Balaji Tour", desc: "A thoughtfully planned devotional journey to Khatu Shyam Ji and Salasar Balaji.", offer: "new-customer", image: "https://images.unsplash.com/photo-1752399604089-45a4aabedf81?auto=format&fit=crop&w=1200&q=80" },
    { tag: "5% OFF · New Customers", title: "Shimla, Manali & Spiti Valley Tour", desc: "Discover Himalayan hill towns, mountain roads, and the dramatic landscapes of Spiti on a custom multi-day tour.", offer: "new-customer", image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?auto=format&fit=crop&w=1200&q=80" },
    { tag: "5% OFF · New Customers", title: "Shimla, Rampur Bushahr, Kinnaur & Kaza Tour", desc: "Explore the mountain destinations of Shimla, Rampur Bushahr, Kinnaur, and Kaza with a route tailored to your plans.", offer: "new-customer", image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?auto=format&fit=crop&w=1200&q=80" },
    { tag: "5% OFF · New Customers", title: "Dharamshala, McLeodganj & Chamba Tour", desc: "A scenic Himalayan escape through Dharamshala, McLeodganj, and Chamba, with pickup and drop options available.", offer: "new-customer", image: "https://images.unsplash.com/photo-1584108132271-5189ee552144?auto=format&fit=crop&w=1200&q=80" },
    { tag: "5% OFF · New Customers", title: "Palampur, Baijnath & Mandi Tour", desc: "Visit tea gardens, heritage temples, and hill towns with a flexible itinerary and convenient return travel.", offer: "new-customer", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80" },
    { tag: "5% OFF · New Customers", title: "Kullu, Manikaran & Kasol Tour", desc: "Travel to Kullu, the hot springs and shrines of Manikaran, and the riverside destination of Kasol.", offer: "new-customer", image: "https://images.unsplash.com/photo-1753621005133-d45f2e9fca97?auto=format&fit=crop&w=1200&q=80" }
  ],
  specialDrops: {
    availability: "24/7 dropping and up-down services are available.",
    destinations: ["Kangra", "Dharamshala", "McLeodganj", "Chamba", "Dalhousie", "Palampur", "Baijnath", "Mandi", "Kullu", "Manikaran", "Kasol"]
  },
  images: {
    shapeOne: "./assets/images/shape-1.png",
    shapeTwo: "./assets/images/shape-2.png",
    shapeThree: "./assets/images/shape-3.png",
    aboutBanner: "https://images.unsplash.com/photo-1753621005133-d45f2e9fca97?auto=format&fit=crop&w=1200&q=80"
  },
  hero: {
    kicker: "Taxi service in Una, Himachal Pradesh",
    title: "Your Journey Across Himachal, Made Easy",
    text: "Reliable taxi services, comfortable vehicles and thoughtfully planned tours from Una to your favorite destinations.",
    image: "./assets/images/hero-banner.png",
    imageAlt: "AK Tour and Travel journey through Himachal"
  },
  serviceAreas: ["Una", "Amb Andaura", "Chandigarh", "Dharamshala", "Shimla", "Manali", "All Himachal destinations"],
  socialLinks: [
    { label: "WhatsApp", icon: "logo-whatsapp", url: "https://wa.me/919805256396" }
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
