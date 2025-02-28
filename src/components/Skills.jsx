import { SKILLS } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.5 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    return (
        <div className="container mx-auto" id="skills">
            <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>
            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                variants={containerVariants} 
                viewport={{ once: true }} 
                className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
                onViewportEnter={() => setHasAnimated(true)}
            >
                {SKILLS.map((skill, index) => (
                    <motion.div 
                        variants={itemVariants} 
                        key={index} 
                        className={`py-6 flex items-center justify-between ${index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""}`}
                    >
                        <div className="flex items-center w-1/2">
                            {skill.icon}
                            <h3 className="px-6 text-lg lg:text-2xl">
                                {skill.name}
                            </h3>
                        </div>
                        {/* Large screen progress bar */}
                        <div className="hidden sm:flex w-2/4 lg:w-1/4 sm:w-1/3 flex-row items-center space-x-2">
                            <div className="flex-grow bg-gray-300 rounded-full h-2 overflow-hidden">
                                <motion.div 
                                    className="bg-blue-500 h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={hasAnimated ? { width: `${skill.level}%` } : { width: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.5 }}
                                ></motion.div>

                                
                            </div>
                            <motion.span 
                                className="text-md font-semibold whitespace-nowrap"
                                initial={{ opacity: 0 }}
                                animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.5 }}
                            >
                                {skill.level}%
                            </motion.span>
                        </div>
                        {/* Small screen circular progress bar */}
                        <div className="sm:hidden flex items-center justify-center w-16 h-16 relative">
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <circle className="text-gray-300" stroke="currentColor" strokeWidth="3.8" cx="18" cy="18" r="16" fill="none" />
                                <motion.circle 
                                    className="text-blue-500"
                                    stroke="currentColor"
                                    strokeWidth="3.8"
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    strokeDasharray="100"
                                    strokeDashoffset="100"
                                    initial={{ strokeDashoffset: 100 }}
                                    animate={hasAnimated ? { strokeDashoffset: 100 - skill.level } : { strokeDashoffset: 100 }}
                                    transition={{ duration: 0.8, delay: index * 0.5 }}
                                />
                            </svg>
                            <span className="absolute text-xs font-bold text-center">{skill.level}%</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
