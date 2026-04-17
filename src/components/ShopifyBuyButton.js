import React, { useEffect, useRef } from 'react';

const SDK_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
const SHOP_DOMAIN = 't1h94n-18.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = '542912ce1b2b23b09a1a78a8cf823c9a';

const componentOptions = {
  product: {
    styles: {
      product: {
        '@media (min-width: 601px)': {
          'max-width': '100%',
          'margin-left': '0',
          'margin-bottom': '50px',
        },
        'text-align': 'left',
      },
      title: { 'font-size': '26px' },
      button: {
        'font-weight': 'bold',
        'font-size': '16px',
        'padding-top': '16px',
        'padding-bottom': '16px',
        ':hover': { 'background-color': '#367f0f' },
        'background-color': '#3c8d11',
        ':focus': { 'background-color': '#367f0f' },
        'border-radius': '16px',
        'padding-left': '35px',
        'padding-right': '35px',
      },
      quantityInput: {
        'font-size': '16px',
        'padding-top': '16px',
        'padding-bottom': '16px',
      },
      price: { 'font-size': '18px' },
      compareAt: { 'font-size': '15.299999999999999px' },
      unitPrice: { 'font-size': '15.299999999999999px' },
    },
    layout: 'horizontal',
    contents: { img: false, imgWithCarousel: true, description: true },
    width: '100%',
    text: { button: 'Add to cart' },
  },
  productSet: {
    styles: { products: { '@media (min-width: 601px)': { 'margin-left': '-20px' } } },
  },
  modalProduct: {
    contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
    styles: {
      product: {
        '@media (min-width: 601px)': {
          'max-width': '100%',
          'margin-left': '0px',
          'margin-bottom': '0px',
        },
      },
      button: {
        'font-weight': 'bold',
        'font-size': '16px',
        'padding-top': '16px',
        'padding-bottom': '16px',
        ':hover': { 'background-color': '#367f0f' },
        'background-color': '#3c8d11',
        ':focus': { 'background-color': '#367f0f' },
        'border-radius': '16px',
        'padding-left': '35px',
        'padding-right': '35px',
      },
      quantityInput: {
        'font-size': '16px',
        'padding-top': '16px',
        'padding-bottom': '16px',
      },
      title: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'bold',
        'font-size': '26px',
        color: '#4c4c4c',
      },
      price: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'normal',
        'font-size': '18px',
        color: '#4c4c4c',
      },
      compareAt: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'normal',
        'font-size': '15.299999999999999px',
        color: '#4c4c4c',
      },
      unitPrice: {
        'font-family': 'Helvetica Neue, sans-serif',
        'font-weight': 'normal',
        'font-size': '15.299999999999999px',
        color: '#4c4c4c',
      },
    },
    text: { button: 'Add to cart' },
  },
  option: {},
  cart: {
    styles: {
      button: {
        'font-weight': 'bold',
        'font-size': '16px',
        'padding-top': '16px',
        'padding-bottom': '16px',
        ':hover': { 'background-color': '#367f0f' },
        'background-color': '#3c8d11',
        ':focus': { 'background-color': '#367f0f' },
        'border-radius': '16px',
      },
    },
    text: { total: 'Subtotal', button: 'Checkout' },
  },
  toggle: {
    styles: {
      toggle: {
        'font-weight': 'bold',
        'background-color': '#3c8d11',
        ':hover': { 'background-color': '#367f0f' },
        ':focus': { 'background-color': '#367f0f' },
      },
      count: { 'font-size': '16px' },
    },
  },
};

let sdkPromise = null;
const loadSdk = () => {
  if (window.ShopifyBuy && window.ShopifyBuy.UI) return Promise.resolve(window.ShopifyBuy);
  if (sdkPromise) return sdkPromise;
  sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = SDK_URL;
    script.onload = () => resolve(window.ShopifyBuy);
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return sdkPromise;
};

const ShopifyBuyButton = ({ productId }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadSdk().then((ShopifyBuy) => {
      if (cancelled || !nodeRef.current) return;
      const client = ShopifyBuy.buildClient({
        domain: SHOP_DOMAIN,
        storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
      });
      ShopifyBuy.UI.onReady(client).then((ui) => {
        if (cancelled || !nodeRef.current) return;
        nodeRef.current.innerHTML = '';
        ui.createComponent('product', {
          id: productId,
          node: nodeRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: componentOptions,
        });
      });
    });
    return () => {
      cancelled = true;
    };
  }, [productId]);

  return <div ref={nodeRef} />;
};

export default ShopifyBuyButton;
