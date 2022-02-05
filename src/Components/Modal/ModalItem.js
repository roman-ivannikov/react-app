import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding-top: 80px;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const Content = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 43px;
`;

const HeaderContent = styled.div`
    font-family: 'Pacifico', cursive;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    padding 0 40px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{openItem.price.toLocaleString('ru-RU',
                        {style: 'currency', currency: 'RUB'})}</div>
                    </HeaderContent>
                    <ButtonCheckout onClick={addToOrder}>
                        Добавить
                    </ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )
};