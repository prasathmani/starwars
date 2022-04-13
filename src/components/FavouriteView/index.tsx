import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "antd";
import { RootState } from "../../reducers";
import { UNSET_FAVOURITE } from "../../actions/types";
import Characteritem from "../CharacterItem";

const FavouriteView = () => {
  const rootState = useSelector((state: RootState) => state.starWars);
  const dispatch = useDispatch();
  const { fav } = rootState;

  const handleFavourite = (name) => {
    dispatch({
      type: UNSET_FAVOURITE,
      payload: name,
    });
  };

  return (
    <div>
      <div className="flex justify-end mb-3"></div>
      {fav?.map((item) => (
        <Card style={{ width: "100%" }}>
          <div className="flex justify-between">
            <div>
              <Characteritem data={item} />
            </div>
            <Button
              danger
              type="dashed"
              onClick={() => handleFavourite(item.name)}
            >
              ☆ Remove Favourite
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FavouriteView;
