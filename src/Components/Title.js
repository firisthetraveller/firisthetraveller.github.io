function Title(props) {
  const { order, children } = props;

  if (order === 1) {
    return (
      <h1>{children}</h1>
    );
  }

  if (order === 2) {
    return (
      <h2>{children}</h2>
    );
  }

  if (order === undefined) {
    return (
      <h3>{children}</h3>
    );
  }
}

export default Title;
