/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  ChevronRight, 
  Plus, 
  CheckCircle2, 
  Menu, 
  X,
  Code2,
  Zap,
  Palette,
  Star,
  Users,
  Target,
  Award,
  Search,
  PenTool,
  Cpu,
  Monitor,
  Rocket,
  Globe,
  ChevronDown,
  Layout,
  Smartphone,
  Shield
} from 'lucide-react';

const PRICING_PLANS = [
  {
    name: "LITE ESSENTIAL",
    price: "1.5 JT",
    description: "Selesai dalam 1-3 hari. Ideal untuk personal branding dan UMKM pemula.",
    features: [
      "Targeted 1 Page Clean Design",
      "Domain .com (1 Tahun)",
      "Premium Cloud Hosting",
      "Mobile Friendly Responsive",
      "Direct WhatsApp Consultation"
    ],
    highlight: false
  },
  {
    name: "BUSINESS PRO",
    price: "3.8 JT",
    description: "Selesai dalam 1-3 hari. Standar profesional untuk perusahaan berkembang.",
    features: [
      "Up to 7 Pages Custom",
      "High Speed Web Hosting",
      "Corporate Identity Design",
      "On-Page SEO Optimization",
      "Google Maps Integration",
      "Contact Form Automation",
      "Business Email (@nama.com)"
    ],
    highlight: false
  },
  {
    name: "E-COMMERCE MAX",
    price: "6.5 JT",
    description: "Selesai dalam 1-3 hari. Toko online otomatis dengan sistem terintegrasi.",
    features: [
      "Advance Catalog System",
      "Midtrans Payment Gateway",
      "Inventory Management",
      "Customer Dashboard",
      "Discount & Coupon System",
      "Automatic Invoice PDF",
      "RajaOngkir Integration",
      "Order Notification by WA",
      "Powerful Admin Panel",
      "Sales Report Analytics"
    ],
    highlight: true
  },
  {
    name: "PREMIUM SYSTEM",
    price: "8.2 JT",
    description: "Selesai dalam 6-7 hari. Website dengan fungsionalitas sistem tinggi.",
    features: [
      "Full Custom UI/UX Research",
      "Membership System Area",
      "Point of Sales Integration",
      "Dynamic Content CMS",
      "Third-party API Integration",
      "Database High Security",
      "Multi-Language Support",
      "Speed Performance Audit",
      "Premium Logo Animation",
      "1 Month Ads Management",
      "Daily Auto-Backup",
      "24/7 Priority Support"
    ],
    highlight: false
  },
  {
    name: "ELITE PLATFORM",
    price: "10.298 JT",
    description: "Selesai dalam 6-7 hari. Karya puncak untuk brand yang menuntut kesempurnaan.",
    features: [
      "Enterprise Grade Architecture",
      "Dedicated Server Setup",
      "Full PWA Integration",
      "Advance User Permissions",
      "Deep SEO Audit Strategy",
      "Content Writing Service",
      "Professional Photography Ref",
      "Interactive 3D Elements",
      "AI Chatbot Integration",
      "Marketplace Sync System",
      "Maintenance 1 Tahun",
      "Consultation Tatap Muka",
      "Unlimited Revisions",
      "Custom Typography License",
      "Scalability Guarantee"
    ],
    highlight: false
  }
];

const SERVICES = [
  {
    title: "Signature Design",
    desc: "Visual yang memikat dengan standar estetika tinggi untuk brand eksklusif.",
    icon: <Palette className="w-6 h-6 text-gold" />
  },
  {
    title: "Elite Engineering",
    desc: "Arsitektur website yang kokoh, cepat, dan modern tanpa kompromi.",
    icon: <Code2 className="w-6 h-6 text-gold" />
  },
  {
    title: "Digital Growth",
    desc: "Strategi SEO dan branding yang memastikan bisnis Anda dominan di Google.",
    icon: <Zap className="w-6 h-6 text-gold" />
  }
];

