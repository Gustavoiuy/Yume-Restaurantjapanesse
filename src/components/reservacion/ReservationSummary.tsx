'use client';
import React from 'react';
import { Calendar, Clock, Users, Mail, Phone, User, Dog, ClipboardList, CheckCircle2 } from 'lucide-react';

interface ReservationSummaryProps {
  data: {
    nombre: string;
    celular: string;
    email: string;
    traeMascotas: boolean;
    numPersonas: number;
    fecha: string;
    hora: string;
    notas: string;
  };
  onConfirm: () => void;
  onEdit: () => void;
}

export default function ReservationSummary({ data, onConfirm, onEdit }: ReservationSummaryProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Cabecera Estilo Ticket */}
        <div className="bg-slate-900 p-8 text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          <CheckCircle2 className="mx-auto text-red-500 mb-4" size={48} strokeWidth={1.5} />
          <h3 className="text-2xl font-bold text-white tracking-tight">Verifica tu Reserva</h3>
          <p className="text-slate-400 text-sm mt-1">Casi terminamos, confirma que los datos sean correctos.</p>
        </div>

        {/* Cuerpo del Resumen */}
        <div className="p-6 md:p-10 space-y-8 bg-[#fdfdfd]">
          
          {/* Grid de Información Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Columna 1: Cliente */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-red-600 uppercase tracking-widest border-b border-red-100 pb-2">Información del Cliente</h4>
              <div className="flex items-start space-x-3">
                <User size={18} className="text-slate-400 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 uppercase">Nombre</p>
                  <p className="font-semibold text-slate-800">{data.nombre}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-slate-400 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 uppercase">Contacto</p>
                  <p className="font-semibold text-slate-800">{data.celular}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-slate-400 mt-1" />
                <p className="font-semibold text-slate-800 break-all">{data.email}</p>
              </div>
            </div>

            {/* Columna 2: Detalles */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-red-600 uppercase tracking-widest border-b border-red-100 pb-2">Detalles de la Mesa</h4>
              <div className="flex items-center space-x-3">
                <Calendar size={18} className="text-slate-400" />
                <p className="font-semibold text-slate-800">{data.fecha}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-slate-400" />
                <p className="font-semibold text-slate-800">{data.hora} hrs</p>
              </div>
              <div className="flex items-center space-x-3">
                <Users size={18} className="text-slate-400" />
                <p className="font-semibold text-slate-800">{data.numPersonas} {data.numPersonas > 1 ? 'Invitados' : 'Persona'}</p>
              </div>
              <div className={`flex items-center space-x-3 px-3 py-1 rounded-full w-fit ${data.traeMascotas ? 'bg-green-50 text-green-700' : 'bg-slate-50 text-slate-500'}`}>
                <Dog size={16} />
                <span className="text-xs font-bold uppercase">{data.traeMascotas ? 'Con Mascota' : 'Sin Mascota'}</span>
              </div>
            </div>
          </div>

          {/* Notas Especiales */}
          {data.notas && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center space-x-2 mb-2">
                <ClipboardList size={16} className="text-red-500" />
                <span className="text-xs font-bold text-slate-600 uppercase">Notas adicionales</span>
              </div>
              <p className="text-sm text-slate-700 italic">{data.notas}</p>
            </div>
          )}

          {/* Botones de Acción */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button 
              onClick={onEdit}
              className="flex-1 py-4 px-6 border-2 border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-50 transition-all duration-300 active:scale-95"
            >
              Modificar datos
            </button>
            <button 
              onClick={onConfirm}
              className="flex-[2] py-4 px-6 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Confirmar y Reservar</span>
              <CheckCircle2 size={20} />
            </button>
          </div>
        </div>

        {/* Detalle de diseño: El "corte" de ticket */}
        <div className="bg-[#fdfdfd] py-4 relative">
          <div className="absolute -top-3 left-0 right-0 flex justify-between px-[-10px] overflow-hidden">
             {[...Array(20)].map((_, i) => (
               <div key={i} className="w-4 h-4 bg-[#fdfdfd] rounded-full shadow-inner" style={{ marginTop: '-8px' }} />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}