import "./shows.css";

export default function ShowSelection({
  shows,
  selectedShow,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          className={"show" + (show === selectedShow ? " selected" : "")}
          key={show.name}
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
