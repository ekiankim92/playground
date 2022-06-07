export default function TestingPgae() {
  const __html = require("../../html/perf.html");
  const Template = { __html: __html };
  //   const Templates = require("../../html/perf.html");

  return (
    <>
      <h3>This is the 3D Model Practice</h3>
      {/* <iframe src={template}></iframe> */}
      {/* <div dangersoulySetInnerHTML={template} /> */}
      {/* _html: <iframe src="./perf.html" /> */}
      <div dangerouslySetInnerHTML={{ __html: __html }}></div>
      <Template />
    </>
  );
}

// import React, { Component } from "react";
// import perf from "../../html/perf.html";

// const Header = React.Component({
//     const __html = require("../../html/perf.html");
//     const template = { __html: __html };
//     const Templates = require("../../html/perf.html");

//   render(
//   ) {
//     return (
//       <>
//         {/* <iframe src={"../../html/perf.html"}></iframe> */}
//         <div dangerouslySetInnerHTML={{ __html: __html }}></div>
//       </>
//     );
//   },
// });
// export default Header;
