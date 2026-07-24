import { useState } from "react";

function CurrencyConvertor() {

    const [rupees, setRupees] = useState("");
    const [currency, setCurrency] = useState("");

    const handleSubmit = () => {

        const euro = (Number(rupees) / 90).toFixed(2);

        alert(
            `Converting to Euro Amount is ${euro}`
        );
    };

    return (

        <div>

            <h1 style={{ color: "green" }}>
                Currency Convertor!!!
            </h1>

            <label>Amount</label>

            <br />

            <input
                type="number"
                value={rupees}
                onChange={(e) =>
                    setRupees(e.target.value)
                }
            />

            <br /><br />

            <label>Currency</label>

            <br />

            <input
                value={currency}
                onChange={(e) =>
                    setCurrency(e.target.value)
                }
            />

            <br /><br />

            <button onClick={handleSubmit}>
                Submit
            </button>

        </div>

    );

}

export default CurrencyConvertor;