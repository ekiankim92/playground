const JQueryPage = () => {
  if (typeof window !== "undefined") {
    const wrapper = document
      .getElementById("container")
      .addEventListener("click", function () {
        alert("testing div container");
      });
  }

  return (
    <div id="container">
      <div>JQuery Practice</div>
    </div>
  );
};
export default JQueryPage;
