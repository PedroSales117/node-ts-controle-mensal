import { generateAPIDocs } from "../configurations/api-docs/index";
import monthlyQueryEstimateRoute from "../modules/monthly/query/monthly-query.route";
import monthlyEstimateRoute from "../modules/monthly/create/monthly-create.route";
import root_router from "./root.router";
import {
  FastifyPluginAsyncTypebox,
  TypeBoxTypeProvider,
  TypeBoxValidatorCompiler,
} from "@fastify/type-provider-typebox";

export const router_v1: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.setValidatorCompiler(TypeBoxValidatorCompiler);
  fastify.withTypeProvider<TypeBoxTypeProvider>();

  void generateAPIDocs(fastify);
  await fastify.register(root_router);

  await fastify.register(monthlyEstimateRoute, { prefix: "/monthly" });
  await fastify.register(monthlyQueryEstimateRoute, {
    prefix: "/monthly/query",
  });
};
