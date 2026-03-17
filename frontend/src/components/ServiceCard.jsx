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
    <Card className="service-card bg-zinc-900 border-indigo-600/20 hover:border-indigo-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:-translate-y-2 group">
      <CardHeader className="text-center pb-3">
        <div className="flex justify-center mb-4">
          <div className="service-icon-wrapper p-4 rounded-full bg-gradient-to-br from-indigo-600/20 to-blue-800/20 group-hover:from-indigo-500/30 group-hover:to-blue-700/30 transition-all duration-300">
            <IconComponent className="w-12 h-12 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
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
