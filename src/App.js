import * as React from "react";
import "./App.css";

const arr = [
  "continuous_sneezing",
  "shivering",
  "chills",
  "watering_from_eyes",
  "itching_of_eyes",
  "itching_of_nose",
  "itching_of_skin",
  "fatigue",
  "cough",
  "high_fever",
  "breathlessness",
  "family_history",
  "mucoid_sputum",
  "skin_rash",
  "lethargy",
  "headache",
  "loss_of_appetite",
  "mild_fever",
  "malaise",
  "red_spots_over_body",
  "phlegm",
  "throat_irritation",
  "redness_of_eyes",
  "sinus_pressure",
  "runny_nose",
  "congestion",
  "chest_pain",
  "loss_of_smell",
  "muscle_pain",
  "joint_pain",
  "vomiting",
  "nausea",
  "pain_behind_the_eyes",
  "weight_loss",
  "restlessness",
  "irregular_sugar_levels",
  "blurred_and_distorted_vision",
  "obesity",
  "excessive_hunger",
  "increased_appetite",
  "excessive_thirst",
  "excessive_urination",
  "dizziness",
  "loss_of_balance",
  "lack_of_concentration",
  "weight_gain",
  "anxiety",
  "cold_hands_and_feet",
  "mood_swings",
  "sweating",
  "fast_heart_rate",
  "puffy_face_and_eyes",
  "enlarged_thyroid",
  "brittle_nails",
  "swollen_extremities",
  "muscle_weakness",
  "depression",
  "irritability",
  "abnormal_menstruation",
  "yellowish_skin",
  "abdominal_pain",
  "diarhoea",
  "acidity",
  "indigestion",
  "stiff_neck",
  "visual_disturbances",
  "passage_of_gases",
  "internal_itching",
  "burning_sensation",
  "constipation",
  "belly_pain",
  "offensive_sweat",
  "confusion",
  "rapid_breathing",
  "shallow_breathing",
  "slow_heart_rate",
  "clammy_skin",
  "feeling_sad",
  "loss_of_interest",
  "sleep_disturbances",
  "reduced_appetite",
  "increased_cravings",
  "shower_thinking",
  "self_blame",
  "suicidal_thoughts",
  "dry_mouth",
  "having_dark_coloured_urine",
  "sunken_eyes_cheek",
  "dry_skin",
  "blood_in_stool",
  "mucus_in_stool",
  "vertigo",
  "light_headedness",
  "excessive_sleepiness",
  "decreased_urination",
  "sudden_unusual_headaches",
];

const App = () => {
  const [data, setData] = React.useState([]);
  const [start, setStart] = React.useState(0);
  const [enableSubmit, setEnableSubmit] = React.useState(false);

  const onClickRadio = (event, i) => {
    const newArray = [...data];
    const index = arr.indexOf(i);
    newArray[index] = event.target.value;
    setData(newArray);
    console.log(newArray);
  };

  const onClickBtn = () => {
    if (start === 90) {
      setEnableSubmit(true);
    }
    setStart(start + 5);
  };

  const onClickSubmit=(event)=>{
    event.preventDefault();
    console.log('hi');
    console.log(event);
    console.log(data);
  }

  const getSymptoms = () => {
    const ar = arr.slice(start, start + 5);
    return ar.map((i) => {
      return (
        <div className="radio-con" key={i}>
          <p className="input-para">{`${i}:`}</p>
          <div className="input-values">
            <input
              type="radio"
              name={i}
              id={`${i}Yes`}
              className="radio1"
              value="Yes"
              required={true}
              onClick={(e) => onClickRadio(e, i)}
            />
            <label htmlFor={`${i}Yes`} className="input-val">
              Yes
            </label>
            <input
              type="radio"
              name={i}
              id={`${i}No`}
              required={true}
              className="radio1"
              value="No"
              onClick={(e) => onClickRadio(e, i)}
            />
            <label htmlFor={`${i}No`} className="input-val">
              No
            </label>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="main-con">
      <h1>Disease Prediction Application</h1>
      <div className="con">
        <div className="inputs-card">
          {getSymptoms()}
          {!enableSubmit ? (
            <button onClick={onClickBtn} className="btn">
              Next
            </button>
          ) : (
            <button onClick={onClickSubmit} className="btn btn2">
              Submit
            </button>
          )}
        </div>
        <div className="cards-con">
          <div className="card1">One Card</div>
          <div className="card2">Second Card</div>
        </div>
      </div>
    </div>
  );
};

export default App;