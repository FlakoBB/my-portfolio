import '@styles/dynamicbackground.scss'

const DynamicBackground = () => {
  const renderGrid = () => {
    const squares = []

    for (let i = 0; i < 150; i++) {
      squares.push(<div className='square' style={{ '--i': `${i + 1}` }} />)
    }

    return squares
  }

  return (
    <div className='background_container'>
      {renderGrid()}
    </div>
  )
}
export default DynamicBackground
