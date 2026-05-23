"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Flame, ArrowLeft } from "lucide-react"
import Link from "next/link"
export default function LetterViewPage() {
  const [isOpened, setIsOpened] = useState(false)
  const [isBurned, setIsBurned] = useState(false)

  // Mock data for the specific letter
  const letterData = {
    emotion: "নীরব ভালোবাসা",
    date: "১২ ফাল্গুন, ১৪৩০",
    content: "প্রিয়,\n\nআমি প্রতিদিন তোমার হাসির দিকে তাকিয়ে থাকি, কিন্তু কখনো বলার সাহস পাইনি যে আমার পুরো পৃথিবী ওই হাসিতেই আটকে আছে। হয়তো এই না বলা কথাই আমার সবচেয়ে সুন্দর পরিণতি...\n\nজানি তুমি এটা কখনো পড়বে না। তবুও লিখে রাখলাম। ভালো থেকো।",
    theme: "parchment-royal",
    handwriting: "hw-1",
    sealText: "অ",
    likes: 120
  }

  // Theme styling map
  const themeStyles: Record<string, string> = {
    "parchment-royal": "bg-[#F8F1E3] border-[#D4AF88] text-[#3F0E1A]",
    "midnight-rose": "bg-[#1A1A1A] border-[#B76E79] text-[#F8F1E3]",
    "golden-heritage": "bg-[#3F0E1A] border-[#D4AF88] text-[#F8F1E3]",
    "monsoon-veil": "bg-[#2D3748] border-[#A0AEC0] text-[#E2E8F0]",
  }

  const selectedThemeStyle = themeStyles[letterData.theme] || themeStyles["parchment-royal"]

  if (isBurned) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-center z-10"
        >
          <Flame className="w-24 h-24 text-orange-500 mx-auto mb-6 animate-pulse" />
          <h1 className="font-heading text-4xl mb-4">চিঠিটি পুড়ে ছাই হয়ে গেছে</h1>
          <p className="text-gray-400 mb-8">এই অনুভূতি এখন অনন্তকালের গর্ভে বিলীন।</p>
          <Link href="/explore">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              ফিরে যান
            </Button>
          </Link>
        </motion.div>

        {/* Ash Particles Mock */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black"></div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center bg-parchment-texture min-h-[90vh] py-12 px-4">

        <div className="w-full max-w-3xl mb-8 flex justify-start">
          <Link href="/explore">
            <Button variant="ghost" className="text-ink/60 hover:text-maroon">
              <ArrowLeft className="w-4 h-4 mr-2" /> গ্যালারিতে ফিরুন
            </Button>
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {!isOpened ? (
            /* SEALED ENVELOPE VIEW */
            <motion.div
              key="sealed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: 90 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl cursor-pointer group perspective-1000"
              onClick={() => setIsOpened(true)}
            >
              <div className={`relative w-full aspect-[4/3] rounded-sm shadow-2xl transition-transform duration-500 group-hover:scale-105 ${
                letterData.theme === 'midnight-rose' ? 'bg-[#1A1A1A]' : 'bg-[#e8dcb8]'
              }`}>
                {/* Envelope Flap Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,0 L50,50 L100,0" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <path d="M0,0 L50,50 L0,100" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <path d="M100,0 L50,50 L100,100" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <path d="M0,100 L50,50 L100,100" fill="none" stroke="currentColor" strokeWidth="1"/>
                </svg>

                {/* Wax Seal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-24 h-24 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-red-800 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-[3px] border-red-900 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(139,0,0,0.8)] transition-all duration-300">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                      <span className="font-heading text-4xl text-red-100 drop-shadow-md">
                        {letterData.sealText}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 w-full text-center text-sm font-medium tracking-widest text-ink/40 dark:text-parchment/40 animate-pulse">
                  খুলতে স্পর্শ করুন
                </div>
              </div>
            </motion.div>
          ) : (
            /* OPENED LETTER VIEW */
            <motion.div
              key="opened"
              initial={{ opacity: 0, y: -50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="w-full max-w-2xl"
            >
              <Card className={`border-2 shadow-2xl relative overflow-hidden min-h-[500px] ${selectedThemeStyle}`}>
                {/* Decorative Corners */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-current opacity-30"></div>
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-current opacity-30"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-current opacity-30"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-current opacity-30"></div>

                <CardContent className="p-10 md:p-16">
                  <div className="flex justify-between items-center mb-10 border-b border-current pb-4 opacity-50">
                    <span className="text-sm font-medium tracking-wider bg-current text-background px-3 py-1 rounded-full">
                      {letterData.emotion}
                    </span>
                    <span className="text-sm">
                      {letterData.date}
                    </span>
                  </div>

                  <div className={`whitespace-pre-wrap text-xl md:text-2xl leading-loose ${letterData.handwriting}`}>
                    {letterData.content}
                  </div>

                  <div className="mt-20 pt-8 border-t border-current/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-4">
                      <Button variant="outline" className="rounded-full gap-2 bg-transparent border-current text-current hover:bg-current hover:text-background">
                        <Heart className="w-4 h-4" /> {letterData.likes}
                      </Button>
                      <Button variant="outline" className="rounded-full gap-2 bg-transparent border-current text-current hover:bg-current hover:text-background">
                        <Share2 className="w-4 h-4" /> শেয়ার
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      onClick={() => setIsBurned(true)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-500/10 gap-2"
                    >
                      <Flame className="w-4 h-4" /> পুড়িয়ে ফেলুন
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
