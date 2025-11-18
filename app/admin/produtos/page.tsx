"use client";

import React, { useState } from "react";
import { Pencil, Trash2, Package } from "lucide-react";



type Produto = {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
  tipo_id: number;
};

type Tipo = {
  id: number;
  nome: string;
};

const mockTipos: Tipo[] = [
  { id: 1, nome: "Flores" },
  { id: 2, nome: "Buquês" },
  { id: 3, nome: "Presentes" },
];

const initialProdutos: Produto[] = [
  { id: 11, nome: "Lírios Rosa", quantidade: 10, preco: 39.90, tipo_id: 1 },
  { id: 12, nome: "Buquê Romântico", quantidade: 5, preco: 120.00, tipo_id: 2 },
  { id: 13, nome: "Caixa Presente", quantidade: 20, preco: 19.90, tipo_id: 3 },
];

const emptyProduto: Produto = {
  id: 0,
  nome: "",
  quantidade: 0,
  preco: 0,
  tipo_id: 0,
};

export default function PaginaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>(initialProdutos);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState<Produto>(emptyProduto);


  const COR_FUNDO = "bg-[#D3F0E3]";
  const COR_BORDA_CABECALHO = "bg-[#9FC5B4]";
  const COR_DIVISORIA = "divide-[#9FC5B4]";
  const COR_PRINCIPAL = "bg-emerald-600";
  const COR_PRINCIPAL_HOVER = "hover:bg-emerald-700";


  const getTipoNome = (id: number) => {
    const tipo = mockTipos.find((t) => t.id === id);
    return tipo ? tipo.nome : "Tipo Desconhecido";
  };

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleAtualizar = (id: number) => {
    const produto = produtos.find((p) => p.id === id);
    if (produto) {
      setProdutoEmEdicao(produto);
      setEditandoId(id);
    }
  };

  const handleExcluir = (id: number) => {
    if (window.confirm(`Tem certeza que deseja excluir o produto ${id}?`)) {
      setProdutos(produtos.filter((p) => p.id !== id));
      setEditandoId(null);
    }
  };

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();

    setProdutos(
      produtos.map((p) =>
        p.id === produtoEmEdicao.id ? produtoEmEdicao : p
      )
    );

    setEditandoId(null);
    setProdutoEmEdicao(emptyProduto);
  };

  const handleCancelar = () => {
    setEditandoId(null);
    setProdutoEmEdicao(emptyProduto);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    let newValue: string | number = value;

    if (name === "quantidade" || name === "preco" || name === "tipo_id") {
      newValue = Number(value);
    }

    setProdutoEmEdicao((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

 
  return (
    <div className="min-h-screen p-8 relative">
      <img
        src="/fundoFloresRosas.jpg"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />
      <div className="absolute inset-0 bg-black opacity-0 z-[5]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <a
            href="/admin/"
            className="px-4 py-1 rounded-md bg-verdesaja text-white hover:bg-teal-900 transition-colors duration-150 shadow-md"
        >
            Voltar
        </a>
        <h2 className="text-3xl font-semibold text-teal-900 mb-6 pt-4">
          Gestão de Produtos
        </h2>

        <div className="flex justify-end gap-4 mb-6">
        <a
            href="/admin/produtos/adicionar"
            className="px-5 py-2 rounded-md bg-teal-900 text-white hover:bg-verdepastel transition-colors duration-150 shadow-md"
        >
            + Adicionar Produto
        </a>

        <a
            href="/admin/tipos"
            className="px-5 py-2 rounded-md bg-verdesaja text-white hover:bg-teal-900 transition-colors duration-150 shadow-md"
        >
            Ir para Tipos
        </a>
        </div>
        

        {editandoId !== null && (
          <div className={`${COR_FUNDO} p-6 rounded-lg shadow-lg mb-8 bg-opacity-90`}>
            <h3 className="text-xl font-semibold mb-5 text-gray-700">
              Editar Produto {produtoEmEdicao.id}
            </h3>

            <form onSubmit={handleSalvar} className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Produto
                </label>
                <input
                  type="text"
                  name="nome"
                  value={produtoEmEdicao.nome}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-[#9FC5B4] text-gray-800"
                  required
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantidade
                </label>
                <input
                  type="number"
                  name="quantidade"
                  value={produtoEmEdicao.quantidade || ""}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-[#9FC5B4] text-gray-800"
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preço (R$)
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="preco"
                  value={produtoEmEdicao.preco || ""}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-[#9FC5B4] text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo
                </label>
                <select
                  name="tipo_id"
                  value={produtoEmEdicao.tipo_id}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-[#9FC5B4] text-gray-800 bg-white"
                  required
                >
                  <option value="">Selecione um tipo...</option>
                  {mockTipos.map((tipo) => (
                    <option key={tipo.id} value={tipo.id}>
                      {tipo.nome}
                    </option>
                  ))}
                </select>
              </div>


              <div className="md:col-span-2 flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={handleCancelar}
                  className="px-6 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className={`px-6 py-2 rounded-md ${COR_PRINCIPAL} text-white ${COR_PRINCIPAL_HOVER} flex items-center`}
                >
                  <Pencil size={18} className="mr-2" /> Salvar Alterações
                </button>
              </div>
            </form>
          </div>
            )
        }


        <div
          className={`${COR_FUNDO} rounded-lg shadow-lg overflow-hidden border border-[#9FC5B4] bg-opacity-90`}
        >
          <table className={`min-w-full divide-y ${COR_DIVISORIA}`}>
            <thead className={COR_BORDA_CABECALHO}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                  Quantidade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                  Preço
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                  Tipo
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody className={`${COR_FUNDO} divide-y ${COR_DIVISORIA}`}>
              {produtos.map((produto) => (
                <tr
                  key={produto.id}
                  onClick={() => handleAtualizar(produto.id)}
                  className="cursor-pointer hover:bg-opacity-80"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {produto.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {produto.nome}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {produto.quantidade}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {formatCurrency(produto.preco)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {getTipoNome(produto.tipo_id)}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAtualizar(produto.id);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExcluir(produto.id);
                      }}
                      className="text-red-600 hover:text-red-800"
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
