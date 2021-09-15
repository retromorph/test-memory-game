export default class Helpers {
  private static _instance: Helpers | null = null

  public static getInstance(): Helpers {
    if (!this._instance) {
      this._instance = new Helpers()
    }
    return this._instance
  }

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
}
