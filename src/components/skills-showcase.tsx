'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Database, Code, BarChart2, Cloud, Train, Settings, MessageSquare } from 'lucide-react'

interface SkillCategory {
  id: string;
  title: string;
  icon: JSX.Element;
  color: string;
  skills: string[];
}

const SkillsShowcase = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'collection',
      title: 'Data Collection & Integration',
      icon: <Database className="h-6 w-6" />,
      color: 'bg-blue-500',
      skills: [
        'Web Scraping (BeautifulSoup, Scrapy)',
        'API Integration & RESTful Services',
        'SQL & NoSQL Databases (MySQL, MongoDB)',
        'Cloud Services for Data Storage (AWS S3, GCP)',
        'Real-time Data Streaming (Kafka, Apache Flink)'
      ]
    },
    {
      id: 'processing',
      title: 'Data Processing & Transformation',
      icon: <Code className="h-6 w-6" />,
      color: 'bg-green-500',
      skills: [
        'ETL Pipeline Development (Airflow, Luigi)',
        'Data Cleaning & Transformation (Pandas, NumPy)',
        'Apache Spark & Distributed Processing',
        'Data Quality Assurance & Validation',
        'Data Wrangling for Unstructured Data'
      ]
    },
    {
      id: 'analysis',
      title: 'Statistical & Exploratory Data Analysis',
      icon: <BarChart2 className="h-6 w-6" />,
      color: 'bg-yellow-500',
      skills: [
        'Statistical Analysis (Hypothesis Testing, Regression)',
        'Data Visualization (Plotly, D3.js, Tableau)',
        'A/B Testing & Experimentation',
        'Feature Selection & Engineering',
        'Exploratory Data Analysis (EDA)'
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning & Deep Learning',
      icon: <Train className="h-6 w-6" />,
      color: 'bg-purple-500',
      skills: [
        'Supervised & Unsupervised Learning',
        'Deep Learning Frameworks (TensorFlow, PyTorch)',
        'NLP & Computer Vision Techniques',
        'Reinforcement Learning',
        'Feature Engineering & Dimensionality Reduction'
      ]
    },
    {
      id: 'optimization',
      title: 'Model Fine-Tuning & Optimization',
        icon: <Settings className="h-6 w-6" />,
      color: 'bg-orange-500',
      skills: [
        'Fine-Tuning Pretrained Models (BERT, GPT)',
        'Hyperparameter Tuning (Grid Search, Bayesian Optimization)',
        'Model Ensembling & Blending Techniques',
        'Performance Optimization for Large Models',
        'Model Compression (Quantization, Pruning)'
      ]
    },
    {
      id: 'prompt',
      title: 'Prompt Engineering & RAG',
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'bg-pink-500',
      skills: [
        'Prompt Design & Optimization for LLMs (ChatGPT, GPT-4)',
        'Retrieval-Augmented Generation (RAG) Techniques',
        'Zero-shot and Few-shot Prompting',
        'Embeddings and Semantic Search',
        'Iterative Prompt Testing and Evaluation'
      ]
    },
    {
      id: 'mlops',
      title: 'MLOps & Model Deployment',
      icon: <Cloud className="h-6 w-6" />,
      color: 'bg-red-500',
      skills: [
        'MLOps Frameworks (MLflow, TFX, Kubeflow)',
        'Docker & Kubernetes for Containerization',
        'CI/CD for Model Deployment',
        'Model Serving (TensorFlow Serving, FastAPI)',
        'Monitoring & Maintenance of Deployed Models'
      ]
    },
    {
      id: 'delivering',
      title: 'Delivering',
              icon: <MessageSquare className="h-6 w-6" />,
      color: 'bg-teal-500',
      skills: [
        'Data Storytelling',
        'Data Visualization (Tableau, Power BI)',
        'Critical Thinking',
        'Leadership'
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card 
            key={category.id} 
            className="rounded-xl shadow-lg mb-8 mt-4 bg-white hover:shadow-xl transition-shadow duration-300 min-h-[350px] transform hover:scale-105 transition-transform"
          >
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6 mt-2">
                <div className={`p-4 rounded-lg ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="list-disc pl-5 space-y-3">
                {category.skills.map((skill, index) => (
                  <li key={index} className="text-md leading-relaxed text-gray-700">{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SkillsShowcase