import resumeAsset from "@/assets/resume.pdf.asset.json";

export const profile = {
  name: "Chirag Goswami",
  role: "Android Developer",
  years: "4+ years",
  pitch:
    "Four years of Android. Currently working on devices that live on shop counters Kotlin and Compose Multiplatform, sharing UI across Android and iOS.",
  email: "chirag433@gmail.com",
  phone: "+91 7984470268",
  linkedin: "https://www.linkedin.com/in/chirag-goswami1196/",
  github: "https://github.com/ChiragYogi",
  playStore: "https://play.google.com/store",
  resumeUrl: resumeAsset.url,
  location: "Ahmedabad, Gujarat, India",
};

export const metrics = [
  { value: "40%", label: "Faster app startup, cold and warm" },
  { value: "30%", label: "APK size reduced across two production codebases" },
  { value: "10+", label: "Production apps shipped to Play Store & App Store" },
  { value: "2", label: "Compose Multiplatform app in production, Android and iOS" },
];

export const experience = [
  {
    company: "Alberta Payments Technology",
    role: "Android Developer",
    period: "Jan 2024 – Present",
    points: [
      "Developing production Android and Compose Multiplatform applications across a retail ecosystem of POS, kiosk, admin, and loyalty platforms, with integrations for payment terminals and retail hardware.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "KMP", "PAX POS", "Firebase"],
  },
  {
    company: "Hyperlink Infosystem",
    role: "Android Developer",
    period: "Mar 2022 – Jan 2024",
    points: [
      "Delivered production Android and Flutter applications for ride-booking, food delivery, dating, and event platforms, working across real-time location, maps, APIs, and cloud services.",
    ],
    stack: ["Android", "Flutter", "MVVM", "Google Maps SDK", "AWS"],
  },
];

export const project = {
  name: "Wallet Expense Tracker",
  tagline: "Android · Kotlin · Personal Published app",
  points: [
    "Personal expense tracking app with scheduled local notifications and full dark/light theme support.",
    "Local persistence with Room Database and expense visualisation through MPAndroidChart.",
  ],
  stack: ["Kotlin", "Room", "MPAndroidChart", "WorkManager", "Material"],
};

export const skills = [
  { group: "Languages", items: ["Kotlin", "Dart", "Java"] },
  {
    group: "Frameworks",
    items: ["Android", "Flutter", "Kotlin Multiplatform", "Material UI"],
  },
  {
    group: "Libraries",
    items: [
      "Jetpack Compose",
      "Ktor",
      "Retrofit",
      "Room",
      "DataStore",
      "Jetpack",
      "Dagger-Hilt",
      "Dagger 2",
      "Koin",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "Android Studio",
      "Firebase",
      "AWS",
      "MySQL",
      "Jira",
      "Jenkins",
    ],
  },
  {
    group: "AI-Assisted Development",
    items: ["Claude Code", "ChatGPT"],
  },
];

export const education = {
  school: "Gujarat Technological University",
  degree: "Diploma in Computer Engineering",
  period: "Mar 2012 – Jun 2015",
  location: "Ahmedabad, Gujarat",
};
