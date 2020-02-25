// import React, { useState, useEffect} from "react";
// import axios from "axios";
//
// const Axios = () => {
//   const [users, setUsers] = useState([]);
//
//   useEffect(() => {
//     axios.get(`/admin/api/2020-01/products.json`).then(res => {
//       const users = res.data;
//       setUsers(users);
//     });
//   }, [])
//   return (
//     <div>
//       <ul>
//         {users.map(user => (
//           <li key{user.id}>
//             {user.vendor}, {user.title},{" "}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//
// export default Axios;






// import React, { Component } from 'react';
// import axios from 'axios';
//
// class Axios extends Component {
// 	constructor() {
// 		super()
//
// 		this.state = {
//       item: [],
//       errorMsg: ''
// 		}
// 	}
//
// 	componentDidMount() {
// 		axios
// 			.get('/admin/api/2020-01/products.json')
// 			.then(response => {
// 				console.log(response)
// 				this.setState({ item: response.data })
// 			})
// 			.catch(error => {
//         console.log(error)
//         this.setState({errorMsg: 'Error retrieving data'})
// 			})
// 	}
//
// 	render() {
// 		const { item, errorMsg } = this.state
// 		return (
// 			<div>
// 				List of Products
//
//         {item.length ? item.map((product, index) => {
//           return (
//             <div>
//               <h3>{product.products.id}</h3>
//               <p>{product.products.title}</p>
//             </div>
//           )
//         }): null }
// 			</div>
// 		)
// 	}
// };
//
// export default Axios





// {products.length
// 	? products.map(product => <div key={product.ids}>{product.title}</div>)
//   : null}
// {errorMsg ? <div>{errorMsg}</div> : null}
