import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { Overlay } from '../Style/Popup';
import { Context, ContextItem } from '../Functions/context';

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
    padding 0 40px 43px;
`;

const HeaderContent = styled.div`
    font-family: 'Pacifico', cursive;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    padding 0 40px;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = () => {

    const { orders: { orders, setOrders } } = useContext(Context);
    const { openItem: { openItem, setOpenItem }} = useContext(Context);

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return (
        <ContextItem.Provider value={{
            counter,
            toppings,
            choices
        }}>
            <Overlay id="overlay" onClick={closeModal}>
                <Modal>
                    <Banner img={openItem.img}/>
                    <Content>
                        <HeaderContent>
                            <div>{openItem.name}</div>
                            <div>{formatCurrency(openItem.price)}</div>
                        </HeaderContent>
                        <CountItem/>
                        {openItem.toppings && <Toppings/>}
                        {openItem.choices && <Choices/>}
                        <TotalPriceItem>
                            <span>????????:</span>
                            <span>{formatCurrency(totalPriceItems(order))}</span>
                        </TotalPriceItem>
                        <ButtonCheckout
                            onClick={isEdit ? editOrder : addToOrder}
                            disabled={order.choices && !order.choice}>
                            {isEdit ? '??????????????????????????' : '????????????????'}
                        </ButtonCheckout>
                    </Content>
                </Modal>
            </Overlay>
        </ContextItem.Provider>
    )
};