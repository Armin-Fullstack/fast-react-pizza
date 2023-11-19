import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();

  function handleIncreaseItem() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handleDecreaseItem() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleIncreaseItem}>
        +
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={handleDecreaseItem}>
        -
      </Button>
    </div>
  );
}
