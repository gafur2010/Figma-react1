function Header() {
  return (
    <div
      style={{
        width: "1069",
        height: "60px",
        top: "30px",
        left: "184",
        gap: "0px",
        opacity: "0px,",
        padding: "80px",
        display: "flex",
      }}
    >
      <img
        src="src/img/Logo Color.png"
        alt=""
        width={170}
        height={30}
        style={{ marginLeft: "250px", marginRight: "20px" }}
      />
      <div
        style={{
          display: "flex",
          gap: "40px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h6
          style={{
            fontFamily: "DM Sans",
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "19.53px",
            letterSpacing: "-0.4689474105834961px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            margin: "auto",
          }}
        >
          Home
        </h6>
        <h6
          style={{
            fontFamily: "DM Sans",
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "19.53px",
            letterSpacing: "-0.4689474105834961px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            margin: "auto",
          }}
        >
          Features
        </h6>
        <h6
          style={{
            fontFamily: "DM Sans",
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "19.53px",
            letterSpacing: "-0.4689474105834961px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            margin: "auto",
          }}
        >
          Pricing
        </h6>
        <h6
          style={{
            fontFamily: "DM Sans",
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "19.53px",
            letterSpacing: "-0.4689474105834961px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            margin: "auto",
          }}
        >
          Blog
        </h6>
      </div>
      <button
        style={{
          width: "200px",
          height: "40px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#FF7143",
        }}
        className="btn"
      >
        Get start
      </button>
    </div>
  );
}

export default Header;
