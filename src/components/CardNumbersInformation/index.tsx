import React from 'react';

interface CardNumbersInformationProps {
  valor: string | number;
  rotulo: string;
}

export function CardNumbersInformation({ valor, rotulo }: CardNumbersInformationProps) {
  return (
    <div className="w-[65.61px] h-[51.5px] flex flex-col items-center justify-center">
      
      {/* Valor (Texto Superior) */}
      <span className="font-['Inter'] font-bold text-[17px] leading-[30px] text-[#1A1A1A]">
        {valor}
      </span>
      
      {/* Rótulo (Texto Inferior) */}
      <span className="font-['Inter'] font-medium text-[11.05px] leading-[19px] text-[#9CA3AF]">
        {rotulo}
      </span>
      
    </div>
  );
}