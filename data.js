const mapCategories = [
  { id: "academic", label: "Academic" },
  { id: "sports", label: "Sports" },
  { id: "admin", label: "Admin" },
  { id: "facilities", label: "Facilities" },
  { id: "student-life", label: "Student Life" }
];

const mapLocations = [
  {
    id: "academic-blocks",
    name: "Academic Blocks",
    category: "academic",
    type: "Classrooms",
    status: "Demo entry",
    x: 38,
    y: 28,
    description:
      "Main teaching and learning cluster. This can later be broken down into individual buildings, departments, and room directories.",
    tags: ["classrooms", "teaching", "departments"],
    notes: [
      "You can split this into primary, middle school, and high school blocks later.",
      "Add room numbers and staff names when ready."
    ]
  },
  {
    id: "main-hall",
    name: "Main Hall",
    category: "student-life",
    type: "Assembly / Events",
    status: "Demo entry",
    x: 28,
    y: 49,
    description:
      "A major shared space for assemblies, performances, gatherings, and events.",
    tags: ["events", "assembly", "performance"],
    notes: [
      "Good place for future event schedules.",
      "Could later show booking or use status."
    ]
  },
  {
    id: "football-field",
    name: "Football Field",
    category: "sports",
    type: "Outdoor Sports",
    status: "Demo entry",
    x: 34,
    y: 58,
    description:
      "Main sports field used for football, athletics, PE activities, and school events.",
    tags: ["football", "athletics", "PE"],
    notes: [
      "Could later include sports calendar or fixtures.",
      "Can also link to nearby spectator or entrance information."
    ]
  },
  {
    id: "swimming-pool",
    name: "Swimming Pool",
    category: "sports",
    type: "Aquatics",
    status: "Demo entry",
    x: 78,
    y: 20,
    description:
      "Swimming facility for PE, training sessions, and aquatic programs.",
    tags: ["swimming", "sports", "aquatics"],
    notes: [
      "Could later include pool rules, times, and coach details."
    ]
  },
  {
    id: "sports-courts",
    name: "Sports Courts",
    category: "sports",
    type: "Court Sports",
    status: "Demo entry",
    x: 86,
    y: 52,
    description:
      "Court area for racket or court-based sports activities.",
    tags: ["courts", "sports", "training"],
    notes: [
      "You can replace this with the official court names later."
    ]
  },
  {
    id: "parking-area",
    name: "Parking Area",
    category: "facilities",
    type: "Access / Parking",
    status: "Demo entry",
    x: 55,
    y: 50,
    description:
      "Main vehicle parking and arrival zone for staff, visitors, and school access.",
    tags: ["parking", "arrival", "transport"],
    notes: [
      "Later add pickup, drop-off, or visitor access guidance."
    ]
  },
  {
    id: "admin-zone",
    name: "Administration Zone",
    category: "admin",
    type: "Administration",
    status: "Demo entry",
    x: 73,
    y: 28,
    description:
      "Administrative and operational area. This can later link to offices, admissions, finance, or leadership contacts.",
    tags: ["admin", "offices", "operations"],
    notes: [
      "Could later show office contacts and directions."
    ]
  }
];
