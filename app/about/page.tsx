import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const page = () => {
  return (
    <>
    <Navbar/>
     <div className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">About Javaro</h1>
      <p className="text-lg text-muted-foreground">
        Javaro is a modern, web-based Java compiler built to help developers, students, 
        and enthusiasts write, compile, and execute Java code directly from their browser.
        Powered by JDoodle’s execution API and enhanced with AI support, Javaro makes 
        coding in Java faster and more accessible.
      </p>

      <h2 className="text-2xl font-semibold">Our Mission</h2>
      <p className="text-muted-foreground">
        We want to simplify the process of learning and experimenting with Java by 
        providing an easy-to-use compiler environment with zero setup. Whether you’re 
        a beginner writing your first “Hello World” or a developer testing quick snippets, 
        Javaro has you covered.
      </p>

      <h2 className="text-2xl font-semibold">Features</h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Write and run Java code directly in your browser</li>
        <li>AI-powered assistance for debugging and code completion</li>
        <li>Clean, distraction-free editor with syntax highlighting</li>
        <li>Instant results in an interactive output console</li>
        <li>Light & dark mode support</li>
      </ul>

      <h2 className="text-2xl font-semibold">Built With</h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Next.js & TailwindCSS for modern web experience</li>
        <li>shadcn/ui for polished UI components</li>
        <li>Monaco Editor for powerful code editing</li>
        <li>JDoodle API for secure and reliable code execution</li>
      </ul>

      <p className="pt-6 text-muted-foreground">
        🚀 Our goal is to make Java coding accessible anytime, anywhere — without the hassle 
        of setting up an IDE.
      </p>
    </div>
    <Footer/>
  );
    </>
  )
}

export default page
