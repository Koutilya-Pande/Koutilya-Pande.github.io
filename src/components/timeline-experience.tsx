'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Circle } from 'lucide-react'
import Image from 'next/image'

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  logo?: string;
}

const TimelineExperience = () => {
  const experience: Experience[] = [
    { 
      title: "Data Scientist", 
      company: "Keelworks Foundation", 
      period: "Mar'24 - Present",
      logo: "/images/company/keelworks-logo.jpg",
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
      period: "Dec'21 - Jul'22",
      logo: "/images/company/korangle-logo.png",
      responsibilities: [
        "Automated data sampling using Python, reducing processing time by 40% while conducting rigorous statistical analyses on 50,000+ entries for data validation, ensuring data integrity for product development and marketing strategies",
        "Developed a customer segmentation model using K-Means clustering to find new set of customers",
        "Assisted with customer journey mapping, Led a Random Forest customer satisfaction model from scratch, synthesizing data from customer(School Directors) surveys, resulting in 12% fewer customer complaints",
        "Proposed a Tableau tool that prioritized and generated lists of customers with potential pricing improvement allowing the team to contract changes and re-negotiations, build dynamic price models to maximize profits",
        "Analyzed competitive market data and customer queries, uncovering insights that led to a new feature 'Teacher Rating' for the application, increasing market penetration by 17%"
      ]
    },
    { 
      title: "Data Scientist (Intern)", 
      company: "Udemy", 
      period: "May'21 - July'21",
      logo: "/images/company/udemy-logo.png",
      responsibilities: [
        "Designed queries, stored procedures, triggers, cursors, tables, and views in SQL Server to provide structured data to generate comprehensive analytical reports",
        "Optimized ETL by leveraging SQL and Python, 18% reduction in data preparation time, saving 8hr/week for analytic team",
        "Devised classification models (Logistic Regression, Decision Tree, Random Forest) to predict loan approval outcomes",
        "Successfully addressed class imbalance in loan approval prediction model by conducting extensive model evaluation (precision, recall, F1 score, AUC-ROC) and fine-tuning to achieve accuracy of 84.06%"
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
      <div className="relative mt-20">
        {/* Vertical line with lower z-index */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#848484] transform -translate-x-1/2 z-[1]" />
        
        {/* Timeline items */}
        <div className="space-y-32">
          {experience.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative">
                {/* Timeline node with higher z-index */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 -mt-0 z-20`}>
                  <div className="w-20 h-20 rounded-full border-4 border-[#848484] bg-white flex items-center justify-center overflow-hidden p-2">
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    ) : (
                      <Circle className="h-12 w-12 text-[#848484] stroke-[3px]" />
                    )}
                  </div>
                </div>
                
                {/* Content card with higher z-index */}
                <div className={`flex ${isEven ? 'flex-row-reverse' : 'flex-row'} items-center justify-center mt-0 relative z-10`}>
                  <Card 
                    className={`w-[45%] ${isEven ? 'ml-28' : 'mr-28'} 
                    bg-white rounded-xl shadow-lg 
                    transition-all duration-300 hover:scale-105 
                    relative ${isEven ? 'right-arrow' : 'left-arrow'}`}
                  >
                    <CardContent className="p-10">
                      <div className="mb-8">
                        <h3 className="text-[24px] font-bold text-gray-800 mb-2">{exp.title}</h3>
                        <p className="text-[16px] font-semibold text-gray-600 opacity-75">{exp.company}</p>
                        <span className="text-sm text-gray-500 block mt-2">{exp.period}</span>
                      </div>
                      <ul className="ml-5 space-y-4 list-disc">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-[14px] tracking-wider text-gray-700 leading-relaxed">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  {/* Empty space for timeline balance */}
                  <div className="w-[45%]" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TimelineExperience 