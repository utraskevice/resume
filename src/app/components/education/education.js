function Education({ schoolName, schoolYear, degree }) {
  return (
    <div>
      <p>
        <span>{schoolName}</span> <br />
        {schoolYear}
        <br />
        {degree}
      </p>
    </div>
  );
}

export default Education;
