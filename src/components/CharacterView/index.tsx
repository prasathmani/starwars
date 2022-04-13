import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "antd";
import { RootState } from "../../reducers";
import { getCharacterAction } from "../../actions/starWars";
import Characteritem from "../CharacterItem";
import { SET_FAVOURITE } from "../../actions/types";

interface ParamTypes {
  id: string;
}

const CharacterView = () => {
  const rootState = useSelector((state: RootState) => state.starWars);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  const { character } = rootState;

  useEffect(() => {
    dispatch(getCharacterAction(id));
  }, [id]); // eslint-disable-line

  const handleFavourite = () => {
    dispatch({
      type: SET_FAVOURITE,
      payload: character,
    });
  };

  return (
    <div>
      <div className="flex justify-end mb-3">
        <Button type="primary" onClick={handleFavourite}>
          ☆ Favourite
        </Button>
        <Button type="dashed" className="ml-2" onClick={history.goBack}>
          ↶ Go Back
        </Button>
      </div>
      <Card style={{ width: "100%" }}>
        <Characteritem data={character} />
      </Card>
    </div>
  );
};

export default CharacterView;
