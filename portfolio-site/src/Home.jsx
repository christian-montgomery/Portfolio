import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">

        {/* Hero */}
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center px-6 py-32"
        >
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
            >
            Hi, I'm <span className="text-indigo-400">Christian Montgomery</span>
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-slate-300 mb-8"
            >
            Software Engineering graduate focused on full-stack development,
            cloud systems, and real-world problem solving.
            </motion.p>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex gap-4"
            >
            <a className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition">
                View Projects
            </a>
            <a className="px-6 py-3 rounded-xl border border-slate-500 hover:bg-slate-800 transition">
                Contact
            </a>
            </motion.div>
        </motion.section>

        {/* Skills */}
        <section className="max-w-5xl mx-auto px-6 py-20">
            <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-10"
            >
            Skills
            </motion.h2>

            <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 grid md:grid-cols-2 gap-4"
            >
            {[
                "Java",
                "JavaScript",
                "React",
                "Spring Boot",
                "Azure",
                "SQL",
                "Git",
                "RESTful APIs",
                "Python",
            ].map((skill) => (
                <motion.div
                key={skill}
                variants={item}
                className="text-xl font-medium"
                >
                {skill}
                </motion.div>
            ))}
            </motion.div>
        </section>
    </div>
  );
}