"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pen, Mail, Heart, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Subtle Particles / Glow Mock (can be replaced with actual particles later) */}
          <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-10 max-w-3xl flex flex-col items-center"
          >
            {/* Animated Envelope Icon Mock */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8 p-4 rounded-full bg-maroon/10 dark:bg-gold/10"
            >
              <Mail className="w-16 h-16 text-maroon dark:text-gold" strokeWidth={1} />
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-maroon dark:text-parchment leading-tight">
              যা বলা হয়নি, তা <span className="gold-foil">চিরকালের জন্য</span> লিখুন
            </h1>
            <p className="font-body text-lg md:text-xl text-ink/80 dark:text-parchment/80 mb-10 max-w-2xl">
              একতরফা ভালোবাসা, না বলা বিদায়, বা নীরব কৃতজ্ঞতা—আপনার সবচেয়ে গভীর অনুভূতিগুলো
              একটি ডিজিটাল স্মৃতির পাতায় সংরক্ষণ করুন।
            </p>

            <Link href="/compose">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-2xl relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  <Pen className="w-5 h-5" /> আপনার চিঠি লিখুন
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="w-full py-24 bg-maroon/5 dark:bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-maroon dark:text-gold mb-16">
              কীভাবে কাজ করে?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Heart, title: "অনুভূতি বাছুন", desc: "আপনার মনের অবস্থার সাথে মেলে এমন থিম এবং আবেগ নির্বাচন করুন।" },
                { icon: Pen, title: "মন খুলে লিখুন", desc: "আমাদের শান্ত, সুন্দর পরিবেশে আপনার না বলা কথাগুলো লিখে ফেলুন।" },
                { icon: Sparkles, title: "সীলমোহর করুন", desc: "ডিজিটাল ওয়াক্স সীল দিয়ে চিঠিটি চিরকালের জন্য সংরক্ষণ করুন।" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Card className="h-full border-none bg-transparent shadow-none hover:bg-parchment/50 dark:hover:bg-ink/50 transition-colors">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                        <step.icon className="w-6 h-6 text-maroon dark:text-gold" />
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {step.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Letters Teaser */}
        <section className="w-full py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl text-maroon dark:text-gold mb-8">
              নীরব অনুভূতিগুলো পড়ুন
            </h2>
            <p className="text-ink/70 dark:text-parchment/70 mb-12">
              অন্যদের না বলা কথাগুলো পড়ুন এবং অনুভব করুন আপনি একা নন।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
              {[1, 2].map((i) => (
                <Card key={i} className="group cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold px-2 py-1 bg-gold/20 text-maroon dark:text-gold rounded-full">
                        একতরফা ভালোবাসা
                      </span>
                      <span className="text-xs text-ink/50">১২ ফাল্গুন, ১৪৩০</span>
                    </div>
                    <CardTitle className="text-lg font-body line-clamp-2">
                      &quot;আমি জানি তুমি কোনদিন জানবে না...&quot;
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">
                      আমি প্রতিদিন তোমার হাসির দিকে তাকিয়ে থাকি, কিন্তু কখনো বলার সাহস পাইনি যে আমার পুরো পৃথিবী ওই হাসিতেই আটকে আছে। হয়তো এই না বলা কথাই আমার সবচেয়ে সুন্দর পরিণতি...
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link href="/explore">
              <Button variant="outline" size="lg">
                সব চিঠি দেখুন
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
