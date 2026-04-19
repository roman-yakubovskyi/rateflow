import styles from './RatesList.module.css';

type Rate = {
  key: string;
  value: number;
};

type Props = {
  rates: Rate[];
};

export default function RatesList({ rates }: Props) {
  return (
    <ul className={styles.list}>
      {rates.map(({ key, value }) => (
        <li className={styles.item} key={key}>
          <p className={styles.text}>
            1 {key} = {value.toFixed(2)}
          </p>
        </li>
      ))}
    </ul>
  );
}
