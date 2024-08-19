/**
 * By: Tushar Vishwakarma
 */
export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Character Evolution</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Your Potential</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Witness the transformation of your character as you progress through our software. Each stage unlocks new
              abilities and equipment to enhance your user experience research capabilities.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-muted rounded-full w-32 h-32 flex items-center justify-center text-6xl">🧠</div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Novice</h3>
              <p className="text-sm text-muted-foreground">Equipped with basic research tools and a curious mindset.</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-muted rounded-full w-32 h-32 flex items-center justify-center text-6xl">🔍</div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Apprentice</h3>
              <p className="text-sm text-muted-foreground">Mastering user research techniques and data analysis.</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-muted rounded-full w-32 h-32 flex items-center justify-center text-6xl">🧠💻</div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Specialist</h3>
              <p className="text-sm text-muted-foreground">
                Leveraging advanced tools and methodologies for deeper insights.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-muted rounded-full w-32 h-32 flex items-center justify-center text-6xl">🧠💻📊</div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Expert</h3>
              <p className="text-sm text-muted-foreground">
                Empowered with comprehensive data analysis and visualization.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-muted rounded-full w-32 h-32 flex items-center justify-center text-6xl">🧠💻📊🚀</div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Master</h3>
              <p className="text-sm text-muted-foreground">
                Commanding the ultimate user research toolkit for unparalleled insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
