import styles from './index.module.css'
import Currency from '../currency';

const Currencies = () => {
    return (
        <table className={styles.currencies}>
            <tr>
                <th> Name:</th>
                <th> Price:</th>
            </tr>
            <Currency firtsCurr="EUR" secondCurr="AUD" />
            <Currency firtsCurr="EUR" secondCurr="BGN" />
            <Currency firtsCurr="EUR" secondCurr="GBP" />
            <Currency firtsCurr="EUR" secondCurr="USD" />
            <Currency firtsCurr="EUR" secondCurr="UYU" />
            <Currency firtsCurr="EUR" secondCurr="UZS" />
            <Currency firtsCurr="EUR" secondCurr="VEF" />
            
        </table>
    )
}

export default Currencies;