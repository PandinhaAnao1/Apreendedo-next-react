import './styles.css';
export const TextInput = ({ searchValue, handleChange }) => {

    return (
        <div class='search-container'>
            {!!searchValue
                && (
                    <h1>Search Value: {searchValue}</h1>
                )
            }
            <input
                class='text-input'
                type='search'
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    );
}
