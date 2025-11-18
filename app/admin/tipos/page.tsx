"use client";

import React, { useState } from "react";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

type Tipo = {
  id: number;
  nome: string;
};

const mockTipos: Tipo[] = [
  { id: 1, nome: "Rosas" },
  { id: 2, nome: "Tulipas" },
  { id: 3, nome: "Girassóis" },
];

export default function PaginaTipos() {
  const [tipos, setTipos] = useState<Tipo[]>(mockTipos);
  const [nome, setNome] = useState("");
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const customConfirm = (message: string): boolean => {
    console.log(`Ação de Confirmação: ${message}`);
    return true;
  };

  const handleSalvar = () => {
    if (editandoId !== null) {
      setTipos(
        tipos.map((t) =>
          t.id === editandoId ? { id: editandoId, nome } : t
        )
      );
    } else {
      const novoId =
        tipos.length > 0 ? Math.max(...tipos.map((t) => t.id)) + 1 : 1;
      setTipos([...tipos, { id: novoId, nome }]);
    }

    resetarFormulario();
  };

  const handleEditar = (tipo: Tipo) => {
    setEditandoId(tipo.id);
    setNome(tipo.nome);
  };

  const handleExcluir = (id: number) => {
    if (customConfirm("Tem certeza que deseja excluir este tipo?")) {
      setTipos(tipos.filter((t) => t.id !== id));
    }
  };

  const resetarFormulario = () => {
    setEditandoId(null);
    setNome("");
  };

  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/tipos-img.png')" }}
    >
      <div className="container mx-auto max-w-5xl">
        <a
            href="/admin/"
            className="px-4 py-1 rounded-md bg-verdesaja text-white hover:bg-teal-900 transition-colors duration-150 shadow-md"
        >
            Voltar
        </a>

        {/* TÍTULO */}
        <h2 className="text-2xl font-semibold text-white mb-6 pt-4 drop-shadow">
          Gestão de Tipos de Flores
        </h2>

        <div className="flex justify-end mb-6">

        <Link
            href="/admin/itens"
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
            Ver Itens
        </Link>
        </div>

        {/* FORMULÁRIO */}
        <div className="bg-[#D3F0E3] p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold mb-5 text-gray-800">
            {editandoId ? "Editar Tipo" : "Adicionar Novo Tipo"}
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Nome do Tipo (ex: Rosas)"
              className="border p-3 rounded w-full border-[#9FC5B4] focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400 text-gray-900"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            {editandoId && (
              <button
                onClick={resetarFormulario}
                className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
            )}
            <button
              onClick={handleSalvar}
              className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
            >
              <PlusCircle size={18} />
              {editandoId ? "Salvar Alterações" : "Adicionar Tipo"}
            </button>
          </div>
        </div>

        {/* TABELA */}
        <div className="bg-[#D3F0E3] rounded-lg shadow-lg overflow-hidden border border-[#9FC5B4]">
          <table className="min-w-full divide-y divide-[#9FC5B4]">
            <thead className="bg-[#9FC5B4]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Nome do Tipo
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#D3F0E3] divide-y divide-[#9FC5B4]">
              {tipos.map((tipo) => (
                <tr key={tipo.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {tipo.id}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {tipo.nome}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                    <button
                      onClick={() => handleEditar(tipo)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Editar"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      onClick={() => handleExcluir(tipo.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Excluir"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
