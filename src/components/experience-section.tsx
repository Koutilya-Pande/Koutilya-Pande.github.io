import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/src/components/ui/card'

export default function ExperienceSection() {
  const experience = [
    { 
      title: "Data Scientist", 
      company: "Keelworks Foundation", 
      period: "Mar’24 – Present",
      responsibilities: [
        "Optimized homepage layout by A/B testing comparing two versions, resulting in a 28% increase in CTR",
        "Utilized Power BI to transform and merge data, enhancing suitability for analysis in Excel, stream insights generation",
        "Created mockups of dashboards and data visualizations in MS Excel, refining design concepts and ensuring alignment with project objective",
        "Presented monthly performance reports to stakeholders using Power BI and Excel, highlighting insights on user behavior that led to a revamp of the homepage layout, improving navigation efficiency by 20%"
      ]
    },
    { 
      title: "Data Scientist", 
      company: "Korangle", 
      period: "Dec’21 – Jul’22",
      responsibilities: [
        "Automated data sampling using Python, reducing processing time by 40% while conducting rigorous statistical analyses on 50,000+ entries for data validation, ensuring data integrity for product development and marketing strategies",
        "Developed a customer segmentation model using K-Means clustering to find new set of customers",
        "Assisted with customer journey mapping, Led a Random Forest customer satisfaction model from scratch, synthesizing data from customer(School Directors) surveys, resulting in 12% fewer customer complaints",
        "Proposed a Tableau tool that prioritized and generated lists of customers with potential pricing improvement allowing the team to contract changes and re-negotiations, build dynamic price models to maximize profits",
        "Analyzed competitive market data and customer queries, uncovering insights that led to a new feature ‘Teacher Rating’ for the application, increasing market penetration by 17%"
      ]
    },
    { 
      title: "Data Scientist (Intern)", 
      company: "Udemy", 
      period: "May’21 – July’21",
      responsibilities: [
        "Designed queries, stored procedures, triggers, cursors, tables, and views in SQL Server to provide structured data to generate comprehensive analytical reports",
        "Optimized ETL by leveraging SQL and Python, 18% reduction in data preparation time, saving 8hr/week for analytic team",
        "Devised classification models (Logistic Regression, Decision Tree, Random Forest) to predict loan approval outcomes",
        "Successfully addressed class imbalance in loan approval prediction model by conducting extensive model evaluation (precision, recall, F1 score, AUC-ROC) and fine-tuning to achieve accuracy of 84.06%"
      ]
    }
  ]

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <Card key={index} className="bg-white rounded-xl transition-transform hover:scale-105 p-6 max-w-8xl">
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company} | {exp.period}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}