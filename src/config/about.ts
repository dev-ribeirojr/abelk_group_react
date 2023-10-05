import Hero from "../../public/hero.png";
type Values = {
  id: number;
  title: string;
  text: string;
};

type About = {
  img: any;
  about: string;
  mission: string;
  vision: string;
  values: Values[];
};
export const about: About = {
  img: Hero,
  about: `A empresa <strong>"Abelk Capital"</strong> é uma organização com sede em São Paulo, Brasil, especializada no ramo de negócios de compra e venda de artigos imobiliários e outras transações comerciais. Seu foco principal é identificar oportunidades de investimento ou transações que garantam rentabilidade e segurança para o patrimônio de seus clientes em todo o território brasileiro.`,
  mission:
    "Nossa missão é proporcionar soluções financeiras inovadoras e de alta qualidade, transformando artigos como propriedades, imóveis e ativos em fontes de rentabilidade para nossos clientes. Buscamos promover o crescimento e a proteção de seus investimentos, com base em análises criteriosas e abordagens personalizadas",
  vision:
    "Almejamos ser líderes no mercado de investimentos e transações imobiliárias, reconhecidos por nossa excelência em oferecer soluções financeiras confiáveis e sob medida para cada cliente. Queremos ser uma referência em captação de recursos e na identificação de oportunidades de negócio lucrativas e seguras.",
  values: [
    {
      id: 1,
      title: "Integridade",
      text: "Agimos com transparência, ética e honestidade em todas as nossas operações.",
    },
    {
      id: 2,
      title: "Compromisso com o cliente",
      text: "Colocamos os interesses dos nossos clientes em primeiro lugar, buscando sempre sua satisfação e sucesso financeiro.",
    },
    {
      id: 3,
      title: "Inovação",
      text: "Estamos constantemente em busca de novas abordagens e soluções financeiras criativas para oferecer o melhor serviço possível.",
    },
    {
      id: 4,
      title: "Exelência",
      text: "Buscamos aprimorar nossas competências e conhecimentos para fornecer serviços de alto padrão aos nossos clientes e parceiros.",
    },
  ],
};
