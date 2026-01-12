import { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function SearchCard() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    console.log("Searching:", { origin, destination, departDate, returnDate, passengers });
  };

  return (
    <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
        {/* From */}
        <div className="lg:col-span-1">
          <label htmlFor="origin" className="block text-sm font-medium text-foreground mb-2">
            From
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="origin"
              type="text"
              placeholder="Origin city"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="pl-10 h-12 bg-secondary/50 border-0"
              aria-label="Origin city"
            />
          </div>
        </div>

        {/* To */}
        <div className="lg:col-span-1">
          <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
            To
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="destination"
              type="text"
              placeholder="Destination city"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10 h-12 bg-secondary/50 border-0"
              aria-label="Destination city"
            />
          </div>
        </div>

        {/* Depart Date */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">
            Depart
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full h-12 justify-start text-left font-normal bg-secondary/50 border-0",
                  !departDate && "text-muted-foreground"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {departDate ? format(departDate, "dd-MM-yyyy") : "dd-mm-yyyy"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={departDate}
                onSelect={setDepartDate}
                initialFocus
                className="pointer-events-auto"
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Return Date */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">
            Return
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full h-12 justify-start text-left font-normal bg-secondary/50 border-0",
                  !returnDate && "text-muted-foreground"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {returnDate ? format(returnDate, "dd-MM-yyyy") : "dd-mm-yyyy"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                initialFocus
                className="pointer-events-auto"
                disabled={(date) => date < (departDate || new Date())}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Passengers */}
        <div className="lg:col-span-1">
          <label htmlFor="passengers" className="block text-sm font-medium text-foreground mb-2">
            Passengers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="passengers"
              type="number"
              min={1}
              max={9}
              value={passengers}
              onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
              className="pl-10 h-12 bg-secondary/50 border-0"
              aria-label="Number of passengers"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-1">
          <Button 
            variant="cta" 
            size="lg" 
            className="w-full h-12"
            onClick={handleSearch}
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
