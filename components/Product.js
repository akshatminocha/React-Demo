// import React, { Component } from 'react'
// import axios from 'axios'
// class ProductList extends Component {
// 	constructor(props) {
// 		super(props)
//
// 		this.state = {
//       products: [],
//       errorMsg: ''
// 		}
// 	}
//
// 	componentDidMount() {
// 		axios
// 			.get('https://app-store-play/admin/api/2020-01/products.json')
// 			.then(response => {
// 				console.log(response)
// 				this.setState({ products: response.data })
// 			})
// 			.catch(error => {
//         console.log(error)
//         this.setState({errorMsg: 'Error retrieving data'})
// 			})
// 	}
//
// 	render() {
// 		const { products, errorMsg } = this.state
// 		return (
// 			<div>
// 				List of products
// 				{products.length
// 					? products.map(product => <div key={product.ids}>{product.title}</div>)
//           : null}
//         {errorMsg ? <div>{errorMsg}</div> : null}
// 			</div>
// 		)
// 	}
// }
//
// export default ProductList






// import React from 'react';
// import ReactDOM from 'react-dom';


// import 'bootstrap/dist/css/bootstrap.css';
// import {
//   Row, Col, Card, CardBody, CardTitle, CardText, CardImg
// } from 'reactstrap';
//import './index.css'


// class ContentFeed extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       'items': []
//     }
//   }
//   componentDidMount() {
//     this.getItems();
//   }
//
//   getItems() {
//     fetch('/admin/api/2020-01/products.json')
//     .then(results => results.json())
//     .then(results => this.setState({'items': results}));
//   }
//   render() {
//     return (
//       <div>
//       <ul>
//         {this.state.items.map(function(products, index) {
//           // return <ContentItem item={vendor} key={index} />
//           return (
//             <div key={index}>
//               <h1>{products.id}</h1>
//               <p>{products.title}</p>
//             </div>
//           )
//         })}
//       </ul>
//       </div>
//     );
//   }
// }
// export default ContentFeed





// ReactDOM.render(
//   <ContentFeed />,
//   document.getElementById('root')
// );
