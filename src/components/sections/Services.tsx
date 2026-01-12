import { motion } from "framer-motion";
import { Plane, Ship, Hotel, Palmtree } from "lucide-react";
import { services } from "@/data/destinations";

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6" />,
  Ship: <Ship className="w-6 h-6" />,
  Hotel: <Hotel className="w-6 h-6" />,
  Palmtree: <Palmtree className="w-6 h-6" />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for a perfect trip, all in one place
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group bg-card rounded-xl p-6 h-full card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground mb-5 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon]}
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
