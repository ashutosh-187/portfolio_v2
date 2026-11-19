import React from 'react';
import styled from 'styled-components';

const CustomButton = ({ buttonLabel = "BUTTON", onClick }) => {
    return (
        <StyledWrapper>
            <button onClick={onClick}>
                <span>{buttonLabel}</span>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    button {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0;
            background: #1c1c17;
            font-family: var(--body-font);
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            cursor: pointer;
            border: none;
        }

    button:after {
        content: " ";
        width: 0%;
        height: 100%;
        background: #E5E2DB;
        position: absolute;
        transition: all 0.4s ease-in-out;
        right: 0;
    }

    button:hover::after {
        right: auto;
        left: 0;
        width: 100%;
    }

    /* Mobile (max-width: 767px): 44px minimum touch target */
    @media (max-width: 767px) {
        button span {
            padding-top: 14px;
            padding-bottom: 14px;
        }
    }

    button:active {
        transform: scale(0.94);
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
        transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    }

    button span {
        text-align: center;
        text-decoration: none;
        width: 100%;
        padding: 10px 18px;
        color: #f4f1e9;
        font-size: 0.875em;
        font-weight: 700;
        letter-spacing: 0.3em;
        z-index: 20;
        transition: all 0.3s ease-in-out;
    }

    button:hover span {
        color: #1c1c17;
        animation: scaleUp 0.3s ease-in-out;
    }

    @keyframes scaleUp {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(0.95);
        }

        100% {
            transform: scale(1);
        }
    }`;

export default CustomButton;