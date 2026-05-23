export default function Step3Write({ data, updateData }: { data: { content: string, handwriting: string }, updateData: (key: string, val: string) => void }) {
  return (
    <div className="mt-8 h-[60vh] flex flex-col">
      <p className="text-ink/80 dark:text-parchment/80 font-medium mb-4">
        এখানে আপনার অনুভূতিগুলো লিখুন। সবকিছু বেনামী থাকবে।
      </p>

      <div className="flex-1 relative rounded-xl border border-gold/30 bg-parchment/50 dark:bg-ink/50 backdrop-blur-sm p-2 shadow-inner">
        <textarea
          value={data.content}
          onChange={(e) => updateData("content", e.target.value)}
          placeholder="প্রিয়, ..."
          className={`w-full h-full bg-transparent resize-none outline-none p-6 text-lg md:text-xl leading-relaxed text-ink dark:text-parchment placeholder:text-ink/30 dark:placeholder:text-parchment/30 ${data.handwriting}`}
        />

        {/* Decorative corner pieces */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-maroon/20 dark:border-gold/20 rounded-tl-xl m-2 pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-maroon/20 dark:border-gold/20 rounded-tr-xl m-2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-maroon/20 dark:border-gold/20 rounded-bl-xl m-2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-maroon/20 dark:border-gold/20 rounded-br-xl m-2 pointer-events-none" />
      </div>

      <div className="mt-4 flex justify-between items-center text-sm text-ink/50 dark:text-parchment/50">
        <span>শব্দ সংখ্যা: {data.content.trim().split(/\s+/).filter(Boolean).length}</span>
        <span>স্বয়ংক্রিয়ভাবে সংরক্ষিত হচ্ছে...</span>
      </div>
    </div>
  )
}
