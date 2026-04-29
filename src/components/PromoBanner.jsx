import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ── Bokeh blurred circles ── */
function Bokeh({ x, y, size, color, blur = '28px', opacity = 0.4 }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x, top: y,
        width: size, height: size,
        background: color,
        filter: `blur(${blur})`,
        opacity,
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

/* ── Cherry-blossom flower ── */
function Flower({ x, y, size = 1, opacity = 0.9, color = '#FFD1DC', center = '#FFE4EE' }) {
  const petals = [0, 72, 144, 216, 288]
  return (
    <g transform={`translate(${x},${y}) scale(${size})`} opacity={opacity}>
      {petals.map(a => (
        <ellipse
          key={a}
          cx="0" cy="-9"
          rx="4.5" ry="8"
          fill={color}
          transform={`rotate(${a})`}
        />
      ))}
      <circle cx="0" cy="0" r="4.5" fill={center} />
      <circle cx="0" cy="0" r="2" fill="white" opacity="0.6" />
    </g>
  )
}

/* ── Heart ── */
function Heart({ x, y, size = 1, color = 'white', opacity = 0.85 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${size})`} opacity={opacity}>
      <path
        d="M0 5 C-3 1 -10 -2 -10 -7 C-10 -13 -5 -15 0 -10 C5 -15 10 -13 10 -7 C10 -2 3 1 0 5 Z"
        fill={color}
      />
    </g>
  )
}

/* ── Sparkle star ── */
function Sparkle({ x, y, size = 1, color = 'white', opacity = 0.9 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${size})`} opacity={opacity}>
      <path
        d="M0 -10 L2.5 -2.5 L10 -2.5 L4 2 L6.5 10 L0 5.5 L-6.5 10 L-4 2 L-10 -2.5 L-2.5 -2.5 Z"
        fill={color}
      />
    </g>
  )
}

