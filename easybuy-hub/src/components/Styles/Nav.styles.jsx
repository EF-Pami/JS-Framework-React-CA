import styled from "styled-components";

export const StyledNav = styled.nav`
    font-family: 'Inter', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: ${({theme}) => theme.colors.white};
    margin-bottom: 20px;
    
    .container {
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        align-items:center;
        position: relative;
    }

    .logo img {
        width:250px;
        max-width: 100%;
        height: auto;
    }

    .menu {
        display: none; 
    }

    .nav-elements ul {
        display: flex;
        align-items: center;
        gap: 2rem;
        justify-content: space-between;
        list-style-type: none;
    }

    .nav-elements ul li {
        margin: 0 1rem;
    }



    .nav-elements ul a {
        font-size: 32px;
        font-weight: bold;
        text-decoration: none;
        color: ${({theme}) => theme.colors.black};
    }

    .nav-element ul a.active {
        color: ${({theme}) => theme.colors.black};
        position: relative;
    }

    .nav-element ul a.active::after {
        content: '';
        position:absolute;
        bottom: -5px;
        left: 0;
        width:100%;
        height: 2px;
        background-color: ${({theme}) => theme.colors.black};
    }



    @media (max-width 768px) {
        
    }

    @media (max-width: 600px) {
        .menu {
            display: block;
            cursor: pointer;
            top: 40px;
        }

        .nav-elements {
            display: none;
            position: absolute;
            right: 0;
            padding: 0px;
            top: 100%;
            background-color: ${({theme}) => theme.colors.white};
            width: 100%;
            height: 300px;
            
        }

        .nav-elements.active {
            display: flex;
        }

        .nav-elements ul {
            flex-direction: column;
            width: 100%;
        }

        .nav-elements ul li {
            margin: 0.5rem 0;
            text-align: center;
            
        }
    }
}

`;