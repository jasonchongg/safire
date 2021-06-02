import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import React from 'react';
import { WalletProvider } from './contexts/wallet';
import { ConnectionProvider } from './contexts/connection';
import { AccountsProvider } from './contexts/accounts';
import { MarketProvider } from './contexts/market';
import { AppLayout } from './components/Layout';

import HomePage from './components/HomePage';
import Listing from './components/Listing';
import Minting from './components/Minting';
import Faq from './components/Faq';

import Navbar from './components/shared/NavBar';
import Footer from './components/shared/Footer';
import PageWrapper from './components/shared/PageWrapper';

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <ConnectionProvider>
          <WalletProvider>
            <AccountsProvider>
              <MarketProvider>
                <AppLayout>
                  <Switch>
                    <Route exact path='/' children={HomePage} />
                    <Route path='/faq' children={Faq} />
                    <Route path='/listing/:id' children={Listing} />
                    <Route path='/minting' children={Minting} />
                  </Switch>
                </AppLayout>
              </MarketProvider>
            </AccountsProvider>
          </WalletProvider>
        </ConnectionProvider>
      </BrowserRouter>
    </>
  );
}
