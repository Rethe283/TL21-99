// import React, { Component } from 'react';
// import axios from 'axios';

// class PaymentData extends Component {
//     constructor(props){
//         super(props)
        
//         this.state ={
//             PeriodFrom: [],
//             PeriodTo: [],
//             OperatorOwes: [],
//             OperatorOwed: [],
//             Amount: []
//         }
//         this.timeHandler = this.timeHandler.bind(this)
//         this.clickHandler = this.clickHandler.bind(this)
//     }
//     componentDidMount() {
//         this.Loader();
//     }
//     async Loader() {
//         let res = await axios.get('http://localhost:9130/interoperability/api/settlement/OO/EG/20180101/20190404');
//         this.setState({
//             PeriodFrom: res.data[0].PeriodFrom,
//             PeriodTo: res.data[0].PeriodTo,
//             OperatorOwes: res.data[0].Financial_Settlement.substring(9,10),
//             OperatorOwed: res.data[0].Financial_Settlement.substring(26,27),
//             Amount: res.data[0].Financial_Settlement.substring(29)
//         })
//     }
//     render() {
//         return(
//             <div className="container-fluid">
//                 {this.state.render}
//             </div>
//         )
//     }
// }


// export default PaymentData;
import { Component } from 'react';
import axios from 'axios';

class PaymentData extends Component {
    constructor() {
        super();

        this.state={
            payment_card: null,
            length: null,
            render: null
        }
    }

    componentDidMount() {
        this.PaymentMethod();
    }

    replaceChar = (str, arr, char = '*') => {
        const replacedString = str.split("").map(word => {
           return arr.includes(word) ? word : char;
        }).join("");
        return replacedString;
    };

    async PaymentMethod() {

        try {
            let res = await axios.get('http://localhost:9130/interoperability/api/settlement/OO/EG/20180101/20190404');
            // console.log(res);
            this.setState({
                payment_card: res.data[0].payment_card,
                length: res.data[0].payment_card.length
            });

            var rows = [];
            for (var i = 0; i < this.state.length; i++) {
                for (var j = this.state.payment_card[i].number.length; j > 0; j--) {
                    if (this.state.payment_card[i].number.charAt(j) === '-')
                        break;
                }
                let stars = null;
                if (j === 0) {
                    stars = this.state.payment_card[i].number.slice(0, this.state.payment_card[i].number.length - 4);
                    stars = this.replaceChar(stars, ['-']);
                    stars = stars + this.state.payment_card[i].number.slice(this.state.payment_card[i].number.length - 4, this.state.payment_card[i].number.length);
                }
                else {
                    stars = this.state.payment_card[i].number.slice(0, j);
                    stars = this.replaceChar(stars, ['-']);
                    stars = stars + this.state.payment_card[i].number.slice(j, this.state.payment_card[i].number.length);
                }

                rows.push(
                    <div className="row justify-content-around align-items-center" key={i}>
                        <div className="payment">
                            <h3>Credit Card</h3>
                            <p>Card Number: {stars}</p>
                            <p>Valid Through: {this.state.payment_card[i].exp_date.slice(0, 2)}/20{this.state.payment_card[i].exp_date.slice(3)}</p>
                            <span>Owner: {this.state.payment_card[i].owner}</span>
                        </div>
                    </div>
                );
            }
            this.setState({
                render: rows
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>

                <div className="container-fluid">
                    {this.state.render}
                </div>

                <br/>
            </div>
        );
    }
}

export default PaymentData;