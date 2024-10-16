// Sidebar Data

const skills = [
  // مهارت‌های برنامه‌نویسی و فریم‌ورک‌ها
  "C#",
  "ASP.NET Core",
  "Python",
  "Django",
  "FastAPI",
  "Node.js",
  "Express",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Html & Css",
  "Tailwind",
  "Bootstrap",

  // مهارت‌های معماری نرم‌افزار
  "Software Architecture",
  "Micro Service Architecture",
  "Service Oriented Architecture",
  "RestFull & WebAPI",
  "DDD, EDA, CQRS",

  // مهارت‌های طراحی و توسعه
  "OOP",
  "Design Patterns",
  "SOLID",
  "Clean Code",

  // مهارت‌های پایگاه داده
  "TSQL (Sql Server & PostgreSql)",
  "NoSQL (MongoDB, Couchbase, Cassandra)",
  "Redis",
  "Entity Framework",
  "Rabbitmq & Kafka",
  "gRPC",
  "GraphQL",

  // مهارت‌های تست و نسخه‌سازی
  "Unit Testing",
  "Integration Testing",
  "Git",
  "Docker",

  // مهارت‌های مدیریت پروژه و روش‌های کاری
  "Scrum & Agile",

  // مهارت‌های یادگیری ماشین و پردازش زبان طبیعی
  "AI & Machine Learning (Tensorflow, Pytorch)",
  "NLP (SpaCy, NLTK, Hazm)",
];

const details = [
  { label: "Location", value: "Tehran, Iran" },
  { label: "Experience", value: ">10 years" },
  { label: "Availability", value: "In 1 month" },
  { label: "Relocation", value: "Yes" },
];

// Navigation

const navigation = [
  { name: "Resume", href: "./" },
  { name: "Projects", href: "#" },
  { name: "Blog", href: "#" },
];

/**
 * Resume Page
 */

// Experience Data

