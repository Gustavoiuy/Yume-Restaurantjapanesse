'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Users, Phone, MessageSquare, Mail, User, Clock, Dog, CheckCircle2 } from 'lucide-react';
import ReservationSummary from './reservacion/ReservationSummary'; 

interface ReservationData {
  nombre: string;
  celular: string;
  email: string;
  traeMascotas: boolean;
  numPersonas: number;
  fecha: string;
  hora: string;
  notas: string;
}

export default function Services() {
  const [showSummary, setShowSummary] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ReservationData | null>(null);
  const [loading, setLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ReservationData>();
  const today = new Date().toISOString().split("T")[0]; 
  
  const handleShowSummary = (data: ReservationData) => {
    setFormData(data);
    setShowSummary(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 
  const confirmFinalReservation = async () => {
    if (!formData) return;
    setLoading(true);

    try {
      const localDateTime = `${formData.fecha}T${formData.hora}:00`;
      
      const payload = {
        CustomerName: formData.nombre,
        CustomerPhone: formData.celular,
        Email: formData.email,
        HasPets: Boolean(formData.traeMascotas),
        NumberOfPeople: Number(formData.numPersonas),
        Notes: formData.notas,
        ReservationDate: localDateTime 
      };

      const response = await fetch('https://apiecommercev1-d2bee5hpchghavcy.canadacentral-01.azurewebsites.net/api/Reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Hubo un error en el servidor. Revisa la conexión con .NET.");
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      alert("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  // VISTA 3: Pantalla de Éxito (Confirmación Final)
  if (isSubmitted) {
    return (
      <section className="py-20 bg-[#fdfdfd] min-h-[60vh] flex items-center justify-center animate-in fade-in zoom-in duration-500">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl text-center border border-slate-100">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">¡Mesa Reservada!</h2>
          <p className="text-slate-600 mb-8">
            Gracias <span className="font-bold">{formData?.nombre}</span>. Hemos registrado tu visita para el día <span className="font-bold">{formData?.fecha}</span>.
          </p>
          <button 
            onClick={() => window.location.href = '/'} 
            className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-red-600 transition-all shadow-lg active:scale-95"
          >
            Volver al Menú Principal
          </button>
        </div>
      </section>
    );
  }

  // VISTA 2: El Resumen (Ticket)
  if (showSummary && formData) {
    return (
      <section className="py-20 bg-[#fdfdfd]">
        <ReservationSummary 
          data={formData} 
          onConfirm={confirmFinalReservation} 
          onEdit={() => setShowSummary(false)} 
        />
        {loading && (
          <div className="fixed inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-[#fdfdfd] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm">Experiencia Gourmet</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4 tracking-tight">
            Reserva tu Mesa 🍣
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-6 md:p-12">
          <form onSubmit={handleSubmit(handleShowSummary)} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 ml-1">
                  <User size={16} className="mr-2 text-red-500" /> Nombre Completo
                </label>
                <input 
                  {...register("nombre", { required: "Tu nombre es necesario" })}
                  className={`w-full p-4 bg-slate-50 border ${errors.nombre ? 'border-red-400' : 'border-slate-200'} rounded-2xl outline-none transition-all duration-300`}
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 ml-1">
                  <Phone size={16} className="mr-2 text-red-500" /> Celular
                </label>
                <input 
                  {...register("celular", { required: "El celular es obligatorio" })}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                  placeholder="55 1234 5678"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-slate-700 ml-1">
                <Mail size={16} className="mr-2 text-red-500" /> Correo Electrónico
              </label>
              <input 
                type="email"
                {...register("email", { 
                  required: "El email es obligatorio",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" }
                })}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                placeholder="tu@correo.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 ml-1">
                  <Calendar size={16} className="mr-2 text-red-500" /> Fecha
                </label>
                <input
                  type="date"
                  min={today} // esto limita el calendario visualmente
                  {...register("fecha", {
                    required: "La fecha es obligatoria",
                    validate: value => value >= today || "No puedes elegir fechas pasadas"
                  })}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                />
               </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 ml-1">
                  <Clock size={16} className="mr-2 text-red-500" /> Hora
                </label>
                <input
                  type="time"
                  min="13:00"   // 1 pm
                  max="21:00"   // 9 pm
                  {...register("hora", {
                    required: "La hora es obligatoria",
                    validate: value =>
                      (value >= "13:00" && value <= "21:00") || "Horario permitido de 1pm a 9pm"
                  })}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 ml-1">
                  <Users size={16} className="mr-2 text-red-500" /> Personas
                </label>
                <select {...register("numPersonas", { required: true })} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none appearance-none cursor-pointer">
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Persona' : 'Personas'}</option>)}
                </select>
              </div>
            </div>

            <div className="flex items-center group cursor-pointer">
              <label className="relative flex items-center p-3 rounded-xl hover:bg-red-50 transition-colors cursor-pointer w-full border border-dashed border-slate-200 group-hover:border-red-200">
                <input type="checkbox" {...register("traeMascotas")} className="w-6 h-6 rounded-lg border-slate-300 text-red-600 focus:ring-red-500 cursor-pointer mr-3" />
                <span className="text-sm font-medium text-slate-600 flex items-center">
                  <Dog size={18} className="mr-2" /> Somos Pet Friendly. ¿Vienes con tu mascota?
                </span>
              </label>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-slate-700 ml-1">
                <MessageSquare size={16} className="mr-2 text-red-500" /> Notas adicionales
              </label>
              <textarea {...register("notas")} rows={3} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none resize-none" placeholder="Alergias o peticiones..." />
            </div>

            <button 
              type="submit"
              className="relative w-full group overflow-hidden py-5 bg-slate-900 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30"
            >
              <span className="relative z-10 uppercase tracking-widest text-sm">Ver Resumen</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}