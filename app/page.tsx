"use client";
import Image from "next/image";
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


const produtos = [
    { id: 1, nome: 'Buquê de TCG', preco: 'R$ 159,90', imagem: '/produto1.jpg' },
    { id: 2, nome: 'Buquê de Tulipas', preco: 'R$ 179,90', imagem: '/produto2.jpg' },
    { id: 3, nome: 'Buquê de Rosas', preco: 'R$ 119,90', imagem: '/produto3.jpg' },
    { id: 4, nome: 'Buquê de Lírios', preco: 'R$ 150,90', imagem: '/produto4.jpg' },
    { id: 5, nome: 'Buquê Primavera S', preco: 'R$ 210,90', imagem: '/produto5.jpg' },
    { id: 6, nome: 'Buquê Primavera L', preco: 'R$ 340,90', imagem: '/produto6.jpg' },
];


export default function Home() {
  

  const settings = {
    dots: true,               
    infinite: true,            
    speed: 500,
    slidesToShow: 4,           
    slidesToScroll: 1,
    autoplay: true,            
    autoplaySpeed: 3000,       
    arrows: true,              
    

    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <>

      <div className="flex ">
        <nav className="md:w-[70%] md:h-16 bg-padrao shadow-md flex items-center gap-x-4 shrink-0 h-[35px] w-screen"> 
          <img className="md:h-12 md:w-20 shrink-0 ml-4  h-6 w-10" src="/Floricultura.png" alt="Logo da Floricultura"/>
          <div>
            <div className="text-lg md:font-medium font-sm text-black ">Floricultura Paraíso</div>
            <p className="text-gray-500 text-xs">Seu buquê como uma carta de amor!</p>
          </div>
          <div className="flex w-[45%] items-center justify-center gap-x-5">
            <a href="#home" className="ml-15 hover:text-verdesaja hover:underline hover:underline-offset-15 hover:decoration-2">Home</a>
            <a href="#sobre-nos" className="hover:text-verdesaja hover:underline hover:underline-offset-15 hover:decoration-2">Sobre nós</a>
            <a href="#produtos" className="hover:text-verdesaja hover:underline hover:underline-offset-15 hover:decoration-2">Produtos</a>
            <a href="#avaliacoes" className="hover:text-verdesaja hover:underline hover:underline-offset-15 hover:decoration-2">Avaliações</a>
          </div>
          <Link href="/login" className="ml-10 bg-verdesaja text-white h-[50hv] w-[12%] rounded-full shadow-md hover:bg-verdeagua hover:text-white/75 flex items-center justify-center relative z-20">Login</Link>
        </nav>
        
        <div style={{ background: 'linear-gradient(to bottom, #8BC4BF, #D3F0E3)' }} className="object-right h-100 w-196 rounded-l-lg opacity-0 sm:opacity-100">
          <img className="absolute opacity-0 sm:opacity-100 md:opacity-100 top-[-35px] right-[-8px] h-115 w-150 z-10" src="/liriosGrandes.png" alt="Imagem dos lírios"></img>
        </div>
        
      </div>
      
      <div id="home" className="absolute w-220 h-83 top-[70px]">
        <div className="absolute content-start top-[35px] w-145 left-[35px] h-82">
          <p className="text-4xl font-bold text-left leading-snug">As flores são as cartas mais puras para demonstrar o verdadeiro amor.</p>
          <p className="text-lg">Presenteie agora quem você ama.</p>
        </div>
      </div>
      <button className="absolute bg-verdesaja text-white text-medium font-bold h-15 w-40 top-[320px] ml-100 rounded-lg shadow-md hover:bg-verdepastel hover:text-verdesaja">Contate-nos</button>


      <div id="sobre-nos" className="w-full h-[50vh] flex flex-col justify-center items-center bg-[url('/fundoFolhas.jpg')] bg-cover bg-center bg-no-repeat p-4">

        <div className="w-full max-w-4xl text-center mb-4">
          <p className="font-medium text-lg drop-shadow-lg">A Floricultura Paraíso está desde 2019 presenteando paixões e espalhando amor através de petalas...</p>
        </div>
        
        <div className="w-full max-w-4xl text-center space-y-3 p-4 rounded-lg">
          <p className="font-semibold">Assim como todo bom conto, o nosso também tem um começo.</p>
          <p className="text-sm">A Floricultura Paraíso nasceu de uma tradição familiar: escolher flores com carinho para expressar sentimentos. Acreditamos que cada flor carrega uma mensagem — de amor, amizade ou afeto.</p>
          <p className="text-sm">Como amantes das flores, decidimos compartilhar esse simbolismo com nossos clientes, levando a beleza e o significado de cada pétala para todos os corações que encontramos.</p>
          <p className="text-sm font-semibold mt-4">Assim nasceu a Floricultura Paraíso: a realização de tudo o que acreditamos ser mais belo.</p>
        </div>

        <div className="mt-6">
          <button className="bg-verdesaja w-auto px-6 h-[6vh] rounded-lg shadow-xl text-white font-bold hover:bg-verdepastel hover:text-verdesaja transition duration-300">Saiba mais!</button>
        </div>
      </div>
      
      
      <div id="produtos" className="w-full py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Produtos em Destaque</h2>
        
        <div className="max-w-7xl mx-auto px-4">
          <Slider {...settings}>
            {produtos.map((produto) => (
 
              <div key={produto.id} className="p-2"> 
                <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-900 truncate">{produto.nome}</h3>
                    <p className="text-xl font-bold text-verdesaja mt-1">{produto.preco}</p>
                    <button 
                      className="mt-3 w-full bg-verdesaja/90 text-white py-2 rounded-lg hover:bg-verdesaja transition duration-150 text-sm font-semibold"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>



      <div id="avaliacoes" className="flex flex-col w-[100%] h-auto mt-[1%] items-center p-4">

        <p className="mt-[1%] font-bold text-xl text-center">Aqui seu buquê se transforma em uma declaração cheia de significados.</p>
        <p className="mt-[0.5%] text-xs text-center mb-6">Confira o significado de alguns dos nossos feedbacks.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-padrao/50 rounded-lg shadow-md w-full md:w-55 md:flex-shrink min-h-55 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <p className="font-semibold text-sm text-center">Júlia Andrade, 27 anos</p>
            <div className="text-yellow-400 text-2xl my-2">
              <span>★★★★★</span>
            </div>
            <p className="text-xs text-gray-700 text-center mt-3">Os arranjos são sempre impecáveis e super cheirosos. A entrega foi rápida e o atendimento muito atencioso. Recomendo demais!</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-padrao/50 rounded-lg shadow-md w-full md:w-70 min-h-70 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <p className="font-semibold text-sm text-center">Luccas Lopes, 19 anos</p>
            <div className="text-yellow-400 text-2xl my-2">
              <span>★★★★★</span>
            </div>
            <p className="text-xs text-gray-700 text-center mt-3">Comprei um buquê para presentear minha mãe e ela simplesmente amou! As flores vieram fresquinhas e muito bem montadas.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-padrao/50 rounded-lg shadow-md w-full md:w-55 md:flex-shrink min-h-55 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <p className="font-semibold text-sm text-center">Ana Beatriz, 24 anos</p>
            <div className="text-yellow-400 text-2xl my-2">
              <span>★★★★★</span>
            </div>
            <p className="text-xs text-gray-700 text-center mt-3">A loja tem uma variedade incrível e os buquês são ainda mais bonitos pessoalmente. Experiência excelente do início ao fim!</p>
          </div>
        </div>
      </div>
      

      <div className="rounded-t-md flex flex-col w-[100%] h-auto mt-[1%] items-center p-4 bg-padrao shadow-[0_-5px_10px_-2px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row justify-center items-start w-full max-w-6xl mx-auto py-4 gap-8 md:gap-12 mr-[15px]">
          <div className="flex items-start space-x-4 w-full md:w-1/3">
            <div className="flex-shrink-0 pt-1">
              <img src="/iconeLocalizacao.png" alt="Localização" width={32} height={32} className="w-8 h-8"/>
            </div>
            <div className=" flex flex-col text-sm">
              <span className="font-semibold text-lg mb-1"> Floricultura Paraíso - 2020</span>
              <span>09961660, Rua Barão de Vitória</span>
              <span>São PAulo - SP, Brasil</span>
            </div>
          </div>
          <div className="flex items-start space-x-4 w-full md:w-1/3">
            <div className="flex-shrink-0 pt-1">
              <img src="/iconeTelefone.png" alt="Localização" width={32} height={32} className="w-8 h-8"/>
            </div>
            <div className=" flex flex-col text-sm">
              <span className="mb-1 font-bold">Entre em contato conosco através do telefone:</span>
              <span>+55 (11) 23322046</span>
              <span>+55 (11) 33215728</span>
              <span>+55 (11) 20963388</span>
            </div>
          </div>
          <div className="flex items-start space-x-4 w-full md:w-1/3">
            <div className="flex-shrink-0 pt-1">
              <img src="/iconeEmail.png" alt="Localização" width={32} height={32} className="w-8 h-8"/>
            </div>
            <div className=" flex flex-col text-sm">
              <span className="mb-1 font-bold">Nos mande mensagem:</span>
              <span>floriculturaparaiso@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}