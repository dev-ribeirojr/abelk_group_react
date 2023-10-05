import PrivateEquity from "../../public/imageCarousel/private-equity.png";
import CompraDeAtivos from "../../public/imageCarousel/compra-de-ativos.png";
import CompraDeEmpresas from "../../public/imageCarousel/compra-de-empresas.png";
import LegalizacaoDeEmpresas from "../../public/imageCarousel/legalizacao-de-empresa.png";
import EspecializacaoEmCompra from "../../public/imageCarousel/especializacao-em-compra.png";
import FinancasEstruturada from "../../public/imageCarousel/financa-estruturada.png";
import CaptacaoDeRecursos from "../../public/imageCarousel/captacao-de-recurso.png";
import AquisicaoDeAtivos from "../../public/imageCarousel/aquisicao-de-ativos-estressados.png";
import FundosDeInvestimento from "../../public/imageCarousel/fundos-de-investimento.png";
import Financiamento from "../../public/imageCarousel/financiamento.png";
import ViabilidadeDeRecurso from "../../public/imageCarousel/viabilidade-de-recursos.png";

type Carousel = {
  id: number;
  title: string;
  text: string;
  img: any;
};

export const dataCarousel: Carousel[] = [
  {
    id: 0,
    title: "Private Equity",
    text: "Realizamos operações financeiras privadas, não vinculadas à Bolsa de Valores, focando em investimentos diretos junto a empresas promissoras.",
    img: PrivateEquity,
  },
  {
    id: 1,
    title: "Compra De Ativos De Baixa Liquidez",
    text: "Focamos em adquirir ativos que possam ter liquidez limitada no mercado, identificando oportunidades únicas de investimento.",
    img: CompraDeAtivos,
  },
  {
    id: 2,
    title: "Compra de empresas",
    text: "Auxiliamos nossos clientes na aquisição de outras empresas, seja por meio da compra de ações (aquisição majoritária) ou de todos os ativos e passivos (aquisição total), visando à expansão de negócios e o fortalecimento de sua posição no mercado.",
    img: CompraDeEmpresas,
  },
  {
    id: 3,
    title: "Legalização De Empresas",
    text: "Prestamos serviços para o registro e regularização de empresas perante os órgãos governamentais, obtendo CNPJ, alvarás, licenças e outras documentações essenciais para a operação legal de negócios.",
    img: LegalizacaoDeEmpresas,
  },
  {
    id: 4,
    title: "Especialização Em Compra De Ativos",
    text: "Nossa expertise está concentrada na aquisição de ativos com objetivos variados, como investimento, recuperação e consolidação.",
    img: EspecializacaoEmCompra,
  },
  {
    id: 5,
    title: "Finança Estruturada",
    text: "Atuamos na criação de produtos e soluções financeiras personalizadas, muitas vezes com base em ativos subjacentes, visando atender às necessidades específicas de nossos clientes.",
    img: FinancasEstruturada,
  },
  {
    id: 6,
    title: "Captação De Recursos Para Empresas",
    text: "Buscamos e obtemos recursos financeiros, como investimentos e empréstimos, para apoiar as operações e projetos de nossos clientes.",
    img: CaptacaoDeRecursos,
  },
  {
    id: 7,
    title: "Aquisição De Ativos Estressados",
    text: "Realizamos aquisições de ativos que estão enfrentando dificuldades financeiras ou operacionais, buscando oportunidades de investimento com potencial de valorização.",
    img: AquisicaoDeAtivos,
  },
  {
    id: 8,
    title: "Fundos De Investimentos",
    text: "Oferecemos veículos de investimento coletivo gerenciados por profissionais qualificados, com o objetivo de obter retornos financeiros consistentes para nossos investidores.",
    img: FundosDeInvestimento,
  },
  {
    id: 9,
    title: "Financimento",
    text: "Oferecemos soluções especializadas para crédito consignado e financiamento de veículos, garantindo que nossos clientes tenham acesso a opções personalizadas e adequadas às suas necessidades financeiras.",
    img: Financiamento,
  },
  {
    id: 10,
    title: "Viabilidade De Recursos",
    text: "Realizamos análises detalhadas da capacidade de empresas ou projetos em obter os recursos necessários, como financiamento e mão de obra, para garantir o sucesso e a sustentabilidade das operações.",
    img: ViabilidadeDeRecurso,
  },
];
