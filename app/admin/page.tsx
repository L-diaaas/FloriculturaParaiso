"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; 
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";

export default function AdminHome() {
  const router = useRouter();
  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {


    /*
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); 
      return;
    }
    */

    /*
    fetch("http://127.0.0.1:5000/produtos/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("token");
          router.push("/login");
        } else {
          const data = await res.json();
          setProdutos(data);
        }
      })
      .catch(() => router.push("/login"));
    */



    fetch("http://127.0.0.1:5000/produtos/")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error("Erro ao carregar produtos:", error));

  }, [router]);

  
  const cards = [
    { title: "Produtos", subtitle: "Quantidade", icon: "/images/produtos.png", color: "#D3F0E3", link:"/admin/produtos"},
    { title: "Tipos", subtitle: "Nomes", icon: "/images/tipos.png", color: "#77CBBD", link:"/admin/tipos" },
    { title: "Clientes", subtitle: "Dados", icon: "/images/clientes.png", color: "#A5D9C1", link:"/admin/clientes" },
    { title: "Compras", subtitle: "Dados", icon: "/images/compras.png", color: "#B0E2D6", link:"/admin/compras" },
  ];

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

    <main className="flex bg-[#F8FFFC]">
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 p-10 min-h-screen ml-64 bg-white relative">
        {/* Imagem decorativa */}
        <img
          src="/images/decorativa.png" 
          alt="Decorativa"
          className="absolute top-0 right-0 w-32 h-120 w-150 opacity-50 pointer-events-none"
        />

        {/* Header */}
        <Header search={search} setSearch={setSearch} />

        {/* Cards container */}
        <div className="bg-[#E6F4EF] p-10 rounded-3xl shadow-md max-w-4xl mx-auto mt-6">
          <div className="grid grid-cols-100 sm:grid-cols-2 gap-6 justify-items-center">
            {filteredCards.map((card, index) => (
              card.link ? (
                <Link key={index} href={card.link}>
                  <Card {...card} />
                </Link>
              ) : (
                <Card key={index} {...card} />
              )
          ))}
          </div>
        </div>
      </div>
    </main>

    </>
  );
}
