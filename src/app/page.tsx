"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-gray-900">Jefherson Luiz</span>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#inicio" className="hover:text-black transition-colors">Início</a>
            <a href="#sobre" className="hover:text-black transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-black transition-colors">Projetos</a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-900">
            {isMobileMenuOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav (AnimatePresence para animar montagem/desmontagem) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-20 right-0 w-64 h-[calc(100vh-5rem)] bg-white border-l border-gray-200 shadow-2xl flex flex-col p-6 gap-6 md:hidden"
            >
              <a href="#inicio" onClick={toggleMenu} className="text-lg font-medium text-gray-600 hover:text-black">Início</a>
              <a href="#sobre" onClick={toggleMenu} className="text-lg font-medium text-gray-600 hover:text-black">Sobre</a>
              <a href="#projetos" onClick={toggleMenu} className="text-lg font-medium text-gray-600 hover:text-black">Projetos</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="inicio" className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-start gap-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Desenvolvedor de Software & <br className="hidden md:block"/> Estudante de ADS
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Sou estudante de Análise e Desenvolvimento de Sistemas na UNISUL. Tenho foco em Java, SQL e Cloud, unindo o aprendizado acadêmico com 2 anos de vivência profissional em suporte e otimização de processos corporativos.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#projetos" className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-colors">
                Ver Projetos
              </a>
              <a href="#contato" className="px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Contato
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            {/* Espaço para sua foto. Substitua o src depois */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-full border-4 border-white shadow-xl overflow-hidden">
            <img src="https://github.com/jefheee.png" alt="Jefherson Luiz" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </section>

        {/* Especialidades Section */}
        <section id="sobre" className="bg-white py-24 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Especialidades & Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <motion.div whileHover={{ scale: 1.02 }} className="p-8 border border-gray-100 rounded-2xl bg-[#FAFAFA] hover:shadow-sm transition-all">
                <Icons.Terminal className="w-10 h-10 text-gray-700 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Desenvolvimento Web</h3>
                <p className="text-gray-600">Criação de interfaces modernas com React, Tailwind CSS e TypeScript, focando em usabilidade e performance.</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="p-8 border border-gray-100 rounded-2xl bg-[#FAFAFA] hover:shadow-sm transition-all">
                <Icons.Database className="w-10 h-10 text-gray-700 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend & Dados</h3>
                <p className="text-gray-600">Lógica de programação com Java, modelagem de banco de dados e consultas avançadas em SQL.</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="p-8 border border-gray-100 rounded-2xl bg-[#FAFAFA] hover:shadow-sm transition-all">
                <Icons.Cloud className="w-10 h-10 text-gray-700 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Infra e Automação</h3>
                <p className="text-gray-600">Criação de scripts em PowerShell/Batch, otimização de sistemas Windows/Linux e noções de arquitetura Cloud.</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Projetos Section */}
        <section id="projetos" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card Projeto 1 */}
            <motion.a 
              href="https://github.com/jefheee" target="_blank"
              whileHover={{ y: -5 }}
              className="group block border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center border-b border-gray-200 p-6">
                <span className="text-gray-400 font-medium">Ulife Portal Redesign</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:underline">Ulife Portal Redesign</h3>
                <p className="text-gray-600 mb-4 text-sm">Redesign moderno do portal universitário focado em UX/UI. Construído do zero utilizando tecnologias modernas de front-end.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Tailwind CSS</span>
                </div>
              </div>
              <motion.a 
                href="https://github.com/jefheee/ulife-portal-redesign" target="_blank"

            {/* Card Projeto 2 */}
            <motion.a 
              href="https://github.com/jefheee" target="_blank"
              whileHover={{ y: -5 }}
              className="group block border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center border-b border-gray-200 p-6">
                <span className="text-gray-400 font-medium">System Optimizer Tool</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:underline">System Optimizer Tool</h3>
                <p className="text-gray-600 mb-4 text-sm">Utilitário CLI robusto para limpeza profunda, redução de latência e otimização de performance do Windows.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">PowerShell</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Batch</span>
                </div>
              </div>
              <motion.a 
               href="https://github.com/jefheee/System-Optimizer-Tool" target="_blank"

          </div>
        </section>
      </main>

      {/* Footer / Contato */}
      <footer id="contato" className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold">Vamos conversar?</h2>
          <p className="text-gray-400 text-center max-w-md">Estou sempre aberto a novas oportunidades e desafios técnicos. Entre em contato nas redes abaixo.</p>
          
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/jefheee" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
              <Icons.Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jefhersonluiz/" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
              <Icons.Linkedin size={24} />
            </a>
            <a href="mailto:jefhersonluiz08@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
              <Icons.Mail size={24} />
            </a>
          </div>
          
          <div className="w-full h-px bg-gray-800 mt-8 mb-4"></div>
          <p className="text-gray-500 text-sm">© 2026 Jefherson Luiz. Desenvolvido com React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}