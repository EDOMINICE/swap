import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
  --nav_back_color: #A5ACB6;
  --primary_text_color: #f0f0f1;
  --secondary_text_color:#959595;
  --hover_color: #c2c2c2;
  --tertiary_color: #e8f8ff;
  --background_color: linear-gradient(135deg, #000 ,#111);
  ;
}  


html {
    font-size: 64%;
  }

body {
    font-family: 'Inter',sans-serif;
    line-height: 1.2;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #252525;
  border-radius: 1rem;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #444;
  border-radius: 1rem;
}
::-webkit-scrollbar-track {
  background-color:transparent;
}

*,*::after,*::before,*:focus {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    outline: none;
    /* box-sizing: border-box; */
}

// .wallet-adapter-button.walletstyle {
//   background-color: #f00;
// }

.navLinks {
  font-size: 1.7rem;
  text-decoration: none;
  transition: all 0.3s;
  border-radius: 1.5rem;
  cursor: pointer;
  color: var(--primary_text_color);
   &:hover {
     color: var(--hover_color);
   }
}

.active {
  color: var(--hover_color);
}

@media (max-width: 1052px) {
    html {
      font-size: 60%;
    }
  }
@media (max-width: 968px) {
    html {
      font-size: 55.5%;
    }
  }
@media (max-width: 800px) {
    html {
      font-size: 45%;
    }
  }
@media (max-width: 850px) {
    html {
      font-size: 50%;
    }
  }
@media (max-width: 775px) {
    html {
      font-size: 48%;
    }
  }
@media (max-width: 697px) {
    html {
      font-size: 45%;
    }
  }
@media (max-width: 652px) {
    html {
      font-size: 40%;
    }
  }

// background-image: radial-gradient(100% 628.91% at 95.63% 10.42%,rgba(230,218,254,0) 0,#e6dafe 30.71%,#e6dafe 71.52%,rgba(230,218,254,0) 100%)

`;

export default GlobalStyle;
