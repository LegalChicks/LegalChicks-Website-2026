import { motion } from 'motion/react';

const images = [
  "/0fa9fbb4-9794-4dba-86a6-86594d1b8f53.jpg",
  "/1971a8f8-7231-4875-a04c-b90c96096e1a.jpg",
  "/40b2c192-91cc-43b3-a351-eb3ffea7f2f8.jpg",
  "/55cbcdc465354cb00de0e076af7efb40c9b952f1.png",
  "/57d11aac2ec5435054b8fd17f3ccb1f6c1fbbab2.png",
  "/6da2d5e3-0616-4100-8117-fa7751001151.jpg",
  "/6fc3de17acfa4c65952b64d77058dc6d7ecc1d96.png",
  "/92bfc8ee7053481f5eca46085808dfbb0076cadf.png",
  "/9771af34-1ded-4eb6-ba4b-174681d1a6b0.jpg",
  "/a5b9e15cae9bde87323869ad3f23cf1bbb4e3987.png",
  "/de8c6c60-7f97-45c6-8ff3-e2c01c003148.jpg",
  "/G-pUxT9zKdqilVNMqxodYDGqWsxecNAxUUp7UWo2ZlgkucVJjj5C_f3mwyxdc16WsoMT9CxjjuHYrwfBRZUIRlAFoO6KsvfpESqg_kH5hLuDknfzr8qO7sinetGN7rBCql5794VM3uv2IQNv6lZiiBH4A45BmZNUZmpHPSmJv8g.jpg",
  "/veL1gv1FcfteRv9W-eVejbc1MKeMV9iudjCCYJWF2cge15ByYXPbT63zvCW2QUuvSEdcJ4zvicTU2Y9hWC_qnyxi3l9wJSNxhg9EF_nMLCuX3xbjg8SlAk7o7CXpxugW803-9S03toHAXzeY06JrCcF5o6_3AqhG5IwmADx9-EG4IxyocxAWpk_MDOcisZ42.jpg",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-24 px-6 md:px-12 lg:px-20 relative z-10 bg-eggshell">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-mahogany-900 mb-4">
            Farm <span className="text-gold italic">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[16px] md:text-[18px] font-light">
            Take a look at our healthy flock, premium products, and natural free-range environment.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="break-inside-avoid rounded-2xl overflow-hidden group"
            >
              <img 
                src={src} 
                alt={`Farm Gallery Image ${index + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
