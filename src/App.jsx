import React from 'react'
import Header from './components/Header'
import FlutterSection from './components/FlutterSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Secure from './components/Secure'

export default function App(){
  return (
    <>
    <div className="flex flex-col lg:flex-row min-h-screen bg-black gap-x-0 lg:gap-x-8">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          <Secure/>
          <FlutterSection />
          <ServicesSection />
          <ContactSection/>
        </div>
      </main>
    </div>
    </>
  )
}
