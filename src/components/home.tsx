import { Redirect } from "./Redirect";

export const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <h1>HCF 2024</h1>
                <h3>UC San Diego Honors Career Fair</h3>
                <h2>Qualcomm Room, Jacobs Hall</h2>
                <h2>Monday, 18th November, 1-5 pm, 2024</h2>
                <div className="regButton">
                <Redirect 
                url="https://docs.google.com/forms/d/e/1FAIpQLSfba2J5J1q-9A-s53gr0Bnf4NQ_Qi_UL2PNPz6nXywxh0PkVg/viewform?usp=sf_link" 
                text= "Student Registration"/>
                </div>
            </div>
        </div>
    );
};