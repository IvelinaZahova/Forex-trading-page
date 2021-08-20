import styles from './index.module.css';

const Currency = ({firtsCurr, secondCurr}) => {

    return (
        <tr >
            <td className={styles.td}>
               {firtsCurr}{secondCurr}
            </td>
            </tr>
    )
}

export default Currency;