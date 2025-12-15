import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";


function Card({ children }) {
  return (
    <div className="bg-[#18453B] border border-slate-700 rounded-2xl shadow-lg">
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return <div className="p-6 text-white">{children}</div>;
}

function Button({ children, variant = "solid", ...props }) {
  const base =
    "px-6 py-2 rounded-xl font-medium transition";

  const styles =
    variant === "outline"
      ? "border border-slate-500 hover:bg-slate-700"
      : "bg-indigo-500 hover:bg-indigo-600";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-[#18453B]">Christian Montgomery</span>
        </motion.h1>
        <p className="max-w-2xl text-lg md:text-xl text-black mb-8">
          Software Engineering graduate passionate about building scalable web applications,
          full-stack systems, and intelligent data-driven solutions.
        </p>
        <div className="flex gap-4">
          <Button className="bg-[#18453B] hover:bg-[#18453B] p-2 rounded-md text-white">View Projects</Button>
          <Button variant="outline" className="bg-[#18453B] hover:bg-[#18453B] p-2 rounded-md text-white">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-black leading-relaxed">
          I'm a recent Computer Science graduate with hands-on experience in full-stack development,
          cloud platforms, and machine learning. I enjoy solving real-world problems, learning new
          technologies quickly, and collaborating with teams to deliver high-quality software.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Java", "Spring Boot", "React", "Node.js",
              "SQL", "Azure", "Docker", "Python"
            ].map((skill) => (
              <Card key={skill} className="bg-[#18453B] border-slate-700">
                <CardContent className="p-6 text-center font-medium">
                  {skill}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">BeBot Analytics Platform</h3>
              <p className="text-slate-300 mb-4">
                Multi-module system using Spring Boot, React, Azure SQL, and Computer Vision
                to analyze and visualize beach cleanup data.
              </p>
              <Button variant="outline">View Details</Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">When2Meet-Style Scheduler</h3>
              <p className="text-slate-300 mb-4">
                Real-time availability scheduling app with heatmap visualization and WebSockets.
              </p>
              <Button variant="outline">View Details</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a href="#"><Github /></a>
            <a href="#"><Linkedin /></a>
            <a href="#"><Mail /></a>
          </div>
          <p className="text-sm text-black">© 2025 Christian Montgomery</p>
        </div>
      </footer>
    </div>
  );
}
