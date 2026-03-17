import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';
import { serviceTypes } from '../data/mock';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission
    console.log('Form submitted:', formData);
    toast.success('¡Consulta enviada! Te contactaremos pronto.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="bg-zinc-900 border-indigo-600/20 max-w-2xl mx-auto shadow-[0_0_50px_rgba(99,102,241,0.2)]">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          Solicita tu Presupuesto
        </CardTitle>
        <CardDescription className="text-gray-400">
          Cuéntanos qué servicio necesitas y te responderemos en menos de 24 horas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Nombre</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-300">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="684 23 79 96"
              required
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType" className="text-gray-300">Tipo de Servicio</Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
              required
            >
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:border-indigo-500 focus:ring-indigo-500">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                {serviceTypes.map((service) => (
                  <SelectItem 
                    key={service} 
                    value={service}
                    className="text-white hover:bg-zinc-700 focus:bg-zinc-700"
                  >
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tu evento o proyecto..."
              rows={4}
              required
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-6 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-300"
          >
            Enviar Consulta
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
