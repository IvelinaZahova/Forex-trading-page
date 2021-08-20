import { Component } from 'react';
//import { data } from '../../local-json/currencies.json'
//import styles from './index.module.css';

class Currency extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currency:[]
        }
    }

    getData = async () => {
        const promise = await fetch('../currencies.json')
        const data = await promise.json()
        this.setState ({
            data
        })
    }

    // renderCurrency() {
    //     const { currency } = this.state

    //     return currency.map(curr => {
    //         return (
    //             <tr className={styles.td} key={curr._id}> 
    //                 <td>{curr.base}</td>
    //                 <td></td>
    //             </tr>
    //         )
    //     })
    // }

    componentDidMount() {
        this.getData()
    }

    render () {
        console.log(this.state.data);
        const { currency } = this.state

        return (
           //{this.renderCurrency()}
           <div>
            {
                currency.map(curr => {
                    console.log(curr.base);
                    return (
                        <div key={curr._id}>
                            {curr.base}
                        </div>
                        // <tr className={styles.td} key={curr._id}> 
                        // <td>{curr.base}</td>
                        // <td></td>
                        // </tr>
                    )
                })
            }
            </div>
        )
    }

}

export default Currency

// class Currency extends Component {

//     getCurrency () {
//         fetch('currencies.json'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }).then(function(response){
//         console.log(response)
//         return response.json();
//       }).then(function(myJson) {
//         console.log(myJson);
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])
//   return (
//     <div className="App">
//      {
//        data && data.length>0 && data.map((item)=><p>{item.about}</p>)
//      }
//     </div>
//   );
// }

// export default Currency

// exports const Currency = ({firtsCurr, secondCurr, price}) => {

//     return (
//         <tr >
//             <td className={styles.td}>
//                 {currencies.map((data, key) => {
//                     firtsCurr = data.base
//                     secondCurr = data.rates
//                     return ( 
//                         { 
//                         firtsCurr + secondCurr}
//                 })}

//             </td>
//             </tr>
//     )
// }

// export default Currency;