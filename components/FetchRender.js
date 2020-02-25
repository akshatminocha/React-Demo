import React from 'react';
import { render } from 'react-dom';

class FetchProduct extends React.Component {
  state = {
    loading: true,
    product: null
  };


  async componentDidMount() {
    const url = `/admin/api/2020-01/products.json`;
    const response = await fetch(url, {headers: { 'Accept': 'application/json'}});
    const data = await response.json();
    this.setState({product: data});
    this.setState({ loading: false});
  }

  render() {
    if (this.state.loading) {
      return (<div>loading...</div>);
    }

    if (!this.state.product) {
      return (<div>didn't get a product</div>);
    }

    return (
      //<div>
        // {this.state.loading || !this.state.product[0] ? (
        //   <div>loading...</div>
        // ) : (
        //   <div>
        //     <div>{this.state.product[0].vendor}</div>
        //   </div>
        // )}
      //<div>
      <div>
      {
        product.products.map((prod, i) => {
          return (
            <div key={prod.i}>
              <h4>{prod.title}</h4>
              <ul>
              {
                prod.variants.map((pr) => {
                  return (
                    <li>
                      {pr.title}
                    </li>
                  );
                })
              }
            </ul>
          </div>
        );
      })
    }
  </div>
        //      <div>{this.state.product.variants.price}</div>
        //<img src={this.state.person.picture.large} />
      //</div>
      //</div>
    );
  }
}
export default FetchProduct;
