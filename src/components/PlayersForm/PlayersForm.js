import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {HIDE_PLAYERS_FORM, RESET_GAME, RESET_TIMER, SET_PLAYERS_NAMES} from "../../store";
import { Button } from "../";

export const PlayersForm = () => {
  const dispatch = useDispatch();

  const isPlayersFormVisible = useSelector((state) => state.players.isPlayersFormVisible);

  const sendFormData = (formData) => {
    dispatch({ type: SET_PLAYERS_NAMES, payload: formData })
    dispatch({ type: HIDE_PLAYERS_FORM })
    dispatch({ type: RESET_GAME })
    dispatch({type: RESET_TIMER})
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      player1: "",
      player2: ""
    }
  });

  const playerProps = {
    minLength: { value: 3, message: "Имя игрока должно быть не менее 3 символов" },
    maxLength: { value: 15, message: "Имя игрока должно быть не более 15 символов" }
  }

  const firstPlayerNameError = errors.player1?.message;
  const secondPlayerNameError = errors.player2?.message;

  const wrapperStyles = "center-absolute w-full h-full bg-white";

  const formStyles = "center-absolute w-3/6 bg-white flex flex-col  items-center justify-center border-2 border-green-400 rounded";

  const inputStyles = "border-2 border-green-400 rounded text-green-400 w-1/2 p-4 mb-3 text-xl text-center outline-green-600 ";

  const errorStyles = "text-xl text-red-400";

  return (
    <div className={!isPlayersFormVisible ? "hidden" : wrapperStyles}>
      <form
        className={`${formStyles} form-height`}
        onSubmit={handleSubmit(sendFormData)}>
        <input className={inputStyles} name="player1" type="text" {...register("player1", playerProps)} placeholder="Крестики" />
        <input className={inputStyles} name="player2" type="text" {...register("player2", playerProps)} placeholder="Нолики" />
        <Button>Подтвердить</Button>

        <div className="absolute h-10 w-full bottom-10 text-center">
          {firstPlayerNameError && <div className={errorStyles}>{firstPlayerNameError}</div>}
          {secondPlayerNameError && <div className={errorStyles}>{secondPlayerNameError}</div>}
        </div>
      </form>
    </div>
  )
}