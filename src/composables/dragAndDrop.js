export function useDragAndDrop(moveItem) {
  const dragStart = (item, index, event) => {
    event.dataTransfer.setData('index', index.toString())
  }

  const drop = (item, index, event) => {
    event.preventDefault()
    const droppedIndex = parseInt(event.dataTransfer.getData('index'))

    moveItem(droppedIndex, index)
  }

  return {
    dragStart,
    drop
  }
}
