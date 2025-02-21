import { EDUCATION } from '../constants'
import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion'
import { useState } from "react";
import { X } from "lucide-react"; // Importing close icon

const EducationSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <section className="py-8" id="education">
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-12 mt-20 text-center text-4xl font-semibold">Education</motion.h2>
                {EDUCATION.map((edu, index) => (
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: index * 0.5 }} key={index} className='mb-6 p-10'>
                        <h3 className='text-xl font-semibold'>
                            {edu.degree}
                        </h3>
                        <p className='text-lg'>
                            {edu.institution}
                        </p>
                        <p className='text-sm text-stone-300'>
                            {edu.duration}
                        </p>
                        <p className='mt-2'>
                            {edu.description}
                        </p>
                    </motion.div>

                ))}
                 {/* Certification Section */}
                 <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-12 mt-20 text-center text-4xl font-semibold"
            >
                Certifications
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.3 }}
                        key={index}
                        className="shadow-lg rounded-xl overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(cert.image)}
                    >
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-48 object-contain"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{cert.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal for Full-Size Image */}
            {selectedImage && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                        >
                            <X size={24} />
                        </button>

                        {/* Image */}
                        <motion.img
                            src={selectedImage}
                            alt="Certification"
                            className="w-full max-h-[80vh] object-contain rounded-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>
            )}
            
        </section>
    )
}

export default EducationSection