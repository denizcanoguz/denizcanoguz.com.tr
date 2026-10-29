import { Icons } from "@/components/icons";
import {
  BrainCircuit,
  Database,
  Eraser,
  Gauge,
  House,
  Landmark,
  Phone,
  PieChart,
  Presentation,
} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Excel, Kaggle, PowerBI, PowerPoint, Sap, SqlServer } from "@/components/ui/svgs/brand-icons";

export const DATA = {
  name: "Deniz Can Oğuz",
  initials: "DO",
  url: "https://denizcanoguz.com.tr",
  location: "Kartepe, Kocaeli, Türkiye",
  locationLink: "https://www.google.com/maps/place/Kartepe,+Kocaeli",
  description:
    "Investment analyst turning portfolio data into decisions with SQL, Power BI, Python and Excel.",
  summary:
    "Investment analyst with four years of hands-on analysis in asset management, valuing non-performing loan portfolios and reporting portfolio performance to internal teams and external investors. I build the analysis with SQL, Power BI, Python and Excel, backed by completed SQL Server, SQL & Power BI, SAP ABAP and 300-hour data science bootcamps. I'm looking to bring this business-side judgment to a dedicated data, BI or SAP team.\n\n**Languages:** Turkish (native), English (B1, intermediate).",
  avatarUrl: "/profile.jpg",
  ogImage: "/profile.jpg",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Data, Analytics & Data Science",
      text: "Dashboards, analyses and models I've built, from Power BI reporting and customer segmentation to A/B testing, lifetime value and churn. The full work is on GitHub and Kaggle.",
    },
    // The theme's hackathon timeline, used here for courses and certificates
    hackathons: {
      order: 6, enabled: true,
      label: "Learning",
      heading: "Courses & Certificates",
      text: "Training I completed alongside my work, from SQL Server and Power BI to SAP ABAP and a 300-hour data science bootcamp.",
    },
    photos: {
      order: 7, enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to talk about a data, BI or SAP role? Email me or reach out on LinkedIn.",
    },
  },
  photos: [],
  skills: [
    { name: "SQL", icon: Database },
    { name: "SQL Server", icon: SqlServer },
    { name: "Power BI", icon: PowerBI },
    { name: "Python", icon: Python },
    { name: "Excel", icon: Excel },
    { name: "PowerPoint", icon: PowerPoint },
    { name: "SAP ABAP", icon: Sap },
    { name: "Data Cleaning & Analysis", icon: Eraser },
    { name: "KPI & Performance Reporting", icon: Gauge },
    { name: "Machine Learning Fundamentals", icon: BrainCircuit },
    { name: "NPL Portfolio Valuation", icon: Landmark },
    { name: "Investor Reporting", icon: Presentation },
    { name: "Market Share Analysis", icon: PieChart },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "denizcan.oguz@yandex.com",
    tel: "+90 537 703 88 04",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/denizcanoguz/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/denizcanoguz",
        icon: Icons.github,
        navbar: true,
      },
      Kaggle: {
        name: "Kaggle",
        url: "https://www.kaggle.com/denizcanoguz",
        icon: Kaggle,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@denizcan.oguz",
        icon: Icons.medium,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:denizcan.oguz@yandex.com",
        icon: Icons.email,
        navbar: true,
      },
      phone: {
        name: "Call",
        url: "tel:+905377038804",
        icon: Phone,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Dünya Varlık Yönetim A.Ş.",
      href: "https://www.dunyavarlik.com",
      badges: [],
      location: "Istanbul, Türkiye",
      title: "Investment Analyst, Investment Department",
      logoUrl: "/icons/dunyavarlik.svg",
      start: "September 2022",
      end: undefined,
      description:
        "Evaluate non-performing loan portfolios offered for sale by banks and financial companies as part of the team, and take part in the tenders they hold. Report the performance of purchased portfolios to internal units and external investors. Perform market share analysis and analyze sales volumes. Contribute to research that improves the company's valuation model and implement its improvements, using SQL, Python, Power BI and Excel.",
    },
    {
      company: "Toyota Motor Manufacturing Turkey",
      href: "",
      badges: [],
      location: "Sakarya, Türkiye",
      title: "Quality Control Team Member, Quality Department",
      logoUrl: "https://www.google.com/s2/favicons?domain=toyota.com&sz=128",
      start: "November 2020",
      end: "May 2021",
      description:
        "Checked the conformity of vehicle surfaces and parts to quality control standards on the production line.",
    },
    {
      company: "İSU General Directorate",
      href: "https://www.isu.gov.tr",
      badges: ["Internship"],
      location: "Kocaeli, Türkiye",
      title: "IT Intern",
      logoUrl: "/icons/isu.png",
      start: "2014",
      end: "2014",
      description: "Data collection, cleaning, analysis and reporting.",
    },
    {
      company: "Brisa Bridgestone Sabancı",
      href: "",
      badges: ["Internship"],
      location: "Kocaeli, Türkiye",
      title: "Financial Accounting Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=brisa.com.tr&sz=128",
      start: "2013",
      end: "2013",
      description: "Internal and external KPI reporting.",
    },
  ],
  education: [
    {
      school: "Bartın University",
      href: "https://www.bartin.edu.tr",
      degree: "BSc in Management Information Systems · GPA 3.38",
      logoUrl: "https://www.google.com/s2/favicons?domain=bartin.edu.tr&sz=128",
      start: "2015",
      end: "2019",
    },
    {
      school: "Sabancı Anatolian Technical and Industrial Vocational High School",
      href: "https://sabancimtal.meb.k12.tr",
      degree: "Information Technologies · Database Programming",
      logoUrl: "/icons/smtal.jpg",
      start: "2011",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "Power BI Dashboard Sample",
      href: "https://github.com/denizcanoguz/Power-BI-Dashboard-Sample",
      dates: "2025",
      active: true,
      description:
        "A sample Power BI dashboard built on a sleep health and lifestyle dataset.",
      technologies: ["Power BI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/denizcanoguz/Power-BI-Dashboard-Sample",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Customer Segmentation with RFM",
      href: "https://www.kaggle.com/denizcanoguz/customers-segmentation-with-rfm",
      dates: "2022",
      active: true,
      description:
        "Segmenting customers by recency, frequency and monetary value.",
      technologies: ["Python", "Pandas"],
      links: [
        {
          type: "Kaggle",
          href: "https://www.kaggle.com/denizcanoguz/customers-segmentation-with-rfm",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/denizcanoguz/customer-segmentation-with-rfm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Customer Lifetime Value Prediction",
      href: "https://www.kaggle.com/denizcanoguz/customer-lifetime-value-prediction",
      dates: "2022",
      active: true,
      description:
        "Predicting customer lifetime value from purchase history.",
      technologies: ["Python"],
      links: [
        {
          type: "Kaggle",
          href: "https://www.kaggle.com/denizcanoguz/customer-lifetime-value-prediction",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/denizcanoguz/cltv-prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "A/B Test Case Study",
      href: "https://www.kaggle.com/denizcanoguz/a-b-test-case-study",
      dates: "2022",
      active: true,
      description:
        "An A/B testing case study comparing two variants with statistical tests.",
      technologies: ["Python", "Statistics"],
      links: [
        {
          type: "Kaggle",
          href: "https://www.kaggle.com/denizcanoguz/a-b-test-case-study",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/denizcanoguz/A-B-Test-Case-Study",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Rule-Based Classification",
      href: "https://github.com/denizcanoguz/Rule-Based-Classification-Project",
      dates: "2022",
      active: true,
      description:
        "Creating level-based customer personas for a game company and estimating how much new customers in each segment can earn on average.",
      technologies: ["Python", "Pandas"],
      links: [
        {
          type: "Source",
          href: "https://github.com/denizcanoguz/Rule-Based-Classification-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Telco Customer Churn Analysis",
      href: "https://github.com/denizcanoguz/Telco-Customer-Churn-Analysis-Feature-Engineering",
      dates: "2022",
      active: true,
      description:
        "Churn analysis and feature engineering on telecom customer data.",
      technologies: ["Python", "Feature Engineering"],
      links: [
        {
          type: "Source",
          href: "https://github.com/denizcanoguz/Telco-Customer-Churn-Analysis-Feature-Engineering",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "SAP ABAP Expert Consultant Training",
      dates: "2026 · 60 hours",
      location: "Impress Akademi",
      description: "",
      image: "/icons/impressakademi.png",
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://verified.sertifier.com/en/verify/96682691331996/",
        },
      ],
    },
    {
      title: "Advanced SQL Server Bootcamp",
      dates: "",
      location: "Bilengo (formerly BilgiAkademisi)",
      description: "",
      image: "/icons/bilengo.svg",
      links: [],
    },
    {
      title: "SQL & Power BI Bootcamp",
      dates: "",
      location: "Bilengo (formerly BilgiAkademisi)",
      description: "",
      image: "/icons/bilengo.svg",
      links: [],
    },
    {
      title: "Data Scientist Professional with Python",
      dates: "In progress since 2023",
      location: "DataCamp",
      description: "",
      image: "https://www.google.com/s2/favicons?domain=datacamp.com&sz=128",
      links: [],
    },
    {
      title: "Data Science & Machine Learning Bootcamp",
      dates: "2022",
      location: "Veri Bilimi Okulu & Miuul",
      description: "300 hours, 10 projects.",
      image: "https://www.google.com/s2/favicons?domain=miuul.com&sz=128",
      links: [],
    },
    {
      title: "Introduction to SQL",
      dates: "2022",
      location: "DataCamp",
      description: "",
      image: "https://www.google.com/s2/favicons?domain=datacamp.com&sz=128",
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.datacamp.com/statement-of-accomplishment/course/11a82e437154ccef7af934461a2729bfc10a5bf7",
        },
      ],
    },
    {
      title: "Python (Basic)",
      dates: "2022",
      location: "HackerRank",
      description: "",
      image: "https://www.google.com/s2/favicons?domain=hackerrank.com&sz=128",
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hackerrank.com/certificates/5b4807cdc542",
        },
      ],
    },
  ],
} as const;
