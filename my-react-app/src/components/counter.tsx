import { RootState } from "../store/store";
import { useAppDispatch, useAppSelector } from "../hooks/StoreHooks";
import { increment, decrement } from "../slices/counterSlice";

export default function Counter() {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state: RootState) => state.counter.value)
  
    function incrementCounter() {
      dispatch(increment());
    }
  
    function decrementCounter() {
      dispatch(decrement());
    }
  
    return (
      <div className="flex gap-2">
            <button className="bg-blue-800 text-white rounded-md p-2" onClick={decrementCounter}>
              Decrement -
            </button>
          <h1>{count}</h1>
            <button className="bg-blue-800 text-white rounded-md p-2" onClick={incrementCounter}>
              Increment +
            </button>
      </div>
    );
  }
  
