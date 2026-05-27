import React from "react";
import Student from "./Student";

function App() {
  return (
    <div style={styles.container}>
      <h2>Student Information</h2>

      <Student name="Rahul Sharma" course="Computer Science" marks={85} />
      <Student name="Anita Verma" course="Information Technology" marks={92} />
      <Student name="Rohan Gupta" course="Electronics" marks={78} />
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #000",
    textAlign: "center",
  },
};

export default App;