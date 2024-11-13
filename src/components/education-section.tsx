import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
export default function EducationSection() {
  const education = [
    { 
      degree: "Masters in Information Technology and Analytics", 
      major: "Data Science", 
      school: "RUTGERS UNIVERSITY", 
      year: "2022-2023",
      logo: "/images/Education/Rutgers_logo.png" // Path to the university logo
    },
    { 
      degree: "Bachelors of Technology", 
      major: "Electronics and Telecommunication Engineering", 
      school: "Shri Govindaram Seksaria Institute of Technology and Science", 
      year: "2018-2022",
      logo:  "/images/Education/SGSITS_logo.png" // Path to the university logo
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="bg-white rounded-xl transition-transform hover:scale-105">
            <CardHeader>
              <div className="flex items-start mt-2"> {/* Flex container for logo and text */}
                <Image 
                  src={edu.logo} 
                  alt={`${edu.school} logo`} 
                  width={50} // Set the width of the logo
                  height={50} // Set the height of the logo
                  className="mr-4" // Add margin to the right
                /> 
                <div className="flex-1"> {/* Allow text to take remaining space */}
                  <CardTitle className="font-bold">{edu.degree}</CardTitle> {/* Degree name on the left */}
                  <CardDescription>
                    <div className="font-semibold">{edu.major}</div> {/* Major */}
                    <div className="text-gray-700">{edu.school}</div> {/* School name */}
                  </CardDescription>
                </div>
              </div>
              <CardFooter className="mt-2">{edu.year}</CardFooter> {/* Year below the logo/text */}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}