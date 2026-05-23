"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Steps
import Step1Emotion from "./steps/Step1Emotion"
import Step2Theme from "./steps/Step2Theme"
import Step3Write from "./steps/Step3Write"
import Step4Customize from "./steps/Step4Customize"
import Step5Preview from "./steps/Step5Preview"

export default function ComposePage() {
  const [step, setStep] = useState(1)
  const totalSteps = 5

  // Letter State
  const [letterData, setLetterData] = useState({
    emotion: "",
    theme: "parchment-royal",
    content: "",
    handwriting: "hw-1",
    sealText: "প",
  })

  const handleNext = () => setStep((s) => Math.min(s + 1, totalSteps))
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1))

  const updateData = (key: string, value: string) => {
    setLetterData(prev => ({ ...prev, [key]: value }))
  }

  const progress = (step / totalSteps) * 100

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center bg-parchment-texture">
        {/* Wizard Header */}
        <div className="w-full max-w-4xl mx-auto px-4 pt-10 pb-6">
          <div className="flex justify-between items-end mb-4">
            <h1 className="font-heading text-3xl text-maroon dark:text-gold">
              {step === 1 && "আবেগ নির্বাচন করুন"}
              {step === 2 && "থিম নির্বাচন করুন"}
              {step === 3 && "আপনার চিঠি লিখুন"}
              {step === 4 && "সাজান ও সীলমোহর"}
              {step === 5 && "চিঠির পূর্বরূপ"}
            </h1>
            <span className="text-sm font-medium text-ink/60 dark:text-parchment/60">
              ধাপ {step} / {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Wizard Content */}
        <div className="flex-1 w-full max-w-4xl mx-auto px-4 relative pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {step === 1 && <Step1Emotion data={letterData} updateData={updateData} />}
              {step === 2 && <Step2Theme data={letterData} updateData={updateData} />}
              {step === 3 && <Step3Write data={letterData} updateData={updateData} />}
              {step === 4 && <Step4Customize data={letterData} updateData={updateData} />}
              {step === 5 && <Step5Preview data={letterData} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Wizard Footer (Navigation) */}
        <div className="fixed bottom-0 left-0 w-full border-t border-gold/20 bg-parchment/90 backdrop-blur-md dark:bg-ink/90 p-4 z-40">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={handlePrev}
              disabled={step === 1}
              className={step === 1 ? "opacity-0 pointer-events-none" : ""}
            >
              পিছনে
            </Button>

            {step < totalSteps ? (
              <Button onClick={handleNext} variant="default" className="min-w-[120px]">
                পরবর্তী ধাপ
              </Button>
            ) : (
              <Button onClick={() => alert("চিঠি সংরক্ষিত হয়েছে! (Mock)")} variant="gold" className="min-w-[120px]">
                প্রকাশ করুন
              </Button>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
