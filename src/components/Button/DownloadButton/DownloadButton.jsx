import React from "react";
import styled from "styled-components";

const DownloadButton = ({ buttonLabel = "DOWNLOAD" }) => {
    return (
        <StyledWrapper>
            <a href="/resume.pdf" download="Ashutosh_Tiwari_Resume.pdf">
                <span>{buttonLabel}</span>

                <svg
                    className="download-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 3v12" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M5 21h14" />
                </svg>
            </a>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #1c1c17;
    font-family: var(--body-font);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    cursor: pointer;
    border: none;
    text-decoration: none;
  }

  a::after {
    content: "";
    width: 0%;
    height: 100%;
    background: #e5e2db;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.4s ease-in-out;
  }

  a:hover::after {
    left: 0;
    right: auto;
    width: 100%;
  }

  a:active {
    transform: scale(0.94);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s ease-in-out,
      box-shadow 0.1s ease-in-out;
  }

  a span {
    padding: 10px 0 10px 18px;
    color: #f4f1e9;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.3em;
    z-index: 2;
    transition: all 0.3s ease-in-out;
  }

  a:hover span {
    color: #1c1c17;
    animation: scaleUp 0.3s ease-in-out;
  }

  .download-icon {
    width: 15px;
    height: 15px;
    color: #f4f1e9;
    margin-right: 18px;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    animation: bounceDown 1.5s ease-in-out infinite;
  }

  a:hover .download-icon {
    color: #1c1c17;
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
  }

  @keyframes bounceDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default DownloadButton;