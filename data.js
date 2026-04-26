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
      "To be split into junior school, and high school blocks later.",
      "To add room numbers and staff names."
    ]
  },
  {
    id: "main-hall",
    name: "Science Centre",
    category: "Academic",
    type: "Science classes / Labs",
    status: "Demo entry",
    x: 30,
    y: 42,
    description:
      "A study space for all things sciences.",
    tags: ["classes", "lab work", "greenhouse"],
    notes: [
      "Science study space."
    ]
  },
  {
    id: "football-field",
    name: "Football Field",
    category: "sports",
    type: "Outdoor Sports",
    status: "Demo entry",
    x: 33,
    y: 56,
    description:
      "Main sports field used for football, athletics, PE activities, and school events.",
    tags: ["football", "athletics", "PE"],
    notes: [
      "Could later include sports calendar/events info.",
    ]
  },
  {
    id: "swimming-pool",
    name: "Swimming Pool",
    category: "sports",
    type: "Aquatics",
    status: "Demo entry",
    x: 79,
    y: 39,
    description:
      "Swimming facility for PE, training sessions, and aquatic programs.",
    tags: ["swimming", "sports"],
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
    x: 72,
    y: 52,
    description:
      "Court area for court-based sports activities.",
    tags: ["courts", "sports", "training"],
    notes: [
      "To be replaced with official court names later."
    ]
  },
  {
    id: "parking-area",
    name: "Lower Parking Area",
    category: "facilities",
    type: "Access / Parking",
    status: "Demo entry",
    x: 61,
    y: 59,
    description:
      "Main vehicle parking and arrival zone for staff, visitors, and school access.",
    tags: ["parking", "arrival", "transport"],
    notes: [
      "Could add pickup, drop-off, or visitor access guidance."
    ]
  },
  {
    id: "parking-area",
    name: "Upper Parking Area",
    category: "facilities",
    type: "Access / Parking",
    status: "Demo entry",
    x: 70,
    y: 18,
    description:
      "Main vehicle parking and arrival zone for staff, visitors, and school access.",
    tags: ["parking", "arrival", "transport"],
    notes: [
      "Could add pickup, drop-off, or visitor access guidance."
    ]
  },
  {
    id: "admin-zone",
    name: "Administration Zone",
    category: "admin",
    type: "Administration",
    status: "Demo entry",
    x: 60,
    y: 45,
    description:
      "Administrative and operational area.",
    tags: ["reception", "offices", "operations", "finance"],
    notes: [
      "Could later show office contacts and directions."
    ]
  }
];
