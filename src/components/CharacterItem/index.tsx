const Characteritem = ({ data }) => {
  return (
    <>
      <p>
        <strong>Name:</strong> {data?.name}
      </p>
      <p>
        <strong>Hair Color:</strong> {data?.hair_color}
      </p>
      <p>
        <strong>Eye Color:</strong> {data?.eye_color}
      </p>
      <p>
        <strong>Gender:</strong> {data?.gender}
      </p>
      <p>
        <strong>Birth Year:</strong> {data?.birth_year}
      </p>
    </>
  );
};

export default Characteritem;
