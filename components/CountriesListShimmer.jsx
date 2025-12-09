import './CountriesListShimmer.css';

export default function CountriesListShimmer() {
    // const array = new Array(10).fill(0);

    // const mapped = Array.from({length: 10}).map((el, i) => {
    //     return <div key={i} className="country-card"></div>
    // });
    
  return (
    <div className="countries-container greylike">
        { Array.from({length: 20}).map((el, i) => {
        return <div key={i} className="country-card"></div>
    })}
    </div>
  )
}
