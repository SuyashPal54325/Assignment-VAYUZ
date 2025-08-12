import React from 'react'
import Header from './components/Header'
import FlutterSection from './components/FlutterSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Secure from './components/Secure'

export default function App(){
  return (
    <>
    <div className="flex min-h-screen  gap-x-0 ml-30 mr-30 ">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <div className="space-y-0">
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
