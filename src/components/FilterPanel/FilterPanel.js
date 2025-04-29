import "./filterpanel.css";
import Select from "react-select";
import { useEffect, useState } from "react";

const sortOptions = [
  { value: "hightolow", label: "Price: High to Low" },
  { value: "lowtohigh", label: "Price: Low to High" }
];

const brandFilterOptions = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" }
];

const FilterPanel = ({ products, setProducts }) => {
  const [allProducts, setAllProducts] = useState(() => products);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filtered, setFiltered] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleReset = () => {
    console.log("handleReset" + allProducts);
    setProducts(allProducts);
    setSelectedOption(null);
  };

  useEffect(() => {
    const handleFilter = (option) => {
      if (option.value === "lowtohigh") {
        const filtered = [...products].sort((a, b) => {
          return a?.price?.value - b?.price?.value;
        });
        if(filtered.length){
          setFiltered(filtered);
        }
      } else if (option.value === "hightolow") {
        const filtered = [...products].sort((a, b) => {
          return b?.price?.value - a?.price?.value;
        });
        if(filtered.length){
          setFiltered(filtered);
        }
      }
      // } else if (
      //   option.value === "A" ||
      //   option.value === "B" ||
      //   option.value === "C" ||
      //   option.value === "D"
      // ) {
      //   const filtered = [...products].filter((product) => {
      //     console.log(product.brand === option.value);
      //     return product.brand === option.value;
      //   });
      //   setFiltered(filtered);
      // }
    };

    if (selectedOption) {
      handleFilter(selectedOption);
    }
  }, [selectedOption, setProducts]);

  useEffect(() => {
    if (filtered) {
      setProducts(filtered);
    }
  }, [filtered, setProducts]);

  return (
    <div className="filter-panel">
      <h2>Filter & Sort</h2>
      <div className="label">Sort By:</div>
      <Select onChange={handleChange} options={sortOptions} />
   {/* <div className="label">Filter by Brand:</div>
      <Select onChange={handleChange} options={brandFilterOptions} /> */}
      <div className="reset">
        <button onClick={handleReset}>Reset Filters</button>
      </div>
    </div>
  );
};

export default FilterPanel;
