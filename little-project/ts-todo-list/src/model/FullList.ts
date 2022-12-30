import ListItem from './ListItem'

interface List {
  list: ListItem[]
  load: () => void
  save: () => void
  clear: () => void
  addItem: (item: ListItem) => void
  removeItem: (id: string) => void
}

export default class FullList implements List {
  static instance: FullList = new FullList()

  private constructor(private _list: ListItem[] = []) {} // creating singleton
  // because we only need one instance of the main list and its methods.

  get list(): ListItem[] {
    return this._list
  }

  set list(list: ListItem[]) {
    this._list = list
  }

  load(): void {
    const storedList: string | null = localStorage.getItem('myList')
    if (typeof storedList !== 'string') return

    const parsedList: {
      _id: string
      _checked: boolean
      _item: string
    }[] = JSON.parse(storedList)

    for (const item of parsedList) {
      const listItem = new ListItem(item._id, item._item, item._checked)
      FullList.instance.addItem(listItem)
    }
  }

  save(): void {
    localStorage.setItem('myList', JSON.stringify(this._list))
  }

  clear(): void {
    this._list = []
    this.save()
  }

  addItem(item: ListItem): void {
    this._list.unshift(item)
    this.save()
    //add item logic
  }

  removeItem(id: string): void {
    //remove item logic
    this._list = this._list.filter(item => item.id !== id)
    this.save()
  }
}
