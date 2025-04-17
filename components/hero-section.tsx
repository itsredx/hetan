export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 text-center z-10">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Home Economics Teachers Association of Nigeria
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="block">HETAN</span>
          <span className="block text-primary">Kano Chapter</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-8">
          Empowering educators to nurture the next generation with essential life skills and sustainable living
          practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Learn More
          </a>
          <a
            href="#showcase"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View Showcase
          </a>
        </div>
      </div>
    </section>
  )
}
