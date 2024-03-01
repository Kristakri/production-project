import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterAction } from '../model/slice/counterSlice'

export const Counter = (): JSX.Element => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterAction.increment())
  }

  const decrement = () => {
    dispatch(counterAction.decrement())
  }

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <Button onClick={increment} data-testid="increment-btn">increment</Button>
      <Button onClick={decrement} data-testid="decrement-btn">decrement</Button>
    </div>
  )
}
