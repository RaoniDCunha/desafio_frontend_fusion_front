"use client";

import React, { ReactNode } from 'react';
import { ProfileCardButton } from '../ProfileCardButton';
import { Check, Mail,Users } from 'lucide-react';
import { CardNumbersInformation } from '../CardNumbersInformation';
import Image from "next/image";
import { useState } from "react";
import { ProfileCardButtonGradient } from '../ProfileCardButtonGradient';



interface ProfileCardProps {
 
}

export function ProfileCard({ 
  
}: ProfileCardProps) {
    
    const [isFollowing, setIsFollowing] = useState(false);

       
    const handleToggleFollow = () => {
        setIsFollowing(!isFollowing); 
    };

  return (
           <div className="w-[400px] h-[535.78px] rounded-[24px] bg-white shadow-lg flex flex-col">
           
           {/* Div Superior (Cabeçalho/Topo) */}
          <div className="w-full h-[140px] bg-gray-200 rounded-t-[24px] shrink-0">
            {/* Conteúdo da parte da capa */}
          </div>


          {/* Div Inferior (Conteúdo principal) */}
          <div className="flex-1 flex flex-col items-center p-6 bg-white rounded-b-[24px]">

                {/* 1. Avatar Redondo com Margem Negativa para sobrepor o topo */}
                <div className="relative w-[136px] h-[136px] rounded-full ring-[4px] ring-[#A241C2] -mt-[100px] mb-[4px] bg-white overflow-hidden shrink-0">
                  <Image
                    src="/images/user.png" 
                    alt="Foto de perfil de Ana Silva" 
                    fill 
                    className="object-cover rounded-full ring-[4px] ring-white" 
                    priority 
                  />
                </div>

                {/* 2. Nome */}
                <div className="text-[#1A1A1A] font-['Inter'] font-bold text-[22.1px] leading-[39px] text-center mb-[6px]">
                  Ana Silva
                </div>

                {/* 3. Cargo */}
                <div className="text-[#6B7280] font-['Inter'] font-medium text-[12.75px] leading-[22px] text-center mb-[24px]">
                  Desenvolvedora Full Stack
                </div>

                {/* 4. Row de 3 caixas (Stats/Social) */}
                <div className="flex justify-between w-[233.95px] h-[51.5px] mb-[32px]">
                  <CardNumbersInformation valor={"981"} rotulo={"Seguidores"}  />
                  <CardNumbersInformation valor={"180"} rotulo={"Seguindo"}  />
                  <CardNumbersInformation valor={"42"} rotulo={"Projetos"}  />
                </div>

                {/* 5. Row de 2 Botões */}
                <div className="flex justify-between w-[352px] h-[48px] mb-[24px]">

                {isFollowing ? (
                    
                    <ProfileCardButtonGradient texto={"Seguir"} icone={<Users size={20} color="#FFFFFF" />} corGradienteInicial='#6975DD' corGradienteFinal='#7354AE' corTexto={"#FFFFFF"}  onClick={handleToggleFollow} />
                ) : (
                    <ProfileCardButton texto={"Seguindo"} icone={<Check size={20} color="#FFFFFF" />} corFundo={"#10B981"} corTexto={"#FFFFFF"} onClick={handleToggleFollow} sombra={true} />
                )}
                  
                  <ProfileCardButton texto={"Mensagem"} icone={<Mail size={20} color="#374151" />} corFundo={"#E5E7EB"} corTexto={"#374151"} corBorda='#E5E7EB' sombra={false} />
                </div>

                {/* 6. Texto de Bio */}
                <div className="w-[320px] text-[#6B7280] font-['Inter'] font-normal text-[11.9px] leading-[22px] text-center">
                  Apaixonada por criar experiências digitais incríveis.<br/>
                  Especialista em React e Node.js.
                </div>
          </div>

        </div>
  );
}