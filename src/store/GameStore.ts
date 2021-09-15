import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators"
import Game from "@/entities/Game"
import Card from "@/entities/Card"

@Module({
  name: "Session",
  namespaced: true,
  stateFactory: true,
})
export default class GameStore extends VuexModule {
  game: Game | null = null
  activeCard: Card | null = null
  timer: number = 0
  moves: number = 0

  @Action
  fetchCard(card: Card) {
    this.incrementMoves()
    this.updateActiveOrMatchCards(card)
  }

  // @Mutation
  // updateCard(cardToUpdate: Card) {
  //   let currentCard = this.game!.arrangement
  //     .find(cards => cards.find(card => card.id === cardToUpdate.id))!
  //     .find(card => card.id === cardToUpdate.id)!
  //
  //   Object.assign(currentCard, cardToUpdate)
  //
  //   this.updateActiveOrMatchCards(currentCard)
  // }

  @Mutation
  updateTimer(timer: number) {
    this.timer = timer
  }

  @Mutation
  incrementMoves() {
    this.moves++
  }

  @Mutation
  updateActiveOrMatchCards(card: Card) {
    if (card.isActive
      && this.activeCard
      && card.position == this.activeCard.position) {
      // cards match
      this.activeCard.isHidden = true
      card.isHidden = true
      this.activeCard = null
    } else if (card.isActive && this.activeCard) {
      // cards don't match
      this.activeCard = null
    } else if (card.isActive) {
      // no current active card
      this.activeCard = card
    }
  }
}