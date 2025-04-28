import React from "react";
import styled from "styled-components";
import { ThemeType } from "./theme";

type ThemeToggleProps = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0;
  padding: 0.5rem;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.accent};
  }

  &:focus {
    outline: none;
  }
`;

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isDark = theme.body === "#0f172a";

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle dark mode">
      {isDark ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            fill="currentColor"
          />
          <path
            d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9548 13.4587C21.5414 13.5499 21.1148 13.5975 20.6784 13.5975C16.6089 13.5975 13.3114 10.3 13.3114 6.23051C13.3114 4.57956 13.8464 3.05479 14.7594 1.81677C14.9292 1.58749 14.8404 1.27054 14.5816 1.14362C13.2671 0.437705 11.7539 0.0382395 10.1501 0.0382395C4.5121 0.0382395 0 4.55034 0 10.1883C0 15.8263 4.5121 20.3384 10.1501 20.3384C15.1612 20.3384 19.3225 16.7255 20.156 11.9518C20.215 11.5841 20.1582 11.2094 19.9752 10.8882C19.7923 10.5669 19.4938 10.3191 19.1393 10.1883C20.2495 11.4467 21.291 12.0687 21.9548 13.4587Z"
            fill="currentColor"
          />
        </svg>
      )}
    </ToggleButton>
  );
};

export default ThemeToggle;
