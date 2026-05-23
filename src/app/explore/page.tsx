"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Heart, Share2, Eye } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Mock Data
const letters = [
  {
    id: "1",
    emotion: "নীরব ভালোবাসা",
    date: "১২ ফাল্গুন, ১৪৩০",
    title: "আমি জানি তুমি কোনদিন জানবে না...",
    preview: "আমি প্রতিদিন তোমার হাসির দিকে তাকিয়ে থাকি, কিন্তু কখনো বলার সাহস পাইনি যে আমার পুরো পৃথিবী ওই হাসিতেই আটকে আছে। হয়তো এই না বলা কথাই আমার সবচেয়ে সুন্দর পরিণতি...",
    likes: 120,
    theme: "parchment-royal"
  },
  {
    id: "2",
    emotion: "না বলা বিদায়",
    date: "১৫ মাঘ, ১৪৩০",
    title: "শেষ দেখাটা হলো না",
    preview: "তুমি চলে গেলে, আর আমি স্টেশনে দাঁড়িয়ে রইলাম। শেষবারের মতো হাত নেড়ে বিদায় জানানোর সুযোগটাও পেলাম না। ভালো থেকো।",
    likes: 85,
    theme: "midnight-rose"
  },
  {
    id: "3",
    emotion: "গভীর কৃতজ্ঞতা",
    date: "২ চৈত্র, ১৪৩০",
    title: "অন্ধকারে আলো হওয়ার জন্য",
    preview: "যখন আমার জীবনে শুধু অন্ধকার ছিল, তুমি এসে জীবনের মানে বুঝিয়েছিলে। আজ আমি যেখানে দাঁড়িয়ে আছি, সব তোমার জন্য। ধন্যবাদ।",
    likes: 200,
    theme: "golden-heritage"
  },
  {
    id: "4",
    emotion: "ক্ষমা প্রার্থনা",
    date: "১ বৈশাখ, ১৪৩১",
    title: "ভুল আমারই ছিল",
    preview: "জানি আমাকে কখনো ক্ষমা করবে না। কিন্তু তবুও বলতে চাই, আমি সত্যিই অনুতপ্ত। আমার অহংকার আমাদের সুন্দর সম্পর্কটা নষ্ট করে দিল।",
    likes: 45,
    theme: "monsoon-veil"
  },
  {
    id: "5",
    emotion: "একতরফা মুগ্ধতা",
    date: "১০ জ্যৈষ্ঠ, ১৪৩১",
    title: "দূর থেকে দেখা তারা",
    preview: "তুমি ঠিক আকাশের ওই উজ্জ্বল তারাটার মতো। দূর থেকে দেখতে খুব সুন্দর, কিন্তু কখনো ছোঁয়া যায় না। আমি শুধু দেখেই যাব।",
    likes: 150,
    theme: "parchment-royal"
  }
]

export default function ExplorePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center bg-parchment-texture min-h-screen pb-24">

        {/* Header Section */}
        <section className="w-full py-16 px-4 bg-maroon/5 dark:bg-black/20 border-b border-gold/20">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-maroon dark:text-gold mb-6">
              নীরব পাতার গল্পগুলো
            </h1>
            <p className="text-lg text-ink/70 dark:text-parchment/70 max-w-2xl mx-auto mb-10">
              হাজারো মানুষের না বলা কথা, জমে থাকা অনুভূতি। পড়ুন, অনুভব করুন, আর জানুন আপনি একা নন।
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40 dark:text-parchment/40" />
                <Input
                  placeholder="চিঠি খুঁজুন..."
                  className="pl-10 h-12 bg-parchment/80 dark:bg-ink/80 border-gold/40 focus:border-maroon dark:focus:border-gold rounded-full"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                {["সব", "ভালোবাসা", "বিদায়", "কৃতজ্ঞতা", "ক্ষমা"].map(tag => (
                  <Button key={tag} variant="outline" className="rounded-full whitespace-nowrap">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Masonry/Grid Layout */}
        <section className="w-full container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {letters.map((letter, i) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/letter/${letter.id}`}>
                  <Card className="h-full flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-gold/20 text-maroon dark:text-gold rounded-full">
                          {letter.emotion}
                        </span>
                        <span className="text-xs text-ink/50 dark:text-parchment/50 font-medium">
                          {letter.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-heading leading-snug group-hover:text-gold transition-colors">
                        &quot;{letter.title}&quot;
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-base leading-relaxed line-clamp-4">
                        {letter.preview}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="pt-4 border-t border-gold/10 flex justify-between items-center text-sm text-ink/60 dark:text-parchment/60">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" /> {letter.likes}
                        </span>
                        <span className="flex items-center gap-1 hover:text-maroon dark:hover:text-gold transition-colors">
                          <Eye className="w-4 h-4" /> দেখুন
                        </span>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              আরও চিঠি লোড করুন
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