const jobsList = [
  {
    icon: "./assets/images/logo_jadooni.png",
    role: "Senior Full-stack Developer",
    company: "jadooni.com",
    location: "Rasht, Iran",
    period: "Jan 2023 - Present",
    type: "Co-Founder",
    description: `
<span>
    As a Senior Full-stack Developer at <strong>jadooni.com</strong>, a dynamic startup in the tourism sector, I have been instrumental in developing a comprehensive online platform that allows users to search, browse, choose, and purchase unique travel experiences. In this role, I have single-handedly managed both the front-end and back-end development, ensuring a seamless and engaging user experience.
</span>
<br/><br/>
<strong>Key Responsibilities:</strong><br/><br/>
<ul>
    <li><strong>Front-end Development:</strong> Leveraged React.js, TypeScript, and TailwindCSS to create a responsive and intuitive user interface that enhances user engagement and satisfaction.</li>
    <li><strong>Back-end Development:</strong> Utilized Supabase to build a robust, API-driven backend that supports the platform’s functionality and scalability.</li>
    <li><strong>UI/UX Design:</strong> Designed and implemented user-friendly interfaces, focusing on optimal user experience and accessibility.</li>
    <li><strong>DevOps:</strong> Managed server infrastructure and deployment processes, ensuring high availability and performance of the platform.</li>
</ul>
<br/><br/>
<strong>Achievements:</strong><br/><br/>
<ul>
    <li style="margin-bottom: 5px;">1: Successfully launched the platform, enabling users to effortlessly explore and book travel experiences.<br/></li>
    <li style="margin-bottom: 5px;">2: Improved platform performance and user satisfaction through continuous optimization and feature enhancements.<br/></li>
    <li style="margin-bottom: 5px;">3: Ensured seamless integration between front-end and back-end systems, providing a cohesive and reliable user experience.<br/></li>
</ul>
<br/><br/>
<span>
    My role at jadooni.com has allowed me to apply my extensive full-stack development skills in a real-world setting, contributing to the growth and success of an innovative startup in the tourism industry.
</span>
    `,
  },
  {
    icon: "./assets/images/logo_fi.png",
    role: "Full-stack Developer",
    company: "fiverr.com",
    location: "Remote",
    period: "Feb 2020 - Present",
    type: "Freelancer",
    description: `
<p>Throughout my journey as a freelancer, I have had the privilege of immersing myself in numerous projects, gaining invaluable hands-on experience and exploring new technologies and frameworks. This continuous learning process has been an incredibly fulfilling and enjoyable experience for me.</p>

<p>Each project I undertook as a freelancer brought its own set of unique challenges and learning opportunities. From web development to mobile app development, I embraced diverse domains and pushed the boundaries of my knowledge. This exposure to a variety of projects not only broadened my skillset but also deepened my understanding of different industries and their specific requirements.</p>

<p>In parallel with my freelance work, I dedicated myself to delving deeper into the realm of AI and Machine Learning. Recognizing the immense potential of these technologies in shaping the future of software products, I devoted time to expand my knowledge in this field. This endeavor allowed me to explore innovative ways of integrating AI and Machine Learning into software solutions, further fueling my passion for cutting-edge technologies.</p>

<p>Looking ahead, I am eager to channel my skills, experience, and enthusiasm into new challenges and opportunities that lie ahead. With a firm commitment to continuous learning and growth, I am confident in my ability to excel in any role or project I undertake. The joy and satisfaction I derive from acquiring new skills and applying them to solve complex problems drive my ambition to succeed. I embrace the future with a sense of excitement, as it promises fresh avenues for exploration and the chance to make a lasting impact. I am ready to seize these opportunities, leveraging my passion, dedication, and ever-expanding knowledge to deliver exceptional results.</p>

      `,
  },
  {
    icon: "./assets/images/logo_hcdt.png",
    role: "Senior Backend Developer",
    company: "haftcin.com",
    location: "Tehran, Iran",
    period: "Nov 2019 - Feb 2020",
    type: "Full-time",
    description: `
      <p>During my tenure as a Tech Lead, Software Architect, and Backend Developer, I undertook the task of developing <a href="https://yiata.com">yiata.com</a>, a cutting-edge multi-platform online travel booking engine. This experience, which allowed me to collaborate with the esteemed Amadeus team, has had a profound and enduring impact on my professional journey.</p>

<p>To ensure the creation of an exceptional product, our team adopted the Scrum methodology, which enabled us to efficiently manage the development process. Leveraging a versatile technical stack comprising .Net Core, SQL, Redis, React, Flutter, AWS, and other innovative technologies, we crafted a robust and seamless platform.</p>

<p>By assuming the role of Tech Lead, I spearheaded the project's technical direction, providing strategic guidance and overseeing the implementation of architectural solutions. As a Software Architect, I played a crucial role in designing and structuring the system, ensuring scalability, performance, and maintainability.</p>

<p>Working alongside a team of highly talented individuals, I fostered an environment of collaboration and innovation. Through regular communication and cross-functional cooperation, we were able to leverage each team member's strengths and collectively deliver an outstanding end product.</p>

<p>Overall, my involvement in developing yiata.com not only showcased my technical prowess but also deepened my appreciation for effective project management and teamwork. This experience has fortified my commitment to pursuing excellence in software development and has left an indelible mark on my professional trajectory.</p>
      `,
  },
  {
    icon: "./assets/images/logo_alibaba.jpeg",
    role: "Senior Backend Developer",
    company: "alibaba.ir",
    location: "Tehran, Iran",
    period: "May 2018 - Dec 2019",
    type: "Full-time",
    description: `
      <p>As a Software Architect and Senior Backend Developer, I undertook a pivotal role in the development of a groundbreaking product for <a href="https://alibaba.ir">Alibaba.ir</a>, Iran's leading online travel booking service. This remarkable endeavor not only offered me the chance to collaborate with a highly skilled team but also left an indelible mark on my professional journey.</p>

<p>Our mission was to introduce a brand-new feature that would empower users to seamlessly reserve buses through the Alibaba.ir platform. This exciting challenge presented an invaluable opportunity for me to expand my knowledge, showcase my expertise, and contribute to the growth of the company.</p>

<p>To ensure the success of this ambitious project, we embraced the Scrum methodology, a proven framework that allowed us to efficiently manage the development process. Our technical stack encompassed a range of cutting-edge technologies including .Net Core, SQL, Redis, RabbitMQ, DDD (Domain-Driven Design), CQRS (Command Query Responsibility Segregation), and Microservice Architecture. This strategic selection of tools and frameworks ensured a robust and scalable solution that met the highest industry standards.</p>

<p>Collaborating with a talented team of professionals, we fostered a culture of innovation and teamwork. Through effective communication, knowledge sharing, and cross-functional cooperation, we were able to harmonize our efforts and deliver a truly exceptional product.</p>

<p>I take immense pride in my contributions to this significant achievement, which allowed Alibaba.ir to expand its service offerings on such a vast platform. As I reflect on my journey with Alibaba.ir, I am grateful for the opportunity to learn, grow, and leave a lasting impact on my career. I remain committed to pursuing excellence in software architecture and development, fueled by the lessons and successes of this remarkable project.</p>
      `,
  },
  {
    icon: "./assets/images/logo_zoraq.jpeg",
    role: "Senior Developer & Back-end lead",
    company: "zoraq.com",
    location: "Tehran, Iran",
    period: "Jun 2015 - Dec 2017",
    type: "Full-time",
    description: `
      <p>Zoraq.com etched its name in history as the pioneering Iranian company to venture into the realm of online travel booking. Taking charge of the Back-end Team within a startup-style environment and adhering to Scrum principles, we embarked on a journey that culminated in the successful launch of a new product that fills us with immense pride.</p>

<p>Being part of the dynamic atmosphere at Zoraq.com not only allowed me to refine my skills as a team leader but also afforded me the invaluable opportunity to gain hands-on experience in developing an innovative product, a rarity in the Iranian market at the time. Subsequently, as per the policies of our investors, this startup merged with Alibaba.ir, further solidifying our position within the industry.</p>

<p>The convergence of talent, ambition, and forward-thinking at Zoraq.com fostered an environment where creativity thrived. It was an exhilarating experience to witness the birth of a disruptive solution that challenged the status quo and redefined online travel booking in Iran. Through collaborative efforts, we harnessed the power of emerging technologies, employing a diverse technical stack that included cutting-edge tools and frameworks. This fusion of expertise and innovation allowed us to deliver a platform that exceeded expectations and set new standards in the industry.</p>

<p>The journey with Zoraq.com not only expanded my professional horizons but also instilled in me a deep appreciation for the dynamic nature of the startup ecosystem. The merging with Alibaba.ir marked a significant milestone, propelling us towards even greater opportunities and achievements.</p>

<p>As I look back on this transformative chapter of my career, I am grateful for the chance to have been part of a pioneering team that revolutionized the online travel booking landscape in Iran. The lessons learned and the memories created during this exhilarating journey will forever shape my approach to innovation, leadership, and the pursuit of excellence.</p>
      `,
  },
  {
    icon: "./assets/images/logo_freelance.png",
    role: "Senior Developer & Reverse Engineer Specialist",
    company: "Rayan-Sanat",
    location: "Tehran, Iran",
    period: "Apr 2014 - Aug 2015",
    type: "Full-time",
    description: `
      <p>As a member of Rayan-Sanat, a company specializing in the development of car diagnostic devices, I was involved in an exciting project as a developer and ECU's Protocol reverse engineer. My role required analyzing and disassembling data transferred between ECUs and diagnostic systems through OBD Cable, decoding their data structure, and implementing them into our car diagnostic product.</p>

<p>To achieve this, I utilized various tools, including IDA Pro and OBD Sniffer and wrote software in C# that connected to our hardware. Our team's efforts led to the creation of innovative diagnostic devices that could detect and diagnose car faults with greater accuracy and efficiency.</p>

<p>My experience at Rayan-Sanat provided me with a unique perspective on the evolving technological landscape of the automotive industry, and I am eager to apply the knowledge I gained in future endeavors.</p>
      `,
  },
  {
    icon: "./assets/images/logo_sepanta.png",
    role: "Full Stack .net Developer",
    company: "sepanta.com",
    location: "Tehran, Iran",
    period: "Jan 2010 - Dec 2013",
    type: "Full-time",
    description: `
      <p>Throughout my career, I had the privilege of being involved in the development of SEPANTA ADSL CRM, along with its associated subsystems like ADSL Billing and Core Accounting. This robust system played a pivotal role in delivering reliable ADSL internet services to users of Iran's esteemed telecommunications organization across multiple provinces.</p>

<p>In my capacity, I worked closely with our Team Leader to comprehend the specific requirements of stakeholders, ensuring that the system catered to their unique needs. By collaborating with fellow developers and team members, we embarked on a journey to conceive and implement innovative solutions that prioritized user-friendliness, efficiency, and scalability.</p>

<p>The experience of working on the SEPANTA project proved to be immensely rewarding, as it allowed me to showcase my expertise and contribute to its resounding success. With a shared commitment to excellence, we overcame challenges, pushed boundaries, and delivered a system that elevated the experience of ADSL internet users throughout the organization.</p>

<p>From conceptualization to implementation, every step of the development process demanded meticulous attention to detail and a deep understanding of the telecommunications landscape. Through our collective efforts, we not only met the expectations of stakeholders but also exceeded them, offering an exceptional solution that streamlined operations and improved customer satisfaction.</p>

<p>Looking back, I am proud of the invaluable contributions I made to the SEPANTA project. The lessons learned from this experience have fortified my commitment to pursuing excellence in software development and have equipped me with a broader perspective on the intricate dynamics of large-scale systems. I carry the memories of SEPANTA as a testament to the power of collaboration, innovation, and the pursuit of customer-centric solutions.</p>
      `,
  },
  {
    icon: "./assets/images/logo_freelance.png",
    role: "Software Developer",
    company: "Freelance",
    location: "Tehran, Iran",
    period: "Oct 2006 - Dec 2010",
    type: "Freelancer",
    description: `<p>In addition to pursuing my academic education, I also had the opportunity to work as a freelancer, collaborating with a diverse range of clients to hone my skills, gain valuable experience, and earn money. Working as a freelancer allowed me to expand my horizons and work on exciting projects outside the boundaries of traditional employment.</p>

<p>I worked on various projects, ranging from web development to mobile app development and software architecture, all of which presented unique challenges and opportunities to learn. Collaborating with clients from diverse backgrounds and industries enabled me to broaden my perspective, think critically, and approach problems from different angles.</p>

<p>Throughout my time as a freelancer, I leveraged my skills and knowledge to deliver high-quality solutions that met the unique needs of each client. I worked diligently to understand their requirements, communicate effectively, and deliver solutions that exceeded their expectations.</p>

<p>The experience of working as a freelancer was invaluable, as it allowed me to develop essential skills such as time management, communication, and problem-solving. I learned to balance competing priorities, manage deadlines, and work effectively as part of a team, all of which have proven to be invaluable assets in my career.</p>

<p>Overall, my experience as a freelancer was both enriching and rewarding. I am grateful for the opportunities it provided me to learn, grow, and collaborate with a diverse range of clients. The experience has shaped my approach to software development and reinforced my commitment to delivering exceptional solutions that exceed client expectations.</p>
`,
  },
];

