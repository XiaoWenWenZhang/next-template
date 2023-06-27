type IListener = (...args: any) => Promise<any>

export class EventEmitter {
  private listeners
  constructor() {
    this.listeners = new Map<string, IListener[]>()
  }

  on(eventKey: string, listener: IListener) {
    if (!this.listeners.has(eventKey)) {
      this.listeners.set(eventKey, [])
    }
    this.listeners.get(eventKey)!.push(listener)
  }

  emit(eventKey: string, ...args: any) {
    if (!this.listeners.has(eventKey)) {
      return
    }
    return Promise.all(
      this.listeners.get(eventKey)!.map(listener => listener(...args)),
    )
  }

  off(eventKey: string, listener: IListener) {
    if (!this.listeners.has(eventKey)) {
      return
    }
    const index = this.listeners.get(eventKey)!.indexOf(listener)
    if (index !== -1) {
      this.listeners.get(eventKey)!.splice(index, 1)
    }
  }
}

export const emitter = new EventEmitter()
