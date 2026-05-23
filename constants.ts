import { Project, Experience, Education, BlogPost, GalleryItem } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/zinebkadrif",
  facebook: "https://www.facebook.com/share/17caKcRfYq/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/znb_kad?igsh=MWZ3YzY2bjU0eTB2ZQ%3D%3D&utm_source=qr",
  tiktok: "https://www.tiktok.com/@zeykad6",
  email: "zinebkadrif.7@gmail.com",
  phone: "(+212) 6 93 81 58 64",
  whatsapp: "https://wa.me/212693815864",
  location: "Worldwide"
};

export const SKILLS = [
  "Visual Communication",
  "UX/UI Design",
  "Digital Media Design",
  "Branding & Identity",
  "Adobe Creative Suite",
  "Figma & Canva",
  "SEO Optimization",
  "CRM",
  "HTML/CSS Basics",
  "Content Strategy",
  "Social Media Management"
];

export const TOOLS = [
  { name: "Meta Business Suite", icon: "https://cdn.simpleicons.org/meta" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  { name: "Wix", icon: "https://cdn.simpleicons.org/wix" },
  { name: "Weebly", icon: "https://cdn.simpleicons.org/weebly" },
  { name: "Veo 3", icon: "https://cdn.simpleicons.org/google" },
  { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai" },
  { name: "DALL·E", icon: "https://cdn.simpleicons.org/openai" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
  { name: "Adobe CC", icon: "https://cdn.simpleicons.org/adobecreativecloud" },
  { name: "Photoshop", icon: "https://cdn.simpleicons.org/adobephotoshop" },
  { name: "Premiere Pro", icon: "https://cdn.simpleicons.org/adobepremierepro" },
  { name: "Illustrator", icon: "https://cdn.simpleicons.org/adobeillustrator" },
  { name: "InDesign", icon: "https://cdn.simpleicons.org/adobeindesign" },
  { name: "After Effects", icon: "https://cdn.simpleicons.org/adobeaftereffects" },
  { name: "Adobe Portfolio", icon: "https://cdn.simpleicons.org/adobe" },
  { name: "Dreamweaver", icon: "https://cdn.simpleicons.org/adobedreamweaver" },
  { name: "Microsoft Suite", icon: "https://cdn.simpleicons.org/microsoft" },
  { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify" },
  { name: "Visual Studio", icon: "https://cdn.simpleicons.org/visualstudio" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
];

export const EDUCATION: Education[] = [
  {
    institution: "Al Akhawayn University in Ifrane",
    degree: "Master of Arts in Communication Studies and Digital Media",
    concentration: "Visual Communications and Digital Design",
    date: "Sep 2021 - Dec 2023",
    thesis: {
      title: "The Status of HCD in the Moroccan Visual Communication Field",
      description: "Examined the Status of Human-Centric Design in the Moroccan Visual Communication Field (Case of Moroccan Food and Beverage Industries).",
      link: "https://drive.google.com/file/d/1XWLUlD4rYexOltNbvdVXC42O0owdrETI/view?usp=sharing",
      date: "Dec 2023"
    }
  },
  {
    institution: "Al Akhawayn University in Ifrane",
    degree: "Bachelor of Arts in Communication Studies",
    concentration: "Media Production",
    minor: "Psychology",
    date: "Sep 2015 - Jul 2021",
    capstone: {
      title: "Bardahl Brand Identity & Strategy",
      description: "Bardahl is known for its high-quality engine oils, additives, and lubricants. Company's website: <a href='http://www.bardahl.ma' target='_blank' rel='noopener noreferrer' class='font-bold text-blue-600 underline hover:text-blue-800'>http://www.bardahl.ma</a>",
      slides: [
        {
          description: "<strong>Brand Story:</strong><br/><br/>Youssef is a young Moroccan entrepreneur. He loves extreme sports, adventures and taking risks. He is a member of the FIA (Fédération Internationale de l’Automobile) organization as a racing driver. He cares about his vehicles; cars and motorbikes. His hobby is traveling throughout Morocco on his motorbike. For him, vehicle products are like feeding a baby. To prevent vehicles from damage, they need to be taken care of more often, using high-quality products.<br/><br/>In the past, he was forced to purchase expensive products from abroad. He suffered financially and struggled with shipping to find high-quality products for the maintenance of his vehicles. This was before Bardahl Maroc entered the market in Morocco and the time of purchasing expensive and ineffective products is now over.<br/><br/>At Bardahl Maroc, the products and services offered are built around the client’s needs and comfort, offering the best quality for the customers.<br/><br/>As quoted by Ole Bardahl, the brand's original founder; “if we can’t produce the best additive in the world we can’t produce any”."
        },
        {
          description: "<strong>Mores (How they belong?):</strong><br/>- Loyal customers and consumers<br/>- Skeptical about sport<br/>- Understand the chemicals of moto’s, cars, engine products and how they function.<br/>- Not naïve<br/>- Trustworthy<br/>- Interested in new innovative product and limited editions<br/>- Seek quality first"
        },
        {
          description: "Persona: Risk Taker",
          image: "https://i.ibb.co/BHyRP0mn/slide20-img7.jpg"
        },
        {
          description: "<strong>Company (POV):</strong><br/><br/><strong>Purpose (Why we exist?):</strong><br/>We believe in producing the best additives to not only satisfy the needs of our clients, but providing them with the best in the market. We are committed to our customers because their comfort relies on the quality of our products."
        },
        {
          description: "<strong>Only-ness (What we offer?):</strong><br/>We offer our customers efficiency and good quality. Good products for the engines with special chemical materials that reduce frictions, in order for the engines to continue running better for a long period of time, as well as to prevent the engines from damaging. All of that is to satisfy the clients and to make them experience extreme adventure."
        },
        {
          description: "<strong>Only-ness statement (Tagline):</strong><br/>\"Bardahl is the only company that produces lubricant AND believes comfort comes first and its work has to be adjusted to the customers needs.\""
        },
        {
          description: "<strong>Values (How we behave?):</strong><br/>The value of our products and services provide the clients with a sense of power, adventure and comfort and allow them to use the best quality in the market for their vehicles. They also believe in creating the need, quality justify the price and comfort comes first."
        },
        {
          description: "Color Palette",
          colors: [
            { name: "Black", hex: "#000000" },
            { name: "White", hex: "#FFFFFF" },
            { name: "Middle Yellow", hex: "#FAE52D" }
          ]
        },
        {
          description: "Visual Exploration: Developing mood boards and initial sketches to define the new direction.",
          image: "https://i.ibb.co/6c25V7s1/concept-map.png"
        },
        {
          description: "logo sketches",
          image: "https://i.ibb.co/PGPbB3xn/Screenshot-2025-12-05-at-21-57-42.png"
        },
        {
          description: "<strong>Customers (IAM):</strong><br/><br/><strong>Identity (Who are they?):</strong><br/>- Both female and male<br/>- Adults from different ages and regions<br/>- Direct and indirect: individuals, corporations and distributors<br/>- Generally, middle and upper class<br/>- Loyal customers and consumers.<br/>- Sport experts<br/>- Have at least a basic understanding of how engines and moto’s function and what they need."
        },
        {
          description: "<strong>Aims (What do they want?):</strong><br/>The customers’ AIMS consist of:<br/>- Able to purchase Bardahl’s product<br/>- Care about quality more than money<br/>- Risk takers and into extreme sport<br/>- Love sense of adventure<br/>- Young spirit<br/>- Interested in new innovative solutions<br/>- Control over their vehicles"
        },
        {
          description: "business cards",
          image: "https://i.ibb.co/WNyGwx6w/image-1-1764804374430.png"
        },
        {
          description: "Poster",
          image: "https://i.ibb.co/r2bCzyNf/Screenshot-2025-12-06-at-21-23-09.png"
        },
        {
          description: "Video Advertisement Prototype",
          video: "https://youtu.be/EZt-HsX0cAY"
        }
      ]
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "delices-orientales",
    company: "Les Délices Orientales de Jamile",
    role: "Social Media & E-commerce Content Manager",
    date: "Jul 2025 – Mar 2026",
    description: [
      "Scaled digital presence to 14.9K Instagram followers by leading end-to-end transformation and professional social media account management.",
      "Developed a custom E-commerce website using Wix and WooCommerce, optimizing product listings and checkout flows to enhance user experience (UX).",
      "Executed targeted Meta Ads campaigns to drive qualified traffic and sales in the food & beverage sector.",
      "Produced high-impact visuals using AI design tools and Adobe Creative Suite, ensuring brand consistency."
    ],
    relatedLinks: [
      {
        groupName: "Live Channels",
        links: [
          { platform: "Wix E-commerce", url: "https://achrafjamil1.wixsite.com/delicejamil" },
          { platform: "Instagram", url: "https://www.instagram.com/doriental_jamil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" }
        ]
      }
    ],
    images: [
      {
        url: "https://i.ibb.co/jvYByNbg/homepage-DOJ.png",
        link: "https://achrafjamil1.wixsite.com/delicejamil",
        alt: "homepage-DOJ"
      },
      {
        url: "https://i.ibb.co/zHNbpsRN/instagram-DOJ.png",
        link: "https://www.instagram.com/doriental_jamil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        alt: "instagram-DOJ"
      }
    ]
  },
  {
    id: "inara",
    company: "Inara Distribution",
    role: "Communication & Digital Marketing Intern",
    date: "Jan 2025 – Jun 2025",
    description: [
      "Managed and planned social media strategies and customer engagement as Community and Social Media Manager via Meta Business Suite.",
      "Created visual and written content for the BRICOMA franchise and hypermarket (brochures, flyers, thumbnails, reels, catalogs).",
      "Designed marketing materials and in-store layouts for the premium brand ORA.",
      "Optimized content based on SEO best practices to improve visibility and engagement.",
      "Handled product uploads and listings on Jumia Vendor, DestockLight, and Luxalight websites.",
      "Engaged more than 760 users in three months and achieved a 92% client satisfaction rate."
    ],
    relatedLinks: [
      {
        groupName: "Luxalight",
        links: [
          { platform: "Website", url: "https://luxalight.ma" },
          { platform: "Instagram", url: "https://www.instagram.com/luxalight?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
          { platform: "Facebook", url: "https://web.facebook.com/luxalight.ma" },
          { platform: "TikTok", url: "https://www.tiktok.com/@luxalight.officiel" }
        ]
      },
      {
        groupName: "Destock-Light",
        links: [
          { platform: "Website", url: "https://destock-light.ma/fr/" },
          { platform: "Instagram", url: "https://www.instagram.com/destocklight?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
          { platform: "Facebook", url: "https://web.facebook.com/profile.php?id=61573250604659" },
          { platform: "TikTok", url: "https://www.tiktok.com/@destocklight" }
        ]
      }
    ],
    images: [
      {
        url: "https://i.ibb.co/0y4q4RMs/Screenshot-2025-12-05-at-21-30-27.png",
        link: "https://drive.google.com/file/d/1EGtrUT9gJhuVwB7lstQrnCWEoLzRedeo/view?usp=sharing",
        alt: "LuxaLight Catalogue"
      },
      {
        url: "https://i.ibb.co/w1666zg/69f165db8e2-2.png",
        link: "https://drive.google.com/file/d/13SFz75r4jGIsvtQ8NjrWQC9Ffs5IYOL6/view?usp=sharing",
        alt: "ORA Lighting Catalogue"
      },
      {
        url: "https://i.ibb.co/BKvSJM5Q/h-D-VW-d5-L.png",
        link: "https://drive.google.com/file/d/1EEI24MWg1Hi0JNgRtkTukZBqbYBsymWV/view?usp=sharing",
        alt: "Luxalight Brochure"
      },
      {
        url: "https://i.ibb.co/35bGJcFm/Screenshot-2025-12-07-at-01-47-56.png",
        link: "https://ibb.co/p6TGmdKj",
        alt: "3D product packaging desing"
      },
      {
        url: "https://i.ibb.co/bkZpYPP/PBTi-EXpzo.png",
        link: "https://drive.google.com/file/d/1lbXQo_MZmFJ54Ug8chtKOkpEldT0SirO/view?usp=share_link",
        alt: "Bricoma Poster"
      },
      {
        url: "https://i.ibb.co/N6DrGyqy/Screenshot-2025-12-08-at-23-52-06.png",
        alt: "Bricoma Poster"
      },
      {
        url: "https://i.ibb.co/v6Kjz2Mw/Screenshot-2025-12-08-at-23-59-44.png",
        alt: "Bricoma Poster"
      },
      {
        url: "https://i.ibb.co/nsX9ZdG3/Screenshot-2025-12-09-at-00-32-32.png",
        alt: "Social Media"
      },
      {
        url: "https://i.ibb.co/FqJ029Cb/Screenshot-2025-12-09-at-00-34-52.png",
        alt: "Social Media"
      },
      {
        url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop",
        link: "https://www.instagram.com/reel/DImVFqqJCCU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        alt: "Instagram Reel"
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "moteur",
    title: "Phone Application Design",
    role: "UX & UI Design",
    date: "Feb 2022 - Apr 2022",
    description: "Redesigned Moteur’s website into an engaging, user-friendly interface to enhance user experience.",
    fullDescription: "A complete overhaul of the Moteur digital presence. The project involved deep user research, persona creation, and wireframing to solve navigation issues. The final high-fidelity prototypes focused on a cleaner information architecture, resulting in a projected 30% increase in traffic.",
    tags: ["UX/UI", "Application Design", "Figma", "Prototyping"],
    imageUrl: "https://i.ibb.co/ksDHp9jz/Screenshot-2025-12-09-at-23-52-37.png",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    sliderSlides: [
        {
            imageUrl: "https://i.ibb.co/ksDHp9jz/Screenshot-2025-12-09-at-23-52-37.png",
            description: "The splash screen is the first page the person will be looking at. It will provide him with two choices: either to swipe left to sell or to swipe right to buy.  The user has an optional choice to subscribe in order to receive new offers and deals, etc."
        },
        {
            imageUrl: "https://i.ibb.co/VpCCWbQj/Screenshot-2025-12-09-at-23-52-45.png",
            description: "If the user swiped right to buy, he will be directed to the following screen. <br/>In this second step, the user will have the options to select the type of vehicle he prefers to look at as well as to select if he prefers to look at used or new vehicles. In addition to the option of looking at any of the listed brands of his preference. <br/>Also, this page is associated with the button ‘home’ at the bottom of the page."
        },
        {
            imageUrl: "https://i.ibb.co/JjBjBppX/Screenshot-2025-12-09-at-23-52-52.png",
            description: "If the person clicks on the navigation option he would be able to access the following: Home, My account, Contact Us, Sell Vehicle, Terms of Sales,  Help"
        },
        {
            imageUrl: "https://i.ibb.co/JFwzcPhP/Screenshot-2025-12-09-at-23-52-59.png",
            description: "If the user chooses the option of cars, he would be directed to the following screen. In this page, he will see limited offers and a filter option. The purpose of the filter option is to help the client to narrow down his searching."
        },
        {
            imageUrl: "https://i.ibb.co/3547LqQc/Screenshot-2025-12-09-at-23-53-13.png",
            description: "This is how the filter content look like.<br/>The person can search by: Brand, Km, Automatic or Manuel, type of fuel, Style of the vehicle, year, the city, and number of horses.<br/>(this step is the same if the person selects different category: Car, Jetsky, Truck or Moto)"
        },
        {
            imageUrl: "https://i.ibb.co/nNGXzR0V/Screenshot-2025-12-09-at-23-53-19.png",
            description: "If the person found the item he was looking for and clicked, he would be directed to this screen.<br/>In this step, the person will find all the important information needed in a well organized order.  The images of items are in a valuable size, since people always prefer to look at the pictures of the offered vehicles first."
        },
        {
            imageUrl: "https://i.ibb.co/Fpwx1Zp/Screenshot-2025-12-09-at-23-53-26.png",
            description: "If the user chooses to buy or to sell a vehicle, he will have to sign first.<br/>The reason is to respect the company’s policy and the article 09–08 that claim any website visitor has the right to look at the offers, articles, and company’s information before subscribing. Moreover, this step will prevent scammers from disturbing the company and the sellers."
        },
        {
            imageUrl: "https://i.ibb.co/nM7L4kFt/Screenshot-2025-12-09-at-23-53-32.png",
            description: "If the person does not have an account, he will have to create one in order to purchase. <br/>This screen is the same if the person selects ‘My account’ from the navigation option."
        },
        {
            imageUrl: "https://i.ibb.co/x8XR1gtr/Screenshot-2025-12-09-at-23-53-46.png",
            description: "In step 1, if the person swipes left to sell, he will be directed to the following screen to enter the necessary information and to avoid scammers. <br/>This screen is the same if the person selects ‘Sell Vehicle’  from the navigation option."
        },
        {
            imageUrl: "https://i.ibb.co/gFPLW18T/Screenshot-2025-12-09-at-23-53-53.png",
            description: "This screen shows if the person selects ‘Contact Us’ from the navigation option."
        },
        {
            imageUrl: "https://i.ibb.co/tp1dB0CM/Screenshot-2025-12-09-at-23-53-38.png",
            description: "This screen shows if the person selects ‘Terms of Sales’ from the navigation option"
        },
        {
            imageUrl: "https://i.ibb.co/jvHTmSzm/Screenshot-2025-12-09-at-23-54-00.png",
            description: "This screen shows if the person selects the like button at the bottom of the screen to see his list of favorite items."
        }
    ]
  },
  {
    id: "ifrane-delivery",
    title: "Ifrane Delivery Advertisement Campaign",
    role: "Digital Advertisement",
    date: "Jan 2021 - Apr 2021",
    description: "Designed visual packaging and produced promotional video content during COVID-19.",
    fullDescription: "Soufiane Bahemmou, 28, takes us with him on his journey as Ifrane's main delivery service guy. He wears his hat, picks up his phone and takes a quick look at his orders through a new delivery application, starts up his engine and heads to a restaurant called For You. He picks up the order and drives us straight to Al Ghazala, one of the city’s most popular residences. He knocks on the customer’s door, a student from Al Akhawayn university. With a welcoming on his face, the customer takes his order and exchanges money. Soufiane goes right back to his car and checks his application again to take care of more orders. This is the new face of delivery of Ifrane.",
    tags: ["Storytelling", "Filmmaking/Editing", "Content Creation"],
    imageUrl: "https://i.ibb.co/XxfSXVW4/image2.png",
    layout: 'report',
    reportTitle: "Ifrane’s New Delivery Service: Is It Good?",
    sliderSlides: [
        {
            imageUrl: "https://i.ibb.co/C3ggP3cT/image1.gif",
            description: "Thankfully for Ifrane residents, on February 9th, 2021, a new food delivery system called Ifrane Delivery was implemented by two guys from Ifrane. Instead of having to call a taxi driver, Ifrane businesses have now made it possible to bring your order to your doorstep with just a few clicks.<br/><br/>Taking this COVID-19 restriction into account, it is clear that this new service came in at the right time. But how effective and affordable is this new delivery service system compared to the old one?<br/><br/>Soufiane began this journey as a waiter in For You, a popular restaurant in Ifrane. He started by delivering food on a small motorbike. Soufiane kept working very hard until he managed to upgrade to a delivery car.<br/><br/>One day, he had the brilliant idea of working with his partner on an application through which local residents can make their orders. “Having the new COVID-19 restrictions in mind, and the fact that Al Akhawayn students can only leave campus two hours per day, we decided to go through with the idea to provide this service”, he says. They managed to work with a variety of food places that include Foodie, For You and Lyn. Clients can also make orders from the Marché and Tarik shop. “The process is simple. What I normally do to get these orders is by checking the orders section on my delivery application, then, I either call up the food place or shop, or go straight to the desired location to give them the order. When they are ready, I pick them up, go to the indicated address and knock on the client’s door”, explains Soufiane. “Either that, or clients can just call the business, then the business calls me to pick up their food, and gives me the address pierce”.",
            imageSize: "small"
        },
        {
            imageUrl: "https://i.ibb.co/XxfSXVW4/image2.png",
            description: "A few weeks later, it seemed to them that it was indeed a good idea since it got popular among the residents and Al Akhawayn University students, as a wide variety of them have been using it ever since.<br/><br/>Foodie, Ifrane's most popular fast-food place, faced conflicts with taxi drivers in the past. The owners of the city's most popular shop faced those issues as well. \"None of us liked how taxi drivers used to be in charge of a matter like this. Our clients would often call to complain about their orders being forgotten, which wasn't our fault. It was nothing that was in our control.\", explains 29-year-old Tarik shop owner Abdelilah. Oussama Bogho, 25, another Ifrane resident who takes care of the orders at Foodie, also expressed similar concerns. \"Taxi drivers were abnormally slow. Clients would often complain about the food being cold because of how late it came in. It was a big disadvantage to us because a good portion of our clients used to avoid having their food delivered.\", expressed Oussama. \"Concerning the new delivery service, it worked out really well for us because we give all the orders to the delivery guy, who goes straight to the people's houses to get it delivered. People stopped complaining ever since, which released a lot of pressure on the workers here, and possibly everywhere else for that matter.\""
        },
        {
            description: "On the other hand, taxi drivers do not seem to be pleased about these new ways of delivery. Omar, who did not want to reveal his last name, is a 32 year old who has been a taxi driver for 7 years. \"I used to deliver food to Ifrane people and mainly Al Akhawayn students all the time. I worked hard to raise his income and had their food delivered in no time. It is very sad to us people who work in this field that a big part of our income is being taking away from us. Our reputation was tarnished by these new delivery people claiming that all taxi drivers were slow and did not do their job right.\". Omar was frustrated by the change, claiming that it \"was a big disadvantage to all taxi drivers of Ifrane\".<br/><br/>Unfortunately for these taxi drivers, this new delivery service seems to be preferred among some AUI students as well, as it is much faster than the old one and is able to provide more options, according to Nisrine Hadhoudi, a 20-year-old business student at AUI. “It allows clients to customize their order, which makes it much more effective, and it is also more affordable: this system made sure their clients got to pay less than they did before, which allowed for an easier lifestyle.”, she says. <br/><br/>Another business student at the university, Asmae Abbou, 19, indicated that this service had a huge importance on people’s lives after COVID-19, claiming that “she would not have lived well without it”. At times, the application would stop working for her, which she qualified as a huge downside because she, alongside other students who were having a rough semester, became highly dependent on the service."
        },
        {
            imageUrl: "https://i.ibb.co/p6nHbjLP/image3.png",
            description: "Although a big part of taxi drivers’ income had to be sacrificed, the rise of a service of the sort has been completely efficient. Looking at the success of this application among Ifrane’s people, it is clear that this could be the perfect service for all Moroccan citizens to get through these tough pandemic times."
        },
        {
            videoUrl: "https://www.youtube.com/watch?v=fn6jwbjQGs4",
            description: ""
        }
    ]
  },
  {
    id: "raffi-art",
    title: "Raffi'Art Brand Strategy",
    role: "Internship Project",
    date: "May 2020 - Aug 2020",
    description: "Enhanced brand image for a startup. Designed visual assets including logos and social media profiles.",
    tags: ["Graphic Design", "Social Media", "Branding"],
    imageUrl: "https://i.ibb.co/JYy4h9H/slide1-img1.jpg",
    sliderSlides: [
        {
            imageUrl: "https://i.ibb.co/JYy4h9H/slide1-img1.jpg",
            description: "<strong>Company's Overview:</strong><br/><br/>- New Moroccan fashion brand 100 % handmade and vegan.<br/>- It consists of producing artistic products, mainly shoes, handbags and accessories made of a raw material coming from the leaves of the Raffia tree imported from Madagascar.<br/>- The brand works in collaboration with handcraft, mainly women from rural areas.<br/>- The company targets international market and exports its product to United States, Canada, Japan, Germany and Australia."
        },
        {
            imageUrl: "https://i.ibb.co/k63jCSYQ/clean-browser-mockup-2.png",
            description: "<strong>Brand Identity & Digital Presence:</strong><br/><br/>The project aimed to establish a strong visual identity that resonates with the target audience, ensuring consistency across all digital touchpoints."
        }
    ]
  }
];

export const LOVED_DESIGNS: GalleryItem[] = [
  // Photography Collection
  {
    id: "photography-sky-2",
    imageUrl: "https://i.ibb.co/QvDR6K1h/SKY2.jpg", 
    title: "Cerulean Escape",
    category: "photography",
    description: "A breathtaking view of the infinite sky, capturing the ethereal beauty of clouds and the vastness of the horizon."
  },
  {
    id: "photography-purple-2",
    imageUrl: "https://i.ibb.co/YFBYg0pp/purple2.jpg", 
    title: "Purple Horizon",
    category: "photography",
    description: "A striking capture of atmospheric depth, blending vibrant purples with soft shadows to create a surreal, dreamlike landscape."
  },
  {
    id: "photography-ethereal",
    imageUrl: "https://i.ibb.co/S4rqknQm/purple3.jpg", 
    title: "Ethereal Glow",
    category: "photography",
    description: "A continuation of the atmospheric series, exploring the interplay of neon light and shadow to create an immersive, futuristic mood."
  },
  {
    id: "photography-lonely",
    imageUrl: "https://i.ibb.co/F4bYDDPX/lonely.jpg", 
    title: "Solitude",
    category: "photography",
    description: "A poignant exploration of minimal landscapes, capturing a solitary figure to evoke deep emotional resonance and quiet reflection."
  },
  {
    id: "photography-hand",
    imageUrl: "https://i.ibb.co/PGqgFJYb/hand.jpg", 
    title: "Touch of Nature",
    category: "photography",
    description: "A creative close-up exploring the tactile connection between human presence and natural textures."
  },
  {
    id: "photography-purple",
    imageUrl: "https://i.ibb.co/ccW7SZ5V/purple.jpg", 
    title: "Purple Vibe",
    category: "photography",
    description: "A creative exploration of light and mood, focusing on deep purple tones to evoke a sense of mystery and modern aesthetic."
  },
  {
    id: "dayaa-photo",
    imageUrl: "https://i.ibb.co/N2Rz2CBB/dayaa.jpg", 
    title: "Dayaa - Serenity",
    category: "photography",
    description: "Capturing the calm essence of Moroccan water landscapes, exploring symmetry and natural light."
  },
  // Visual Narratives Collection
  {
    id: "narrative-mids",
    imageUrl: "https://i.ibb.co/N25pVf95/mids.jpg", 
    title: "Cinematic Fragments",
    category: "visual-narrative",
    description: "A visual strip exploring narrative pacing and cinematic atmosphere through light and composition."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "hcd-morocco",
    title: "The Status of HCD in Morocco",
    excerpt: "Exploring how Human-Centered Design is evolving within the Moroccan creative industry, specifically in food and beverage sectors.",
    content: "<p>Human-Centered Design (HCD) is more than a buzzword; it's a fundamental shift in how we approach problem-solving. In Morocco, the adoption of HCD principles is growing, particularly in the visual communication field. My research focuses on how these methodologies are applied within the food and beverage industries, revealing a unique blend of traditional cultural values and modern design thinking.</p><p>Key findings suggest that while awareness is increasing, practical application often faces hurdles due to budget constraints and a lack of standardized processes. However, the potential for HCD to revolutionize local branding is immense, offering a pathway to create deeper emotional connections with consumers.</p>",
    date: "Dec 15, 2023",
    category: "Research",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "visual-storytelling",
    title: "The Power of Visual Storytelling",
    excerpt: "Why narrative is the most powerful tool in a designer's arsenal and how to use it effectively.",
    content: "<p>We are wired for stories. From ancient cave paintings to modern digital interfaces, storytelling remains the most effective way to communicate complex ideas. In visual design, storytelling isn't just about the sequence of events; it's about the emotional journey the user takes.</p><p>Effective visual storytelling requires a deep understanding of the audience's needs and desires. By using color, typography, and imagery strategically, designers can guide users through a narrative that resonates on a personal level. This article explores techniques for embedding narrative structures into brand identities and marketing campaigns.</p>",
    date: "Nov 28, 2023",
    category: "Design",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "psychology-ux",
    title: "Psychology in UX Design",
    excerpt: "Understanding cognitive biases and mental models to create more intuitive user interfaces.",
    content: "<p>User Experience (UX) design is deeply rooted in psychology. To design intuitive interfaces, we must understand how the human brain processes information. Concepts like cognitive load, Gestalt principles, and mental models play a crucial role in how users interact with digital products.</p><p>For instance, understanding 'decision fatigue' can help designers streamline navigation and reduce the number of choices users have to make. This post delves into key psychological principles that every designer should know to create more user-friendly and effective designs.</p>",
    date: "Oct 10, 2023",
    category: "UX/UI",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop"
  }
];