const FAQS = [
  { q: "Berapa lama proses pengerjaan?", a: "Tergantung paket yang dipilih. Landing page berkisar 1-3 hari, sementara sistem custom bisa memakan waktu 6-7 hari untuk hasil maksimal." },
  { q: "Apakah website bisa saya edit sendiri nantinya?", a: "Ya, kami menggunakan CMS yang user-friendly sehingga Anda bisa mengubah konten tanpa harus memahami coding." },
  { q: "Bagaimana dengan sistem keamanannya?", a: "Kami menerapkan SSL, database encryption, dan proteksi server berlapis untuk memastikan data bisnis Anda aman." },
  { q: "Apakah harga tersebut sudah termasuk domain & hosting?", a: "Ya, semua paket kami sudah termasuk domain (.com) dan hosting premium selama 1 tahun pertama." }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [aboutImage, setAboutImage] = useState<string | null>(null);
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const aboutFileInputRef = useRef<HTMLInputElement>(null);
  const logoFileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAboutFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAboutImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-gold selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-morphism py-5 px-6 md:px-16 flex justify-between items-center">
        <div 
          onClick={() => logoFileInputRef.current?.click()}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <input 
            type="file" 
            className="hidden" 
            ref={logoFileInputRef}
            onChange={handleLogoFileUpload}
            accept="image/*"
          />
          {logoImage ? (
            <img src={logoImage} alt="Brand Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center border border-dashed border-neutral-300 group-hover:border-gold transition-colors">
                <Plus size={16} className="text-neutral-400 group-hover:text-gold" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 group-hover:text-gold transition-colors">Add Brand Logo</span>
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[9px] uppercase tracking-[0.3em] font-black">
          {['About', 'Services', 'Portfolio', 'Pricing', 'FAQ', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-all duration-300 relative group py-2">
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a 
            href="https://wa.me/6285872118540" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-neutral-900 border border-neutral-900 hover:bg-gold hover:border-gold text-white px-8 py-3 rounded-full transition-all duration-500 shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultant</span>
          </a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-neutral-900 bg-neutral-50 p-2 rounded-lg">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-8 lg:hidden flex flex-col items-center gap-8"
          >
            {['About', 'Services', 'Portfolio', 'Pricing', 'FAQ', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-display font-medium tracking-tighter hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://wa.me/6285872118540" 
              className="flex items-center gap-4 bg-neutral-900 text-white px-10 py-4 rounded-full font-bold mt-10 shadow-2xl tracking-widest text-xs uppercase"
            >
              <MessageCircle className="w-6 h-6 text-gold" />
              <span>WhatsApp Kami</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="max-w-6xl">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
          >
            <span className="text-gold uppercase tracking-[0.6em] text-[9px] font-black mb-10 block opacity-70">EXCLUSIVELY CRAFTED IN INDONESIA</span>
            <h1 className="font-display text-7xl md:text-[10rem] font-bold leading-[0.9] mb-12 tracking-tighter luxury-gradient-text">
              Excellence <br />
              In Every Pixel
            </h1>
            <p className="max-w-3xl mx-auto text-neutral-500 text-lg md:text-xl mb-16 leading-relaxed font-light tracking-tight">
              Kami mentransformasi bisnis Anda menjadi entitas digital yang prestisius. Fokus pada estetika tanpa mengabaikan performa arsitektur kode yang solid.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a href="#portfolio" className="bg-neutral-900 text-white px-14 py-6 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gold transition-all duration-500 shadow-2xl flex items-center gap-3">
                Jelajahi Contoh Website <ChevronRight size={16} />
              </a>
              <a href="#about" className="border border-neutral-200 hover:border-gold px-14 py-6 rounded-full font-black text-[10px] uppercase tracking-widest transition-all">
                Tentang Djaya
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-16 bg-neutral-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-black mb-6 block">Our Legacy</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 tracking-tight">Kreativitas yang <br /> Berpadu Dengan <span className="text-neutral-400 font-light">Sains Digital</span></h2>
              <p className="text-neutral-500 text-lg mb-10 font-light leading-relaxed">
                Di DJAYASTUDIO, kami tidak hanya membuat website; kami membangun identitas. Setiap elemen dirancang untuk mencerminkan nilai-nilai terbaik bisnis Anda, memastikan audiens Anda terpesona sejak detik pertama.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Target className="w-6 h-6 text-gold" />, title: "Precision", text: "Setiap detail pixel diaudit untuk kesempurnaan visual." },
                  { icon: <Award className="w-6 h-6 text-gold" />, title: "Exclusivity", text: "Tanpa template. Website Anda adalah karya tunggal." },
                  { icon: <Cpu className="w-6 h-6 text-gold" />, title: "Innovation", text: "Teknologi terbaru untuk kecepatan loading kilat." },
                  { icon: <Shield className="w-6 h-6 text-gold" />, title: "Security", text: "Lapisan keamanan tingkat tinggi untuk perlindungan data." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold tracking-tight text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-neutral-400 font-light">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div 
                  onClick={() => aboutFileInputRef.current?.click()}
                  className={`aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer group transition-all duration-500 ${!aboutImage ? 'bg-neutral-50 border-dashed border-neutral-200 hover:border-gold/30' : ''}`}
                >
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={aboutFileInputRef}
                    onChange={handleAboutFileUpload}
                    accept="image/*"
                  />
                  {aboutImage ? (
                    <img src={aboutImage} alt="Excellence" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-neutral-300">
                      <Plus size={48} className="group-hover:text-gold transition-colors" />
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Add Studio Identity</p>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-xl max-w-[240px] text-center pricing-card-shadow">
                   <p className="text-4xl font-display font-bold text-gold mb-1">100%</p>
                   <p className="text-[9px] uppercase font-black tracking-widest text-neutral-400">Custom Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6">Expertise</h2>
             <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">Layanan Strategis Kami</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 bg-white border border-neutral-100 rounded-[3.5rem] hover:border-gold transition-all duration-500 pricing-card-shadow text-center"
              >
                <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mb-10 mx-auto border border-neutral-100">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-bold mb-6 font-display tracking-wide">{s.title}</h4>
                <p className="text-neutral-500 leading-relaxed text-sm font-light">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio (Akan Segera Hadir) */}
      <section id="portfolio" className="py-32 px-6 md:px-16 bg-neutral-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-40 border-2 border-dashed border-neutral-200 rounded-[4rem] bg-white pricing-card-shadow">
            <h3 className="font-display text-6xl md:text-8xl font-black tracking-tighter luxury-gradient-text mb-8 uppercase">AKAN SEGERA HADIR</h3>
            <p className="text-neutral-400 max-w-xl mx-auto text-lg font-light tracking-widest uppercase">
               Kami sedang merancang masa depan digital Anda.
            </p>
            <div className="mt-12 w-20 h-[2px] bg-gold mx-auto opacity-30" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-6 md:px-16 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
               <div className="aspect-[16/10] bg-neutral-900 rounded-[3rem] p-12 flex flex-col justify-end gap-6 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-gold/20 transition-all duration-700" />
                  <Layout className="w-16 h-16 text-gold mb-4" />
                  <h4 className="text-white text-4xl font-display font-bold">Unparalleled Performance</h4>
                  <p className="text-neutral-400 text-lg font-light leading-relaxed">
                    Setiap website dirancang dengan fokus pada core web vitals, memastikan bisnis Anda mendapatkan skor sempurna di mata user dan Google.
                  </p>
               </div>
            </motion.div>

            <div className="space-y-12">
               <div>
                  <h2 className="text-gold uppercase tracking-[0.4em] text-[9px] font-black mb-6 block">Our Commitment</h2>
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Mengapa Memilih Djaya?</h3>
               </div>
               <div className="space-y-10">
                  {[
                    { t: "Kustomisasi Total", d: "Tidak ada template siap pakai. Kami membangun dari nol sesuai DNA brand Anda." },
                    { t: "Dukungan Eksklusif", d: "Dedicated project manager yang siap membantu kapan saja." },
                    { t: "Kecepatan Akses", d: "Server premium berlokasi di Indonesia/Singapore untuk akses tanpa lag." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-gold flex-shrink-0 shadow-sm">
                          <CheckCircle2 size={24} />
                       </div>
                       <div>
                          <h5 className="font-bold mb-2">{item.t}</h5>
                          <p className="text-sm text-neutral-400 font-light leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Section Content Area (Features/Value) */}
      <section className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: <Monitor className="text-gold" />, t: "Adaptive Layout", d: "Tampilan sempurna di layar 4K hingga smartphone terkecil." },
                { icon: <Smartphone className="text-gold" />, t: "Mobile First", d: "Aksesibilitas tertinggi untuk pengguna mobile yang dominan." },
                { icon: <Code2 className="text-gold" />, t: "Clean Code", d: "Struktur SEO-Friendly yang disukai oleh mesin pencari Google." },
                { icon: <Rocket className="text-gold" />, t: "High Performance", d: "Optimasi aset gambar dan script untuk loading super cepat." }
              ].map((v, i) => (
                <div key={i} className="space-y-6">
                   <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center shadow-sm">{v.icon}</div>
                   <h5 className="text-lg font-bold tracking-tight">{v.t}</h5>
                   <p className="text-sm text-neutral-400 font-light leading-relaxed">{v.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-32 px-6 md:px-16 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6">Workflow</h2>
            <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">Elite Development Cycle</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { n: "01", t: "Discovery", d: "Analisis mendalam terhadap visi brand dan target pasar Anda." },
              { n: "02", t: "Design", d: "Pembuatan prototipe visual dengan estetika mewah tanpa batas." },
              { n: "03", t: "Build", d: "Pengembangan sistem dengan standar kode industri tertinggi." },
              { n: "04", t: "Launch", d: "Optimasi akhir dan peluncuran ke publik dengan dukungan penuh." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-display font-black text-white/5 absolute -top-12 -left-4 group-hover:text-gold/10 transition-colors uppercase tracking-tighter">{step.n}</div>
                <div className="relative pt-8">
                  <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-gold transition-colors">{step.t}</h4>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 md:px-16 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[180px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6">Investment</h2>
            <h3 className="font-display text-6xl md:text-7xl font-bold tracking-tighter">Budgeting & Strategy</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 items-start">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-14 rounded-[4rem] flex flex-col gap-10 transition-all duration-700 relative ${
                  plan.highlight 
                  ? 'bg-neutral-900 text-white pricing-card-highlight scale-105 z-10' 
                  : 'bg-white border border-neutral-100 pricing-card-shadow'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-white text-[9px] font-black px-8 py-2.5 rounded-full uppercase tracking-widest shadow-xl">
                    Most Professional Choice
                  </div>
                )}
                
                <div className="text-left">
                  <span className={`text-[10px] font-black tracking-[0.4em] uppercase ${plan.highlight ? 'text-gold' : 'text-neutral-400'}`}>
                    Tier 0{i+1} • {plan.name}
                  </span>
                  <div className="flex items-baseline mt-8 gap-3">
                    <span className={`text-base font-medium ${plan.highlight ? 'text-neutral-500' : 'text-neutral-400'}`}>IDR</span>
                    <span className="text-6xl md:text-7xl font-display font-bold tracking-tighter leading-none">{plan.price}</span>
                  </div>
                  <p className={`mt-6 text-sm font-light leading-relaxed ${plan.highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>{plan.description}</p>
                </div>

                <div className="h-[1px] w-full bg-neutral-200/20"></div>

                <div className="flex-grow flex flex-col gap-5">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-sm group">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-gold' : 'text-gold'}`} />
                      <span className={`font-light leading-tight ${plan.highlight ? 'text-neutral-300' : 'text-neutral-600'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/6285872118540?text=Halo Djaya Studio, saya tertarik untuk paket ${plan.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-7 rounded-[2.5rem] text-[10px] font-black tracking-[0.4em] uppercase text-center transition-all shadow-xl ${
                    plan.highlight 
                    ? 'bg-gold text-white hover:bg-white hover:text-black' 
                    : 'bg-neutral-900 text-white hover:bg-gold'
                  }`}
                >
                  Confirm Package
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 md:px-16 bg-neutral-50/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6">FAQ</h2>
             <h3 className="font-display text-5xl font-bold tracking-tight">Umum Bertanya</h3>
          </div>
          
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-[2rem] border border-neutral-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center group transition-colors"
                >
                  <span className="font-bold tracking-tight text-neutral-800">{faq.q}</span>
                  <div className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-gold' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-neutral-500 font-light text-base leading-relaxed border-t border-neutral-50 pt-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-16 bg-white overflow-hidden text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="font-display text-7xl md:text-[11rem] font-bold mb-10 tracking-tighter text-neutral-100 select-none uppercase">Let's Talk</h2>
            <div className="relative mb-24 max-w-2xl">
                <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">Wujudkan Digital <br /> <span className="text-neutral-400 font-light">Eksklusivitas Anda</span></h3>
                <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed">
                    Setiap langkah dimulai dengan satu diskusi. Hubungi tim elit kami sekarang untuk konsultasi strategi digital yang prestisius.
                </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 max-w-5xl w-full">
              <motion.a 
                whileHover={{ y: -10 }}
                href="https://wa.me/6285872118540" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 min-w-[340px] p-10 bg-white shadow-xl rounded-[4rem] border border-neutral-100 flex items-center gap-8 group transition-all"
              >
                <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center group-hover:bg-green-500 transition-all duration-500 overflow-hidden shadow-inner flex-shrink-0">
                  <MessageCircle className="w-10 h-10 text-green-500 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-neutral-400 font-black uppercase tracking-[0.3em] mb-2 block">Direct Support</span>
                  <p className="text-2xl font-bold font-display tracking-tight text-neutral-800">0858-7211-8540</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ y: -10 }}
                href="https://instagram.com/djaya.it" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 min-w-[340px] p-10 bg-white shadow-xl rounded-[4rem] border border-neutral-100 flex items-center gap-8 group transition-all"
              >
                <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center group-hover:bg-gradient-to-tr from-orange-400 to-purple-600 transition-all duration-500 overflow-hidden shadow-inner flex-shrink-0">
                  <Instagram className="w-10 h-10 text-purple-600 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-neutral-400 font-black uppercase tracking-[0.3em] mb-2 block">Our Insight</span>
                  <p className="text-2xl font-bold font-display tracking-tight text-neutral-800">@djaya.it</p>
                </div>
              </motion.a>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-neutral-100 px-6 md:px-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-24">
             <div className="max-w-sm space-y-10">
                <div className="flex items-center gap-3">
                  {logoImage ? (
                    <img src={logoImage} alt="Brand Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                  ) : (
                    <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center p-2 shadow-xl">
                       <svg viewBox="0 0 100 100" className="w-full h-full fill-[#0000AA]"><path d="M20 10 Q 50 10, 65 35 Q 75 60, 65 85 Q 50 90, 30 90 L 30 85 Q 45 85, 60 75 Q 70 55, 60 30 Q 50 20, 20 25 Z" /></svg>
                    </div>
                  )}
                  <p className="text-lg tracking-[0.3em] font-display font-black text-white uppercase">DJAYA STUDIO</p>
                </div>
                <p className="text-neutral-400 font-light leading-relaxed text-base">
                   Membangun standar baru dalam pengembangan website modern yang menggabungkan presisi teknis dengan estetika mahakarya digital.
                </p>
                <div className="flex gap-4">
                   <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-500"><Instagram size={20} /></a>
                   <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-500"><Globe size={20} /></a>
                </div>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 lg:gap-x-32 gap-y-16">
                <div className="space-y-8">
                   <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Navigation</h6>
                   <ul className="space-y-5 text-xs text-neutral-400 font-bold uppercase tracking-[0.2em]">
                      <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                      <li><a href="#services" className="hover:text-white transition-colors">Expertise</a></li>
                      <li><a href="#portfolio" className="hover:text-white transition-colors">Pameran Karya</a></li>
                      <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                   </ul>
                </div>
                <div className="space-y-8">
                   <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Contact</h6>
                   <ul className="space-y-6">
                      <li className="flex flex-col gap-1">
                         <span className="text-[9px] uppercase font-black text-neutral-600 tracking-widest">WhatsApp Business</span>
                         <span className="text-sm font-bold tracking-wider">0858-7211-8540</span>
                      </li>
                      <li className="flex flex-col gap-1">
                         <span className="text-[9px] uppercase font-black text-neutral-600 tracking-widest">Official Instagram</span>
                         <span className="text-sm font-bold tracking-wider">@djaya.it</span>
                      </li>
                   </ul>
                </div>
                <div className="space-y-8 hidden md:block">
                   <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Excellence Hub</h6>
                   <p className="text-[10px] text-neutral-500 font-black uppercase leading-loose tracking-[0.2em]">
                      Custom Strategy<br />
                      Premium Engineering<br />
                      Luxury Visuals<br />
                      Scalable Systems
                   </p>
                </div>
             </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-neutral-600">Copyright &copy; 2024 DJAYASTUDIO • All Rights Reserved.</p>
            <div className="flex gap-16">
               <span className="text-[9px] uppercase font-black text-gold tracking-[0.3em]">Signature Build</span>
               <span className="text-[9px] uppercase font-black tracking-[0.3em] text-neutral-700">Premium Standards</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
