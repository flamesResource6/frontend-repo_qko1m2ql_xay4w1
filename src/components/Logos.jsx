import { motion } from 'framer-motion';

const logos = ['HUD', 'USDA', 'HOME', 'CDBG', 'LIHTC', 'PHA'];

export default function Logos() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 text-slate-300"
          >
            {logos.map((l) => (
              <div key={l} className="text-sm tracking-wider opacity-70">
                {l}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
