import React, { ReactNode } from 'react';

// Interface definindo tudo o que o componente pode receber
interface ProfileCardButtonProps {
  texto: string;
  icone: ReactNode; // ReactNode permite passar qualquer SVG ou componente de ícone
  corFundo: string;
  corTexto: string;
  corBorda?: string; // Opcional
  onClick?: () => void; // Ação ao clicar na div
}

export function ProfileCardButton({ 
  texto, 
  icone, 
  corFundo, 
  corTexto, 
  corBorda = 'transparent', // Se não passar borda, fica transparente por padrão
  onClick 
}: ProfileCardButtonProps) {
  return (
    <div 
      onClick={onClick}
      style={{ 
        backgroundColor: corFundo, 
        color: corTexto,
        borderColor: corBorda 
      }}
      // Usei h-[48px] para garantir a altura exata, gap-[8px] para dar um respiro entre ícone e texto, e hover:opacity-80 para o efeito de transição
      className="w-[155px] h-[48px] border rounded-[12px] flex flex-row items-center justify-center gap-[8px] cursor-pointer hover:opacity-80 transition-opacity shrink-0"
    >
      {/* Contêiner do Ícone (20x20) */}
      <div className="flex items-center justify-center w-[20px] h-[20px]">
        {icone}
      </div>

      {/* Texto com a Tipografia exata do Figma */}
      <span className="font-['Inter'] font-semibold text-[12.75px] leading-[22px] text-center">
        {texto}
      </span>
      
    </div>
  );
}