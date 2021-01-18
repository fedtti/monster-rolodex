import * as React from 'react';
import './search-box.scss';

interface Props {
  handleChange: (event: React.ChangeEvent <HTMLInputElement>) => void,
  placeholder: string
}

const SearchBox: React.FunctionComponent <Props> = ({ handleChange, placeholder }) => {
  return (
    <div>
      <input className="search" onChange={handleChange} placeholder={placeholder} type="search" />
    </div>
  );
};
export default SearchBox;