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
    <Card className="service-card bg-zinc-900 border-purple-600/20 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-2 group">
      <CardHeader className="text-center pb-3">
        <div className="flex justify-center mb-4">
          <div className="service-icon-wrapper p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-800/20 group-hover:from-purple-500/30 group-hover:to-purple-700/30 transition-all duration-300">
            <IconComponent className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </div>
        </div>
        <CardTitle className="text-xl text-white font-bold">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 text-center">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
