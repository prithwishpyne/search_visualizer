import Button from "./Button";

export default function NavBar({
  onGenerate,
  onLinearSearch,
  onBinarySearch,
  arr,
  isVisualizing,
  message,
}) {
  return (
    <div className="navbar">
      <Button onClick={onGenerate} disabled={isVisualizing}>
        Generate New Array
      </Button>

      <div className="divider">
        <Button
          onClick={onLinearSearch}
          disabled={
            (arr.length === 0) |
            (message !== "Select an Algorithm to visualize")
          }
        >
          Linear Search
        </Button>
        <Button
          onClick={onBinarySearch}
          disabled={
            (arr.length === 0) |
            (message !== "Select an Algorithm to visualize")
          }
        >
          Binary Search
        </Button>
      </div>
    </div>
  );
}
