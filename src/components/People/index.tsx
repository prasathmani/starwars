import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import {
  getAllPeopleAction,
  searchPeopleAction,
} from "../../actions/starWars";
import Search from "../Search";
import { getCharacterId } from "../../common/utils";

const People = () => {
  const authInfo = useSelector((state: RootState) => state.starWars);
  const dispatch = useDispatch();
  const history = useHistory();
  const { people } = authInfo;

  const handleChange = (no) => {
    dispatch(getAllPeopleAction(no));
  };

  useEffect(() => {
    dispatch(getAllPeopleAction(1));
  }, []); // eslint-disable-line

  const handleSearch = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const query = formData.get("query");
    dispatch(searchPeopleAction(query));
  };

  const handlePeople = (url) => {
    const id = getCharacterId(url);
    history.push(`/character/${id}`);
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <div className="flex flex-wrap mt-7">
        {people.results?.map((item) => (
          <Card
            hoverable
            title={item?.name}
            style={{ width: 280 }}
            key={item.name}
            className="m-2"
            onClick={() => handlePeople(item.url)}
          >
            <p>Gender: {item?.gender}</p>
            <p>Birth year: {item?.birth_year}</p>
            <p>Height: {item?.height}</p>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <Pagination onChange={handleChange} total={people?.count} />
      </div>
    </>
  );
};

export default People;
