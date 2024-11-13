'use client'

import React, { useMemo } from 'react';
import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

import AboutSection from '@/components/about-section'
import SkillsShowcase from '@/components/skills-showcase'
import EducationSection from '@/components/education-section'
import ProjectsSection from '@/components/projects-section'
import TimelineExperience from '@/components/timeline-experience'

interface IntersectionState {
  about?: boolean;
  skills?: boolean;
  education?: boolean;
  projects?: boolean;
  experience?: boolean;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<keyof IntersectionState>('about')
  const [isIntersecting, setIsIntersecting] = useState<IntersectionState>({})
  
  // Create refs at the top level
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  // Combine refs into an object using useMemo
  const sectionRefs = useMemo(() => ({
    about: aboutRef,
    skills: skillsRef,
    education: educationRef,
    experience: experienceRef,
    projects: projectsRef,
  }), []); // Empty dependency array since refs don't change

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsIntersecting((prev) => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as keyof IntersectionState);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  const scrollToSection = (section: keyof IntersectionState) => {
    setActiveSection(section);
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-6">
            {(Object.keys(sectionRefs) as Array<keyof IntersectionState>).map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary border-b-2 border-primary' : 'text-gray-600'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-20">
        {(Object.keys(sectionRefs) as Array<keyof IntersectionState>).map((section) => (
          <section
            key={section}
            id={section}
            ref={sectionRefs[section]}
            className="min-h-screen flex items-center justify-center"
          >
            <div
              className={`w-full transition-all duration-300 ${
                isIntersecting[section] ? 'opacity-100' : 'opacity-90'
              }`}
            >
              {section === 'about' && <AboutSection />}
              {section === 'skills' && <SkillsShowcase />}
              {section === 'education' && <EducationSection />}
              {section === 'experience' && <TimelineExperience />}
              {section === 'projects' && <ProjectsSection />}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2024 Koutilya Pande. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.github.com/Koutilya-Pande" className="text-gray-600 hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/koutilya-pande" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:koutilyapande26@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}