import { Button } from "@/components/ui/button";
import { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const displayName = destination.location 
    ? `${destination.name}, ${destination.location}`
    : destination.name;

  return (
    <div className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={destination.image}
          alt={displayName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-primary-light/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
          {destination.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
          {displayName}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-primary">
              From ${destination.price.toLocaleString()}
            </span>
          </div>
          <Button variant="mint" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
