import img from "../web-assets/assets/img/bg-showcase-3.jpg"
const Sixth_Component = () => {
    return (
        <div style={{
            border: "10px solid rgb(255, 255, 255)",
            backgroundColor: "rgb(255, 255, 255)",
            padding: "20px",
            boxSizing: "border-box",
            maxWidth: "100%",
            margin: "0 auto"
        }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                <div style={{
                    flex: 1,
                    paddingRight: "20px",
                    paddingBottom: "20px"
                }}>
                    <h3 style={{ marginBottom: '1em' }}>Fully Responsive</h3>
                    <p style={{ margin: '0' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, <br />deleniti officia qui veritatis deserunt distinctio nostrum eos nemo.<br /> Dolorum iusto repudiandae?</p>
                </div>
                <img style={{
                    width: '100%',
                    height: '200px',
                    maxWidth: '600px',
                    display: 'block'
                }} src={img} alt="Description" />
            </div>
        </div>
        
    );
};

export { Sixth_Component};