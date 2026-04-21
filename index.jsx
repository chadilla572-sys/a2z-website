import { Card, CardContent } from "@/components/ui/card";
import { Truck, Phone, Mail, MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function TruckingWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero */}
      <div className="bg-black text-white p-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          A2Z Mobile Repair
        </motion.h1>
        <p className="mt-3 text-lg">
          Professional trailer repair services: brakes, tires, air systems, seals, chassis, lights & structural repair
        </p>
        <p className="mt-2 text-sm opacity-80">
          Fully Registered & Insured • Mobile Service • Fleet Ready
        </p>

        {/* Buttons */}
        <div className="mt-5 flex justify-center flex-wrap gap-3">
          <a href="tel:+15103058165" className="bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold">
            Call Now
          </a>
          <a href="sms:+15103058165" className="bg-green-500 text-white px-5 py-2 rounded-xl font-semibold">
            Text Now
          </a>
          <a href="https://wa.me/15103058165" className="bg-green-700 text-white px-5 py-2 rounded-xl font-semibold">
            WhatsApp
          </a>
        </div>
      </div>

      {/* Services */}
      <div className="p-10 grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Wrench className="mx-auto mb-3" size={40} />
            <h2 className="font-bold">Chassis & Structural Repair</h2>
            <p>Trailer frames, dry vans, flatbeds and structural damage repair.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Truck className="mx-auto mb-3" size={40} />
            <h2 className="font-bold">Brakes & Suspension</h2>
            <p>Brake systems, shocks, and suspension for safe operation.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Truck className="mx-auto mb-3" size={40} />
            <h2 className="font-bold">Air Systems & Seals</h2>
            <p>Fixing air leaks, weak seals, and pressure issues.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Truck className="mx-auto mb-3" size={40} />
            <h2 className="font-bold">Tires & Lights</h2>
            <p>Tire replacement, wheels, and trailer lighting systems.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Wrench className="mx-auto mb-3" size={40} />
            <h2 className="font-bold">Mobile Repair</h2>
            <p>We come to you for fast roadside or on-site repairs.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Wrench className="mx-auto mb-3" size={40} />
            <h2 className="font-bold">Container Repair</h2>
            <p>Rivets, cracks, patches, and cargo container fixes.</p>
          </CardContent>
        </Card>
      </div>

      {/* Fleet Section */}
      <div className="bg-black text-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">Fleet & Company Contracts</h2>
        <p className="max-w-2xl mx-auto">
          We work with trucking companies, logistics providers, and fleet owners. 
          Reliable, fast, and professional trailer repair services to keep your fleet on the road.
        </p>
        <p className="mt-3 font-semibold">Available for long-term contracts</p>
      </div>

      {/* Gallery */}
      <div className="p-10">
        <h2 className="text-2xl font-bold text-center mb-6">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76" className="rounded-xl" />
          <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc" className="rounded-xl" />
          <img src="https://images.unsplash.com/photo-1597764690523-15bea4c581c9" className="rounded-xl" />
        </div>
      </div>

      {/* About */}
      <div className="bg-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">About Us</h2>
        <p className="max-w-2xl mx-auto">
          A2Z Mobile Repair specializes ONLY in trailer repairs. We do NOT work on truck engines.
          Our focus is keeping trailers safe, compliant, and road-ready.
        </p>
      </div>

      {/* Contact */}
      <div className="bg-gray-200 p-10">
        <h2 className="text-2xl font-bold text-center mb-6">Contact</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <Phone className="mx-auto" />
            <p>+1 (510) 305-8165</p>
          </div>
          <div>
            <Mail className="mx-auto" />
            <p>contact@a2zmobilerepair.com</p>
          </div>
          <div>
            <MapPin className="mx-auto" />
            <p>Stockton, CA</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white text-center p-4">
        © 2026 A2Z Mobile Repair. All rights reserved.
      </div>
    </div>
  );
}
