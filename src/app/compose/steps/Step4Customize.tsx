import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Step4Customize({ data, updateData }: { data: { handwriting: string, sealText: string }, updateData: (key: string, val: string) => void }) {
  const fonts = [
    { id: "hw-1", name: "শুদ্ধ" },
    { id: "hw-2", name: "নকশী" },
    { id: "hw-3", name: "প্রাচীন" },
  ]

  return (
    <div className="mt-8 space-y-10">
      {/* Handwriting Selection */}
      <section>
        <h3 className="font-heading text-2xl text-maroon dark:text-gold mb-4 border-b border-gold/20 pb-2">
          হাতের লেখা নির্বাচন
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {fonts.map((font) => (
            <div
              key={font.id}
              onClick={() => updateData("handwriting", font.id)}
              className={`cursor-pointer p-4 rounded-lg border text-center transition-all ${
                data.handwriting === font.id
                  ? "border-maroon bg-maroon/5 dark:border-gold dark:bg-gold/10 shadow-md"
                  : "border-gold/30 hover:border-maroon/50 dark:hover:border-gold/50"
              }`}
            >
              <span className={`text-2xl ${font.id}`}>{font.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Wax Seal Customization */}
      <section>
        <h3 className="font-heading text-2xl text-maroon dark:text-gold mb-4 border-b border-gold/20 pb-2">
          সীলমোহর
        </h3>
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="flex flex-col sm:flex-row gap-8 items-center p-0">
            <div className="flex-1 w-full space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seal-text" className="text-ink dark:text-parchment">সীলমোহরের অক্ষর (১-২ টি অক্ষর)</Label>
                <Input
                  id="seal-text"
                  maxLength={2}
                  value={data.sealText}
                  onChange={(e) => updateData("sealText", e.target.value)}
                  className="bg-parchment/50 dark:bg-ink/50 border-gold/50 focus:border-maroon dark:focus:border-gold text-2xl font-heading text-center"
                />
              </div>
            </div>

            {/* Seal Preview */}
            <div className="w-32 h-32 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-red-800 rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.6),0_4px_10px_rgba(0,0,0,0.5)] border-[3px] border-red-900 flex items-center justify-center transform hover:scale-105 transition-transform duration-500 cursor-pointer">
                {/* Subtle shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                <span className="font-heading text-4xl text-red-100 drop-shadow-md">
                  {data.sealText || "প"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
