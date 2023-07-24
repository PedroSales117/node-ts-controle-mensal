import { Type, Static } from "@sinclair/typebox";

const Ativo = Type.Object({
  nome: Type.String(),
  ticker: Type.String(),
  valor: Type.Number(),
  tipo_renda: Type.String(),
  tipo_investimento: Type.String(),
});

const RendaItem = Type.Object({
  nome: Type.String(),
  valor_bruto: Type.Number(),
  valor_liquido: Type.Number(),
  valor_ano: Type.Number(),
});

const Responsabilidade = Type.Object({
  nome: Type.String(),
  valor: Type.Number(),
  valor_tipo: Type.String(),
  periodicidade: Type.String(),
  importancia: Type.Number(),
});

const Divida = Type.Object({
  nome: Type.String(),
  valor: Type.Number(),
});

const Luxo = Type.Object({
  nome: Type.String(),
  valor: Type.Number(),
  importancia: Type.Number(),
});

const TrocaAtivo = Type.Object({
  nome: Type.String(),
  valor: Type.Number(),
  importancia: Type.Number(),
});

export const MonthlyEstimatesDTOSchema = Type.Object({
  data: Type.String(),
  restante_para_liberdade_financeira: Type.Number(),
  ativos: Type.Object({
    acoes: Type.Object({
      total: Type.Number(),
      lista: Type.Array(Ativo),
    }),
    total: Type.Number(),
  }),
  renda: Type.Object({
    salario: RendaItem,
    total: Type.Number(),
  }),
  passivos: Type.Object({
    responsabilidades: Type.Object({
      total: Type.Number(),
      lista: Type.Array(Responsabilidade),
    }),
    dividas: Type.Object({
      total: Type.Number(),
      lista: Type.Array(Divida),
    }),
    Luxos: Type.Object({
      total: Type.Number(),
      lista: Type.Array(Luxo),
    }),
    total: Type.Number(),
  }),
  troca_ativos: Type.Object({
    total: Type.Number(),
    lista: Type.Array(TrocaAtivo),
  }),
});

export type MonthlyEstimatesDTO = Static<typeof MonthlyEstimatesDTOSchema>;
