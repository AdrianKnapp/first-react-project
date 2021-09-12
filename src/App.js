import React from 'react';
import Button from './Button';
import Product from './Product';

const App = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function buttonClick(event) {
    const productType = event.currentTarget.dataset.product; 
    const urlToFetch = `https://ranekapi.origamid.dev/json/api/produto/${productType}`;
    
    const localStorageProduct = JSON.parse(localStorage.getItem(productType));
    
    setLoading(true);
    if(localStorageProduct) {
      setData(localStorageProduct);
      setLoading(false);
    } else {
      fetchData(urlToFetch);
    }
  }

  async function fetchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    
    setData(json);
    localStorage.setItem(json.id, JSON.stringify(json));
    setLoading(false);
  }

  return (
    <>
      <section id="buttons-group">
        <Button data-product="notebook" onClick={buttonClick}>
          Notebook
        </Button>
        <Button data-product="smartphone" onClick={buttonClick}>
          Smartphone
        </Button>
        <Button data-product="tablet" onClick={buttonClick}>
          Tablet
        </Button>
      </section>

      <section id="products">
        {loading && <p>Carregando...</p>}
        {!loading && data && <Product data={data} />}
        {!loading && !data && <p>Nenhum produto encontrado.</p>}
      </section>
    </>
  )
};

export default App;
