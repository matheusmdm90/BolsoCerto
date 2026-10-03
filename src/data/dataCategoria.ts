import MaterialIcons from "@react-native-vector-icons/material-icons";

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

export interface Categoria {
  id: number;
  nome: string;
  icone: MaterialIconName;
  tipo: number;
  cor: string;
}

export const dataCategorias: Categoria[] = [
  // Entrada (tipo: 1)
  { id: 1, nome: "Salário", icone: "work", tipo: 1, cor: "#1DB954" },
  { id: 2, nome: "Freelance", icone: "laptop", tipo: 1, cor: "#3B82F6" },
  {
    id: 3,
    nome: "Investimento",
    icone: "trending-up",
    tipo: 1,
    cor: "#8B5CF6",
  },
  { id: 4, nome: "Vendas", icone: "shopping-bag", tipo: 1, cor: "#22C55E" },
  { id: 5, nome: "Reembolso", icone: "replay", tipo: 1, cor: "#06B6D4" },
  { id: 6, nome: "Prêmio", icone: "card-giftcard", tipo: 1, cor: "#EAB308" },
  {
    id: 7,
    nome: "Dividendos",
    icone: "account-balance",
    tipo: 1,
    cor: "#10B981",
  },
  { id: 8, nome: "Cashback", icone: "redeem", tipo: 1, cor: "#0EA5E9" },

  // Saída (tipo: 0)
  { id: 9, nome: "Alimentação", icone: "restaurant", tipo: 0, cor: "#F59E0B" },
  {
    id: 10,
    nome: "Transporte",
    icone: "directions-car",
    tipo: 0,
    cor: "#EF4444",
  },
  { id: 11, nome: "Saúde", icone: "favorite", tipo: 0, cor: "#EC4899" },
  { id: 12, nome: "Lazer", icone: "sports-esports", tipo: 0, cor: "#14B8A6" },
  { id: 13, nome: "Moradia", icone: "home", tipo: 0, cor: "#A855F7" },
  { id: 14, nome: "Contas fixas", icone: "receipt", tipo: 0, cor: "#F97316" },
  { id: 15, nome: "Educação", icone: "school", tipo: 0, cor: "#3B82F6" },
  { id: 16, nome: "Outros", icone: "more-horiz", tipo: 0, cor: "#6B7280" },
];
