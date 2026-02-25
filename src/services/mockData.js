export const users = [
  { id: 1, name: 'Alice Mentor', email: 'alice@company.com', password: 'password', role: 'admin' },
  { id: 2, name: 'Bob Mentor', email: 'bob@company.com', password: 'password', role: 'admin' },
  { id: 3, name: 'Charlie Student', email: 'charlie@student.com', password: 'password', role: 'student' },
  { id: 4, name: 'Dana Student', email: 'dana@student.com', password: 'password', role: 'student' },
  { id: 5, name: 'Sowmith Samala', email: 'sowmithsamala53@gmail.com', password: 'password', role: 'student' }
]

export let internships = [
  // Frontend Internships
  { id: 101, title: 'Frontend Developer Intern', company: 'TechStart Inc', skills: ['React', 'Tailwind CSS', 'JavaScript'], duration: '3 months', deadline: '2026-03-31', description: 'Build responsive UI components and implement user interfaces using React. Work on component optimization and performance.' },
  { id: 102, title: 'React.js Specialist Intern', company: 'WebFlow Solutions', skills: ['React', 'Redux', 'Material-UI'], duration: '4 months', deadline: '2026-04-15', description: 'Develop interactive dashboards and web applications. Experience with Redux state management and modern React hooks.' },
  { id: 103, title: 'Vue.js Frontend Intern', company: 'Creative Digital', skills: ['Vue.js', 'Vuex', 'Sass'], duration: '3 months', deadline: '2026-03-20', description: 'Create beautiful frontend experiences with Vue.js framework. Build reusable components and manage application state.' },

  // Backend Internships
  { id: 104, title: 'Backend Engineer Intern', company: 'CloudBase Systems', skills: ['Node.js', 'Express', 'MongoDB'], duration: '4 months', deadline: '2026-04-15', description: 'Design and build RESTful APIs and microservices. Work on database optimization and server-side logic.' },
  { id: 105, title: 'Python Backend Intern', company: 'DataSmart Analytics', skills: ['Python', 'Django', 'PostgreSQL'], duration: '3 months', deadline: '2026-03-25', description: 'Develop backend services using Django framework. Work with relational databases and implement business logic.' },
  { id: 106, title: 'Java Developer Intern', company: 'Enterprise Solutions Ltd', skills: ['Java', 'Spring Boot', 'MySQL'], duration: '4 months', deadline: '2026-04-10', description: 'Build scalable backend applications using Spring Boot. Work on microservices architecture and API development.' },

  // Full Stack Internships
  { id: 107, title: 'Full Stack Developer Intern', company: 'InnovateTech', skills: ['MERN', 'MongoDB', 'Node.js'], duration: '5 months', deadline: '2026-05-01', description: 'Build complete web applications from frontend to backend. Experience with MERN stack and full development lifecycle.' },
  { id: 108, title: 'LAMP Stack Intern', company: 'Web Innovations', skills: ['PHP', 'Laravel', 'MySQL', 'JavaScript'], duration: '4 months', deadline: '2026-04-20', description: 'Develop full-featured web applications using LAMP stack. Learn server-side and client-side development.' },

  // Mobile App Internships
  { id: 109, title: 'React Native Developer Intern', company: 'MobileFirst Apps', skills: ['React Native', 'JavaScript', 'Firebase'], duration: '4 months', deadline: '2026-04-05', description: 'Create cross-platform mobile applications for iOS and Android. Work with native APIs and mobile optimization.' },
  { id: 110, title: 'Flutter App Developer Intern', company: 'DartFlow Interactive', skills: ['Flutter', 'Dart', 'Firebase'], duration: '3 months', deadline: '2026-03-30', description: 'Build beautiful cross-platform apps with Flutter. Learn Dart programming and native platform integration.' },
  { id: 111, title: 'iOS Developer Intern', company: 'Apple Ecosystem Specialists', skills: ['Swift', 'Xcode', 'iOS SDK'], duration: '4 months', deadline: '2026-04-12', description: 'Develop native iOS applications using Swift. Learn about iOS design patterns and performance optimization.' },
  { id: 112, title: 'Android Developer Intern', company: 'Google Play Partners', skills: ['Kotlin', 'Android SDK', 'Java'], duration: '4 months', deadline: '2026-04-08', description: 'Create native Android applications using Kotlin. Work with Android lifecycle and material design principles.' },

  // Data Science & AI Internships
  { id: 113, title: 'Data Science Intern', company: 'AI Innovations Lab', skills: ['Python', 'Pandas', 'Scikit-learn'], duration: '4 months', deadline: '2026-04-10', description: 'Work on data analysis and machine learning projects. Build predictive models and data visualizations.' },
  { id: 114, title: 'Machine Learning Intern', company: 'DeepMind Solutions', skills: ['Python', 'TensorFlow', 'PyTorch'], duration: '5 months', deadline: '2026-05-05', description: 'Develop deep learning models and neural networks. Work on computer vision and NLP projects.' },
  { id: 115, title: 'Business Analytics Intern', company: 'DataInsight Corp', skills: ['Python', 'SQL', 'Tableau'], duration: '3 months', deadline: '2026-03-28', description: 'Analyze business data and create meaningful insights. Build dashboards and reports for stakeholders.' },

  // DevOps & Cloud Internships
  { id: 116, title: 'DevOps Engineer Intern', company: 'CloudScalars', skills: ['Docker', 'Kubernetes', 'AWS'], duration: '4 months', deadline: '2026-04-15', description: 'Manage containerization and orchestration. Work with CI/CD pipelines and infrastructure automation.' },
  { id: 117, title: 'Cloud Infrastructure Intern', company: 'AWS Academy Partners', skills: ['AWS', 'Linux', 'Terraform'], duration: '4 months', deadline: '2026-04-20', description: 'Design and manage cloud infrastructure on AWS. Learn about scalability, security, and cost optimization.' },

  // QA & Testing Internships
  { id: 118, title: 'QA Automation Engineer Intern', company: 'TestPro Solutions', skills: ['Selenium', 'Python', 'TestNG'], duration: '3 months', deadline: '2026-03-25', description: 'Develop automated test scripts and test frameworks. Work on test automation best practices.' },
  { id: 119, title: 'Manual QA Tester Intern', company: 'Quality Assurance Plus', skills: ['Testing', 'Jira', 'Bug Tracking'], duration: '3 months', deadline: '2026-03-30', description: 'Perform functional and regression testing. Create test cases and identify bugs in applications.' },

  // UI/UX Design Internships
  { id: 120, title: 'UI/UX Designer Intern', company: 'Design Studio Co', skills: ['Figma', 'Prototyping', 'Design Thinking'], duration: '3 months', deadline: '2026-03-22', description: 'Design user interfaces and create prototypes. Learn about user research and design systems.' },
  { id: 121, title: 'Product Design Intern', company: 'UserEX Design', skills: ['Figma', 'User Research', 'Wireframing'], duration: '4 months', deadline: '2026-04-10', description: 'Collaborate on product design projects and user experience improvements. Create wireframes and high-fidelity designs.' },

  // Business & Product Internships
  { id: 122, title: 'Product Manager Intern', company: 'TechVenture Inc', skills: ['Product Strategy', 'Analytics', 'Agile'], duration: '4 months', deadline: '2026-04-15', description: 'Work on product strategy and roadmap. Analyze user feedback and drive product improvements.' },
  { id: 123, title: 'Business Development Intern', company: 'Growth Partners', skills: ['Sales', 'Negotiation', 'Communication'], duration: '3 months', deadline: '2026-03-28', description: 'Pursue sales opportunities and build business relationships. Learn about market analysis and client management.' },

  // Database Internships
  { id: 124, title: 'Database Admin Intern', company: 'DataFlow Systems', skills: ['SQL', 'Database Design', 'MySQL'], duration: '4 months', deadline: '2026-04-12', description: 'Manage databases and optimize queries. Work on data integrity and performance tuning.' },

  // Security Internships
  { id: 125, title: 'Cybersecurity Intern', company: 'SecureNet Solutions', skills: ['Network Security', 'Encryption', 'Python'], duration: '4 months', deadline: '2026-04-18', description: 'Learn about information security and ethical hacking basics. Work on security vulnerability assessments.' },

  // Hybrid Roles
  { id: 126, title: 'Full Stack JavaScript Intern', company: 'JavaScript Masters', skills: ['JavaScript', 'React', 'Node.js'], duration: '5 months', deadline: '2026-05-10', description: 'Master JavaScript ecosystem with React and Node.js. Build end-to-end web applications.' },
  { id: 127, title: 'MEAN Stack Developer Intern', company: 'AngularJS Experts', skills: ['Angular', 'Express', 'MongoDB', 'Node.js'], duration: '4 months', deadline: '2026-04-25', description: 'Develop applications using MongoDB, Express, Angular, and Node.js stack.' },
  { id: 128, title: 'GraphQL Developer Intern', company: 'API Innovations', skills: ['GraphQL', 'Apollo', 'Node.js'], duration: '3 months', deadline: '2026-03-20', description: 'Learn modern API development with GraphQL. Build efficient and flexible APIs.' },
]

export let applications = [
  { id: 1001, internshipId: 101, studentId: 3, status: 'accepted', appliedAt: '2026-02-10' }
]

export let tasks = [
  { id: 2001, title: 'Build landing page', internshipId: 101, studentId: 3, deadline: '2026-03-01', status: 'open' }
]

export let reports = [
  { id: 3001, internshipId: 101, studentId: 3, content: 'Week 1 progress: setup component library.', submittedAt: '2026-02-15' }
]

export let feedbacks = [
  { id: 4001, internshipId: 101, studentId: 3, rating: 4, comments: 'Good progress, keep going.' }
]

export let evaluations = [
  { id: 5001, internshipId: 101, studentId: 3, grade: 'B+', remarks: 'Solid work.' }
]
