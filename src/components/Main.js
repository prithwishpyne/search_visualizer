export default function Main({ arr, message }) {
  return (
    <div className="content">
      <div className="heading">Search Algorithm Visualizer</div>
      {/* <div className="heading">SEARCH ALGORITHM VISUALIZER</div> */}
      <div className="message">{message}</div>
      <div className="boxes">
        {arr?.map((n, index) => (
          <Box key={index}>{n}</Box>
        ))}
      </div>
    </div>
  );
}

function Box({ children }) {
  return (
    <div data-key={children}>
      <p>{children}</p>
    </div>
  );
}