/* ── Diamond dot ── */
function Diamond({ x, y, size = 1, color = 'white', opacity = 0.7 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${size})`} opacity={opacity}>
      <path d="M0 -6 L5 0 L0 6 L-5 0 Z" fill={color} />
    </g>
  )
}

/* ── Día de la Mamá decorations ── */
function MamaDeco() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice">
      {/* Flowers */}
      <Flower x={48}  y={32}  size={2.2} color="#FFB3CC" center="#FFD6E5" />
      <Flower x={520} y={54}  size={1.6} color="#FFCCE0" center="#FFE4EE" />
      <Flower x={555} y={200} size={1.3} color="#FFB3CC" center="#FFD6E5" opacity={0.6} />
      <Flower x={22}  y={230} size={1.0} color="#FFD6E5" center="#FFF0F5" opacity={0.65} />
      <Flower x={290} y={20}  size={1.1} color="#FFCCE0" center="#FFE4EE" opacity={0.55} />
      <Flower x={160} y={265} size={0.9} color="#FFB3CC" center="#FFD6E5" opacity={0.5} />

      {/* Hearts */}
      <Heart x={510} y={145} size={1.4} color="white" opacity={0.3} />
      <Heart x={80}  y={160} size={0.9} color="white" opacity={0.25} />
      <Heart x={460} y={260} size={1.1} color="rgba(255,255,255,0.4)" />
      <Heart x={340} y={60}  size={0.7} color="white" opacity={0.2} />

      {/* Sparkles */}
      <Sparkle x={100} y={50}  size={0.9} color="white" opacity={0.8} />
      <Sparkle x={490} y={90}  size={0.7} color="white" opacity={0.7} />
      <Sparkle x={380} y={250} size={0.6} color="white" opacity={0.65} />
      <Sparkle x={60}  y={200} size={0.5} color="white" opacity={0.55} />
      <Sparkle x={540} y={240} size={0.8} color="white" opacity={0.7} />

      {/* Diamond dots */}
      <Diamond x={200} y={40}  size={0.9} color="white" opacity={0.5} />
      <Diamond x={420} y={30}  size={0.7} color="white" opacity={0.45} />
      <Diamond x={130} y={280} size={0.8} color="white" opacity={0.4} />
      <Diamond x={500} y={270} size={0.6} color="white" opacity={0.45} />

      {/* Confetti dots */}
      {[[70,85],[230,260],[400,90],[560,170],[310,285],[170,130]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="white" opacity="0.35" />
      ))}
    </svg>
  )
}

/* ── San Valentín decorations ── */
function ValentineDeco() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice">
      {/* Large heart silhouettes */}
      <Heart x={520} y={80}  size={3.5} color="rgba(255,255,255,0.12)" />
      <Heart x={60}  y={220} size={2.8} color="rgba(255,255,255,0.10)" />
      <Heart x={300} y={260} size={2.0} color="rgba(255,255,255,0.08)" />

      {/* Medium hearts */}
      <Heart x={140} y={50}  size={1.6} color="white" opacity={0.28} />
      <Heart x={470} y={200} size={1.4} color="white" opacity={0.25} />
      <Heart x={390} y={40}  size={1.1} color="white" opacity={0.3} />
      <Heart x={550} y={260} size={1.0} color="white" opacity={0.25} />
      <Heart x={30}  y={100} size={1.2} color="white" opacity={0.22} />

      {/* Small hearts */}
      <Heart x={220} y={80}  size={0.8} color="white" opacity={0.45} />
      <Heart x={350} y={190} size={0.7} color="white" opacity={0.4} />
      <Heart x={80}  y={270} size={0.7} color="white" opacity={0.35} />
      <Heart x={510} y={150} size={0.9} color="white" opacity={0.38} />

      {/* Sparkles */}
      <Sparkle x={100}  y={40}  size={1.0} color="white" opacity={0.85} />
      <Sparkle x={490}  y={50}  size={0.8} color="white" opacity={0.8} />
      <Sparkle x={420}  y={260} size={0.9} color="white" opacity={0.75} />
      <Sparkle x={55}   y={170} size={0.7} color="white" opacity={0.7} />
      <Sparkle x={560}  y={190} size={0.75} color="white" opacity={0.75} />
      <Sparkle x={280}  y={50}  size={0.6} color="white" opacity={0.65} />

      {/* Diamonds */}
      <Diamond x={170} y={250} size={1.0} color="white" opacity={0.5} />
      <Diamond x={440} y={130} size={0.8} color="white" opacity={0.45} />
      <Diamond x={320} y={270} size={0.7} color="white" opacity={0.4} />

      {/* Confetti dots */}
      {[[60,60],[250,270],[480,270],[550,110],[200,180],[390,100]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="white" opacity="0.3" />
      ))}
    </svg>
  )
}

/* ── Wavy ribbon accent ── */
function RibbonAccent({ color }) {
  return (
    <svg className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20" viewBox="0 0 128 128">
      <path d="M128 0 L128 128 L0 0 Z" fill={color} />
      <path d="M128 0 L128 80 L48 0 Z" fill="white" opacity="0.15" />
    </svg>
  )
}

/* ── Shimmer sweep on hover ── */
function Shimmer() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
        backgroundSize: '200% 100%',
      }}
      initial={{ backgroundPosition: '-100% 0' }}
      whileHover={{ backgroundPosition: '200% 0' }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
    />
  )
}

/* ── Promo data ── */
const promos = [
  {
    id: 'dia-mama',
    label: 'Temporada especial',
    title: 'Día de la Mamá',
    subtitle: 'Regalos especiales con descuento',
    image: '/images/promo-dia-mama.jpg',
    gradient: 'linear-gradient(135deg, #E8608A 0%, #D44A7A 35%, #B83A6A 70%, #C45080 100%)',
    bokeh: [
      { x: '15%',  y: '20%', size: '140px', color: '#FF8FAD', blur: '40px', opacity: 0.35 },
      { x: '80%',  y: '60%', size: '120px', color: '#FFB3CC', blur: '36px', opacity: 0.30 },
      { x: '50%',  y: '10%', size: '100px', color: '#FFCCE0', blur: '32px', opacity: 0.25 },
      { x: '90%',  y: '15%', size: '80px',  color: '#FF6B9E', blur: '28px', opacity: 0.28 },
    ],
    Deco: MamaDeco,
    theme: 'Día de la Mamá',
    ribbonColor: '#FF8FAD',
  },
  {
    id: 'san-valentin',
    label: 'Colección romántica',
    title: 'San Valentín',
    subtitle: 'Expresa tu amor con un regalo único',
    image: '/images/promo-san-valentin.jpg',
    gradient: 'linear-gradient(135deg, #C0294A 0%, #A0203E 30%, #881A36 65%, #C23560 100%)',
    bokeh: [
      { x: '10%',  y: '30%', size: '130px', color: '#FF4D80', blur: '40px', opacity: 0.32 },
      { x: '75%',  y: '20%', size: '110px', color: '#FF2060', blur: '36px', opacity: 0.28 },
      { x: '50%',  y: '75%', size: '100px', color: '#FF6090', blur: '30px', opacity: 0.25 },
      { x: '88%',  y: '70%', size: '85px',  color: '#C0102A', blur: '28px', opacity: 0.30 },
    ],
    Deco: ValentineDeco,
    theme: 'San Valentín',
    ribbonColor: '#FF4D70',
  },
]

export default function PromoBanner({ onFilterByTheme }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-quicksand text-[10px] font-semibold text-peanuts-green tracking-[0.22em] uppercase mb-1">
            Temporada especial
          </p>
          <h3 className="font-poppins font-bold text-[22px] text-charming">Promociones</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
        {promos.map((promo, i) => {
          const Deco = promo.Deco
          return (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="relative overflow-hidden rounded-3xl cursor-pointer group"
              style={{ height: '280px', background: promo.gradient }}
              onClick={() => onFilterByTheme?.(promo.theme)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Photo overlay (if available) */}
              <img
                src={promo.image}
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-28"
                loading="lazy"
                onError={e => { e.target.style.display = 'none' }}
              />

              {/* Bokeh depth circles */}
              {promo.bokeh.map((b, j) => <Bokeh key={j} {...b} />)}

              {/* Corner ribbon accent */}
              <RibbonAccent color={promo.ribbonColor} />

              {/* SVG themed decorations */}
              <Deco />

              {/* Shimmer sweep */}
              <Shimmer />

              {/* Bottom gradient for text legibility */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)',
                }}
              />

              {/* Text content */}
              <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                {/* Top label pill */}
                <span className="inline-block font-quicksand text-[9px] font-bold text-white/90 bg-white/20 backdrop-blur-sm border border-white/25 px-3 py-1 rounded-full tracking-[0.18em] uppercase mb-2.5">
                  {promo.label}
                </span>

                <h3 className="font-poppins font-bold text-white text-[26px] sm:text-[28px] leading-tight drop-shadow mb-1">
                  {promo.title}
                </h3>
                <p className="font-inter text-[13px] text-white/80 mb-4">
                  {promo.subtitle}
                </p>

                <motion.button
                  className="flex items-center gap-2 font-inter text-[12px] font-bold text-charming bg-white rounded-full px-5 py-2.5 shadow-lg"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Ver promoción <ArrowRight size={13} />
                </motion.button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
