"use client";

import React, { ReactNode } from 'react';
import { ProfileCardButton } from '../ProfileCardButton';
import { Check, Mail,Users } from 'lucide-react';
import { CardNumbersInformation } from '../CardNumbersInformation';
import Image from "next/image";
import { useState ,useEffect} from "react";
import { ProfileCardButtonGradient } from '../ProfileCardButtonGradient';
import { motion, AnimatePresence } from "framer-motion";



interface ProfileCardProps {
  campoSeguidoresCard: number;
  campoSeguindoCard: number;
  campoProjetosCard: number;
  campoNomeCard: string;
  campoCargoCard: string;
  campoDescricao1?: string;
  campoDescricao2?: string;
  caminhoImagem?: string;
}

export function ProfileCard({ 
  campoSeguidoresCard,
  campoSeguindoCard,
  campoProjetosCard,
  campoNomeCard,
  campoCargoCard,
  campoDescricao1,
  campoDescricao2,
  caminhoImagem = "/images/noPhotoUser.png"
}: ProfileCardProps) {
    
    const [isFollowing, setIsFollowing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

       
    const handleToggleFollow = () => {
        const novoEstado = !isFollowing;
        setIsFollowing(novoEstado); 
        localStorage.setItem(`seguindo_${campoNomeCard}`, JSON.stringify(novoEstado));
    };

    useEffect(() => {

      const savedState = localStorage.getItem(`seguindo_${campoNomeCard}`);
      if (savedState !== null) {
        setIsFollowing(JSON.parse(savedState)); 
      }
    }, [campoNomeCard]);

    const animationVariants = {
    initial: { opacity: 0, scale: 0.8 }, 
    animate: { opacity: 1, scale: 1 },    
    exit: { opacity: 0, scale: 0.8 },      
  };

  return (
           <div className="w-full max-w-[400px] mx-4 h-[535.78px] rounded-[24px] bg-white shadow-lg flex flex-col">
           
           {/* Div Superior (Cabeçalho/Topo) */}
          <div className="w-full h-[140px] bg-gray-200 rounded-t-[24px] shrink-0">
          </div>


          {/* Div Inferior (Conteúdo principal) */}
          <div className="flex-1 flex flex-col items-center p-6 bg-white rounded-b-[24px]">

                {/* Avatar Redondo com Margem Negativa para sobrepor o topo */}
                <div className="relative w-[136px] h-[136px] rounded-full ring-[4px] ring-[#A241C2] -mt-[100px] mb-[4px] bg-white overflow-hidden shrink-0">
                  <Image
                    src={caminhoImagem}
                    alt="Foto de perfil de Ana Silva" 
                    fill 
                    className="object-cover rounded-full ring-[4px] ring-white" 
                    priority 
                  />
                </div>

                {/* Nome */}
                <div className="text-[#1A1A1A] font-['Inter'] font-bold text-[22.1px] leading-[39px] text-center mb-[6px]">
                  {campoNomeCard}
                </div>

                {/* Cargo */}
                <div className="text-[#6B7280] font-['Inter'] font-medium text-[12.75px] leading-[22px] text-center mb-[24px]">
                  {campoCargoCard}
                </div>

                {/* Row de 3 caixas (seguidores, seguindo e projetos) */}
                <div className="flex justify-between w-[233.95px] h-[51.5px] mb-[32px]">
                  <CardNumbersInformation valor={campoSeguidoresCard} rotulo={"Seguidores"}  />
                  <CardNumbersInformation valor={campoSeguindoCard} rotulo={"Seguindo"}  />
                  <CardNumbersInformation valor={campoProjetosCard} rotulo={"Projetos"}  />
                </div>

                {/* Row de 2 Botões (Seguir e Mensagem) */}
                <div className="flex justify-center gap-4 w-[352px] h-[48px] mb-[24px]">
                    <AnimatePresence mode="wait">
                        {isFollowing ? (
                        <motion.div
                            key="button-gradient" 
                            variants={animationVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.15, ease: "backOut" }} 
                            className="w-[155px]" 
                        >
                            <ProfileCardButton 
                            texto={"Seguindo"} 
                            icone={<Check size={20} color="#FFFFFF" />} 
                            corFundo={"#10B981"} 
                            corTexto={"#FFFFFF"} 
                            onClick={handleToggleFollow} 
                            sombra={true} 
                            />
                        </motion.div>
                        ) : (
                        <motion.div
                            key="button-solid" 
                            variants={animationVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.15, ease: "backOut" }}
                            className="w-[155px]"
                        >
                            
                            <ProfileCardButtonGradient 
                            texto={"Seguir"} 
                            icone={<Users size={20} color="#FFFFFF" />} 
                            corGradienteInicial='#6975DD' 
                            corGradienteFinal='#7354AE' 
                            corTexto={"#FFFFFF"} 
                            onClick={handleToggleFollow} 
                            />
                        </motion.div>
                        )}
                    </AnimatePresence>

                    <ProfileCardButton texto={"Mensagem"} icone={<Mail size={20} color="#374151" />} corFundo={"#F3F4F6"} corTexto={"#374151"} corBorda='#E5E7EB' sombra={false} onClick={() => setIsModalOpen(true)} />
                </div>

                {/* Texto de Bio */}
                <div className="w-[320px] text-[#6B7280] font-['Inter'] font-normal text-[11.9px] leading-[22px] text-center ">
                  {campoDescricao1}<br/>
                  {campoDescricao2}
                </div>
          </div>

          {/*  Modal do botão Mensagem */}

            <AnimatePresence>
                {isModalOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                >
                    
                    <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    className="bg-white rounded-[20px] p-6 w-full max-w-[320px] shadow-2xl flex flex-col items-center text-center"
                    >
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        <Mail size={24} className="text-[#A241C2]" />
                    </div>
                    <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">
                        Em breve!
                    </h3>
                    <p className="text-[#6B7280] text-sm mb-6">
                        A função de envio de mensagens ainda está sendo desenvolvida. Volte mais tarde!
                    </p>
                    
                    {/* Botão para fechar modal */}
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="w-full h-[44px] bg-[#1A1A1A] text-white rounded-[12px] font-medium hover:bg-black transition-colors"
                    >
                        Entendi
                    </button>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>

        </div>
  );
}