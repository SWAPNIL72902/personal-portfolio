export type ProjectCategory = "Product" | "Finance" | "Data" | "Mechanical";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  metrics: string[];
  featured: boolean;
}

export const projects: Project[] = [
  // PRODUCT / PM PROJECTS
  {
    id: 1,
    title: "Food Delivery Reliability (FoodSwift)",
    description: "Improved restaurant reliability in large-scale food delivery platform",
    category: "Product",
    tags: ["product", "supply chain", "analytics", "operations"],
    metrics: ["50K restaurants", "2M MAU", "39.6% failure rate identified"],
    featured: true
  },
  {
    id: 2,
    title: "Instagram Reels Strategy",
    description: "Solved content fatigue and engagement drop",
    category: "Product",
    tags: ["growth", "engagement", "product strategy"],
    metrics: ["+4.5 min/session", "₹350Cr revenue potential"],
    featured: true
  },
  {
    id: 3,
    title: "SkillSync AI Product",
    description: "AI-based personalized learning roadmap system",
    category: "Product",
    tags: ["AI", "edtech", "personalization"],
    metrics: ["68% users stuck", "$28B market opportunity"],
    featured: true
  },
  {
    id: 4,
    title: "Gnani AI Logistics System",
    description: "AI-powered reverse logistics verification system",
    category: "Product",
    tags: ["AI", "logistics", "automation"],
    metrics: ["30–40% cost reduction", "50–60% fewer retries"],
    featured: false
  },
  {
    id: 5,
    title: "Meesho Cart Abandonment",
    description: "Improved ecommerce conversion rates",
    category: "Product",
    tags: ["conversion", "ecommerce", "UX"],
    metrics: ["+500K monthly orders"],
    featured: true
  },

  // FINANCE PROJECTS
  {
    id: 6,
    title: "Financial Risk Analytics (CAPM + ARIMA + GARCH + VaR)",
    description: "Multi-model financial risk and volatility analysis",
    category: "Finance",
    tags: ["finance", "risk", "time-series"],
    metrics: ["1000+ data points", "multi-model forecasting"],
    featured: true
  },
  {
    id: 7,
    title: "Portfolio Optimization",
    description: "Built optimal portfolios using risk-return models",
    category: "Finance",
    tags: ["portfolio", "quant", "python"],
    metrics: ["Higher Sharpe ratio achieved"],
    featured: false
  },
  {
    id: 8,
    title: "Derivatives Strategy (Manappuram)",
    description: "Designed options trading strategies",
    category: "Finance",
    tags: ["options", "trading"],
    metrics: ["30% revenue growth analyzed"],
    featured: false
  },
  {
    id: 9,
    title: "Financial Statement Analysis",
    description: "Multi-company ratio and performance analysis",
    category: "Finance",
    tags: ["ratios", "analysis"],
    metrics: ["10+ financial metrics evaluated"],
    featured: false
  },
  {
    id: 10,
    title: "WACC Analysis (L&T)",
    description: "Corporate valuation using cost of capital",
    category: "Finance",
    tags: ["valuation", "corporate finance"],
    metrics: ["₹1.83L Cr company analysis"],
    featured: false
  },
  {
    id: 11,
    title: "Industry Analysis (Ambuja Cement)",
    description: "End-to-end industry and business model study",
    category: "Finance",
    tags: ["strategy", "industry"],
    metrics: ["80–85% revenue from core segment"],
    featured: false
  },

  // DATA / ANALYTICS PROJECTS
  {
    id: 12,
    title: "Healthcare ML Prediction",
    description: "Predict patient readmission using ML models",
    category: "Data",
    tags: ["ML", "healthcare", "prediction"],
    metrics: ["82% accuracy"],
    featured: true
  },
  {
    id: 13,
    title: "EdTech Dashboard",
    description: "Power BI dashboard for course analytics",
    category: "Data",
    tags: ["powerbi", "dashboard"],
    metrics: ["1000+ records analyzed"],
    featured: false
  },
  {
    id: 14,
    title: "E-commerce Sales Dashboard",
    description: "Sales and revenue analytics dashboard",
    category: "Data",
    tags: ["analytics", "SQL"],
    metrics: ["5000+ transactions analyzed"],
    featured: false
  },

  // SYSTEM / MECHANICAL PROJECTS
  {
    id: 15,
    title: "Apple Supply Chain Case Study",
    description: "Deep analysis of Apple’s global supply chain",
    category: "Mechanical",
    tags: ["operations", "supply chain"],
    metrics: ["5-day inventory vs 18-day industry"],
    featured: false
  },
  {
    id: 16,
    title: "Epicyclic Gearbox Design",
    description: "Designed and fabricated mechanical gearbox",
    category: "Mechanical",
    tags: ["mechanical", "CAD"],
    metrics: ["Full design-to-fabrication lifecycle"],
    featured: false
  }
];
