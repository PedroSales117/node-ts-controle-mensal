import { generateAPIDocs } from "../configurations/api-docs/index";
import monthlyEstimateRoute from "../modules/monthly-update/monthly-update.route";
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
};
