import React from 'react';
import styled from 'styled-components';
import trashImage from '../../images/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemWrapper = styled.div`
    display: flex;
    width: calc(100% - 30px);
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    & > span {
        flex-grow: 1;
        flex-shrink: 0;
        overflow: hidden;
    }
`;

const ItemName = styled.span`
    flex-basis: 60%;
    max-width: 60%;
    &:hover {
        cursor: pointer;
    }
`;

const ItemCount = styled.span`
    flex-basis: 8%;
    max-width: 8%;
    font-size: .9em;
`;

const ItemPrice = styled.span`
    flex-basis: 32%;
    max-width: 32%;
    text-align: right;
    padding-left: 5px;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    margin-left: auto;
`;

const ToppingsList = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {

    const topping = order.topping ? order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ') : '';
    
    return (
        <OrderItemStyled>
            <ItemWrapper>
                <ItemName onClick={()=>setOpenItem({...order, index})}>
                    {order.name} {order.choice}
                </ItemName>
                <ItemCount>{order.count}</ItemCount>
                <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
                {topping && <ToppingsList>Допы: {topping}</ToppingsList>}
            </ItemWrapper>
            <TrashButton
                onClick={()=>deleteItem(index)}
            />
        </OrderItemStyled>
    );
}