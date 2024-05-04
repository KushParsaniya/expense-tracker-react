import React from 'react';
import {motion} from 'framer-motion';

function Feature({ title, icon, description }) {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
            <i className={`${icon} text-3xl mb-4 text-green-500`}></i>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
}

export default Feature; 
