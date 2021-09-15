import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators"

@Module({
  name: "Session",
  namespaced: true,
  stateFactory: true,
})
export default class GameStore extends VuexModule {

}