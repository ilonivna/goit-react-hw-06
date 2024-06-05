import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from "./SerachBox.module.css"

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    const handleFilter = (e) => {
        const name = e.target.value.trim();
        dispatch(setStatusFilter(name));
    }


    return (
        <div className={css.searchBox}>
            <p>Find contacts by name</p>
            <input className={css.input} type="text"
                value={filter}
                onChange={handleFilter}
            id="searchBox"/>
            <button className={css.btn} type="button">Find</button>
        </div>
    )
}