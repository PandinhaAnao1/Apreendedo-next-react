import './styles.css';
export const TextInput = ({ searchValue, handleChange }) => {

    return (
        <div className='search-container'>
            {!!searchValue
                && (
                    <h1>Search Value: {searchValue}</h1>
                )
            }
            <input
                className='text-input'
                type='search'
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    );
}
