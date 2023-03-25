import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import classNames from 'classnames/bind';


const styleNames = classNames.bind(styles);
<div className={styles.sortName} id="sort">Сортировка</div>
export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
	return (
		<div className={styleNames(styles.sort, className)} {...props}>
			<button
				id="rating"
				onClick={() => setSort(SortEnum.Rating)}
				className={styleNames({
					[styles.active]: sort == SortEnum.Rating
				})}
				area-selected={sort == SortEnum.Rating}
				area-labelledby="sort rating"
			>
				<SortIcon className={styles.sortIcon} /> По рейтингу
			</button>
			<button
				id="price"
				onClick={() => setSort(SortEnum.Price)}
				className={styleNames({
					[styles.active]: sort == SortEnum.Price
				})}
				area-selected={sort == SortEnum.Price}
				area-labelledby="sort price"
			>
				<SortIcon className={styles.sortIcon} /> По цене
			</button>
		</div>
	);
};