import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Bus Booking App (Contributor)</h3>
                            <p className="text-gray-400 mb-4"> A Bus booking web app that allows users to create accounts, login and book for bus seats to travel to their desired destinations within Kenya. </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "CSS", "Flask", "Python"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/robemike/Bus-booking-client/tree/ian/customer" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-2"> View Project → </a> 
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Restaurant Website (Ongoing) </h3>
                            <p className="text-gray-400 mb-4"> Developing a modern and user-friendly website for The LB Lounge, a bar and restaurant in Ngong. The website will provide essential business information, a menu display, table booking, and customer engagement features. </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "CSS", "Javascript"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Kamausizzlah/lb-site" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-2"> View Project → </a> 
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Web Board (80% Complete) </h3>
                            <p className="text-gray-400 mb-4"> The Web board is a discussion board (a forum). The whole idea is to maintain several boards, which will behave like categories. Then, inside a specific board, a user can start a new discussion by creating a new topic. In this topic, other users can engage in the discussion posting replies. </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "Django", "Python"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Kamausizzlah/django-boards" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-2"> View Project → </a> 
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}