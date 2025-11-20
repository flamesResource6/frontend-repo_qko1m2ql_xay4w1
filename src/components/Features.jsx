import { motion } from 'framer-motion';
import { BarChart3, Layers, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Smart stack builder',
    desc: 'AI assembles LIHTC, soft loans, grants, bonds, and equity into a feasible stack based on deal constraints.'
  },
  {
    icon: BarChart3,
    title: 'Scenario modeling',
    desc: 'Stress test rates, rents, basis, and allocations. Compare options instantly with sensitivity charts.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance aware',
    desc: 'Built-in rules for 4%/9% LIHTC, HOME, CDBG, Section 8, and state programs keep structures compliant.'
  },
  {
    icon: Zap,
    title: 'Speed + savings',
    desc: 'Automate diligence, docs, and lender/allocator packaging. Cut fees and compress closing timelines.'
  }
];

export default function Features() {
  return (
    <section id="how" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-white"
          >
            Purpose-built for affordable multifamily capital
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-300"
          >
            Bring order to programs, partners, and constraints. Our engine finds the optimal path to closing.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/80 to-indigo-600/80 text-white shadow-lg">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
