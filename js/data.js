// ===== EDIT ME: personal info placeholders =====
const ME = { brand: 'M.S', name: 'MANSOOR SHAIKH', role: 'Product Designer & Product Management Enthusiast', email: 'shaikhmansoor178@gmail.com', phone: '7208248166', resume: 'https://drive.google.com/file/d/1IW8fEm6Jmo4MXIDA9acAb55xm9xE8Djk/view?usp=sharing', bio: 'Designer somewhere between pixels, products, and overthinking every tiny detail. When I’m not designing, you’ll probably find me at the gym, running, discovering new music, or pretending I have my life figured out.' };
// ===== EDIT ME: projects (set img to a URL/data-URI when you have the real Meryl Roberts assets) =====
const P = [
    { id: 'nextstep', n: '01', name: 'NextStep', title: 'Early Detection of Learning Disabilities & Support for Students', year: '', tags: ['IoT Design', 'Learning Disability Screening', 'Early Intervention'], tone: '#2f3a4a', img: 'assets/images/nextstep2.png', video: 'assets/video/nextstep1.mp4', poster: 'assets/images/nextstep1-poster.jpg', videoRatio: '1122/532',
  case: {
 "overview": [
  "NextStep is an IoT solution created for the early detection of Specific Learning Disabilities in the classroom to provide students with support.",
  "The aim of this platform is to increase collaboration between teachers, parents, and professionals by providing personalized intervention plans and progress tracking."
 ],
 "research": {
  "stat": "1 / 10",
  "statLabel": "people are estimated to have some form of learning disability",
  "body": [
   "Around 10-15% of the Indian population has some form of reading disability like dyslexia, dyscalculia or dysgraphia.",
   "Because of the lack of early diagnosis, many children struggle to keep up in school, leading to academic difficulties and challenges in their future careers."
  ],
  "source": "*Source: Indian Journal of Psychiatric Nursing, Industrial Psychiatry Journal",
  "subhead": "The Research",
  "paras": [
   "I began this project by widely researching all learning disabilities developed in early childhood and later narrowed down to Dyslexia (Mainly affects reading and related language processing skills.) and Dysgraphia (Mainly affects writing skills and can involve the physical act of writing or the mental activity of comprehending.).",
   "This was done to cater to language based symptoms within the time constraints.",
   "After conducting secondary research, interviewing parents of children with SLDs and professionals involved, I learnt about the steps taken to create a support plan for these children. By outlining the diagnosis and treatment process currently followed in India, I identified many gaps in how help is administered."
  ],
  "video": "assets/video/nsresearch.mp4",
  "poster": "assets/images/nsresearch-poster.jpg",
  "videoRatio": "1280/720"
 },
 "define": {
  "title": "What I Got From The Data",
  "stakeholdersLead": "Key stakeholders I needed to involve:",
  "stakeholders": [
   {
    "name": "Student",
    "img": "assets/images/ns-student.png"
   },
   {
    "name": "Parent",
    "img": "assets/images/ns-parent.png"
   },
   {
    "name": "Teacher",
    "img": "assets/images/ns-teacher.png"
   },
   {
    "name": "Psychologist",
    "img": "assets/images/ns-psychologist.png"
   }
  ],
  "insightsLead": "Based on findings from my research, I narrowed onto some key insights:",
  "insights": [
   "Cost of SLD treatment and support can be overwhelming. Balancing a career while caring for a child with SLDs can be stressful and may lead to feelings of hopelessness and disengagement. Such pressures can contribute to delayed or inadequate support for SLD students.",
   "While psychologists and developmental paediatricians often act as referral points, their networks may be limited, leading parents to navigate a complex process. This can result in decision fatigue and may delay or prevent parents from seeking necessary specialized services like occupational therapy, or speech therapy.",
   "Educating students about learning disabilities relies heavily on teachers. If teachers are not adequately trained on the topic, they may teach incorrect information, which can lead to increased bullying of SLD students. This not only affects the students’ well-being but also harms the school’s reputation."
  ]
 },
 "prototyping": [
  {
   "title": "For Teachers",
   "text": [
    "In the classroom, NextStep lets teachers scan students’ written work using an OCR engine. Using AI, parameters like spelling errors, letter reversals, skipped words, and more are evaluated.",
    "The platform helps teachers identify students who may require additional support."
   ],
   "video": "assets/video/for_teachers.mp4",
   "w": 1274,
   "h": 722,
   "alt": "NextStep teacher view: scanning a student’s written work"
  },
  {
   "title": "For Parents",
   "text": [
    "Through the mobile app, parents can access detailed progress reports, receive suggested intervention plans, and communicate directly with teachers."
   ],
   "video": "assets/video/for_parents.mp4",
   "w": 440,
   "h": 912,
   "alt": "NextStep parent mobile app walkthrough"
  },
  {
   "title": "For Professionals like Psychologists",
   "text": [
    "The system’s scheduling tools, resource library, and Individualized Education Plan (IEP) generation capabilities enable professionals to deliver customised support to students."
   ],
   "video": "assets/video/for_psychologists.mp4",
   "w": 1280,
   "h": 722,
   "alt": "NextStep professional view: scheduling and IEP generation"
  }
 ],
 "prototypingClose": "NextStep connects parents, teachers, and psychologists, ensuring every child gets the support they need.",
 "reflecting": {
  "title": "What I Learned",
  "items": [
   {
    "title": "Empathy in research",
    "text": "While conducting interviews and observational studies, I learnt how important it is to put oneself in the shoes of the users. In a sensitive topic such as this, it is important to actively listen, foster emotional intelligence, and put any assumptions aside."
   },
   {
    "title": "Collaboration across disciplines",
    "text": "This project taught me the importance of working closely with multiple types of users. Each stakeholder brought unique perspectives and challenges, and it was necessary to find a common ground between the needs of all to create a unified solution."
   }
  ]
 }
} },
    { id: 'spotify-sync', n: '02', name: 'Spotify Sync', title: 'Multiple devices playing the same song at once', year: '', tags: ['UI/UX Case Study', 'Music App', 'Feature Design'], tone: '#0f1a14', img: 'assets/images/Spotify_cover.png',
      media: [
    { type: 'image', src: 'assets/images/s1.png', w: 1068, h: 1472, alt: 'Spotify Sync case study cover and introduction' },
    { type: 'video', src: 'assets/video/sv1.mp4', w: 1878, h: 880, alt: 'Sync up your music with friends nearby' },
    { type: 'video', src: 'assets/video/sv2.mp4', w: 1918, h: 742, alt: 'Join others’ sessions and play by their rules' },
    { type: 'video', src: 'assets/video/sv3.mp4', w: 1918, h: 710, alt: 'Or make your own rules' },
    { type: 'video', src: 'assets/video/sv4.mp4', w: 1918, h: 714, alt: '…and listen together' },
    { type: 'image', src: 'assets/images/s2.png', w: 1411, h: 755, alt: 'Core features: a designated Sync icon, choosing an open house or invite-only session, and handpicking who joins' },
    { type: 'image', src: 'assets/images/s3.png', w: 1414, h: 757, alt: 'More features: Sync preferences and choosing who to admit into the session' },
    { type: 'image', src: 'assets/images/s4.png', w: 1408, h: 751, alt: 'Searching for nearby sessions to join, and knowing when someone new joins the Sync' },
    { type: 'image', src: 'assets/images/s5.png', w: 1397, h: 758, alt: 'Work process: the prototype flow map' }
      ] },
    { id: 'google-maps-parking', n: '03', name: 'Google Maps Parking', title: 'Find nearby parking before you reach your destination', year: '', tags: ['UI/UX Case Study', 'Navigation', 'Feature Design'], tone: '#10161f', img: 'assets/images/gm_cover.png',
      media: [
    { type: 'image', src: 'assets/images/gm1.png', w: 1069, h: 1472, alt: 'Google Maps Parking case study introduction' },
    { type: 'feature', src: 'assets/images/gm2.png', w: 398, h: 758, alt: 'Maps with a new Parking category highlighted', title: 'Discover nearby parking', text: 'A new “Parking” option is added alongside the existing map categories. Tapping it highlights parking locations around the user’s destination.', bg: '#1a73e8', fg: '#ffffff' },
    { type: 'feature', src: 'assets/images/gm3.png', w: 396, h: 771, alt: 'Map showing nearby parking spots as red P pins', title: 'Explore parking options', text: 'Users can see nearby parking spots directly on the map, along with relevant parking listings. They can quickly compare options based on their location and proximity.', bg: '#111214', fg: '#ffffff' },
    { type: 'feature', src: 'assets/images/gm4.png', w: 406, h: 765, alt: 'Parking search results with a parking structure listing', title: 'View parking details', text: 'Selecting a parking location opens a dedicated information page showing important details such as availability, pricing, opening hours, photos, and location.', bg: '#188038', fg: '#ffffff' },
    { type: 'feature', src: 'assets/images/gm5.png', w: 390, h: 761, alt: 'Parking details page showing spots available and price per hour', title: 'Check availability & pricing', text: 'Users can see how many spots are available and understand the hourly parking cost before deciding where to park.', bg: '#fbbc04', fg: '#1a1a1a' },
    { type: 'feature', src: 'assets/images/gm6.png', w: 409, h: 784, alt: 'Parking details with daily prices and a popular-times graph', title: 'Choose the best option', text: 'The popular-time graph helps users understand when parking is typically busy, allowing them to make a more informed decision before arriving.', bg: '#c5221f', fg: '#ffffff' },
    { type: 'feature', video: 'assets/video/gm_video.mp4', w: 406, h: 788, alt: 'Google Maps Parking walkthrough', title: '', text: 'Google Maps Parking integrates parking discovery directly into the navigation experience. Users can find nearby parking spots, compare locations, check availability and pricing, view photos and operating hours, and understand peak parking times — all before reaching their destination. This reduces the time spent driving around looking for a spot and makes the overall journey more predictable.', bg: '#000000', fg: '#ffffff' }
      ] }];


// About page: story paragraphs (above Education) and education lines
const ABOUT_TEXT = [
    'Hi! I’m Mansoor, a designer based out of Mumbai.',
    'Coming from a Computer Engineering background, I always thought I would end up somewhere in tech. But somewhere along the way, I realised that writing code wasn’t where I felt most like myself. I was more drawn to the way things looked, felt, and worked — and more importantly, to understanding the people using them.',
    'That’s when I discovered UI/UX and product design. What started as curiosity quickly became something I genuinely enjoyed. I loved turning ideas into interfaces, solving problems through design, and obsessing over the little details that make an experience feel just right.',
    'A few projects, countless iterations, and a lot of “what if we tried this?” later, I’m still figuring things out — but I’m certain that I want to keep designing.',
    'That’s the story, so far.'
];
const EDUCATION = ['10th: RBK ICSE School', '12th: Mother Mary High School (HSC)', "Bachelor's: NMIMS, B.Tech Computer Engineering"];
const ABOUT_CAPTION = 'Football and mountains got me through college, spent more time on ground than in class.';
const ABOUT_CLOSING = 'I enjoy sports, trekking and bike rides. I believe the most important thing in life is to be kind and free. Thanks for reading this far!';
