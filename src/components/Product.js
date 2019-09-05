import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Navbar extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 nx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('You clicked me on the image container')}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-image-tap"/> 
                        </Link>

                    </div>
                </div>
            </ProductWrapper>         
        )
    }
} 

const ProductWrapper = styled.div`
`