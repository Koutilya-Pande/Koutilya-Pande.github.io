import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function EducationSection() {
  const education = [
    { 
      degree: "Masters in Information Technology and Analytics", 
      major: "Data Science", 
      school: "RUTGERS UNIVERSITY", 
      year: "2022-2023",
      logo: "/images/Education/Rutgers_Logo.png",
      courseworks: [
        "Introduction to Neural Networks and Deep Learning",
        "Data Structures and Algorithms",
        "Algorithmic Machine Learning",
        "Business Data Management",
        "Analytics for Business Intelligence"
      ]
    },
    { 
      degree: "Bachelors of Technology", 
      major: "Electronics and Telecommunication Engineering", 
      school: "Shri Govindaram Seksaria Institute of Technology and Science", 
      year: "2018-2022",
      logo: "/images/Education/SGSITS_logo.png",
      courseworks: [
        "Data Structures and Algorithms",
        "Machine Learning and Data Science",
        "Digital Signal Processing",
        "Microcontrollers and Embedded Systems"
      ]
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="bg-white rounded-xl transition-transform hover:scale-105">
            <CardHeader>
              <div className="flex items-start mt-2">
                <Image 
                  src={edu.logo} 
                  alt={`${edu.school} logo`} 
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <div className="flex-1">
                  <CardTitle className="font-bold">{edu.degree}</CardTitle>
                  <CardDescription>
                    <div className="font-semibold">{edu.major}</div>
                    <div className="text-gray-700">{edu.school}</div>
                  </CardDescription>
                </div>
              </div>
              <CardFooter className="mt-2">{edu.year}</CardFooter>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold">Courseworks:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {edu.courseworks.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}