// Sidebar Data

const skills = [
  // مهارت‌های برنامه‌نویسی و فریم‌ورک‌ها

  // .NET Group
  { name: "C#", category: "programming", group: "dotnet" },
  { name: "ASP.NET Core", category: "programming", group: "dotnet" },
  { name: "Entity Framework", category: "programming", group: "dotnet" },

  // Python Group
  { name: "Python", category: "programming", group: "python" },
  { name: "Django", category: "programming", group: "python" },
  { name: "FastAPI", category: "programming", group: "python" },

  // Node.js Group
  { name: "Node.js", category: "programming", group: "nodejs" },
  { name: "Express", category: "programming", group: "nodejs" },

  // Front-end Tools Group
  { name: "JavaScript", category: "programming", group: "frontend" },
  { name: "React", category: "programming", group: "frontend" },
  { name: "Next.js", category: "programming", group: "frontend" },
  { name: "TypeScript", category: "programming", group: "frontend" },
  { name: "Html & Css", category: "programming", group: "frontend" },
  { name: "Tailwind", category: "programming", group: "frontend" },
  { name: "Bootstrap", category: "programming", group: "frontend" },

  // مهارت‌های معماری نرم‌افزار
  { name: "Software Architecture", category: "architecture" },
  { name: "Micro Service Architecture", category: "architecture" },
  { name: "Service Oriented Architecture", category: "architecture" },
  { name: "RestFull & WebAPI", category: "architecture" },
  { name: "DDD, EDA, CQRS", category: "architecture" },

  // مهارت‌های طراحی و توسعه
  { name: "OOP", category: "design" },
  { name: "Design Patterns", category: "design" },
  { name: "SOLID", category: "design" },
  { name: "Clean Code", category: "design" },

  // مهارت‌های پایگاه داده
  { name: "TSQL", category: "database" },
  { name: "Sql Server", category: "database" },
  { name: "PostgreSql", category: "database" },
  { name: "MongoDb", category: "database" },
  { name: "Cassandra", category: "database" },
  { name: "Redis", category: "database" },

  { name: "Rabbitmq", category: "database", group: "nodejs" },
  { name: "Kafka", category: "database", group: "nodejs" },
  { name: "gRPC", category: "database", group: "nodejs" },
  { name: "GraphQL", category: "database", group: "nodejs" },

  // مهارت‌های تست و نسخه‌سازی
  { name: "Docker", category: "devops" },
  { name: "Unit Testing", category: "testing" },
  { name: "Integration Testing", category: "testing" },
  { name: "Git", category: "versioning" },

  // مهارت‌های مدیریت پروژه و روش‌های کاری
  { name: "Scrum & Agile", category: "management" },

  // مهارت‌های یادگیری ماشین و پردازش زبان طبیعی
  { name: "AI & Machine Learning (Tensorflow, Pytorch)", category: "ml" },
  { name: "NLP (SpaCy, NLTK, Hazm)", category: "ml" },
];

