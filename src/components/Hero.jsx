import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-12">
        <div className="md:col-span-7 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI-native capital stack optimization
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            viewport={{ once: true }}
            className="mt-5 text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Raise more capital for multifamily deals — faster, cheaper, smarter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-5 max-w-2xl text-lg text-slate-300"
          >
            StackForge AI structures and optimizes affordable housing capital stacks across grants, tax credits, debt, and equity — cutting fees, compressing timelines, and unlocking new sources.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#cta" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium hover:opacity-90 transition">
              Get a demo
            </a>
            <a href="#how" className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {[
              ['20%+', 'Lower fees'],
              ['3x', 'Faster close'],
              ['150+', 'Funds mapped'],
              ['$2B+', 'Pipeline optimized'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-semibold text-white">{k}</div>
                <div className="text-sm text-slate-300">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="md:col-span-5" />
      </div>
    </section>
  );
}
