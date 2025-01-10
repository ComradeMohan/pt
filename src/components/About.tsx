import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker"
  ];

  const timeline = [
    {
      year: "2020",
      title: "10th Grade",
      description: "Completed Secondary Education",
      status: "completed"
    },
    {
      year: "2022",
      title: "Intermediate",
      description: "Completed Intermediate Education",
      status: "completed"
    },
    {
      year: "2026",
      title: "B.Tech",
      description: "Computer Science Engineering",
      status: "ongoing"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-[#0a192f] py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-12 text-4xl font-bold">About Me</h2>
          
          <div className="mb-12">
            <p className="mb-6 text-gray-300">
              I'm a Computer Science Engineering student passionate about building innovative solutions
              through technology. With a strong foundation in full-stack development and a keen interest
              in emerging technologies, I strive to create impactful applications that solve real-world
              problems.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-semibold">Educational Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-600 md:left-1/2" />

              {/* Timeline entries */}
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-8 flex flex-col md:flex-row md:justify-between"
                >
                  <div className={`relative w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:ml-auto'}`}>
                    {/* Timeline dot */}
                    <div className={`absolute left-4 h-4 w-4 rounded-full border-2 ${item.status === 'completed' ? 'bg-blue-600' : 'border-blue-600 bg-[#0a192f]'} md:left-auto ${index % 2 === 0 ? 'md:right-[-35px]' : 'md:left-[-35px]'}`} />
                    
                    <div className={`ml-12 rounded-lg bg-[#1a1a1a] p-6 md:ml-0`}>
                      <span className="mb-2 inline-block text-blue-400">{item.year}</span>
                      <h4 className="mb-2 text-xl font-semibold">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                      <span className={`mt-2 inline-block rounded-full px-3 py-1 text-sm ${
                        item.status === 'completed' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'
                      }`}>
                        {item.status === 'completed' ? 'Completed' : 'Ongoing'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg bg-blue-600/20 p-3 text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}