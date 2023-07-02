import styled from "@emotion/styled";

const ReportTemplate = () => {
  const styles = {
    page: {
      marginLeft: "0.5 rem",
      marginRight: "0.5 rem",
      "page-break-after": "always",
    },

    columnLayout: {
      display: "flex",
      justifyContent: "space-between",
      margin: "3rem 0 5rem 0",
      gap: "2rem",
    },

    column: {
      display: "flex",
      flexDirection: "column",
    },

    spacer2: {
      height: "2rem",
    },

    fullWidth: {
      width: "100%",
    },

    marginb0: {
      marginBottom: 0,
    },
  };
  return (
    <>
      <div style={styles.page}>
        <Wrapper>
          <h1>Report Heading That Spans More Than Just One Line</h1>
        </Wrapper>

        <div style={styles.spacer2}></div>

        <img src="/cage.png" style={{ width: 120, height: 100 }} />
      </div>

      <div style={styles.page}>
        <div>
          <h2>Report Heading That Spans More Than Just One Line</h2>
        </div>

        <div style={styles.columnLayout}>
          <div>
            <img style={styles.fullWidth} src="/doctor.jpg" />
            <h4 style={styles.marginb0}>Subtitle One</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <img style={styles.fullWidth} src="dog2.jpg" />
            <h4 style={styles.marginb0}>Subtitle Two</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div style={styles.columnLayout}>
          <div>
            <img style={styles.fullWidth} src="toy1.png" />
            <h4 style={styles.marginb0}>Subtitle One</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <img style={styles.fullWidth} src="toy2.png" />
            <h4 style={styles.marginb0}>Subtitle Two</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportTemplate;

const Wrapper = styled.div`
  width: 120px;
  height: 200px;
`;