const details = [
  { label: "Location", value: "Tehran - Rasht, Iran" },
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
    company: "dev.jadooni.com",
    location: "Rasht, Iran",
    period: "Jan 2023 - Present",
    type: "Startup Co-Founder",
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
<span>
    As a Full-stack Developer on <strong>Fiverr.com</strong>, a global freelancing platform, I have successfully delivered custom software solutions to a diverse clientele. This role has provided me with the opportunity to work on a variety of challenging projects, developing innovative applications and continuously expanding my technical expertise.
</span>
<br/><br/>
<strong>Key Responsibilities:</strong><br/><br/>
<ul>
    <li><strong>Client Collaboration:</strong> Worked closely with clients to understand their needs and deliver tailored solutions that exceed expectations.</li>
    <li><strong>Web Development:</strong> Built scalable and efficient web applications using modern frameworks like React.js, Node.js, and Django.</li>
    <li><strong>Testing and Debugging:</strong> Conducted extensive testing and debugging to ensure software reliability and performance.</li>
    <li><strong>AI Integration:</strong> Incorporated AI and machine learning techniques into projects, enabling data-driven solutions and automation.</li>
</ul>
<br/><br/>
<strong>Achievements:</strong><br/><br/>
<ul>
    <li style="margin-bottom: 5px;">1: Successfully delivered 50+ projects across various domains with high client satisfaction ratings.<br/></li>
    <li style="margin-bottom: 5px;">2: Gained deep expertise in emerging technologies, including AI, natural language processing, and machine learning.<br/></li>
    <li style="margin-bottom: 5px;">3: Maintained a high client retention rate through consistent quality, clear communication, and dependable results.<br/></li>
</ul>
<br/><br/>
<span>
    My freelancing journey on Fiverr.com has been an enriching experience, allowing me to apply and refine my full-stack development skills across multiple industries while keeping pace with evolving technologies.
</span>
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
      <span>
    As a Senior Backend Developer at <strong>haftcin.com</strong>, I played a pivotal role in the development of a state-of-the-art online travel booking platform. Collaborating with a highly skilled team, I contributed to crafting a seamless multi-platform experience that empowers users to book travel efficiently and effortlessly.
</span>
<br/><br/>
<strong>Key Responsibilities:</strong><br/><br/>
<ul>
    <li><strong>Technical Leadership:</strong> Led the development process, providing strategic direction and ensuring alignment with best practices in software architecture.</li>
    <li><strong>Back-end Development:</strong> Utilized .NET Core, Redis, and SQL to design and implement scalable, high-performance backend systems.</li>
    <li><strong>System Architecture:</strong> Designed a robust and maintainable system architecture leveraging Domain-Driven Design (DDD), CQRS, and Microservices principles.</li>
    <li><strong>Collaboration with Amadeus:</strong> Worked closely with the Amadeus team to integrate cutting-edge solutions into the platform.</li>
    <li><strong>Agile Practices:</strong> Adopted Scrum methodology to streamline project management and ensure timely delivery of high-quality features.</li>
</ul>
<br/><br/>
<strong>Achievements:</strong><br/><br/>
<ul>
    <li style="margin-bottom: 5px;">1: Delivered a seamless multi-platform travel booking experience, significantly enhancing user satisfaction.<br/></li>
    <li style="margin-bottom: 5px;">2: Spearheaded the successful implementation of a scalable system architecture, ensuring the platform's reliability and long-term maintainability.<br/></li>
    <li style="margin-bottom: 5px;">3: Collaborated effectively with cross-functional teams, achieving smooth integration of advanced features and technologies.<br/></li>
</ul>
<br/><br/>
<span>
    My experience at haftcin.com was instrumental in shaping my expertise in software architecture and backend development. It offered the invaluable opportunity to contribute to an innovative travel booking platform while working alongside an exceptional team of professionals.
</span>
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
     <span>
    As a Senior Backend Developer at <strong>alibaba.ir</strong>, Iran's leading online travel booking service, I contributed to the development of innovative solutions that enhanced the platform's functionality and user experience. My role involved designing and implementing robust backend systems, utilizing cutting-edge technologies to deliver seamless and efficient travel booking services.
</span>
<br/><br/>
<strong>Key Responsibilities:</strong><br/><br/>
<ul>
    <li><strong>Bus Reservation Feature Development:</strong> Played a pivotal role in introducing a new bus reservation feature, integrating it seamlessly into the existing platform.</li>
    <li><strong>System Architecture:</strong> Designed scalable and maintainable backend systems using Microservice Architecture, Domain-Driven Design (DDD), and CQRS principles.</li>
    <li><strong>Backend Development:</strong> Utilized .NET Core, SQL, Redis, and RabbitMQ to build high-performance and reliable backend solutions.</li>
    <li><strong>Agile Methodology:</strong> Leveraged Scrum practices to efficiently manage development cycles and deliver high-quality features on schedule.</li>
</ul>
<br/><br/>
<strong>Achievements:</strong><br/><br/>
<ul>
    <li style="margin-bottom: 5px;">1: Successfully developed and launched the bus reservation feature, expanding Alibaba.ir's service offerings and enhancing its platform.<br/></li>
    <li style="margin-bottom: 5px;">2: Ensured the scalability and performance of backend systems through robust architecture and continuous optimization.<br/></li>
    <li style="margin-bottom: 5px;">3: Fostered collaboration within a talented team to deliver innovative and user-friendly solutions.<br/></li>
</ul>
<br/><br/>
<span>
    My tenure at Alibaba.ir was a remarkable chapter in my career, allowing me to apply advanced backend development skills and collaborate with an exceptional team to deliver impactful features for one of the region’s most prominent online platforms.
</span>
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
      <span>
    As a Senior Developer and Back-end Lead at <strong>zoraq.com</strong>, I led the back-end development team in a fast-paced startup environment to revolutionize Iran's online travel booking industry. My role involved designing and implementing innovative solutions that positioned Zoraq.com as a pioneer in this domain.
</span>
<br/><br/>
<strong>Key Responsibilities:</strong><br/><br/>
<ul>
    <li><strong>Team Leadership:</strong> Led the back-end team, promoting collaboration and ensuring the successful delivery of high-quality features.</li>
    <li><strong>Back-end Development:</strong> Built robust and scalable back-end systems using a modern technical stack to support the platform's growth and reliability.</li>
    <li><strong>System Optimization:</strong> Enhanced the platform’s performance through rigorous debugging, testing, and optimization.</li>
    <li><strong>Scrum Practices:</strong> Adopted Agile methodologies to improve team efficiency and ensure timely delivery of innovative solutions.</li>
</ul>
<br/><br/>
<strong>Achievements:</strong><br/><br/>
<ul>
    <li style="margin-bottom: 5px;">1: Successfully launched an innovative online travel booking platform, gaining widespread recognition and user adoption.<br/></li>
    <li style="margin-bottom: 5px;">2: Delivered a product that set new standards in Iran’s travel booking industry, leading to Zoraq.com's merger with Alibaba.ir.<br/></li>
    <li style="margin-bottom: 5px;">3: Contributed to the development of a disruptive solution that redefined online travel booking in the region.<br/></li>
</ul>
<br/><br/>
<span>
    My tenure at Zoraq.com was a transformative experience that not only allowed me to refine my technical and leadership skills but also contributed to shaping the future of online travel booking in Iran. The successful merger with Alibaba.ir marked a significant milestone in this impactful journey.
</span>
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
      <span>
    As a Developer and Reverse Engineer Specialist at <strong>Rayan-Sanat</strong>, I contributed to the design and development of cutting-edge car diagnostic devices, enabling accurate and efficient fault detection in vehicles. My role required a deep understanding of electronic control unit (ECU) protocols and involved innovative reverse engineering techniques.
</span>
<br/><br/>
<strong>Key Responsibilities:</strong><br/><br/>
<ul>
    <li><strong>Protocol Analysis:</strong> Analyzed and disassembled data transferred between ECUs and diagnostic systems via OBD Cable, decoding their data structure and logic.</li>
    <li><strong>Reverse Engineering:</strong> Utilized tools such as IDA Pro and OBD Sniffer to reverse engineer ECU protocols, enabling seamless integration with diagnostic products.</li>
    <li><strong>Software Development:</strong> Developed diagnostic software in C# to interface with hardware and process vehicle data for fault detection.</li>
    <li><strong>Collaboration:</strong> Worked closely with hardware engineers to ensure software compatibility and accuracy in detecting vehicle faults.</li>
</ul>
<br/><br/>
<strong>Achievements:</strong><br/><br/>
<ul>
    <li style="margin-bottom: 5px;">1: Successfully implemented ECU protocol decoding, enhancing the accuracy and efficiency of car diagnostic devices.<br/></li>
    <li style="margin-bottom: 5px;">2: Developed innovative software solutions that improved the functionality and reliability of diagnostic systems.<br/></li>
    <li style="margin-bottom: 5px;">3: Collaborated effectively with a multidisciplinary team to deliver a groundbreaking product in the automotive diagnostic industry.<br/></li>
</ul>
<br/><br/>
<span>
    My tenure at Rayan-Sanat provided me with invaluable experience in reverse engineering, software development, and collaboration with hardware teams. It also deepened my appreciation for technological innovation in the automotive sector and reinforced my passion for delivering impactful solutions.
</span>
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
    <span>
    As a Full-Stack Developer at <strong>sepanta.com</strong>, I played a vital role in the development of SEPANTA ADSL CRM, along with its associated subsystems like ADSL Billing and Core Accounting. These systems formed the backbone of delivering reliable ADSL internet services to users across multiple provinces in collaboration with Iran's esteemed telecommunications organization.
</span>
<br/><br/>
<strong>Key Responsibilities:</strong><br/><br/>
<ul>
    <li><strong>System Development:</strong> Contributed to the design and implementation of SEPANTA ADSL CRM and its subsystems, ensuring user-friendliness, efficiency, and scalability.</li>
    <li><strong>Collaboration:</strong> Worked closely with the Team Leader and stakeholders to understand requirements and deliver tailored solutions.</li>
    <li><strong>Technical Implementation:</strong> Developed and maintained core functionalities using .NET frameworks and implemented robust back-end systems to support operations.</li>
    <li><strong>Optimization:</strong> Continuously improved the system to enhance performance and reliability for end-users.</li>
</ul>
<br/><br/>
<strong>Achievements:</strong><br/><br/>
<ul>
    <li style="margin-bottom: 5px;">1: Successfully implemented SEPANTA ADSL CRM, streamlining operations and improving service delivery across multiple provinces.<br/></li>
    <li style="margin-bottom: 5px;">2: Delivered an innovative billing system that simplified accounting processes and ensured accuracy.<br/></li>
    <li style="margin-bottom: 5px;">3: Collaborated effectively with a multidisciplinary team to meet stakeholder expectations and exceed performance benchmarks.<br/></li>
</ul>
<br/><br/>
<span>
    My time at Sepanta.com was an enriching experience that allowed me to work on impactful projects while honing my full-stack development skills. This chapter in my career provided a strong foundation for tackling large-scale systems and delivering meaningful solutions that resonate with users' needs.
</span>            
    `,
  },
  {
    icon: "./assets/images/logo_freelance.png",
    role: "Software Developer",
    company: "Freelance",
    location: "Tehran, Iran",
    period: "Oct 2006 - Dec 2010",
    type: "Freelancer",
    description: `
    <span>
    As a Freelance Software Developer, I leveraged my skills and creativity to deliver exceptional solutions for a diverse range of clients. This role allowed me to work on exciting projects across various domains, sharpen my expertise, and explore cutting-edge technologies while balancing my academic pursuits.
</span>
<br/><br/>
<strong>Key Responsibilities:</strong><br/><br/>
<ul>
    <li><strong>Web Development:</strong> Designed and developed custom websites and web applications using modern frameworks and technologies.</li>
    <li><strong>Mobile Application Development:</strong> Created innovative and user-friendly mobile applications tailored to specific client needs.</li>
    <li><strong>Software Architecture:</strong> Crafted scalable and maintainable architectures, focusing on optimizing performance and reliability.</li>
    <li><strong>Client Communication:</strong> Worked closely with clients to understand their requirements and provide tailored solutions that exceeded expectations.</li>
</ul>
<br/><br/>
<strong>Achievements:</strong><br/><br/>
<ul>
    <li style="margin-bottom: 5px;">1: Successfully completed numerous projects across different industries, gaining valuable expertise and client recognition.<br/></li>
    <li style="margin-bottom: 5px;">2: Built strong client relationships by consistently delivering high-quality results and maintaining clear communication.<br/></li>
    <li style="margin-bottom: 5px;">3: Developed key skills such as time management, teamwork, and problem-solving, contributing to long-term professional growth.<br/></li>
</ul>
<br/><br/>
<span>
    My freelance journey was a dynamic and enriching experience, providing me with hands-on opportunities to tackle complex challenges, innovate solutions, and grow both personally and professionally. It laid the foundation for my continued success and commitment to excellence in software development.
</span>
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
