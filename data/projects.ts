export type ProjectCategory = "Product" | "Finance" | "Data" | "Mechanical";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  metrics: string[];
  featured: boolean;
  link?: string;
}

export const projectsData: Project[] = [
  // Product / PM Projects
  {
    id: 1,
    title: "Food Delivery Reliability (FoodSwift)",
    description: "Evaluated supply chain and operations data to optimize delivery processes and mitigate failure rates.",
    category: "Product",
    tags: ["product", "supply chain", "analytics", "operations"],
    metrics: ["50K restaurants", "2M MAU", "failure rate 39.6%"],
    featured: true
  },
  {
    id: 2,
    title: "Instagram Reels Strategy",
    description: "Formulated growth and engagement maneuvers to maximize session retention and monetization.",
    category: "Product",
    tags: ["growth", "engagement", "product strategy"],
    metrics: ["+4.5 min session", "₹350Cr revenue potential"],
    featured: true
  },
  {
    id: 3,
    title: "SkillSync AI Product",
    description: "Market research and business modeling for an AI-powered EdTech personalization engine.",
    category: "Product",
    tags: ["AI", "edtech", "personalization"],
    metrics: ["68% user pain", "$28B market"],
    featured: true
  },
  {
    id: 4,
    title: "Gnani AI Logistics System",
    description: "Designed voice-based automation flows for high-frequency logistics interactions.",
    category: "Product",
    tags: ["AI", "logistics", "automation"],
    metrics: ["30–40% cost reduction"],
    featured: false
  },
  {
    id: 5,
    title: "Meesho Cart Abandonment",
    description: "Analyzed deep ecommerce funnels to curb conversion drop-offs and enhance user UX.",
    category: "Product",
    tags: ["conversion", "ecommerce", "UX"],
    metrics: ["+500K orders/month"],
    featured: true
  },

  // Finance Projects
  {
    id: 6,
    title: "Financial Risk Analytics",
    description: "Modeled comprehensive financial risk engines utilizing CAPM, ARIMA, and GARCH methodologies.",
    category: "Finance",
    tags: ["finance", "risk", "time-series"],
    metrics: ["1000+ data points", "VaR model"],
    featured: true
  },
  {
    id: 7,
    title: "Portfolio Optimization",
    description: "Algorithmic resource allocation utilizing Python to maximize risk-adjusted yields.",
    category: "Finance",
    tags: ["portfolio", "quant", "python"],
    metrics: ["higher Sharpe ratio"],
    featured: false
  },
  {
    id: 8,
    title: "Derivatives Strategy (Manappuram)",
    description: "Analyzed option chain behavior to formulate high-conviction trading and hedging strategies.",
    category: "Finance",
    tags: ["options", "trading"],
    metrics: ["30% revenue growth analyzed"],
    featured: false
  },
  {
    id: 9,
    title: "Financial Statement Analysis",
    description: "Forensic breakdown of core financial statements identifying operational inefficiencies and strengths.",
    category: "Finance",
    tags: ["ratios", "analysis"],
    metrics: ["10+ financial metrics"],
    featured: false
  },
  {
    id: 10,
    title: "WACC Analysis (L&T)",
    description: "Calculated weighted average cost of capital to evaluate corporate valuation limits.",
    category: "Finance",
    tags: ["valuation", "corporate finance"],
    metrics: ["₹1.83L Cr company analysis"],
    featured: false
  },
  {
    id: 11,
    title: "Industry Analysis (Ambuja Cement)",
    description: "Evaluated macro market trends and segmented core operational revenue drives internally.",
    category: "Finance",
    tags: ["strategy", "industry"],
    metrics: ["80–85% revenue core segment"],
    featured: false
  },

  // Data / Analytics Projects
  {
    id: 12,
    title: "Healthcare ML Prediction",
    description: "Deployed machine learning algorithms to diagnose clinical anomalies effectively.",
    category: "Data",
    tags: ["ML", "healthcare", "prediction"],
    metrics: ["82% accuracy"],
    featured: true
  },
  {
    id: 13,
    title: "EdTech Dashboard",
    description: "Structured PowerBI visualizations to track massive student progression telemetry.",
    category: "Data",
    tags: ["powerbi", "dashboard"],
    metrics: ["1000+ records analyzed"],
    featured: false
  },
  {
    id: 14,
    title: "E-commerce Sales Dashboard",
    description: "SQL-driven data analysis querying pipeline logic to summarize business transaction flows.",
    category: "Data",
    tags: ["analytics", "SQL"],
    metrics: ["5000+ transactions"],
    featured: false
  },

  // System / Mechanical
  {
    id: 15,
    title: "Apple Supply Chain Case Study",
    description: "Dissected hardware turnaround cycles measuring efficiency against industry averages.",
    category: "Mechanical",
    tags: ["operations", "supply chain"],
    metrics: ["5-day inventory vs 18 industry"],
    featured: false
  },
  {
    id: 16,
    title: "Epicyclic Gearbox Design",
    description: "Architected and validated physical stress specifications for a high-tension gearbox.",
    category: "Mechanical",
    tags: ["mechanical", "CAD"],
    metrics: ["full fabrication lifecycle"],
    featured: false
  }
];
