import { Card, CardTitle } from "@/components/ui/card"

export default function Step2Theme({ data, updateData }: { data: { theme: string }, updateData: (key: string, val: string) => void }) {
  const themes = [
    { id: "parchment-royal", title: "Parchment Royal", colors: "bg-[#F8F1E3] border-[#D4AF88]", text: "text-[#3F0E1A]" },
    { id: "midnight-rose", title: "Midnight Rose", colors: "bg-[#1A1A1A] border-[#B76E79]", text: "text-[#F8F1E3]" },
    { id: "golden-heritage", title: "Golden Heritage", colors: "bg-[#3F0E1A] border-[#D4AF88]", text: "text-[#F8F1E3]" },
    { id: "monsoon-veil", title: "Monsoon Veil", colors: "bg-[#2D3748] border-[#A0AEC0]", text: "text-[#E2E8F0]" },
  ]

  return (
    <div className="mt-8 space-y-6">
      <p className="text-ink/80 dark:text-parchment/80 font-medium">চিঠির বাহ্যিক রূপ নির্বাচন করুন:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {themes.map((theme) => {
          const isSelected = data.theme === theme.id
          return (
            <div
              key={theme.id}
              onClick={() => updateData("theme", theme.id)}
              className={`relative cursor-pointer rounded-xl transition-all duration-300 hover:scale-105 p-1 ${
                isSelected ? "bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] shadow-lg" : "bg-transparent"
              }`}
            >
              <Card className={`h-32 border-2 flex items-center justify-center ${theme.colors}`}>
                <CardTitle className={`font-heading text-2xl ${theme.text}`}>
                  {theme.title}
                </CardTitle>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}
