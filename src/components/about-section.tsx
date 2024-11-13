import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import React from 'react';

export default function AboutSection() {
  return (
    <div className="text-center">
      <Image
        src="/images/WhatsApp Image 2024-04-11 at 16.36.09(1)(1).png"
        alt="Koutilya Pande"
        width={200}
        height={200}
        className="rounded-full mx-auto mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Koutilya Pande</h1>
      <p className="text-xl mb-6">AI/ML Engineer & Data Scientist</p>
      <p className="max-w-2xl mx-auto mb-8">
        Passionate about leveraging artificial intelligence and machine learning to solve complex problems. 
        With a strong foundation in data science and a keen eye for innovation, 
        I strive to push the boundaries of whats possible with AI.
      </p>
      <Button onClick={() => {}} className="animate-bounce">
        Explore My Skills
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
