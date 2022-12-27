import { Link } from 'react-router-dom';
import styles from './data-list.module.scss';

interface Item {
  title: string;
  url: string;
}

export interface DataListProps {
  items: Array<Item>;
}

export function DataList(props: DataListProps) {
  return (
    <ul className={styles.dataList}>
      {props.items.map((item) => {
        const splitUrl = item.url.split('/');
        const id = splitUrl[splitUrl.length - 2];

        return (
          <li key={id}>
            <Link className={styles.dataListItem} to={id}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default DataList;
