import { Wrench, Volume2, Lightbulb, Zap, Calendar, Package } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const iconMap = {
  wrench: Wrench,
  volume2: Volume2,
  lightbulb: Lightbulb,
  zap: Zap,
  calendar: Calendar,
  package: Package
};

export const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon];

  return (
    <Card className="service-card bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-purple-600/30 hover:border-purple-400/60 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] hover:-translate-y-3 group cursor-pointer relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="text-center pb-4 relative z-10">
        <div className="flex justify-center mb-5">
          <div className="service-icon-wrapper p-5 rounded-2xl bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-800/20 group-hover:from-purple-500/40 group-hover:via-purple-400/20 group-hover:to-purple-700/40 transition-all duration-500 shadow-lg group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.3)] group-hover:scale-110">
            <IconComponent className="w-14 h-14 text-purple-400 group-hover:text-purple-300 transition-all duration-500 group-hover:scale-110" />
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-gray-400 group-hover:text-gray-300 text-center leading-relaxed transition-colors duration-300">
          {service.description}
        </CardDescription>
      </CardContent>
      
      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};
