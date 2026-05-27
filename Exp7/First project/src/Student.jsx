import React from "react";

function Student(props) {
  return (
    <div style={styles.card}>
      <h3>{props.name}</h3>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#f2f2f2",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
};

export default Student;