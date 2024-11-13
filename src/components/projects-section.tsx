import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    { 
      name: "PDFGenie", 
      description: "The MultiPDF Chat App is a Python app that uses OpenAI LLMs, ChromaDB for vectorization and embedding, and a Langchain pipeline to enable natural language queries on multiple PDFs. Hosted on Streamlit, it delivers relevant responses based on the PDF content without fine-tuning.",
      image: "/images/project-images/project1.jpg",
      githubLink: "https://github.com/Koutilya-Pande/ChatPDF_AI"
    },
    { 
      name: "Pandemic Predictor", 
      description: "Pandemic Predictor is a web application designed to provide users with stock market predictions using machine learning techniques. The core of the service lies in utilizing an LSTM (Long Short-Term Memory) model for time-series forecasting tasks like stock price prediction.",
      image: "/images/project-images/Stock.png",
      githubLink: "https://github.com/Koutilya-Pande/Stock-Price-Prediction---Pandemic-Predictor"
    },
    { 
      name: "Customer Churn Prediction (BCG-Virtual-Data-Science-Program)", 
      description: "Developed a customer churn prediction model for PowerCo using advanced feature engineering techniques and a Random Forest Classifier, achieving 90.36% accuracy and 85% precision.",
      image: "/images/project-images/BCG-Forage-Certificate.jpg",
      githubLink: "https://github.com/Koutilya-Pande/BCG-Virtual-Data-Science-Program"
    },
    { 
      name: "PiSplit", 
      description: "This Bill Splitting App allows users to upload an image of a bill, extract items and prices using Google Gemini AI, and assign expenses to participants for easy cost distribution. It features a conversational interface for handling bill-related queries.",
      image: "/placeholder.svg?height=200&width=300",
      githubLink: "https://github.com/Koutilya-Pande/BS"
    },
    { 
      name: "A/B Testing Case Study", 
      description: "A Python script designed to conduct a simulated A/B test, used in statistics and data science for comparing two versions of a variable to determine the better performer.",
      image: "/images/project-images/ab_test.jpg",
      githubLink: "https://github.com/Koutilya-Pande/AB-Testing-Case-Study"
    },
    { 
      name: "Lead Source Scoring", 
      description: "A brief description of Project Six goes here.",
      image: "/images/project-images/leadscoring.png",
      githubLink: "https://github.com/Koutilya-Pande/lead-source"
    }
  ]

  return (
    <div className="w-full mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white rounded-xl hover:shadow-lg transition-all hover:scale-105 relative">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2">
              <Github className="h-6 w-6 text-gray-500 hover:text-gray-800" />
            </a>
            <Image
              src={project.image}
              alt={project.name}
              width={200}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
