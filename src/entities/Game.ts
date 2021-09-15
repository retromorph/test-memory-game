import Card from "@/entities/Card"
import Helpers from "@/entities/Helpers"

export default class Game {
  private readonly _arrangement: Card[][] = []
  private _time: number = 0
  private _moves: number = 0
  private _play: boolean = true

  constructor() {
    let lineArrangement = Helpers.getInstance().shuffleArray<Card>([
      ...Array(16).keys(),
      ...Array(16).keys(),
    ].map((item: number, index: number) => {
      return new Card(index, item)
    }))

    // convert to matrix
    for (let i = 0; i < lineArrangement.length; i++) {
      if (i % 4 == 0) {
        this._arrangement.push([])
      }

      this._arrangement[i % 4].push(lineArrangement[i])
    }
  }

  get arrangement(): Card[][] {
    return this._arrangement
  }

  get time(): number {
    return this._time
  }

  set time(value: number) {
    this._time = value
  }

  get moves(): number {
    return this._moves
  }

  set moves(value: number) {
    this._moves = value
  }

  get play(): boolean {
    return this._play
  }

  set play(value: boolean) {
    this._play = value
  }
}