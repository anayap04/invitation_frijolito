import React, { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { MessageCircle } from "lucide-react";
import TimeBlock from "./ui/time-block";
import { Button } from "./ui/button";

export function InvitationCard() {
  const [targetDate, setTargetDate] = useState(new Date("2025-12-14T15:59:59"));
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  const WHATSAPP_NUMBER = "525583239388"; // Change this to your number
  const EVENT_NAME = "Revelación de Sexo";

  const message = encodeURIComponent(
    `¡Hola! Para la asistencia al evento ${EVENT_NAME}.\n\nMi respuesta es: `
  );

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setIsExpired(false);
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  // Event details
  const eventDetails = {
    title: "Revelación de Sexo",
    date: "2025-12-13",
    time: "16:00",
    location: "El Medio y Medio Valle Dorado",
    description:
      "Prepárate para un evento único: Danna y Gabo revelarán el sexo del próximo personaje que se une a la partida.",
  };

  return (
    <div className="bg-white pixel-border p-6 md:p-8 shadow-pixel mx-auto max-w-2xl">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Event details */}
        <div className="flex-1 space-y-6">
          <div className="text-center md:text-left">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-blue-400 px-6 py-2 pixel-border mb-4">
              <span className="pixel-text-small text-white">NIVEL 1</span>
            </div>
            <h2 className="pixel-text-medium text-purple-800 mb-2">
              {eventDetails.title}
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-pink-50 p-4 pixel-border-thin">
              <Calendar
                className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <div className="pixel-text-small text-gray-700">Fecha</div>
                <div className="text-gray-900">Diciembre 14, 2025</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-blue-50 p-4 pixel-border-thin">
              <Clock
                className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <div className="pixel-text-small text-gray-700">Hora</div>
                <div className="text-gray-900">4:00 PM</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-purple-50 p-4 pixel-border-thin">
              <MapPin
                className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <div className="pixel-text-small text-gray-700">Lugar</div>
                <div className="text-gray-900">{eventDetails.location}</div>
              </div>
            </div>
          </div>

          <p className="text-center md:text-left text-gray-600 italic">
            {eventDetails.description}
          </p>

          {/* Dress code with gaming jargon */}
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-4 pixel-border-thin">
            <p className="pixel-text-small text-purple-800 mb-2">
              ⚔️ ESCOGE TU EQUIPO
            </p>
            <p className="text-sm text-gray-700">
              <span className="text-pink-600">
                Equipo Niña (Rosa / Pañales etapa 1 o 2)
              </span>{" "}
              or{" "}
              <span className="text-blue-600">
                Equipo Niño (Azul / Toallitas húmedas)
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-1 italic">
              Poder especial (opcional): ¡Viste los colores de tu equipo!
            </p>
          </div>
        </div>

        {/* Right side - QR Code */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 px-2 pixel-border-thin p-6">
          <p className="pixel-text-small text-purple-800 text-center">
            Si estás en el exterior, ¡Únete a la transmisión!
          </p>
          <div className="flex flex-row items-start gap-4 mt-2">
            
              <div className="pixel-text-small text-gray-700 mt-1">Hora</div>
              <div className="text-gray-900">7:00 PM (México)</div>
              <div className="text-gray-900">8:00 PM (Colombia)</div>
          </div>
          <a
            href="https://meet.google.com/daa-bvdx-fiu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 bg-gradient-to-r from-pink-500 to-blue-500 mt-2 mb-4 pixel-text-small underline hover:text-purple-600 text-center text-white px-8 py-4"
          >
            Unirse a la transmisión en vivo
          </a>

          <div className="mt-2 flex gap-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-purple-400 pixel-box"
                style={{
                  animation: "pulse 1.5s ease-in-out infinite",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <div className="flex flex-row text-gray-900 text-center">
            <TimeBlock value={timeLeft.days} label="Días" />
            <TimeBlock value={timeLeft.hours} label="Horas" />
            <TimeBlock value={timeLeft.minutes} label="Minutos" />
            <TimeBlock value={timeLeft.seconds} label="Segundos" />
          </div>
          <div>
            <a
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 hover:from-pink-600 hover:to-blue-600 transition-all transform hover:scale-105 active:scale-95 group"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6 " />
              <p className="text-center pixel-text-small">
                Confirmar Asistencia
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="flex justify-center gap-2 mt-6 pt-6 border-t-4 border-dashed border-purple-300">
        {["★", "♥", "★", "♥", "★"].map((symbol, i) => (
          <span
            key={i}
            className="text-2xl"
            style={{
              color: i % 2 === 0 ? "#ec4899" : "#3b82f6",
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
            }}
          >
            {symbol}
          </span>
        ))}
      </div>
    </div>
  );
}
