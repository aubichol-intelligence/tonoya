"use client";

const BackToTop = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div>
            <button
                onClick={scrollToTop}
                style={{
                    background: "#ffcc00",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                    transition: "background 0.3s",
                    // justifySelf: "right",
                }}
                onMouseOver={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = "#e6b800";
                }}
                onMouseOut={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = "#ffcc00";
                }}
            >
                Back to Top
            </button>
        </div>
    );
};
export default BackToTop;