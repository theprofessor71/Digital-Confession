import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Heart, CloudRain, Flame, Wind, Moon, Sun } from "lucide-react"

export default function Step1Emotion({ data, updateData }: { data: { emotion: string }, updateData: (key: string, val: string) => void }) {
  const emotions = [
    { id: "silent-love", title: "নীরব ভালোবাসা", desc: "যা কখনো বলা হয়নি", icon: Heart },
    { id: "farewell", title: "না বলা বিদায়", desc: "শেষবারের মতো কিছু কথা", icon: Wind },
    { id: "gratitude", title: "গভীর কৃতজ্ঞতা", desc: "মন থেকে ধন্যবাদ", icon: Sun },
    { id: "apology", title: "ক্ষমা প্রার্থনা", desc: "ভুল স্বীকার ও অনুশোচনা", icon: CloudRain },
    { id: "admiration", title: "একতরফা মুগ্ধতা", desc: "দূর থেকে ভালো লাগা", icon: Moon },
    { id: "anger", title: "অভ্যর্থিত অভিমান", desc: "বুকের ভেতর জমে থাকা কষ্ট", icon: Flame },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      {emotions.map((emotion) => {
        const isSelected = data.emotion === emotion.id
        return (
          <Card
            key={emotion.id}
            onClick={() => updateData("emotion", emotion.id)}
            className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
              isSelected
                ? "border-maroon shadow-md bg-maroon/5 dark:border-gold dark:bg-gold/10"
                : "border-gold/30 hover:border-maroon/50 dark:hover:border-gold/50"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className={`p-3 rounded-full ${isSelected ? "bg-maroon text-parchment dark:bg-gold dark:text-maroon" : "bg-maroon/10 text-maroon dark:bg-gold/10 dark:text-gold"}`}>
                <emotion.icon className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-xl mb-1">{emotion.title}</CardTitle>
                <CardDescription>{emotion.desc}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        )
      })}
    </div>
  )
}
