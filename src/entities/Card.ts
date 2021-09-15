export default class Card {
  private readonly _id: number
  private readonly _position: number
  private _isActive: boolean = false
  private _isHidden: boolean = false

  constructor(id: number, position: number) {
    this._id = id
    this._position = position
  }

  get id(): number {
    return this._id
  }

  get position(): number {
    return this._position
  }

  get isActive(): boolean {
    return this._isActive
  }

  set isActive(value: boolean) {
    this._isActive = value
  }

  get isHidden(): boolean {
    return this._isHidden
  }

  set isHidden(value: boolean) {
    this._isHidden = value
  }
}