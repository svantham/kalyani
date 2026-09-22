'use client'

import { FormEvent, TouchEvent, useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Phone,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
}) {
  const [ref, isInView] = useInView()

  const getTransform = () => {
    if (isInView) return 'opacity-100 translate-x-0 translate-y-0 scale-100'
    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-10'
      case 'down':
        return 'opacity-0 -translate-y-10'
      case 'left':
        return 'opacity-0 translate-x-10'
      case 'right':
        return 'opacity-0 -translate-x-10'
      case 'scale':
        return 'opacity-0 scale-95'
      default:
        return 'opacity-0'
    }
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-[transform,opacity] ${getTransform()} ${className}`}
    >
      {children}
    </div>
  )
}

const services = [
  {
    number: '01',
    title: 'Electrical laminations',
    description:
      'Precision stamped laminations engineered for efficient magnetic circuits, cleaner assembly, and dependable performance.',
    detail: 'Motor & generator cores',
  },
  {
    number: '02',
    title: 'Motor stampings',
    description:
      'Rotor and stator components made to drawing, with the repeatability and finish demanded by modern electric motion.',
    detail: 'Pressed & machined parts',
  },
  {
    number: '03',
    title: 'Transformer cores',
    description:
      'Formed steel assemblies that support stable power transmission — designed, developed, and delivered as one system.',
    detail: 'Core assemblies',
  },
]

const products = [
  {
    id: '01',
    name: 'Precision Stamped Ring & Flange',
    category: 'Motor & Transmission Components',
    spec: 'High concentricity stamped ring with laser-cut mounting points',
    process: 'Multi-stage blanking & piercing on 160T press line',
    material: 'CRCA / Mild Steel',
    image: '/kalyani/1.png',
  },
  {
    id: '02',
    name: 'Automotive Mounting Bracket',
    category: 'Body & Chassis Pressed Parts',
    spec: 'Reinforced contour embossing with precision mounting holes',
    process: 'Formed on 200T mechanical press line',
    material: 'High-Tensile Sheet Metal',
    image: '/kalyani/2.png',
  },
  {
    id: '03',
    name: 'Deep Drawn Cylindrical Enclosure',
    category: 'Deep Drawn Metal Enclosures',
    spec: 'Uniform wall thickness with tight concentric tolerances',
    process: 'Hydraulic deep draw pressing & trimming',
    material: 'Deep Draw Quality Steel (DD/EDD)',
    image: '/kalyani/3.png',
  },
  {
    id: '04',
    name: 'Formed Structural Geometry Clip',
    category: 'Precision Formed Geometry',
    spec: 'Multi-angle return bends with burr-free finish',
    process: 'Progressive tooling with multi-bend stations',
    material: 'Spring Steel / CRCA',
    image: '/kalyani/4.png',
  },
  {
    id: '05',
    name: 'Electrical Rotor & Stator Core',
    category: 'Electrical Core Stampings',
    spec: 'Silicon electrical steel (CRGO/CRNGO) for high magnetic flux',
    process: 'High-speed precision blanking with tight stack interlocks',
    material: 'Electrical Grade Silicon Steel',
    image: '/kalyani/5.png',
  },
  {
    id: '06',
    name: 'Reinforced Chassis Flange',
    category: 'Automotive Press Parts',
    spec: 'Heavy-gauge pressed profile with punched precision holes',
    process: 'Heavy press blanking & CNC piercing',
    material: 'Structural Steel Plate',
    image: '/kalyani/7.png',
  },
  {
    id: '07',
    name: 'Heavy-Duty Pressed Link Plate',
    category: 'Powertrain & Suspension Parts',
    spec: 'High-fatigue tolerance plate with deburred radius contours',
    process: 'Compound die stamping on 250T press',
    material: 'Alloy Steel / EN Series',
    image: '/kalyani/8.png',
  },
  {
    id: '08',
    name: 'Formed Enclosure & Support Bracket',
    category: 'Custom Industrial Stampings',
    spec: 'Precision 90-degree flanges with slot apertures',
    process: 'Blanking, bending & projection welded studs',
    material: 'CRCA Steel (Zinc Plated)',
    image: '/kalyani/9.png',
  },
  {
    id: '09',
    name: 'Slotted Stator Lamination Assembly',
    category: 'Motor & Alternator Stampings',
    spec: 'Multi-pole winding slot geometry with stacking interlocks',
    process: 'Progressive stamping & automatic core stacking',
    material: 'Non-Oriented Silicon Steel',
    image: '/kalyani/10.png',
  },
  {
    id: '10',
    name: 'Heavy Structural Press Component',
    category: 'Heavy-Duty Stampings',
    spec: 'Automotive structural bracket engineered to withstand dynamic load',
    process: 'Tandem press line stamping & stress relief',
    material: 'High-Strength Low-Alloy Steel (HSLA)',
    image: '/kalyani/11.png',
  },
  {
    id: '11',
    name: 'Fabricated & Welded Sub-Assembly',
    category: 'Assembled Pressed Parts',
    spec: 'Pre-assembled stamped parts with SPM CO2 robotic welding',
    process: 'Robotic welding, VMC machining & inspection',
    material: 'Fabricated Steel Sub-Assembly',
    image: '/kalyani/12.png',
  },
]

export function KalyaniSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 45

  function nextProduct() {
    setActiveProduct((prev) => (prev + 1) % products.length)
  }

  function prevProduct() {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length)
  }

  function handleTouchStart(e: TouchEvent) {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  function handleTouchMove(e: TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  function handleTouchEnd() {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      nextProduct()
    } else if (isRightSwipe) {
      prevProduct()
    }
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-cream text-ink antialiased">
      <section
        id="home"
        className="relative isolate flex min-h-screen min-h-[100dvh] flex-col justify-between overflow-hidden bg-ink"
      >
        {/* Background Factory / Plant Image */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src="/kalyani/factory-hero-hd.jpg"
            alt="Kalyani Stampings Plant"
            className="size-full object-cover object-center transition-transform duration-1000 scale-100 hover:scale-105"
          />
        </div>
        {/* Contrast overlay: keeps headline text crisp while making the factory clearly visible */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#251a14]/92 via-[#251a14]/70 to-black/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#251a14]/75 via-transparent to-black/45" />

        <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-12">
          <a
            href="#home"
            className="group flex items-center transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
            aria-label="Kalyani Stampings home"
          >
            <div className="flex items-center rounded-lg bg-white px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:shadow-md group-hover:ring-orange/40">
              <img
                src="/kalyani/logo_horizontal.png"
                alt="Kalyani Stampings logo"
                className="h-8 w-auto object-contain sm:h-11"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/80 lg:flex" aria-label="Main navigation">
            <a className="group relative py-1 transition-colors duration-200 hover:text-cream" href="#about">
              About
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-all duration-300 group-hover:w-full" />
            </a>
            <a className="group relative py-1 transition-colors duration-200 hover:text-cream" href="#capabilities">
              Capabilities
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-all duration-300 group-hover:w-full" />
            </a>
            <a className="group relative py-1 transition-colors duration-200 hover:text-cream" href="#facilities">
              Facilities
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          <a
            href="#contact"
            className="hover-shine group hidden items-center gap-2.5 rounded-lg bg-orange px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink shadow-sm transition-all duration-300 hover:bg-cream hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 sm:inline-flex"
          >
            Start a conversation
            <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-lg border border-cream/30 bg-white/5 text-cream transition-all duration-200 hover:border-orange hover:bg-orange/20 active:scale-95 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </header>

        {/* Mobile Backdrop & Drawer */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {menuOpen && (
          <nav
            className="fixed inset-x-4 top-20 z-50 flex flex-col gap-3 rounded-2xl border border-orange/40 bg-[#252422]/98 p-6 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-2xl backdrop-blur-xl animate-slide-down-fade lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-cream/15 pb-3">
              <span className="text-[10px] tracking-[0.24em] text-orange">Navigation</span>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded p-1 text-cream/60 transition-colors hover:text-cream"
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </div>

            <a
              href="#about"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-cream/90 transition-colors hover:bg-white/5 hover:text-orange active:bg-orange/15"
            >
              About Kalyani <ChevronRight className="size-4 text-orange" />
            </a>
            <a
              href="#capabilities"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-cream/90 transition-colors hover:bg-white/5 hover:text-orange active:bg-orange/15"
            >
              Capabilities <ChevronRight className="size-4 text-orange" />
            </a>
            <a
              href="#facilities"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-cream/90 transition-colors hover:bg-white/5 hover:text-orange active:bg-orange/15"
            >
              Facilities &amp; Parts <ChevronRight className="size-4 text-orange" />
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-orange px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-md transition-all duration-200 hover:bg-cream active:scale-95"
            >
              Start a conversation <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>

            {/* Mobile Quick Contact Shortcut */}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-cream/15 pt-4 text-[11px] font-medium normal-case tracking-normal text-cream/70">
              <a
                href="tel:+919840349875"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-cream/20 bg-white/5 py-2.5 transition-colors hover:border-orange hover:text-orange"
              >
                <Phone className="size-3.5 text-orange" /> Call Plant
              </a>
              <a
                href="mailto:ceo@kalyanistampings.com"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-cream/20 bg-white/5 py-2.5 transition-colors hover:border-orange hover:text-orange"
              >
                <Mail className="size-3.5 text-orange" /> Email Us
              </a>
            </div>
          </nav>
        )}

        <div className="mx-auto my-auto flex w-full max-w-[1440px] flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-12">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="mb-4 sm:mb-6 flex items-center gap-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-orange">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-orange" />
              </span>
              <span className="h-px w-6 sm:w-10 bg-orange/60" /> Precision manufacturing / Since 2011
            </p>
            <h1 className="max-w-4xl font-display text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.95] sm:leading-[0.93] tracking-[-0.03em] sm:tracking-[-0.04em] text-cream">
              The force behind <em className="text-orange not-italic">what moves</em> forward.
            </h1>
            <p className="mt-5 sm:mt-7 max-w-xl text-sm leading-relaxed text-cream/75 sm:text-lg sm:leading-7">
              Electrical laminations, motor stampings, and transformer cores shaped with the discipline of a trusted engineering partner.
            </p>
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
              <a
                href="#capabilities"
                className="hover-shine group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg bg-orange px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink shadow-lg shadow-orange/20 transition-all duration-300 hover:bg-cream hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-95"
              >
                Explore capabilities
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 py-3 sm:py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/75 transition-all duration-300 hover:text-orange hover:translate-x-1"
              >
                Our approach
                <ChevronRight className="size-4 text-orange transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Responsive Hero Bottom Bar with Scroll Indicator */}
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 pb-5 pt-2 sm:px-6 sm:pb-8 lg:px-12">
          <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-cream/45 sm:flex">
            <span>Chennai, India</span>
            <span className="size-1 rounded-full bg-orange/60" />
            <span>IATF 16949:2016 Certified</span>
          </div>

          <a
            href="#about"
            className="group mx-auto sm:mx-0 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cream/70 backdrop-blur-sm transition-all duration-300 hover:border-orange/50 hover:bg-orange/15 hover:text-cream hover:scale-105"
            aria-label="Scroll down to explore"
          >
            <span>Scroll down</span>
            <ArrowDown className="size-3.5 text-orange animate-bounce-subtle transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          <div className="hidden font-mono text-[10px] uppercase tracking-widest text-cream/45 lg:block">
            Est. 2011 • Press &amp; Sub-Assembly
          </div>
        </div>
      </section>

      <section id="about" className="bg-cream px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.84fr_1fr] lg:gap-24">
            <ScrollReveal direction="left" delay={50}>
              <p className="mb-4 sm:mb-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-orange">The Company</p>
              <h2 className="max-w-xl font-display text-3xl leading-[1] tracking-[-0.03em] text-ink sm:text-5xl sm:leading-[0.96] sm:tracking-[-0.04em] lg:text-7xl">
                From concept <em className="text-orange not-italic">to completion.</em>
              </h2>
              <div className="mt-8 sm:mt-12 flex items-start gap-4 border-t border-ink/20 pt-5">
                <span className="mt-1 size-2 shrink-0 bg-orange" />
                <p className="max-w-xs text-[10px] sm:text-[11px] font-bold uppercase leading-5 tracking-[0.2em] text-ink/60">Trust is the tolerance that holds everything together.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150} className="max-w-2xl">
              <p className="text-lg leading-relaxed text-ink sm:text-2xl sm:leading-9">
                Kalyani Stampings Private Limited is an IATF-16949:2016 certified manufacturing company established in 2011 — serving the growing needs of automotive and general engineering industries in India and abroad.
              </p>
              <p className="mt-5 sm:mt-7 max-w-xl text-xs sm:text-sm leading-relaxed text-ink/75 sm:leading-7">
                Located near Oragadam SIPCOT in Chennai, our campus is surrounded by automotive leaders including Nissan, Ford, Hyundai, TVS, Daimler, and BMW. We move with the customer drawing: designing tools, then producing pressed, fabricated, machined, and assembly components with one accountable team.
              </p>
              <a
                href="#contact"
                className="group mt-8 sm:mt-10 inline-flex items-center gap-3 border-b-2 border-orange pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:text-orange hover:border-ink hover:translate-x-1"
              >
                Work with Kalyani
                <MoveUpRight className="size-4 text-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </a>
            </ScrollReveal>
          </div>

          {/* Interactive Metric Highlight Strip */}
          <ScrollReveal direction="up" delay={200} className="mt-14 sm:mt-20 pt-10 border-t border-ink/15">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              <div className="group rounded-xl border border-ink/10 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-orange hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange/10">
                <span className="font-mono text-2xl font-bold text-orange sm:text-3xl">2011</span>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/80">Year Founded</p>
                <p className="mt-1 text-[11px] text-ink/60">Over a decade of precision tooling</p>
              </div>
              <div className="group rounded-xl border border-ink/10 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-orange hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange/10">
                <span className="font-mono text-2xl font-bold text-orange sm:text-3xl">57,500</span>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/80">Sq. Ft. Campus</p>
                <p className="mt-1 text-[11px] text-ink/60">32,000 sq. ft. built-up Chennai plant</p>
              </div>
              <div className="group rounded-xl border border-ink/10 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-orange hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange/10">
                <span className="font-mono text-2xl font-bold text-orange sm:text-3xl">IATF 16949</span>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/80">Certified</p>
                <p className="mt-1 text-[11px] text-ink/60">Automotive global quality standard</p>
              </div>
              <div className="group rounded-xl border border-ink/10 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-orange hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange/10">
                <span className="font-mono text-2xl font-bold text-orange sm:text-3xl">12+</span>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/80">Part Families</p>
                <p className="mt-1 text-[11px] text-ink/60">From laminations to welded assemblies</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="capabilities" className="bg-[#403d39] px-4 py-16 text-cream sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <ScrollReveal direction="up">
            <div className="flex flex-col justify-between gap-6 border-b border-cream/20 pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-orange">Capabilities</p>
                <h2 className="max-w-2xl font-display text-3xl leading-[1] tracking-[-0.03em] sm:text-5xl sm:leading-[0.96] sm:tracking-[-0.04em] lg:text-6xl">
                  Parts that become <em className="text-orange not-italic">progress.</em>
                </h2>
              </div>
              <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-cream/70 sm:leading-6">
                A focused manufacturing partner for components that live inside the world&apos;s most important machines.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:gap-6 lg:grid-cols-3">
            {services.map((service, idx) => (
              <ScrollReveal direction="up" delay={idx * 140} key={service.title} className="h-full">
                <article
                  className="group relative flex h-full flex-col justify-between rounded-xl border border-cream/10 bg-[#313638] p-6 transition-all duration-300 hover:border-orange/60 hover:bg-orange hover:text-ink hover:-translate-y-2.5 hover:scale-[1.01] hover:shadow-2xl hover:shadow-orange/30 active:bg-orange active:text-ink sm:p-8"
                >
                  <div className="flex items-center justify-between border-b border-cream/15 pb-4 transition-colors duration-300 group-hover:border-ink/20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange transition-colors duration-300 group-hover:text-ink">
                      {service.detail}
                    </span>
                    <ArrowDownRight
                      className="size-4 text-cream/50 transition-all duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="font-display text-2xl tracking-[-0.03em] sm:text-3xl transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-cream/70 transition-colors duration-300 group-hover:text-ink/85 sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="bg-[#2b2825] px-4 py-16 text-cream sm:px-6 sm:py-24 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          {/* Section Header */}
          <ScrollReveal direction="up">
            <div className="grid gap-6 sm:gap-8 border-b border-cream/15 pb-8 sm:pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-orange">
                  Infrastructure &amp; Manufacturing
                </p>
                <h2 className="font-display text-3xl leading-[1] tracking-[-0.03em] text-cream sm:text-5xl sm:leading-[0.95] lg:text-7xl">
                  A floor engineered for <em className="text-orange not-italic">high-precision output.</em>
                </h2>
              </div>
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-cream/75 lg:pl-10">
                <p>
                  Our 57,500 sq. ft. campus (32,000 sq. ft. built-up) in Chennai&apos;s automotive manufacturing belt operates comprehensive stamping lines, specialized SPM welding, VMC machining, and an in-house SolidWorks tool design facility.
                </p>
                <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs font-semibold uppercase tracking-wider text-orange">
                  <span>Mechanical &amp; Hydraulic Presses</span>
                  <span className="text-cream/30">·</span>
                  <span>Robotic &amp; SPM CO2 Welding</span>
                  <span className="text-cream/30">·</span>
                  <span>VMC &amp; CNC Turning</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* THE PRODUCT NAVIGATION SHOWCASE WITH SWIPE & CHIP SELECTOR */}
          {/* ========================================================================= */}
          <ScrollReveal direction="up" delay={150}>
            <div className="mt-12 sm:mt-20 rounded-2xl border border-cream/20 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 sm:p-8 lg:p-12">
              {/* Header with Navigation Controls */}
              <div className="flex flex-col justify-between gap-6 border-b border-cream/15 pb-6 sm:pb-8 sm:flex-row sm:items-end">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-orange">
                    Manufactured Components
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-cream sm:text-4xl lg:text-5xl">
                    Pressed parts &amp; assemblies in motion.
                  </h3>
                  <p className="mt-2 max-w-xl text-xs text-cream/70 sm:text-sm">
                    Browse through parts manufactured across our press lines. Swipe on mobile, use arrows, or select a component.
                  </p>
                </div>

                {/* Arrow Navigation Controls */}
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <span className="font-mono text-xs font-semibold tracking-wider text-cream/60">
                    <strong className="text-orange">{String(activeProduct + 1).padStart(2, '0')}</strong> / {String(products.length).padStart(2, '0')}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevProduct}
                      className="grid size-10 sm:size-11 place-items-center rounded-lg border border-cream/25 bg-white/5 text-cream transition-all duration-200 hover:border-orange hover:bg-orange hover:text-ink active:scale-95"
                      aria-label="Previous manufactured product"
                    >
                      <ChevronLeft className="size-5" />
                    </button>

                    <button
                      type="button"
                      onClick={nextProduct}
                      className="grid size-10 sm:size-11 place-items-center rounded-lg border border-cream/25 bg-white/5 text-cream transition-all duration-200 hover:border-orange hover:bg-orange hover:text-ink active:scale-95"
                      aria-label="Next manufactured product"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Component Selector (Swipeable on mobile, wraps on tablet & desktop) */}
              <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar sm:flex-wrap" role="tablist" aria-label="Component selector">
                {products.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={activeProduct === idx}
                    onClick={() => setActiveProduct(idx)}
                    className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wider transition-all duration-200 active:scale-95 ${
                      activeProduct === idx
                        ? 'bg-orange text-ink font-bold shadow-md scale-105 ring-2 ring-orange/40'
                        : 'bg-white/5 text-cream/70 border border-cream/15 hover:border-orange/50 hover:text-cream hover:scale-102'
                    }`}
                  >
                    <span className="font-mono text-[10px]">{p.id}</span>
                    <span className="max-w-[120px] truncate">{p.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Featured Active Product Viewer with Touch Gestures & Motion */}
              <div
                key={products[activeProduct].id}
                className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 rounded-xl border border-cream/15 bg-black/30 p-4 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10 select-none animate-scale-in"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Product Visual Showcase with Living Motion */}
                <div className="relative flex min-h-[220px] sm:min-h-[340px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cream/10 via-white/5 to-transparent p-6 sm:p-8">
                  <div className="absolute size-52 sm:size-64 rounded-full bg-orange/20 blur-3xl animate-subtle-pulse" />
                  <img
                    src={products[activeProduct].image}
                    alt={products[activeProduct].name}
                    className="relative z-10 max-h-48 sm:max-h-64 w-auto max-w-[85%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] animate-subtle-float transition-all duration-500 hover:scale-110"
                  />
                  <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-widest text-cream/40">
                    COMPONENT {products[activeProduct].id}
                  </span>
                  <span className="absolute bottom-3 right-4 rounded-full bg-black/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-orange sm:hidden">
                    Swipe ← →
                  </span>
                </div>

                {/* Technical Specifications */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-orange/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange">
                      {products[activeProduct].category}
                    </span>
                    <h4 className="mt-3 sm:mt-4 font-display text-2xl text-cream sm:text-4xl">
                      {products[activeProduct].name}
                    </h4>
                    <p className="mt-3 text-xs leading-relaxed text-cream/75 sm:text-sm">
                      {products[activeProduct].spec}
                    </p>

                    <div className="mt-5 sm:mt-6 space-y-3 rounded-lg border border-cream/10 bg-white/5 p-4 text-xs">
                      <div className="flex justify-between border-b border-cream/10 pb-2">
                        <span className="font-semibold uppercase tracking-wider text-cream/50">Press Line</span>
                        <span className="font-medium text-cream text-right">{products[activeProduct].process}</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="font-semibold uppercase tracking-wider text-cream/50">Material Grade</span>
                        <span className="font-medium text-orange text-right">{products[activeProduct].material}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-cream/10 pt-6">
                    <a
                      href="#contact"
                      className="hover-shine group inline-flex items-center justify-center gap-2.5 rounded-lg bg-orange px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-md transition-all duration-300 hover:bg-cream hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                    >
                      Enquire About This Part
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>

                    <span className="text-center sm:text-left text-xs text-cream/50">
                      Custom dies &amp; tooling built to CAD drawing
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact" className="bg-cream px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-28">
          <ScrollReveal direction="left">
            <div>
              <p className="mb-4 sm:mb-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-orange">Start a conversation</p>
              <h2 className="max-w-xl font-display text-3xl leading-[1] tracking-[-0.03em] text-ink sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.04em] lg:text-7xl">
                Let&apos;s make the next part <em className="text-orange not-italic">matter.</em>
              </h2>
              <p className="mt-5 sm:mt-8 max-w-md text-xs sm:text-sm leading-relaxed text-ink/70 sm:leading-7">
                Tell us what you are building. Our team will get back to you with the right next step.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div>
              {submitted ? (
                <div className="flex min-h-[340px] flex-col items-start justify-center border border-orange bg-orange/10 p-6 sm:p-12 animate-fade-in">
                  <span className="grid size-12 place-items-center bg-orange text-ink">
                    <Check className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 sm:mt-8 font-display text-3xl sm:text-4xl text-ink">Message received.</h3>
                  <p className="mt-3 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-ink/75 sm:leading-7">
                    Thank you for reaching out. Managing Director M. Radhakrishnan and our engineering team will review your specifications and get in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
                  <label className="block border-b-2 border-ink/20 py-4 sm:py-5 transition-colors focus-within:border-orange">
                    <span className="mb-2 sm:mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">Your name</span>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full bg-transparent text-base sm:text-lg text-ink outline-none placeholder:text-ink/30"
                      placeholder="Full name or company"
                    />
                  </label>
                  <label className="block border-b-2 border-ink/20 py-4 sm:py-5 transition-colors focus-within:border-orange">
                    <span className="mb-2 sm:mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">Work email</span>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full bg-transparent text-base sm:text-lg text-ink outline-none placeholder:text-ink/30"
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="block border-b-2 border-ink/20 py-4 sm:py-5 transition-colors focus-within:border-orange">
                    <span className="mb-2 sm:mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50">What are you making?</span>
                    <textarea
                      required
                      name="message"
                      rows={3}
                      className="w-full resize-none bg-transparent text-base sm:text-lg text-ink outline-none placeholder:text-ink/30"
                      placeholder="A little about your project, part specifications, or volume..."
                    />
                  </label>
                  <button
                    type="submit"
                    className="hover-shine group mt-4 sm:mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-cream shadow-sm transition-all duration-300 hover:bg-orange hover:text-ink hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-98"
                  >
                    Send enquiry
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="bg-warmblack px-4 pt-14 pb-10 text-cream/70 sm:px-6 sm:pt-16 sm:pb-12 lg:px-12">
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-[1280px]">
            {/* Main Footer Grid */}
            <div className="grid gap-10 pb-12 border-b border-cream/10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-16">
              {/* Col 1: Brand & Navigation */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center rounded-md bg-white px-3 py-1.5 shadow-sm">
                    <img
                      src="/kalyani/logo_horizontal.png"
                      alt="Kalyani Stampings Private Limited"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <p className="mt-5 max-w-sm text-xs leading-relaxed text-cream/60">
                    Precision electrical laminations, motor stampings, and deep drawn metal components engineered with discipline since 2011.
                  </p>
                </div>
              </div>

              {/* Col 2: Direct Contact / Leadership */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-orange">
                  Executive Leadership
                </p>
                <h3 className="mt-3 font-display text-xl text-cream">M. Radhakrishnan</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">Managing Director</p>

                <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
                  <a
                    href="tel:+919840349875"
                    className="group flex min-h-[44px] items-center gap-3 text-xs text-cream/80 transition-colors hover:text-orange"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/5 text-orange transition-all duration-200 group-hover:bg-orange group-hover:text-ink group-hover:scale-105">
                      <Phone className="size-4" />
                    </span>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-cream/40">Direct Mobile</span>
                      <span className="font-semibold text-cream group-hover:text-orange">+91 98403 49875</span>
                    </div>
                  </a>

                  <a
                    href="mailto:ceo@kalyanistampings.com"
                    className="group flex min-h-[44px] items-center gap-3 text-xs text-cream/80 transition-colors hover:text-orange"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/5 text-orange transition-all duration-200 group-hover:bg-orange group-hover:text-ink group-hover:scale-105">
                      <Mail className="size-4" />
                    </span>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-cream/40">Direct Email</span>
                      <span className="font-semibold text-cream group-hover:text-orange">ceo@kalyanistampings.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Col 3: Works & Plant Campus */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-orange">
                  Works &amp; Plant Campus
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-cream">
                  Kalyani Stampings Private Limited
                </p>

                <div className="mt-4 space-y-3 text-xs text-cream/70">
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/5 text-cream/60">
                      <MapPin className="size-4" />
                    </span>
                    <p className="leading-relaxed">
                      2/99, Perinjambakkam Main Road,<br />
                      Rajiv Gandhi 1st Main Road,<br />
                      169, Koolangalcherry Village, Sriperumbudur Taluk,<br />
                      Kanchipuram District – 601105,<br />
                      Chennai, Tamil Nadu, India.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/5 text-cream/60">
                      <Building2 className="size-4" />
                    </span>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-cream/40">Plant Phone</span>
                      <a href="tel:+919244926789" className="font-semibold text-cream transition-colors hover:text-orange">
                        +91 92449 26789
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kalyani+Stampings+Private+Limited+Sriperumbudur+Kanchipuram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-cream/15 bg-white/5 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-orange transition-all duration-200 hover:border-orange/50 hover:bg-orange/10 hover:text-cream hover:-translate-y-0.5 active:scale-95"
                  >
                    View on Google Maps <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col gap-4 pt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
              <p>© Kalyani Stampings Private Limited</p>
              <div className="flex gap-6">
                <a href="#home" className="group inline-flex items-center gap-1.5 transition-colors hover:text-orange">
                  Back to top <span className="transition-transform duration-200 group-hover:-translate-y-0.5">↑</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </footer>
    </main>
  )
}
