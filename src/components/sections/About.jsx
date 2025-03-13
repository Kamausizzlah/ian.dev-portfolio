import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React", 
        "Html", 
        "TailwindCSS", 
        "CSS",
    ];

    const backendSkills = [
        "Python", 
        "Django", 
        "SQL", 
        "FastAPI",
        "Aws",
    ];


    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">Passionate Developer with expertise in building scalable end to end web applications and creating innovative solutions. 
                        ☕ My best ideas come when I’m two cups of coffee deep!
                        🛠️ I believe clean code is like poetry—structured, meaningful, and beautiful!</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key} 
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}

                                        </span>
                                    ))}
                                </div>

                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                            key={key} 
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}

                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Currently Learning </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> Cloud Computing </strong> - AWS
                                </li>
                                <li>
                                    <strong> CI/CD </strong> - Jenkins/Github
                                </li>
                                <li>
                                    <strong> DSA </strong> - Python
                                </li>
                                <li>
                                    <strong> Automation </strong> - Shell scripting
                                </li>
                            </ul>     
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Freelance Developer (2024 - Present) </h4>
                                    <p> Building User Interfaces using React and TailwindCSS. </p>
                                    <p> Creating Scalable RESTful APIs for web applications. </p>
                                    <p> Setting up CI/CD pipelines and automation. </p>
                                    <p> Integrating third-party APIs (payment gateways, social media, etc.). </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Assistant ICT Officer at Melchizedek Hsp. (2023) </h4>
                                    <p> Assisted in installation, configuration and maintenance of Networking and Computing devices. </p>
                                </div>

                            </div>     
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}