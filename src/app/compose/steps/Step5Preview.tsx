import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Step5Preview({ data }: { data: { theme: string, emotion: string, handwriting: string, content: string, sealText: string } }) {
  // Theme styling map
  const themeStyles: Record<string, string> = {
    "parchment-royal": "bg-[#F8F1E3] border-[#D4AF88] text-[#3F0E1A]",
    "midnight-rose": "bg-[#1A1A1A] border-[#B76E79] text-[#F8F1E3]",
    "golden-heritage": "bg-[#3F0E1A] border-[#D4AF88] text-[#F8F1E3]",
    "monsoon-veil": "bg-[#2D3748] border-[#A0AEC0] text-[#E2E8F0]",
  }

  const selectedThemeStyle = themeStyles[data.theme] || themeStyles["parchment-royal"]

  return (
    <div className="mt-8 pb-10 flex flex-col items-center">
      <p className="text-ink/80 dark:text-parchment/80 font-medium mb-8 text-center">
        আপনার চিঠির চূড়ান্ত রূপ। এটি বেনামে প্রকাশিত হবে।
      </p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className={`border-2 shadow-2xl relative overflow-hidden min-h-[400px] ${selectedThemeStyle}`}>
          {/* Decorative Corners */}
          <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-current opacity-30"></div>
          <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-current opacity-30"></div>
          <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-current opacity-30"></div>
          <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-current opacity-30"></div>

          <CardContent className="p-8 md:p-12">
            <div className="flex justify-between items-center mb-8 border-b border-current pb-4 opacity-50">
              <span className="text-sm font-medium tracking-wider">
                {data.emotion.replace("-", " ").toUpperCase()}
              </span>
              <span className="text-sm">
                {new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            <div className={`whitespace-pre-wrap text-lg md:text-xl leading-relaxed ${data.handwriting}`}>
              {data.content || "প্রিয়,\n\nকিছু কথা হয়তো কখনোই বলা হবে না..."}
            </div>

            {/* Wax Seal placed at bottom right */}
            <div className="mt-16 flex justify-end">
              <div className="w-20 h-20 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-red-800 rounded-full shadow-lg border-2 border-red-900 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                  <span className="font-heading text-2xl text-red-100 drop-shadow-sm">
                    {data.sealText || "প"}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
