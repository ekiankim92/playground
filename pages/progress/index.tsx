import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const percentage = 100;

export default function Progress() {
  const progressCalc = () => {
    if (percentage <= 40) {
      return `rgba(246,190,0)`;
    } else if (percentage <= 80) {
      return "rgba(15, 10, 222)";
    } else if (percentage <= 100) {
      return "#FF0000";
    }
  };

  return (
    <div>
      <div>Progress bar</div>
      <div
        style={{
          width: 38,
          height: 38,
          background: "rgba(3, 37, 65)",
          borderRadius: "100%",
        }}
      >
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "32px",

            // How long animation takes to go from one percentage to another, in seconds
            // pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            // pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            // pathColor: `rbga(196, 77, 86, ${percentage / 100})`,
            pathColor: progressCalc(),
            textColor: "#fff",
            // trailColor: "#d6d6d6",
            // trailColor: "gray",
            // backgroundColor: "#3e98c7",
            // backgroundColor: "red",
          })}
        />
      </div>
    </div>
  );
}
