# Sol Stat

Sol Stat is a simple, intuitive dashboard built in **Next.js** and styled using **Tailwind CSS** with **DaisyUI** components. It provides real-time charting data for Solana (SOL) using the CoinGecko API, presented through **ApexCharts**. The design emphasizes ease of use and navigation, with a focus on providing users with clear and straightforward access to the data they need.

## Design Decisions

The design was intentionally kept simple to make the user experience straightforward and intuitive. Inspiration was drawn from the MetaDAO website, which influenced the minimalistic and easy-to-navigate interface.

Some key design decisions include:

- **Clarity and Simplicity**: The goal was to display information cleanly and ensure that users could easily navigate between features without confusion.
- **Performance Focus**: Since the project is built on Next.js, which offers excellent performance optimization, this structure was chosen to keep the app fast and responsive.
- **Tailwind CSS & DaisyUI**: Tailwind CSS was used for flexibility in styling, and DaisyUI provided pre-built, easily customizable UI components to quickly build out the interface.

## Assumptions

- The project assumes that Solana (SOL) is the primary cryptocurrency being tracked.
- It was assumed that CoinGecko would be used as the API source for data, but in the future, integration with Solana RPC could provide a more decentralized and direct data feed.
- User interactions, such as commenting, are currently simple and have not yet been tied to specific user accounts or wallets.

## Potential Future Features

- **Commenting with Wallet Integration**: A key improvement would be implementing a messaging or commenting feature that requires users to connect their Solana wallet. Comments would be linked to the wallet, adding an extra layer of interaction and trust to the platform.
- **Multi-Coin Selection**: Adding a dropdown or search bar allowing users to check the status of other cryptocurrencies beyond Solana.
- **Direct Solana RPC Integration**: For more accuracy and control, I would explore integrating directly with the Solana RPC for real-time Solana blockchain data, instead of relying on CoinGecko.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Before starting the project, make sure you have [Node.js](https://nodejs.org/) installed.

### Setup Instructions

1. Clone the repository and navigate into the project folder.
2. Install the project dependencies using:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root of the project and include the following environment variables:

   ```
   NEXT_PUBLIC_COIN_GECKO_API_KEY=your_api_key
   NEXT_PUBLIC_COIN_GECKO_API_URL=https://api.coingecko.com/api/v3
   ```

   You'll need to get an API key from CoinGecko to access their data.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

## Technologies Used

- **Next.js**: React framework for server-rendered apps
- **Tailwind CSS**: For rapid UI development with utility-first CSS
- **DaisyUI**: A Tailwind CSS plugin for pre-built UI components
- **CoinGecko API**: For pulling cryptocurrency market data
- **ApexCharts**: Used for creating dynamic charts with real-time data
- **SWR**: For efficient data fetching using the `useSWR` hook
- **React Icons**: Provides a large collection of SVG icons as React components
- **TypeScript**: For type-safe development and fewer runtime errors

## License

This project is licensed under the MIT License.
