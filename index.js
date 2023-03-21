const Box = (props) => {
  //  Write your code here.
  {text,className} = props
  return (
  <div className={className}>
  <p>{text}</p>
  </div>
  )
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="head">Boxes</h1>
    <div className="box-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>

  </div>
);

ReactDOM.render(element, document.getElementById("root"));
