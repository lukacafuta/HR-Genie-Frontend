import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
        
    :root {
        height: 100vh;
        width: 100vw;
    
        --brand-color: #7747CA;
        --light-brand-color: #B2A7FF;
        --transparent-brand-color: #7747CABF;
        --light-grey: #D0D0DA;
        --dark-grey: #8B8B93;
        --black: #07070C;
        --white: #F1F1F1;
        --background-color: #EAEAF4;
        --red-button-color: #E23738;
        --green-button-color: #50D1B2;
        --orange-calendar-item: #EC8C56;
        --green-calendar-item: #50D1B2;
        --blue-calendar-item: #2775FF;
        --border-radius-small: 4px;
        --border-radius-medium: 8px;
        --border-radius-large: 12px;
        --border-style: 1px solid #C6CBD9;
        --font-family: 'Poppins', sans-serif;
        --inputs-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }

    body {
        font-family: var(--font-family);
        font-size: 14px; /* Body Text Regular 14 */
        background-color: var(--background-color);

    }

    h1 {
        font-size: 32px; /* Company Name - Extra Bold 32 */
        font-weight: 800;
    }

    h2 {
        font-size: 28px; /* Screen Title / Popup Title - Bold 28 */
        font-weight: 700;
    }

    h3 {
        font-size: 16px; /* Card Title - Semibold 16 */
        font-weight: 600;
    }

    label {
        font-size: 16px; /* Labels - Medium 16 */
        font-weight: 500;
    }

    button {
        font-size: 14px; /* Button Text / Navigation - Semibold 14 */
        font-weight: 600;
        padding: 18px 24px; /* General Button Padding */
    }

    .narrow-button {
        padding: 8px 24px; /* Narrow Button Padding */
    }

    input::placeholder {
        color: var(--dark-grey); /* Placeholder - Dark Grey */
    }
    
    input, select, .dropdown {
    box-shadow: var(--inputs-shadow);
}
`;

