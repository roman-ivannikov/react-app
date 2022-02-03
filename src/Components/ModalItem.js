import React from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 43px;
`;

const Info = styled.div`
    font-family: 'Pacifico', sans-serif;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    padding 0 40px;
`;

const Button = styled.button`
    width: 250px;
    height: 65px;
    background-color: #299B01;
    border-color: transparent;
    color: white;
    font-size: 21px;
    align-self: center;
`

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if (!openItem) return null;
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Wrapper>
                    <Info>
                        <p>{openItem.name}</p>
                        <p>{openItem.price.toLocaleString('ru-RU',
                        {style: 'currency', currency: 'RUB'})}</p>
                    </Info>
                    <Button>
                        Добавить
                    </Button>
                </Wrapper>
            </Modal>
        </Overlay>
    )
};