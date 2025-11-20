import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-1"
        >
          <div className="rounded-[22px] bg-slate-900/80 p-8 md:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready to raise smarter?</h3>
              <p className="mt-3 text-slate-300">Book a 20-minute walkthrough and get your first project modeled in days, not months.</p>

              <form className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <input type="email" placeholder="Work email" className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
                <input type="text" placeholder="Organization" className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
                <button className="h-12 rounded-lg bg-white px-4 text-slate-900 font-medium hover:opacity-90 transition">Request demo</button>
              </form>

              <p className="mt-3 text-xs text-slate-400">No spam. Well follow up with scheduling options.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
