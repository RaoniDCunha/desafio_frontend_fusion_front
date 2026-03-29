import React, { ReactNode } from 'react';

// Interface atualizada para receber as cores do gradiente
interface ProfileCardButtonGradientProps {
  texto: string;
  icone: ReactNode;
  corGradienteInicial: string; 
  corGradienteFinal: string;   
  corTexto: string;
  corBorda?: string;
  onClick?: () => void;
}

export function ProfileCardButtonGradient({ 
  texto, 
  icone, 
  corGradienteInicial,
  corGradienteFinal,
  corTexto, 
  corBorda = 'transparent', 
  onClick 
}: ProfileCardButtonGradientProps) {
  return (
    <div 
      onClick={onClick}
      style={{ 
        backgroundImage: `linear-gradient(to right, ${corGradienteInicial}, ${corGradienteFinal})`,
        color: corTexto,
        borderColor: corBorda,
        boxShadow: '0px 2px 4px #10B981'
      }}
      
      className="w-[155px] h-[48px] border rounded-[12px] flex flex-row items-center justify-center gap-[8px] cursor-pointer hover:opacity-90 transition-opacity shrink-0"
    >
      {/* Contêiner do Ícone (20x20) */}
      <div className="flex items-center justify-center w-[20px] h-[20px]">
        {icone}
      </div>

      {/* Texto */}
      <span className="font-semibold text-[12.75px] leading-[22px] text-center">
        {texto}
      </span>
      
    </div>
  );
}