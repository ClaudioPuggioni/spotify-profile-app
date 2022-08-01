import "./styles.css";
import ErrorPopUp from "../../organisms/ErrorPopUp/ErrorPopUp";

export default function Test() {
  return (
    <div id="testContainer">
      <ErrorPopUp message="Test Message!"></ErrorPopUp>
    </div>
  );
}