// Education

const educationList = [
  {
    icon: "./assets/images/logo_guilan_uni.jpg",
    degree:
      "Bachelor's degree, Science in ICT (Information Communication & Technology)",
    university: "Guilan University",
    location: "Rasht , Iran",
    period: "2006 – 2009",
    description: `<p>During my time at Guilan University, where I earned a Bachelor’s degree in Science in ICT (Information Communication & Technology), I immersed myself in the dynamic world of technology and innovation. From 2006 to 2009, I honed my skills in software development, network management, and data analysis.</p>

<p>My academic journey was marked by a deep commitment to understanding the intricacies of ICT, which was reflected in my active participation in various tech symposiums and coding competitions. This period was pivotal in shaping my analytical and problem-solving abilities, laying a strong foundation for my career as a Full-Stack Developer.</p>
`,
  },
];

/**
 * Projects Page
 */

// Projects
const projectsList = [
  {
    icon: "./assets/images/logo_jadooni.png",
    name: "Jadooni.com (Online tourism experiences booking platform)",
    category: "Tourism",
    role: "Co-Founder & Full-stack Developer",
    date: "Jan 2023 - Present",
    description:
      "A dynamic online platform designed to offer unique and exciting tourism experiences. Users can explore and book a variety of adventures, from thrilling activities to cultural and culinary tours. The platform provides a seamless booking process, enabling users to plan and reserve their desired experiences online effortlessly.",
    website: "https://jadooni.com",
  },
];

/**
 * Projects Page
 */

// Posts

const posts = [
  {
    date: "February 22, 2024",
    title: "Building an Online Presence as a Full Stack Developer",
    excerpt:
      "Explore the importance of establishing a strong online presence for full stack developers. Learn how to create a compelling portfolio, engage with the developer community, and leverage social media to boost your career.",
  },
];
