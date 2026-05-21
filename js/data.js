const PRODUCTS = [
  {
    "id": "banner-luxury-space",
    "name": "Banner Luxury Space",
    "price": 12941,
    "image": "assets/products/banner-luxury-space.jpeg",
    "images": [
      "assets/products/banner-luxury-space.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Banner Luxury Space est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": true,
    "promo": true
  },
  {
    "id": "banner-premium-black",
    "name": "Banner Premium Black",
    "price": 9495,
    "image": "assets/products/banner-premium-black.jpeg",
    "images": [
      "assets/products/banner-premium-black.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Banner Premium Black est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-anti-lumiere-bleue",
    "name": "Lunette Anti Lumiere Bleue",
    "price": 8811,
    "image": "assets/products/lunette-anti-lumiere-bleue.jpg",
    "images": [
      "assets/products/lunette-anti-lumiere-bleue.jpg"
    ],
    "category": "anti-lumiere",
    "availability": "En stock",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Anti Lumiere Bleue est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-black-style",
    "name": "Lunette Black Style",
    "price": 10929,
    "image": "assets/products/lunette-black-style.jpeg",
    "images": [
      "assets/products/lunette-black-style.jpeg"
    ],
    "category": "solaire",
    "availability": "Stock limité",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Black Style est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": true,
    "promo": true
  },
  {
    "id": "lunette-blue-case",
    "name": "Lunette Blue Case",
    "price": 9695,
    "image": "assets/products/lunette-blue-case.jpeg.jpeg",
    "images": [
      "assets/products/lunette-blue-case.jpeg.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "En stock",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Blue Case est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-blue-display",
    "name": "Lunette Blue Display",
    "price": 8240,
    "image": "assets/products/lunette-blue-display.jpeg",
    "images": [
      "assets/products/lunette-blue-display.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "En stock",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Blue Display est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-blue-fashion",
    "name": "Lunette Blue Fashion",
    "price": 8226,
    "image": "assets/products/lunette-blue-fashion.jpeg",
    "images": [
      "assets/products/lunette-blue-fashion.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "En stock",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Blue Fashion est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-blue-premium",
    "name": "Lunette Blue Premium",
    "price": 8249,
    "image": "assets/products/lunette-blue-premium.jpeg",
    "images": [
      "assets/products/lunette-blue-premium.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "Stock limité",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Blue Premium est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-blue-reflet",
    "name": "Lunette Blue Reflet",
    "price": 8124,
    "image": "assets/products/lunette-blue-reflet.jpeg",
    "images": [
      "assets/products/lunette-blue-reflet.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "En stock",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Blue Reflet est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-blue-style",
    "name": "Lunette Blue Style",
    "price": 8043,
    "image": "assets/products/lunette-blue-style.jpeg",
    "images": [
      "assets/products/lunette-blue-style.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "En stock",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Blue Style est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-business-style",
    "name": "Lunette Business Style",
    "price": 9795,
    "image": "assets/products/lunette-business-style.jpeg",
    "images": [
      "assets/products/lunette-business-style.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Business Style est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-classic-black",
    "name": "Lunette Classic Black",
    "price": 9605,
    "image": "assets/products/lunette-classic-black.jpeg",
    "images": [
      "assets/products/lunette-classic-black.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "Stock limité",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Classic Black est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": true,
    "promo": false
  },
  {
    "id": "lunette-classic-black2",
    "name": "Lunette Classic Black2",
    "price": 9655,
    "image": "assets/products/lunette-classic-black2.jpeg",
    "images": [
      "assets/products/lunette-classic-black2.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Classic Black2 est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-classic-elegance",
    "name": "Lunette Classic Elegance",
    "price": 9916,
    "image": "assets/products/lunette-classic-elegance.jpeg",
    "images": [
      "assets/products/lunette-classic-elegance.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Classic Elegance est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-classic-gray",
    "name": "Lunette Classic Gray",
    "price": 9531,
    "image": "assets/products/lunette-classic-gray.jpeg",
    "images": [
      "assets/products/lunette-classic-gray.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Classic Gray est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-classic-premium",
    "name": "Lunette Classic Premium",
    "price": 9863,
    "image": "assets/products/lunette-classic-premium.jpeg",
    "images": [
      "assets/products/lunette-classic-premium.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "Stock limité",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Classic Premium est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-comfort-vision",
    "name": "Lunette Comfort Vision",
    "price": 8484,
    "image": "assets/products/lunette-comfort-vision.jpeg",
    "images": [
      "assets/products/lunette-comfort-vision.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "En stock",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Comfort Vision est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-dark-premium",
    "name": "Lunette Dark Premium",
    "price": 9543,
    "image": "assets/products/lunette-dark-premium.jpeg",
    "images": [
      "assets/products/lunette-dark-premium.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Dark Premium est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-elegance-black",
    "name": "Lunette Elegance Black",
    "price": 9687,
    "image": "assets/products/lunette-elegance-black.jpeg",
    "images": [
      "assets/products/lunette-elegance-black.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Elegance Black est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-elegance-blue",
    "name": "Lunette Elegance Blue",
    "price": 8302,
    "image": "assets/products/lunette-elegance-blue.jpeg",
    "images": [
      "assets/products/lunette-elegance-blue.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "Stock limité",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Elegance Blue est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-elegance-gold",
    "name": "Lunette Elegance Gold",
    "price": 9600,
    "image": "assets/products/lunette-elegance-gold.jpeg",
    "images": [
      "assets/products/lunette-elegance-gold.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Elegance Gold est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-elite-fashion",
    "name": "Lunette Elite Fashion",
    "price": 13134,
    "image": "assets/products/lunette-elite-fashion.jpeg",
    "images": [
      "assets/products/lunette-elite-fashion.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Elite Fashion est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-fashion-black",
    "name": "Lunette Fashion Black",
    "price": 11112,
    "image": "assets/products/lunette-fashion-black.jpeg",
    "images": [
      "assets/products/lunette-fashion-black.jpeg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Fashion Black est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-fashion-blue",
    "name": "Lunette Fashion Blue",
    "price": 8226,
    "image": "assets/products/lunette-fashion-blue.jpeg",
    "images": [
      "assets/products/lunette-fashion-blue.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "Stock limité",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Fashion Blue est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-fashion-dark",
    "name": "Lunette Fashion Dark",
    "price": 11021,
    "image": "assets/products/lunette-fashion-dark.jpeg",
    "images": [
      "assets/products/lunette-fashion-dark.jpeg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Fashion Dark est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-fashion-gold",
    "name": "Lunette Fashion Gold",
    "price": 11025,
    "image": "assets/products/lunette-fashion-gold.jpeg",
    "images": [
      "assets/products/lunette-fashion-gold.jpeg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Fashion Gold est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-fashion-orange",
    "name": "Lunette Fashion Orange",
    "price": 13239,
    "image": "assets/products/lunette-fashion-orange.jpeg",
    "images": [
      "assets/products/lunette-fashion-orange.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Fashion Orange est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-green-fashion",
    "name": "Lunette Green Fashion",
    "price": 13132,
    "image": "assets/products/lunette-green-fashion.jpeg",
    "images": [
      "assets/products/lunette-green-fashion.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Green Fashion est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-green-modern",
    "name": "Lunette Green Modern",
    "price": 13033,
    "image": "assets/products/lunette-green-modern.jpeg",
    "images": [
      "assets/products/lunette-green-modern.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Green Modern est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-luxury-black",
    "name": "Lunette Luxury Black",
    "price": 11065,
    "image": "assets/products/lunette-luxury-black.jpeg",
    "images": [
      "assets/products/lunette-luxury-black.jpeg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Luxury Black est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-luxury-black2",
    "name": "Lunette Luxury Black2",
    "price": 11115,
    "image": "assets/products/lunette-luxury-black2.jpeg",
    "images": [
      "assets/products/lunette-luxury-black2.jpeg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Luxury Black2 est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-luxury-gold",
    "name": "Lunette Luxury Gold",
    "price": 10978,
    "image": "assets/products/lunette-luxury-gold.jpeg",
    "images": [
      "assets/products/lunette-luxury-gold.jpeg"
    ],
    "category": "solaire",
    "availability": "Stock limité",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Luxury Gold est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-luxury-gold2",
    "name": "Lunette Luxury Gold2",
    "price": 11028,
    "image": "assets/products/lunette-luxury-gold2.jpeg",
    "images": [
      "assets/products/lunette-luxury-gold2.jpeg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Luxury Gold2 est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-modern-black",
    "name": "Lunette Modern Black",
    "price": 11013,
    "image": "assets/products/lunette-modern-black.jpeg",
    "images": [
      "assets/products/lunette-modern-black.jpeg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Modern Black est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-modern-blue",
    "name": "Lunette Modern Blue",
    "price": 8127,
    "image": "assets/products/lunette-modern-blue.jpeg",
    "images": [
      "assets/products/lunette-modern-blue.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "En stock",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Modern Blue est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-modern-frame",
    "name": "Lunette Modern Frame",
    "price": 13027,
    "image": "assets/products/lunette-modern-frame.jpeg",
    "images": [
      "assets/products/lunette-modern-frame.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Modern Frame est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-modern-gold",
    "name": "Lunette Modern Gold",
    "price": 10926,
    "image": "assets/products/lunette-modern-gold.jpeg",
    "images": [
      "assets/products/lunette-modern-gold.jpeg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Modern Gold est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-night-style",
    "name": "Lunette Night Style",
    "price": 12958,
    "image": "assets/products/lunette-night-style.jpeg",
    "images": [
      "assets/products/lunette-night-style.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Night Style est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-optique-fashion",
    "name": "Lunette Optique Fashion",
    "price": 9877,
    "image": "assets/products/lunette-optique-fashion.jpeg",
    "images": [
      "assets/products/lunette-optique-fashion.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Optique Fashion est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-optique-luxury",
    "name": "Lunette Optique Luxury",
    "price": 9830,
    "image": "assets/products/lunette-optique-luxury.jpeg",
    "images": [
      "assets/products/lunette-optique-luxury.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "Stock limité",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Optique Luxury est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-optique-noire",
    "name": "Lunette Optique Noire",
    "price": 9674,
    "image": "assets/products/lunette-optique-noire.jpeg",
    "images": [
      "assets/products/lunette-optique-noire.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Optique Noire est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-orange-modern",
    "name": "Lunette Orange Modern",
    "price": 13140,
    "image": "assets/products/lunette-orange-modern.jpeg",
    "images": [
      "assets/products/lunette-orange-modern.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Orange Modern est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-1",
    "name": "Lunette Photo Gray 1",
    "price": 12942,
    "image": "assets/products/lunette-photo-gray-1.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-1.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 1 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-10",
    "name": "Lunette Photo Gray 10",
    "price": 12990,
    "image": "assets/products/lunette-photo-gray-10.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-10.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 10 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-11",
    "name": "Lunette Photo Gray 11",
    "price": 12991,
    "image": "assets/products/lunette-photo-gray-11.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-11.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 11 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-12",
    "name": "Lunette Photo Gray 12",
    "price": 12992,
    "image": "assets/products/lunette-photo-gray-12.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-12.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 12 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-13",
    "name": "Lunette Photo Gray 13",
    "price": 12993,
    "image": "assets/products/lunette-photo-gray-13.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-13.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 13 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-14",
    "name": "Lunette Photo Gray 14",
    "price": 12994,
    "image": "assets/products/lunette-photo-gray-14.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-14.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 14 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-15",
    "name": "Lunette Photo Gray 15",
    "price": 12995,
    "image": "assets/products/lunette-photo-gray-15.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-15.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 15 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-16",
    "name": "Lunette Photo Gray 16",
    "price": 12996,
    "image": "assets/products/lunette-photo-gray-16.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-16.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 16 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-17",
    "name": "Lunette Photo Gray 17",
    "price": 12997,
    "image": "assets/products/lunette-photo-gray-17.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-17.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 17 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-18",
    "name": "Lunette Photo Gray 18",
    "price": 12998,
    "image": "assets/products/lunette-photo-gray-18.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-18.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 18 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-19",
    "name": "Lunette Photo Gray 19",
    "price": 12999,
    "image": "assets/products/lunette-photo-gray-19.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-19.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 19 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-2",
    "name": "Lunette Photo Gray 2",
    "price": 12943,
    "image": "assets/products/lunette-photo-gray-2.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-2.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 2 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-20",
    "name": "Lunette Photo Gray 20",
    "price": 12991,
    "image": "assets/products/lunette-photo-gray-20.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-20.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 20 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-21",
    "name": "Lunette Photo Gray 21",
    "price": 12992,
    "image": "assets/products/lunette-photo-gray-21.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-21.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 21 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-22",
    "name": "Lunette Photo Gray 22",
    "price": 12993,
    "image": "assets/products/lunette-photo-gray-22.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-22.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 22 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-23",
    "name": "Lunette Photo Gray 23",
    "price": 12994,
    "image": "assets/products/lunette-photo-gray-23.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-23.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 23 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-24",
    "name": "Lunette Photo Gray 24",
    "price": 12995,
    "image": "assets/products/lunette-photo-gray-24.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-24.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 24 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-25",
    "name": "Lunette Photo Gray 25",
    "price": 12996,
    "image": "assets/products/lunette-photo-gray-25.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-25.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 25 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-26",
    "name": "Lunette Photo Gray 26",
    "price": 12997,
    "image": "assets/products/lunette-photo-gray-26.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-26.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 26 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-27",
    "name": "Lunette Photo Gray 27",
    "price": 12998,
    "image": "assets/products/lunette-photo-gray-27.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-27.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 27 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-28",
    "name": "Lunette Photo Gray 28",
    "price": 12999,
    "image": "assets/products/lunette-photo-gray-28.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-28.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 28 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-29",
    "name": "Lunette Photo Gray 29",
    "price": 13000,
    "image": "assets/products/lunette-photo-gray-29.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-29.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 29 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-3",
    "name": "Lunette Photo Gray 3",
    "price": 12944,
    "image": "assets/products/lunette-photo-gray-3.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-3.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 3 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-30",
    "name": "Lunette Photo Gray 30",
    "price": 12992,
    "image": "assets/products/lunette-photo-gray-30.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-30.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 30 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-31",
    "name": "Lunette Photo Gray 31",
    "price": 12993,
    "image": "assets/products/lunette-photo-gray-31.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-31.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 31 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-32",
    "name": "Lunette Photo Gray 32",
    "price": 12994,
    "image": "assets/products/lunette-photo-gray-32.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-32.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 32 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-33",
    "name": "Lunette Photo Gray 33",
    "price": 12995,
    "image": "assets/products/lunette-photo-gray-33.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-33.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 33 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-34",
    "name": "Lunette Photo Gray 34",
    "price": 12996,
    "image": "assets/products/lunette-photo-gray-34.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-34.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 34 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-35",
    "name": "Lunette Photo Gray 35",
    "price": 12997,
    "image": "assets/products/lunette-photo-gray-35.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-35.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 35 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-36",
    "name": "Lunette Photo Gray 36",
    "price": 12998,
    "image": "assets/products/lunette-photo-gray-36.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-36.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 36 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-37",
    "name": "Lunette Photo Gray 37",
    "price": 12999,
    "image": "assets/products/lunette-photo-gray-37.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-37.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 37 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-38",
    "name": "Lunette Photo Gray 38",
    "price": 13000,
    "image": "assets/products/lunette-photo-gray-38.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-38.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 38 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-39",
    "name": "Lunette Photo Gray 39",
    "price": 13001,
    "image": "assets/products/lunette-photo-gray-39.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-39.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 39 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-4",
    "name": "Lunette Photo Gray 4",
    "price": 12945,
    "image": "assets/products/lunette-photo-gray-4.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-4.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 4 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-40",
    "name": "Lunette Photo Gray 40",
    "price": 12993,
    "image": "assets/products/lunette-photo-gray-40.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-40.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 40 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-41",
    "name": "Lunette Photo Gray 41",
    "price": 12994,
    "image": "assets/products/lunette-photo-gray-41.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-41.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 41 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-5",
    "name": "Lunette Photo Gray 5",
    "price": 12946,
    "image": "assets/products/lunette-photo-gray-5.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-5.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 5 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-6",
    "name": "Lunette Photo Gray 6",
    "price": 12947,
    "image": "assets/products/lunette-photo-gray-6.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-6.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 6 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-7",
    "name": "Lunette Photo Gray 7",
    "price": 12948,
    "image": "assets/products/lunette-photo-gray-7.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-7.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 7 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-8",
    "name": "Lunette Photo Gray 8",
    "price": 12949,
    "image": "assets/products/lunette-photo-gray-8.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-8.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 8 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photo-gray-9",
    "name": "Lunette Photo Gray 9",
    "price": 12950,
    "image": "assets/products/lunette-photo-gray-9.jpeg",
    "images": [
      "assets/products/lunette-photo-gray-9.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photo Gray 9 est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photochromique-fashion",
    "name": "Lunette Photochromique Fashion",
    "price": 11629,
    "image": "assets/products/lunette-photochromique-fashion.jpeg",
    "images": [
      "assets/products/lunette-photochromique-fashion.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photochromique Fashion est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photochromique-luxe",
    "name": "Lunette Photochromique Luxe",
    "price": 11331,
    "image": "assets/products/lunette-photochromique-luxe.jpeg",
    "images": [
      "assets/products/lunette-photochromique-luxe.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photochromique Luxe est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photochromique-premium",
    "name": "Lunette Photochromique Premium",
    "price": 11652,
    "image": "assets/products/lunette-photochromique-premium.jpeg",
    "images": [
      "assets/products/lunette-photochromique-premium.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photochromique Premium est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-photochromique-style",
    "name": "Lunette Photochromique Style",
    "price": 11446,
    "image": "assets/products/lunette-photochromique-style.jpeg",
    "images": [
      "assets/products/lunette-photochromique-style.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Photochromique Style est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-prada-gold",
    "name": "Lunette Prada Gold",
    "price": 10801,
    "image": "assets/products/lunette-prada-gold.jpeg",
    "images": [
      "assets/products/lunette-prada-gold.jpeg"
    ],
    "category": "solaire",
    "availability": "Stock limité",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Prada Gold est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-prada-purple",
    "name": "Lunette Prada Purple",
    "price": 13043,
    "image": "assets/products/lunette-prada-purple.jpeg",
    "images": [
      "assets/products/lunette-prada-purple.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Prada Purple est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-premium-vision",
    "name": "Lunette Premium Vision",
    "price": 9789,
    "image": "assets/products/lunette-premium-vision.jpeg",
    "images": [
      "assets/products/lunette-premium-vision.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Premium Vision est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-shop-display",
    "name": "Lunette Shop Display",
    "price": 13059,
    "image": "assets/products/lunette-shop-display.jpeg",
    "images": [
      "assets/products/lunette-shop-display.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Shop Display est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-signature-black",
    "name": "Lunette Signature Black",
    "price": 9845,
    "image": "assets/products/lunette-signature-black.jpeg",
    "images": [
      "assets/products/lunette-signature-black.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "Stock limité",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Signature Black est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-signature-gold",
    "name": "Lunette Signature Gold",
    "price": 9758,
    "image": "assets/products/lunette-signature-gold.jpeg",
    "images": [
      "assets/products/lunette-signature-gold.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Signature Gold est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-solaire-noire",
    "name": "Lunette Solaire Noire",
    "price": 11151,
    "image": "assets/products/lunette-solaire-noire.jpg",
    "images": [
      "assets/products/lunette-solaire-noire.jpg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette Solaire Noire est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-sun-premium",
    "name": "Lunette Sun Premium",
    "price": 9467,
    "image": "assets/products/lunette-sun-premium.jpeg",
    "images": [
      "assets/products/lunette-sun-premium.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Lunette Sun Premium est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "lunette-trending-style",
    "name": "Lunette Trending Style",
    "price": 13279,
    "image": "assets/products/lunette-trending-style.jpeg",
    "images": [
      "assets/products/lunette-trending-style.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Lunette Trending Style est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-uv-protection",
    "name": "Lunette UV Protection",
    "price": 11189,
    "image": "assets/products/lunette-uv-protection.jpeg",
    "images": [
      "assets/products/lunette-uv-protection.jpeg"
    ],
    "category": "solaire",
    "availability": "En stock",
    "description": "Protection solaire maximale avec style élégant et confort renforcé.",
    "longDescription": "Lunette UV Protection est conçue pour offrir style, confort et performance.",
    "features": [
      "Protection UV",
      "Verres polarisés",
      "Style premium",
      "Confort extérieur"
    ],
    "badge": "Solaire",
    "featured": false,
    "promo": true
  },
  {
    "id": "lunette-vision-pro",
    "name": "Lunette Vision Pro",
    "price": 8059,
    "image": "assets/products/lunette-vision-pro.jpeg",
    "images": [
      "assets/products/lunette-vision-pro.jpeg"
    ],
    "category": "anti-lumiere",
    "availability": "En stock",
    "description": "Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.",
    "longDescription": "Lunette Vision Pro est conçue pour offrir style, confort et performance.",
    "features": [
      "Filtre lumière bleue",
      "Monture légère",
      "Confort prolongé",
      "Design premium"
    ],
    "badge": "Anti lumière bleue",
    "featured": false,
    "promo": false
  },
  {
    "id": "social-instagram-premium",
    "name": "Social Instagram Premium",
    "price": 9957,
    "image": "assets/products/social-instagram-premium.jpeg",
    "images": [
      "assets/products/social-instagram-premium.jpeg"
    ],
    "category": "anti-reflet",
    "availability": "En stock",
    "description": "Traitement anti reflet pour une vision claire et confortable en toutes conditions.",
    "longDescription": "Social Instagram Premium est conçue pour offrir style, confort et performance.",
    "features": [
      "Traitement anti reflet",
      "Vision nette",
      "Monture élégante",
      "Usage quotidien"
    ],
    "badge": "Anti reflet",
    "featured": false,
    "promo": false
  },
  {
    "id": "social-promo",
    "name": "Social Promo",
    "price": 12237,
    "image": "assets/products/social-promo.jpeg",
    "images": [
      "assets/products/social-promo.jpeg"
    ],
    "category": "photochromique",
    "availability": "Stock limité",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Social Promo est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  },
  {
    "id": "social-story-lunette",
    "name": "Social Story Lunette",
    "price": 13071,
    "image": "assets/products/social-story-lunette.jpeg",
    "images": [
      "assets/products/social-story-lunette.jpeg"
    ],
    "category": "photochromique",
    "availability": "En stock",
    "description": "Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.",
    "longDescription": "Social Story Lunette est conçue pour offrir style, confort et performance.",
    "features": [
      "Verres photochromiques",
      "Protection UV",
      "Anti reflet",
      "Monture moderne"
    ],
    "badge": "Photochromique",
    "featured": false,
    "promo": true
  }
];

const TESTIMONIALS = [
  {
    "name": "Aïssatou D.",
    "role": "Cliente satisfaite",
    "text": "J'ai acheté une paire anti lumière bleue et je sens vraiment la différence. Livraison rapide et service très professionnel."
  },
  {
    "name": "Moussa K.",
    "role": "Client fidèle",
    "text": "Monture élégante et très confortable. J'adore le traitement anti reflet, parfait pour le bureau et le soleil."
  },
  {
    "name": "Fatou S.",
    "role": "Nouvelle cliente",
    "text": "Le service WhatsApp m'a aidé à choisir la meilleure paire. Je recommande fortement Pikine Optique Vision."
  }
]

const ORDERS_KEY = "pikine-optique-vision-orders";
const PRODUCTS_KEY = "pikine-optique-vision-products";

const getStoredProducts = () => {
  const stored = localStorage.getItem(PRODUCTS_KEY);
  if (!stored) {
    return PRODUCTS;
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : PRODUCTS;
  } catch (error) {
    console.warn('Produit localStorage invalide, restauration des produits par défaut.', error);
    return PRODUCTS;
  }
};

const saveProducts = (productList) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(productList));
};

const getStoredOrders = () => {
  const stored = localStorage.getItem(ORDERS_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveOrder = (order) => {
  const current = getStoredOrders();
  current.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(current));
};

const CONTACTS_KEY = "pikine-optique-vision-contacts";

function getStoredContacts() {
  const stored = localStorage.getItem(CONTACTS_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveContact(contact) {
  const current = getStoredContacts();
  current.unshift(contact);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(current));
}

window.getStoredContacts = getStoredContacts;
window.saveContact = saveContact;
