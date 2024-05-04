import { motion } from 'framer-motion';

function HeroSection() {
    return (
        <motion.section className="hero bg-gray-100 rounded-lg p-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="text-center md:text-left">
                <motion.h1 className="text-3xl font-bold mb-4"
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.2 }}
                >
                    Track Your Expenses, Reach Your Financial Goals
                </motion.h1>
                {/* ... other elements */}
            </div>
        </motion.section>
    );
}

export default HeroSection;