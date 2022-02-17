import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';
import { Preloader } from './Preloader';
import { Context } from '../Functions/context';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`

const SectionPreloader = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

export const Menu = () => {
    const { openItem: { setOpenItem }} = useContext(Context);
    
    const res = useFetch();
    const dbMenu = res.response;

    return (
        <MenuStyled>
        <Banner/>
        { res.response ?
        <>
            <SectionMenu>
                <h2>Бургеры</h2>
                <ListItem 
                    itemList={dbMenu.burger}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
            <SectionMenu>
                <h2>Закуски / Напитки</h2>
                <ListItem 
                    itemList={dbMenu.other}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
        </> : 
        <SectionPreloader>
            {
            res.error ?
            <div>Извините, произошла непредвиденная ошибка...</div> :
            <>
                <span>Получение данных с сервера, ждите...</span>
                <Preloader />
            </>
            }
        </SectionPreloader>
        }
    </MenuStyled>
    )
};